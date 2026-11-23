import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getContentKey() {
  return ['content'] as const
}

export function getFeedKey() {
  return ['feed'] as const
}

export function getLoggedoutKey() {
  return ['loggedout'] as const
}

export function getLoginKey() {
  return ['login'] as const
}

export function getLogoutKey() {
  return ['logout'] as const
}

export function getPingKey() {
  return ['ping'] as const
}

export function getResetPasswordKey() {
  return ['reset-password'] as const
}

export function getPathKey() {
  return ['{path}'] as const
}

export function getApiQueryKey() {
  return ['api', '/api'] as const
}

export function getApiQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiQueryKey>
  >({
    queryKey: getApiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getApiQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLoginSsoQueryKey(args: InferRequestType<typeof client.login.sso.$get>) {
  return ['login', '/login/sso', args] as const
}

export function getLoginSsoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.sso.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.login.sso.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.sso.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoginSsoQueryKey>
  >({
    queryKey: getLoginSsoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.login.sso.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLoginSso<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.sso.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.login.sso.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.sso.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getLoginSsoQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLoginSsoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLoginQueryKey() {
  return ['login', '/login'] as const
}

export function getLoginQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoginQueryKey>
  >({
    queryKey: getLoginQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.login.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLogin<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getLoginQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLoginQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostLoginMutationKey() {
  return ['login', '/login', 'POST'] as const
}

export function getPostLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.login.$post>) {
      return parseResponse(client.login.$post(args, options))
    },
  })
}

export function createPostLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
          TError,
          InferRequestType<typeof client.login.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostResetPasswordRequestMutationKey() {
  return ['reset-password', '/reset-password/request', 'POST'] as const
}

export function getPostResetPasswordRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['reset-password']['request']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostResetPasswordRequestMutationKey(),
    async mutationFn() {
      return parseResponse(client['reset-password'].request.$post(undefined, options))
    },
  })
}

export function createPostResetPasswordRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['reset-password']['request']['$post']>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResetPasswordRequestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostResetPasswordMutationKey() {
  return ['reset-password', '/reset-password', 'POST'] as const
}

export function getPostResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reset-password']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['reset-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResetPasswordMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['reset-password']['$post']>) {
      return parseResponse(client['reset-password'].$post(args, options))
    },
  })
}

export function createPostResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['reset-password']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['reset-password']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResetPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLogoutQueryKey() {
  return ['logout', '/logout'] as const
}

export function getLogoutQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogoutQueryKey>
  >({
    queryKey: getLogoutQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.logout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLogout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getLogoutQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogoutQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3AutotaggingQueryKey() {
  return ['api', '/api/v3/autotagging'] as const
}

export function getApiV3AutotaggingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AutotaggingQueryKey>
  >({
    queryKey: getApiV3AutotaggingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.autotagging.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3Autotagging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3AutotaggingQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3AutotaggingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3AutotaggingMutationKey() {
  return ['api', '/api/v3/autotagging', 'POST'] as const
}

export function getPostApiV3AutotaggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.autotagging.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AutotaggingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.autotagging.$post>) {
      return parseResponse(client.api.v3.autotagging.$post(args, options))
    },
  })
}

export function createPostApiV3Autotagging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.autotagging.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AutotaggingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3AutotaggingIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.autotagging)[':id']['$get']>,
) {
  return ['api', '/api/v3/autotagging/:id', args] as const
}

export function getApiV3AutotaggingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.autotagging)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AutotaggingIdQueryKey>
  >({
    queryKey: getApiV3AutotaggingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.autotagging[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AutotaggingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.autotagging)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3AutotaggingIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3AutotaggingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3AutotaggingIdMutationKey() {
  return ['api', '/api/v3/autotagging/:id', 'PUT'] as const
}

export function getPutApiV3AutotaggingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.autotagging)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3AutotaggingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.autotagging)[':id']['$put']>) {
      return parseResponse(client.api.v3.autotagging[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3AutotaggingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.autotagging)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3AutotaggingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3AutotaggingIdMutationKey() {
  return ['api', '/api/v3/autotagging/:id', 'DELETE'] as const
}

export function getDeleteApiV3AutotaggingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.autotagging)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AutotaggingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.autotagging)[':id']['$delete']>) {
      return parseResponse(client.api.v3.autotagging[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3AutotaggingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.autotagging)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3AutotaggingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3AutotaggingSchemaQueryKey() {
  return ['api', '/api/v3/autotagging/schema'] as const
}

export function getApiV3AutotaggingSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AutotaggingSchemaQueryKey>
  >({
    queryKey: getApiV3AutotaggingSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.autotagging.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AutotaggingSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.autotagging.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3AutotaggingSchemaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3AutotaggingSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3SystemBackupQueryKey() {
  return ['api', '/api/v3/system/backup'] as const
}

export function getApiV3SystemBackupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.backup.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.backup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemBackupQueryKey>
  >({
    queryKey: getApiV3SystemBackupQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.system.backup.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3SystemBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.backup.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3SystemBackupQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3SystemBackupQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiV3SystemBackupIdMutationKey() {
  return ['api', '/api/v3/system/backup/:id', 'DELETE'] as const
}

export function getDeleteApiV3SystemBackupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.system.backup)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.system.backup)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3SystemBackupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.system.backup)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.system.backup[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3SystemBackupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.system.backup)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.system.backup)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3SystemBackupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV3SystemBackupRestoreIdMutationKey() {
  return ['api', '/api/v3/system/backup/restore/:id', 'POST'] as const
}

export function getPostApiV3SystemBackupRestoreIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.system.backup.restore)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.system.backup.restore)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SystemBackupRestoreIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.system.backup.restore)[':id']['$post']>,
    ) {
      return parseResponse(client.api.v3.system.backup.restore[':id'].$post(args, options))
    },
  })
}

export function createPostApiV3SystemBackupRestoreId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.system.backup.restore)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.system.backup.restore)[':id']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3SystemBackupRestoreIdMutationOptions<
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

export function getPostApiV3SystemBackupRestoreUploadMutationKey() {
  return ['api', '/api/v3/system/backup/restore/upload', 'POST'] as const
}

export function getPostApiV3SystemBackupRestoreUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v3.system.backup.restore.upload.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SystemBackupRestoreUploadMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.system.backup.restore.upload.$post(undefined, options))
    },
  })
}

export function createPostApiV3SystemBackupRestoreUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.system.backup.restore.upload.$post>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3SystemBackupRestoreUploadMutationOptions<
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

export function getApiV3BlocklistQueryKey(
  args: InferRequestType<typeof client.api.v3.blocklist.$get>,
) {
  return ['api', '/api/v3/blocklist', args] as const
}

export function getApiV3BlocklistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.blocklist.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3BlocklistQueryKey>
  >({
    queryKey: getApiV3BlocklistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.blocklist.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Blocklist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.blocklist.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3BlocklistQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3BlocklistQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiV3BlocklistIdMutationKey() {
  return ['api', '/api/v3/blocklist/:id', 'DELETE'] as const
}

export function getDeleteApiV3BlocklistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.blocklist)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.blocklist)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3BlocklistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.blocklist)[':id']['$delete']>) {
      return parseResponse(client.api.v3.blocklist[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3BlocklistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.blocklist)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.blocklist)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3BlocklistIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3BlocklistBulkMutationKey() {
  return ['api', '/api/v3/blocklist/bulk', 'DELETE'] as const
}

export function getDeleteApiV3BlocklistBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.blocklist.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3BlocklistBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.blocklist.bulk.$delete>) {
      return parseResponse(client.api.v3.blocklist.bulk.$delete(args, options))
    },
  })
}

export function createDeleteApiV3BlocklistBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.bulk.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.blocklist.bulk.$delete>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3BlocklistBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3CalendarQueryKey(
  args: InferRequestType<typeof client.api.v3.calendar.$get>,
) {
  return ['api', '/api/v3/calendar', args] as const
}

export function getApiV3CalendarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.calendar.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.calendar.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.calendar.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CalendarQueryKey>
  >({
    queryKey: getApiV3CalendarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.calendar.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Calendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.calendar.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.calendar.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3CalendarQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3CalendarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3CalendarIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.calendar)[':id']['$get']>,
) {
  return ['api', '/api/v3/calendar/:id', args] as const
}

export function getApiV3CalendarIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.calendar)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.calendar)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.calendar)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CalendarIdQueryKey>
  >({
    queryKey: getApiV3CalendarIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.calendar[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3CalendarId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.calendar)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.calendar)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.calendar)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3CalendarIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3CalendarIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFeedV3CalendarSonarrIcsQueryKey(
  args: InferRequestType<(typeof client.feed.v3.calendar)['sonarr.ics']['$get']>,
) {
  return ['feed', '/feed/v3/calendar/sonarr.ics', args] as const
}

export function getFeedV3CalendarSonarrIcsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feed.v3.calendar)['sonarr.ics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.feed.v3.calendar)['sonarr.ics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.feed.v3.calendar)['sonarr.ics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedV3CalendarSonarrIcsQueryKey>
  >({
    queryKey: getFeedV3CalendarSonarrIcsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feed.v3.calendar['sonarr.ics'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFeedV3CalendarSonarrIcs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feed.v3.calendar)['sonarr.ics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.feed.v3.calendar)['sonarr.ics']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feed.v3.calendar)['sonarr.ics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFeedV3CalendarSonarrIcsQueryKey>
        >
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
      ...getFeedV3CalendarSonarrIcsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3CommandQueryKey() {
  return ['api', '/api/v3/command'] as const
}

export function getApiV3CommandQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CommandQueryKey>
  >({
    queryKey: getApiV3CommandQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.command.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Command<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3CommandQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3CommandQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3CommandMutationKey() {
  return ['api', '/api/v3/command', 'POST'] as const
}

export function getPostApiV3CommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.command.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3CommandMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.command.$post>) {
      return parseResponse(client.api.v3.command.$post(args, options))
    },
  })
}

export function createPostApiV3Command<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.command.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3CommandMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3CommandIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.command)[':id']['$get']>,
) {
  return ['api', '/api/v3/command/:id', args] as const
}

export function getApiV3CommandIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.command)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CommandIdQueryKey>
  >({
    queryKey: getApiV3CommandIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.command[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3CommandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.command)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3CommandIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3CommandIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiV3CommandIdMutationKey() {
  return ['api', '/api/v3/command/:id', 'DELETE'] as const
}

export function getDeleteApiV3CommandIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.command)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3CommandIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.command)[':id']['$delete']>) {
      return parseResponse(client.api.v3.command[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3CommandId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.command)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3CommandIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3CustomfilterQueryKey() {
  return ['api', '/api/v3/customfilter'] as const
}

export function getApiV3CustomfilterQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CustomfilterQueryKey>
  >({
    queryKey: getApiV3CustomfilterQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.customfilter.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3Customfilter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3CustomfilterQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3CustomfilterQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3CustomfilterMutationKey() {
  return ['api', '/api/v3/customfilter', 'POST'] as const
}

export function getPostApiV3CustomfilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.customfilter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3CustomfilterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.customfilter.$post>) {
      return parseResponse(client.api.v3.customfilter.$post(args, options))
    },
  })
}

export function createPostApiV3Customfilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.customfilter.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3CustomfilterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3CustomfilterIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.customfilter)[':id']['$get']>,
) {
  return ['api', '/api/v3/customfilter/:id', args] as const
}

export function getApiV3CustomfilterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.customfilter)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CustomfilterIdQueryKey>
  >({
    queryKey: getApiV3CustomfilterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.customfilter[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3CustomfilterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.customfilter)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3CustomfilterIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3CustomfilterIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3CustomfilterIdMutationKey() {
  return ['api', '/api/v3/customfilter/:id', 'PUT'] as const
}

export function getPutApiV3CustomfilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.customfilter)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3CustomfilterIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.customfilter)[':id']['$put']>) {
      return parseResponse(client.api.v3.customfilter[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3CustomfilterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.customfilter)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3CustomfilterIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3CustomfilterIdMutationKey() {
  return ['api', '/api/v3/customfilter/:id', 'DELETE'] as const
}

export function getDeleteApiV3CustomfilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.customfilter)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3CustomfilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.customfilter)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.customfilter[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3CustomfilterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.customfilter)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3CustomfilterIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3CustomformatQueryKey() {
  return ['api', '/api/v3/customformat'] as const
}

export function getApiV3CustomformatQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CustomformatQueryKey>
  >({
    queryKey: getApiV3CustomformatQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.customformat.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3Customformat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3CustomformatQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3CustomformatQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3CustomformatMutationKey() {
  return ['api', '/api/v3/customformat', 'POST'] as const
}

export function getPostApiV3CustomformatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.customformat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3CustomformatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.customformat.$post>) {
      return parseResponse(client.api.v3.customformat.$post(args, options))
    },
  })
}

export function createPostApiV3Customformat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.customformat.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3CustomformatMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3CustomformatIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.customformat)[':id']['$get']>,
) {
  return ['api', '/api/v3/customformat/:id', args] as const
}

export function getApiV3CustomformatIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.customformat)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CustomformatIdQueryKey>
  >({
    queryKey: getApiV3CustomformatIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.customformat[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3CustomformatId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.customformat)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3CustomformatIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3CustomformatIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3CustomformatIdMutationKey() {
  return ['api', '/api/v3/customformat/:id', 'PUT'] as const
}

export function getPutApiV3CustomformatIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.customformat)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3CustomformatIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.customformat)[':id']['$put']>) {
      return parseResponse(client.api.v3.customformat[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3CustomformatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.customformat)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3CustomformatIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3CustomformatIdMutationKey() {
  return ['api', '/api/v3/customformat/:id', 'DELETE'] as const
}

export function getDeleteApiV3CustomformatIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.customformat)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3CustomformatIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.customformat)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.customformat[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3CustomformatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.customformat)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3CustomformatIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV3CustomformatBulkMutationKey() {
  return ['api', '/api/v3/customformat/bulk', 'PUT'] as const
}

export function getPutApiV3CustomformatBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.customformat.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3CustomformatBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.customformat.bulk.$put>) {
      return parseResponse(client.api.v3.customformat.bulk.$put(args, options))
    },
  })
}

export function createPutApiV3CustomformatBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.customformat.bulk.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3CustomformatBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3CustomformatBulkMutationKey() {
  return ['api', '/api/v3/customformat/bulk', 'DELETE'] as const
}

export function getDeleteApiV3CustomformatBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.customformat.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3CustomformatBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.customformat.bulk.$delete>) {
      return parseResponse(client.api.v3.customformat.bulk.$delete(args, options))
    },
  })
}

export function createDeleteApiV3CustomformatBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.customformat.bulk.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.customformat.bulk.$delete>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3CustomformatBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3CustomformatSchemaQueryKey() {
  return ['api', '/api/v3/customformat/schema'] as const
}

export function getApiV3CustomformatSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CustomformatSchemaQueryKey>
  >({
    queryKey: getApiV3CustomformatSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.customformat.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3CustomformatSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.customformat.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3CustomformatSchemaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3CustomformatSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3WantedCutoffQueryKey(
  args: InferRequestType<typeof client.api.v3.wanted.cutoff.$get>,
) {
  return ['api', '/api/v3/wanted/cutoff', args] as const
}

export function getApiV3WantedCutoffQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.cutoff.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.wanted.cutoff.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.cutoff.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3WantedCutoffQueryKey>
  >({
    queryKey: getApiV3WantedCutoffQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.wanted.cutoff.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3WantedCutoff<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.cutoff.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.wanted.cutoff.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.cutoff.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3WantedCutoffQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3WantedCutoffQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3WantedCutoffIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.wanted.cutoff)[':id']['$get']>,
) {
  return ['api', '/api/v3/wanted/cutoff/:id', args] as const
}

export function getApiV3WantedCutoffIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.wanted.cutoff)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.wanted.cutoff)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.wanted.cutoff)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3WantedCutoffIdQueryKey>
  >({
    queryKey: getApiV3WantedCutoffIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.wanted.cutoff[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3WantedCutoffId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.wanted.cutoff)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.wanted.cutoff)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.wanted.cutoff)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3WantedCutoffIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3WantedCutoffIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3DelayprofileQueryKey() {
  return ['api', '/api/v3/delayprofile'] as const
}

export function getApiV3DelayprofileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DelayprofileQueryKey>
  >({
    queryKey: getApiV3DelayprofileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.delayprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3Delayprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3DelayprofileQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3DelayprofileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3DelayprofileMutationKey() {
  return ['api', '/api/v3/delayprofile', 'POST'] as const
}

export function getPostApiV3DelayprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.delayprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3DelayprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.delayprofile.$post>) {
      return parseResponse(client.api.v3.delayprofile.$post(args, options))
    },
  })
}

export function createPostApiV3Delayprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.delayprofile.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3DelayprofileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3DelayprofileIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$get']>,
) {
  return ['api', '/api/v3/delayprofile/:id', args] as const
}

export function getApiV3DelayprofileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DelayprofileIdQueryKey>
  >({
    queryKey: getApiV3DelayprofileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.delayprofile[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3DelayprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3DelayprofileIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3DelayprofileIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3DelayprofileIdMutationKey() {
  return ['api', '/api/v3/delayprofile/:id', 'PUT'] as const
}

export function getPutApiV3DelayprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3DelayprofileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$put']>) {
      return parseResponse(client.api.v3.delayprofile[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3DelayprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3DelayprofileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3DelayprofileIdMutationKey() {
  return ['api', '/api/v3/delayprofile/:id', 'DELETE'] as const
}

export function getDeleteApiV3DelayprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3DelayprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.delayprofile[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3DelayprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3DelayprofileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV3DelayprofileReorderIdMutationKey() {
  return ['api', '/api/v3/delayprofile/reorder/:id', 'PUT'] as const
}

export function getPutApiV3DelayprofileReorderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.delayprofile.reorder)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.delayprofile.reorder)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3DelayprofileReorderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.delayprofile.reorder)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.delayprofile.reorder[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3DelayprofileReorderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.delayprofile.reorder)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.delayprofile.reorder)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3DelayprofileReorderIdMutationOptions<
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

export function getApiV3DiskspaceQueryKey() {
  return ['api', '/api/v3/diskspace'] as const
}

export function getApiV3DiskspaceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.diskspace.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.diskspace.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DiskspaceQueryKey>
  >({
    queryKey: getApiV3DiskspaceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.diskspace.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Diskspace<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.diskspace.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.diskspace.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3DiskspaceQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3DiskspaceQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3DownloadclientQueryKey() {
  return ['api', '/api/v3/downloadclient'] as const
}

export function getApiV3DownloadclientQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DownloadclientQueryKey>
  >({
    queryKey: getApiV3DownloadclientQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.downloadclient.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3Downloadclient<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3DownloadclientQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3DownloadclientQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3DownloadclientMutationKey() {
  return ['api', '/api/v3/downloadclient', 'POST'] as const
}

export function getPostApiV3DownloadclientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.downloadclient.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3DownloadclientMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.downloadclient.$post>) {
      return parseResponse(client.api.v3.downloadclient.$post(args, options))
    },
  })
}

export function createPostApiV3Downloadclient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.downloadclient.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3DownloadclientMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3DownloadclientIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$get']>,
) {
  return ['api', '/api/v3/downloadclient/:id', args] as const
}

export function getApiV3DownloadclientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DownloadclientIdQueryKey>
  >({
    queryKey: getApiV3DownloadclientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.downloadclient[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3DownloadclientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3DownloadclientIdQueryKey>
        >
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
      ...getApiV3DownloadclientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV3DownloadclientIdMutationKey() {
  return ['api', '/api/v3/downloadclient/:id', 'PUT'] as const
}

export function getPutApiV3DownloadclientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3DownloadclientIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$put']>) {
      return parseResponse(client.api.v3.downloadclient[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3DownloadclientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3DownloadclientIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3DownloadclientIdMutationKey() {
  return ['api', '/api/v3/downloadclient/:id', 'DELETE'] as const
}

export function getDeleteApiV3DownloadclientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3DownloadclientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.downloadclient[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3DownloadclientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3DownloadclientIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV3DownloadclientBulkMutationKey() {
  return ['api', '/api/v3/downloadclient/bulk', 'PUT'] as const
}

export function getPutApiV3DownloadclientBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.downloadclient.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3DownloadclientBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.downloadclient.bulk.$put>) {
      return parseResponse(client.api.v3.downloadclient.bulk.$put(args, options))
    },
  })
}

export function createPutApiV3DownloadclientBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.downloadclient.bulk.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.downloadclient.bulk.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3DownloadclientBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3DownloadclientBulkMutationKey() {
  return ['api', '/api/v3/downloadclient/bulk', 'DELETE'] as const
}

export function getDeleteApiV3DownloadclientBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.downloadclient.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3DownloadclientBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.downloadclient.bulk.$delete>) {
      return parseResponse(client.api.v3.downloadclient.bulk.$delete(args, options))
    },
  })
}

export function createDeleteApiV3DownloadclientBulk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.downloadclient.bulk.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.downloadclient.bulk.$delete>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3DownloadclientBulkMutationOptions<
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

export function getApiV3DownloadclientSchemaQueryKey() {
  return ['api', '/api/v3/downloadclient/schema'] as const
}

export function getApiV3DownloadclientSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DownloadclientSchemaQueryKey>
  >({
    queryKey: getApiV3DownloadclientSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.downloadclient.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3DownloadclientSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.downloadclient.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3DownloadclientSchemaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3DownloadclientSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3DownloadclientTestMutationKey() {
  return ['api', '/api/v3/downloadclient/test', 'POST'] as const
}

export function getPostApiV3DownloadclientTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.downloadclient.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3DownloadclientTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.downloadclient.test.$post>) {
      return parseResponse(client.api.v3.downloadclient.test.$post(args, options))
    },
  })
}

export function createPostApiV3DownloadclientTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.downloadclient.test.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.downloadclient.test.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3DownloadclientTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV3DownloadclientTestallMutationKey() {
  return ['api', '/api/v3/downloadclient/testall', 'POST'] as const
}

export function getPostApiV3DownloadclientTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3DownloadclientTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.downloadclient.testall.$post(undefined, options))
    },
  })
}

export function createPostApiV3DownloadclientTestall<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.downloadclient.testall.$post>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3DownloadclientTestallMutationOptions<
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

export function getPostApiV3DownloadclientActionNameMutationKey() {
  return ['api', '/api/v3/downloadclient/action/:name', 'POST'] as const
}

export function getPostApiV3DownloadclientActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.downloadclient.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.downloadclient.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3DownloadclientActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.downloadclient.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v3.downloadclient.action[':name'].$post(args, options))
    },
  })
}

export function createPostApiV3DownloadclientActionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.downloadclient.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.downloadclient.action)[':name']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3DownloadclientActionNameMutationOptions<
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

export function getApiV3ConfigDownloadclientQueryKey() {
  return ['api', '/api/v3/config/downloadclient'] as const
}

export function getApiV3ConfigDownloadclientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.downloadclient.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.downloadclient.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigDownloadclientQueryKey>
  >({
    queryKey: getApiV3ConfigDownloadclientQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.downloadclient.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ConfigDownloadclient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.downloadclient.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.config.downloadclient.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ConfigDownloadclientQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ConfigDownloadclientQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3ConfigDownloadclientIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>,
) {
  return ['api', '/api/v3/config/downloadclient/:id', args] as const
}

export function getApiV3ConfigDownloadclientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigDownloadclientIdQueryKey>
  >({
    queryKey: getApiV3ConfigDownloadclientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.downloadclient[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ConfigDownloadclientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ConfigDownloadclientIdQueryKey>
        >
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
      ...getApiV3ConfigDownloadclientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV3ConfigDownloadclientIdMutationKey() {
  return ['api', '/api/v3/config/downloadclient/:id', 'PUT'] as const
}

export function getPutApiV3ConfigDownloadclientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigDownloadclientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.config.downloadclient[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3ConfigDownloadclientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3ConfigDownloadclientIdMutationOptions<
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

export function getApiV3EpisodeQueryKey(args: InferRequestType<typeof client.api.v3.episode.$get>) {
  return ['api', '/api/v3/episode', args] as const
}

export function getApiV3EpisodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episode.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.episode.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episode.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3EpisodeQueryKey>
  >({
    queryKey: getApiV3EpisodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.episode.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Episode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.episode.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episode.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3EpisodeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3EpisodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3EpisodeIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.episode)[':id']['$get']>,
) {
  return ['api', '/api/v3/episode/:id', args] as const
}

export function getApiV3EpisodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.episode)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.episode)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.episode)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3EpisodeIdQueryKey>
  >({
    queryKey: getApiV3EpisodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.episode[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3EpisodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.episode)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.episode)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.episode)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3EpisodeIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3EpisodeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3EpisodeIdMutationKey() {
  return ['api', '/api/v3/episode/:id', 'PUT'] as const
}

export function getPutApiV3EpisodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.episode)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.episode)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3EpisodeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.episode)[':id']['$put']>) {
      return parseResponse(client.api.v3.episode[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3EpisodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.episode)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.episode)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3EpisodeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV3EpisodeMonitorMutationKey() {
  return ['api', '/api/v3/episode/monitor', 'PUT'] as const
}

export function getPutApiV3EpisodeMonitorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episode.monitor.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.episode.monitor.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3EpisodeMonitorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.episode.monitor.$put>) {
      return parseResponse(client.api.v3.episode.monitor.$put(args, options))
    },
  })
}

export function createPutApiV3EpisodeMonitor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episode.monitor.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.episode.monitor.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3EpisodeMonitorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3EpisodefileQueryKey(
  args: InferRequestType<typeof client.api.v3.episodefile.$get>,
) {
  return ['api', '/api/v3/episodefile', args] as const
}

export function getApiV3EpisodefileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episodefile.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.episodefile.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episodefile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3EpisodefileQueryKey>
  >({
    queryKey: getApiV3EpisodefileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.episodefile.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Episodefile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episodefile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.episodefile.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episodefile.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3EpisodefileQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3EpisodefileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3EpisodefileIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.episodefile)[':id']['$get']>,
) {
  return ['api', '/api/v3/episodefile/:id', args] as const
}

export function getApiV3EpisodefileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.episodefile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.episodefile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.episodefile)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3EpisodefileIdQueryKey>
  >({
    queryKey: getApiV3EpisodefileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.episodefile[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3EpisodefileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.episodefile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.episodefile)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.episodefile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3EpisodefileIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3EpisodefileIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3EpisodefileIdMutationKey() {
  return ['api', '/api/v3/episodefile/:id', 'PUT'] as const
}

export function getPutApiV3EpisodefileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.episodefile)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.episodefile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3EpisodefileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.episodefile)[':id']['$put']>) {
      return parseResponse(client.api.v3.episodefile[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3EpisodefileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.episodefile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.episodefile)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3EpisodefileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3EpisodefileIdMutationKey() {
  return ['api', '/api/v3/episodefile/:id', 'DELETE'] as const
}

export function getDeleteApiV3EpisodefileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.episodefile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.episodefile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3EpisodefileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.episodefile)[':id']['$delete']>) {
      return parseResponse(client.api.v3.episodefile[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3EpisodefileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.episodefile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.episodefile)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3EpisodefileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV3EpisodefileEditorMutationKey() {
  return ['api', '/api/v3/episodefile/editor', 'PUT'] as const
}

export function getPutApiV3EpisodefileEditorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episodefile.editor.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.episodefile.editor.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3EpisodefileEditorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.episodefile.editor.$put>) {
      return parseResponse(client.api.v3.episodefile.editor.$put(args, options))
    },
  })
}

export function createPutApiV3EpisodefileEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.episodefile.editor.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.episodefile.editor.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3EpisodefileEditorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV3EpisodefileBulkMutationKey() {
  return ['api', '/api/v3/episodefile/bulk', 'PUT'] as const
}

export function getPutApiV3EpisodefileBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episodefile.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.episodefile.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3EpisodefileBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.episodefile.bulk.$put>) {
      return parseResponse(client.api.v3.episodefile.bulk.$put(args, options))
    },
  })
}

export function createPutApiV3EpisodefileBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episodefile.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.episodefile.bulk.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3EpisodefileBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3EpisodefileBulkMutationKey() {
  return ['api', '/api/v3/episodefile/bulk', 'DELETE'] as const
}

export function getDeleteApiV3EpisodefileBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episodefile.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.episodefile.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3EpisodefileBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.episodefile.bulk.$delete>) {
      return parseResponse(client.api.v3.episodefile.bulk.$delete(args, options))
    },
  })
}

export function createDeleteApiV3EpisodefileBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.episodefile.bulk.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.episodefile.bulk.$delete>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3EpisodefileBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3FilesystemQueryKey(
  args: InferRequestType<typeof client.api.v3.filesystem.$get>,
) {
  return ['api', '/api/v3/filesystem', args] as const
}

export function getApiV3FilesystemQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.filesystem.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3FilesystemQueryKey>
  >({
    queryKey: getApiV3FilesystemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.filesystem.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Filesystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.filesystem.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3FilesystemQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3FilesystemQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3FilesystemTypeQueryKey(
  args: InferRequestType<typeof client.api.v3.filesystem.type.$get>,
) {
  return ['api', '/api/v3/filesystem/type', args] as const
}

export function getApiV3FilesystemTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.type.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.filesystem.type.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.type.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3FilesystemTypeQueryKey>
  >({
    queryKey: getApiV3FilesystemTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.filesystem.type.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3FilesystemType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.type.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.filesystem.type.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.type.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3FilesystemTypeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3FilesystemTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3FilesystemMediafilesQueryKey(
  args: InferRequestType<typeof client.api.v3.filesystem.mediafiles.$get>,
) {
  return ['api', '/api/v3/filesystem/mediafiles', args] as const
}

export function getApiV3FilesystemMediafilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.mediafiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.filesystem.mediafiles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.mediafiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3FilesystemMediafilesQueryKey>
  >({
    queryKey: getApiV3FilesystemMediafilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.filesystem.mediafiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3FilesystemMediafiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.mediafiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.filesystem.mediafiles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.filesystem.mediafiles.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3FilesystemMediafilesQueryKey>
        >
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
      ...getApiV3FilesystemMediafilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3HealthQueryKey() {
  return ['api', '/api/v3/health'] as const
}

export function getApiV3HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3HealthQueryKey>
  >({
    queryKey: getApiV3HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.health.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3HealthQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3HistoryQueryKey(args: InferRequestType<typeof client.api.v3.history.$get>) {
  return ['api', '/api/v3/history', args] as const
}

export function getApiV3HistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.history.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3HistoryQueryKey>
  >({
    queryKey: getApiV3HistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.history.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3History<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.history.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3HistoryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3HistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3HistorySinceQueryKey(
  args: InferRequestType<typeof client.api.v3.history.since.$get>,
) {
  return ['api', '/api/v3/history/since', args] as const
}

export function getApiV3HistorySinceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.since.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.history.since.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.since.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3HistorySinceQueryKey>
  >({
    queryKey: getApiV3HistorySinceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.history.since.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3HistorySince<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.since.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.history.since.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.since.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3HistorySinceQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3HistorySinceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3HistorySeriesQueryKey(
  args: InferRequestType<typeof client.api.v3.history.series.$get>,
) {
  return ['api', '/api/v3/history/series', args] as const
}

export function getApiV3HistorySeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.history.series.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.series.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3HistorySeriesQueryKey>
  >({
    queryKey: getApiV3HistorySeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.history.series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3HistorySeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.history.series.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.series.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3HistorySeriesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3HistorySeriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3HistoryFailedIdMutationKey() {
  return ['api', '/api/v3/history/failed/:id', 'POST'] as const
}

export function getPostApiV3HistoryFailedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.history.failed)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.history.failed)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3HistoryFailedIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.history.failed)[':id']['$post']>,
    ) {
      return parseResponse(client.api.v3.history.failed[':id'].$post(args, options))
    },
  })
}

export function createPostApiV3HistoryFailedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.history.failed)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.history.failed)[':id']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3HistoryFailedIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3ConfigHostQueryKey() {
  return ['api', '/api/v3/config/host'] as const
}

export function getApiV3ConfigHostQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.host.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.host.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigHostQueryKey>
  >({
    queryKey: getApiV3ConfigHostQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.host.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ConfigHost<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.host.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.host.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ConfigHostQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ConfigHostQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3ConfigHostIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.config.host)[':id']['$get']>,
) {
  return ['api', '/api/v3/config/host/:id', args] as const
}

export function getApiV3ConfigHostIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.host)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigHostIdQueryKey>
  >({
    queryKey: getApiV3ConfigHostIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.host[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ConfigHostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.config.host)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ConfigHostIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ConfigHostIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3ConfigHostIdMutationKey() {
  return ['api', '/api/v3/config/host/:id', 'PUT'] as const
}

export function getPutApiV3ConfigHostIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.host)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigHostIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.config.host)[':id']['$put']>) {
      return parseResponse(client.api.v3.config.host[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3ConfigHostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.config.host)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3ConfigHostIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3ImportlistQueryKey() {
  return ['api', '/api/v3/importlist'] as const
}

export function getApiV3ImportlistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistQueryKey>
  >({
    queryKey: getApiV3ImportlistQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.importlist.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3Importlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ImportlistQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ImportlistQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3ImportlistMutationKey() {
  return ['api', '/api/v3/importlist', 'POST'] as const
}

export function getPostApiV3ImportlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ImportlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.importlist.$post>) {
      return parseResponse(client.api.v3.importlist.$post(args, options))
    },
  })
}

export function createPostApiV3Importlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.importlist.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3ImportlistMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3ImportlistIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.importlist)[':id']['$get']>,
) {
  return ['api', '/api/v3/importlist/:id', args] as const
}

export function getApiV3ImportlistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.importlist)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistIdQueryKey>
  >({
    queryKey: getApiV3ImportlistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.importlist[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ImportlistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.importlist)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ImportlistIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ImportlistIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3ImportlistIdMutationKey() {
  return ['api', '/api/v3/importlist/:id', 'PUT'] as const
}

export function getPutApiV3ImportlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.importlist)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ImportlistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.importlist)[':id']['$put']>) {
      return parseResponse(client.api.v3.importlist[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3ImportlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.importlist)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3ImportlistIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3ImportlistIdMutationKey() {
  return ['api', '/api/v3/importlist/:id', 'DELETE'] as const
}

export function getDeleteApiV3ImportlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.importlist)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ImportlistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.importlist)[':id']['$delete']>) {
      return parseResponse(client.api.v3.importlist[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3ImportlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.importlist)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3ImportlistIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV3ImportlistBulkMutationKey() {
  return ['api', '/api/v3/importlist/bulk', 'PUT'] as const
}

export function getPutApiV3ImportlistBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlist.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ImportlistBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.importlist.bulk.$put>) {
      return parseResponse(client.api.v3.importlist.bulk.$put(args, options))
    },
  })
}

export function createPutApiV3ImportlistBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.importlist.bulk.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3ImportlistBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3ImportlistBulkMutationKey() {
  return ['api', '/api/v3/importlist/bulk', 'DELETE'] as const
}

export function getDeleteApiV3ImportlistBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlist.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ImportlistBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.importlist.bulk.$delete>) {
      return parseResponse(client.api.v3.importlist.bulk.$delete(args, options))
    },
  })
}

export function createDeleteApiV3ImportlistBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.importlist.bulk.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.importlist.bulk.$delete>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3ImportlistBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3ImportlistSchemaQueryKey() {
  return ['api', '/api/v3/importlist/schema'] as const
}

export function getApiV3ImportlistSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistSchemaQueryKey>
  >({
    queryKey: getApiV3ImportlistSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.importlist.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ImportlistSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.schema.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ImportlistSchemaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ImportlistSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3ImportlistTestMutationKey() {
  return ['api', '/api/v3/importlist/test', 'POST'] as const
}

export function getPostApiV3ImportlistTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlist.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ImportlistTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.importlist.test.$post>) {
      return parseResponse(client.api.v3.importlist.test.$post(args, options))
    },
  })
}

export function createPostApiV3ImportlistTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.importlist.test.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3ImportlistTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV3ImportlistTestallMutationKey() {
  return ['api', '/api/v3/importlist/testall', 'POST'] as const
}

export function getPostApiV3ImportlistTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ImportlistTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.importlist.testall.$post(undefined, options))
    },
  })
}

export function createPostApiV3ImportlistTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.importlist.testall.$post>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3ImportlistTestallMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV3ImportlistActionNameMutationKey() {
  return ['api', '/api/v3/importlist/action/:name', 'POST'] as const
}

export function getPostApiV3ImportlistActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.importlist.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.importlist.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ImportlistActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.importlist.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v3.importlist.action[':name'].$post(args, options))
    },
  })
}

export function createPostApiV3ImportlistActionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.importlist.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.importlist.action)[':name']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3ImportlistActionNameMutationOptions<
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

export function getApiV3ConfigImportlistQueryKey() {
  return ['api', '/api/v3/config/importlist'] as const
}

export function getApiV3ConfigImportlistQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.importlist.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.importlist.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigImportlistQueryKey>
  >({
    queryKey: getApiV3ConfigImportlistQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.importlist.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ConfigImportlist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.importlist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.importlist.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ConfigImportlistQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ConfigImportlistQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3ConfigImportlistIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$get']>,
) {
  return ['api', '/api/v3/config/importlist/:id', args] as const
}

export function getApiV3ConfigImportlistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigImportlistIdQueryKey>
  >({
    queryKey: getApiV3ConfigImportlistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.importlist[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ConfigImportlistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ConfigImportlistIdQueryKey>
        >
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
      ...getApiV3ConfigImportlistIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV3ConfigImportlistIdMutationKey() {
  return ['api', '/api/v3/config/importlist/:id', 'PUT'] as const
}

export function getPutApiV3ConfigImportlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigImportlistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.config.importlist[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3ConfigImportlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3ConfigImportlistIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3ImportlistexclusionQueryKey() {
  return ['api', '/api/v3/importlistexclusion'] as const
}

export function getApiV3ImportlistexclusionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlistexclusion.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlistexclusion.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistexclusionQueryKey>
  >({
    queryKey: getApiV3ImportlistexclusionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.importlistexclusion.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3Importlistexclusion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlistexclusion.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.importlistexclusion.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ImportlistexclusionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ImportlistexclusionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3ImportlistexclusionMutationKey() {
  return ['api', '/api/v3/importlistexclusion', 'POST'] as const
}

export function getPostApiV3ImportlistexclusionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlistexclusion.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlistexclusion.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ImportlistexclusionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.importlistexclusion.$post>) {
      return parseResponse(client.api.v3.importlistexclusion.$post(args, options))
    },
  })
}

export function createPostApiV3Importlistexclusion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.importlistexclusion.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.importlistexclusion.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3ImportlistexclusionMutationOptions<
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

export function getApiV3ImportlistexclusionPagedQueryKey(
  args: InferRequestType<typeof client.api.v3.importlistexclusion.paged.$get>,
) {
  return ['api', '/api/v3/importlistexclusion/paged', args] as const
}

export function getApiV3ImportlistexclusionPagedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlistexclusion.paged.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.importlistexclusion.paged.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v3.importlistexclusion.paged.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistexclusionPagedQueryKey>
  >({
    queryKey: getApiV3ImportlistexclusionPagedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.importlistexclusion.paged.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ImportlistexclusionPaged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlistexclusion.paged.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.importlistexclusion.paged.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.importlistexclusion.paged.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ImportlistexclusionPagedQueryKey>
        >
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
      ...getApiV3ImportlistexclusionPagedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3ImportlistexclusionIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$get']>,
) {
  return ['api', '/api/v3/importlistexclusion/:id', args] as const
}

export function getApiV3ImportlistexclusionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.importlistexclusion)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.importlistexclusion)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistexclusionIdQueryKey>
  >({
    queryKey: getApiV3ImportlistexclusionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.importlistexclusion[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ImportlistexclusionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.importlistexclusion)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.importlistexclusion)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ImportlistexclusionIdQueryKey>
        >
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
      ...getApiV3ImportlistexclusionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV3ImportlistexclusionIdMutationKey() {
  return ['api', '/api/v3/importlistexclusion/:id', 'PUT'] as const
}

export function getPutApiV3ImportlistexclusionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.importlistexclusion)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ImportlistexclusionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.importlistexclusion[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3ImportlistexclusionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.importlistexclusion)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3ImportlistexclusionIdMutationOptions<
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

export function getDeleteApiV3ImportlistexclusionIdMutationKey() {
  return ['api', '/api/v3/importlistexclusion/:id', 'DELETE'] as const
}

export function getDeleteApiV3ImportlistexclusionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.importlistexclusion)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ImportlistexclusionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.importlistexclusion[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3ImportlistexclusionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.importlistexclusion)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3ImportlistexclusionIdMutationOptions<
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

export function getDeleteApiV3ImportlistexclusionBulkMutationKey() {
  return ['api', '/api/v3/importlistexclusion/bulk', 'DELETE'] as const
}

export function getDeleteApiV3ImportlistexclusionBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v3.importlistexclusion.bulk.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlistexclusion.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ImportlistexclusionBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v3.importlistexclusion.bulk.$delete>,
    ) {
      return parseResponse(client.api.v3.importlistexclusion.bulk.$delete(args, options))
    },
  })
}

export function createDeleteApiV3ImportlistexclusionBulk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.importlistexclusion.bulk.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.importlistexclusion.bulk.$delete>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3ImportlistexclusionBulkMutationOptions<
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

export function getApiV3IndexerQueryKey() {
  return ['api', '/api/v3/indexer'] as const
}

export function getApiV3IndexerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3IndexerQueryKey>
  >({
    queryKey: getApiV3IndexerQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.indexer.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Indexer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3IndexerQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3IndexerQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3IndexerMutationKey() {
  return ['api', '/api/v3/indexer', 'POST'] as const
}

export function getPostApiV3IndexerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.indexer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3IndexerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.indexer.$post>) {
      return parseResponse(client.api.v3.indexer.$post(args, options))
    },
  })
}

export function createPostApiV3Indexer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.indexer.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3IndexerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3IndexerIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.indexer)[':id']['$get']>,
) {
  return ['api', '/api/v3/indexer/:id', args] as const
}

export function getApiV3IndexerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.indexer)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3IndexerIdQueryKey>
  >({
    queryKey: getApiV3IndexerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.indexer[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3IndexerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.indexer)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3IndexerIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3IndexerIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3IndexerIdMutationKey() {
  return ['api', '/api/v3/indexer/:id', 'PUT'] as const
}

export function getPutApiV3IndexerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.indexer)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3IndexerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.indexer)[':id']['$put']>) {
      return parseResponse(client.api.v3.indexer[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3IndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.indexer)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3IndexerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3IndexerIdMutationKey() {
  return ['api', '/api/v3/indexer/:id', 'DELETE'] as const
}

export function getDeleteApiV3IndexerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.indexer)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3IndexerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.indexer)[':id']['$delete']>) {
      return parseResponse(client.api.v3.indexer[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3IndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.indexer)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3IndexerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV3IndexerBulkMutationKey() {
  return ['api', '/api/v3/indexer/bulk', 'PUT'] as const
}

export function getPutApiV3IndexerBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.bulk.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.indexer.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3IndexerBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.indexer.bulk.$put>) {
      return parseResponse(client.api.v3.indexer.bulk.$put(args, options))
    },
  })
}

export function createPutApiV3IndexerBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.indexer.bulk.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3IndexerBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3IndexerBulkMutationKey() {
  return ['api', '/api/v3/indexer/bulk', 'DELETE'] as const
}

export function getDeleteApiV3IndexerBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.indexer.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3IndexerBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.indexer.bulk.$delete>) {
      return parseResponse(client.api.v3.indexer.bulk.$delete(args, options))
    },
  })
}

export function createDeleteApiV3IndexerBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.bulk.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.indexer.bulk.$delete>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3IndexerBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3IndexerSchemaQueryKey() {
  return ['api', '/api/v3/indexer/schema'] as const
}

export function getApiV3IndexerSchemaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.schema.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3IndexerSchemaQueryKey>
  >({
    queryKey: getApiV3IndexerSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.indexer.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3IndexerSchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.schema.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3IndexerSchemaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3IndexerSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3IndexerTestMutationKey() {
  return ['api', '/api/v3/indexer/test', 'POST'] as const
}

export function getPostApiV3IndexerTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.test.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.indexer.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3IndexerTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.indexer.test.$post>) {
      return parseResponse(client.api.v3.indexer.test.$post(args, options))
    },
  })
}

export function createPostApiV3IndexerTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.indexer.test.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3IndexerTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV3IndexerTestallMutationKey() {
  return ['api', '/api/v3/indexer/testall', 'POST'] as const
}

export function getPostApiV3IndexerTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3IndexerTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.indexer.testall.$post(undefined, options))
    },
  })
}

export function createPostApiV3IndexerTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.testall.$post>>>
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3IndexerTestallMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV3IndexerActionNameMutationKey() {
  return ['api', '/api/v3/indexer/action/:name', 'POST'] as const
}

export function getPostApiV3IndexerActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.indexer.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.indexer.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3IndexerActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.indexer.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v3.indexer.action[':name'].$post(args, options))
    },
  })
}

export function createPostApiV3IndexerActionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.indexer.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.indexer.action)[':name']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3IndexerActionNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3ConfigIndexerQueryKey() {
  return ['api', '/api/v3/config/indexer'] as const
}

export function getApiV3ConfigIndexerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.indexer.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.indexer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigIndexerQueryKey>
  >({
    queryKey: getApiV3ConfigIndexerQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.indexer.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ConfigIndexer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.indexer.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.indexer.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ConfigIndexerQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ConfigIndexerQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3ConfigIndexerIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$get']>,
) {
  return ['api', '/api/v3/config/indexer/:id', args] as const
}

export function getApiV3ConfigIndexerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigIndexerIdQueryKey>
  >({
    queryKey: getApiV3ConfigIndexerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.indexer[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ConfigIndexerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ConfigIndexerIdQueryKey>
        >
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
      ...getApiV3ConfigIndexerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV3ConfigIndexerIdMutationKey() {
  return ['api', '/api/v3/config/indexer/:id', 'PUT'] as const
}

export function getPutApiV3ConfigIndexerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigIndexerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$put']>) {
      return parseResponse(client.api.v3.config.indexer[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3ConfigIndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3ConfigIndexerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3IndexerflagQueryKey() {
  return ['api', '/api/v3/indexerflag'] as const
}

export function getApiV3IndexerflagQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexerflag.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexerflag.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3IndexerflagQueryKey>
  >({
    queryKey: getApiV3IndexerflagQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.indexerflag.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3Indexerflag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexerflag.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexerflag.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3IndexerflagQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3IndexerflagQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3LanguageQueryKey() {
  return ['api', '/api/v3/language'] as const
}

export function getApiV3LanguageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.language.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.language.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LanguageQueryKey>
  >({
    queryKey: getApiV3LanguageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.language.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Language<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.language.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.language.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3LanguageQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3LanguageQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3LanguageIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.language)[':id']['$get']>,
) {
  return ['api', '/api/v3/language/:id', args] as const
}

export function getApiV3LanguageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.language)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.language)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.language)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LanguageIdQueryKey>
  >({
    queryKey: getApiV3LanguageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.language[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3LanguageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.language)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.language)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.language)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3LanguageIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3LanguageIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3LanguageprofileQueryKey() {
  return ['api', '/api/v3/languageprofile'] as const
}

export function getApiV3LanguageprofileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LanguageprofileQueryKey>
  >({
    queryKey: getApiV3LanguageprofileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.languageprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3Languageprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3LanguageprofileQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3LanguageprofileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3LanguageprofileMutationKey() {
  return ['api', '/api/v3/languageprofile', 'POST'] as const
}

export function getPostApiV3LanguageprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.languageprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3LanguageprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.languageprofile.$post>) {
      return parseResponse(client.api.v3.languageprofile.$post(args, options))
    },
  })
}

export function createPostApiV3Languageprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.languageprofile.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3LanguageprofileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3LanguageprofileIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$get']>,
) {
  return ['api', '/api/v3/languageprofile/:id', args] as const
}

export function getApiV3LanguageprofileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.languageprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.languageprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LanguageprofileIdQueryKey>
  >({
    queryKey: getApiV3LanguageprofileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.languageprofile[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3LanguageprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.languageprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.languageprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3LanguageprofileIdQueryKey>
        >
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
      ...getApiV3LanguageprofileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV3LanguageprofileIdMutationKey() {
  return ['api', '/api/v3/languageprofile/:id', 'PUT'] as const
}

export function getPutApiV3LanguageprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.languageprofile)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3LanguageprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.languageprofile[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3LanguageprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.languageprofile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3LanguageprofileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3LanguageprofileIdMutationKey() {
  return ['api', '/api/v3/languageprofile/:id', 'DELETE'] as const
}

export function getDeleteApiV3LanguageprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.languageprofile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3LanguageprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.languageprofile[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3LanguageprofileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.languageprofile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3LanguageprofileIdMutationOptions<
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

export function getApiV3LanguageprofileSchemaQueryKey() {
  return ['api', '/api/v3/languageprofile/schema'] as const
}

export function getApiV3LanguageprofileSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LanguageprofileSchemaQueryKey>
  >({
    queryKey: getApiV3LanguageprofileSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.languageprofile.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3LanguageprofileSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.languageprofile.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3LanguageprofileSchemaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3LanguageprofileSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3LocalizationQueryKey() {
  return ['api', '/api/v3/localization'] as const
}

export function getApiV3LocalizationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LocalizationQueryKey>
  >({
    queryKey: getApiV3LocalizationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.localization.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3Localization<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3LocalizationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3LocalizationQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3LocalizationLanguageQueryKey() {
  return ['api', '/api/v3/localization/language'] as const
}

export function getApiV3LocalizationLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.language.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.language.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LocalizationLanguageQueryKey>
  >({
    queryKey: getApiV3LocalizationLanguageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.localization.language.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3LocalizationLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.language.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.localization.language.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3LocalizationLanguageQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3LocalizationLanguageQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3LocalizationIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.localization)[':id']['$get']>,
) {
  return ['api', '/api/v3/localization/:id', args] as const
}

export function getApiV3LocalizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.localization)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.localization)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.localization)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LocalizationIdQueryKey>
  >({
    queryKey: getApiV3LocalizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.localization[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3LocalizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.localization)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.localization)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.localization)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3LocalizationIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3LocalizationIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3LogQueryKey(args: InferRequestType<typeof client.api.v3.log.$get>) {
  return ['api', '/api/v3/log', args] as const
}

export function getApiV3LogQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.log.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3LogQueryKey>
  >({
    queryKey: getApiV3LogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.log.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Log<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.log.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3LogQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3LogQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3LogFileQueryKey() {
  return ['api', '/api/v3/log/file'] as const
}

export function getApiV3LogFileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LogFileQueryKey>
  >({
    queryKey: getApiV3LogFileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.log.file.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3LogFile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3LogFileQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3LogFileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3LogFileFilenameQueryKey(
  args: InferRequestType<(typeof client.api.v3.log.file)[':filename']['$get']>,
) {
  return ['api', '/api/v3/log/file/:filename', args] as const
}

export function getApiV3LogFileFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.log.file)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.log.file)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.log.file)[':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LogFileFilenameQueryKey>
  >({
    queryKey: getApiV3LogFileFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.log.file[':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3LogFileFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.log.file)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.log.file)[':filename']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.log.file)[':filename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3LogFileFilenameQueryKey>
        >
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
      ...getApiV3LogFileFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3ManualimportQueryKey(
  args: InferRequestType<typeof client.api.v3.manualimport.$get>,
) {
  return ['api', '/api/v3/manualimport', args] as const
}

export function getApiV3ManualimportQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.manualimport.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ManualimportQueryKey>
  >({
    queryKey: getApiV3ManualimportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.manualimport.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Manualimport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.manualimport.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ManualimportQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ManualimportQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3ManualimportMutationKey() {
  return ['api', '/api/v3/manualimport', 'POST'] as const
}

export function getPostApiV3ManualimportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.manualimport.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ManualimportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.manualimport.$post>) {
      return parseResponse(client.api.v3.manualimport.$post(args, options))
    },
  })
}

export function createPostApiV3Manualimport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.manualimport.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3ManualimportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3MediacoverSeriesIdFilenameQueryKey(
  args: InferRequestType<(typeof client.api.v3.mediacover)[':seriesId'][':filename']['$get']>,
) {
  return ['api', '/api/v3/mediacover/:seriesId/:filename', args] as const
}

export function getApiV3MediacoverSeriesIdFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.mediacover)[':seriesId'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.mediacover)[':seriesId'][':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.mediacover)[':seriesId'][':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MediacoverSeriesIdFilenameQueryKey>
  >({
    queryKey: getApiV3MediacoverSeriesIdFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.mediacover[':seriesId'][':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3MediacoverSeriesIdFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.mediacover)[':seriesId'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.mediacover)[':seriesId'][':filename']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v3.mediacover)[':seriesId'][':filename']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3MediacoverSeriesIdFilenameQueryKey>
        >
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
      ...getApiV3MediacoverSeriesIdFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3ConfigMediamanagementQueryKey() {
  return ['api', '/api/v3/config/mediamanagement'] as const
}

export function getApiV3ConfigMediamanagementQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.mediamanagement.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.mediamanagement.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigMediamanagementQueryKey>
  >({
    queryKey: getApiV3ConfigMediamanagementQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.mediamanagement.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ConfigMediamanagement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.mediamanagement.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.config.mediamanagement.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ConfigMediamanagementQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ConfigMediamanagementQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3ConfigMediamanagementIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>,
) {
  return ['api', '/api/v3/config/mediamanagement/:id', args] as const
}

export function getApiV3ConfigMediamanagementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigMediamanagementIdQueryKey>
  >({
    queryKey: getApiV3ConfigMediamanagementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.mediamanagement[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ConfigMediamanagementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ConfigMediamanagementIdQueryKey>
        >
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
      ...getApiV3ConfigMediamanagementIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV3ConfigMediamanagementIdMutationKey() {
  return ['api', '/api/v3/config/mediamanagement/:id', 'PUT'] as const
}

export function getPutApiV3ConfigMediamanagementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigMediamanagementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.config.mediamanagement[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3ConfigMediamanagementId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3ConfigMediamanagementIdMutationOptions<
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

export function getApiV3MetadataQueryKey() {
  return ['api', '/api/v3/metadata'] as const
}

export function getApiV3MetadataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MetadataQueryKey>
  >({
    queryKey: getApiV3MetadataQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.metadata.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Metadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3MetadataQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3MetadataQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3MetadataMutationKey() {
  return ['api', '/api/v3/metadata', 'POST'] as const
}

export function getPostApiV3MetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.metadata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3MetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.metadata.$post>) {
      return parseResponse(client.api.v3.metadata.$post(args, options))
    },
  })
}

export function createPostApiV3Metadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.metadata.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3MetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3MetadataIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.metadata)[':id']['$get']>,
) {
  return ['api', '/api/v3/metadata/:id', args] as const
}

export function getApiV3MetadataIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.metadata)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MetadataIdQueryKey>
  >({
    queryKey: getApiV3MetadataIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.metadata[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3MetadataId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.metadata)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3MetadataIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3MetadataIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3MetadataIdMutationKey() {
  return ['api', '/api/v3/metadata/:id', 'PUT'] as const
}

export function getPutApiV3MetadataIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.metadata)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3MetadataIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.metadata)[':id']['$put']>) {
      return parseResponse(client.api.v3.metadata[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3MetadataId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.metadata)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3MetadataIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3MetadataIdMutationKey() {
  return ['api', '/api/v3/metadata/:id', 'DELETE'] as const
}

export function getDeleteApiV3MetadataIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.metadata)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3MetadataIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.metadata)[':id']['$delete']>) {
      return parseResponse(client.api.v3.metadata[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3MetadataId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.metadata)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3MetadataIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3MetadataSchemaQueryKey() {
  return ['api', '/api/v3/metadata/schema'] as const
}

export function getApiV3MetadataSchemaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.schema.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MetadataSchemaQueryKey>
  >({
    queryKey: getApiV3MetadataSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.metadata.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3MetadataSchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.schema.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3MetadataSchemaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3MetadataSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3MetadataTestMutationKey() {
  return ['api', '/api/v3/metadata/test', 'POST'] as const
}

export function getPostApiV3MetadataTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.metadata.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3MetadataTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.metadata.test.$post>) {
      return parseResponse(client.api.v3.metadata.test.$post(args, options))
    },
  })
}

export function createPostApiV3MetadataTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.metadata.test.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3MetadataTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV3MetadataTestallMutationKey() {
  return ['api', '/api/v3/metadata/testall', 'POST'] as const
}

export function getPostApiV3MetadataTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3MetadataTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.metadata.testall.$post(undefined, options))
    },
  })
}

export function createPostApiV3MetadataTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.testall.$post>>>
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3MetadataTestallMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV3MetadataActionNameMutationKey() {
  return ['api', '/api/v3/metadata/action/:name', 'POST'] as const
}

export function getPostApiV3MetadataActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.metadata.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.metadata.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3MetadataActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.metadata.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v3.metadata.action[':name'].$post(args, options))
    },
  })
}

export function createPostApiV3MetadataActionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.metadata.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.metadata.action)[':name']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3MetadataActionNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3WantedMissingQueryKey(
  args: InferRequestType<typeof client.api.v3.wanted.missing.$get>,
) {
  return ['api', '/api/v3/wanted/missing', args] as const
}

export function getApiV3WantedMissingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.missing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.wanted.missing.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.missing.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3WantedMissingQueryKey>
  >({
    queryKey: getApiV3WantedMissingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.wanted.missing.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3WantedMissing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.missing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.wanted.missing.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.missing.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3WantedMissingQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3WantedMissingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3WantedMissingIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.wanted.missing)[':id']['$get']>,
) {
  return ['api', '/api/v3/wanted/missing/:id', args] as const
}

export function getApiV3WantedMissingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.wanted.missing)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.wanted.missing)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.wanted.missing)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3WantedMissingIdQueryKey>
  >({
    queryKey: getApiV3WantedMissingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.wanted.missing[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3WantedMissingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.wanted.missing)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.wanted.missing)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.wanted.missing)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3WantedMissingIdQueryKey>
        >
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
      ...getApiV3WantedMissingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3ConfigNamingQueryKey() {
  return ['api', '/api/v3/config/naming'] as const
}

export function getApiV3ConfigNamingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigNamingQueryKey>
  >({
    queryKey: getApiV3ConfigNamingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.naming.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ConfigNaming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ConfigNamingQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ConfigNamingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3ConfigNamingIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.config.naming)[':id']['$get']>,
) {
  return ['api', '/api/v3/config/naming/:id', args] as const
}

export function getApiV3ConfigNamingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.naming)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigNamingIdQueryKey>
  >({
    queryKey: getApiV3ConfigNamingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.naming[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ConfigNamingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.config.naming)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ConfigNamingIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ConfigNamingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3ConfigNamingIdMutationKey() {
  return ['api', '/api/v3/config/naming/:id', 'PUT'] as const
}

export function getPutApiV3ConfigNamingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.naming)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigNamingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.config.naming)[':id']['$put']>) {
      return parseResponse(client.api.v3.config.naming[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3ConfigNamingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.config.naming)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3ConfigNamingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3ConfigNamingExamplesQueryKey(
  args: InferRequestType<typeof client.api.v3.config.naming.examples.$get>,
) {
  return ['api', '/api/v3/config/naming/examples', args] as const
}

export function getApiV3ConfigNamingExamplesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.examples.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.config.naming.examples.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.examples.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigNamingExamplesQueryKey>
  >({
    queryKey: getApiV3ConfigNamingExamplesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.naming.examples.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ConfigNamingExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.examples.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.config.naming.examples.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.config.naming.examples.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ConfigNamingExamplesQueryKey>
        >
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
      ...getApiV3ConfigNamingExamplesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3NotificationQueryKey() {
  return ['api', '/api/v3/notification'] as const
}

export function getApiV3NotificationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3NotificationQueryKey>
  >({
    queryKey: getApiV3NotificationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.notification.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3Notification<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3NotificationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3NotificationQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3NotificationMutationKey() {
  return ['api', '/api/v3/notification', 'POST'] as const
}

export function getPostApiV3NotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.notification.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3NotificationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.notification.$post>) {
      return parseResponse(client.api.v3.notification.$post(args, options))
    },
  })
}

export function createPostApiV3Notification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.notification.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3NotificationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3NotificationIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.notification)[':id']['$get']>,
) {
  return ['api', '/api/v3/notification/:id', args] as const
}

export function getApiV3NotificationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.notification)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3NotificationIdQueryKey>
  >({
    queryKey: getApiV3NotificationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.notification[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3NotificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.notification)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3NotificationIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3NotificationIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3NotificationIdMutationKey() {
  return ['api', '/api/v3/notification/:id', 'PUT'] as const
}

export function getPutApiV3NotificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.notification)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3NotificationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.notification)[':id']['$put']>) {
      return parseResponse(client.api.v3.notification[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3NotificationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.notification)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3NotificationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3NotificationIdMutationKey() {
  return ['api', '/api/v3/notification/:id', 'DELETE'] as const
}

export function getDeleteApiV3NotificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.notification)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3NotificationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.notification)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.notification[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3NotificationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.notification)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3NotificationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3NotificationSchemaQueryKey() {
  return ['api', '/api/v3/notification/schema'] as const
}

export function getApiV3NotificationSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3NotificationSchemaQueryKey>
  >({
    queryKey: getApiV3NotificationSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.notification.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3NotificationSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.notification.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3NotificationSchemaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3NotificationSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3NotificationTestMutationKey() {
  return ['api', '/api/v3/notification/test', 'POST'] as const
}

export function getPostApiV3NotificationTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.notification.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3NotificationTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.notification.test.$post>) {
      return parseResponse(client.api.v3.notification.test.$post(args, options))
    },
  })
}

export function createPostApiV3NotificationTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.notification.test.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.notification.test.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3NotificationTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV3NotificationTestallMutationKey() {
  return ['api', '/api/v3/notification/testall', 'POST'] as const
}

export function getPostApiV3NotificationTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3NotificationTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.notification.testall.$post(undefined, options))
    },
  })
}

export function createPostApiV3NotificationTestall<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.notification.testall.$post>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3NotificationTestallMutationOptions<
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

export function getPostApiV3NotificationActionNameMutationKey() {
  return ['api', '/api/v3/notification/action/:name', 'POST'] as const
}

export function getPostApiV3NotificationActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.notification.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.notification.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3NotificationActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.notification.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v3.notification.action[':name'].$post(args, options))
    },
  })
}

export function createPostApiV3NotificationActionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.notification.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.notification.action)[':name']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3NotificationActionNameMutationOptions<
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

export function getApiV3ParseQueryKey(args: InferRequestType<typeof client.api.v3.parse.$get>) {
  return ['api', '/api/v3/parse', args] as const
}

export function getApiV3ParseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.parse.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.parse.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.parse.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3ParseQueryKey>
  >({
    queryKey: getApiV3ParseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.parse.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Parse<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.parse.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.parse.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.parse.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ParseQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ParseQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPingQueryKey() {
  return ['ping', '/ping'] as const
}

export function getPingQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPingQueryKey>
  >({
    queryKey: getPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getPingQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getHeadPingMutationKey() {
  return ['ping', '/ping', 'HEAD'] as const
}

export function getHeadPingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$head>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getHeadPingMutationKey(),
    async mutationFn() {
      return parseResponse(client.ping.$head(undefined, options))
    },
  })
}

export function createHeadPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$head>>>>>,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadPingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3QualitydefinitionIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>,
) {
  return ['api', '/api/v3/qualitydefinition/:id', args] as const
}

export function getApiV3QualitydefinitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualitydefinitionIdQueryKey>
  >({
    queryKey: getApiV3QualitydefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.qualitydefinition[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3QualitydefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3QualitydefinitionIdQueryKey>
        >
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
      ...getApiV3QualitydefinitionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV3QualitydefinitionIdMutationKey() {
  return ['api', '/api/v3/qualitydefinition/:id', 'PUT'] as const
}

export function getPutApiV3QualitydefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3QualitydefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.qualitydefinition[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3QualitydefinitionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3QualitydefinitionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3QualitydefinitionQueryKey() {
  return ['api', '/api/v3/qualitydefinition'] as const
}

export function getApiV3QualitydefinitionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualitydefinitionQueryKey>
  >({
    queryKey: getApiV3QualitydefinitionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.qualitydefinition.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3Qualitydefinition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3QualitydefinitionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3QualitydefinitionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3QualitydefinitionUpdateMutationKey() {
  return ['api', '/api/v3/qualitydefinition/update', 'PUT'] as const
}

export function getPutApiV3QualitydefinitionUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v3.qualitydefinition.update.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.qualitydefinition.update.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3QualitydefinitionUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.qualitydefinition.update.$put>) {
      return parseResponse(client.api.v3.qualitydefinition.update.$put(args, options))
    },
  })
}

export function createPutApiV3QualitydefinitionUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.qualitydefinition.update.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.qualitydefinition.update.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3QualitydefinitionUpdateMutationOptions<
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

export function getApiV3QualitydefinitionLimitsQueryKey() {
  return ['api', '/api/v3/qualitydefinition/limits'] as const
}

export function getApiV3QualitydefinitionLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.limits.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v3.qualitydefinition.limits.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualitydefinitionLimitsQueryKey>
  >({
    queryKey: getApiV3QualitydefinitionLimitsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.qualitydefinition.limits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3QualitydefinitionLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.limits.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.qualitydefinition.limits.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3QualitydefinitionLimitsQueryKey>
        >
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
      ...getApiV3QualitydefinitionLimitsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3QualityprofileQueryKey() {
  return ['api', '/api/v3/qualityprofile'] as const
}

export function getApiV3QualityprofileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualityprofileQueryKey>
  >({
    queryKey: getApiV3QualityprofileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.qualityprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3Qualityprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3QualityprofileQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3QualityprofileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3QualityprofileMutationKey() {
  return ['api', '/api/v3/qualityprofile', 'POST'] as const
}

export function getPostApiV3QualityprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.qualityprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3QualityprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.qualityprofile.$post>) {
      return parseResponse(client.api.v3.qualityprofile.$post(args, options))
    },
  })
}

export function createPostApiV3Qualityprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.qualityprofile.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3QualityprofileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3QualityprofileIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$get']>,
) {
  return ['api', '/api/v3/qualityprofile/:id', args] as const
}

export function getApiV3QualityprofileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualityprofileIdQueryKey>
  >({
    queryKey: getApiV3QualityprofileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.qualityprofile[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3QualityprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3QualityprofileIdQueryKey>
        >
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
      ...getApiV3QualityprofileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV3QualityprofileIdMutationKey() {
  return ['api', '/api/v3/qualityprofile/:id', 'PUT'] as const
}

export function getPutApiV3QualityprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3QualityprofileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$put']>) {
      return parseResponse(client.api.v3.qualityprofile[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3QualityprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3QualityprofileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3QualityprofileIdMutationKey() {
  return ['api', '/api/v3/qualityprofile/:id', 'DELETE'] as const
}

export function getDeleteApiV3QualityprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3QualityprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.qualityprofile[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3QualityprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3QualityprofileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3QualityprofileSchemaQueryKey() {
  return ['api', '/api/v3/qualityprofile/schema'] as const
}

export function getApiV3QualityprofileSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualityprofileSchemaQueryKey>
  >({
    queryKey: getApiV3QualityprofileSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.qualityprofile.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3QualityprofileSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.qualityprofile.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3QualityprofileSchemaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3QualityprofileSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiV3QueueIdMutationKey() {
  return ['api', '/api/v3/queue/:id', 'DELETE'] as const
}

export function getDeleteApiV3QueueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.queue)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.queue)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3QueueIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.queue)[':id']['$delete']>) {
      return parseResponse(client.api.v3.queue[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3QueueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.queue)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.queue)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3QueueIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3QueueBulkMutationKey() {
  return ['api', '/api/v3/queue/bulk', 'DELETE'] as const
}

export function getDeleteApiV3QueueBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.bulk.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.queue.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3QueueBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.queue.bulk.$delete>) {
      return parseResponse(client.api.v3.queue.bulk.$delete(args, options))
    },
  })
}

export function createDeleteApiV3QueueBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.bulk.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.queue.bulk.$delete>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3QueueBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3QueueQueryKey(args: InferRequestType<typeof client.api.v3.queue.$get>) {
  return ['api', '/api/v3/queue', args] as const
}

export function getApiV3QueueQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.queue.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3QueueQueryKey>
  >({
    queryKey: getApiV3QueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.queue.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Queue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.queue.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3QueueQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3QueueQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3QueueGrabIdMutationKey() {
  return ['api', '/api/v3/queue/grab/:id', 'POST'] as const
}

export function getPostApiV3QueueGrabIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.queue.grab)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.queue.grab)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3QueueGrabIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.queue.grab)[':id']['$post']>) {
      return parseResponse(client.api.v3.queue.grab[':id'].$post(args, options))
    },
  })
}

export function createPostApiV3QueueGrabId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.queue.grab)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.queue.grab)[':id']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3QueueGrabIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV3QueueGrabBulkMutationKey() {
  return ['api', '/api/v3/queue/grab/bulk', 'POST'] as const
}

export function getPostApiV3QueueGrabBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.grab.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.queue.grab.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3QueueGrabBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.queue.grab.bulk.$post>) {
      return parseResponse(client.api.v3.queue.grab.bulk.$post(args, options))
    },
  })
}

export function createPostApiV3QueueGrabBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.grab.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.queue.grab.bulk.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3QueueGrabBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3QueueDetailsQueryKey(
  args: InferRequestType<typeof client.api.v3.queue.details.$get>,
) {
  return ['api', '/api/v3/queue/details', args] as const
}

export function getApiV3QueueDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.queue.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QueueDetailsQueryKey>
  >({
    queryKey: getApiV3QueueDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.queue.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3QueueDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.queue.details.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.details.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3QueueDetailsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3QueueDetailsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3QueueStatusQueryKey() {
  return ['api', '/api/v3/queue/status'] as const
}

export function getApiV3QueueStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QueueStatusQueryKey>
  >({
    queryKey: getApiV3QueueStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.queue.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3QueueStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.status.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3QueueStatusQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3QueueStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3ReleaseQueryKey(args: InferRequestType<typeof client.api.v3.release.$get>) {
  return ['api', '/api/v3/release', args] as const
}

export function getApiV3ReleaseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.release.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ReleaseQueryKey>
  >({
    queryKey: getApiV3ReleaseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.release.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Release<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.release.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ReleaseQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ReleaseQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3ReleaseMutationKey() {
  return ['api', '/api/v3/release', 'POST'] as const
}

export function getPostApiV3ReleaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.release.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ReleaseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.release.$post>) {
      return parseResponse(client.api.v3.release.$post(args, options))
    },
  })
}

export function createPostApiV3Release<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.release.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3ReleaseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3ReleaseprofileQueryKey() {
  return ['api', '/api/v3/releaseprofile'] as const
}

export function getApiV3ReleaseprofileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ReleaseprofileQueryKey>
  >({
    queryKey: getApiV3ReleaseprofileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.releaseprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3Releaseprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ReleaseprofileQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ReleaseprofileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3ReleaseprofileMutationKey() {
  return ['api', '/api/v3/releaseprofile', 'POST'] as const
}

export function getPostApiV3ReleaseprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.releaseprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ReleaseprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.releaseprofile.$post>) {
      return parseResponse(client.api.v3.releaseprofile.$post(args, options))
    },
  })
}

export function createPostApiV3Releaseprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.releaseprofile.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3ReleaseprofileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3ReleaseprofileIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$get']>,
) {
  return ['api', '/api/v3/releaseprofile/:id', args] as const
}

export function getApiV3ReleaseprofileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ReleaseprofileIdQueryKey>
  >({
    queryKey: getApiV3ReleaseprofileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.releaseprofile[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ReleaseprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ReleaseprofileIdQueryKey>
        >
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
      ...getApiV3ReleaseprofileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV3ReleaseprofileIdMutationKey() {
  return ['api', '/api/v3/releaseprofile/:id', 'PUT'] as const
}

export function getPutApiV3ReleaseprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ReleaseprofileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$put']>) {
      return parseResponse(client.api.v3.releaseprofile[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3ReleaseprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3ReleaseprofileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3ReleaseprofileIdMutationKey() {
  return ['api', '/api/v3/releaseprofile/:id', 'DELETE'] as const
}

export function getDeleteApiV3ReleaseprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ReleaseprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.releaseprofile[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3ReleaseprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3ReleaseprofileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV3ReleasePushMutationKey() {
  return ['api', '/api/v3/release/push', 'POST'] as const
}

export function getPostApiV3ReleasePushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.push.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.release.push.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ReleasePushMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.release.push.$post>) {
      return parseResponse(client.api.v3.release.push.$post(args, options))
    },
  })
}

export function createPostApiV3ReleasePush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.push.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.release.push.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3ReleasePushMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3RemotepathmappingQueryKey() {
  return ['api', '/api/v3/remotepathmapping'] as const
}

export function getApiV3RemotepathmappingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RemotepathmappingQueryKey>
  >({
    queryKey: getApiV3RemotepathmappingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.remotepathmapping.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3Remotepathmapping<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3RemotepathmappingQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3RemotepathmappingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3RemotepathmappingMutationKey() {
  return ['api', '/api/v3/remotepathmapping', 'POST'] as const
}

export function getPostApiV3RemotepathmappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.remotepathmapping.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3RemotepathmappingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.remotepathmapping.$post>) {
      return parseResponse(client.api.v3.remotepathmapping.$post(args, options))
    },
  })
}

export function createPostApiV3Remotepathmapping<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.remotepathmapping.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3RemotepathmappingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3RemotepathmappingIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>,
) {
  return ['api', '/api/v3/remotepathmapping/:id', args] as const
}

export function getApiV3RemotepathmappingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RemotepathmappingIdQueryKey>
  >({
    queryKey: getApiV3RemotepathmappingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.remotepathmapping[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3RemotepathmappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3RemotepathmappingIdQueryKey>
        >
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
      ...getApiV3RemotepathmappingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV3RemotepathmappingIdMutationKey() {
  return ['api', '/api/v3/remotepathmapping/:id', 'PUT'] as const
}

export function getPutApiV3RemotepathmappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3RemotepathmappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.remotepathmapping[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3RemotepathmappingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3RemotepathmappingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3RemotepathmappingIdMutationKey() {
  return ['api', '/api/v3/remotepathmapping/:id', 'DELETE'] as const
}

export function getDeleteApiV3RemotepathmappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3RemotepathmappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.remotepathmapping[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3RemotepathmappingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3RemotepathmappingIdMutationOptions<
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

export function getApiV3RenameQueryKey(args: InferRequestType<typeof client.api.v3.rename.$get>) {
  return ['api', '/api/v3/rename', args] as const
}

export function getApiV3RenameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.rename.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RenameQueryKey>
  >({
    queryKey: getApiV3RenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.rename.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Rename<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.rename.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3RenameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3RenameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3RenameBulkQueryKey(
  args: InferRequestType<typeof client.api.v3.rename.bulk.$get>,
) {
  return ['api', '/api/v3/rename/bulk', args] as const
}

export function getApiV3RenameBulkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.bulk.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.rename.bulk.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.bulk.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RenameBulkQueryKey>
  >({
    queryKey: getApiV3RenameBulkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.rename.bulk.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3RenameBulk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.bulk.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.rename.bulk.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.bulk.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3RenameBulkQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3RenameBulkQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3RootfolderQueryKey() {
  return ['api', '/api/v3/rootfolder'] as const
}

export function getApiV3RootfolderQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RootfolderQueryKey>
  >({
    queryKey: getApiV3RootfolderQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.rootfolder.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3Rootfolder<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3RootfolderQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3RootfolderQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3RootfolderMutationKey() {
  return ['api', '/api/v3/rootfolder', 'POST'] as const
}

export function getPostApiV3RootfolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.rootfolder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3RootfolderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.rootfolder.$post>) {
      return parseResponse(client.api.v3.rootfolder.$post(args, options))
    },
  })
}

export function createPostApiV3Rootfolder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.rootfolder.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3RootfolderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3RootfolderIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$get']>,
) {
  return ['api', '/api/v3/rootfolder/:id', args] as const
}

export function getApiV3RootfolderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RootfolderIdQueryKey>
  >({
    queryKey: getApiV3RootfolderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.rootfolder[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3RootfolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3RootfolderIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3RootfolderIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiV3RootfolderIdMutationKey() {
  return ['api', '/api/v3/rootfolder/:id', 'DELETE'] as const
}

export function getDeleteApiV3RootfolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3RootfolderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$delete']>) {
      return parseResponse(client.api.v3.rootfolder[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3RootfolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3RootfolderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV3SeasonpassMutationKey() {
  return ['api', '/api/v3/seasonpass', 'POST'] as const
}

export function getPostApiV3SeasonpassMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.seasonpass.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.seasonpass.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SeasonpassMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.seasonpass.$post>) {
      return parseResponse(client.api.v3.seasonpass.$post(args, options))
    },
  })
}

export function createPostApiV3Seasonpass<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.seasonpass.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.seasonpass.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3SeasonpassMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3SeriesQueryKey(args: InferRequestType<typeof client.api.v3.series.$get>) {
  return ['api', '/api/v3/series', args] as const
}

export function getApiV3SeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SeriesQueryKey>
  >({
    queryKey: getApiV3SeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Series<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.series.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3SeriesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3SeriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3SeriesMutationKey() {
  return ['api', '/api/v3/series', 'POST'] as const
}

export function getPostApiV3SeriesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.series.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SeriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.series.$post>) {
      return parseResponse(client.api.v3.series.$post(args, options))
    },
  })
}

export function createPostApiV3Series<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v3.series.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3SeriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3SeriesIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.series)[':id']['$get']>,
) {
  return ['api', '/api/v3/series/:id', args] as const
}

export function getApiV3SeriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.series)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.series)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.series)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SeriesIdQueryKey>
  >({
    queryKey: getApiV3SeriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.series[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3SeriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.series)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.series)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.series)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3SeriesIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3SeriesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3SeriesIdMutationKey() {
  return ['api', '/api/v3/series/:id', 'PUT'] as const
}

export function getPutApiV3SeriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.series)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.series)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3SeriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.series)[':id']['$put']>) {
      return parseResponse(client.api.v3.series[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3SeriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.series)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.series)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3SeriesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3SeriesIdMutationKey() {
  return ['api', '/api/v3/series/:id', 'DELETE'] as const
}

export function getDeleteApiV3SeriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.series)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.series)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3SeriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.series)[':id']['$delete']>) {
      return parseResponse(client.api.v3.series[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3SeriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.series)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.series)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3SeriesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV3SeriesEditorMutationKey() {
  return ['api', '/api/v3/series/editor', 'PUT'] as const
}

export function getPutApiV3SeriesEditorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.editor.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.series.editor.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3SeriesEditorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.series.editor.$put>) {
      return parseResponse(client.api.v3.series.editor.$put(args, options))
    },
  })
}

export function createPutApiV3SeriesEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.editor.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.series.editor.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3SeriesEditorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3SeriesEditorMutationKey() {
  return ['api', '/api/v3/series/editor', 'DELETE'] as const
}

export function getDeleteApiV3SeriesEditorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.editor.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.series.editor.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3SeriesEditorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.series.editor.$delete>) {
      return parseResponse(client.api.v3.series.editor.$delete(args, options))
    },
  })
}

export function createDeleteApiV3SeriesEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.editor.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.series.editor.$delete>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3SeriesEditorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3SeriesIdFolderQueryKey(
  args: InferRequestType<(typeof client.api.v3.series)[':id']['folder']['$get']>,
) {
  return ['api', '/api/v3/series/:id/folder', args] as const
}

export function getApiV3SeriesIdFolderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.series)[':id']['folder']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.series)[':id']['folder']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.series)[':id']['folder']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SeriesIdFolderQueryKey>
  >({
    queryKey: getApiV3SeriesIdFolderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.series[':id'].folder.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3SeriesIdFolder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.series)[':id']['folder']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.series)[':id']['folder']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.series)[':id']['folder']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3SeriesIdFolderQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3SeriesIdFolderQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3SeriesImportMutationKey() {
  return ['api', '/api/v3/series/import', 'POST'] as const
}

export function getPostApiV3SeriesImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.import.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.series.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SeriesImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.series.import.$post>) {
      return parseResponse(client.api.v3.series.import.$post(args, options))
    },
  })
}

export function createPostApiV3SeriesImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.series.import.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3SeriesImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3SeriesLookupQueryKey(
  args: InferRequestType<typeof client.api.v3.series.lookup.$get>,
) {
  return ['api', '/api/v3/series/lookup', args] as const
}

export function getApiV3SeriesLookupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.lookup.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.series.lookup.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.lookup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SeriesLookupQueryKey>
  >({
    queryKey: getApiV3SeriesLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.series.lookup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3SeriesLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.lookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.series.lookup.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.lookup.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3SeriesLookupQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3SeriesLookupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLoggedoutQueryKey() {
  return ['loggedout', '/loggedout'] as const
}

export function getLoggedoutQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggedout.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggedout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoggedoutQueryKey>
  >({
    queryKey: getLoggedoutQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.loggedout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLoggedout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggedout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggedout.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getLoggedoutQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLoggedoutQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getContentPathQueryKey(
  args: InferRequestType<(typeof client.content)[':path']['$get']>,
) {
  return ['content', '/content/:path', args] as const
}

export function getContentPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.content)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentPathQueryKey>
  >({
    queryKey: getContentPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.content[':path'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createContentPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.content)[':path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getContentPathQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContentPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQueryKey(args: InferRequestType<typeof client.index.$get>) {
  return ['', '/', args] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPathQueryKey(args: InferRequestType<(typeof client)[':path']['$get']>) {
  return [':path', '/:path', args] as const
}

export function getPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':path']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPathQueryKey>
  >({
    queryKey: getPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':path'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPathQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3SystemStatusQueryKey() {
  return ['api', '/api/v3/system/status'] as const
}

export function getApiV3SystemStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemStatusQueryKey>
  >({
    queryKey: getApiV3SystemStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.system.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3SystemStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.status.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3SystemStatusQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3SystemStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3SystemRoutesQueryKey() {
  return ['api', '/api/v3/system/routes'] as const
}

export function getApiV3SystemRoutesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemRoutesQueryKey>
  >({
    queryKey: getApiV3SystemRoutesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.system.routes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3SystemRoutes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3SystemRoutesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3SystemRoutesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3SystemRoutesDuplicateQueryKey() {
  return ['api', '/api/v3/system/routes/duplicate'] as const
}

export function getApiV3SystemRoutesDuplicateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.duplicate.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.duplicate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemRoutesDuplicateQueryKey>
  >({
    queryKey: getApiV3SystemRoutesDuplicateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.system.routes.duplicate.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3SystemRoutesDuplicate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.duplicate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.system.routes.duplicate.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3SystemRoutesDuplicateQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3SystemRoutesDuplicateQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3SystemShutdownMutationKey() {
  return ['api', '/api/v3/system/shutdown', 'POST'] as const
}

export function getPostApiV3SystemShutdownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.shutdown.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SystemShutdownMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.system.shutdown.$post(undefined, options))
    },
  })
}

export function createPostApiV3SystemShutdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.shutdown.$post>>>
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3SystemShutdownMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV3SystemRestartMutationKey() {
  return ['api', '/api/v3/system/restart', 'POST'] as const
}

export function getPostApiV3SystemRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.restart.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SystemRestartMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.system.restart.$post(undefined, options))
    },
  })
}

export function createPostApiV3SystemRestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.restart.$post>>>
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3SystemRestartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3TagQueryKey() {
  return ['api', '/api/v3/tag'] as const
}

export function getApiV3TagQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3TagQueryKey>
  >({
    queryKey: getApiV3TagQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.tag.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Tag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3TagQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3TagQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3TagMutationKey() {
  return ['api', '/api/v3/tag', 'POST'] as const
}

export function getPostApiV3TagMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.v3.tag.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3TagMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.tag.$post>) {
      return parseResponse(client.api.v3.tag.$post(args, options))
    },
  })
}

export function createPostApiV3Tag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v3.tag.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3TagMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3TagIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.tag)[':id']['$get']>,
) {
  return ['api', '/api/v3/tag/:id', args] as const
}

export function getApiV3TagIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.tag)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TagIdQueryKey>
  >({
    queryKey: getApiV3TagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.tag[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3TagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.tag)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3TagIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3TagIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3TagIdMutationKey() {
  return ['api', '/api/v3/tag/:id', 'PUT'] as const
}

export function getPutApiV3TagIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.tag)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3TagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.tag)[':id']['$put']>) {
      return parseResponse(client.api.v3.tag[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3TagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.tag)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3TagIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV3TagIdMutationKey() {
  return ['api', '/api/v3/tag/:id', 'DELETE'] as const
}

export function getDeleteApiV3TagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.tag)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3TagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.tag)[':id']['$delete']>) {
      return parseResponse(client.api.v3.tag[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV3TagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.tag)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3TagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3TagDetailQueryKey() {
  return ['api', '/api/v3/tag/detail'] as const
}

export function getApiV3TagDetailQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.detail.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.detail.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TagDetailQueryKey>
  >({
    queryKey: getApiV3TagDetailQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.tag.detail.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3TagDetail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.detail.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.detail.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3TagDetailQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3TagDetailQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3TagDetailIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.tag.detail)[':id']['$get']>,
) {
  return ['api', '/api/v3/tag/detail/:id', args] as const
}

export function getApiV3TagDetailIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag.detail)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.tag.detail)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag.detail)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TagDetailIdQueryKey>
  >({
    queryKey: getApiV3TagDetailIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.tag.detail[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3TagDetailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag.detail)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.tag.detail)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.tag.detail)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3TagDetailIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3TagDetailIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3SystemTaskQueryKey() {
  return ['api', '/api/v3/system/task'] as const
}

export function getApiV3SystemTaskQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.task.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.task.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemTaskQueryKey>
  >({
    queryKey: getApiV3SystemTaskQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.system.task.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3SystemTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.task.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.task.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3SystemTaskQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3SystemTaskQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3SystemTaskIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.system.task)[':id']['$get']>,
) {
  return ['api', '/api/v3/system/task/:id', args] as const
}

export function getApiV3SystemTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.system.task)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.system.task)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.system.task)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemTaskIdQueryKey>
  >({
    queryKey: getApiV3SystemTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.system.task[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3SystemTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.system.task)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.system.task)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.system.task)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3SystemTaskIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3SystemTaskIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3ConfigUiIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.config.ui)[':id']['$get']>,
) {
  return ['api', '/api/v3/config/ui/:id', args] as const
}

export function getApiV3ConfigUiIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.ui)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigUiIdQueryKey>
  >({
    queryKey: getApiV3ConfigUiIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.ui[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3ConfigUiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.config.ui)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ConfigUiIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ConfigUiIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3ConfigUiIdMutationKey() {
  return ['api', '/api/v3/config/ui/:id', 'PUT'] as const
}

export function getPutApiV3ConfigUiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.ui)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigUiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.config.ui)[':id']['$put']>) {
      return parseResponse(client.api.v3.config.ui[':id'].$put(args, options))
    },
  })
}

export function createPutApiV3ConfigUiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.config.ui)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3ConfigUiIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3ConfigUiQueryKey() {
  return ['api', '/api/v3/config/ui'] as const
}

export function getApiV3ConfigUiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.ui.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.ui.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigUiQueryKey>
  >({
    queryKey: getApiV3ConfigUiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.ui.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3ConfigUi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.ui.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.ui.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3ConfigUiQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ConfigUiQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3UpdateQueryKey() {
  return ['api', '/api/v3/update'] as const
}

export function getApiV3UpdateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.update.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.update.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3UpdateQueryKey>
  >({
    queryKey: getApiV3UpdateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.update.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Update<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.update.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.update.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3UpdateQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3UpdateQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3LogFileUpdateQueryKey() {
  return ['api', '/api/v3/log/file/update'] as const
}

export function getApiV3LogFileUpdateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.update.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.update.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LogFileUpdateQueryKey>
  >({
    queryKey: getApiV3LogFileUpdateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.log.file.update.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3LogFileUpdate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.update.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.update.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3LogFileUpdateQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3LogFileUpdateQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV3LogFileUpdateFilenameQueryKey(
  args: InferRequestType<(typeof client.api.v3.log.file.update)[':filename']['$get']>,
) {
  return ['api', '/api/v3/log/file/update/:filename', args] as const
}

export function getApiV3LogFileUpdateFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.log.file.update)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.log.file.update)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.log.file.update)[':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LogFileUpdateFilenameQueryKey>
  >({
    queryKey: getApiV3LogFileUpdateFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.log.file.update[':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3LogFileUpdateFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.log.file.update)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3.log.file.update)[':filename']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.log.file.update)[':filename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3LogFileUpdateFilenameQueryKey>
        >
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
      ...getApiV3LogFileUpdateFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
