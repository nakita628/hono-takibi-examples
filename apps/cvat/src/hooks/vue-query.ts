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

export function usePostApiAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.assets.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiAssetsUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.assets)[':uuid']['$get']>>,
) {
  return ['api', '/api/assets/:uuid', toValue(args)] as const
}

export function getApiAssetsUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.assets)[':uuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAssetsUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.assets[':uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAssetsUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.assets)[':uuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':uuid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':uuid']['$get']>>>
            >
          >,
          ReturnType<typeof getApiAssetsUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':uuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAssetsUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAssetsUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.assets[':uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiAssetsUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAssetsUuidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiAuthAccessTokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.auth.access_tokens.$get>>,
) {
  return ['api', '/api/auth/access_tokens', toValue(args)] as const
}

export function getApiAuthAccessTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.auth.access_tokens.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAuthAccessTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.auth.access_tokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAuthAccessTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.auth.access_tokens.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.$get>>>
            >
          >,
          ReturnType<typeof getApiAuthAccessTokensQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthAccessTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAuthAccessTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.auth.access_tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiAuthAccessTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.auth.access_tokens.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAuthAccessTokensMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiAuthAccessTokensIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.auth.access_tokens)[':id']['$get']>>,
) {
  return ['api', '/api/auth/access_tokens/:id', toValue(args)] as const
}

export function getApiAuthAccessTokensIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.auth.access_tokens)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAuthAccessTokensIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.auth.access_tokens[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAuthAccessTokensId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.auth.access_tokens)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.auth.access_tokens)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.auth.access_tokens)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.auth.access_tokens)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAuthAccessTokensIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.auth.access_tokens)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthAccessTokensIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAuthAccessTokensIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.auth.access_tokens[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiAuthAccessTokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAuthAccessTokensIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiAuthAccessTokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiAuthAccessTokensIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiAuthAccessTokensSelfQueryKey() {
  return ['api', '/api/auth/access_tokens/self'] as const
}

export function getApiAuthAccessTokensSelfQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAuthAccessTokensSelfQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.auth.access_tokens.self.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAuthAccessTokensSelf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.self.$get>>>
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
                Awaited<ReturnType<typeof client.api.auth.access_tokens.self.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.auth.access_tokens.self.$get>>
              >
            >
          >,
          ReturnType<typeof getApiAuthAccessTokensSelfQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.self.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthAccessTokensSelfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAuthAccessTokensSelfQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.auth.access_tokens.self.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiAuthLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.login.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.auth.login.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAuthLoginMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiAuthLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.logout.$post>>>
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
  const mutationDefaults = getPostApiAuthLogoutMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiAuthPasswordChange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.auth.password.change.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.auth.password.change.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAuthPasswordChangeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiAuthPasswordReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.password.reset.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.auth.password.reset.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAuthPasswordResetMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiAuthPasswordResetConfirm<
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
                Awaited<ReturnType<typeof client.api.auth.password.reset.confirm.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.auth.password.reset.confirm.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAuthPasswordResetConfirmMutationOptions<
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

export function usePostApiAuthRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.register.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.auth.register.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAuthRegisterMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiAuthRulesQueryKey() {
  return ['api', '/api/auth/rules'] as const
}

export function getApiAuthRulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAuthRulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.auth.rules.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiAuthRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.rules.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.rules.$get>>>>
          >,
          ReturnType<typeof getApiAuthRulesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.rules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAuthRulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.auth.rules.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCloudstoragesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.cloudstorages.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/cloudstorages', keyArgs] as const
}

export function getApiCloudstoragesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.cloudstorages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCloudstoragesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.cloudstorages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCloudstorages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cloudstorages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.cloudstorages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.cloudstorages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.cloudstorages.$get>>>
            >
          >,
          ReturnType<typeof getApiCloudstoragesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cloudstorages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCloudstoragesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCloudstoragesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.cloudstorages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiCloudstorages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.cloudstorages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.cloudstorages.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCloudstoragesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiCloudstoragesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.cloudstorages)[':id']['$get']>>,
) {
  return ['api', '/api/cloudstorages/:id', toValue(args)] as const
}

export function getApiCloudstoragesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.cloudstorages)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCloudstoragesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.cloudstorages[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCloudstoragesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.cloudstorages)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCloudstoragesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCloudstoragesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCloudstoragesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.cloudstorages[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiCloudstoragesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiCloudstoragesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiCloudstoragesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiCloudstoragesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiCloudstoragesIdActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.cloudstorages)[':id']['actions']['$get']>
  >,
) {
  return ['api', '/api/cloudstorages/:id/actions', toValue(args)] as const
}

export function getApiCloudstoragesIdActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.cloudstorages)[':id']['actions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCloudstoragesIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.cloudstorages[':id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCloudstoragesIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.cloudstorages)[':id']['actions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCloudstoragesIdActionsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCloudstoragesIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCloudstoragesIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.cloudstorages[':id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCloudstoragesIdContentV2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.cloudstorages)[':id']['content-v2']['$get']>
  >,
) {
  return ['api', '/api/cloudstorages/:id/content-v2', toValue(args)] as const
}

export function getApiCloudstoragesIdContentV2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.cloudstorages)[':id']['content-v2']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCloudstoragesIdContentV2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.cloudstorages[':id']['content-v2'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCloudstoragesIdContentV2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['content-v2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.cloudstorages)[':id']['content-v2']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['content-v2']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['content-v2']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCloudstoragesIdContentV2QueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['content-v2']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCloudstoragesIdContentV2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCloudstoragesIdContentV2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.cloudstorages[':id']['content-v2'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCloudstoragesIdPreviewQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.cloudstorages)[':id']['preview']['$get']>
  >,
) {
  return ['api', '/api/cloudstorages/:id/preview', toValue(args)] as const
}

export function getApiCloudstoragesIdPreviewQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.cloudstorages)[':id']['preview']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCloudstoragesIdPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.cloudstorages[':id'].preview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCloudstoragesIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.cloudstorages)[':id']['preview']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['preview']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['preview']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCloudstoragesIdPreviewQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCloudstoragesIdPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCloudstoragesIdPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.cloudstorages[':id'].preview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCloudstoragesIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.cloudstorages)[':id']['status']['$get']>
  >,
) {
  return ['api', '/api/cloudstorages/:id/status', toValue(args)] as const
}

export function getApiCloudstoragesIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.cloudstorages)[':id']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCloudstoragesIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.cloudstorages[':id'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCloudstoragesIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.cloudstorages)[':id']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCloudstoragesIdStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCloudstoragesIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCloudstoragesIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.cloudstorages[':id'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.comments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/comments', keyArgs] as const
}

export function getApiCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.comments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.comments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.comments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
          >,
          ReturnType<typeof getApiCommentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.comments.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCommentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiCommentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.comments)[':id']['$get']>>,
) {
  return ['api', '/api/comments/:id', toValue(args)] as const
}

export function getApiCommentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.comments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCommentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.comments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCommentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.comments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiCommentsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCommentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCommentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.comments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiCommentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiCommentsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiCommentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.comments)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.comments)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiCommentsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiConsensusMerges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.consensus.merges.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.consensus.merges.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiConsensusMergesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiConsensusSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.consensus.settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/consensus/settings', keyArgs] as const
}

export function getApiConsensusSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.consensus.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiConsensusSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.consensus.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiConsensusSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consensus.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.consensus.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.consensus.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.consensus.settings.$get>>>
            >
          >,
          ReturnType<typeof getApiConsensusSettingsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.consensus.settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiConsensusSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiConsensusSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.consensus.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiConsensusSettingsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.consensus.settings)[':id']['$get']>>,
) {
  return ['api', '/api/consensus/settings/:id', toValue(args)] as const
}

export function getApiConsensusSettingsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.consensus.settings)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiConsensusSettingsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.consensus.settings[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiConsensusSettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.consensus.settings)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.consensus.settings)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.consensus.settings)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.consensus.settings)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiConsensusSettingsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.consensus.settings)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiConsensusSettingsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiConsensusSettingsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.consensus.settings[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchApiConsensusSettingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiConsensusSettingsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.events.$get>>,
) {
  return ['api', '/api/events', toValue(args)] as const
}

export function getApiEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
          >,
          ReturnType<typeof getApiEventsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.events.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiEventsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiEventsExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.events.export.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.events.export.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiEventsExportMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiGrowthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.growth.$get>>,
) {
  return ['api', '/api/growth', toValue(args)] as const
}

export function getApiGrowthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.growth.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGrowthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.growth.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiGrowth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.growth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.growth.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.growth.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.growth.$get>>>>
          >,
          ReturnType<typeof getApiGrowthQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.growth.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiGrowthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGrowthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.growth.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiGrowthIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.growth)[':id']['$get']>>,
) {
  return ['api', '/api/growth/:id', toValue(args)] as const
}

export function getApiGrowthIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.growth)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGrowthIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.growth[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGrowthId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.growth)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.growth)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.growth)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.growth)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiGrowthIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.growth)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGrowthIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGrowthIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.growth[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchApiGrowthId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.growth)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.growth)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiGrowthIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiGuides<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.guides.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.guides.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiGuidesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiGuidesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.guides)[':id']['$get']>>,
) {
  return ['api', '/api/guides/:id', toValue(args)] as const
}

export function getApiGuidesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.guides)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGuidesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.guides[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGuidesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.guides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.guides)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.guides)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.guides)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiGuidesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.guides)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGuidesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGuidesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.guides[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiGuidesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiGuidesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiGuidesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.guides)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.guides)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiGuidesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiInvitationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invitations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/invitations', keyArgs] as const
}

export function getApiInvitationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invitations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.invitations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invitations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invitations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invitations.$get>>>
            >
          >,
          ReturnType<typeof getApiInvitationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invitations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.invitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiInvitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invitations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.invitations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiInvitationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiInvitationsKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.invitations)[':key']['$get']>>,
) {
  return ['api', '/api/invitations/:key', toValue(args)] as const
}

export function getApiInvitationsKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.invitations)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInvitationsKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.invitations[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInvitationsKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.invitations)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.invitations)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.invitations)[':key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.invitations)[':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiInvitationsKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.invitations)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvitationsKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInvitationsKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.invitations[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiInvitationsKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiInvitationsKeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiInvitationsKeyAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiInvitationsKeyAcceptMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiInvitationsKeyDecline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiInvitationsKeyDeclineMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiInvitationsKeyResend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiInvitationsKeyResendMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiIssuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.issues.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/issues', keyArgs] as const
}

export function getApiIssuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.issues.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiIssuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.issues.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiIssues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.issues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.issues.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.issues.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.issues.$get>>>>
          >,
          ReturnType<typeof getApiIssuesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.issues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiIssuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiIssuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.issues.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiIssues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.issues.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.issues.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiIssuesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiIssuesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.issues)[':id']['$get']>>,
) {
  return ['api', '/api/issues/:id', toValue(args)] as const
}

export function getApiIssuesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.issues)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiIssuesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.issues[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiIssuesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.issues)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.issues)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.issues)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.issues)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiIssuesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.issues)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIssuesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiIssuesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.issues[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiIssuesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiIssuesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiIssuesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.issues)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.issues)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiIssuesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.jobs.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/jobs', keyArgs] as const
}

export function getApiJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.jobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>
          >,
          ReturnType<typeof getApiJobsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.jobs.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiJobsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':id']['$get']>>,
) {
  return ['api', '/api/jobs/:id', toValue(args)] as const
}

export function getApiJobsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJobsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.jobs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiJobsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJobsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.jobs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiJobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.jobs)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.jobs)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiJobsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiJobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.jobs)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiJobsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiJobsIdAnnotationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$get']>
  >,
) {
  return ['api', '/api/jobs/:id/annotations/', toValue(args)] as const
}

export function getApiJobsIdAnnotationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJobsIdAnnotationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.jobs[':id'].annotations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJobsIdAnnotationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiJobsIdAnnotationsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsIdAnnotationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJobsIdAnnotationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.jobs[':id'].annotations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiJobsIdAnnotationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiJobsIdAnnotationsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiJobsIdAnnotationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiJobsIdAnnotationsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiJobsIdAnnotationsIndex<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiJobsIdAnnotationsIndexMutationOptions<
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

export function usePatchApiJobsIdAnnotationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.jobs)[':id']['annotations']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiJobsIdAnnotationsIndexMutationOptions<
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

export function getApiJobsIdDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':id']['data']['$get']>>,
) {
  return ['api', '/api/jobs/:id/data', toValue(args)] as const
}

export function getApiJobsIdDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':id']['data']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJobsIdDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.jobs[':id'].data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJobsIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':id']['data']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiJobsIdDataQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsIdDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJobsIdDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.jobs[':id'].data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiJobsIdDataMetaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':id']['data']['meta']['$get']>>,
) {
  return ['api', '/api/jobs/:id/data/meta', toValue(args)] as const
}

export function getApiJobsIdDataMetaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':id']['data']['meta']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJobsIdDataMetaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.jobs[':id'].data.meta.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJobsIdDataMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':id']['data']['meta']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['meta']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['meta']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiJobsIdDataMetaQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['meta']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsIdDataMetaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJobsIdDataMetaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.jobs[':id'].data.meta.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchApiJobsIdDataMeta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiJobsIdDataMetaMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiJobsIdDatasetExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiJobsIdDatasetExportMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiJobsIdPreviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':id']['preview']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/jobs/:id/preview', keyArgs] as const
}

export function getApiJobsIdPreviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':id']['preview']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJobsIdPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.jobs[':id'].preview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJobsIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':id']['preview']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':id']['preview']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':id']['preview']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiJobsIdPreviewQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.jobs)[':id']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsIdPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJobsIdPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.jobs[':id'].preview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiJobsIdValidationLayoutQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.jobs)[':id']['validation_layout']['$get']>
  >,
) {
  return ['api', '/api/jobs/:id/validation_layout', toValue(args)] as const
}

export function getApiJobsIdValidationLayoutQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.jobs)[':id']['validation_layout']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJobsIdValidationLayoutQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.jobs[':id'].validation_layout.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJobsIdValidationLayout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':id']['validation_layout']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.jobs)[':id']['validation_layout']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':id']['validation_layout']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':id']['validation_layout']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiJobsIdValidationLayoutQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.jobs)[':id']['validation_layout']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsIdValidationLayoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJobsIdValidationLayoutQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.jobs[':id'].validation_layout.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchApiJobsIdValidationLayout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiJobsIdValidationLayoutMutationOptions<
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

export function getApiLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.labels.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/labels', keyArgs] as const
}

export function getApiLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.labels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.labels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.labels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.labels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.labels.$get>>>>
          >,
          ReturnType<typeof getApiLabelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.labels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLabelsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.labels)[':id']['$get']>>,
) {
  return ['api', '/api/labels/:id', toValue(args)] as const
}

export function getApiLabelsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.labels)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLabelsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.labels[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLabelsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.labels)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.labels)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.labels)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.labels)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiLabelsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.labels)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabelsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLabelsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.labels[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiLabelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiLabelsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiLabelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.labels)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.labels)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiLabelsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiLambdaFunctionsQueryKey() {
  return ['api', '/api/lambda/functions'] as const
}

export function getApiLambdaFunctionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiLambdaFunctionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.lambda.functions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLambdaFunctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.functions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.functions.$get>>>
            >
          >,
          ReturnType<typeof getApiLambdaFunctionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.functions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLambdaFunctionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiLambdaFunctionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.lambda.functions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLambdaFunctionsFuncIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.lambda.functions)[':func_id']['$get']>
  >,
) {
  return ['api', '/api/lambda/functions/:func_id', toValue(args)] as const
}

export function getApiLambdaFunctionsFuncIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.lambda.functions)[':func_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLambdaFunctionsFuncIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.lambda.functions[':func_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLambdaFunctionsFuncId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.lambda.functions)[':func_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.lambda.functions)[':func_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lambda.functions)[':func_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lambda.functions)[':func_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLambdaFunctionsFuncIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.lambda.functions)[':func_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLambdaFunctionsFuncIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLambdaFunctionsFuncIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.lambda.functions[':func_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiLambdaFunctionsFuncId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiLambdaFunctionsFuncIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiLambdaRequestsQueryKey() {
  return ['api', '/api/lambda/requests'] as const
}

export function getApiLambdaRequestsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiLambdaRequestsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.lambda.requests.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLambdaRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.requests.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.requests.$get>>>
            >
          >,
          ReturnType<typeof getApiLambdaRequestsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLambdaRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiLambdaRequestsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.lambda.requests.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiLambdaRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.requests.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.lambda.requests.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiLambdaRequestsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiLambdaRequestsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lambda.requests)[':id']['$get']>>,
) {
  return ['api', '/api/lambda/requests/:id', toValue(args)] as const
}

export function getApiLambdaRequestsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lambda.requests)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLambdaRequestsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.lambda.requests[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLambdaRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda.requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lambda.requests)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lambda.requests)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lambda.requests)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLambdaRequestsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.lambda.requests)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLambdaRequestsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLambdaRequestsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.lambda.requests[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiLambdaRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiLambdaRequestsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiMembershipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.memberships.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/memberships', keyArgs] as const
}

export function getApiMembershipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.memberships.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMemberships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memberships.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.memberships.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.memberships.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.memberships.$get>>>
            >
          >,
          ReturnType<typeof getApiMembershipsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memberships.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMembershipsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memberships)[':id']['$get']>>,
) {
  return ['api', '/api/memberships/:id', toValue(args)] as const
}

export function getApiMembershipsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memberships)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMembershipsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.memberships[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMembershipsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.memberships)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memberships)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memberships)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memberships)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMembershipsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.memberships)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembershipsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMembershipsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.memberships[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiMembershipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiMembershipsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiMembershipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiMembershipsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiOrganizationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.organizations.$get>>,
) {
  return ['api', '/api/organizations', toValue(args)] as const
}

export function getApiOrganizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.organizations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.organizations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.organizations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.organizations.$get>>>
            >
          >,
          ReturnType<typeof getApiOrganizationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.organizations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.organizations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiOrganizationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiOrganizationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.organizations)[':id']['$get']>>,
) {
  return ['api', '/api/organizations/:id', toValue(args)] as const
}

export function getApiOrganizationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.organizations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.organizations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.organizations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.organizations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.organizations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiOrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiOrganizationsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiOrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiOrganizationsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.projects.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/projects', keyArgs] as const
}

export function getApiProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.projects.$get>>>>
          >,
          ReturnType<typeof getApiProjectsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.projects.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiProjectsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.projects)[':id']['$get']>>,
) {
  return ['api', '/api/projects/:id', toValue(args)] as const
}

export function getApiProjectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.projects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.projects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiProjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.projects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.projects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.projects)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.projects)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiProjectsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.projects)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.projects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiProjectsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.projects)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.projects)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiProjectsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiProjectsIdBackupExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.projects)[':id']['backup']['export']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.projects)[':id']['backup']['export']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProjectsIdBackupExportMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiProjectsIdDatasetIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.projects)[':id']['dataset']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.projects)[':id']['dataset']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProjectsIdDatasetIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiProjectsIdDatasetExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.projects)[':id']['dataset']['export']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.projects)[':id']['dataset']['export']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProjectsIdDatasetExportMutationOptions<
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

export function getApiProjectsIdPreviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.projects)[':id']['preview']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/projects/:id/preview', keyArgs] as const
}

export function getApiProjectsIdPreviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.projects)[':id']['preview']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProjectsIdPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.projects[':id'].preview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiProjectsIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.projects)[':id']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.projects)[':id']['preview']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.projects)[':id']['preview']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.projects)[':id']['preview']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProjectsIdPreviewQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.projects)[':id']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProjectsIdPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProjectsIdPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.projects[':id'].preview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiProjectsBackupIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.projects.backup.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.projects.backup.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProjectsBackupIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiQualityConflictsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.quality.conflicts.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/quality/conflicts', keyArgs] as const
}

export function getApiQualityConflictsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.quality.conflicts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiQualityConflictsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.quality.conflicts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiQualityConflicts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.conflicts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.quality.conflicts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.conflicts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.conflicts.$get>>>
            >
          >,
          ReturnType<typeof getApiQualityConflictsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.conflicts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualityConflictsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiQualityConflictsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.quality.conflicts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiQualityReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.quality.reports.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/quality/reports', keyArgs] as const
}

export function getApiQualityReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.quality.reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiQualityReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.quality.reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiQualityReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.quality.reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.reports.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.reports.$get>>>
            >
          >,
          ReturnType<typeof getApiQualityReportsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.reports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualityReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiQualityReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.quality.reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiQualityReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.reports.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.quality.reports.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiQualityReportsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiQualityReportsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.quality.reports)[':id']['$get']>>,
) {
  return ['api', '/api/quality/reports/:id', toValue(args)] as const
}

export function getApiQualityReportsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.quality.reports)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiQualityReportsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.quality.reports[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiQualityReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.quality.reports)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiQualityReportsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualityReportsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiQualityReportsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.quality.reports[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiQualityReportsIdConfusionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.quality.reports)[':id']['confusion']['$get']>
  >,
) {
  return ['api', '/api/quality/reports/:id/confusion', toValue(args)] as const
}

export function getApiQualityReportsIdConfusionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.quality.reports)[':id']['confusion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiQualityReportsIdConfusionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.quality.reports[':id'].confusion.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiQualityReportsIdConfusion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['confusion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.quality.reports)[':id']['confusion']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['confusion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['confusion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiQualityReportsIdConfusionQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['confusion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualityReportsIdConfusionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiQualityReportsIdConfusionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.quality.reports[':id'].confusion.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiQualityReportsIdConfusionMatrixQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.quality.reports)[':id']['confusion']['matrix']['$get']>
  >,
) {
  return ['api', '/api/quality/reports/:id/confusion/matrix', toValue(args)] as const
}

export function getApiQualityReportsIdConfusionMatrixQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.quality.reports)[':id']['confusion']['matrix']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiQualityReportsIdConfusionMatrixQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.quality.reports[':id'].confusion.matrix.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiQualityReportsIdConfusionMatrix<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.quality.reports)[':id']['confusion']['matrix']['$get']>
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
                    (typeof client.api.quality.reports)[':id']['confusion']['matrix']['$get']
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
                    (typeof client.api.quality.reports)[':id']['confusion']['matrix']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiQualityReportsIdConfusionMatrixQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.api.quality.reports)[':id']['confusion']['matrix']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualityReportsIdConfusionMatrixQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiQualityReportsIdConfusionMatrixQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.quality.reports[':id'].confusion.matrix.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiQualityReportsIdDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.quality.reports)[':id']['data']['$get']>
  >,
) {
  return ['api', '/api/quality/reports/:id/data', toValue(args)] as const
}

export function getApiQualityReportsIdDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.quality.reports)[':id']['data']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiQualityReportsIdDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.quality.reports[':id'].data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiQualityReportsIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.quality.reports)[':id']['data']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['data']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['data']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiQualityReportsIdDataQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualityReportsIdDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiQualityReportsIdDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.quality.reports[':id'].data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiQualitySettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.quality.settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/quality/settings', keyArgs] as const
}

export function getApiQualitySettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.quality.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiQualitySettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.quality.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiQualitySettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.quality.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.settings.$get>>>
            >
          >,
          ReturnType<typeof getApiQualitySettingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualitySettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiQualitySettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.quality.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiQualitySettingsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.quality.settings)[':id']['$get']>>,
) {
  return ['api', '/api/quality/settings/:id', toValue(args)] as const
}

export function getApiQualitySettingsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.quality.settings)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiQualitySettingsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.quality.settings[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiQualitySettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.quality.settings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.quality.settings)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.quality.settings)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.quality.settings)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiQualitySettingsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.quality.settings)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualitySettingsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiQualitySettingsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.quality.settings[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiQualitySettingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiQualitySettingsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiQualitySettingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiQualitySettingsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiQualitySettingsRequirementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.quality.settings.requirements.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/quality/settings/requirements', keyArgs] as const
}

export function getApiQualitySettingsRequirementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.quality.settings.requirements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiQualitySettingsRequirementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.quality.settings.requirements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiQualitySettingsRequirements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.quality.settings.requirements.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.quality.settings.requirements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.quality.settings.requirements.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.quality.settings.requirements.$get>>
              >
            >
          >,
          ReturnType<typeof getApiQualitySettingsRequirementsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<typeof client.api.quality.settings.requirements.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualitySettingsRequirementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiQualitySettingsRequirementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.quality.settings.requirements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiQualitySettingsRequirements<
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
                Awaited<ReturnType<typeof client.api.quality.settings.requirements.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.quality.settings.requirements.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiQualitySettingsRequirementsMutationOptions<
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

export function getApiQualitySettingsRequirementsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$get']>
  >,
) {
  return ['api', '/api/quality/settings/requirements/:id', toValue(args)] as const
}

export function getApiQualitySettingsRequirementsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiQualitySettingsRequirementsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.quality.settings.requirements[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiQualitySettingsRequirementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.quality.settings.requirements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.quality.settings.requirements)[':id']['$get']>
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
                  ReturnType<(typeof client.api.quality.settings.requirements)[':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiQualitySettingsRequirementsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.quality.settings.requirements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQualitySettingsRequirementsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiQualitySettingsRequirementsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.quality.settings.requirements[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiQualitySettingsRequirementsId<
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
                  ReturnType<(typeof client.api.quality.settings.requirements)[':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiQualitySettingsRequirementsIdMutationOptions<
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

export function useDeleteApiQualitySettingsRequirementsId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiQualitySettingsRequirementsIdMutationOptions<
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

export function usePatchApiQualitySettingsRequirementsId<
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
                  ReturnType<(typeof client.api.quality.settings.requirements)[':id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiQualitySettingsRequirementsIdMutationOptions<
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

export function usePostApiQualitySettingsRequirementsBulk<
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
                Awaited<ReturnType<typeof client.api.quality.settings.requirements.bulk.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.quality.settings.requirements.bulk.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiQualitySettingsRequirementsBulkMutationOptions<
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

export function getApiRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.requests.$get>>,
) {
  return ['api', '/api/requests', toValue(args)] as const
}

export function getApiRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.requests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.requests.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.requests.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.requests.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.requests.$get>>>>
          >,
          ReturnType<typeof getApiRequestsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.requests.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRequestsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.requests)[':id']['$get']>>,
) {
  return ['api', '/api/requests/:id', toValue(args)] as const
}

export function getApiRequestsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.requests)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRequestsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.requests[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.requests)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.requests)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.requests)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiRequestsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.requests)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRequestsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRequestsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.requests[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiRequestsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRequestsIdCancelMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiSchemaIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.schema.index.$get>>,
) {
  return ['api', '/api/schema/', toValue(args)] as const
}

export function getApiSchemaIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.schema.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSchemaIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.schema.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSchemaIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.schema.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.schema.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.schema.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.schema.index.$get>>>
            >
          >,
          ReturnType<typeof getApiSchemaIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.schema.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSchemaIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSchemaIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.schema.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiServerAboutQueryKey() {
  return ['api', '/api/server/about'] as const
}

export function getApiServerAboutQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiServerAboutQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.server.about.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiServerAbout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.about.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.server.about.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.server.about.$get>>>
            >
          >,
          ReturnType<typeof getApiServerAboutQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.about.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiServerAboutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiServerAboutQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.server.about.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiServerAnnotationFormatsQueryKey() {
  return ['api', '/api/server/annotation/formats'] as const
}

export function getApiServerAnnotationFormatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiServerAnnotationFormatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.server.annotation.formats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiServerAnnotationFormats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.server.annotation.formats.$get>>>
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
                Awaited<ReturnType<typeof client.api.server.annotation.formats.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.server.annotation.formats.$get>>
              >
            >
          >,
          ReturnType<typeof getApiServerAnnotationFormatsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.server.annotation.formats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiServerAnnotationFormatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiServerAnnotationFormatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.server.annotation.formats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiServerPluginsQueryKey() {
  return ['api', '/api/server/plugins'] as const
}

export function getApiServerPluginsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiServerPluginsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.server.plugins.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiServerPlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.server.plugins.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.server.plugins.$get>>>
            >
          >,
          ReturnType<typeof getApiServerPluginsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.plugins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiServerPluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiServerPluginsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.server.plugins.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiServerShareQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.server.share.$get>>,
) {
  return ['api', '/api/server/share', toValue(args)] as const
}

export function getApiServerShareQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.server.share.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiServerShareQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.server.share.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiServerShare<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.share.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.server.share.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.server.share.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.server.share.$get>>>
            >
          >,
          ReturnType<typeof getApiServerShareQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.share.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiServerShareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiServerShareQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.server.share.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tasks.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/tasks', keyArgs] as const
}

export function getApiTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tasks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tasks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tasks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
          >,
          ReturnType<typeof getApiTasksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.tasks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTasksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tasks)[':id']['$get']>>,
) {
  return ['api', '/api/tasks/:id', toValue(args)] as const
}

export function getApiTasksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tasks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTasksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tasks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTasksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tasks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiTasksIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTasksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tasks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.tasks)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.tasks)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTasksIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.tasks)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiTasksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTasksIdAnnotationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$get']>
  >,
) {
  return ['api', '/api/tasks/:id/annotations/', toValue(args)] as const
}

export function getApiTasksIdAnnotationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTasksIdAnnotationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tasks[':id'].annotations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTasksIdAnnotationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$get']>
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
                  ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiTasksIdAnnotationsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksIdAnnotationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTasksIdAnnotationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tasks[':id'].annotations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiTasksIdAnnotationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTasksIdAnnotationsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiTasksIdAnnotationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTasksIdAnnotationsIndexMutationOptions<
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

export function useDeleteApiTasksIdAnnotationsIndex<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTasksIdAnnotationsIndexMutationOptions<
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

export function usePatchApiTasksIdAnnotationsIndex<
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
                  ReturnType<(typeof client.api.tasks)[':id']['annotations']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiTasksIdAnnotationsIndexMutationOptions<
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

export function usePostApiTasksIdBackupExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTasksIdBackupExportMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTasksIdDataIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.tasks)[':id']['data']['index']['$get']>
  >,
) {
  return ['api', '/api/tasks/:id/data/', toValue(args)] as const
}

export function getApiTasksIdDataIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.tasks)[':id']['data']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTasksIdDataIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tasks[':id'].data.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTasksIdDataIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.tasks)[':id']['data']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTasksIdDataIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksIdDataIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTasksIdDataIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tasks[':id'].data.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiTasksIdDataIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTasksIdDataIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTasksIdDataMetaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.tasks)[':id']['data']['meta']['$get']>
  >,
) {
  return ['api', '/api/tasks/:id/data/meta', toValue(args)] as const
}

export function getApiTasksIdDataMetaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.tasks)[':id']['data']['meta']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTasksIdDataMetaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tasks[':id'].data.meta.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTasksIdDataMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.tasks)[':id']['data']['meta']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['meta']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['meta']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTasksIdDataMetaQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['data']['meta']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksIdDataMetaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTasksIdDataMetaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tasks[':id'].data.meta.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchApiTasksIdDataMeta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiTasksIdDataMetaMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiTasksIdDatasetExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTasksIdDatasetExportMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTasksIdPreviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tasks)[':id']['preview']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/tasks/:id/preview', keyArgs] as const
}

export function getApiTasksIdPreviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tasks)[':id']['preview']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTasksIdPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tasks[':id'].preview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTasksIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tasks)[':id']['preview']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tasks)[':id']['preview']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tasks)[':id']['preview']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTasksIdPreviewQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksIdPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTasksIdPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tasks[':id'].preview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTasksIdStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tasks)[':id']['status']['$get']>>,
) {
  return ['api', '/api/tasks/:id/status', toValue(args)] as const
}

export function getApiTasksIdStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tasks)[':id']['status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTasksIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tasks[':id'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTasksIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tasks)[':id']['status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tasks)[':id']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tasks)[':id']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTasksIdStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTasksIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tasks[':id'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTasksIdValidationLayoutQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.tasks)[':id']['validation_layout']['$get']>
  >,
) {
  return ['api', '/api/tasks/:id/validation_layout', toValue(args)] as const
}

export function getApiTasksIdValidationLayoutQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.tasks)[':id']['validation_layout']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTasksIdValidationLayoutQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tasks[':id'].validation_layout.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTasksIdValidationLayout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tasks)[':id']['validation_layout']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.tasks)[':id']['validation_layout']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tasks)[':id']['validation_layout']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tasks)[':id']['validation_layout']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTasksIdValidationLayoutQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.tasks)[':id']['validation_layout']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksIdValidationLayoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTasksIdValidationLayoutQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tasks[':id'].validation_layout.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchApiTasksIdValidationLayout<
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
                Awaited<ReturnType<(typeof client.api.tasks)[':id']['validation_layout']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.tasks)[':id']['validation_layout']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiTasksIdValidationLayoutMutationOptions<
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

export function usePostApiTasksBackupIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.backup.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.tasks.backup.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTasksBackupIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/users', keyArgs] as const
}

export function getApiUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
          >,
          ReturnType<typeof getApiUsersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/users/:id', keyArgs] as const
}

export function getApiUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiUsersIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.users)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.users)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiUsersIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUsersSelfQueryKey() {
  return ['api', '/api/users/self'] as const
}

export function getApiUsersSelfQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiUsersSelfQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users.self.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiUsersSelf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.self.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.self.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.self.$get>>>>
          >,
          ReturnType<typeof getApiUsersSelfQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.self.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersSelfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiUsersSelfQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users.self.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.webhooks.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/webhooks', keyArgs] as const
}

export function getApiWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.webhooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>
          >,
          ReturnType<typeof getApiWebhooksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.webhooks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiWebhooksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.webhooks)[':id']['$get']>>,
) {
  return ['api', '/api/webhooks/:id', toValue(args)] as const
}

export function getApiWebhooksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.webhooks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWebhooksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.webhooks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiWebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.webhooks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiWebhooksIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWebhooksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWebhooksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.webhooks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.webhooks)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiWebhooksIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiWebhooksIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.webhooks)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiWebhooksIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiWebhooksIdDeliveriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.webhooks)[':id']['deliveries']['$get']>
  >,
) {
  return ['api', '/api/webhooks/:id/deliveries', toValue(args)] as const
}

export function getApiWebhooksIdDeliveriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.webhooks)[':id']['deliveries']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWebhooksIdDeliveriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.webhooks[':id'].deliveries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiWebhooksIdDeliveries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.webhooks)[':id']['deliveries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.webhooks)[':id']['deliveries']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.webhooks)[':id']['deliveries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.webhooks)[':id']['deliveries']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiWebhooksIdDeliveriesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.webhooks)[':id']['deliveries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWebhooksIdDeliveriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWebhooksIdDeliveriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.webhooks[':id'].deliveries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiWebhooksIdDeliveriesDeliveryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['$get']>
  >,
) {
  return ['api', '/api/webhooks/:id/deliveries/:delivery_id', toValue(args)] as const
}

export function getApiWebhooksIdDeliveriesDeliveryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWebhooksIdDeliveriesDeliveryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.webhooks[':id'].deliveries[':delivery_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiWebhooksIdDeliveriesDeliveryId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['$get']>
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
                    (typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['$get']
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
                    (typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiWebhooksIdDeliveriesDeliveryIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWebhooksIdDeliveriesDeliveryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWebhooksIdDeliveriesDeliveryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.webhooks[':id'].deliveries[':delivery_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiWebhooksIdDeliveriesDeliveryIdRedelivery<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiWebhooksIdDeliveriesDeliveryIdRedeliveryMutationOptions<
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

export function usePostApiWebhooksIdPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiWebhooksIdPingMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiWebhooksEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.webhooks.events.$get>>,
) {
  return ['api', '/api/webhooks/events', toValue(args)] as const
}

export function getApiWebhooksEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.webhooks.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWebhooksEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.webhooks.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiWebhooksEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.webhooks.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.events.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.events.$get>>>
            >
          >,
          ReturnType<typeof getApiWebhooksEventsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiWebhooksEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWebhooksEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.webhooks.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
