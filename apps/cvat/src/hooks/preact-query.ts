import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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
      UseMutationOptions<
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

export function useApiAssetsUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.assets)[':uuid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAssetsUuidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAssetsUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.assets)[':uuid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAssetsUuidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiAuthAccessTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.auth.access_tokens.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAuthAccessTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAuthAccessTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.auth.access_tokens.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAuthAccessTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.api.auth.access_tokens)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiAuthAccessTokensIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiAuthAccessTokensIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAuthAccessTokensId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiAuthAccessTokensIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
        ReturnType<typeof getApiAuthAccessTokensSelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAuthAccessTokensSelfQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAuthAccessTokensSelf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.access_tokens.self.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAuthAccessTokensSelfQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
      UseMutationOptions<
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
      UseMutationOptions<
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

export function useApiAuthRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAuthRulesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAuthRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAuthRulesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiCloudstorages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cloudstorages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.cloudstorages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiCloudstoragesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiCloudstorages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cloudstorages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.cloudstorages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiCloudstoragesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiCloudstoragesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiCloudstoragesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiCloudstoragesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiCloudstoragesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.cloudstorages)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiCloudstoragesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiCloudstoragesIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiCloudstoragesIdActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCloudstoragesIdActions<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiCloudstoragesIdActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['content-v2']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiCloudstoragesIdContentV2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiCloudstoragesIdContentV2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCloudstoragesIdContentV2<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiCloudstoragesIdContentV2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['preview']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiCloudstoragesIdPreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiCloudstoragesIdPreviewQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCloudstoragesIdPreview<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiCloudstoragesIdPreviewQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['status']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiCloudstoragesIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiCloudstoragesIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCloudstoragesIdStatus<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiCloudstoragesIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useApiComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.comments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.comments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useApiCommentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.comments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiCommentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiCommentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.comments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiCommentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useApiConsensusSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consensus.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.consensus.settings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiConsensusSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiConsensusSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consensus.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.consensus.settings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiConsensusSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.consensus.settings)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiConsensusSettingsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiConsensusSettingsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiConsensusSettingsId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiConsensusSettingsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function useApiEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useApiGrowth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.growth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.growth.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiGrowthQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiGrowth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.growth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.growth.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiGrowthQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiGrowthId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.growth)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.growth)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiGrowthIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiGrowthId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.growth)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.growth)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiGrowthIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useApiGuidesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.guides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.guides)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiGuidesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiGuidesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.guides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.guides)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiGuidesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.invitations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiInvitationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.invitations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiInvitationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useApiInvitationsKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.invitations)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.invitations)[':key']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiInvitationsKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiInvitationsKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiInvitationsKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.invitations)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.invitations)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiInvitationsKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiIssues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.issues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.issues.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiIssuesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiIssues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.issues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.issues.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiIssuesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useApiIssuesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.issues)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.issues)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiIssuesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiIssuesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.issues)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.issues)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiIssuesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.jobs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.jobs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useApiJobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiJobsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiJobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiJobsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiJobsIdAnnotationsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiJobsIdAnnotationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiJobsIdAnnotationsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiJobsIdAnnotationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
      UseMutationOptions<
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

export function useApiJobsIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':id']['data']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiJobsIdDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiJobsIdDataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiJobsIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['data']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':id']['data']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiJobsIdDataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.jobs)[':id']['data']['meta']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiJobsIdDataMetaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiJobsIdDataMetaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiJobsIdDataMeta<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiJobsIdDataMetaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiJobsIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':id']['preview']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiJobsIdPreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiJobsIdPreviewQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiJobsIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':id']['preview']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiJobsIdPreviewQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.jobs)[':id']['validation_layout']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiJobsIdValidationLayoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiJobsIdValidationLayoutQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiJobsIdValidationLayout<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiJobsIdValidationLayoutQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function useApiLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.labels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiLabelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.labels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiLabelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiLabelsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.labels)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.labels)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiLabelsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiLabelsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.labels)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.labels)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiLabelsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiLambdaFunctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiLambdaFunctionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiLambdaFunctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiLambdaFunctionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.lambda.functions)[':func_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiLambdaFunctionsFuncIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiLambdaFunctionsFuncIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiLambdaFunctionsFuncId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiLambdaFunctionsFuncIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function useApiLambdaRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiLambdaRequestsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiLambdaRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiLambdaRequestsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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

export function useApiLambdaRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda.requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.lambda.requests)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiLambdaRequestsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiLambdaRequestsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiLambdaRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda.requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.lambda.requests)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiLambdaRequestsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiMemberships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memberships.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.memberships.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMembershipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMemberships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memberships.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.memberships.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMembershipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiMembershipsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.memberships)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.memberships)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiMembershipsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMembershipsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMembershipsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.memberships)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.memberships)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMembershipsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.organizations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiOrganizationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.organizations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiOrganizationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiOrganizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiOrganizationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiOrganizationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiOrganizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiOrganizationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.projects.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.projects.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useApiProjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.projects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.projects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiProjectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiProjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.projects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.projects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiProjectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
      UseMutationOptions<
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
      UseMutationOptions<
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.api.projects)[':id']['preview']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiProjectsIdPreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiProjectsIdPreviewQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiProjectsIdPreview<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiProjectsIdPreviewQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useApiQualityConflicts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.conflicts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.quality.conflicts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiQualityConflictsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiQualityConflicts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.conflicts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.quality.conflicts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiQualityConflictsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiQualityReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.quality.reports.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiQualityReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiQualityReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.quality.reports.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiQualityReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiQualityReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiQualityReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiQualityReportsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiQualityReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.quality.reports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiQualityReportsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['confusion']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiQualityReportsIdConfusionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiQualityReportsIdConfusionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiQualityReportsIdConfusion<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiQualityReportsIdConfusionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['confusion']['matrix']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiQualityReportsIdConfusionMatrixQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiQualityReportsIdConfusionMatrixQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiQualityReportsIdConfusionMatrix<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiQualityReportsIdConfusionMatrixQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['data']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiQualityReportsIdDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiQualityReportsIdDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiQualityReportsIdData<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiQualityReportsIdDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useApiQualitySettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.quality.settings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiQualitySettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiQualitySettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quality.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.quality.settings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiQualitySettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiQualitySettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.quality.settings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.quality.settings)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiQualitySettingsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiQualitySettingsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiQualitySettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.quality.settings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.quality.settings)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiQualitySettingsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.api.quality.settings.requirements.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiQualitySettingsRequirementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiQualitySettingsRequirementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiQualitySettingsRequirements<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiQualitySettingsRequirementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiQualitySettingsRequirementsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiQualitySettingsRequirementsId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiQualitySettingsRequirementsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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

export function useApiRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.requests.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiRequestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.requests.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiRequestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.requests)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiRequestsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.requests)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiRequestsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiSchemaIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.schema.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.schema.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSchemaIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSchemaIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.schema.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.schema.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSchemaIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiServerAbout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.about.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiServerAboutQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiServerAbout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.about.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiServerAboutQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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
        ReturnType<typeof getApiServerAnnotationFormatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiServerAnnotationFormatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiServerAnnotationFormats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.server.annotation.formats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiServerAnnotationFormatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiServerPlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiServerPluginsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiServerPlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiServerPluginsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiServerShare<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.share.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.server.share.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiServerShareQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiServerShare<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.server.share.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.server.share.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiServerShareQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tasks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tasks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useApiTasksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tasks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTasksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTasksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tasks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTasksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiTasksIdAnnotationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiTasksIdAnnotationsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiTasksIdAnnotationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.api.tasks)[':id']['data']['index']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiTasksIdDataIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTasksIdDataIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTasksIdDataIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTasksIdDataIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.api.tasks)[':id']['data']['meta']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiTasksIdDataMetaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTasksIdDataMetaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTasksIdDataMeta<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTasksIdDataMetaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiTasksIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tasks)[':id']['preview']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiTasksIdPreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTasksIdPreviewQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTasksIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tasks)[':id']['preview']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTasksIdPreviewQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiTasksIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tasks)[':id']['status']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiTasksIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTasksIdStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTasksIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tasks)[':id']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTasksIdStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.tasks)[':id']['validation_layout']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiTasksIdValidationLayoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiTasksIdValidationLayoutQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiTasksIdValidationLayout<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiTasksIdValidationLayoutQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function useApiUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useApiUsersSelf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.self.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUsersSelfQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUsersSelf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.self.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUsersSelfQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.webhooks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiWebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.webhooks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiWebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useApiWebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.webhooks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiWebhooksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiWebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.webhooks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiWebhooksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.api.webhooks)[':id']['deliveries']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiWebhooksIdDeliveriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiWebhooksIdDeliveriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiWebhooksIdDeliveries<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiWebhooksIdDeliveriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiWebhooksIdDeliveriesDeliveryIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiWebhooksIdDeliveriesDeliveryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiWebhooksIdDeliveriesDeliveryId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiWebhooksIdDeliveriesDeliveryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function useApiWebhooksEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.webhooks.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiWebhooksEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiWebhooksEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.webhooks.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiWebhooksEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
