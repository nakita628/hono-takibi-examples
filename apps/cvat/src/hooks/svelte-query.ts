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

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiAssetsMutationKey() {
  return ['api', '/api/assets', 'POST'] as const
}

export function getPostApiAssetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.assets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAssetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.assets.$post>) {
      return parseResponse(client.api.assets.$post(args, options))
    },
  })
}

export function createPostApiAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.assets.$post>,
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
    const mutationDefaults = getPostApiAssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAssetsUuidQueryKey(
  args: InferRequestType<(typeof client.api.assets)[':uuid']['$get']>,
) {
  return ['api', '/api/assets/:uuid', args] as const
}

export function getApiAssetsUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.assets)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':uuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAssetsUuidQueryKey>
  >({
    queryKey: getApiAssetsUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.assets[':uuid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAssetsUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.assets)[':uuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':uuid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAssetsUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAssetsUuidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiAssetsUuidMutationKey() {
  return ['api', '/api/assets/:uuid', 'DELETE'] as const
}

export function getDeleteApiAssetsUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':uuid']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.assets)[':uuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAssetsUuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.assets)[':uuid']['$delete']>) {
      return parseResponse(client.api.assets[':uuid'].$delete(args, options))
    },
  })
}

export function createDeleteApiAssetsUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.assets)[':uuid']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.assets)[':uuid']['$delete']>,
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
    const mutationDefaults = getDeleteApiAssetsUuidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAuthAccessTokensQueryKey(
  args: InferRequestType<typeof client.api.auth.access_tokens.$get>,
) {
  return ['api', '/api/auth/access_tokens', args] as const
}

export function getApiAuthAccessTokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.auth.access_tokens.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthAccessTokensQueryKey>
  >({
    queryKey: getApiAuthAccessTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.auth.access_tokens.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAuthAccessTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.auth.access_tokens.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAuthAccessTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAuthAccessTokensQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiAuthAccessTokensMutationKey() {
  return ['api', '/api/auth/access_tokens', 'POST'] as const
}

export function getPostApiAuthAccessTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.auth.access_tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAuthAccessTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.auth.access_tokens.$post>) {
      return parseResponse(client.api.auth.access_tokens.$post(args, options))
    },
  })
}

export function createPostApiAuthAccessTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.auth.access_tokens.$post>,
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
    const mutationDefaults = getPostApiAuthAccessTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAuthAccessTokensIdQueryKey(
  args: InferRequestType<(typeof client.api.auth.access_tokens)[':id']['$get']>,
) {
  return ['api', '/api/auth/access_tokens/:id', args] as const
}

export function getApiAuthAccessTokensIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.auth.access_tokens)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.auth.access_tokens)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.auth.access_tokens)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthAccessTokensIdQueryKey>
  >({
    queryKey: getApiAuthAccessTokensIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.auth.access_tokens[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAuthAccessTokensId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.auth.access_tokens)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.auth.access_tokens)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.auth.access_tokens)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAuthAccessTokensIdQueryKey>
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
      ...getApiAuthAccessTokensIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiAuthAccessTokensIdMutationKey() {
  return ['api', '/api/auth/access_tokens/:id', 'DELETE'] as const
}

export function getDeleteApiAuthAccessTokensIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.auth.access_tokens)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.auth.access_tokens)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAuthAccessTokensIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.auth.access_tokens)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.auth.access_tokens[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiAuthAccessTokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.auth.access_tokens)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.auth.access_tokens)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiAuthAccessTokensIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiAuthAccessTokensIdMutationKey() {
  return ['api', '/api/auth/access_tokens/:id', 'PATCH'] as const
}

export function getPatchApiAuthAccessTokensIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.auth.access_tokens)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.auth.access_tokens)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiAuthAccessTokensIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.auth.access_tokens)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.auth.access_tokens[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiAuthAccessTokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.auth.access_tokens)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.auth.access_tokens)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiAuthAccessTokensIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAuthAccessTokensSelfQueryKey() {
  return ['api', '/api/auth/access_tokens/self'] as const
}

export function getApiAuthAccessTokensSelfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.self.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.self.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthAccessTokensSelfQueryKey>
  >({
    queryKey: getApiAuthAccessTokensSelfQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.auth.access_tokens.self.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAuthAccessTokensSelf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.self.$get>>>
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
              Awaited<ReturnType<typeof client.api.auth.access_tokens.self.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAuthAccessTokensSelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAuthAccessTokensSelfQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiAuthLoginMutationKey() {
  return ['api', '/api/auth/login', 'POST'] as const
}

export function getPostApiAuthLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.login.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.auth.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAuthLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.auth.login.$post>) {
      return parseResponse(client.api.auth.login.$post(args, options))
    },
  })
}

export function createPostApiAuthLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.login.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.auth.login.$post>,
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
    const mutationDefaults = getPostApiAuthLoginMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiAuthLogoutMutationKey() {
  return ['api', '/api/auth/logout', 'POST'] as const
}

export function getPostApiAuthLogoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.logout.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiAuthLogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.auth.logout.$post(undefined, options))
    },
  })
}

export function createPostApiAuthLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.logout.$post>>>>
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
    const mutationDefaults = getPostApiAuthLogoutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiAuthPasswordChangeMutationKey() {
  return ['api', '/api/auth/password/change', 'POST'] as const
}

export function getPostApiAuthPasswordChangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.password.change.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.auth.password.change.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAuthPasswordChangeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.auth.password.change.$post>) {
      return parseResponse(client.api.auth.password.change.$post(args, options))
    },
  })
}

export function createPostApiAuthPasswordChange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.password.change.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.auth.password.change.$post>,
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
    const mutationDefaults = getPostApiAuthPasswordChangeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiAuthPasswordResetMutationKey() {
  return ['api', '/api/auth/password/reset', 'POST'] as const
}

export function getPostApiAuthPasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.password.reset.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.auth.password.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAuthPasswordResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.auth.password.reset.$post>) {
      return parseResponse(client.api.auth.password.reset.$post(args, options))
    },
  })
}

export function createPostApiAuthPasswordReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.password.reset.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.auth.password.reset.$post>,
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
    const mutationDefaults = getPostApiAuthPasswordResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiAuthPasswordResetConfirmMutationKey() {
  return ['api', '/api/auth/password/reset/confirm', 'POST'] as const
}

export function getPostApiAuthPasswordResetConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.auth.password.reset.confirm.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.auth.password.reset.confirm.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAuthPasswordResetConfirmMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.auth.password.reset.confirm.$post>) {
      return parseResponse(client.api.auth.password.reset.confirm.$post(args, options))
    },
  })
}

export function createPostApiAuthPasswordResetConfirm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.auth.password.reset.confirm.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.auth.password.reset.confirm.$post>,
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
    const mutationDefaults = getPostApiAuthPasswordResetConfirmMutationOptions<
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

export function getPostApiAuthRegisterMutationKey() {
  return ['api', '/api/auth/register', 'POST'] as const
}

export function getPostApiAuthRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.register.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.auth.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAuthRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.auth.register.$post>) {
      return parseResponse(client.api.auth.register.$post(args, options))
    },
  })
}

export function createPostApiAuthRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.register.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.auth.register.$post>,
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
    const mutationDefaults = getPostApiAuthRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAuthRulesQueryKey() {
  return ['api', '/api/auth/rules'] as const
}

export function getApiAuthRulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.rules.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.rules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthRulesQueryKey>
  >({
    queryKey: getApiAuthRulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.auth.rules.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAuthRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.rules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAuthRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAuthRulesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiCloudstoragesQueryKey(
  args: InferRequestType<typeof client.api.cloudstorages.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/cloudstorages', keyArgs] as const
}

export function getApiCloudstoragesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cloudstorages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.cloudstorages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cloudstorages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCloudstoragesQueryKey>
  >({
    queryKey: getApiCloudstoragesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.cloudstorages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiCloudstorages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cloudstorages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.cloudstorages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.cloudstorages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCloudstoragesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCloudstoragesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiCloudstoragesMutationKey() {
  return ['api', '/api/cloudstorages', 'POST'] as const
}

export function getPostApiCloudstoragesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cloudstorages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.cloudstorages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCloudstoragesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.cloudstorages.$post>) {
      return parseResponse(client.api.cloudstorages.$post(args, options))
    },
  })
}

export function createPostApiCloudstorages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.cloudstorages.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.cloudstorages.$post>,
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
    const mutationDefaults = getPostApiCloudstoragesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiCloudstoragesIdQueryKey(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['$get']>,
) {
  return ['api', '/api/cloudstorages/:id', args] as const
}

export function getApiCloudstoragesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCloudstoragesIdQueryKey>
  >({
    queryKey: getApiCloudstoragesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.cloudstorages[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCloudstoragesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.cloudstorages)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCloudstoragesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCloudstoragesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiCloudstoragesIdMutationKey() {
  return ['api', '/api/cloudstorages/:id', 'DELETE'] as const
}

export function getDeleteApiCloudstoragesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.cloudstorages)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCloudstoragesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.cloudstorages)[':id']['$delete']>) {
      return parseResponse(client.api.cloudstorages[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiCloudstoragesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.cloudstorages)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiCloudstoragesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiCloudstoragesIdMutationKey() {
  return ['api', '/api/cloudstorages/:id', 'PATCH'] as const
}

export function getPatchApiCloudstoragesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.cloudstorages)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiCloudstoragesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.cloudstorages)[':id']['$patch']>) {
      return parseResponse(client.api.cloudstorages[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiCloudstoragesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.cloudstorages)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiCloudstoragesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiCloudstoragesIdActionsQueryKey(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['actions']['$get']>,
) {
  return ['api', '/api/cloudstorages/:id/actions', args] as const
}

export function getApiCloudstoragesIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCloudstoragesIdActionsQueryKey>
  >({
    queryKey: getApiCloudstoragesIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.cloudstorages[':id'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCloudstoragesIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.cloudstorages)[':id']['actions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCloudstoragesIdActionsQueryKey>
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
      ...getApiCloudstoragesIdActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiCloudstoragesIdContentV2QueryKey(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['content-v2']['$get']>,
) {
  return ['api', '/api/cloudstorages/:id/content-v2', args] as const
}

export function getApiCloudstoragesIdContentV2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['content-v2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['content-v2']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['content-v2']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCloudstoragesIdContentV2QueryKey>
  >({
    queryKey: getApiCloudstoragesIdContentV2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.cloudstorages[':id']['content-v2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCloudstoragesIdContentV2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['content-v2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.cloudstorages)[':id']['content-v2']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['content-v2']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCloudstoragesIdContentV2QueryKey>
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
      ...getApiCloudstoragesIdContentV2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiCloudstoragesIdPreviewQueryKey(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['preview']['$get']>,
) {
  return ['api', '/api/cloudstorages/:id/preview', args] as const
}

export function getApiCloudstoragesIdPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCloudstoragesIdPreviewQueryKey>
  >({
    queryKey: getApiCloudstoragesIdPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.cloudstorages[':id'].preview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCloudstoragesIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.cloudstorages)[':id']['preview']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['preview']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCloudstoragesIdPreviewQueryKey>
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
      ...getApiCloudstoragesIdPreviewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiCloudstoragesIdStatusQueryKey(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['status']['$get']>,
) {
  return ['api', '/api/cloudstorages/:id/status', args] as const
}

export function getApiCloudstoragesIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCloudstoragesIdStatusQueryKey>
  >({
    queryKey: getApiCloudstoragesIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.cloudstorages[':id'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCloudstoragesIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.cloudstorages)[':id']['status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCloudstoragesIdStatusQueryKey>
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
      ...getApiCloudstoragesIdStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiCommentsQueryKey(args: InferRequestType<typeof client.api.comments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/comments', keyArgs] as const
}

export function getApiCommentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.comments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiCommentsQueryKey>
  >({
    queryKey: getApiCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.comments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.comments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiCommentsMutationKey() {
  return ['api', '/api/comments', 'POST'] as const
}

export function getPostApiCommentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.comments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCommentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.comments.$post>) {
      return parseResponse(client.api.comments.$post(args, options))
    },
  })
}

export function createPostApiComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.comments.$post>,
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
    const mutationDefaults = getPostApiCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiCommentsIdQueryKey(
  args: InferRequestType<(typeof client.api.comments)[':id']['$get']>,
) {
  return ['api', '/api/comments/:id', args] as const
}

export function getApiCommentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.comments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCommentsIdQueryKey>
  >({
    queryKey: getApiCommentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.comments[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiCommentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.comments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCommentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCommentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiCommentsIdMutationKey() {
  return ['api', '/api/comments/:id', 'DELETE'] as const
}

export function getDeleteApiCommentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.comments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCommentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.comments)[':id']['$delete']>) {
      return parseResponse(client.api.comments[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiCommentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.comments)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.comments)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiCommentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiCommentsIdMutationKey() {
  return ['api', '/api/comments/:id', 'PATCH'] as const
}

export function getPatchApiCommentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.comments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiCommentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.comments)[':id']['$patch']>) {
      return parseResponse(client.api.comments[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiCommentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.comments)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiCommentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiConsensusMergesMutationKey() {
  return ['api', '/api/consensus/merges', 'POST'] as const
}

export function getPostApiConsensusMergesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.consensus.merges.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.consensus.merges.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiConsensusMergesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.consensus.merges.$post>) {
      return parseResponse(client.api.consensus.merges.$post(args, options))
    },
  })
}

export function createPostApiConsensusMerges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.consensus.merges.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.consensus.merges.$post>,
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
    const mutationDefaults = getPostApiConsensusMergesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiConsensusSettingsQueryKey(
  args: InferRequestType<typeof client.api.consensus.settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/consensus/settings', keyArgs] as const
}

export function getApiConsensusSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consensus.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.consensus.settings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.consensus.settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiConsensusSettingsQueryKey>
  >({
    queryKey: getApiConsensusSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.consensus.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiConsensusSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consensus.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.consensus.settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.consensus.settings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiConsensusSettingsQueryKey>
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
      ...getApiConsensusSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiConsensusSettingsIdQueryKey(
  args: InferRequestType<(typeof client.api.consensus.settings)[':id']['$get']>,
) {
  return ['api', '/api/consensus/settings/:id', args] as const
}

export function getApiConsensusSettingsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.consensus.settings)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.consensus.settings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.consensus.settings)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiConsensusSettingsIdQueryKey>
  >({
    queryKey: getApiConsensusSettingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.consensus.settings[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiConsensusSettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.consensus.settings)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.consensus.settings)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.consensus.settings)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiConsensusSettingsIdQueryKey>
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
      ...getApiConsensusSettingsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchApiConsensusSettingsIdMutationKey() {
  return ['api', '/api/consensus/settings/:id', 'PATCH'] as const
}

export function getPatchApiConsensusSettingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.consensus.settings)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.consensus.settings)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiConsensusSettingsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.consensus.settings)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.consensus.settings[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiConsensusSettingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.consensus.settings)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.consensus.settings)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiConsensusSettingsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiEventsQueryKey(args: InferRequestType<typeof client.api.events.$get>) {
  return ['api', '/api/events', args] as const
}

export function getApiEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiEventsQueryKey>
  >({
    queryKey: getApiEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiEventsMutationKey() {
  return ['api', '/api/events', 'POST'] as const
}

export function getPostApiEventsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.events.$post>) {
      return parseResponse(client.api.events.$post(args, options))
    },
  })
}

export function createPostApiEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.events.$post>,
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
    const mutationDefaults = getPostApiEventsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiEventsExportMutationKey() {
  return ['api', '/api/events/export', 'POST'] as const
}

export function getPostApiEventsExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.export.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.events.export.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEventsExportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.events.export.$post>) {
      return parseResponse(client.api.events.export.$post(args, options))
    },
  })
}

export function createPostApiEventsExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.events.export.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.events.export.$post>,
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
    const mutationDefaults = getPostApiEventsExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiGrowthQueryKey(args: InferRequestType<typeof client.api.growth.$get>) {
  return ['api', '/api/growth', args] as const
}

export function getApiGrowthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.growth.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.growth.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.growth.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiGrowthQueryKey>
  >({
    queryKey: getApiGrowthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.growth.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiGrowth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.growth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.growth.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.growth.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiGrowthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiGrowthQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiGrowthIdQueryKey(
  args: InferRequestType<(typeof client.api.growth)[':id']['$get']>,
) {
  return ['api', '/api/growth/:id', args] as const
}

export function getApiGrowthIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.growth)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.growth)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.growth)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGrowthIdQueryKey>
  >({
    queryKey: getApiGrowthIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.growth[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiGrowthId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.growth)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.growth)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.growth)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGrowthIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiGrowthIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchApiGrowthIdMutationKey() {
  return ['api', '/api/growth/:id', 'PATCH'] as const
}

export function getPatchApiGrowthIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.growth)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.growth)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiGrowthIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.growth)[':id']['$patch']>) {
      return parseResponse(client.api.growth[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiGrowthId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.growth)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.growth)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiGrowthIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiGuidesMutationKey() {
  return ['api', '/api/guides', 'POST'] as const
}

export function getPostApiGuidesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.guides.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.guides.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiGuidesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.guides.$post>) {
      return parseResponse(client.api.guides.$post(args, options))
    },
  })
}

export function createPostApiGuides<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.guides.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.guides.$post>,
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
    const mutationDefaults = getPostApiGuidesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiGuidesIdQueryKey(
  args: InferRequestType<(typeof client.api.guides)[':id']['$get']>,
) {
  return ['api', '/api/guides/:id', args] as const
}

export function getApiGuidesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.guides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.guides)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.guides)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGuidesIdQueryKey>
  >({
    queryKey: getApiGuidesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.guides[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiGuidesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.guides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.guides)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.guides)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGuidesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiGuidesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiGuidesIdMutationKey() {
  return ['api', '/api/guides/:id', 'DELETE'] as const
}

export function getDeleteApiGuidesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.guides)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.guides)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiGuidesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.guides)[':id']['$delete']>) {
      return parseResponse(client.api.guides[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiGuidesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.guides)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.guides)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiGuidesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiGuidesIdMutationKey() {
  return ['api', '/api/guides/:id', 'PATCH'] as const
}

export function getPatchApiGuidesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.guides)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.guides)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiGuidesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.guides)[':id']['$patch']>) {
      return parseResponse(client.api.guides[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiGuidesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.guides)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.guides)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiGuidesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiInvitationsQueryKey(
  args: InferRequestType<typeof client.api.invitations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invitations', keyArgs] as const
}

export function getApiInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invitations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.invitations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invitations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvitationsQueryKey>
  >({
    queryKey: getApiInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invitations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.invitations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invitations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiInvitationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiInvitationsMutationKey() {
  return ['api', '/api/invitations', 'POST'] as const
}

export function getPostApiInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invitations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.invitations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvitationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invitations.$post>) {
      return parseResponse(client.api.invitations.$post(args, options))
    },
  })
}

export function createPostApiInvitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invitations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.invitations.$post>,
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
    const mutationDefaults = getPostApiInvitationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiInvitationsKeyQueryKey(
  args: InferRequestType<(typeof client.api.invitations)[':key']['$get']>,
) {
  return ['api', '/api/invitations/:key', args] as const
}

export function getApiInvitationsKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.invitations)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.invitations)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.invitations)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvitationsKeyQueryKey>
  >({
    queryKey: getApiInvitationsKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invitations[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiInvitationsKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.invitations)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.invitations)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.invitations)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvitationsKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiInvitationsKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiInvitationsKeyMutationKey() {
  return ['api', '/api/invitations/:key', 'DELETE'] as const
}

export function getDeleteApiInvitationsKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.invitations)[':key']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.invitations)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiInvitationsKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.invitations)[':key']['$delete']>) {
      return parseResponse(client.api.invitations[':key'].$delete(args, options))
    },
  })
}

export function createDeleteApiInvitationsKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.invitations)[':key']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.invitations)[':key']['$delete']>,
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
    const mutationDefaults = getDeleteApiInvitationsKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiInvitationsKeyAcceptMutationKey() {
  return ['api', '/api/invitations/:key/accept', 'POST'] as const
}

export function getPostApiInvitationsKeyAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.invitations)[':key']['accept']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.invitations)[':key']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvitationsKeyAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.invitations)[':key']['accept']['$post']>,
    ) {
      return parseResponse(client.api.invitations[':key'].accept.$post(args, options))
    },
  })
}

export function createPostApiInvitationsKeyAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.invitations)[':key']['accept']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.invitations)[':key']['accept']['$post']>,
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
    const mutationDefaults = getPostApiInvitationsKeyAcceptMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiInvitationsKeyDeclineMutationKey() {
  return ['api', '/api/invitations/:key/decline', 'POST'] as const
}

export function getPostApiInvitationsKeyDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.invitations)[':key']['decline']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.invitations)[':key']['decline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvitationsKeyDeclineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.invitations)[':key']['decline']['$post']>,
    ) {
      return parseResponse(client.api.invitations[':key'].decline.$post(args, options))
    },
  })
}

export function createPostApiInvitationsKeyDecline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.invitations)[':key']['decline']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.invitations)[':key']['decline']['$post']>,
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
    const mutationDefaults = getPostApiInvitationsKeyDeclineMutationOptions<
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

export function getPostApiInvitationsKeyResendMutationKey() {
  return ['api', '/api/invitations/:key/resend', 'POST'] as const
}

export function getPostApiInvitationsKeyResendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.invitations)[':key']['resend']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.invitations)[':key']['resend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvitationsKeyResendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.invitations)[':key']['resend']['$post']>,
    ) {
      return parseResponse(client.api.invitations[':key'].resend.$post(args, options))
    },
  })
}

export function createPostApiInvitationsKeyResend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.invitations)[':key']['resend']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.invitations)[':key']['resend']['$post']>,
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
    const mutationDefaults = getPostApiInvitationsKeyResendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiIssuesQueryKey(args: InferRequestType<typeof client.api.issues.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/issues', keyArgs] as const
}

export function getApiIssuesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.issues.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.issues.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.issues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiIssuesQueryKey>
  >({
    queryKey: getApiIssuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.issues.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiIssues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.issues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.issues.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.issues.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiIssuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiIssuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiIssuesMutationKey() {
  return ['api', '/api/issues', 'POST'] as const
}

export function getPostApiIssuesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.issues.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.issues.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIssuesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.issues.$post>) {
      return parseResponse(client.api.issues.$post(args, options))
    },
  })
}

export function createPostApiIssues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.issues.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.issues.$post>,
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
    const mutationDefaults = getPostApiIssuesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiIssuesIdQueryKey(
  args: InferRequestType<(typeof client.api.issues)[':id']['$get']>,
) {
  return ['api', '/api/issues/:id', args] as const
}

export function getApiIssuesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.issues)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.issues)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.issues)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIssuesIdQueryKey>
  >({
    queryKey: getApiIssuesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.issues[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiIssuesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.issues)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.issues)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.issues)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIssuesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiIssuesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiIssuesIdMutationKey() {
  return ['api', '/api/issues/:id', 'DELETE'] as const
}

export function getDeleteApiIssuesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.issues)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.issues)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiIssuesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.issues)[':id']['$delete']>) {
      return parseResponse(client.api.issues[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiIssuesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.issues)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.issues)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiIssuesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiIssuesIdMutationKey() {
  return ['api', '/api/issues/:id', 'PATCH'] as const
}

export function getPatchApiIssuesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.issues)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.issues)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiIssuesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.issues)[':id']['$patch']>) {
      return parseResponse(client.api.issues[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiIssuesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.issues)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.issues)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiIssuesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiJobsQueryKey(args: InferRequestType<typeof client.api.jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/jobs', keyArgs] as const
}

export function getApiJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiJobsQueryKey>
  >({
    queryKey: getApiJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.jobs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiJobsMutationKey() {
  return ['api', '/api/jobs', 'POST'] as const
}

export function getPostApiJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.jobs.$post>) {
      return parseResponse(client.api.jobs.$post(args, options))
    },
  })
}

export function createPostApiJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.jobs.$post>,
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
    const mutationDefaults = getPostApiJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiJobsIdQueryKey(
  args: InferRequestType<(typeof client.api.jobs)[':id']['$get']>,
) {
  return ['api', '/api/jobs/:id', args] as const
}

export function getApiJobsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.api.jobs)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsIdQueryKey>
  >({
    queryKey: getApiJobsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiJobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.jobs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJobsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJobsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiJobsIdMutationKey() {
  return ['api', '/api/jobs/:id', 'DELETE'] as const
}

export function getDeleteApiJobsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.jobs)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiJobsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.jobs)[':id']['$delete']>) {
      return parseResponse(client.api.jobs[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiJobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.jobs)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiJobsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiJobsIdMutationKey() {
  return ['api', '/api/jobs/:id', 'PATCH'] as const
}

export function getPatchApiJobsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiJobsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.jobs)[':id']['$patch']>) {
      return parseResponse(client.api.jobs[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiJobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.jobs)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiJobsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiJobsIdAnnotationsIndexQueryKey(
  args: InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$get']>,
) {
  return ['api', '/api/jobs/:id/annotations/', args] as const
}

export function getApiJobsIdAnnotationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsIdAnnotationsIndexQueryKey>
  >({
    queryKey: getApiJobsIdAnnotationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs[':id'].annotations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiJobsIdAnnotationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJobsIdAnnotationsIndexQueryKey>
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
      ...getApiJobsIdAnnotationsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiJobsIdAnnotationsIndexMutationKey() {
  return ['api', '/api/jobs/:id/annotations/', 'PUT'] as const
}

export function getPutApiJobsIdAnnotationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiJobsIdAnnotationsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$put']>,
    ) {
      return parseResponse(client.api.jobs[':id'].annotations.index.$put(args, options))
    },
  })
}

export function createPutApiJobsIdAnnotationsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$put']>,
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
    const mutationDefaults = getPutApiJobsIdAnnotationsIndexMutationOptions<
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

export function getPostApiJobsIdAnnotationsIndexMutationKey() {
  return ['api', '/api/jobs/:id/annotations/', 'POST'] as const
}

export function getPostApiJobsIdAnnotationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiJobsIdAnnotationsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$post']>,
    ) {
      return parseResponse(client.api.jobs[':id'].annotations.index.$post(args, options))
    },
  })
}

export function createPostApiJobsIdAnnotationsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$post']>,
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
    const mutationDefaults = getPostApiJobsIdAnnotationsIndexMutationOptions<
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

export function getDeleteApiJobsIdAnnotationsIndexMutationKey() {
  return ['api', '/api/jobs/:id/annotations/', 'DELETE'] as const
}

export function getDeleteApiJobsIdAnnotationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiJobsIdAnnotationsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$delete']>,
    ) {
      return parseResponse(client.api.jobs[':id'].annotations.index.$delete(args, options))
    },
  })
}

export function createDeleteApiJobsIdAnnotationsIndex<
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
                  ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$delete']>,
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
    const mutationDefaults = getDeleteApiJobsIdAnnotationsIndexMutationOptions<
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

export function getPatchApiJobsIdAnnotationsIndexMutationKey() {
  return ['api', '/api/jobs/:id/annotations/', 'PATCH'] as const
}

export function getPatchApiJobsIdAnnotationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiJobsIdAnnotationsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$patch']>,
    ) {
      return parseResponse(client.api.jobs[':id'].annotations.index.$patch(args, options))
    },
  })
}

export function createPatchApiJobsIdAnnotationsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$patch']>,
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
    const mutationDefaults = getPatchApiJobsIdAnnotationsIndexMutationOptions<
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

export function getApiJobsIdDataQueryKey(
  args: InferRequestType<(typeof client.api.jobs)[':id']['data']['$get']>,
) {
  return ['api', '/api/jobs/:id/data', args] as const
}

export function getApiJobsIdDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':id']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsIdDataQueryKey>
  >({
    queryKey: getApiJobsIdDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs[':id'].data.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiJobsIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.jobs)[':id']['data']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJobsIdDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJobsIdDataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiJobsIdDataMetaQueryKey(
  args: InferRequestType<(typeof client.api.jobs)[':id']['data']['meta']['$get']>,
) {
  return ['api', '/api/jobs/:id/data/meta', args] as const
}

export function getApiJobsIdDataMetaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':id']['data']['meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['meta']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsIdDataMetaQueryKey>
  >({
    queryKey: getApiJobsIdDataMetaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs[':id'].data.meta.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiJobsIdDataMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.jobs)[':id']['data']['meta']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['meta']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJobsIdDataMetaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJobsIdDataMetaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchApiJobsIdDataMetaMutationKey() {
  return ['api', '/api/jobs/:id/data/meta', 'PATCH'] as const
}

export function getPatchApiJobsIdDataMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['meta']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':id']['data']['meta']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiJobsIdDataMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.jobs)[':id']['data']['meta']['$patch']>,
    ) {
      return parseResponse(client.api.jobs[':id'].data.meta.$patch(args, options))
    },
  })
}

export function createPatchApiJobsIdDataMeta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['meta']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.jobs)[':id']['data']['meta']['$patch']>,
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
    const mutationDefaults = getPatchApiJobsIdDataMetaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiJobsIdDatasetExportMutationKey() {
  return ['api', '/api/jobs/:id/dataset/export', 'POST'] as const
}

export function getPostApiJobsIdDatasetExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':id']['dataset']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':id']['dataset']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiJobsIdDatasetExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.jobs)[':id']['dataset']['export']['$post']>,
    ) {
      return parseResponse(client.api.jobs[':id'].dataset.export.$post(args, options))
    },
  })
}

export function createPostApiJobsIdDatasetExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':id']['dataset']['export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.jobs)[':id']['dataset']['export']['$post']>,
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
    const mutationDefaults = getPostApiJobsIdDatasetExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiJobsIdPreviewQueryKey(
  args: InferRequestType<(typeof client.api.jobs)[':id']['preview']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/jobs/:id/preview', keyArgs] as const
}

export function getApiJobsIdPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':id']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsIdPreviewQueryKey>
  >({
    queryKey: getApiJobsIdPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs[':id'].preview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiJobsIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.jobs)[':id']['preview']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':id']['preview']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJobsIdPreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJobsIdPreviewQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiJobsIdValidationLayoutQueryKey(
  args: InferRequestType<(typeof client.api.jobs)[':id']['validation_layout']['$get']>,
) {
  return ['api', '/api/jobs/:id/validation_layout', args] as const
}

export function getApiJobsIdValidationLayoutQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':id']['validation_layout']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':id']['validation_layout']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':id']['validation_layout']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsIdValidationLayoutQueryKey>
  >({
    queryKey: getApiJobsIdValidationLayoutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs[':id'].validation_layout.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiJobsIdValidationLayout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':id']['validation_layout']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.jobs)[':id']['validation_layout']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':id']['validation_layout']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJobsIdValidationLayoutQueryKey>
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
      ...getApiJobsIdValidationLayoutQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchApiJobsIdValidationLayoutMutationKey() {
  return ['api', '/api/jobs/:id/validation_layout', 'PATCH'] as const
}

export function getPatchApiJobsIdValidationLayoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':id']['validation_layout']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':id']['validation_layout']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiJobsIdValidationLayoutMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.jobs)[':id']['validation_layout']['$patch']>,
    ) {
      return parseResponse(client.api.jobs[':id'].validation_layout.$patch(args, options))
    },
  })
}

export function createPatchApiJobsIdValidationLayout<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':id']['validation_layout']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.jobs)[':id']['validation_layout']['$patch']>,
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
    const mutationDefaults = getPatchApiJobsIdValidationLayoutMutationOptions<
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

export function getApiLabelsQueryKey(args: InferRequestType<typeof client.api.labels.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/labels', keyArgs] as const
}

export function getApiLabelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.labels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.labels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.labels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiLabelsQueryKey>
  >({
    queryKey: getApiLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.labels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.labels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.labels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiLabelsIdQueryKey(
  args: InferRequestType<(typeof client.api.labels)[':id']['$get']>,
) {
  return ['api', '/api/labels/:id', args] as const
}

export function getApiLabelsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.labels)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.labels)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.labels)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabelsIdQueryKey>
  >({
    queryKey: getApiLabelsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.labels[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLabelsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.labels)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.labels)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.labels)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLabelsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLabelsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiLabelsIdMutationKey() {
  return ['api', '/api/labels/:id', 'DELETE'] as const
}

export function getDeleteApiLabelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.labels)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.labels)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLabelsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.labels)[':id']['$delete']>) {
      return parseResponse(client.api.labels[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiLabelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.labels)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.labels)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiLabelsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiLabelsIdMutationKey() {
  return ['api', '/api/labels/:id', 'PATCH'] as const
}

export function getPatchApiLabelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.labels)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.labels)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLabelsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.labels)[':id']['$patch']>) {
      return parseResponse(client.api.labels[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiLabelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.labels)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.labels)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiLabelsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiLambdaFunctionsQueryKey() {
  return ['api', '/api/lambda/functions'] as const
}

export function getApiLambdaFunctionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.functions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.functions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLambdaFunctionsQueryKey>
  >({
    queryKey: getApiLambdaFunctionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lambda.functions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLambdaFunctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.functions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLambdaFunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLambdaFunctionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiLambdaFunctionsFuncIdQueryKey(
  args: InferRequestType<(typeof client.api.lambda.functions)[':func_id']['$get']>,
) {
  return ['api', '/api/lambda/functions/:func_id', args] as const
}

export function getApiLambdaFunctionsFuncIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.lambda.functions)[':func_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.lambda.functions)[':func_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.lambda.functions)[':func_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLambdaFunctionsFuncIdQueryKey>
  >({
    queryKey: getApiLambdaFunctionsFuncIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lambda.functions[':func_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLambdaFunctionsFuncId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.lambda.functions)[':func_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.lambda.functions)[':func_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.lambda.functions)[':func_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLambdaFunctionsFuncIdQueryKey>
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
      ...getApiLambdaFunctionsFuncIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiLambdaFunctionsFuncIdMutationKey() {
  return ['api', '/api/lambda/functions/:func_id', 'POST'] as const
}

export function getPostApiLambdaFunctionsFuncIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.lambda.functions)[':func_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.lambda.functions)[':func_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLambdaFunctionsFuncIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.lambda.functions)[':func_id']['$post']>,
    ) {
      return parseResponse(client.api.lambda.functions[':func_id'].$post(args, options))
    },
  })
}

export function createPostApiLambdaFunctionsFuncId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.lambda.functions)[':func_id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.lambda.functions)[':func_id']['$post']>,
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
    const mutationDefaults = getPostApiLambdaFunctionsFuncIdMutationOptions<
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

export function getApiLambdaRequestsQueryKey() {
  return ['api', '/api/lambda/requests'] as const
}

export function getApiLambdaRequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.requests.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLambdaRequestsQueryKey>
  >({
    queryKey: getApiLambdaRequestsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lambda.requests.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLambdaRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.requests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLambdaRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLambdaRequestsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiLambdaRequestsMutationKey() {
  return ['api', '/api/lambda/requests', 'POST'] as const
}

export function getPostApiLambdaRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.requests.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.lambda.requests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLambdaRequestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.lambda.requests.$post>) {
      return parseResponse(client.api.lambda.requests.$post(args, options))
    },
  })
}

export function createPostApiLambdaRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.requests.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.lambda.requests.$post>,
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
    const mutationDefaults = getPostApiLambdaRequestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiLambdaRequestsIdQueryKey(
  args: InferRequestType<(typeof client.api.lambda.requests)[':id']['$get']>,
) {
  return ['api', '/api/lambda/requests/:id', args] as const
}

export function getApiLambdaRequestsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda.requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.lambda.requests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.lambda.requests)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLambdaRequestsIdQueryKey>
  >({
    queryKey: getApiLambdaRequestsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lambda.requests[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLambdaRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda.requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.lambda.requests)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.lambda.requests)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLambdaRequestsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLambdaRequestsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiLambdaRequestsIdMutationKey() {
  return ['api', '/api/lambda/requests/:id', 'DELETE'] as const
}

export function getDeleteApiLambdaRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.lambda.requests)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.lambda.requests)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLambdaRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.lambda.requests)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.lambda.requests[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiLambdaRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lambda.requests)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.lambda.requests)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiLambdaRequestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiMembershipsQueryKey(
  args: InferRequestType<typeof client.api.memberships.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/memberships', keyArgs] as const
}

export function getApiMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memberships.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.memberships.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memberships.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembershipsQueryKey>
  >({
    queryKey: getApiMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.memberships.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiMemberships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memberships.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.memberships.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memberships.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembershipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiMembershipsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiMembershipsIdQueryKey(
  args: InferRequestType<(typeof client.api.memberships)[':id']['$get']>,
) {
  return ['api', '/api/memberships/:id', args] as const
}

export function getApiMembershipsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.memberships)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.memberships)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.memberships)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembershipsIdQueryKey>
  >({
    queryKey: getApiMembershipsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.memberships[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMembershipsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.memberships)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.memberships)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.memberships)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembershipsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiMembershipsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiMembershipsIdMutationKey() {
  return ['api', '/api/memberships/:id', 'DELETE'] as const
}

export function getDeleteApiMembershipsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.memberships)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.memberships)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiMembershipsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.memberships)[':id']['$delete']>) {
      return parseResponse(client.api.memberships[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiMembershipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memberships)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.memberships)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiMembershipsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiMembershipsIdMutationKey() {
  return ['api', '/api/memberships/:id', 'PATCH'] as const
}

export function getPatchApiMembershipsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.memberships)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.memberships)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiMembershipsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.memberships)[':id']['$patch']>) {
      return parseResponse(client.api.memberships[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiMembershipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.memberships)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.memberships)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiMembershipsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiOrganizationsQueryKey(
  args: InferRequestType<typeof client.api.organizations.$get>,
) {
  return ['api', '/api/organizations', args] as const
}

export function getApiOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.organizations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.organizations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsQueryKey>
  >({
    queryKey: getApiOrganizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.organizations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.organizations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOrganizationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiOrganizationsMutationKey() {
  return ['api', '/api/organizations', 'POST'] as const
}

export function getPostApiOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.organizations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.organizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrganizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.organizations.$post>) {
      return parseResponse(client.api.organizations.$post(args, options))
    },
  })
}

export function createPostApiOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.organizations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.organizations.$post>,
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
    const mutationDefaults = getPostApiOrganizationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiOrganizationsIdQueryKey(
  args: InferRequestType<(typeof client.api.organizations)[':id']['$get']>,
) {
  return ['api', '/api/organizations/:id', args] as const
}

export function getApiOrganizationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.organizations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsIdQueryKey>
  >({
    queryKey: getApiOrganizationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiOrganizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.organizations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.organizations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOrganizationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiOrganizationsIdMutationKey() {
  return ['api', '/api/organizations/:id', 'DELETE'] as const
}

export function getDeleteApiOrganizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.organizations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiOrganizationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.organizations)[':id']['$delete']>) {
      return parseResponse(client.api.organizations[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiOrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.organizations)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.organizations)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiOrganizationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiOrganizationsIdMutationKey() {
  return ['api', '/api/organizations/:id', 'PATCH'] as const
}

export function getPatchApiOrganizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.organizations)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.organizations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiOrganizationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.organizations)[':id']['$patch']>) {
      return parseResponse(client.api.organizations[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiOrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.organizations)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.organizations)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiOrganizationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiProjectsQueryKey(args: InferRequestType<typeof client.api.projects.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/projects', keyArgs] as const
}

export function getApiProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiProjectsQueryKey>
  >({
    queryKey: getApiProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.projects.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.projects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiProjectsMutationKey() {
  return ['api', '/api/projects', 'POST'] as const
}

export function getPostApiProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.projects.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.projects.$post>) {
      return parseResponse(client.api.projects.$post(args, options))
    },
  })
}

export function createPostApiProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.projects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.projects.$post>,
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
    const mutationDefaults = getPostApiProjectsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiProjectsIdQueryKey(
  args: InferRequestType<(typeof client.api.projects)[':id']['$get']>,
) {
  return ['api', '/api/projects/:id', args] as const
}

export function getApiProjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.projects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.projects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.projects)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProjectsIdQueryKey>
  >({
    queryKey: getApiProjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.projects[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiProjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.projects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.projects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.projects)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProjectsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiProjectsIdMutationKey() {
  return ['api', '/api/projects/:id', 'DELETE'] as const
}

export function getDeleteApiProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.projects)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.projects)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiProjectsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.projects)[':id']['$delete']>) {
      return parseResponse(client.api.projects[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.projects)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.projects)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiProjectsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiProjectsIdMutationKey() {
  return ['api', '/api/projects/:id', 'PATCH'] as const
}

export function getPatchApiProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.projects)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.projects)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiProjectsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.projects)[':id']['$patch']>) {
      return parseResponse(client.api.projects[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.projects)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.projects)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiProjectsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiProjectsIdBackupExportMutationKey() {
  return ['api', '/api/projects/:id/backup/export', 'POST'] as const
}

export function getPostApiProjectsIdBackupExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.projects)[':id']['backup']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.projects)[':id']['backup']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProjectsIdBackupExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.projects)[':id']['backup']['export']['$post']>,
    ) {
      return parseResponse(client.api.projects[':id'].backup.export.$post(args, options))
    },
  })
}

export function createPostApiProjectsIdBackupExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.projects)[':id']['backup']['export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.projects)[':id']['backup']['export']['$post']>,
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
    const mutationDefaults = getPostApiProjectsIdBackupExportMutationOptions<
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

export function getPostApiProjectsIdDatasetIndexMutationKey() {
  return ['api', '/api/projects/:id/dataset/', 'POST'] as const
}

export function getPostApiProjectsIdDatasetIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.projects)[':id']['dataset']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.projects)[':id']['dataset']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProjectsIdDatasetIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.projects)[':id']['dataset']['index']['$post']>,
    ) {
      return parseResponse(client.api.projects[':id'].dataset.index.$post(args, options))
    },
  })
}

export function createPostApiProjectsIdDatasetIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.projects)[':id']['dataset']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.projects)[':id']['dataset']['index']['$post']>,
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
    const mutationDefaults = getPostApiProjectsIdDatasetIndexMutationOptions<
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

export function getPostApiProjectsIdDatasetExportMutationKey() {
  return ['api', '/api/projects/:id/dataset/export', 'POST'] as const
}

export function getPostApiProjectsIdDatasetExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.projects)[':id']['dataset']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.projects)[':id']['dataset']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProjectsIdDatasetExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.projects)[':id']['dataset']['export']['$post']>,
    ) {
      return parseResponse(client.api.projects[':id'].dataset.export.$post(args, options))
    },
  })
}

export function createPostApiProjectsIdDatasetExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.projects)[':id']['dataset']['export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.projects)[':id']['dataset']['export']['$post']>,
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
    const mutationDefaults = getPostApiProjectsIdDatasetExportMutationOptions<
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

export function getApiProjectsIdPreviewQueryKey(
  args: InferRequestType<(typeof client.api.projects)[':id']['preview']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/projects/:id/preview', keyArgs] as const
}

export function getApiProjectsIdPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.projects)[':id']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.projects)[':id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.projects)[':id']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProjectsIdPreviewQueryKey>
  >({
    queryKey: getApiProjectsIdPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.projects[':id'].preview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiProjectsIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.projects)[':id']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.projects)[':id']['preview']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.projects)[':id']['preview']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProjectsIdPreviewQueryKey>
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
      ...getApiProjectsIdPreviewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiProjectsBackupIndexMutationKey() {
  return ['api', '/api/projects/backup/', 'POST'] as const
}

export function getPostApiProjectsBackupIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.projects.backup.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.projects.backup.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProjectsBackupIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.projects.backup.index.$post>) {
      return parseResponse(client.api.projects.backup.index.$post(args, options))
    },
  })
}

export function createPostApiProjectsBackupIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.projects.backup.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.projects.backup.index.$post>,
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
    const mutationDefaults = getPostApiProjectsBackupIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiQualityConflictsQueryKey(
  args: InferRequestType<typeof client.api.quality.conflicts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/quality/conflicts', keyArgs] as const
}

export function getApiQualityConflictsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.conflicts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.quality.conflicts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.conflicts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualityConflictsQueryKey>
  >({
    queryKey: getApiQualityConflictsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.quality.conflicts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiQualityConflicts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.conflicts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.quality.conflicts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.conflicts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiQualityConflictsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiQualityConflictsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiQualityReportsQueryKey(
  args: InferRequestType<typeof client.api.quality.reports.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/quality/reports', keyArgs] as const
}

export function getApiQualityReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.reports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.quality.reports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.reports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualityReportsQueryKey>
  >({
    queryKey: getApiQualityReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.quality.reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiQualityReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.quality.reports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.reports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiQualityReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiQualityReportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiQualityReportsMutationKey() {
  return ['api', '/api/quality/reports', 'POST'] as const
}

export function getPostApiQualityReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.reports.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.quality.reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiQualityReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.quality.reports.$post>) {
      return parseResponse(client.api.quality.reports.$post(args, options))
    },
  })
}

export function createPostApiQualityReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.reports.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.quality.reports.$post>,
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
    const mutationDefaults = getPostApiQualityReportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiQualityReportsIdQueryKey(
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['$get']>,
) {
  return ['api', '/api/quality/reports/:id', args] as const
}

export function getApiQualityReportsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualityReportsIdQueryKey>
  >({
    queryKey: getApiQualityReportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.quality.reports[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiQualityReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.quality.reports)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiQualityReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiQualityReportsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiQualityReportsIdConfusionQueryKey(
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['confusion']['$get']>,
) {
  return ['api', '/api/quality/reports/:id/confusion', args] as const
}

export function getApiQualityReportsIdConfusionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['confusion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['confusion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['confusion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualityReportsIdConfusionQueryKey>
  >({
    queryKey: getApiQualityReportsIdConfusionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.quality.reports[':id'].confusion.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiQualityReportsIdConfusion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['confusion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.quality.reports)[':id']['confusion']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['confusion']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiQualityReportsIdConfusionQueryKey>
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
      ...getApiQualityReportsIdConfusionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiQualityReportsIdConfusionMatrixQueryKey(
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['confusion']['matrix']['$get']>,
) {
  return ['api', '/api/quality/reports/:id/confusion/matrix', args] as const
}

export function getApiQualityReportsIdConfusionMatrixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.quality.reports)[':id']['confusion']['matrix']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['confusion']['matrix']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.quality.reports)[':id']['confusion']['matrix']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualityReportsIdConfusionMatrixQueryKey>
  >({
    queryKey: getApiQualityReportsIdConfusionMatrixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.quality.reports[':id'].confusion.matrix.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiQualityReportsIdConfusionMatrix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.quality.reports)[':id']['confusion']['matrix']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.quality.reports)[':id']['confusion']['matrix']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.quality.reports)[':id']['confusion']['matrix']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiQualityReportsIdConfusionMatrixQueryKey>
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
      ...getApiQualityReportsIdConfusionMatrixQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiQualityReportsIdDataQueryKey(
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['data']['$get']>,
) {
  return ['api', '/api/quality/reports/:id/data', args] as const
}

export function getApiQualityReportsIdDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualityReportsIdDataQueryKey>
  >({
    queryKey: getApiQualityReportsIdDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.quality.reports[':id'].data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiQualityReportsIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.quality.reports)[':id']['data']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['data']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiQualityReportsIdDataQueryKey>
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
      ...getApiQualityReportsIdDataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiQualitySettingsQueryKey(
  args: InferRequestType<typeof client.api.quality.settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/quality/settings', keyArgs] as const
}

export function getApiQualitySettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.quality.settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualitySettingsQueryKey>
  >({
    queryKey: getApiQualitySettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.quality.settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiQualitySettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.quality.settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.settings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiQualitySettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiQualitySettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiQualitySettingsIdQueryKey(
  args: InferRequestType<(typeof client.api.quality.settings)[':id']['$get']>,
) {
  return ['api', '/api/quality/settings/:id', args] as const
}

export function getApiQualitySettingsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.quality.settings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.quality.settings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.quality.settings)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualitySettingsIdQueryKey>
  >({
    queryKey: getApiQualitySettingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.quality.settings[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiQualitySettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.quality.settings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.quality.settings)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.quality.settings)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiQualitySettingsIdQueryKey>
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
      ...getApiQualitySettingsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiQualitySettingsIdMutationKey() {
  return ['api', '/api/quality/settings/:id', 'PUT'] as const
}

export function getPutApiQualitySettingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.quality.settings)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.quality.settings)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiQualitySettingsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.quality.settings)[':id']['$put']>) {
      return parseResponse(client.api.quality.settings[':id'].$put(args, options))
    },
  })
}

export function createPutApiQualitySettingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.quality.settings)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.quality.settings)[':id']['$put']>,
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
    const mutationDefaults = getPutApiQualitySettingsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiQualitySettingsIdMutationKey() {
  return ['api', '/api/quality/settings/:id', 'PATCH'] as const
}

export function getPatchApiQualitySettingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.quality.settings)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.quality.settings)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiQualitySettingsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.quality.settings)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.quality.settings[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiQualitySettingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.quality.settings)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.quality.settings)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiQualitySettingsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiQualitySettingsRequirementsQueryKey(
  args: InferRequestType<typeof client.api.quality.settings.requirements.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/quality/settings/requirements', keyArgs] as const
}

export function getApiQualitySettingsRequirementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.quality.settings.requirements.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.quality.settings.requirements.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.quality.settings.requirements.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualitySettingsRequirementsQueryKey>
  >({
    queryKey: getApiQualitySettingsRequirementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.quality.settings.requirements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiQualitySettingsRequirements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.quality.settings.requirements.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.quality.settings.requirements.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.quality.settings.requirements.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiQualitySettingsRequirementsQueryKey>
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
      ...getApiQualitySettingsRequirementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiQualitySettingsRequirementsMutationKey() {
  return ['api', '/api/quality/settings/requirements', 'POST'] as const
}

export function getPostApiQualitySettingsRequirementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.quality.settings.requirements.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.quality.settings.requirements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiQualitySettingsRequirementsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.quality.settings.requirements.$post>,
    ) {
      return parseResponse(client.api.quality.settings.requirements.$post(args, options))
    },
  })
}

export function createPostApiQualitySettingsRequirements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.quality.settings.requirements.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.quality.settings.requirements.$post>,
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
    const mutationDefaults = getPostApiQualitySettingsRequirementsMutationOptions<
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

export function getApiQualitySettingsRequirementsIdQueryKey(
  args: InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$get']>,
) {
  return ['api', '/api/quality/settings/requirements/:id', args] as const
}

export function getApiQualitySettingsRequirementsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.quality.settings.requirements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.quality.settings.requirements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualitySettingsRequirementsIdQueryKey>
  >({
    queryKey: getApiQualitySettingsRequirementsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.quality.settings.requirements[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiQualitySettingsRequirementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.quality.settings.requirements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.quality.settings.requirements)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiQualitySettingsRequirementsIdQueryKey>
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
      ...getApiQualitySettingsRequirementsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiQualitySettingsRequirementsIdMutationKey() {
  return ['api', '/api/quality/settings/requirements/:id', 'PUT'] as const
}

export function getPutApiQualitySettingsRequirementsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.quality.settings.requirements)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiQualitySettingsRequirementsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$put']>,
    ) {
      return parseResponse(client.api.quality.settings.requirements[':id'].$put(args, options))
    },
  })
}

export function createPutApiQualitySettingsRequirementsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.quality.settings.requirements)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$put']>,
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
    const mutationDefaults = getPutApiQualitySettingsRequirementsIdMutationOptions<
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

export function getDeleteApiQualitySettingsRequirementsIdMutationKey() {
  return ['api', '/api/quality/settings/requirements/:id', 'DELETE'] as const
}

export function getDeleteApiQualitySettingsRequirementsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.quality.settings.requirements)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiQualitySettingsRequirementsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.quality.settings.requirements[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiQualitySettingsRequirementsId<
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
                  ReturnType<(typeof client.api.quality.settings.requirements)[':id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiQualitySettingsRequirementsIdMutationOptions<
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

export function getPatchApiQualitySettingsRequirementsIdMutationKey() {
  return ['api', '/api/quality/settings/requirements/:id', 'PATCH'] as const
}

export function getPatchApiQualitySettingsRequirementsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.quality.settings.requirements)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiQualitySettingsRequirementsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.quality.settings.requirements[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiQualitySettingsRequirementsId<
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
                ReturnType<(typeof client.api.quality.settings.requirements)[':id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiQualitySettingsRequirementsIdMutationOptions<
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

export function getPostApiQualitySettingsRequirementsBulkMutationKey() {
  return ['api', '/api/quality/settings/requirements/bulk', 'POST'] as const
}

export function getPostApiQualitySettingsRequirementsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.quality.settings.requirements.bulk.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.quality.settings.requirements.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiQualitySettingsRequirementsBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.quality.settings.requirements.bulk.$post>,
    ) {
      return parseResponse(client.api.quality.settings.requirements.bulk.$post(args, options))
    },
  })
}

export function createPostApiQualitySettingsRequirementsBulk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.quality.settings.requirements.bulk.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.quality.settings.requirements.bulk.$post>,
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
    const mutationDefaults = getPostApiQualitySettingsRequirementsBulkMutationOptions<
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

export function getApiRequestsQueryKey(args: InferRequestType<typeof client.api.requests.$get>) {
  return ['api', '/api/requests', args] as const
}

export function getApiRequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.requests.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.requests.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.requests.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiRequestsQueryKey>
  >({
    queryKey: getApiRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.requests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.requests.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.requests.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRequestsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiRequestsIdQueryKey(
  args: InferRequestType<(typeof client.api.requests)[':id']['$get']>,
) {
  return ['api', '/api/requests/:id', args] as const
}

export function getApiRequestsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.requests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.requests)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRequestsIdQueryKey>
  >({
    queryKey: getApiRequestsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.requests[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.requests)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.requests)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRequestsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRequestsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiRequestsIdCancelMutationKey() {
  return ['api', '/api/requests/:id/cancel', 'POST'] as const
}

export function getPostApiRequestsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.requests)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.requests)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRequestsIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.requests)[':id']['cancel']['$post']>,
    ) {
      return parseResponse(client.api.requests[':id'].cancel.$post(args, options))
    },
  })
}

export function createPostApiRequestsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.requests)[':id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.requests)[':id']['cancel']['$post']>,
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
    const mutationDefaults = getPostApiRequestsIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSchemaIndexQueryKey(
  args: InferRequestType<typeof client.api.schema.index.$get>,
) {
  return ['api', '/api/schema/', args] as const
}

export function getApiSchemaIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.schema.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.schema.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.schema.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSchemaIndexQueryKey>
  >({
    queryKey: getApiSchemaIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.schema.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiSchemaIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.schema.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.schema.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.schema.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSchemaIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSchemaIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiServerAboutQueryKey() {
  return ['api', '/api/server/about'] as const
}

export function getApiServerAboutQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.about.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.about.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiServerAboutQueryKey>
  >({
    queryKey: getApiServerAboutQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.server.about.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiServerAbout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.about.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.about.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiServerAboutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiServerAboutQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiServerAnnotationFormatsQueryKey() {
  return ['api', '/api/server/annotation/formats'] as const
}

export function getApiServerAnnotationFormatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.server.annotation.formats.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.server.annotation.formats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiServerAnnotationFormatsQueryKey>
  >({
    queryKey: getApiServerAnnotationFormatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.server.annotation.formats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiServerAnnotationFormats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.server.annotation.formats.$get>>>
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
              Awaited<ReturnType<typeof client.api.server.annotation.formats.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiServerAnnotationFormatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiServerAnnotationFormatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiServerPluginsQueryKey() {
  return ['api', '/api/server/plugins'] as const
}

export function getApiServerPluginsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.plugins.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.plugins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiServerPluginsQueryKey>
  >({
    queryKey: getApiServerPluginsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.server.plugins.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiServerPlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.server.plugins.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiServerPluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiServerPluginsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiServerShareQueryKey(
  args: InferRequestType<typeof client.api.server.share.$get>,
) {
  return ['api', '/api/server/share', args] as const
}

export function getApiServerShareQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.share.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.server.share.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.share.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiServerShareQueryKey>
  >({
    queryKey: getApiServerShareQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.server.share.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiServerShare<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.share.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.server.share.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.share.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiServerShareQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiServerShareQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiTasksQueryKey(args: InferRequestType<typeof client.api.tasks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/tasks', keyArgs] as const
}

export function getApiTasksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.tasks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTasksQueryKey>
  >({
    queryKey: getApiTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.tasks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiTasksMutationKey() {
  return ['api', '/api/tasks', 'POST'] as const
}

export function getPostApiTasksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.tasks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTasksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.tasks.$post>) {
      return parseResponse(client.api.tasks.$post(args, options))
    },
  })
}

export function createPostApiTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.tasks.$post>,
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
    const mutationDefaults = getPostApiTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTasksIdQueryKey(
  args: InferRequestType<(typeof client.api.tasks)[':id']['$get']>,
) {
  return ['api', '/api/tasks/:id', args] as const
}

export function getApiTasksIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tasks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksIdQueryKey>
  >({
    queryKey: getApiTasksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tasks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTasksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.tasks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTasksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTasksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiTasksIdMutationKey() {
  return ['api', '/api/tasks/:id', 'DELETE'] as const
}

export function getDeleteApiTasksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.tasks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTasksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.tasks)[':id']['$delete']>) {
      return parseResponse(client.api.tasks[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.tasks)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiTasksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiTasksIdMutationKey() {
  return ['api', '/api/tasks/:id', 'PATCH'] as const
}

export function getPatchApiTasksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tasks)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiTasksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.tasks)[':id']['$patch']>) {
      return parseResponse(client.api.tasks[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tasks)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiTasksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTasksIdAnnotationsIndexQueryKey(
  args: InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$get']>,
) {
  return ['api', '/api/tasks/:id/annotations/', args] as const
}

export function getApiTasksIdAnnotationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksIdAnnotationsIndexQueryKey>
  >({
    queryKey: getApiTasksIdAnnotationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tasks[':id'].annotations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTasksIdAnnotationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTasksIdAnnotationsIndexQueryKey>
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
      ...getApiTasksIdAnnotationsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiTasksIdAnnotationsIndexMutationKey() {
  return ['api', '/api/tasks/:id/annotations/', 'PUT'] as const
}

export function getPutApiTasksIdAnnotationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTasksIdAnnotationsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$put']>,
    ) {
      return parseResponse(client.api.tasks[':id'].annotations.index.$put(args, options))
    },
  })
}

export function createPutApiTasksIdAnnotationsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$put']>,
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
    const mutationDefaults = getPutApiTasksIdAnnotationsIndexMutationOptions<
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

export function getPostApiTasksIdAnnotationsIndexMutationKey() {
  return ['api', '/api/tasks/:id/annotations/', 'POST'] as const
}

export function getPostApiTasksIdAnnotationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTasksIdAnnotationsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$post']>,
    ) {
      return parseResponse(client.api.tasks[':id'].annotations.index.$post(args, options))
    },
  })
}

export function createPostApiTasksIdAnnotationsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$post']>,
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
    const mutationDefaults = getPostApiTasksIdAnnotationsIndexMutationOptions<
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

export function getDeleteApiTasksIdAnnotationsIndexMutationKey() {
  return ['api', '/api/tasks/:id/annotations/', 'DELETE'] as const
}

export function getDeleteApiTasksIdAnnotationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTasksIdAnnotationsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$delete']>,
    ) {
      return parseResponse(client.api.tasks[':id'].annotations.index.$delete(args, options))
    },
  })
}

export function createDeleteApiTasksIdAnnotationsIndex<
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
                  ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$delete']>,
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
    const mutationDefaults = getDeleteApiTasksIdAnnotationsIndexMutationOptions<
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

export function getPatchApiTasksIdAnnotationsIndexMutationKey() {
  return ['api', '/api/tasks/:id/annotations/', 'PATCH'] as const
}

export function getPatchApiTasksIdAnnotationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiTasksIdAnnotationsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$patch']>,
    ) {
      return parseResponse(client.api.tasks[':id'].annotations.index.$patch(args, options))
    },
  })
}

export function createPatchApiTasksIdAnnotationsIndex<
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
                ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$patch']>,
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
    const mutationDefaults = getPatchApiTasksIdAnnotationsIndexMutationOptions<
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

export function getPostApiTasksIdBackupExportMutationKey() {
  return ['api', '/api/tasks/:id/backup/export', 'POST'] as const
}

export function getPostApiTasksIdBackupExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['backup']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tasks)[':id']['backup']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTasksIdBackupExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tasks)[':id']['backup']['export']['$post']>,
    ) {
      return parseResponse(client.api.tasks[':id'].backup.export.$post(args, options))
    },
  })
}

export function createPostApiTasksIdBackupExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tasks)[':id']['backup']['export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tasks)[':id']['backup']['export']['$post']>,
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
    const mutationDefaults = getPostApiTasksIdBackupExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTasksIdDataIndexQueryKey(
  args: InferRequestType<(typeof client.api.tasks)[':id']['data']['index']['$get']>,
) {
  return ['api', '/api/tasks/:id/data/', args] as const
}

export function getApiTasksIdDataIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tasks)[':id']['data']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksIdDataIndexQueryKey>
  >({
    queryKey: getApiTasksIdDataIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tasks[':id'].data.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTasksIdDataIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.tasks)[':id']['data']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTasksIdDataIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTasksIdDataIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiTasksIdDataIndexMutationKey() {
  return ['api', '/api/tasks/:id/data/', 'POST'] as const
}

export function getPostApiTasksIdDataIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tasks)[':id']['data']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTasksIdDataIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tasks)[':id']['data']['index']['$post']>,
    ) {
      return parseResponse(client.api.tasks[':id'].data.index.$post(args, options))
    },
  })
}

export function createPostApiTasksIdDataIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tasks)[':id']['data']['index']['$post']>,
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
    const mutationDefaults = getPostApiTasksIdDataIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTasksIdDataMetaQueryKey(
  args: InferRequestType<(typeof client.api.tasks)[':id']['data']['meta']['$get']>,
) {
  return ['api', '/api/tasks/:id/data/meta', args] as const
}

export function getApiTasksIdDataMetaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tasks)[':id']['data']['meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['meta']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksIdDataMetaQueryKey>
  >({
    queryKey: getApiTasksIdDataMetaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tasks[':id'].data.meta.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTasksIdDataMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.tasks)[':id']['data']['meta']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['meta']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTasksIdDataMetaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTasksIdDataMetaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchApiTasksIdDataMetaMutationKey() {
  return ['api', '/api/tasks/:id/data/meta', 'PATCH'] as const
}

export function getPatchApiTasksIdDataMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['meta']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tasks)[':id']['data']['meta']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiTasksIdDataMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tasks)[':id']['data']['meta']['$patch']>,
    ) {
      return parseResponse(client.api.tasks[':id'].data.meta.$patch(args, options))
    },
  })
}

export function createPatchApiTasksIdDataMeta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['meta']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tasks)[':id']['data']['meta']['$patch']>,
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
    const mutationDefaults = getPatchApiTasksIdDataMetaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiTasksIdDatasetExportMutationKey() {
  return ['api', '/api/tasks/:id/dataset/export', 'POST'] as const
}

export function getPostApiTasksIdDatasetExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['dataset']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tasks)[':id']['dataset']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTasksIdDatasetExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tasks)[':id']['dataset']['export']['$post']>,
    ) {
      return parseResponse(client.api.tasks[':id'].dataset.export.$post(args, options))
    },
  })
}

export function createPostApiTasksIdDatasetExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tasks)[':id']['dataset']['export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tasks)[':id']['dataset']['export']['$post']>,
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
    const mutationDefaults = getPostApiTasksIdDatasetExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTasksIdPreviewQueryKey(
  args: InferRequestType<(typeof client.api.tasks)[':id']['preview']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/tasks/:id/preview', keyArgs] as const
}

export function getApiTasksIdPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tasks)[':id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksIdPreviewQueryKey>
  >({
    queryKey: getApiTasksIdPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tasks[':id'].preview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTasksIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.tasks)[':id']['preview']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tasks)[':id']['preview']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTasksIdPreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTasksIdPreviewQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiTasksIdStatusQueryKey(
  args: InferRequestType<(typeof client.api.tasks)[':id']['status']['$get']>,
) {
  return ['api', '/api/tasks/:id/status', args] as const
}

export function getApiTasksIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tasks)[':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksIdStatusQueryKey>
  >({
    queryKey: getApiTasksIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tasks[':id'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTasksIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.tasks)[':id']['status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tasks)[':id']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTasksIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTasksIdStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiTasksIdValidationLayoutQueryKey(
  args: InferRequestType<(typeof client.api.tasks)[':id']['validation_layout']['$get']>,
) {
  return ['api', '/api/tasks/:id/validation_layout', args] as const
}

export function getApiTasksIdValidationLayoutQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tasks)[':id']['validation_layout']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tasks)[':id']['validation_layout']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['validation_layout']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksIdValidationLayoutQueryKey>
  >({
    queryKey: getApiTasksIdValidationLayoutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tasks[':id'].validation_layout.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTasksIdValidationLayout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tasks)[':id']['validation_layout']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.tasks)[':id']['validation_layout']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tasks)[':id']['validation_layout']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTasksIdValidationLayoutQueryKey>
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
      ...getApiTasksIdValidationLayoutQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchApiTasksIdValidationLayoutMutationKey() {
  return ['api', '/api/tasks/:id/validation_layout', 'PATCH'] as const
}

export function getPatchApiTasksIdValidationLayoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['validation_layout']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tasks)[':id']['validation_layout']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiTasksIdValidationLayoutMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tasks)[':id']['validation_layout']['$patch']>,
    ) {
      return parseResponse(client.api.tasks[':id'].validation_layout.$patch(args, options))
    },
  })
}

export function createPatchApiTasksIdValidationLayout<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tasks)[':id']['validation_layout']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tasks)[':id']['validation_layout']['$patch']>,
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
    const mutationDefaults = getPatchApiTasksIdValidationLayoutMutationOptions<
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

export function getPostApiTasksBackupIndexMutationKey() {
  return ['api', '/api/tasks/backup/', 'POST'] as const
}

export function getPostApiTasksBackupIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.backup.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.tasks.backup.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTasksBackupIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.tasks.backup.index.$post>) {
      return parseResponse(client.api.tasks.backup.index.$post(args, options))
    },
  })
}

export function createPostApiTasksBackupIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.backup.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.tasks.backup.index.$post>,
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
    const mutationDefaults = getPostApiTasksBackupIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUsersQueryKey(args: InferRequestType<typeof client.api.users.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/users', keyArgs] as const
}

export function getApiUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsersQueryKey>
  >({
    queryKey: getApiUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiUsersIdQueryKey(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/users/:id', keyArgs] as const
}

export function getApiUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdQueryKey>
  >({
    queryKey: getApiUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiUsersIdMutationKey() {
  return ['api', '/api/users/:id', 'DELETE'] as const
}

export function getDeleteApiUsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.users)[':id']['$delete']>) {
      return parseResponse(client.api.users[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.users)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiUsersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiUsersIdMutationKey() {
  return ['api', '/api/users/:id', 'PATCH'] as const
}

export function getPatchApiUsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.users)[':id']['$patch']>) {
      return parseResponse(client.api.users[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.users)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiUsersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUsersSelfQueryKey() {
  return ['api', '/api/users/self'] as const
}

export function getApiUsersSelfQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.self.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.self.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersSelfQueryKey>
  >({
    queryKey: getApiUsersSelfQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users.self.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUsersSelf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.self.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.self.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersSelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersSelfQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiWebhooksQueryKey(args: InferRequestType<typeof client.api.webhooks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/webhooks', keyArgs] as const
}

export function getApiWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiWebhooksQueryKey>
  >({
    queryKey: getApiWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.webhooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiWebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiWebhooksMutationKey() {
  return ['api', '/api/webhooks', 'POST'] as const
}

export function getPostApiWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.webhooks.$post>) {
      return parseResponse(client.api.webhooks.$post(args, options))
    },
  })
}

export function createPostApiWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.webhooks.$post>,
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
    const mutationDefaults = getPostApiWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiWebhooksIdQueryKey(
  args: InferRequestType<(typeof client.api.webhooks)[':id']['$get']>,
) {
  return ['api', '/api/webhooks/:id', args] as const
}

export function getApiWebhooksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWebhooksIdQueryKey>
  >({
    queryKey: getApiWebhooksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.webhooks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiWebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.webhooks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebhooksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiWebhooksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiWebhooksIdMutationKey() {
  return ['api', '/api/webhooks/:id', 'PUT'] as const
}

export function getPutApiWebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.webhooks)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiWebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.webhooks)[':id']['$put']>) {
      return parseResponse(client.api.webhooks[':id'].$put(args, options))
    },
  })
}

export function createPutApiWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.webhooks)[':id']['$put']>,
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
    const mutationDefaults = getPutApiWebhooksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiWebhooksIdMutationKey() {
  return ['api', '/api/webhooks/:id', 'DELETE'] as const
}

export function getDeleteApiWebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.webhooks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiWebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.webhooks)[':id']['$delete']>) {
      return parseResponse(client.api.webhooks[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.webhooks)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiWebhooksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiWebhooksIdMutationKey() {
  return ['api', '/api/webhooks/:id', 'PATCH'] as const
}

export function getPatchApiWebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.webhooks)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiWebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.webhooks)[':id']['$patch']>) {
      return parseResponse(client.api.webhooks[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.webhooks)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiWebhooksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiWebhooksIdDeliveriesQueryKey(
  args: InferRequestType<(typeof client.api.webhooks)[':id']['deliveries']['$get']>,
) {
  return ['api', '/api/webhooks/:id/deliveries', args] as const
}

export function getApiWebhooksIdDeliveriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.webhooks)[':id']['deliveries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.webhooks)[':id']['deliveries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.webhooks)[':id']['deliveries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWebhooksIdDeliveriesQueryKey>
  >({
    queryKey: getApiWebhooksIdDeliveriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.webhooks[':id'].deliveries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiWebhooksIdDeliveries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.webhooks)[':id']['deliveries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.webhooks)[':id']['deliveries']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.webhooks)[':id']['deliveries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebhooksIdDeliveriesQueryKey>
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
      ...getApiWebhooksIdDeliveriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiWebhooksIdDeliveriesDeliveryIdQueryKey(
  args: InferRequestType<(typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['$get']>,
) {
  return ['api', '/api/webhooks/:id/deliveries/:delivery_id', args] as const
}

export function getApiWebhooksIdDeliveriesDeliveryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWebhooksIdDeliveriesDeliveryIdQueryKey>
  >({
    queryKey: getApiWebhooksIdDeliveriesDeliveryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.webhooks[':id'].deliveries[':delivery_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiWebhooksIdDeliveriesDeliveryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebhooksIdDeliveriesDeliveryIdQueryKey>
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
      ...getApiWebhooksIdDeliveriesDeliveryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiWebhooksIdDeliveriesDeliveryIdRedeliveryMutationKey() {
  return ['api', '/api/webhooks/:id/deliveries/:delivery_id/redelivery', 'POST'] as const
}

export function getPostApiWebhooksIdDeliveriesDeliveryIdRedeliveryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['redelivery']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['redelivery']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiWebhooksIdDeliveriesDeliveryIdRedeliveryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['redelivery']['$post']
      >,
    ) {
      return parseResponse(
        client.api.webhooks[':id'].deliveries[':delivery_id'].redelivery.$post(args, options),
      )
    },
  })
}

export function createPostApiWebhooksIdDeliveriesDeliveryIdRedelivery<
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
                  (typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['redelivery']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['redelivery']['$post']
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
    const mutationDefaults = getPostApiWebhooksIdDeliveriesDeliveryIdRedeliveryMutationOptions<
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

export function getPostApiWebhooksIdPingMutationKey() {
  return ['api', '/api/webhooks/:id/ping', 'POST'] as const
}

export function getPostApiWebhooksIdPingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.webhooks)[':id']['ping']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.webhooks)[':id']['ping']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWebhooksIdPingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.webhooks)[':id']['ping']['$post']>) {
      return parseResponse(client.api.webhooks[':id'].ping.$post(args, options))
    },
  })
}

export function createPostApiWebhooksIdPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.webhooks)[':id']['ping']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.webhooks)[':id']['ping']['$post']>,
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
    const mutationDefaults = getPostApiWebhooksIdPingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiWebhooksEventsQueryKey(
  args: InferRequestType<typeof client.api.webhooks.events.$get>,
) {
  return ['api', '/api/webhooks/events', args] as const
}

export function getApiWebhooksEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.webhooks.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiWebhooksEventsQueryKey>
  >({
    queryKey: getApiWebhooksEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.webhooks.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiWebhooksEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.webhooks.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebhooksEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiWebhooksEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
