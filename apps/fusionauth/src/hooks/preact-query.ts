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

export function getWellKnownKey() {
  return ['.well-known'] as const
}

export function getApiKey() {
  return ['api'] as const
}

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getWellKnownJwksJsonQueryKey() {
  return ['.well-known', '/.well-known/jwks.json'] as const
}

export function getWellKnownJwksJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellKnownJwksJsonQueryKey>
  >({
    queryKey: getWellKnownJwksJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['.well-known']['jwks.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWellKnownJwksJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>>
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
              Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownJwksJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWellKnownJwksJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWellKnownJwksJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>>
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
              Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownJwksJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWellKnownJwksJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWellKnownOpenidConfigurationQueryKey() {
  return ['.well-known', '/.well-known/openid-configuration'] as const
}

export function getWellKnownOpenidConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellKnownOpenidConfigurationQueryKey>
  >({
    queryKey: getWellKnownOpenidConfigurationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['.well-known']['openid-configuration'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWellKnownOpenidConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
      >
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
              Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownOpenidConfigurationQueryKey>
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
      ...getWellKnownOpenidConfigurationQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWellKnownOpenidConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
      >
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
              Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownOpenidConfigurationQueryKey>
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
      ...getWellKnownOpenidConfigurationQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiApiKeyMutationKey() {
  return ['api', '/api/api-key', 'POST'] as const
}

export function getPostApiApiKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['api-key']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.api)['api-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiApiKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['api-key']['$post']>) {
      return parseResponse(client.api['api-key'].$post(args, options))
    },
  })
}

export function usePostApiApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['api-key']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['api-key']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiApiKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiApiKeyKeyIdQueryKey(
  args: InferRequestType<(typeof client.api)['api-key'][':keyId']['$get']>,
) {
  return ['api', '/api/api-key/:keyId', args] as const
}

export function getApiApiKeyKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['api-key'][':keyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiApiKeyKeyIdQueryKey>
  >({
    queryKey: getApiApiKeyKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['api-key'][':keyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiApiKeyKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['api-key'][':keyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiApiKeyKeyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiApiKeyKeyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiApiKeyKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['api-key'][':keyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiApiKeyKeyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiApiKeyKeyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiApiKeyKeyIdMutationKey() {
  return ['api', '/api/api-key/:keyId', 'PUT'] as const
}

export function getPutApiApiKeyKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['api-key'][':keyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiApiKeyKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['api-key'][':keyId']['$put']>) {
      return parseResponse(client.api['api-key'][':keyId'].$put(args, options))
    },
  })
}

export function usePutApiApiKeyKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['api-key'][':keyId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiApiKeyKeyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiApiKeyKeyIdMutationKey() {
  return ['api', '/api/api-key/:keyId', 'POST'] as const
}

export function getPostApiApiKeyKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['api-key'][':keyId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiApiKeyKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['api-key'][':keyId']['$post']>) {
      return parseResponse(client.api['api-key'][':keyId'].$post(args, options))
    },
  })
}

export function usePostApiApiKeyKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['api-key'][':keyId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiApiKeyKeyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiApiKeyKeyIdMutationKey() {
  return ['api', '/api/api-key/:keyId', 'DELETE'] as const
}

export function getDeleteApiApiKeyKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['api-key'][':keyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiApiKeyKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['api-key'][':keyId']['$delete']>) {
      return parseResponse(client.api['api-key'][':keyId'].$delete(args, options))
    },
  })
}

export function useDeleteApiApiKeyKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['api-key'][':keyId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiApiKeyKeyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiApiKeyKeyIdMutationKey() {
  return ['api', '/api/api-key/:keyId', 'PATCH'] as const
}

export function getPatchApiApiKeyKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['api-key'][':keyId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiApiKeyKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['api-key'][':keyId']['$patch']>) {
      return parseResponse(client.api['api-key'][':keyId'].$patch(args, options))
    },
  })
}

export function usePatchApiApiKeyKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['api-key'][':keyId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiApiKeyKeyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiApplicationQueryKey(
  args: InferRequestType<typeof client.api.application.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/application', keyArgs] as const
}

export function getApiApplicationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.application.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.application.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.application.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiApplicationQueryKey>
  >({
    queryKey: getApiApplicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.application.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiApplication<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.application.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.application.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.application.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiApplicationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiApplicationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiApplication<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.application.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.application.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.application.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiApplicationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiApplicationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiApplicationMutationKey() {
  return ['api', '/api/application', 'POST'] as const
}

export function getPostApiApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.application.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.application.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiApplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.application.$post>) {
      return parseResponse(client.api.application.$post(args, options))
    },
  })
}

export function usePostApiApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.application.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.application.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiApplicationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiApplicationSearchMutationKey() {
  return ['api', '/api/application/search', 'POST'] as const
}

export function getPostApiApplicationSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.application.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.application.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiApplicationSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.application.search.$post>) {
      return parseResponse(client.api.application.search.$post(args, options))
    },
  })
}

export function usePostApiApplicationSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.application.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.application.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiApplicationSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiApplicationApplicationIdQueryKey(
  args: InferRequestType<(typeof client.api.application)[':applicationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/application/:applicationId', keyArgs] as const
}

export function getApiApplicationApplicationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.application)[':applicationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiApplicationApplicationIdQueryKey>
  >({
    queryKey: getApiApplicationApplicationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.application[':applicationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiApplicationApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.application)[':applicationId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiApplicationApplicationIdQueryKey>
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
      ...getApiApplicationApplicationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiApplicationApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.application)[':applicationId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiApplicationApplicationIdQueryKey>
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
      ...getApiApplicationApplicationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiApplicationApplicationIdMutationKey() {
  return ['api', '/api/application/:applicationId', 'PUT'] as const
}

export function getPutApiApplicationApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.application)[':applicationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiApplicationApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.application)[':applicationId']['$put']>,
    ) {
      return parseResponse(client.api.application[':applicationId'].$put(args, options))
    },
  })
}

export function usePutApiApplicationApplicationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.application)[':applicationId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiApplicationApplicationIdMutationOptions<
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

export function getPostApiApplicationApplicationIdMutationKey() {
  return ['api', '/api/application/:applicationId', 'POST'] as const
}

export function getPostApiApplicationApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.application)[':applicationId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiApplicationApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.application)[':applicationId']['$post']>,
    ) {
      return parseResponse(client.api.application[':applicationId'].$post(args, options))
    },
  })
}

export function usePostApiApplicationApplicationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.application)[':applicationId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiApplicationApplicationIdMutationOptions<
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

export function getDeleteApiApplicationApplicationIdMutationKey() {
  return ['api', '/api/application/:applicationId', 'DELETE'] as const
}

export function getDeleteApiApplicationApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.application)[':applicationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiApplicationApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.application)[':applicationId']['$delete']>,
    ) {
      return parseResponse(client.api.application[':applicationId'].$delete(args, options))
    },
  })
}

export function useDeleteApiApplicationApplicationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.application)[':applicationId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiApplicationApplicationIdMutationOptions<
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

export function getPatchApiApplicationApplicationIdMutationKey() {
  return ['api', '/api/application/:applicationId', 'PATCH'] as const
}

export function getPatchApiApplicationApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.application)[':applicationId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiApplicationApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.application)[':applicationId']['$patch']>,
    ) {
      return parseResponse(client.api.application[':applicationId'].$patch(args, options))
    },
  })
}

export function usePatchApiApplicationApplicationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.application)[':applicationId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiApplicationApplicationIdMutationOptions<
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

export function getApiApplicationApplicationIdOauthConfigurationQueryKey(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/application/:applicationId/oauth-configuration', keyArgs] as const
}

export function getApiApplicationApplicationIdOauthConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiApplicationApplicationIdOauthConfigurationQueryKey>
  >({
    queryKey: getApiApplicationApplicationIdOauthConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.application[':applicationId']['oauth-configuration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiApplicationApplicationIdOauthConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiApplicationApplicationIdOauthConfigurationQueryKey>
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
      ...getApiApplicationApplicationIdOauthConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiApplicationApplicationIdOauthConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiApplicationApplicationIdOauthConfigurationQueryKey>
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
      ...getApiApplicationApplicationIdOauthConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiApplicationApplicationIdRoleMutationKey() {
  return ['api', '/api/application/:applicationId/role', 'POST'] as const
}

export function getPostApiApplicationApplicationIdRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.application)[':applicationId']['role']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.application)[':applicationId']['role']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiApplicationApplicationIdRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.application)[':applicationId']['role']['$post']>,
    ) {
      return parseResponse(client.api.application[':applicationId'].role.$post(args, options))
    },
  })
}

export function usePostApiApplicationApplicationIdRole<
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
                ReturnType<(typeof client.api.application)[':applicationId']['role']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.application)[':applicationId']['role']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiApplicationApplicationIdRoleMutationOptions<
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

export function getPutApiApplicationApplicationIdRoleRoleIdMutationKey() {
  return ['api', '/api/application/:applicationId/role/:roleId', 'PUT'] as const
}

export function getPutApiApplicationApplicationIdRoleRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.application)[':applicationId']['role'][':roleId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.application)[':applicationId']['role'][':roleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiApplicationApplicationIdRoleRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.application)[':applicationId']['role'][':roleId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.application[':applicationId'].role[':roleId'].$put(args, options),
      )
    },
  })
}

export function usePutApiApplicationApplicationIdRoleRoleId<
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
                  (typeof client.api.application)[':applicationId']['role'][':roleId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.application)[':applicationId']['role'][':roleId']['$put']
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
  const mutationDefaults = getPutApiApplicationApplicationIdRoleRoleIdMutationOptions<
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

export function getPostApiApplicationApplicationIdRoleRoleIdMutationKey() {
  return ['api', '/api/application/:applicationId/role/:roleId', 'POST'] as const
}

export function getPostApiApplicationApplicationIdRoleRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.application)[':applicationId']['role'][':roleId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.application)[':applicationId']['role'][':roleId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiApplicationApplicationIdRoleRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.application)[':applicationId']['role'][':roleId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.application[':applicationId'].role[':roleId'].$post(args, options),
      )
    },
  })
}

export function usePostApiApplicationApplicationIdRoleRoleId<
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
                  (typeof client.api.application)[':applicationId']['role'][':roleId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.application)[':applicationId']['role'][':roleId']['$post']
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
  const mutationDefaults = getPostApiApplicationApplicationIdRoleRoleIdMutationOptions<
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

export function getDeleteApiApplicationApplicationIdRoleRoleIdMutationKey() {
  return ['api', '/api/application/:applicationId/role/:roleId', 'DELETE'] as const
}

export function getDeleteApiApplicationApplicationIdRoleRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.application)[':applicationId']['role'][':roleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.application)[':applicationId']['role'][':roleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiApplicationApplicationIdRoleRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.application)[':applicationId']['role'][':roleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.application[':applicationId'].role[':roleId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiApplicationApplicationIdRoleRoleId<
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
                  (typeof client.api.application)[':applicationId']['role'][':roleId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.application)[':applicationId']['role'][':roleId']['$delete']
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
  const mutationDefaults = getDeleteApiApplicationApplicationIdRoleRoleIdMutationOptions<
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

export function getPatchApiApplicationApplicationIdRoleRoleIdMutationKey() {
  return ['api', '/api/application/:applicationId/role/:roleId', 'PATCH'] as const
}

export function getPatchApiApplicationApplicationIdRoleRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.application)[':applicationId']['role'][':roleId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.application)[':applicationId']['role'][':roleId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiApplicationApplicationIdRoleRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.application)[':applicationId']['role'][':roleId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.application[':applicationId'].role[':roleId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiApplicationApplicationIdRoleRoleId<
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
                  (typeof client.api.application)[':applicationId']['role'][':roleId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.application)[':applicationId']['role'][':roleId']['$patch']
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
  const mutationDefaults = getPatchApiApplicationApplicationIdRoleRoleIdMutationOptions<
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

export function getPostApiApplicationApplicationIdScopeMutationKey() {
  return ['api', '/api/application/:applicationId/scope', 'POST'] as const
}

export function getPostApiApplicationApplicationIdScopeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.application)[':applicationId']['scope']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.application)[':applicationId']['scope']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiApplicationApplicationIdScopeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.application)[':applicationId']['scope']['$post']>,
    ) {
      return parseResponse(client.api.application[':applicationId'].scope.$post(args, options))
    },
  })
}

export function usePostApiApplicationApplicationIdScope<
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
                ReturnType<(typeof client.api.application)[':applicationId']['scope']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.application)[':applicationId']['scope']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiApplicationApplicationIdScopeMutationOptions<
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

export function getApiApplicationApplicationIdScopeScopeIdQueryKey(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/application/:applicationId/scope/:scopeId', keyArgs] as const
}

export function getApiApplicationApplicationIdScopeScopeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiApplicationApplicationIdScopeScopeIdQueryKey>
  >({
    queryKey: getApiApplicationApplicationIdScopeScopeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.application[':applicationId'].scope[':scopeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiApplicationApplicationIdScopeScopeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiApplicationApplicationIdScopeScopeIdQueryKey>
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
      ...getApiApplicationApplicationIdScopeScopeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiApplicationApplicationIdScopeScopeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiApplicationApplicationIdScopeScopeIdQueryKey>
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
      ...getApiApplicationApplicationIdScopeScopeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiApplicationApplicationIdScopeScopeIdMutationKey() {
  return ['api', '/api/application/:applicationId/scope/:scopeId', 'PUT'] as const
}

export function getPutApiApplicationApplicationIdScopeScopeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiApplicationApplicationIdScopeScopeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.application[':applicationId'].scope[':scopeId'].$put(args, options),
      )
    },
  })
}

export function usePutApiApplicationApplicationIdScopeScopeId<
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
                  (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$put']
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
  const mutationDefaults = getPutApiApplicationApplicationIdScopeScopeIdMutationOptions<
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

export function getPostApiApplicationApplicationIdScopeScopeIdMutationKey() {
  return ['api', '/api/application/:applicationId/scope/:scopeId', 'POST'] as const
}

export function getPostApiApplicationApplicationIdScopeScopeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiApplicationApplicationIdScopeScopeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.application[':applicationId'].scope[':scopeId'].$post(args, options),
      )
    },
  })
}

export function usePostApiApplicationApplicationIdScopeScopeId<
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
                  (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$post']
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
  const mutationDefaults = getPostApiApplicationApplicationIdScopeScopeIdMutationOptions<
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

export function getDeleteApiApplicationApplicationIdScopeScopeIdMutationKey() {
  return ['api', '/api/application/:applicationId/scope/:scopeId', 'DELETE'] as const
}

export function getDeleteApiApplicationApplicationIdScopeScopeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiApplicationApplicationIdScopeScopeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.application[':applicationId'].scope[':scopeId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiApplicationApplicationIdScopeScopeId<
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
                  (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$delete']
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
  const mutationDefaults = getDeleteApiApplicationApplicationIdScopeScopeIdMutationOptions<
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

export function getPatchApiApplicationApplicationIdScopeScopeIdMutationKey() {
  return ['api', '/api/application/:applicationId/scope/:scopeId', 'PATCH'] as const
}

export function getPatchApiApplicationApplicationIdScopeScopeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiApplicationApplicationIdScopeScopeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.application[':applicationId'].scope[':scopeId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiApplicationApplicationIdScopeScopeId<
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
                  (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$patch']
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
  const mutationDefaults = getPatchApiApplicationApplicationIdScopeScopeIdMutationOptions<
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

export function getApiCimdDomainQueryKey() {
  return ['api', '/api/cimd/domain'] as const
}

export function getApiCimdDomainQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.domain.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.domain.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCimdDomainQueryKey>
  >({
    queryKey: getApiCimdDomainQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.cimd.domain.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiCimdDomain<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.domain.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.domain.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiCimdDomainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiCimdDomainQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiCimdDomain<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.domain.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.domain.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiCimdDomainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiCimdDomainQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiCimdDomainMutationKey() {
  return ['api', '/api/cimd/domain', 'POST'] as const
}

export function getPostApiCimdDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.domain.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.cimd.domain.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCimdDomainMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.cimd.domain.$post>) {
      return parseResponse(client.api.cimd.domain.$post(args, options))
    },
  })
}

export function usePostApiCimdDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.domain.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.cimd.domain.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCimdDomainMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiCimdDomainSearchMutationKey() {
  return ['api', '/api/cimd/domain/search', 'POST'] as const
}

export function getPostApiCimdDomainSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.domain.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.cimd.domain.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCimdDomainSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.cimd.domain.search.$post>) {
      return parseResponse(client.api.cimd.domain.search.$post(args, options))
    },
  })
}

export function usePostApiCimdDomainSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.domain.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.cimd.domain.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCimdDomainSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiCimdDomainDomainIdQueryKey(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$get']>,
) {
  return ['api', '/api/cimd/domain/:domainId', args] as const
}

export function getApiCimdDomainDomainIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCimdDomainDomainIdQueryKey>
  >({
    queryKey: getApiCimdDomainDomainIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.cimd.domain[':domainId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCimdDomainDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCimdDomainDomainIdQueryKey>
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
      ...getApiCimdDomainDomainIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCimdDomainDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCimdDomainDomainIdQueryKey>
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
      ...getApiCimdDomainDomainIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCimdDomainDomainIdMutationKey() {
  return ['api', '/api/cimd/domain/:domainId', 'PUT'] as const
}

export function getPutApiCimdDomainDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCimdDomainDomainIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$put']>) {
      return parseResponse(client.api.cimd.domain[':domainId'].$put(args, options))
    },
  })
}

export function usePutApiCimdDomainDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCimdDomainDomainIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiCimdDomainDomainIdMutationKey() {
  return ['api', '/api/cimd/domain/:domainId', 'POST'] as const
}

export function getPostApiCimdDomainDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCimdDomainDomainIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$post']>,
    ) {
      return parseResponse(client.api.cimd.domain[':domainId'].$post(args, options))
    },
  })
}

export function usePostApiCimdDomainDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCimdDomainDomainIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiCimdDomainDomainIdMutationKey() {
  return ['api', '/api/cimd/domain/:domainId', 'DELETE'] as const
}

export function getDeleteApiCimdDomainDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCimdDomainDomainIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$delete']>,
    ) {
      return parseResponse(client.api.cimd.domain[':domainId'].$delete(args, options))
    },
  })
}

export function useDeleteApiCimdDomainDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiCimdDomainDomainIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiCimdDomainDomainIdMutationKey() {
  return ['api', '/api/cimd/domain/:domainId', 'PATCH'] as const
}

export function getPatchApiCimdDomainDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiCimdDomainDomainIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$patch']>,
    ) {
      return parseResponse(client.api.cimd.domain[':domainId'].$patch(args, options))
    },
  })
}

export function usePatchApiCimdDomainDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiCimdDomainDomainIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiCimdDomainDomainIdScopeMutationKey() {
  return ['api', '/api/cimd/domain/:domainId/scope', 'POST'] as const
}

export function getPostApiCimdDomainDomainIdScopeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCimdDomainDomainIdScopeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope']['$post']>,
    ) {
      return parseResponse(client.api.cimd.domain[':domainId'].scope.$post(args, options))
    },
  })
}

export function usePostApiCimdDomainDomainIdScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCimdDomainDomainIdScopeMutationOptions<
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

export function getApiCimdDomainDomainIdScopeScopeIdQueryKey(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']>,
) {
  return ['api', '/api/cimd/domain/:domainId/scope/:scopeId', args] as const
}

export function getApiCimdDomainDomainIdScopeScopeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCimdDomainDomainIdScopeScopeIdQueryKey>
  >({
    queryKey: getApiCimdDomainDomainIdScopeScopeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.cimd.domain[':domainId'].scope[':scopeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCimdDomainDomainIdScopeScopeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCimdDomainDomainIdScopeScopeIdQueryKey>
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
      ...getApiCimdDomainDomainIdScopeScopeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCimdDomainDomainIdScopeScopeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCimdDomainDomainIdScopeScopeIdQueryKey>
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
      ...getApiCimdDomainDomainIdScopeScopeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCimdDomainDomainIdScopeScopeIdMutationKey() {
  return ['api', '/api/cimd/domain/:domainId/scope/:scopeId', 'PUT'] as const
}

export function getPutApiCimdDomainDomainIdScopeScopeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCimdDomainDomainIdScopeScopeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.cimd.domain[':domainId'].scope[':scopeId'].$put(args, options),
      )
    },
  })
}

export function usePutApiCimdDomainDomainIdScopeScopeId<
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
                  (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCimdDomainDomainIdScopeScopeIdMutationOptions<
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

export function getPostApiCimdDomainDomainIdScopeScopeIdMutationKey() {
  return ['api', '/api/cimd/domain/:domainId/scope/:scopeId', 'POST'] as const
}

export function getPostApiCimdDomainDomainIdScopeScopeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCimdDomainDomainIdScopeScopeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.cimd.domain[':domainId'].scope[':scopeId'].$post(args, options),
      )
    },
  })
}

export function usePostApiCimdDomainDomainIdScopeScopeId<
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
                  (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$post']
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
  const mutationDefaults = getPostApiCimdDomainDomainIdScopeScopeIdMutationOptions<
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

export function getDeleteApiCimdDomainDomainIdScopeScopeIdMutationKey() {
  return ['api', '/api/cimd/domain/:domainId/scope/:scopeId', 'DELETE'] as const
}

export function getDeleteApiCimdDomainDomainIdScopeScopeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCimdDomainDomainIdScopeScopeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.cimd.domain[':domainId'].scope[':scopeId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCimdDomainDomainIdScopeScopeId<
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
                  (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$delete']
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
  const mutationDefaults = getDeleteApiCimdDomainDomainIdScopeScopeIdMutationOptions<
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

export function getPatchApiCimdDomainDomainIdScopeScopeIdMutationKey() {
  return ['api', '/api/cimd/domain/:domainId/scope/:scopeId', 'PATCH'] as const
}

export function getPatchApiCimdDomainDomainIdScopeScopeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiCimdDomainDomainIdScopeScopeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.cimd.domain[':domainId'].scope[':scopeId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiCimdDomainDomainIdScopeScopeId<
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
                  (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$patch']
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
  const mutationDefaults = getPatchApiCimdDomainDomainIdScopeScopeIdMutationOptions<
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

export function getPostApiCimdRegistrationSearchMutationKey() {
  return ['api', '/api/cimd/registration/search', 'POST'] as const
}

export function getPostApiCimdRegistrationSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.registration.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.cimd.registration.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCimdRegistrationSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.cimd.registration.search.$post>) {
      return parseResponse(client.api.cimd.registration.search.$post(args, options))
    },
  })
}

export function usePostApiCimdRegistrationSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.cimd.registration.search.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.cimd.registration.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCimdRegistrationSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiCimdRegistrationRegistrationIdQueryKey(
  args: InferRequestType<(typeof client.api.cimd.registration)[':registrationId']['$get']>,
) {
  return ['api', '/api/cimd/registration/:registrationId', args] as const
}

export function getApiCimdRegistrationRegistrationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cimd.registration)[':registrationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cimd.registration)[':registrationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cimd.registration)[':registrationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCimdRegistrationRegistrationIdQueryKey>
  >({
    queryKey: getApiCimdRegistrationRegistrationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.cimd.registration[':registrationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCimdRegistrationRegistrationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cimd.registration)[':registrationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cimd.registration)[':registrationId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.cimd.registration)[':registrationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCimdRegistrationRegistrationIdQueryKey>
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
      ...getApiCimdRegistrationRegistrationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCimdRegistrationRegistrationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.cimd.registration)[':registrationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cimd.registration)[':registrationId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.cimd.registration)[':registrationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCimdRegistrationRegistrationIdQueryKey>
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
      ...getApiCimdRegistrationRegistrationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiCimdRegistrationRegistrationIdMutationKey() {
  return ['api', '/api/cimd/registration/:registrationId', 'DELETE'] as const
}

export function getDeleteApiCimdRegistrationRegistrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cimd.registration)[':registrationId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.cimd.registration)[':registrationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCimdRegistrationRegistrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.cimd.registration)[':registrationId']['$delete']>,
    ) {
      return parseResponse(client.api.cimd.registration[':registrationId'].$delete(args, options))
    },
  })
}

export function useDeleteApiCimdRegistrationRegistrationId<
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
                ReturnType<(typeof client.api.cimd.registration)[':registrationId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.cimd.registration)[':registrationId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiCimdRegistrationRegistrationIdMutationOptions<
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

export function getApiConnectorQueryKey() {
  return ['api', '/api/connector'] as const
}

export function getApiConnectorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connector.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connector.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiConnectorQueryKey>
  >({
    queryKey: getApiConnectorQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.connector.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiConnector<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connector.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connector.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiConnectorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiConnectorQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiConnector<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connector.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connector.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiConnectorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiConnectorQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiConnectorMutationKey() {
  return ['api', '/api/connector', 'POST'] as const
}

export function getPostApiConnectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connector.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.connector.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiConnectorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.connector.$post>) {
      return parseResponse(client.api.connector.$post(args, options))
    },
  })
}

export function usePostApiConnector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connector.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.connector.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiConnectorMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiConnectorConnectorIdQueryKey(
  args: InferRequestType<(typeof client.api.connector)[':connectorId']['$get']>,
) {
  return ['api', '/api/connector/:connectorId', args] as const
}

export function getApiConnectorConnectorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.connector)[':connectorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiConnectorConnectorIdQueryKey>
  >({
    queryKey: getApiConnectorConnectorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.connector[':connectorId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiConnectorConnectorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.connector)[':connectorId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiConnectorConnectorIdQueryKey>
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
      ...getApiConnectorConnectorIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiConnectorConnectorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.connector)[':connectorId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiConnectorConnectorIdQueryKey>
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
      ...getApiConnectorConnectorIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiConnectorConnectorIdMutationKey() {
  return ['api', '/api/connector/:connectorId', 'PUT'] as const
}

export function getPutApiConnectorConnectorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.connector)[':connectorId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiConnectorConnectorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.connector)[':connectorId']['$put']>,
    ) {
      return parseResponse(client.api.connector[':connectorId'].$put(args, options))
    },
  })
}

export function usePutApiConnectorConnectorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.connector)[':connectorId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiConnectorConnectorIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiConnectorConnectorIdMutationKey() {
  return ['api', '/api/connector/:connectorId', 'POST'] as const
}

export function getPostApiConnectorConnectorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.connector)[':connectorId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiConnectorConnectorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.connector)[':connectorId']['$post']>,
    ) {
      return parseResponse(client.api.connector[':connectorId'].$post(args, options))
    },
  })
}

export function usePostApiConnectorConnectorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.connector)[':connectorId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiConnectorConnectorIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiConnectorConnectorIdMutationKey() {
  return ['api', '/api/connector/:connectorId', 'DELETE'] as const
}

export function getDeleteApiConnectorConnectorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.connector)[':connectorId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiConnectorConnectorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.connector)[':connectorId']['$delete']>,
    ) {
      return parseResponse(client.api.connector[':connectorId'].$delete(args, options))
    },
  })
}

export function useDeleteApiConnectorConnectorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.connector)[':connectorId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiConnectorConnectorIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiConnectorConnectorIdMutationKey() {
  return ['api', '/api/connector/:connectorId', 'PATCH'] as const
}

export function getPatchApiConnectorConnectorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.connector)[':connectorId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiConnectorConnectorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.connector)[':connectorId']['$patch']>,
    ) {
      return parseResponse(client.api.connector[':connectorId'].$patch(args, options))
    },
  })
}

export function usePatchApiConnectorConnectorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.connector)[':connectorId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiConnectorConnectorIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiConsentQueryKey(args: InferRequestType<typeof client.api.consent.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/consent', keyArgs] as const
}

export function getApiConsentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.consent.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiConsentQueryKey>
  >({
    queryKey: getApiConsentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.consent.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiConsent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.consent.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiConsentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiConsentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiConsent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.consent.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiConsentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiConsentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiConsentMutationKey() {
  return ['api', '/api/consent', 'POST'] as const
}

export function getPostApiConsentMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.consent.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiConsentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.consent.$post>) {
      return parseResponse(client.api.consent.$post(args, options))
    },
  })
}

export function usePostApiConsent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.consent.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiConsentMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiConsentSearchQueryKey(
  args: InferRequestType<typeof client.api.consent.search.$get>,
) {
  return ['api', '/api/consent/search', args] as const
}

export function getApiConsentSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.consent.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiConsentSearchQueryKey>
  >({
    queryKey: getApiConsentSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.consent.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiConsentSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.consent.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiConsentSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiConsentSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiConsentSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.consent.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiConsentSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiConsentSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiConsentSearchMutationKey() {
  return ['api', '/api/consent/search', 'POST'] as const
}

export function getPostApiConsentSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.consent.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiConsentSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.consent.search.$post>) {
      return parseResponse(client.api.consent.search.$post(args, options))
    },
  })
}

export function usePostApiConsentSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.consent.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiConsentSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiConsentConsentIdQueryKey(
  args: InferRequestType<(typeof client.api.consent)[':consentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/consent/:consentId', keyArgs] as const
}

export function getApiConsentConsentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.consent)[':consentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiConsentConsentIdQueryKey>
  >({
    queryKey: getApiConsentConsentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.consent[':consentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiConsentConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.consent)[':consentId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiConsentConsentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiConsentConsentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiConsentConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.consent)[':consentId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiConsentConsentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiConsentConsentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiConsentConsentIdMutationKey() {
  return ['api', '/api/consent/:consentId', 'PUT'] as const
}

export function getPutApiConsentConsentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.consent)[':consentId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiConsentConsentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.consent)[':consentId']['$put']>) {
      return parseResponse(client.api.consent[':consentId'].$put(args, options))
    },
  })
}

export function usePutApiConsentConsentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.consent)[':consentId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiConsentConsentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiConsentConsentIdMutationKey() {
  return ['api', '/api/consent/:consentId', 'POST'] as const
}

export function getPostApiConsentConsentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.consent)[':consentId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiConsentConsentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.consent)[':consentId']['$post']>) {
      return parseResponse(client.api.consent[':consentId'].$post(args, options))
    },
  })
}

export function usePostApiConsentConsentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.consent)[':consentId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiConsentConsentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiConsentConsentIdMutationKey() {
  return ['api', '/api/consent/:consentId', 'DELETE'] as const
}

export function getDeleteApiConsentConsentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.consent)[':consentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiConsentConsentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.consent)[':consentId']['$delete']>) {
      return parseResponse(client.api.consent[':consentId'].$delete(args, options))
    },
  })
}

export function useDeleteApiConsentConsentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.consent)[':consentId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiConsentConsentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiConsentConsentIdMutationKey() {
  return ['api', '/api/consent/:consentId', 'PATCH'] as const
}

export function getPatchApiConsentConsentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.consent)[':consentId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiConsentConsentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.consent)[':consentId']['$patch']>) {
      return parseResponse(client.api.consent[':consentId'].$patch(args, options))
    },
  })
}

export function usePatchApiConsentConsentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.consent)[':consentId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiConsentConsentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiEmailSendEmailTemplateIdMutationKey() {
  return ['api', '/api/email/send/:emailTemplateId', 'POST'] as const
}

export function getPostApiEmailSendEmailTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.email.send)[':emailTemplateId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.email.send)[':emailTemplateId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEmailSendEmailTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.email.send)[':emailTemplateId']['$post']>,
    ) {
      return parseResponse(client.api.email.send[':emailTemplateId'].$post(args, options))
    },
  })
}

export function usePostApiEmailSendEmailTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.email.send)[':emailTemplateId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.email.send)[':emailTemplateId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiEmailSendEmailTemplateIdMutationOptions<
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

export function getApiEmailTemplateQueryKey(
  args: InferRequestType<typeof client.api.email.template.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/email/template', keyArgs] as const
}

export function getApiEmailTemplateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.email.template.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEmailTemplateQueryKey>
  >({
    queryKey: getApiEmailTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.email.template.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiEmailTemplate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.email.template.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEmailTemplateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiEmailTemplateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiEmailTemplate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.email.template.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEmailTemplateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiEmailTemplateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiEmailTemplateMutationKey() {
  return ['api', '/api/email/template', 'POST'] as const
}

export function getPostApiEmailTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.email.template.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEmailTemplateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.email.template.$post>) {
      return parseResponse(client.api.email.template.$post(args, options))
    },
  })
}

export function usePostApiEmailTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.email.template.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiEmailTemplateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiEmailTemplatePreviewMutationKey() {
  return ['api', '/api/email/template/preview', 'POST'] as const
}

export function getPostApiEmailTemplatePreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.preview.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.email.template.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEmailTemplatePreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.email.template.preview.$post>) {
      return parseResponse(client.api.email.template.preview.$post(args, options))
    },
  })
}

export function usePostApiEmailTemplatePreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.email.template.preview.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.email.template.preview.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiEmailTemplatePreviewMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiEmailTemplateSearchMutationKey() {
  return ['api', '/api/email/template/search', 'POST'] as const
}

export function getPostApiEmailTemplateSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.email.template.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEmailTemplateSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.email.template.search.$post>) {
      return parseResponse(client.api.email.template.search.$post(args, options))
    },
  })
}

export function usePostApiEmailTemplateSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.email.template.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiEmailTemplateSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiEmailTemplateEmailTemplateIdQueryKey(
  args: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/email/template/:emailTemplateId', keyArgs] as const
}

export function getApiEmailTemplateEmailTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEmailTemplateEmailTemplateIdQueryKey>
  >({
    queryKey: getApiEmailTemplateEmailTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.email.template[':emailTemplateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiEmailTemplateEmailTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEmailTemplateEmailTemplateIdQueryKey>
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
      ...getApiEmailTemplateEmailTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiEmailTemplateEmailTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEmailTemplateEmailTemplateIdQueryKey>
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
      ...getApiEmailTemplateEmailTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiEmailTemplateEmailTemplateIdMutationKey() {
  return ['api', '/api/email/template/:emailTemplateId', 'PUT'] as const
}

export function getPutApiEmailTemplateEmailTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiEmailTemplateEmailTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$put']>,
    ) {
      return parseResponse(client.api.email.template[':emailTemplateId'].$put(args, options))
    },
  })
}

export function usePutApiEmailTemplateEmailTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiEmailTemplateEmailTemplateIdMutationOptions<
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

export function getPostApiEmailTemplateEmailTemplateIdMutationKey() {
  return ['api', '/api/email/template/:emailTemplateId', 'POST'] as const
}

export function getPostApiEmailTemplateEmailTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEmailTemplateEmailTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$post']>,
    ) {
      return parseResponse(client.api.email.template[':emailTemplateId'].$post(args, options))
    },
  })
}

export function usePostApiEmailTemplateEmailTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiEmailTemplateEmailTemplateIdMutationOptions<
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

export function getDeleteApiEmailTemplateEmailTemplateIdMutationKey() {
  return ['api', '/api/email/template/:emailTemplateId', 'DELETE'] as const
}

export function getDeleteApiEmailTemplateEmailTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiEmailTemplateEmailTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$delete']>,
    ) {
      return parseResponse(client.api.email.template[':emailTemplateId'].$delete(args, options))
    },
  })
}

export function useDeleteApiEmailTemplateEmailTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiEmailTemplateEmailTemplateIdMutationOptions<
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

export function getPatchApiEmailTemplateEmailTemplateIdMutationKey() {
  return ['api', '/api/email/template/:emailTemplateId', 'PATCH'] as const
}

export function getPatchApiEmailTemplateEmailTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiEmailTemplateEmailTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$patch']>,
    ) {
      return parseResponse(client.api.email.template[':emailTemplateId'].$patch(args, options))
    },
  })
}

export function usePatchApiEmailTemplateEmailTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiEmailTemplateEmailTemplateIdMutationOptions<
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

export function getPostApiEntityMutationKey() {
  return ['api', '/api/entity', 'POST'] as const
}

export function getPostApiEntityMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.entity.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEntityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.entity.$post>) {
      return parseResponse(client.api.entity.$post(args, options))
    },
  })
}

export function usePostApiEntity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.entity.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiEntityMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiEntityGrantSearchQueryKey(
  args: InferRequestType<typeof client.api.entity.grant.search.$get>,
) {
  return ['api', '/api/entity/grant/search', args] as const
}

export function getApiEntityGrantSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.grant.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.entity.grant.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.grant.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEntityGrantSearchQueryKey>
  >({
    queryKey: getApiEntityGrantSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.entity.grant.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiEntityGrantSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.grant.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.entity.grant.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.grant.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEntityGrantSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiEntityGrantSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiEntityGrantSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.grant.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.entity.grant.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.grant.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEntityGrantSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiEntityGrantSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiEntityGrantSearchMutationKey() {
  return ['api', '/api/entity/grant/search', 'POST'] as const
}

export function getPostApiEntityGrantSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.grant.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.entity.grant.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEntityGrantSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.entity.grant.search.$post>) {
      return parseResponse(client.api.entity.grant.search.$post(args, options))
    },
  })
}

export function usePostApiEntityGrantSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.grant.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.entity.grant.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiEntityGrantSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiEntitySearchQueryKey(
  args: InferRequestType<typeof client.api.entity.search.$get>,
) {
  return ['api', '/api/entity/search', args] as const
}

export function getApiEntitySearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.entity.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEntitySearchQueryKey>
  >({
    queryKey: getApiEntitySearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.entity.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiEntitySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.entity.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEntitySearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiEntitySearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiEntitySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.entity.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEntitySearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiEntitySearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiEntitySearchMutationKey() {
  return ['api', '/api/entity/search', 'PUT'] as const
}

export function getPutApiEntitySearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.search.$put>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutApiEntitySearchMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.entity.search.$put(undefined, options))
    },
  })
}

export function usePutApiEntitySearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.search.$put>>>
          >
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
  const mutationDefaults = getPutApiEntitySearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiEntitySearchMutationKey() {
  return ['api', '/api/entity/search', 'POST'] as const
}

export function getPostApiEntitySearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.entity.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEntitySearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.entity.search.$post>) {
      return parseResponse(client.api.entity.search.$post(args, options))
    },
  })
}

export function usePostApiEntitySearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.entity.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiEntitySearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiEntityTypeQueryKey() {
  return ['api', '/api/entity/type'] as const
}

export function getApiEntityTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEntityTypeQueryKey>
  >({
    queryKey: getApiEntityTypeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.entity.type.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiEntityType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiEntityTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiEntityTypeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiEntityType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiEntityTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiEntityTypeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiEntityTypeMutationKey() {
  return ['api', '/api/entity/type', 'POST'] as const
}

export function getPostApiEntityTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.entity.type.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEntityTypeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.entity.type.$post>) {
      return parseResponse(client.api.entity.type.$post(args, options))
    },
  })
}

export function usePostApiEntityType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.entity.type.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiEntityTypeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiEntityTypeSearchQueryKey(
  args: InferRequestType<typeof client.api.entity.type.search.$get>,
) {
  return ['api', '/api/entity/type/search', args] as const
}

export function getApiEntityTypeSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.entity.type.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEntityTypeSearchQueryKey>
  >({
    queryKey: getApiEntityTypeSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.entity.type.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiEntityTypeSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.entity.type.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEntityTypeSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiEntityTypeSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiEntityTypeSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.entity.type.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEntityTypeSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiEntityTypeSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiEntityTypeSearchMutationKey() {
  return ['api', '/api/entity/type/search', 'POST'] as const
}

export function getPostApiEntityTypeSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.entity.type.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEntityTypeSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.entity.type.search.$post>) {
      return parseResponse(client.api.entity.type.search.$post(args, options))
    },
  })
}

export function usePostApiEntityTypeSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.entity.type.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiEntityTypeSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiEntityTypeEntityTypeIdQueryKey(
  args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$get']>,
) {
  return ['api', '/api/entity/type/:entityTypeId', args] as const
}

export function getApiEntityTypeEntityTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEntityTypeEntityTypeIdQueryKey>
  >({
    queryKey: getApiEntityTypeEntityTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.entity.type[':entityTypeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiEntityTypeEntityTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEntityTypeEntityTypeIdQueryKey>
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
      ...getApiEntityTypeEntityTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiEntityTypeEntityTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEntityTypeEntityTypeIdQueryKey>
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
      ...getApiEntityTypeEntityTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiEntityTypeEntityTypeIdMutationKey() {
  return ['api', '/api/entity/type/:entityTypeId', 'PUT'] as const
}

export function getPutApiEntityTypeEntityTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiEntityTypeEntityTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$put']>,
    ) {
      return parseResponse(client.api.entity.type[':entityTypeId'].$put(args, options))
    },
  })
}

export function usePutApiEntityTypeEntityTypeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiEntityTypeEntityTypeIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiEntityTypeEntityTypeIdMutationKey() {
  return ['api', '/api/entity/type/:entityTypeId', 'POST'] as const
}

export function getPostApiEntityTypeEntityTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEntityTypeEntityTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$post']>,
    ) {
      return parseResponse(client.api.entity.type[':entityTypeId'].$post(args, options))
    },
  })
}

export function usePostApiEntityTypeEntityTypeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiEntityTypeEntityTypeIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiEntityTypeEntityTypeIdMutationKey() {
  return ['api', '/api/entity/type/:entityTypeId', 'DELETE'] as const
}

export function getDeleteApiEntityTypeEntityTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiEntityTypeEntityTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$delete']>,
    ) {
      return parseResponse(client.api.entity.type[':entityTypeId'].$delete(args, options))
    },
  })
}

export function useDeleteApiEntityTypeEntityTypeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiEntityTypeEntityTypeIdMutationOptions<
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

export function getPatchApiEntityTypeEntityTypeIdMutationKey() {
  return ['api', '/api/entity/type/:entityTypeId', 'PATCH'] as const
}

export function getPatchApiEntityTypeEntityTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiEntityTypeEntityTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$patch']>,
    ) {
      return parseResponse(client.api.entity.type[':entityTypeId'].$patch(args, options))
    },
  })
}

export function usePatchApiEntityTypeEntityTypeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiEntityTypeEntityTypeIdMutationOptions<
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

export function getPostApiEntityTypeEntityTypeIdPermissionMutationKey() {
  return ['api', '/api/entity/type/:entityTypeId/permission', 'POST'] as const
}

export function getPostApiEntityTypeEntityTypeIdPermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.entity.type)[':entityTypeId']['permission']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['permission']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEntityTypeEntityTypeIdPermissionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.entity.type)[':entityTypeId']['permission']['$post']
      >,
    ) {
      return parseResponse(client.api.entity.type[':entityTypeId'].permission.$post(args, options))
    },
  })
}

export function usePostApiEntityTypeEntityTypeIdPermission<
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
                ReturnType<(typeof client.api.entity.type)[':entityTypeId']['permission']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['permission']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiEntityTypeEntityTypeIdPermissionMutationOptions<
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

export function getPutApiEntityTypeEntityTypeIdPermissionPermissionIdMutationKey() {
  return ['api', '/api/entity/type/:entityTypeId/permission/:permissionId', 'PUT'] as const
}

export function getPutApiEntityTypeEntityTypeIdPermissionPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiEntityTypeEntityTypeIdPermissionPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.entity.type[':entityTypeId'].permission[':permissionId'].$put(args, options),
      )
    },
  })
}

export function usePutApiEntityTypeEntityTypeIdPermissionPermissionId<
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
                  (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$put']
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
  const mutationDefaults = getPutApiEntityTypeEntityTypeIdPermissionPermissionIdMutationOptions<
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

export function getPostApiEntityTypeEntityTypeIdPermissionPermissionIdMutationKey() {
  return ['api', '/api/entity/type/:entityTypeId/permission/:permissionId', 'POST'] as const
}

export function getPostApiEntityTypeEntityTypeIdPermissionPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiEntityTypeEntityTypeIdPermissionPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.entity.type[':entityTypeId'].permission[':permissionId'].$post(args, options),
      )
    },
  })
}

export function usePostApiEntityTypeEntityTypeIdPermissionPermissionId<
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
                  (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$post']
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
  const mutationDefaults = getPostApiEntityTypeEntityTypeIdPermissionPermissionIdMutationOptions<
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

export function getDeleteApiEntityTypeEntityTypeIdPermissionPermissionIdMutationKey() {
  return ['api', '/api/entity/type/:entityTypeId/permission/:permissionId', 'DELETE'] as const
}

export function getDeleteApiEntityTypeEntityTypeIdPermissionPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiEntityTypeEntityTypeIdPermissionPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.entity.type[':entityTypeId'].permission[':permissionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiEntityTypeEntityTypeIdPermissionPermissionId<
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
                  (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$delete']
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
  const mutationDefaults = getDeleteApiEntityTypeEntityTypeIdPermissionPermissionIdMutationOptions<
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

export function getPatchApiEntityTypeEntityTypeIdPermissionPermissionIdMutationKey() {
  return ['api', '/api/entity/type/:entityTypeId/permission/:permissionId', 'PATCH'] as const
}

export function getPatchApiEntityTypeEntityTypeIdPermissionPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiEntityTypeEntityTypeIdPermissionPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.entity.type[':entityTypeId'].permission[':permissionId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiEntityTypeEntityTypeIdPermissionPermissionId<
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
                  (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$patch']
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
  const mutationDefaults = getPatchApiEntityTypeEntityTypeIdPermissionPermissionIdMutationOptions<
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

export function getApiEntityEntityIdQueryKey(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/entity/:entityId', keyArgs] as const
}

export function getApiEntityEntityIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEntityEntityIdQueryKey>
  >({
    queryKey: getApiEntityEntityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.entity[':entityId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiEntityEntityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEntityEntityIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiEntityEntityIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiEntityEntityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEntityEntityIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiEntityEntityIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiEntityEntityIdMutationKey() {
  return ['api', '/api/entity/:entityId', 'PUT'] as const
}

export function getPutApiEntityEntityIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.entity)[':entityId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiEntityEntityIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.entity)[':entityId']['$put']>) {
      return parseResponse(client.api.entity[':entityId'].$put(args, options))
    },
  })
}

export function usePutApiEntityEntityId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.entity)[':entityId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiEntityEntityIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiEntityEntityIdMutationKey() {
  return ['api', '/api/entity/:entityId', 'POST'] as const
}

export function getPostApiEntityEntityIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.entity)[':entityId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEntityEntityIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.entity)[':entityId']['$post']>) {
      return parseResponse(client.api.entity[':entityId'].$post(args, options))
    },
  })
}

export function usePostApiEntityEntityId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.entity)[':entityId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiEntityEntityIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiEntityEntityIdMutationKey() {
  return ['api', '/api/entity/:entityId', 'DELETE'] as const
}

export function getDeleteApiEntityEntityIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.entity)[':entityId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiEntityEntityIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.entity)[':entityId']['$delete']>) {
      return parseResponse(client.api.entity[':entityId'].$delete(args, options))
    },
  })
}

export function useDeleteApiEntityEntityId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.entity)[':entityId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiEntityEntityIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiEntityEntityIdMutationKey() {
  return ['api', '/api/entity/:entityId', 'PATCH'] as const
}

export function getPatchApiEntityEntityIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.entity)[':entityId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiEntityEntityIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.entity)[':entityId']['$patch']>) {
      return parseResponse(client.api.entity[':entityId'].$patch(args, options))
    },
  })
}

export function usePatchApiEntityEntityId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.entity)[':entityId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiEntityEntityIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiEntityEntityIdGrantQueryKey(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/entity/:entityId/grant', keyArgs] as const
}

export function getApiEntityEntityIdGrantQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.entity)[':entityId']['grant']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.entity)[':entityId']['grant']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEntityEntityIdGrantQueryKey>
  >({
    queryKey: getApiEntityEntityIdGrantQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.entity[':entityId'].grant.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiEntityEntityIdGrant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.entity)[':entityId']['grant']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.entity)[':entityId']['grant']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEntityEntityIdGrantQueryKey>
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
      ...getApiEntityEntityIdGrantQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiEntityEntityIdGrant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.entity)[':entityId']['grant']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.entity)[':entityId']['grant']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEntityEntityIdGrantQueryKey>
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
      ...getApiEntityEntityIdGrantQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiEntityEntityIdGrantMutationKey() {
  return ['api', '/api/entity/:entityId/grant', 'POST'] as const
}

export function getPostApiEntityEntityIdGrantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.entity)[':entityId']['grant']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEntityEntityIdGrantMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$post']>,
    ) {
      return parseResponse(client.api.entity[':entityId'].grant.$post(args, options))
    },
  })
}

export function usePostApiEntityEntityIdGrant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.entity)[':entityId']['grant']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiEntityEntityIdGrantMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiEntityEntityIdGrantMutationKey() {
  return ['api', '/api/entity/:entityId/grant', 'DELETE'] as const
}

export function getDeleteApiEntityEntityIdGrantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.entity)[':entityId']['grant']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiEntityEntityIdGrantMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$delete']>,
    ) {
      return parseResponse(client.api.entity[':entityId'].grant.$delete(args, options))
    },
  })
}

export function useDeleteApiEntityEntityIdGrant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.entity)[':entityId']['grant']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiEntityEntityIdGrantMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiFormQueryKey() {
  return ['api', '/api/form'] as const
}

export function getApiFormQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiFormQueryKey>
  >({
    queryKey: getApiFormQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.form.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiForm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiFormQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFormQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiForm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiFormQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFormQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiFormMutationKey() {
  return ['api', '/api/form', 'POST'] as const
}

export function getPostApiFormMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.form.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFormMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.form.$post>) {
      return parseResponse(client.api.form.$post(args, options))
    },
  })
}

export function usePostApiForm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.form.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFormMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiFormFieldQueryKey() {
  return ['api', '/api/form/field'] as const
}

export function getApiFormFieldQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.field.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.field.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiFormFieldQueryKey>
  >({
    queryKey: getApiFormFieldQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.form.field.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiFormField<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.field.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.field.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiFormFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFormFieldQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFormField<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.field.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.field.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiFormFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFormFieldQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiFormFieldMutationKey() {
  return ['api', '/api/form/field', 'POST'] as const
}

export function getPostApiFormFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.field.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.form.field.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFormFieldMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.form.field.$post>) {
      return parseResponse(client.api.form.field.$post(args, options))
    },
  })
}

export function usePostApiFormField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.field.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.form.field.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFormFieldMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiFormFieldFieldIdQueryKey(
  args: InferRequestType<(typeof client.api.form.field)[':fieldId']['$get']>,
) {
  return ['api', '/api/form/field/:fieldId', args] as const
}

export function getApiFormFieldFieldIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.form.field)[':fieldId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFormFieldFieldIdQueryKey>
  >({
    queryKey: getApiFormFieldFieldIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.form.field[':fieldId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFormFieldFieldId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.form.field)[':fieldId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFormFieldFieldIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFormFieldFieldIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFormFieldFieldId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.form.field)[':fieldId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFormFieldFieldIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFormFieldFieldIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiFormFieldFieldIdMutationKey() {
  return ['api', '/api/form/field/:fieldId', 'PUT'] as const
}

export function getPutApiFormFieldFieldIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.form.field)[':fieldId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiFormFieldFieldIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.form.field)[':fieldId']['$put']>) {
      return parseResponse(client.api.form.field[':fieldId'].$put(args, options))
    },
  })
}

export function usePutApiFormFieldFieldId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.form.field)[':fieldId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiFormFieldFieldIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiFormFieldFieldIdMutationKey() {
  return ['api', '/api/form/field/:fieldId', 'POST'] as const
}

export function getPostApiFormFieldFieldIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.form.field)[':fieldId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFormFieldFieldIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.form.field)[':fieldId']['$post']>) {
      return parseResponse(client.api.form.field[':fieldId'].$post(args, options))
    },
  })
}

export function usePostApiFormFieldFieldId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.form.field)[':fieldId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFormFieldFieldIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiFormFieldFieldIdMutationKey() {
  return ['api', '/api/form/field/:fieldId', 'DELETE'] as const
}

export function getDeleteApiFormFieldFieldIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.form.field)[':fieldId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiFormFieldFieldIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.form.field)[':fieldId']['$delete']>,
    ) {
      return parseResponse(client.api.form.field[':fieldId'].$delete(args, options))
    },
  })
}

export function useDeleteApiFormFieldFieldId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.form.field)[':fieldId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiFormFieldFieldIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiFormFieldFieldIdMutationKey() {
  return ['api', '/api/form/field/:fieldId', 'PATCH'] as const
}

export function getPatchApiFormFieldFieldIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.form.field)[':fieldId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiFormFieldFieldIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.form.field)[':fieldId']['$patch']>) {
      return parseResponse(client.api.form.field[':fieldId'].$patch(args, options))
    },
  })
}

export function usePatchApiFormFieldFieldId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.form.field)[':fieldId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiFormFieldFieldIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiFormFormIdQueryKey(
  args: InferRequestType<(typeof client.api.form)[':formId']['$get']>,
) {
  return ['api', '/api/form/:formId', args] as const
}

export function getApiFormFormIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.form)[':formId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFormFormIdQueryKey>
  >({
    queryKey: getApiFormFormIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.form[':formId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiFormFormId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.form)[':formId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFormFormIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFormFormIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFormFormId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.form)[':formId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFormFormIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFormFormIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiFormFormIdMutationKey() {
  return ['api', '/api/form/:formId', 'PUT'] as const
}

export function getPutApiFormFormIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.form)[':formId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiFormFormIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.form)[':formId']['$put']>) {
      return parseResponse(client.api.form[':formId'].$put(args, options))
    },
  })
}

export function usePutApiFormFormId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.form)[':formId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiFormFormIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiFormFormIdMutationKey() {
  return ['api', '/api/form/:formId', 'POST'] as const
}

export function getPostApiFormFormIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.form)[':formId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFormFormIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.form)[':formId']['$post']>) {
      return parseResponse(client.api.form[':formId'].$post(args, options))
    },
  })
}

export function usePostApiFormFormId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.form)[':formId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFormFormIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiFormFormIdMutationKey() {
  return ['api', '/api/form/:formId', 'DELETE'] as const
}

export function getDeleteApiFormFormIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.form)[':formId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiFormFormIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.form)[':formId']['$delete']>) {
      return parseResponse(client.api.form[':formId'].$delete(args, options))
    },
  })
}

export function useDeleteApiFormFormId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.form)[':formId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.form)[':formId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiFormFormIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiFormFormIdMutationKey() {
  return ['api', '/api/form/:formId', 'PATCH'] as const
}

export function getPatchApiFormFormIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.form)[':formId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiFormFormIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.form)[':formId']['$patch']>) {
      return parseResponse(client.api.form[':formId'].$patch(args, options))
    },
  })
}

export function usePatchApiFormFormId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.form)[':formId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiFormFormIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiGroupQueryKey(args: InferRequestType<typeof client.api.group.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/group', keyArgs] as const
}

export function getApiGroupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.group.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiGroupQueryKey>
  >({
    queryKey: getApiGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.group.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.group.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiGroupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.group.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiGroupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiGroupMutationKey() {
  return ['api', '/api/group', 'POST'] as const
}

export function getPostApiGroupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.group.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiGroupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.group.$post>) {
      return parseResponse(client.api.group.$post(args, options))
    },
  })
}

export function usePostApiGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.group.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiGroupMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutApiGroupMemberMutationKey() {
  return ['api', '/api/group/member', 'PUT'] as const
}

export function getPutApiGroupMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.member.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.group.member.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiGroupMemberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.group.member.$put>) {
      return parseResponse(client.api.group.member.$put(args, options))
    },
  })
}

export function usePutApiGroupMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.member.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.api.group.member.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiGroupMemberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiGroupMemberMutationKey() {
  return ['api', '/api/group/member', 'POST'] as const
}

export function getPostApiGroupMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.member.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.group.member.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiGroupMemberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.group.member.$post>) {
      return parseResponse(client.api.group.member.$post(args, options))
    },
  })
}

export function usePostApiGroupMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.group.member.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.group.member.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiGroupMemberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiGroupMemberMutationKey() {
  return ['api', '/api/group/member', 'DELETE'] as const
}

export function getDeleteApiGroupMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.member.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.group.member.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiGroupMemberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.group.member.$delete>) {
      return parseResponse(client.api.group.member.$delete(args, options))
    },
  })
}

export function useDeleteApiGroupMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.group.member.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.group.member.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiGroupMemberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiGroupMemberSearchMutationKey() {
  return ['api', '/api/group/member/search', 'POST'] as const
}

export function getPostApiGroupMemberSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.group.member.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.group.member.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiGroupMemberSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.group.member.search.$post>) {
      return parseResponse(client.api.group.member.search.$post(args, options))
    },
  })
}

export function usePostApiGroupMemberSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.group.member.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.group.member.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiGroupMemberSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiGroupSearchMutationKey() {
  return ['api', '/api/group/search', 'POST'] as const
}

export function getPostApiGroupSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.group.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiGroupSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.group.search.$post>) {
      return parseResponse(client.api.group.search.$post(args, options))
    },
  })
}

export function usePostApiGroupSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.group.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.group.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiGroupSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiGroupGroupIdQueryKey(
  args: InferRequestType<(typeof client.api.group)[':groupId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/group/:groupId', keyArgs] as const
}

export function getApiGroupGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.group)[':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGroupGroupIdQueryKey>
  >({
    queryKey: getApiGroupGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.group[':groupId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiGroupGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.group)[':groupId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGroupGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiGroupGroupIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiGroupGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.group)[':groupId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGroupGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiGroupGroupIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiGroupGroupIdMutationKey() {
  return ['api', '/api/group/:groupId', 'PUT'] as const
}

export function getPutApiGroupGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.group)[':groupId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiGroupGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.group)[':groupId']['$put']>) {
      return parseResponse(client.api.group[':groupId'].$put(args, options))
    },
  })
}

export function usePutApiGroupGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.group)[':groupId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiGroupGroupIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiGroupGroupIdMutationKey() {
  return ['api', '/api/group/:groupId', 'POST'] as const
}

export function getPostApiGroupGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.group)[':groupId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiGroupGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.group)[':groupId']['$post']>) {
      return parseResponse(client.api.group[':groupId'].$post(args, options))
    },
  })
}

export function usePostApiGroupGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.group)[':groupId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.group)[':groupId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiGroupGroupIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiGroupGroupIdMutationKey() {
  return ['api', '/api/group/:groupId', 'DELETE'] as const
}

export function getDeleteApiGroupGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.group)[':groupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiGroupGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.group)[':groupId']['$delete']>) {
      return parseResponse(client.api.group[':groupId'].$delete(args, options))
    },
  })
}

export function useDeleteApiGroupGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.group)[':groupId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.group)[':groupId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiGroupGroupIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiGroupGroupIdMutationKey() {
  return ['api', '/api/group/:groupId', 'PATCH'] as const
}

export function getPatchApiGroupGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.group)[':groupId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiGroupGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.group)[':groupId']['$patch']>) {
      return parseResponse(client.api.group[':groupId'].$patch(args, options))
    },
  })
}

export function usePatchApiGroupGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.group)[':groupId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.group)[':groupId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiGroupGroupIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiHealthQueryKey() {
  return ['api', '/api/health'] as const
}

export function getApiHealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiHealthQueryKey>
  >({
    queryKey: getApiHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiIdentityProviderQueryKey(
  args: InferRequestType<(typeof client.api)['identity-provider']['$get']>,
) {
  return ['api', '/api/identity-provider', args] as const
}

export function getApiIdentityProviderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['identity-provider']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['identity-provider']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIdentityProviderQueryKey>
  >({
    queryKey: getApiIdentityProviderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['identity-provider'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiIdentityProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['identity-provider']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIdentityProviderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiIdentityProviderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiIdentityProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['identity-provider']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIdentityProviderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiIdentityProviderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiIdentityProviderMutationKey() {
  return ['api', '/api/identity-provider', 'POST'] as const
}

export function getPostApiIdentityProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['identity-provider']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['identity-provider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIdentityProviderMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['identity-provider']['$post']>) {
      return parseResponse(client.api['identity-provider'].$post(args, options))
    },
  })
}

export function usePostApiIdentityProvider<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['identity-provider']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiIdentityProviderMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiIdentityProviderLinkQueryKey(
  args: InferRequestType<(typeof client.api)['identity-provider']['link']['$get']>,
) {
  return ['api', '/api/identity-provider/link', args] as const
}

export function getApiIdentityProviderLinkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-provider']['link']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider']['link']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-provider']['link']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIdentityProviderLinkQueryKey>
  >({
    queryKey: getApiIdentityProviderLinkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['identity-provider'].link.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiIdentityProviderLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-provider']['link']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider']['link']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['link']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIdentityProviderLinkQueryKey>
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
      ...getApiIdentityProviderLinkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiIdentityProviderLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-provider']['link']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider']['link']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['link']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIdentityProviderLinkQueryKey>
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
      ...getApiIdentityProviderLinkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiIdentityProviderLinkMutationKey() {
  return ['api', '/api/identity-provider/link', 'POST'] as const
}

export function getPostApiIdentityProviderLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-provider']['link']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['identity-provider']['link']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIdentityProviderLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['identity-provider']['link']['$post']>,
    ) {
      return parseResponse(client.api['identity-provider'].link.$post(args, options))
    },
  })
}

export function usePostApiIdentityProviderLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['link']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['identity-provider']['link']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiIdentityProviderLinkMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiIdentityProviderLinkMutationKey() {
  return ['api', '/api/identity-provider/link', 'DELETE'] as const
}

export function getDeleteApiIdentityProviderLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-provider']['link']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['identity-provider']['link']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiIdentityProviderLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['identity-provider']['link']['$delete']>,
    ) {
      return parseResponse(client.api['identity-provider'].link.$delete(args, options))
    },
  })
}

export function useDeleteApiIdentityProviderLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['link']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['identity-provider']['link']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiIdentityProviderLinkMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiIdentityProviderLinkPendingPendingLinkIdQueryKey(
  args: InferRequestType<
    (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
  >,
) {
  return ['api', '/api/identity-provider/link/pending/:pendingLinkId', args] as const
}

export function getApiIdentityProviderLinkPendingPendingLinkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIdentityProviderLinkPendingPendingLinkIdQueryKey>
  >({
    queryKey: getApiIdentityProviderLinkPendingPendingLinkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['identity-provider'].link.pending[':pendingLinkId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiIdentityProviderLinkPendingPendingLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIdentityProviderLinkPendingPendingLinkIdQueryKey>
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
      ...getApiIdentityProviderLinkPendingPendingLinkIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiIdentityProviderLinkPendingPendingLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIdentityProviderLinkPendingPendingLinkIdQueryKey>
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
      ...getApiIdentityProviderLinkPendingPendingLinkIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiIdentityProviderLoginMutationKey() {
  return ['api', '/api/identity-provider/login', 'POST'] as const
}

export function getPostApiIdentityProviderLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-provider']['login']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['identity-provider']['login']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIdentityProviderLoginMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['identity-provider']['login']['$post']>,
    ) {
      return parseResponse(client.api['identity-provider'].login.$post(args, options))
    },
  })
}

export function usePostApiIdentityProviderLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['login']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['identity-provider']['login']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiIdentityProviderLoginMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiIdentityProviderLookupQueryKey(
  args: InferRequestType<(typeof client.api)['identity-provider']['lookup']['$get']>,
) {
  return ['api', '/api/identity-provider/lookup', args] as const
}

export function getApiIdentityProviderLookupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-provider']['lookup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider']['lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-provider']['lookup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIdentityProviderLookupQueryKey>
  >({
    queryKey: getApiIdentityProviderLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['identity-provider'].lookup.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiIdentityProviderLookup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-provider']['lookup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider']['lookup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['lookup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIdentityProviderLookupQueryKey>
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
      ...getApiIdentityProviderLookupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiIdentityProviderLookup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-provider']['lookup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider']['lookup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['lookup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIdentityProviderLookupQueryKey>
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
      ...getApiIdentityProviderLookupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiIdentityProviderSearchQueryKey(
  args: InferRequestType<(typeof client.api)['identity-provider']['search']['$get']>,
) {
  return ['api', '/api/identity-provider/search', args] as const
}

export function getApiIdentityProviderSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-provider']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-provider']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIdentityProviderSearchQueryKey>
  >({
    queryKey: getApiIdentityProviderSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['identity-provider'].search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiIdentityProviderSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-provider']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider']['search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIdentityProviderSearchQueryKey>
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
      ...getApiIdentityProviderSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiIdentityProviderSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-provider']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider']['search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIdentityProviderSearchQueryKey>
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
      ...getApiIdentityProviderSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiIdentityProviderSearchMutationKey() {
  return ['api', '/api/identity-provider/search', 'POST'] as const
}

export function getPostApiIdentityProviderSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-provider']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['identity-provider']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIdentityProviderSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['identity-provider']['search']['$post']>,
    ) {
      return parseResponse(client.api['identity-provider'].search.$post(args, options))
    },
  })
}

export function usePostApiIdentityProviderSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['identity-provider']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiIdentityProviderSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiIdentityProviderStartMutationKey() {
  return ['api', '/api/identity-provider/start', 'POST'] as const
}

export function getPostApiIdentityProviderStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-provider']['start']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['identity-provider']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIdentityProviderStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['identity-provider']['start']['$post']>,
    ) {
      return parseResponse(client.api['identity-provider'].start.$post(args, options))
    },
  })
}

export function usePostApiIdentityProviderStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['start']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['identity-provider']['start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiIdentityProviderStartMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiIdentityProviderTestQueryKey(
  args: InferRequestType<(typeof client.api)['identity-provider']['test']['$get']>,
) {
  return ['api', '/api/identity-provider/test', args] as const
}

export function getApiIdentityProviderTestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-provider']['test']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider']['test']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-provider']['test']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIdentityProviderTestQueryKey>
  >({
    queryKey: getApiIdentityProviderTestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['identity-provider'].test.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiIdentityProviderTest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-provider']['test']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider']['test']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['test']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIdentityProviderTestQueryKey>
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
      ...getApiIdentityProviderTestQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiIdentityProviderTest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-provider']['test']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider']['test']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['test']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIdentityProviderTestQueryKey>
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
      ...getApiIdentityProviderTestQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiIdentityProviderTestMutationKey() {
  return ['api', '/api/identity-provider/test', 'POST'] as const
}

export function getPostApiIdentityProviderTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-provider']['test']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['identity-provider']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIdentityProviderTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['identity-provider']['test']['$post']>,
    ) {
      return parseResponse(client.api['identity-provider'].test.$post(args, options))
    },
  })
}

export function usePostApiIdentityProviderTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-provider']['test']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['identity-provider']['test']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiIdentityProviderTestMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiIdentityProviderIdentityProviderIdQueryKey(
  args: InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>,
) {
  return ['api', '/api/identity-provider/:identityProviderId', args] as const
}

export function getApiIdentityProviderIdentityProviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIdentityProviderIdentityProviderIdQueryKey>
  >({
    queryKey: getApiIdentityProviderIdentityProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['identity-provider'][':identityProviderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiIdentityProviderIdentityProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIdentityProviderIdentityProviderIdQueryKey>
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
      ...getApiIdentityProviderIdentityProviderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiIdentityProviderIdentityProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIdentityProviderIdentityProviderIdQueryKey>
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
      ...getApiIdentityProviderIdentityProviderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiIdentityProviderIdentityProviderIdMutationKey() {
  return ['api', '/api/identity-provider/:identityProviderId', 'PUT'] as const
}

export function getPutApiIdentityProviderIdentityProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiIdentityProviderIdentityProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['identity-provider'][':identityProviderId']['$put']
      >,
    ) {
      return parseResponse(
        client.api['identity-provider'][':identityProviderId'].$put(args, options),
      )
    },
  })
}

export function usePutApiIdentityProviderIdentityProviderId<
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
                ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiIdentityProviderIdentityProviderIdMutationOptions<
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

export function getPostApiIdentityProviderIdentityProviderIdMutationKey() {
  return ['api', '/api/identity-provider/:identityProviderId', 'POST'] as const
}

export function getPostApiIdentityProviderIdentityProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIdentityProviderIdentityProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['identity-provider'][':identityProviderId']['$post']
      >,
    ) {
      return parseResponse(
        client.api['identity-provider'][':identityProviderId'].$post(args, options),
      )
    },
  })
}

export function usePostApiIdentityProviderIdentityProviderId<
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
                ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiIdentityProviderIdentityProviderIdMutationOptions<
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

export function getDeleteApiIdentityProviderIdentityProviderIdMutationKey() {
  return ['api', '/api/identity-provider/:identityProviderId', 'DELETE'] as const
}

export function getDeleteApiIdentityProviderIdentityProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiIdentityProviderIdentityProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['identity-provider'][':identityProviderId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api['identity-provider'][':identityProviderId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiIdentityProviderIdentityProviderId<
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
                  (typeof client.api)['identity-provider'][':identityProviderId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['identity-provider'][':identityProviderId']['$delete']
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
  const mutationDefaults = getDeleteApiIdentityProviderIdentityProviderIdMutationOptions<
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

export function getPatchApiIdentityProviderIdentityProviderIdMutationKey() {
  return ['api', '/api/identity-provider/:identityProviderId', 'PATCH'] as const
}

export function getPatchApiIdentityProviderIdentityProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiIdentityProviderIdentityProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['identity-provider'][':identityProviderId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api['identity-provider'][':identityProviderId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiIdentityProviderIdentityProviderId<
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
                  (typeof client.api)['identity-provider'][':identityProviderId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiIdentityProviderIdentityProviderIdMutationOptions<
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

export function getPostApiIdentityVerifyMutationKey() {
  return ['api', '/api/identity/verify', 'POST'] as const
}

export function getPostApiIdentityVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.identity.verify.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.identity.verify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIdentityVerifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.identity.verify.$post>) {
      return parseResponse(client.api.identity.verify.$post(args, options))
    },
  })
}

export function usePostApiIdentityVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.identity.verify.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.identity.verify.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiIdentityVerifyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiIdentityVerifyCompleteMutationKey() {
  return ['api', '/api/identity/verify/complete', 'POST'] as const
}

export function getPostApiIdentityVerifyCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.identity.verify.complete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.identity.verify.complete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIdentityVerifyCompleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.identity.verify.complete.$post>) {
      return parseResponse(client.api.identity.verify.complete.$post(args, options))
    },
  })
}

export function usePostApiIdentityVerifyComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.identity.verify.complete.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.identity.verify.complete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiIdentityVerifyCompleteMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiIdentityVerifySendMutationKey() {
  return ['api', '/api/identity/verify/send', 'POST'] as const
}

export function getPostApiIdentityVerifySendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.identity.verify.send.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.identity.verify.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIdentityVerifySendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.identity.verify.send.$post>) {
      return parseResponse(client.api.identity.verify.send.$post(args, options))
    },
  })
}

export function usePostApiIdentityVerifySend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.identity.verify.send.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.identity.verify.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiIdentityVerifySendMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiIdentityVerifyStartMutationKey() {
  return ['api', '/api/identity/verify/start', 'POST'] as const
}

export function getPostApiIdentityVerifyStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.identity.verify.start.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.identity.verify.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIdentityVerifyStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.identity.verify.start.$post>) {
      return parseResponse(client.api.identity.verify.start.$post(args, options))
    },
  })
}

export function usePostApiIdentityVerifyStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.identity.verify.start.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.identity.verify.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiIdentityVerifyStartMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiIntegrationQueryKey() {
  return ['api', '/api/integration'] as const
}

export function getApiIntegrationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.integration.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.integration.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiIntegrationQueryKey>
  >({
    queryKey: getApiIntegrationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.integration.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiIntegration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.integration.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.integration.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiIntegrationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiIntegrationQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiIntegration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.integration.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.integration.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiIntegrationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiIntegrationQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiIntegrationMutationKey() {
  return ['api', '/api/integration', 'PUT'] as const
}

export function getPutApiIntegrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.integration.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.integration.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiIntegrationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.integration.$put>) {
      return parseResponse(client.api.integration.$put(args, options))
    },
  })
}

export function usePutApiIntegration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.integration.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.api.integration.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiIntegrationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiIntegrationMutationKey() {
  return ['api', '/api/integration', 'PATCH'] as const
}

export function getPatchApiIntegrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.integration.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.api.integration.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiIntegrationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.integration.$patch>) {
      return parseResponse(client.api.integration.$patch(args, options))
    },
  })
}

export function usePatchApiIntegration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.integration.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.integration.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiIntegrationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiIpAclMutationKey() {
  return ['api', '/api/ip-acl', 'POST'] as const
}

export function getPostApiIpAclMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ip-acl']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.api)['ip-acl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIpAclMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['ip-acl']['$post']>) {
      return parseResponse(client.api['ip-acl'].$post(args, options))
    },
  })
}

export function usePostApiIpAcl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ip-acl']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['ip-acl']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiIpAclMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiIpAclSearchQueryKey(
  args: InferRequestType<(typeof client.api)['ip-acl']['search']['$get']>,
) {
  return ['api', '/api/ip-acl/search', args] as const
}

export function getApiIpAclSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ip-acl']['search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['ip-acl']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ip-acl']['search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIpAclSearchQueryKey>
  >({
    queryKey: getApiIpAclSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['ip-acl'].search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiIpAclSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ip-acl']['search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['ip-acl']['search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['ip-acl']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIpAclSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiIpAclSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiIpAclSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ip-acl']['search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['ip-acl']['search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['ip-acl']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIpAclSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiIpAclSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiIpAclSearchMutationKey() {
  return ['api', '/api/ip-acl/search', 'POST'] as const
}

export function getPostApiIpAclSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ip-acl']['search']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['ip-acl']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIpAclSearchMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['ip-acl']['search']['$post']>) {
      return parseResponse(client.api['ip-acl'].search.$post(args, options))
    },
  })
}

export function usePostApiIpAclSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['ip-acl']['search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['ip-acl']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiIpAclSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutApiIpAclAccessControlListIdMutationKey() {
  return ['api', '/api/ip-acl/:accessControlListId', 'PUT'] as const
}

export function getPutApiIpAclAccessControlListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['ip-acl'][':accessControlListId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiIpAclAccessControlListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$put']>,
    ) {
      return parseResponse(client.api['ip-acl'][':accessControlListId'].$put(args, options))
    },
  })
}

export function usePutApiIpAclAccessControlListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['ip-acl'][':accessControlListId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiIpAclAccessControlListIdMutationOptions<
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

export function getPostApiIpAclAccessControlListIdMutationKey() {
  return ['api', '/api/ip-acl/:accessControlListId', 'POST'] as const
}

export function getPostApiIpAclAccessControlListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['ip-acl'][':accessControlListId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIpAclAccessControlListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$post']>,
    ) {
      return parseResponse(client.api['ip-acl'][':accessControlListId'].$post(args, options))
    },
  })
}

export function usePostApiIpAclAccessControlListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['ip-acl'][':accessControlListId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiIpAclAccessControlListIdMutationOptions<
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

export function getPatchApiIpAclAccessControlListIdMutationKey() {
  return ['api', '/api/ip-acl/:accessControlListId', 'PATCH'] as const
}

export function getPatchApiIpAclAccessControlListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['ip-acl'][':accessControlListId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiIpAclAccessControlListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$patch']>,
    ) {
      return parseResponse(client.api['ip-acl'][':accessControlListId'].$patch(args, options))
    },
  })
}

export function usePatchApiIpAclAccessControlListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['ip-acl'][':accessControlListId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiIpAclAccessControlListIdMutationOptions<
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

export function getApiIpAclIpAccessControlListIdQueryKey(
  args: InferRequestType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>,
) {
  return ['api', '/api/ip-acl/:ipAccessControlListId', args] as const
}

export function getApiIpAclIpAccessControlListIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIpAclIpAccessControlListIdQueryKey>
  >({
    queryKey: getApiIpAclIpAccessControlListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['ip-acl'][':ipAccessControlListId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiIpAclIpAccessControlListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIpAclIpAccessControlListIdQueryKey>
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
      ...getApiIpAclIpAccessControlListIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiIpAclIpAccessControlListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIpAclIpAccessControlListIdQueryKey>
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
      ...getApiIpAclIpAccessControlListIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiIpAclIpAccessControlListIdMutationKey() {
  return ['api', '/api/ip-acl/:ipAccessControlListId', 'DELETE'] as const
}

export function getDeleteApiIpAclIpAccessControlListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiIpAclIpAccessControlListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$delete']>,
    ) {
      return parseResponse(client.api['ip-acl'][':ipAccessControlListId'].$delete(args, options))
    },
  })
}

export function useDeleteApiIpAclIpAccessControlListId<
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
                ReturnType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiIpAclIpAccessControlListIdMutationOptions<
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

export function getApiJwtIssueQueryKey(args: InferRequestType<typeof client.api.jwt.issue.$get>) {
  return ['api', '/api/jwt/issue', args] as const
}

export function getApiJwtIssueQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.issue.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.jwt.issue.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.issue.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiJwtIssueQueryKey>
  >({
    queryKey: getApiJwtIssueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jwt.issue.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiJwtIssue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.issue.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.jwt.issue.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.issue.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiJwtIssueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiJwtIssueQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiJwtIssue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.issue.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.jwt.issue.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.issue.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiJwtIssueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiJwtIssueQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiJwtPublicKeyQueryKey(
  args: InferRequestType<(typeof client.api.jwt)['public-key']['$get']>,
) {
  return ['api', '/api/jwt/public-key', args] as const
}

export function getApiJwtPublicKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jwt)['public-key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jwt)['public-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.jwt)['public-key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJwtPublicKeyQueryKey>
  >({
    queryKey: getApiJwtPublicKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jwt['public-key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiJwtPublicKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jwt)['public-key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jwt)['public-key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.jwt)['public-key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJwtPublicKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiJwtPublicKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiJwtPublicKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jwt)['public-key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jwt)['public-key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.jwt)['public-key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJwtPublicKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiJwtPublicKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiJwtReconcileMutationKey() {
  return ['api', '/api/jwt/reconcile', 'POST'] as const
}

export function getPostApiJwtReconcileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.reconcile.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.jwt.reconcile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiJwtReconcileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.jwt.reconcile.$post>) {
      return parseResponse(client.api.jwt.reconcile.$post(args, options))
    },
  })
}

export function usePostApiJwtReconcile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.reconcile.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.jwt.reconcile.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiJwtReconcileMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiJwtRefreshQueryKey(
  args: InferRequestType<typeof client.api.jwt.refresh.$get>,
) {
  return ['api', '/api/jwt/refresh', args] as const
}

export function getApiJwtRefreshQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.refresh.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.jwt.refresh.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.refresh.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiJwtRefreshQueryKey>
  >({
    queryKey: getApiJwtRefreshQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jwt.refresh.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiJwtRefresh<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.refresh.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.jwt.refresh.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.refresh.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiJwtRefreshQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiJwtRefreshQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiJwtRefresh<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.refresh.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.jwt.refresh.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.refresh.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiJwtRefreshQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiJwtRefreshQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiJwtRefreshMutationKey() {
  return ['api', '/api/jwt/refresh', 'POST'] as const
}

export function getPostApiJwtRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.refresh.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.jwt.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiJwtRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.jwt.refresh.$post>) {
      return parseResponse(client.api.jwt.refresh.$post(args, options))
    },
  })
}

export function usePostApiJwtRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.refresh.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.jwt.refresh.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiJwtRefreshMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiJwtRefreshMutationKey() {
  return ['api', '/api/jwt/refresh', 'DELETE'] as const
}

export function getDeleteApiJwtRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.refresh.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.jwt.refresh.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiJwtRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.jwt.refresh.$delete>) {
      return parseResponse(client.api.jwt.refresh.$delete(args, options))
    },
  })
}

export function useDeleteApiJwtRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.refresh.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.jwt.refresh.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiJwtRefreshMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiJwtRefreshTokenIdQueryKey(
  args: InferRequestType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>,
) {
  return ['api', '/api/jwt/refresh/:tokenId', args] as const
}

export function getApiJwtRefreshTokenIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJwtRefreshTokenIdQueryKey>
  >({
    queryKey: getApiJwtRefreshTokenIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jwt.refresh[':tokenId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiJwtRefreshTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJwtRefreshTokenIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiJwtRefreshTokenIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiJwtRefreshTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJwtRefreshTokenIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiJwtRefreshTokenIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiJwtRefreshTokenIdMutationKey() {
  return ['api', '/api/jwt/refresh/:tokenId', 'DELETE'] as const
}

export function getDeleteApiJwtRefreshTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jwt.refresh)[':tokenId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jwt.refresh)[':tokenId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiJwtRefreshTokenIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.jwt.refresh)[':tokenId']['$delete']>,
    ) {
      return parseResponse(client.api.jwt.refresh[':tokenId'].$delete(args, options))
    },
  })
}

export function useDeleteApiJwtRefreshTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jwt.refresh)[':tokenId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.jwt.refresh)[':tokenId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiJwtRefreshTokenIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiJwtValidateQueryKey() {
  return ['api', '/api/jwt/validate'] as const
}

export function getApiJwtValidateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.validate.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.validate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiJwtValidateQueryKey>
  >({
    queryKey: getApiJwtValidateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jwt.validate.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiJwtValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.validate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiJwtValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiJwtValidateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiJwtValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.validate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiJwtValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiJwtValidateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiJwtVendMutationKey() {
  return ['api', '/api/jwt/vend', 'POST'] as const
}

export function getPostApiJwtVendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.vend.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.jwt.vend.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiJwtVendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.jwt.vend.$post>) {
      return parseResponse(client.api.jwt.vend.$post(args, options))
    },
  })
}

export function usePostApiJwtVend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.vend.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.jwt.vend.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiJwtVendMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiKeyQueryKey() {
  return ['api', '/api/key'] as const
}

export function getApiKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiKeyQueryKey>
  >({
    queryKey: getApiKeyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.key.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiKeyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiKeyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiKeyGenerateMutationKey() {
  return ['api', '/api/key/generate', 'POST'] as const
}

export function getPostApiKeyGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.generate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.key.generate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeyGenerateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.key.generate.$post>) {
      return parseResponse(client.api.key.generate.$post(args, options))
    },
  })
}

export function usePostApiKeyGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.key.generate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.key.generate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiKeyGenerateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiKeyGenerateKeyIdMutationKey() {
  return ['api', '/api/key/generate/:keyId', 'POST'] as const
}

export function getPostApiKeyGenerateKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.key.generate)[':keyId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.key.generate)[':keyId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeyGenerateKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.key.generate)[':keyId']['$post']>) {
      return parseResponse(client.api.key.generate[':keyId'].$post(args, options))
    },
  })
}

export function usePostApiKeyGenerateKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.key.generate)[':keyId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.key.generate)[':keyId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiKeyGenerateKeyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiKeyImportMutationKey() {
  return ['api', '/api/key/import', 'POST'] as const
}

export function getPostApiKeyImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.key.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeyImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.key.import.$post>) {
      return parseResponse(client.api.key.import.$post(args, options))
    },
  })
}

export function usePostApiKeyImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.import.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.key.import.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiKeyImportMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiKeyImportKeyIdMutationKey() {
  return ['api', '/api/key/import/:keyId', 'POST'] as const
}

export function getPostApiKeyImportKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.key.import)[':keyId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.key.import)[':keyId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeyImportKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.key.import)[':keyId']['$post']>) {
      return parseResponse(client.api.key.import[':keyId'].$post(args, options))
    },
  })
}

export function usePostApiKeyImportKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.key.import)[':keyId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.key.import)[':keyId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiKeyImportKeyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiKeySearchQueryKey(args: InferRequestType<typeof client.api.key.search.$get>) {
  return ['api', '/api/key/search', args] as const
}

export function getApiKeySearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.key.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeySearchQueryKey>
  >({
    queryKey: getApiKeySearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.key.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiKeySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.key.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiKeySearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiKeySearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiKeySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.key.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiKeySearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiKeySearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiKeySearchMutationKey() {
  return ['api', '/api/key/search', 'POST'] as const
}

export function getPostApiKeySearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.key.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeySearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.key.search.$post>) {
      return parseResponse(client.api.key.search.$post(args, options))
    },
  })
}

export function usePostApiKeySearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.key.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiKeySearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiKeyKeyIdQueryKey(
  args: InferRequestType<(typeof client.api.key)[':keyId']['$get']>,
) {
  return ['api', '/api/key/:keyId', args] as const
}

export function getApiKeyKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.key)[':keyId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.key)[':keyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.key)[':keyId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeyKeyIdQueryKey>
  >({
    queryKey: getApiKeyKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.key[':keyId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiKeyKeyId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.key)[':keyId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.key)[':keyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.key)[':keyId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiKeyKeyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiKeyKeyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiKeyKeyId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.key)[':keyId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.key)[':keyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.key)[':keyId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiKeyKeyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiKeyKeyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiKeyKeyIdMutationKey() {
  return ['api', '/api/key/:keyId', 'PUT'] as const
}

export function getPutApiKeyKeyIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.key)[':keyId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.key)[':keyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiKeyKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.key)[':keyId']['$put']>) {
      return parseResponse(client.api.key[':keyId'].$put(args, options))
    },
  })
}

export function usePutApiKeyKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.key)[':keyId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.key)[':keyId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiKeyKeyIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiKeyKeyIdMutationKey() {
  return ['api', '/api/key/:keyId', 'DELETE'] as const
}

export function getDeleteApiKeyKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.key)[':keyId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.key)[':keyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiKeyKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.key)[':keyId']['$delete']>) {
      return parseResponse(client.api.key[':keyId'].$delete(args, options))
    },
  })
}

export function useDeleteApiKeyKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.key)[':keyId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.key)[':keyId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiKeyKeyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiLambdaQueryKey(args: InferRequestType<typeof client.api.lambda.$get>) {
  return ['api', '/api/lambda', args] as const
}

export function getApiLambdaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.lambda.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiLambdaQueryKey>
  >({
    queryKey: getApiLambdaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lambda.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiLambda<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.lambda.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiLambdaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiLambdaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiLambda<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.lambda.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiLambdaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiLambdaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiLambdaMutationKey() {
  return ['api', '/api/lambda', 'POST'] as const
}

export function getPostApiLambdaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.lambda.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLambdaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.lambda.$post>) {
      return parseResponse(client.api.lambda.$post(args, options))
    },
  })
}

export function usePostApiLambda<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.lambda.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiLambdaMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiLambdaSearchMutationKey() {
  return ['api', '/api/lambda/search', 'POST'] as const
}

export function getPostApiLambdaSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.lambda.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLambdaSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.lambda.search.$post>) {
      return parseResponse(client.api.lambda.search.$post(args, options))
    },
  })
}

export function usePostApiLambdaSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.lambda.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiLambdaSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiLambdaLambdaIdQueryKey(
  args: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$get']>,
) {
  return ['api', '/api/lambda/:lambdaId', args] as const
}

export function getApiLambdaLambdaIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLambdaLambdaIdQueryKey>
  >({
    queryKey: getApiLambdaLambdaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lambda[':lambdaId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiLambdaLambdaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLambdaLambdaIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiLambdaLambdaIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiLambdaLambdaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLambdaLambdaIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiLambdaLambdaIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiLambdaLambdaIdMutationKey() {
  return ['api', '/api/lambda/:lambdaId', 'PUT'] as const
}

export function getPutApiLambdaLambdaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.lambda)[':lambdaId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiLambdaLambdaIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$put']>) {
      return parseResponse(client.api.lambda[':lambdaId'].$put(args, options))
    },
  })
}

export function usePutApiLambdaLambdaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.lambda)[':lambdaId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiLambdaLambdaIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiLambdaLambdaIdMutationKey() {
  return ['api', '/api/lambda/:lambdaId', 'POST'] as const
}

export function getPostApiLambdaLambdaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.lambda)[':lambdaId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLambdaLambdaIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$post']>) {
      return parseResponse(client.api.lambda[':lambdaId'].$post(args, options))
    },
  })
}

export function usePostApiLambdaLambdaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.lambda)[':lambdaId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiLambdaLambdaIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiLambdaLambdaIdMutationKey() {
  return ['api', '/api/lambda/:lambdaId', 'DELETE'] as const
}

export function getDeleteApiLambdaLambdaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.lambda)[':lambdaId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLambdaLambdaIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$delete']>) {
      return parseResponse(client.api.lambda[':lambdaId'].$delete(args, options))
    },
  })
}

export function useDeleteApiLambdaLambdaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.lambda)[':lambdaId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiLambdaLambdaIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiLambdaLambdaIdMutationKey() {
  return ['api', '/api/lambda/:lambdaId', 'PATCH'] as const
}

export function getPatchApiLambdaLambdaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.lambda)[':lambdaId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLambdaLambdaIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$patch']>) {
      return parseResponse(client.api.lambda[':lambdaId'].$patch(args, options))
    },
  })
}

export function usePatchApiLambdaLambdaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.lambda)[':lambdaId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiLambdaLambdaIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutApiLoginMutationKey() {
  return ['api', '/api/login', 'PUT'] as const
}

export function getPutApiLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.login.$put>>>>>,
    TError,
    InferRequestType<typeof client.api.login.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.login.$put>) {
      return parseResponse(client.api.login.$put(args, options))
    },
  })
}

export function usePutApiLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.login.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.api.login.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiLoginMutationKey() {
  return ['api', '/api/login', 'POST'] as const
}

export function getPostApiLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.login.$post>) {
      return parseResponse(client.api.login.$post(args, options))
    },
  })
}

export function usePostApiLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.login.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutApiLoginUserIdApplicationIdMutationKey() {
  return ['api', '/api/login/:userId/:applicationId', 'PUT'] as const
}

export function getPutApiLoginUserIdApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.login)[':userId'][':applicationId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.login)[':userId'][':applicationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiLoginUserIdApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.login)[':userId'][':applicationId']['$put']>,
    ) {
      return parseResponse(client.api.login[':userId'][':applicationId'].$put(args, options))
    },
  })
}

export function usePutApiLoginUserIdApplicationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.login)[':userId'][':applicationId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.login)[':userId'][':applicationId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiLoginUserIdApplicationIdMutationOptions<
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

export function getPostApiLogoutMutationKey() {
  return ['api', '/api/logout', 'POST'] as const
}

export function getPostApiLogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.logout.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLogoutMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.logout.$post>) {
      return parseResponse(client.api.logout.$post(args, options))
    },
  })
}

export function usePostApiLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.logout.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiMessageTemplateQueryKey() {
  return ['api', '/api/message/template'] as const
}

export function getApiMessageTemplateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.message.template.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.message.template.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiMessageTemplateQueryKey>
  >({
    queryKey: getApiMessageTemplateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.message.template.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMessageTemplate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.message.template.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.message.template.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMessageTemplateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMessageTemplateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMessageTemplate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.message.template.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.message.template.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMessageTemplateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMessageTemplateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiMessageTemplateMutationKey() {
  return ['api', '/api/message/template', 'POST'] as const
}

export function getPostApiMessageTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.message.template.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.message.template.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMessageTemplateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.message.template.$post>) {
      return parseResponse(client.api.message.template.$post(args, options))
    },
  })
}

export function usePostApiMessageTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.message.template.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.message.template.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiMessageTemplateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiMessageTemplatePreviewMutationKey() {
  return ['api', '/api/message/template/preview', 'POST'] as const
}

export function getPostApiMessageTemplatePreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.message.template.preview.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.message.template.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMessageTemplatePreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.message.template.preview.$post>) {
      return parseResponse(client.api.message.template.preview.$post(args, options))
    },
  })
}

export function usePostApiMessageTemplatePreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.message.template.preview.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.message.template.preview.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiMessageTemplatePreviewMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiMessageTemplateMessageTemplateIdQueryKey(
  args: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$get']>,
) {
  return ['api', '/api/message/template/:messageTemplateId', args] as const
}

export function getApiMessageTemplateMessageTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMessageTemplateMessageTemplateIdQueryKey>
  >({
    queryKey: getApiMessageTemplateMessageTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.message.template[':messageTemplateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMessageTemplateMessageTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMessageTemplateMessageTemplateIdQueryKey>
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
      ...getApiMessageTemplateMessageTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiMessageTemplateMessageTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMessageTemplateMessageTemplateIdQueryKey>
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
      ...getApiMessageTemplateMessageTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiMessageTemplateMessageTemplateIdMutationKey() {
  return ['api', '/api/message/template/:messageTemplateId', 'PUT'] as const
}

export function getPutApiMessageTemplateMessageTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiMessageTemplateMessageTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$put']>,
    ) {
      return parseResponse(client.api.message.template[':messageTemplateId'].$put(args, options))
    },
  })
}

export function usePutApiMessageTemplateMessageTemplateId<
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
                ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiMessageTemplateMessageTemplateIdMutationOptions<
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

export function getPostApiMessageTemplateMessageTemplateIdMutationKey() {
  return ['api', '/api/message/template/:messageTemplateId', 'POST'] as const
}

export function getPostApiMessageTemplateMessageTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMessageTemplateMessageTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$post']>,
    ) {
      return parseResponse(client.api.message.template[':messageTemplateId'].$post(args, options))
    },
  })
}

export function usePostApiMessageTemplateMessageTemplateId<
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
                ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiMessageTemplateMessageTemplateIdMutationOptions<
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

export function getDeleteApiMessageTemplateMessageTemplateIdMutationKey() {
  return ['api', '/api/message/template/:messageTemplateId', 'DELETE'] as const
}

export function getDeleteApiMessageTemplateMessageTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiMessageTemplateMessageTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$delete']>,
    ) {
      return parseResponse(client.api.message.template[':messageTemplateId'].$delete(args, options))
    },
  })
}

export function useDeleteApiMessageTemplateMessageTemplateId<
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
                ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiMessageTemplateMessageTemplateIdMutationOptions<
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

export function getPatchApiMessageTemplateMessageTemplateIdMutationKey() {
  return ['api', '/api/message/template/:messageTemplateId', 'PATCH'] as const
}

export function getPatchApiMessageTemplateMessageTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiMessageTemplateMessageTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$patch']>,
    ) {
      return parseResponse(client.api.message.template[':messageTemplateId'].$patch(args, options))
    },
  })
}

export function usePatchApiMessageTemplateMessageTemplateId<
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
                ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiMessageTemplateMessageTemplateIdMutationOptions<
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

export function getApiMessengerQueryKey() {
  return ['api', '/api/messenger'] as const
}

export function getApiMessengerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messenger.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messenger.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiMessengerQueryKey>
  >({
    queryKey: getApiMessengerQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.messenger.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiMessenger<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messenger.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messenger.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiMessengerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMessengerQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMessenger<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messenger.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messenger.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiMessengerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMessengerQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiMessengerMutationKey() {
  return ['api', '/api/messenger', 'POST'] as const
}

export function getPostApiMessengerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messenger.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.messenger.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMessengerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.messenger.$post>) {
      return parseResponse(client.api.messenger.$post(args, options))
    },
  })
}

export function usePostApiMessenger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messenger.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.messenger.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiMessengerMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiMessengerMessengerIdQueryKey(
  args: InferRequestType<(typeof client.api.messenger)[':messengerId']['$get']>,
) {
  return ['api', '/api/messenger/:messengerId', args] as const
}

export function getApiMessengerMessengerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.messenger)[':messengerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMessengerMessengerIdQueryKey>
  >({
    queryKey: getApiMessengerMessengerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.messenger[':messengerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMessengerMessengerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.messenger)[':messengerId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMessengerMessengerIdQueryKey>
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
      ...getApiMessengerMessengerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiMessengerMessengerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.messenger)[':messengerId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMessengerMessengerIdQueryKey>
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
      ...getApiMessengerMessengerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiMessengerMessengerIdMutationKey() {
  return ['api', '/api/messenger/:messengerId', 'PUT'] as const
}

export function getPutApiMessengerMessengerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.messenger)[':messengerId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiMessengerMessengerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.messenger)[':messengerId']['$put']>,
    ) {
      return parseResponse(client.api.messenger[':messengerId'].$put(args, options))
    },
  })
}

export function usePutApiMessengerMessengerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.messenger)[':messengerId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiMessengerMessengerIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiMessengerMessengerIdMutationKey() {
  return ['api', '/api/messenger/:messengerId', 'POST'] as const
}

export function getPostApiMessengerMessengerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.messenger)[':messengerId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMessengerMessengerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.messenger)[':messengerId']['$post']>,
    ) {
      return parseResponse(client.api.messenger[':messengerId'].$post(args, options))
    },
  })
}

export function usePostApiMessengerMessengerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.messenger)[':messengerId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiMessengerMessengerIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiMessengerMessengerIdMutationKey() {
  return ['api', '/api/messenger/:messengerId', 'DELETE'] as const
}

export function getDeleteApiMessengerMessengerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.messenger)[':messengerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiMessengerMessengerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.messenger)[':messengerId']['$delete']>,
    ) {
      return parseResponse(client.api.messenger[':messengerId'].$delete(args, options))
    },
  })
}

export function useDeleteApiMessengerMessengerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.messenger)[':messengerId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiMessengerMessengerIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiMessengerMessengerIdMutationKey() {
  return ['api', '/api/messenger/:messengerId', 'PATCH'] as const
}

export function getPatchApiMessengerMessengerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.messenger)[':messengerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiMessengerMessengerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.messenger)[':messengerId']['$patch']>,
    ) {
      return parseResponse(client.api.messenger[':messengerId'].$patch(args, options))
    },
  })
}

export function usePatchApiMessengerMessengerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.messenger)[':messengerId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiMessengerMessengerIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiPasswordlessLoginMutationKey() {
  return ['api', '/api/passwordless/login', 'POST'] as const
}

export function getPostApiPasswordlessLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.passwordless.login.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.passwordless.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPasswordlessLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.passwordless.login.$post>) {
      return parseResponse(client.api.passwordless.login.$post(args, options))
    },
  })
}

export function usePostApiPasswordlessLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.passwordless.login.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.passwordless.login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPasswordlessLoginMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiPasswordlessSendMutationKey() {
  return ['api', '/api/passwordless/send', 'POST'] as const
}

export function getPostApiPasswordlessSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.passwordless.send.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.passwordless.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPasswordlessSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.passwordless.send.$post>) {
      return parseResponse(client.api.passwordless.send.$post(args, options))
    },
  })
}

export function usePostApiPasswordlessSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.passwordless.send.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.passwordless.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPasswordlessSendMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiPasswordlessStartMutationKey() {
  return ['api', '/api/passwordless/start', 'POST'] as const
}

export function getPostApiPasswordlessStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.passwordless.start.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.passwordless.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPasswordlessStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.passwordless.start.$post>) {
      return parseResponse(client.api.passwordless.start.$post(args, options))
    },
  })
}

export function usePostApiPasswordlessStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.passwordless.start.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.passwordless.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPasswordlessStartMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiReactorQueryKey() {
  return ['api', '/api/reactor'] as const
}

export function getApiReactorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiReactorQueryKey>
  >({
    queryKey: getApiReactorQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.reactor.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiReactor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiReactorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiReactorQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiReactor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiReactorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiReactorQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiReactorMutationKey() {
  return ['api', '/api/reactor', 'PUT'] as const
}

export function getPutApiReactorMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$put>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutApiReactorMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.reactor.$put(undefined, options))
    },
  })
}

export function usePutApiReactor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$put>>>>
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
  const mutationDefaults = getPutApiReactorMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiReactorMutationKey() {
  return ['api', '/api/reactor', 'POST'] as const
}

export function getPostApiReactorMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.reactor.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiReactorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.reactor.$post>) {
      return parseResponse(client.api.reactor.$post(args, options))
    },
  })
}

export function usePostApiReactor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.reactor.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiReactorMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiReactorMutationKey() {
  return ['api', '/api/reactor', 'DELETE'] as const
}

export function getDeleteApiReactorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiReactorMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.reactor.$delete(undefined, options))
    },
  })
}

export function useDeleteApiReactor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$delete>>>>
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
  const mutationDefaults = getDeleteApiReactorMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiReactorMetricsQueryKey() {
  return ['api', '/api/reactor/metrics'] as const
}

export function getApiReactorMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiReactorMetricsQueryKey>
  >({
    queryKey: getApiReactorMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.reactor.metrics.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiReactorMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.metrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReactorMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiReactorMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiReactorMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.metrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReactorMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiReactorMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiReportDailyActiveUserQueryKey(
  args: InferRequestType<(typeof client.api.report)['daily-active-user']['$get']>,
) {
  return ['api', '/api/report/daily-active-user', args] as const
}

export function getApiReportDailyActiveUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.report)['daily-active-user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.report)['daily-active-user']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.report)['daily-active-user']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReportDailyActiveUserQueryKey>
  >({
    queryKey: getApiReportDailyActiveUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.report['daily-active-user'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiReportDailyActiveUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.report)['daily-active-user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.report)['daily-active-user']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.report)['daily-active-user']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReportDailyActiveUserQueryKey>
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
      ...getApiReportDailyActiveUserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiReportDailyActiveUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.report)['daily-active-user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.report)['daily-active-user']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.report)['daily-active-user']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReportDailyActiveUserQueryKey>
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
      ...getApiReportDailyActiveUserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiReportLoginQueryKey(
  args: InferRequestType<typeof client.api.report.login.$get>,
) {
  return ['api', '/api/report/login', args] as const
}

export function getApiReportLoginQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.login.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.report.login.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.login.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiReportLoginQueryKey>
  >({
    queryKey: getApiReportLoginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.report.login.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiReportLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.login.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.report.login.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.login.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiReportLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiReportLoginQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiReportLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.login.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.report.login.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.login.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiReportLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiReportLoginQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiReportMonthlyActiveUserQueryKey(
  args: InferRequestType<(typeof client.api.report)['monthly-active-user']['$get']>,
) {
  return ['api', '/api/report/monthly-active-user', args] as const
}

export function getApiReportMonthlyActiveUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.report)['monthly-active-user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.report)['monthly-active-user']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.report)['monthly-active-user']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReportMonthlyActiveUserQueryKey>
  >({
    queryKey: getApiReportMonthlyActiveUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.report['monthly-active-user'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiReportMonthlyActiveUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.report)['monthly-active-user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.report)['monthly-active-user']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.report)['monthly-active-user']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReportMonthlyActiveUserQueryKey>
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
      ...getApiReportMonthlyActiveUserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiReportMonthlyActiveUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.report)['monthly-active-user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.report)['monthly-active-user']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.report)['monthly-active-user']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReportMonthlyActiveUserQueryKey>
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
      ...getApiReportMonthlyActiveUserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiReportRegistrationQueryKey(
  args: InferRequestType<typeof client.api.report.registration.$get>,
) {
  return ['api', '/api/report/registration', args] as const
}

export function getApiReportRegistrationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.report.registration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.report.registration.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.report.registration.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReportRegistrationQueryKey>
  >({
    queryKey: getApiReportRegistrationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.report.registration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiReportRegistration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.report.registration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.report.registration.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.report.registration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReportRegistrationQueryKey>
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
      ...getApiReportRegistrationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiReportRegistration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.report.registration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.report.registration.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.report.registration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReportRegistrationQueryKey>
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
      ...getApiReportRegistrationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiReportTotalsQueryKey(
  args: InferRequestType<typeof client.api.report.totals.$get>,
) {
  return ['api', '/api/report/totals', args] as const
}

export function getApiReportTotalsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.totals.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.report.totals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.totals.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiReportTotalsQueryKey>
  >({
    queryKey: getApiReportTotalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.report.totals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiReportTotals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.totals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.report.totals.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.report.totals.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReportTotalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiReportTotalsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiReportTotals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.totals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.report.totals.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.report.totals.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReportTotalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiReportTotalsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiStatusQueryKey() {
  return ['api', '/api/status'] as const
}

export function getApiStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiStatusQueryKey>
  >({
    queryKey: getApiStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSystemConfigurationQueryKey() {
  return ['api', '/api/system-configuration'] as const
}

export function getApiSystemConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['system-configuration']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['system-configuration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemConfigurationQueryKey>
  >({
    queryKey: getApiSystemConfigurationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api['system-configuration'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSystemConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['system-configuration']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api)['system-configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSystemConfigurationQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSystemConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['system-configuration']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api)['system-configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSystemConfigurationQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiSystemConfigurationMutationKey() {
  return ['api', '/api/system-configuration', 'PUT'] as const
}

export function getPutApiSystemConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['system-configuration']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['system-configuration']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiSystemConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['system-configuration']['$put']>) {
      return parseResponse(client.api['system-configuration'].$put(args, options))
    },
  })
}

export function usePutApiSystemConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['system-configuration']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['system-configuration']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiSystemConfigurationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiSystemConfigurationMutationKey() {
  return ['api', '/api/system-configuration', 'PATCH'] as const
}

export function getPatchApiSystemConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['system-configuration']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['system-configuration']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiSystemConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['system-configuration']['$patch']>,
    ) {
      return parseResponse(client.api['system-configuration'].$patch(args, options))
    },
  })
}

export function usePatchApiSystemConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['system-configuration']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['system-configuration']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiSystemConfigurationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiSystemAuditLogMutationKey() {
  return ['api', '/api/system/audit-log', 'POST'] as const
}

export function getPostApiSystemAuditLogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.system)['audit-log']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.system)['audit-log']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSystemAuditLogMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.system)['audit-log']['$post']>) {
      return parseResponse(client.api.system['audit-log'].$post(args, options))
    },
  })
}

export function usePostApiSystemAuditLog<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.system)['audit-log']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.system)['audit-log']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSystemAuditLogMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiSystemAuditLogSearchMutationKey() {
  return ['api', '/api/system/audit-log/search', 'POST'] as const
}

export function getPostApiSystemAuditLogSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.system)['audit-log']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.system)['audit-log']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSystemAuditLogSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.system)['audit-log']['search']['$post']>,
    ) {
      return parseResponse(client.api.system['audit-log'].search.$post(args, options))
    },
  })
}

export function usePostApiSystemAuditLogSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.system)['audit-log']['search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.system)['audit-log']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSystemAuditLogSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiSystemAuditLogAuditLogIdQueryKey(
  args: InferRequestType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>,
) {
  return ['api', '/api/system/audit-log/:auditLogId', args] as const
}

export function getApiSystemAuditLogAuditLogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemAuditLogAuditLogIdQueryKey>
  >({
    queryKey: getApiSystemAuditLogAuditLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.system['audit-log'][':auditLogId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSystemAuditLogAuditLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemAuditLogAuditLogIdQueryKey>
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
      ...getApiSystemAuditLogAuditLogIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSystemAuditLogAuditLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemAuditLogAuditLogIdQueryKey>
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
      ...getApiSystemAuditLogAuditLogIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiSystemEventLogSearchMutationKey() {
  return ['api', '/api/system/event-log/search', 'POST'] as const
}

export function getPostApiSystemEventLogSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.system)['event-log']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.system)['event-log']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSystemEventLogSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.system)['event-log']['search']['$post']>,
    ) {
      return parseResponse(client.api.system['event-log'].search.$post(args, options))
    },
  })
}

export function usePostApiSystemEventLogSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.system)['event-log']['search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.system)['event-log']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSystemEventLogSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiSystemEventLogEventLogIdQueryKey(
  args: InferRequestType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>,
) {
  return ['api', '/api/system/event-log/:eventLogId', args] as const
}

export function getApiSystemEventLogEventLogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemEventLogEventLogIdQueryKey>
  >({
    queryKey: getApiSystemEventLogEventLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.system['event-log'][':eventLogId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSystemEventLogEventLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemEventLogEventLogIdQueryKey>
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
      ...getApiSystemEventLogEventLogIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSystemEventLogEventLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemEventLogEventLogIdQueryKey>
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
      ...getApiSystemEventLogEventLogIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiSystemLoginRecordSearchMutationKey() {
  return ['api', '/api/system/login-record/search', 'POST'] as const
}

export function getPostApiSystemLoginRecordSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.system)['login-record']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.system)['login-record']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSystemLoginRecordSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.system)['login-record']['search']['$post']>,
    ) {
      return parseResponse(client.api.system['login-record'].search.$post(args, options))
    },
  })
}

export function usePostApiSystemLoginRecordSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.system)['login-record']['search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.system)['login-record']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSystemLoginRecordSearchMutationOptions<
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

export function getApiSystemReindexQueryKey() {
  return ['api', '/api/system/reindex'] as const
}

export function getApiSystemReindexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.reindex.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.reindex.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemReindexQueryKey>
  >({
    queryKey: getApiSystemReindexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.system.reindex.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSystemReindex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.reindex.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.system.reindex.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemReindexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSystemReindexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSystemReindex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.reindex.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.system.reindex.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemReindexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSystemReindexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiSystemReindexMutationKey() {
  return ['api', '/api/system/reindex', 'POST'] as const
}

export function getPostApiSystemReindexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.reindex.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.system.reindex.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSystemReindexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.system.reindex.$post>) {
      return parseResponse(client.api.system.reindex.$post(args, options))
    },
  })
}

export function usePostApiSystemReindex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.system.reindex.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.system.reindex.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSystemReindexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiSystemVersionQueryKey() {
  return ['api', '/api/system/version'] as const
}

export function getApiSystemVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemVersionQueryKey>
  >({
    queryKey: getApiSystemVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.system.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSystemVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSystemVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSystemVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSystemVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSystemWebhookAttemptLogWebhookAttemptLogIdQueryKey(
  args: InferRequestType<
    (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
  >,
) {
  return ['api', '/api/system/webhook-attempt-log/:webhookAttemptLogId', args] as const
}

export function getApiSystemWebhookAttemptLogWebhookAttemptLogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemWebhookAttemptLogWebhookAttemptLogIdQueryKey>
  >({
    queryKey: getApiSystemWebhookAttemptLogWebhookAttemptLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.system['webhook-attempt-log'][':webhookAttemptLogId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSystemWebhookAttemptLogWebhookAttemptLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemWebhookAttemptLogWebhookAttemptLogIdQueryKey>
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
      ...getApiSystemWebhookAttemptLogWebhookAttemptLogIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSystemWebhookAttemptLogWebhookAttemptLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemWebhookAttemptLogWebhookAttemptLogIdQueryKey>
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
      ...getApiSystemWebhookAttemptLogWebhookAttemptLogIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiSystemWebhookEventLogSearchMutationKey() {
  return ['api', '/api/system/webhook-event-log/search', 'POST'] as const
}

export function getPostApiSystemWebhookEventLogSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.system)['webhook-event-log']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.system)['webhook-event-log']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSystemWebhookEventLogSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.system)['webhook-event-log']['search']['$post']>,
    ) {
      return parseResponse(client.api.system['webhook-event-log'].search.$post(args, options))
    },
  })
}

export function usePostApiSystemWebhookEventLogSearch<
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
                ReturnType<(typeof client.api.system)['webhook-event-log']['search']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.system)['webhook-event-log']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSystemWebhookEventLogSearchMutationOptions<
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

export function getApiSystemWebhookEventLogWebhookEventLogIdQueryKey(
  args: InferRequestType<
    (typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']
  >,
) {
  return ['api', '/api/system/webhook-event-log/:webhookEventLogId', args] as const
}

export function getApiSystemWebhookEventLogWebhookEventLogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemWebhookEventLogWebhookEventLogIdQueryKey>
  >({
    queryKey: getApiSystemWebhookEventLogWebhookEventLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.system['webhook-event-log'][':webhookEventLogId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSystemWebhookEventLogWebhookEventLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemWebhookEventLogWebhookEventLogIdQueryKey>
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
      ...getApiSystemWebhookEventLogWebhookEventLogIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSystemWebhookEventLogWebhookEventLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemWebhookEventLogWebhookEventLogIdQueryKey>
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
      ...getApiSystemWebhookEventLogWebhookEventLogIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiTenantQueryKey(args: InferRequestType<typeof client.api.tenant.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/tenant', keyArgs] as const
}

export function getApiTenantQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tenant.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.tenant.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tenant.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTenantQueryKey>
  >({
    queryKey: getApiTenantQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tenant.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTenant<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tenant.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tenant.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tenant.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTenantQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTenantQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTenant<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tenant.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tenant.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tenant.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTenantQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTenantQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiTenantMutationKey() {
  return ['api', '/api/tenant', 'POST'] as const
}

export function getPostApiTenantMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tenant.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.tenant.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTenantMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.tenant.$post>) {
      return parseResponse(client.api.tenant.$post(args, options))
    },
  })
}

export function usePostApiTenant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tenant.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.tenant.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTenantMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTenantManagerQueryKey() {
  return ['api', '/api/tenant-manager'] as const
}

export function getApiTenantManagerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['tenant-manager']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['tenant-manager']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTenantManagerQueryKey>
  >({
    queryKey: getApiTenantManagerQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api['tenant-manager'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiTenantManager<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['tenant-manager']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['tenant-manager']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTenantManagerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTenantManagerQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTenantManager<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['tenant-manager']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['tenant-manager']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTenantManagerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTenantManagerQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiTenantManagerMutationKey() {
  return ['api', '/api/tenant-manager', 'PUT'] as const
}

export function getPutApiTenantManagerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['tenant-manager']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['tenant-manager']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTenantManagerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['tenant-manager']['$put']>) {
      return parseResponse(client.api['tenant-manager'].$put(args, options))
    },
  })
}

export function usePutApiTenantManager<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['tenant-manager']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['tenant-manager']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTenantManagerMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiTenantManagerMutationKey() {
  return ['api', '/api/tenant-manager', 'PATCH'] as const
}

export function getPatchApiTenantManagerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['tenant-manager']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['tenant-manager']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiTenantManagerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['tenant-manager']['$patch']>) {
      return parseResponse(client.api['tenant-manager'].$patch(args, options))
    },
  })
}

export function usePatchApiTenantManager<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['tenant-manager']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['tenant-manager']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiTenantManagerMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutApiTenantManagerIdentityProviderTypeMutationKey() {
  return ['api', '/api/tenant-manager/identity-provider/:type', 'PUT'] as const
}

export function getPutApiTenantManagerIdentityProviderTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['tenant-manager']['identity-provider'][':type']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['tenant-manager']['identity-provider'][':type']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTenantManagerIdentityProviderTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['tenant-manager']['identity-provider'][':type']['$put']
      >,
    ) {
      return parseResponse(
        client.api['tenant-manager']['identity-provider'][':type'].$put(args, options),
      )
    },
  })
}

export function usePutApiTenantManagerIdentityProviderType<
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
                  (typeof client.api)['tenant-manager']['identity-provider'][':type']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['tenant-manager']['identity-provider'][':type']['$put']
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
  const mutationDefaults = getPutApiTenantManagerIdentityProviderTypeMutationOptions<
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

export function getPostApiTenantManagerIdentityProviderTypeMutationKey() {
  return ['api', '/api/tenant-manager/identity-provider/:type', 'POST'] as const
}

export function getPostApiTenantManagerIdentityProviderTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['tenant-manager']['identity-provider'][':type']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['tenant-manager']['identity-provider'][':type']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTenantManagerIdentityProviderTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['tenant-manager']['identity-provider'][':type']['$post']
      >,
    ) {
      return parseResponse(
        client.api['tenant-manager']['identity-provider'][':type'].$post(args, options),
      )
    },
  })
}

export function usePostApiTenantManagerIdentityProviderType<
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
                  (typeof client.api)['tenant-manager']['identity-provider'][':type']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['tenant-manager']['identity-provider'][':type']['$post']
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
  const mutationDefaults = getPostApiTenantManagerIdentityProviderTypeMutationOptions<
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

export function getDeleteApiTenantManagerIdentityProviderTypeMutationKey() {
  return ['api', '/api/tenant-manager/identity-provider/:type', 'DELETE'] as const
}

export function getDeleteApiTenantManagerIdentityProviderTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['tenant-manager']['identity-provider'][':type']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)['tenant-manager']['identity-provider'][':type']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTenantManagerIdentityProviderTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['tenant-manager']['identity-provider'][':type']['$delete']
      >,
    ) {
      return parseResponse(
        client.api['tenant-manager']['identity-provider'][':type'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiTenantManagerIdentityProviderType<
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
                  (typeof client.api)['tenant-manager']['identity-provider'][':type']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['tenant-manager']['identity-provider'][':type']['$delete']
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
  const mutationDefaults = getDeleteApiTenantManagerIdentityProviderTypeMutationOptions<
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

export function getPatchApiTenantManagerIdentityProviderTypeMutationKey() {
  return ['api', '/api/tenant-manager/identity-provider/:type', 'PATCH'] as const
}

export function getPatchApiTenantManagerIdentityProviderTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['tenant-manager']['identity-provider'][':type']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['tenant-manager']['identity-provider'][':type']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiTenantManagerIdentityProviderTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['tenant-manager']['identity-provider'][':type']['$patch']
      >,
    ) {
      return parseResponse(
        client.api['tenant-manager']['identity-provider'][':type'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiTenantManagerIdentityProviderType<
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
                  (typeof client.api)['tenant-manager']['identity-provider'][':type']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['tenant-manager']['identity-provider'][':type']['$patch']
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
  const mutationDefaults = getPatchApiTenantManagerIdentityProviderTypeMutationOptions<
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

export function getApiTenantPasswordValidationRulesQueryKey() {
  return ['api', '/api/tenant/password-validation-rules'] as const
}

export function getApiTenantPasswordValidationRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tenant)['password-validation-rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tenant)['password-validation-rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTenantPasswordValidationRulesQueryKey>
  >({
    queryKey: getApiTenantPasswordValidationRulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tenant['password-validation-rules'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiTenantPasswordValidationRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tenant)['password-validation-rules']['$get']>>
      >
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
              Awaited<ReturnType<(typeof client.api.tenant)['password-validation-rules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTenantPasswordValidationRulesQueryKey>
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
      ...getApiTenantPasswordValidationRulesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiTenantPasswordValidationRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tenant)['password-validation-rules']['$get']>>
      >
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
              Awaited<ReturnType<(typeof client.api.tenant)['password-validation-rules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTenantPasswordValidationRulesQueryKey>
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
      ...getApiTenantPasswordValidationRulesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiTenantPasswordValidationRulesTenantIdQueryKey(
  args: InferRequestType<
    (typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']
  >,
) {
  return ['api', '/api/tenant/password-validation-rules/:tenantId', args] as const
}

export function getApiTenantPasswordValidationRulesTenantIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTenantPasswordValidationRulesTenantIdQueryKey>
  >({
    queryKey: getApiTenantPasswordValidationRulesTenantIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tenant['password-validation-rules'][':tenantId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiTenantPasswordValidationRulesTenantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTenantPasswordValidationRulesTenantIdQueryKey>
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
      ...getApiTenantPasswordValidationRulesTenantIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiTenantPasswordValidationRulesTenantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTenantPasswordValidationRulesTenantIdQueryKey>
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
      ...getApiTenantPasswordValidationRulesTenantIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiTenantSearchMutationKey() {
  return ['api', '/api/tenant/search', 'POST'] as const
}

export function getPostApiTenantSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tenant.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.tenant.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTenantSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.tenant.search.$post>) {
      return parseResponse(client.api.tenant.search.$post(args, options))
    },
  })
}

export function usePostApiTenantSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.tenant.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.tenant.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTenantSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTenantTenantIdQueryKey(
  args: InferRequestType<(typeof client.api.tenant)[':tenantId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/tenant/:tenantId', keyArgs] as const
}

export function getApiTenantTenantIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tenant)[':tenantId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTenantTenantIdQueryKey>
  >({
    queryKey: getApiTenantTenantIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tenant[':tenantId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiTenantTenantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tenant)[':tenantId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTenantTenantIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTenantTenantIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTenantTenantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tenant)[':tenantId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTenantTenantIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTenantTenantIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiTenantTenantIdMutationKey() {
  return ['api', '/api/tenant/:tenantId', 'PUT'] as const
}

export function getPutApiTenantTenantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tenant)[':tenantId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTenantTenantIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.tenant)[':tenantId']['$put']>) {
      return parseResponse(client.api.tenant[':tenantId'].$put(args, options))
    },
  })
}

export function usePutApiTenantTenantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tenant)[':tenantId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTenantTenantIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiTenantTenantIdMutationKey() {
  return ['api', '/api/tenant/:tenantId', 'POST'] as const
}

export function getPostApiTenantTenantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tenant)[':tenantId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTenantTenantIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.tenant)[':tenantId']['$post']>) {
      return parseResponse(client.api.tenant[':tenantId'].$post(args, options))
    },
  })
}

export function usePostApiTenantTenantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tenant)[':tenantId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTenantTenantIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTenantTenantIdMutationKey() {
  return ['api', '/api/tenant/:tenantId', 'DELETE'] as const
}

export function getDeleteApiTenantTenantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tenant)[':tenantId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTenantTenantIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.tenant)[':tenantId']['$delete']>) {
      return parseResponse(client.api.tenant[':tenantId'].$delete(args, options))
    },
  })
}

export function useDeleteApiTenantTenantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tenant)[':tenantId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTenantTenantIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiTenantTenantIdMutationKey() {
  return ['api', '/api/tenant/:tenantId', 'PATCH'] as const
}

export function getPatchApiTenantTenantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tenant)[':tenantId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiTenantTenantIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.tenant)[':tenantId']['$patch']>) {
      return parseResponse(client.api.tenant[':tenantId'].$patch(args, options))
    },
  })
}

export function usePatchApiTenantTenantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tenant)[':tenantId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiTenantTenantIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiThemeQueryKey() {
  return ['api', '/api/theme'] as const
}

export function getApiThemeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.theme.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.theme.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiThemeQueryKey>
  >({
    queryKey: getApiThemeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.theme.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTheme<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.theme.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.theme.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiThemeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiThemeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTheme<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.theme.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.theme.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiThemeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiThemeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiThemeMutationKey() {
  return ['api', '/api/theme', 'POST'] as const
}

export function getPostApiThemeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.theme.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.theme.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiThemeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.theme.$post>) {
      return parseResponse(client.api.theme.$post(args, options))
    },
  })
}

export function usePostApiTheme<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.theme.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.theme.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiThemeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiThemeSearchMutationKey() {
  return ['api', '/api/theme/search', 'POST'] as const
}

export function getPostApiThemeSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.theme.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.theme.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiThemeSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.theme.search.$post>) {
      return parseResponse(client.api.theme.search.$post(args, options))
    },
  })
}

export function usePostApiThemeSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.theme.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.theme.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiThemeSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiThemeThemeIdQueryKey(
  args: InferRequestType<(typeof client.api.theme)[':themeId']['$get']>,
) {
  return ['api', '/api/theme/:themeId', args] as const
}

export function getApiThemeThemeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.theme)[':themeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiThemeThemeIdQueryKey>
  >({
    queryKey: getApiThemeThemeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.theme[':themeId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiThemeThemeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.theme)[':themeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiThemeThemeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiThemeThemeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiThemeThemeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.theme)[':themeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiThemeThemeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiThemeThemeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiThemeThemeIdMutationKey() {
  return ['api', '/api/theme/:themeId', 'PUT'] as const
}

export function getPutApiThemeThemeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.theme)[':themeId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiThemeThemeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.theme)[':themeId']['$put']>) {
      return parseResponse(client.api.theme[':themeId'].$put(args, options))
    },
  })
}

export function usePutApiThemeThemeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.theme)[':themeId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiThemeThemeIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiThemeThemeIdMutationKey() {
  return ['api', '/api/theme/:themeId', 'POST'] as const
}

export function getPostApiThemeThemeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.theme)[':themeId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiThemeThemeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.theme)[':themeId']['$post']>) {
      return parseResponse(client.api.theme[':themeId'].$post(args, options))
    },
  })
}

export function usePostApiThemeThemeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.theme)[':themeId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiThemeThemeIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiThemeThemeIdMutationKey() {
  return ['api', '/api/theme/:themeId', 'DELETE'] as const
}

export function getDeleteApiThemeThemeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.theme)[':themeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiThemeThemeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.theme)[':themeId']['$delete']>) {
      return parseResponse(client.api.theme[':themeId'].$delete(args, options))
    },
  })
}

export function useDeleteApiThemeThemeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.theme)[':themeId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiThemeThemeIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiThemeThemeIdMutationKey() {
  return ['api', '/api/theme/:themeId', 'PATCH'] as const
}

export function getPatchApiThemeThemeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.theme)[':themeId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiThemeThemeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.theme)[':themeId']['$patch']>) {
      return parseResponse(client.api.theme[':themeId'].$patch(args, options))
    },
  })
}

export function usePatchApiThemeThemeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.theme)[':themeId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiThemeThemeIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiTwoFactorLoginMutationKey() {
  return ['api', '/api/two-factor/login', 'POST'] as const
}

export function getPostApiTwoFactorLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['two-factor']['login']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['two-factor']['login']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTwoFactorLoginMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['two-factor']['login']['$post']>) {
      return parseResponse(client.api['two-factor'].login.$post(args, options))
    },
  })
}

export function usePostApiTwoFactorLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['two-factor']['login']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['two-factor']['login']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTwoFactorLoginMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTwoFactorSecretQueryKey() {
  return ['api', '/api/two-factor/secret'] as const
}

export function getApiTwoFactorSecretQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['two-factor']['secret']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['two-factor']['secret']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTwoFactorSecretQueryKey>
  >({
    queryKey: getApiTwoFactorSecretQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api['two-factor'].secret.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiTwoFactorSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['two-factor']['secret']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api)['two-factor']['secret']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTwoFactorSecretQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTwoFactorSecretQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTwoFactorSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['two-factor']['secret']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api)['two-factor']['secret']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTwoFactorSecretQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTwoFactorSecretQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiTwoFactorSendMutationKey() {
  return ['api', '/api/two-factor/send', 'POST'] as const
}

export function getPostApiTwoFactorSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['two-factor']['send']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['two-factor']['send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTwoFactorSendMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['two-factor']['send']['$post']>) {
      return parseResponse(client.api['two-factor'].send.$post(args, options))
    },
  })
}

export function usePostApiTwoFactorSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['two-factor']['send']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['two-factor']['send']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTwoFactorSendMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiTwoFactorSendTwoFactorIdMutationKey() {
  return ['api', '/api/two-factor/send/:twoFactorId', 'POST'] as const
}

export function getPostApiTwoFactorSendTwoFactorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['two-factor']['send'][':twoFactorId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['two-factor']['send'][':twoFactorId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTwoFactorSendTwoFactorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['two-factor']['send'][':twoFactorId']['$post']>,
    ) {
      return parseResponse(client.api['two-factor'].send[':twoFactorId'].$post(args, options))
    },
  })
}

export function usePostApiTwoFactorSendTwoFactorId<
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
                ReturnType<(typeof client.api)['two-factor']['send'][':twoFactorId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['two-factor']['send'][':twoFactorId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTwoFactorSendTwoFactorIdMutationOptions<
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

export function getPostApiTwoFactorStartMutationKey() {
  return ['api', '/api/two-factor/start', 'POST'] as const
}

export function getPostApiTwoFactorStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['two-factor']['start']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['two-factor']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTwoFactorStartMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['two-factor']['start']['$post']>) {
      return parseResponse(client.api['two-factor'].start.$post(args, options))
    },
  })
}

export function usePostApiTwoFactorStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['two-factor']['start']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['two-factor']['start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTwoFactorStartMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiTwoFactorStatusMutationKey() {
  return ['api', '/api/two-factor/status', 'POST'] as const
}

export function getPostApiTwoFactorStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['two-factor']['status']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['two-factor']['status']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTwoFactorStatusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['two-factor']['status']['$post']>) {
      return parseResponse(client.api['two-factor'].status.$post(args, options))
    },
  })
}

export function usePostApiTwoFactorStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['two-factor']['status']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['two-factor']['status']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTwoFactorStatusMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTwoFactorStatusTwoFactorTrustIdQueryKey(
  args: InferRequestType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>,
) {
  return ['api', '/api/two-factor/status/:twoFactorTrustId', args] as const
}

export function getApiTwoFactorStatusTwoFactorTrustIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTwoFactorStatusTwoFactorTrustIdQueryKey>
  >({
    queryKey: getApiTwoFactorStatusTwoFactorTrustIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['two-factor'].status[':twoFactorTrustId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiTwoFactorStatusTwoFactorTrustId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTwoFactorStatusTwoFactorTrustIdQueryKey>
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
      ...getApiTwoFactorStatusTwoFactorTrustIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiTwoFactorStatusTwoFactorTrustId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTwoFactorStatusTwoFactorTrustIdQueryKey>
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
      ...getApiTwoFactorStatusTwoFactorTrustIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiUserQueryKey(args: InferRequestType<typeof client.api.user.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user', keyArgs] as const
}

export function getApiUserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.user.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUserQueryKey>
  >({
    queryKey: getApiUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.user.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUserQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.user.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUserQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiUserMutationKey() {
  return ['api', '/api/user', 'POST'] as const
}

export function getPostApiUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.user.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.$post>) {
      return parseResponse(client.api.user.$post(args, options))
    },
  })
}

export function usePostApiUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.user.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUserActionQueryKey(
  args: InferRequestType<(typeof client.api)['user-action']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user-action', keyArgs] as const
}

export function getApiUserActionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['user-action']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserActionQueryKey>
  >({
    queryKey: getApiUserActionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['user-action'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiUserAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['user-action']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserActionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUserActionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUserAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['user-action']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserActionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUserActionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiUserActionMutationKey() {
  return ['api', '/api/user-action', 'POST'] as const
}

export function getPostApiUserActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['user-action']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserActionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['user-action']['$post']>) {
      return parseResponse(client.api['user-action'].$post(args, options))
    },
  })
}

export function usePostApiUserAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['user-action']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserActionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUserActionReasonQueryKey() {
  return ['api', '/api/user-action-reason'] as const
}

export function getApiUserActionReasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action-reason']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action-reason']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserActionReasonQueryKey>
  >({
    queryKey: getApiUserActionReasonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api['user-action-reason'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserActionReason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action-reason']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api)['user-action-reason']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserActionReasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUserActionReasonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUserActionReason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action-reason']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api)['user-action-reason']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserActionReasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUserActionReasonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiUserActionReasonMutationKey() {
  return ['api', '/api/user-action-reason', 'POST'] as const
}

export function getPostApiUserActionReasonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['user-action-reason']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['user-action-reason']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserActionReasonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['user-action-reason']['$post']>) {
      return parseResponse(client.api['user-action-reason'].$post(args, options))
    },
  })
}

export function usePostApiUserActionReason<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['user-action-reason']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['user-action-reason']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserActionReasonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUserActionReasonUserActionReasonIdQueryKey(
  args: InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>,
) {
  return ['api', '/api/user-action-reason/:userActionReasonId', args] as const
}

export function getApiUserActionReasonUserActionReasonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserActionReasonUserActionReasonIdQueryKey>
  >({
    queryKey: getApiUserActionReasonUserActionReasonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['user-action-reason'][':userActionReasonId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserActionReasonUserActionReasonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserActionReasonUserActionReasonIdQueryKey>
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
      ...getApiUserActionReasonUserActionReasonIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUserActionReasonUserActionReasonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserActionReasonUserActionReasonIdQueryKey>
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
      ...getApiUserActionReasonUserActionReasonIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiUserActionReasonUserActionReasonIdMutationKey() {
  return ['api', '/api/user-action-reason/:userActionReasonId', 'PUT'] as const
}

export function getPutApiUserActionReasonUserActionReasonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiUserActionReasonUserActionReasonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['user-action-reason'][':userActionReasonId']['$put']
      >,
    ) {
      return parseResponse(
        client.api['user-action-reason'][':userActionReasonId'].$put(args, options),
      )
    },
  })
}

export function usePutApiUserActionReasonUserActionReasonId<
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
                ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiUserActionReasonUserActionReasonIdMutationOptions<
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

export function getPostApiUserActionReasonUserActionReasonIdMutationKey() {
  return ['api', '/api/user-action-reason/:userActionReasonId', 'POST'] as const
}

export function getPostApiUserActionReasonUserActionReasonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserActionReasonUserActionReasonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['user-action-reason'][':userActionReasonId']['$post']
      >,
    ) {
      return parseResponse(
        client.api['user-action-reason'][':userActionReasonId'].$post(args, options),
      )
    },
  })
}

export function usePostApiUserActionReasonUserActionReasonId<
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
                  (typeof client.api)['user-action-reason'][':userActionReasonId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserActionReasonUserActionReasonIdMutationOptions<
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

export function getDeleteApiUserActionReasonUserActionReasonIdMutationKey() {
  return ['api', '/api/user-action-reason/:userActionReasonId', 'DELETE'] as const
}

export function getDeleteApiUserActionReasonUserActionReasonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserActionReasonUserActionReasonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['user-action-reason'][':userActionReasonId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api['user-action-reason'][':userActionReasonId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiUserActionReasonUserActionReasonId<
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
                  (typeof client.api)['user-action-reason'][':userActionReasonId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['user-action-reason'][':userActionReasonId']['$delete']
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
  const mutationDefaults = getDeleteApiUserActionReasonUserActionReasonIdMutationOptions<
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

export function getPatchApiUserActionReasonUserActionReasonIdMutationKey() {
  return ['api', '/api/user-action-reason/:userActionReasonId', 'PATCH'] as const
}

export function getPatchApiUserActionReasonUserActionReasonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiUserActionReasonUserActionReasonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['user-action-reason'][':userActionReasonId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api['user-action-reason'][':userActionReasonId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiUserActionReasonUserActionReasonId<
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
                  (typeof client.api)['user-action-reason'][':userActionReasonId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['user-action-reason'][':userActionReasonId']['$patch']
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
  const mutationDefaults = getPatchApiUserActionReasonUserActionReasonIdMutationOptions<
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

export function getApiUserActionUserActionIdQueryKey(
  args: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user-action/:userActionId', keyArgs] as const
}

export function getApiUserActionUserActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserActionUserActionIdQueryKey>
  >({
    queryKey: getApiUserActionUserActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['user-action'][':userActionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserActionUserActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserActionUserActionIdQueryKey>
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
      ...getApiUserActionUserActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUserActionUserActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserActionUserActionIdQueryKey>
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
      ...getApiUserActionUserActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiUserActionUserActionIdMutationKey() {
  return ['api', '/api/user-action/:userActionId', 'PUT'] as const
}

export function getPutApiUserActionUserActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['user-action'][':userActionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiUserActionUserActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$put']>,
    ) {
      return parseResponse(client.api['user-action'][':userActionId'].$put(args, options))
    },
  })
}

export function usePutApiUserActionUserActionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['user-action'][':userActionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiUserActionUserActionIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiUserActionUserActionIdMutationKey() {
  return ['api', '/api/user-action/:userActionId', 'POST'] as const
}

export function getPostApiUserActionUserActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['user-action'][':userActionId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserActionUserActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$post']>,
    ) {
      return parseResponse(client.api['user-action'][':userActionId'].$post(args, options))
    },
  })
}

export function usePostApiUserActionUserActionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['user-action'][':userActionId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserActionUserActionIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiUserActionUserActionIdMutationKey() {
  return ['api', '/api/user-action/:userActionId', 'DELETE'] as const
}

export function getDeleteApiUserActionUserActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['user-action'][':userActionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserActionUserActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$delete']>,
    ) {
      return parseResponse(client.api['user-action'][':userActionId'].$delete(args, options))
    },
  })
}

export function useDeleteApiUserActionUserActionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['user-action'][':userActionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiUserActionUserActionIdMutationOptions<
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

export function getPatchApiUserActionUserActionIdMutationKey() {
  return ['api', '/api/user-action/:userActionId', 'PATCH'] as const
}

export function getPatchApiUserActionUserActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['user-action'][':userActionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiUserActionUserActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$patch']>,
    ) {
      return parseResponse(client.api['user-action'][':userActionId'].$patch(args, options))
    },
  })
}

export function usePatchApiUserActionUserActionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['user-action'][':userActionId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiUserActionUserActionIdMutationOptions<
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

export function getApiUserAction2QueryKey(
  args: InferRequestType<typeof client.api.user.action.$get>,
) {
  return ['api', '/api/user/action', args] as const
}

export function getApiUserAction2QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.action.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.user.action.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.action.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserAction2QueryKey>
  >({
    queryKey: getApiUserAction2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.action.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiUserAction2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.action.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.user.action.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.action.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserAction2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUserAction2QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUserAction2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.action.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.user.action.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.action.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserAction2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUserAction2QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiUserAction2MutationKey() {
  return ['api', '/api/user/action', 'POST'] as const
}

export function getPostApiUserAction2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.action.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.user.action.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserAction2MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.action.$post>) {
      return parseResponse(client.api.user.action.$post(args, options))
    },
  })
}

export function usePostApiUserAction2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.action.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.user.action.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserAction2MutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUserActionActionIdQueryKey(
  args: InferRequestType<(typeof client.api.user.action)[':actionId']['$get']>,
) {
  return ['api', '/api/user/action/:actionId', args] as const
}

export function getApiUserActionActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.action)[':actionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user.action)[':actionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.action)[':actionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserActionActionIdQueryKey>
  >({
    queryKey: getApiUserActionActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.action[':actionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserActionActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.action)[':actionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user.action)[':actionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.action)[':actionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserActionActionIdQueryKey>
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
      ...getApiUserActionActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUserActionActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.action)[':actionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user.action)[':actionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.action)[':actionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserActionActionIdQueryKey>
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
      ...getApiUserActionActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiUserActionActionIdMutationKey() {
  return ['api', '/api/user/action/:actionId', 'PUT'] as const
}

export function getPutApiUserActionActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.action)[':actionId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.action)[':actionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiUserActionActionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.user.action)[':actionId']['$put']>) {
      return parseResponse(client.api.user.action[':actionId'].$put(args, options))
    },
  })
}

export function usePutApiUserActionActionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.action)[':actionId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user.action)[':actionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiUserActionActionIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiUserActionActionIdMutationKey() {
  return ['api', '/api/user/action/:actionId', 'DELETE'] as const
}

export function getDeleteApiUserActionActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.action)[':actionId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.action)[':actionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserActionActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user.action)[':actionId']['$delete']>,
    ) {
      return parseResponse(client.api.user.action[':actionId'].$delete(args, options))
    },
  })
}

export function useDeleteApiUserActionActionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.action)[':actionId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user.action)[':actionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiUserActionActionIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiUserBulkMutationKey() {
  return ['api', '/api/user/bulk', 'DELETE'] as const
}

export function getDeleteApiUserBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.bulk.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.user.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.bulk.$delete>) {
      return parseResponse(client.api.user.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiUserBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.bulk.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.api.user.bulk.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiUserBulkMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUserChangePasswordQueryKey(
  args: InferRequestType<(typeof client.api.user)['change-password']['$get']>,
) {
  return ['api', '/api/user/change-password', args] as const
}

export function getApiUserChangePasswordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)['change-password']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)['change-password']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['change-password']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserChangePasswordQueryKey>
  >({
    queryKey: getApiUserChangePasswordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user['change-password'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserChangePassword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)['change-password']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)['change-password']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)['change-password']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserChangePasswordQueryKey>
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
      ...getApiUserChangePasswordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUserChangePassword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)['change-password']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)['change-password']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)['change-password']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserChangePasswordQueryKey>
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
      ...getApiUserChangePasswordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiUserChangePasswordMutationKey() {
  return ['api', '/api/user/change-password', 'POST'] as const
}

export function getPostApiUserChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['change-password']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)['change-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserChangePasswordMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.user)['change-password']['$post']>) {
      return parseResponse(client.api.user['change-password'].$post(args, options))
    },
  })
}

export function usePostApiUserChangePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)['change-password']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user)['change-password']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserChangePasswordMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUserChangePasswordChangePasswordIdQueryKey(
  args: InferRequestType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>,
) {
  return ['api', '/api/user/change-password/:changePasswordId', args] as const
}

export function getApiUserChangePasswordChangePasswordIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserChangePasswordChangePasswordIdQueryKey>
  >({
    queryKey: getApiUserChangePasswordChangePasswordIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user['change-password'][':changePasswordId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserChangePasswordChangePasswordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserChangePasswordChangePasswordIdQueryKey>
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
      ...getApiUserChangePasswordChangePasswordIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUserChangePasswordChangePasswordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserChangePasswordChangePasswordIdQueryKey>
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
      ...getApiUserChangePasswordChangePasswordIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiUserChangePasswordChangePasswordIdMutationKey() {
  return ['api', '/api/user/change-password/:changePasswordId', 'POST'] as const
}

export function getPostApiUserChangePasswordChangePasswordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.user)['change-password'][':changePasswordId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)['change-password'][':changePasswordId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserChangePasswordChangePasswordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.user)['change-password'][':changePasswordId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.user['change-password'][':changePasswordId'].$post(args, options),
      )
    },
  })
}

export function usePostApiUserChangePasswordChangePasswordId<
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
                  (typeof client.api.user)['change-password'][':changePasswordId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user)['change-password'][':changePasswordId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserChangePasswordChangePasswordIdMutationOptions<
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

export function getPostApiUserCommentMutationKey() {
  return ['api', '/api/user/comment', 'POST'] as const
}

export function getPostApiUserCommentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.comment.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.user.comment.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserCommentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.comment.$post>) {
      return parseResponse(client.api.user.comment.$post(args, options))
    },
  })
}

export function usePostApiUserComment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.user.comment.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.user.comment.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserCommentMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiUserCommentSearchMutationKey() {
  return ['api', '/api/user/comment/search', 'POST'] as const
}

export function getPostApiUserCommentSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.user.comment.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.user.comment.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserCommentSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.comment.search.$post>) {
      return parseResponse(client.api.user.comment.search.$post(args, options))
    },
  })
}

export function usePostApiUserCommentSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.user.comment.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.user.comment.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserCommentSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUserCommentUserIdQueryKey(
  args: InferRequestType<(typeof client.api.user.comment)[':userId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user/comment/:userId', keyArgs] as const
}

export function getApiUserCommentUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user.comment)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user.comment)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.comment)[':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserCommentUserIdQueryKey>
  >({
    queryKey: getApiUserCommentUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.comment[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserCommentUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user.comment)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user.comment)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.comment)[':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserCommentUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUserCommentUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUserCommentUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user.comment)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user.comment)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.comment)[':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserCommentUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUserCommentUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiUserConsentQueryKey(
  args: InferRequestType<typeof client.api.user.consent.$get>,
) {
  return ['api', '/api/user/consent', args] as const
}

export function getApiUserConsentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.consent.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.user.consent.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.consent.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserConsentQueryKey>
  >({
    queryKey: getApiUserConsentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.consent.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiUserConsent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.consent.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.user.consent.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.consent.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserConsentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUserConsentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUserConsent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.consent.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.user.consent.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.consent.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserConsentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUserConsentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiUserConsentMutationKey() {
  return ['api', '/api/user/consent', 'POST'] as const
}

export function getPostApiUserConsentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.consent.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.user.consent.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserConsentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.consent.$post>) {
      return parseResponse(client.api.user.consent.$post(args, options))
    },
  })
}

export function usePostApiUserConsent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.user.consent.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.user.consent.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserConsentMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUserConsentUserConsentIdQueryKey(
  args: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$get']>,
) {
  return ['api', '/api/user/consent/:userConsentId', args] as const
}

export function getApiUserConsentUserConsentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserConsentUserConsentIdQueryKey>
  >({
    queryKey: getApiUserConsentUserConsentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.consent[':userConsentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserConsentUserConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserConsentUserConsentIdQueryKey>
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
      ...getApiUserConsentUserConsentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUserConsentUserConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserConsentUserConsentIdQueryKey>
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
      ...getApiUserConsentUserConsentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiUserConsentUserConsentIdMutationKey() {
  return ['api', '/api/user/consent/:userConsentId', 'PUT'] as const
}

export function getPutApiUserConsentUserConsentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiUserConsentUserConsentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$put']>,
    ) {
      return parseResponse(client.api.user.consent[':userConsentId'].$put(args, options))
    },
  })
}

export function usePutApiUserConsentUserConsentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiUserConsentUserConsentIdMutationOptions<
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

export function getPostApiUserConsentUserConsentIdMutationKey() {
  return ['api', '/api/user/consent/:userConsentId', 'POST'] as const
}

export function getPostApiUserConsentUserConsentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserConsentUserConsentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$post']>,
    ) {
      return parseResponse(client.api.user.consent[':userConsentId'].$post(args, options))
    },
  })
}

export function usePostApiUserConsentUserConsentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserConsentUserConsentIdMutationOptions<
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

export function getDeleteApiUserConsentUserConsentIdMutationKey() {
  return ['api', '/api/user/consent/:userConsentId', 'DELETE'] as const
}

export function getDeleteApiUserConsentUserConsentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserConsentUserConsentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$delete']>,
    ) {
      return parseResponse(client.api.user.consent[':userConsentId'].$delete(args, options))
    },
  })
}

export function useDeleteApiUserConsentUserConsentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiUserConsentUserConsentIdMutationOptions<
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

export function getPatchApiUserConsentUserConsentIdMutationKey() {
  return ['api', '/api/user/consent/:userConsentId', 'PATCH'] as const
}

export function getPatchApiUserConsentUserConsentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiUserConsentUserConsentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$patch']>,
    ) {
      return parseResponse(client.api.user.consent[':userConsentId'].$patch(args, options))
    },
  })
}

export function usePatchApiUserConsentUserConsentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiUserConsentUserConsentIdMutationOptions<
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

export function getApiUserFamilyQueryKey(
  args: InferRequestType<typeof client.api.user.family.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user/family', keyArgs] as const
}

export function getApiUserFamilyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.user.family.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserFamilyQueryKey>
  >({
    queryKey: getApiUserFamilyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.family.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiUserFamily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.user.family.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserFamilyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUserFamilyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUserFamily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.user.family.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserFamilyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUserFamilyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiUserFamilyMutationKey() {
  return ['api', '/api/user/family', 'POST'] as const
}

export function getPostApiUserFamilyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.user.family.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserFamilyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.family.$post>) {
      return parseResponse(client.api.user.family.$post(args, options))
    },
  })
}

export function usePostApiUserFamily<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.user.family.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserFamilyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUserFamilyPendingQueryKey(
  args: InferRequestType<typeof client.api.user.family.pending.$get>,
) {
  return ['api', '/api/user/family/pending', args] as const
}

export function getApiUserFamilyPendingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.pending.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.user.family.pending.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.pending.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserFamilyPendingQueryKey>
  >({
    queryKey: getApiUserFamilyPendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.family.pending.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserFamilyPending<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.pending.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.user.family.pending.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.pending.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserFamilyPendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUserFamilyPendingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUserFamilyPending<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.pending.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.user.family.pending.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.pending.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserFamilyPendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUserFamilyPendingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiUserFamilyRequestMutationKey() {
  return ['api', '/api/user/family/request', 'POST'] as const
}

export function getPostApiUserFamilyRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.request.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.user.family.request.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserFamilyRequestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.family.request.$post>) {
      return parseResponse(client.api.user.family.request.$post(args, options))
    },
  })
}

export function usePostApiUserFamilyRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.request.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.user.family.request.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserFamilyRequestMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUserFamilyFamilyIdQueryKey(
  args: InferRequestType<(typeof client.api.user.family)[':familyId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user/family/:familyId', keyArgs] as const
}

export function getApiUserFamilyFamilyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.family)[':familyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user.family)[':familyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.family)[':familyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserFamilyFamilyIdQueryKey>
  >({
    queryKey: getApiUserFamilyFamilyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.family[':familyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserFamilyFamilyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.family)[':familyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user.family)[':familyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.family)[':familyId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserFamilyFamilyIdQueryKey>
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
      ...getApiUserFamilyFamilyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUserFamilyFamilyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.family)[':familyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user.family)[':familyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.family)[':familyId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserFamilyFamilyIdQueryKey>
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
      ...getApiUserFamilyFamilyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiUserFamilyFamilyIdMutationKey() {
  return ['api', '/api/user/family/:familyId', 'PUT'] as const
}

export function getPutApiUserFamilyFamilyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.family)[':familyId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.family)[':familyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiUserFamilyFamilyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.user.family)[':familyId']['$put']>) {
      return parseResponse(client.api.user.family[':familyId'].$put(args, options))
    },
  })
}

export function usePutApiUserFamilyFamilyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.family)[':familyId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user.family)[':familyId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiUserFamilyFamilyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiUserFamilyFamilyIdMutationKey() {
  return ['api', '/api/user/family/:familyId', 'POST'] as const
}

export function getPostApiUserFamilyFamilyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.family)[':familyId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.family)[':familyId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserFamilyFamilyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user.family)[':familyId']['$post']>,
    ) {
      return parseResponse(client.api.user.family[':familyId'].$post(args, options))
    },
  })
}

export function usePostApiUserFamilyFamilyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.family)[':familyId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user.family)[':familyId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserFamilyFamilyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiUserFamilyFamilyIdUserIdMutationKey() {
  return ['api', '/api/user/family/:familyId/:userId', 'DELETE'] as const
}

export function getDeleteApiUserFamilyFamilyIdUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.family)[':familyId'][':userId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.family)[':familyId'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserFamilyFamilyIdUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user.family)[':familyId'][':userId']['$delete']>,
    ) {
      return parseResponse(client.api.user.family[':familyId'][':userId'].$delete(args, options))
    },
  })
}

export function useDeleteApiUserFamilyFamilyIdUserId<
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
                ReturnType<(typeof client.api.user.family)[':familyId'][':userId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user.family)[':familyId'][':userId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiUserFamilyFamilyIdUserIdMutationOptions<
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

export function getPostApiUserForgotPasswordMutationKey() {
  return ['api', '/api/user/forgot-password', 'POST'] as const
}

export function getPostApiUserForgotPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['forgot-password']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)['forgot-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserForgotPasswordMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.user)['forgot-password']['$post']>) {
      return parseResponse(client.api.user['forgot-password'].$post(args, options))
    },
  })
}

export function usePostApiUserForgotPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)['forgot-password']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user)['forgot-password']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserForgotPasswordMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiUserImportMutationKey() {
  return ['api', '/api/user/import', 'POST'] as const
}

export function getPostApiUserImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.user.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.import.$post>) {
      return parseResponse(client.api.user.import.$post(args, options))
    },
  })
}

export function usePostApiUserImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.import.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.user.import.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserImportMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUserRecentLoginQueryKey(
  args: InferRequestType<(typeof client.api.user)['recent-login']['$get']>,
) {
  return ['api', '/api/user/recent-login', args] as const
}

export function getApiUserRecentLoginQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)['recent-login']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)['recent-login']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)['recent-login']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserRecentLoginQueryKey>
  >({
    queryKey: getApiUserRecentLoginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user['recent-login'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserRecentLogin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)['recent-login']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)['recent-login']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)['recent-login']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserRecentLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUserRecentLoginQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUserRecentLogin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)['recent-login']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)['recent-login']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)['recent-login']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserRecentLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUserRecentLoginQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiUserRefreshTokenImportMutationKey() {
  return ['api', '/api/user/refresh-token/import', 'POST'] as const
}

export function getPostApiUserRefreshTokenImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['refresh-token']['import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)['refresh-token']['import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserRefreshTokenImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user)['refresh-token']['import']['$post']>,
    ) {
      return parseResponse(client.api.user['refresh-token'].import.$post(args, options))
    },
  })
}

export function usePostApiUserRefreshTokenImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)['refresh-token']['import']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user)['refresh-token']['import']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserRefreshTokenImportMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiUserRegistrationMutationKey() {
  return ['api', '/api/user/registration', 'POST'] as const
}

export function getPostApiUserRegistrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.user.registration.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.user.registration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserRegistrationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.registration.$post>) {
      return parseResponse(client.api.user.registration.$post(args, options))
    },
  })
}

export function usePostApiUserRegistration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.user.registration.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.user.registration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserRegistrationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutApiUserRegistrationUserIdMutationKey() {
  return ['api', '/api/user/registration/:userId', 'PUT'] as const
}

export function getPutApiUserRegistrationUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.registration)[':userId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.registration)[':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiUserRegistrationUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user.registration)[':userId']['$put']>,
    ) {
      return parseResponse(client.api.user.registration[':userId'].$put(args, options))
    },
  })
}

export function usePutApiUserRegistrationUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.registration)[':userId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user.registration)[':userId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiUserRegistrationUserIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiUserRegistrationUserIdMutationKey() {
  return ['api', '/api/user/registration/:userId', 'POST'] as const
}

export function getPostApiUserRegistrationUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.registration)[':userId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.registration)[':userId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserRegistrationUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user.registration)[':userId']['$post']>,
    ) {
      return parseResponse(client.api.user.registration[':userId'].$post(args, options))
    },
  })
}

export function usePostApiUserRegistrationUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.registration)[':userId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user.registration)[':userId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserRegistrationUserIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiUserRegistrationUserIdMutationKey() {
  return ['api', '/api/user/registration/:userId', 'PATCH'] as const
}

export function getPatchApiUserRegistrationUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.registration)[':userId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.registration)[':userId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiUserRegistrationUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user.registration)[':userId']['$patch']>,
    ) {
      return parseResponse(client.api.user.registration[':userId'].$patch(args, options))
    },
  })
}

export function usePatchApiUserRegistrationUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.registration)[':userId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user.registration)[':userId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiUserRegistrationUserIdMutationOptions<
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

export function getApiUserRegistrationUserIdApplicationIdQueryKey(
  args: InferRequestType<
    (typeof client.api.user.registration)[':userId'][':applicationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user/registration/:userId/:applicationId', keyArgs] as const
}

export function getApiUserRegistrationUserIdApplicationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.user.registration)[':userId'][':applicationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.user.registration)[':userId'][':applicationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.user.registration)[':userId'][':applicationId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserRegistrationUserIdApplicationIdQueryKey>
  >({
    queryKey: getApiUserRegistrationUserIdApplicationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.registration[':userId'][':applicationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserRegistrationUserIdApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.user.registration)[':userId'][':applicationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.user.registration)[':userId'][':applicationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.user.registration)[':userId'][':applicationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserRegistrationUserIdApplicationIdQueryKey>
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
      ...getApiUserRegistrationUserIdApplicationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUserRegistrationUserIdApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.user.registration)[':userId'][':applicationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.user.registration)[':userId'][':applicationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.user.registration)[':userId'][':applicationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserRegistrationUserIdApplicationIdQueryKey>
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
      ...getApiUserRegistrationUserIdApplicationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiUserRegistrationUserIdApplicationIdMutationKey() {
  return ['api', '/api/user/registration/:userId/:applicationId', 'DELETE'] as const
}

export function getDeleteApiUserRegistrationUserIdApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.user.registration)[':userId'][':applicationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.registration)[':userId'][':applicationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserRegistrationUserIdApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.user.registration)[':userId'][':applicationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.user.registration[':userId'][':applicationId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiUserRegistrationUserIdApplicationId<
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
                  (typeof client.api.user.registration)[':userId'][':applicationId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.user.registration)[':userId'][':applicationId']['$delete']
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
  const mutationDefaults = getDeleteApiUserRegistrationUserIdApplicationIdMutationOptions<
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

export function getApiUserSearchQueryKey(
  args: InferRequestType<typeof client.api.user.search.$get>,
) {
  return ['api', '/api/user/search', args] as const
}

export function getApiUserSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.user.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserSearchQueryKey>
  >({
    queryKey: getApiUserSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiUserSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.user.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUserSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUserSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.user.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUserSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiUserSearchMutationKey() {
  return ['api', '/api/user/search', 'PUT'] as const
}

export function getPutApiUserSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.search.$put>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutApiUserSearchMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.user.search.$put(undefined, options))
    },
  })
}

export function usePutApiUserSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.search.$put>>>>
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
  const mutationDefaults = getPutApiUserSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiUserSearchMutationKey() {
  return ['api', '/api/user/search', 'POST'] as const
}

export function getPostApiUserSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.user.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.search.$post>) {
      return parseResponse(client.api.user.search.$post(args, options))
    },
  })
}

export function usePostApiUserSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.user.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUserTwoFactorRecoveryCodeUserIdQueryKey(
  args: InferRequestType<
    (typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']
  >,
) {
  return ['api', '/api/user/two-factor/recovery-code/:userId', args] as const
}

export function getApiUserTwoFactorRecoveryCodeUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserTwoFactorRecoveryCodeUserIdQueryKey>
  >({
    queryKey: getApiUserTwoFactorRecoveryCodeUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user['two-factor']['recovery-code'][':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserTwoFactorRecoveryCodeUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserTwoFactorRecoveryCodeUserIdQueryKey>
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
      ...getApiUserTwoFactorRecoveryCodeUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUserTwoFactorRecoveryCodeUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserTwoFactorRecoveryCodeUserIdQueryKey>
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
      ...getApiUserTwoFactorRecoveryCodeUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiUserTwoFactorRecoveryCodeUserIdMutationKey() {
  return ['api', '/api/user/two-factor/recovery-code/:userId', 'POST'] as const
}

export function getPostApiUserTwoFactorRecoveryCodeUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.user)['two-factor']['recovery-code'][':userId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)['two-factor']['recovery-code'][':userId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserTwoFactorRecoveryCodeUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.user)['two-factor']['recovery-code'][':userId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.user['two-factor']['recovery-code'][':userId'].$post(args, options),
      )
    },
  })
}

export function usePostApiUserTwoFactorRecoveryCodeUserId<
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
                  (typeof client.api.user)['two-factor']['recovery-code'][':userId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.user)['two-factor']['recovery-code'][':userId']['$post']
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
  const mutationDefaults = getPostApiUserTwoFactorRecoveryCodeUserIdMutationOptions<
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

export function getPutApiUserTwoFactorUserIdMutationKey() {
  return ['api', '/api/user/two-factor/:userId', 'PUT'] as const
}

export function getPutApiUserTwoFactorUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['two-factor'][':userId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiUserTwoFactorUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$put']>,
    ) {
      return parseResponse(client.api.user['two-factor'][':userId'].$put(args, options))
    },
  })
}

export function usePutApiUserTwoFactorUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)['two-factor'][':userId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiUserTwoFactorUserIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiUserTwoFactorUserIdMutationKey() {
  return ['api', '/api/user/two-factor/:userId', 'POST'] as const
}

export function getPostApiUserTwoFactorUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['two-factor'][':userId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserTwoFactorUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$post']>,
    ) {
      return parseResponse(client.api.user['two-factor'][':userId'].$post(args, options))
    },
  })
}

export function usePostApiUserTwoFactorUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)['two-factor'][':userId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserTwoFactorUserIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiUserTwoFactorUserIdMutationKey() {
  return ['api', '/api/user/two-factor/:userId', 'DELETE'] as const
}

export function getDeleteApiUserTwoFactorUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['two-factor'][':userId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserTwoFactorUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$delete']>,
    ) {
      return parseResponse(client.api.user['two-factor'][':userId'].$delete(args, options))
    },
  })
}

export function useDeleteApiUserTwoFactorUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)['two-factor'][':userId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiUserTwoFactorUserIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutApiUserVerifyEmailMutationKey() {
  return ['api', '/api/user/verify-email', 'PUT'] as const
}

export function getPutApiUserVerifyEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)['verify-email']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)['verify-email']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiUserVerifyEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.user)['verify-email']['$put']>) {
      return parseResponse(client.api.user['verify-email'].$put(args, options))
    },
  })
}

export function usePutApiUserVerifyEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)['verify-email']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user)['verify-email']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiUserVerifyEmailMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiUserVerifyEmailMutationKey() {
  return ['api', '/api/user/verify-email', 'POST'] as const
}

export function getPostApiUserVerifyEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)['verify-email']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)['verify-email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserVerifyEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.user)['verify-email']['$post']>) {
      return parseResponse(client.api.user['verify-email'].$post(args, options))
    },
  })
}

export function usePostApiUserVerifyEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)['verify-email']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user)['verify-email']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserVerifyEmailMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutApiUserVerifyRegistrationMutationKey() {
  return ['api', '/api/user/verify-registration', 'PUT'] as const
}

export function getPutApiUserVerifyRegistrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['verify-registration']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)['verify-registration']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiUserVerifyRegistrationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user)['verify-registration']['$put']>,
    ) {
      return parseResponse(client.api.user['verify-registration'].$put(args, options))
    },
  })
}

export function usePutApiUserVerifyRegistration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)['verify-registration']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user)['verify-registration']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiUserVerifyRegistrationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiUserVerifyRegistrationMutationKey() {
  return ['api', '/api/user/verify-registration', 'POST'] as const
}

export function getPostApiUserVerifyRegistrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['verify-registration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)['verify-registration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserVerifyRegistrationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user)['verify-registration']['$post']>,
    ) {
      return parseResponse(client.api.user['verify-registration'].$post(args, options))
    },
  })
}

export function usePostApiUserVerifyRegistration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)['verify-registration']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user)['verify-registration']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserVerifyRegistrationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUserUserIdQueryKey(
  args: InferRequestType<(typeof client.api.user)[':userId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user/:userId', keyArgs] as const
}

export function getApiUserUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUserIdQueryKey>
  >({
    queryKey: getApiUserUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiUserUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUserUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUserUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUserUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiUserUserIdMutationKey() {
  return ['api', '/api/user/:userId', 'PUT'] as const
}

export function getPutApiUserUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)[':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiUserUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.user)[':userId']['$put']>) {
      return parseResponse(client.api.user[':userId'].$put(args, options))
    },
  })
}

export function usePutApiUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user)[':userId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiUserUserIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiUserUserIdMutationKey() {
  return ['api', '/api/user/:userId', 'POST'] as const
}

export function getPostApiUserUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)[':userId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.user)[':userId']['$post']>) {
      return parseResponse(client.api.user[':userId'].$post(args, options))
    },
  })
}

export function usePostApiUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user)[':userId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserUserIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiUserUserIdMutationKey() {
  return ['api', '/api/user/:userId', 'DELETE'] as const
}

export function getDeleteApiUserUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.user)[':userId']['$delete']>) {
      return parseResponse(client.api.user[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteApiUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)[':userId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user)[':userId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiUserUserIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiUserUserIdMutationKey() {
  return ['api', '/api/user/:userId', 'PATCH'] as const
}

export function getPatchApiUserUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)[':userId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiUserUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.user)[':userId']['$patch']>) {
      return parseResponse(client.api.user[':userId'].$patch(args, options))
    },
  })
}

export function usePatchApiUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user)[':userId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiUserUserIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiWebauthnQueryKey(args: InferRequestType<typeof client.api.webauthn.$get>) {
  return ['api', '/api/webauthn', args] as const
}

export function getApiWebauthnQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.webauthn.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiWebauthnQueryKey>
  >({
    queryKey: getApiWebauthnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.webauthn.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiWebauthn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.webauthn.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebauthnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiWebauthnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiWebauthn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.webauthn.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebauthnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiWebauthnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiWebauthnMutationKey() {
  return ['api', '/api/webauthn', 'DELETE'] as const
}

export function getDeleteApiWebauthnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.webauthn.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiWebauthnMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.webauthn.$delete>) {
      return parseResponse(client.api.webauthn.$delete(args, options))
    },
  })
}

export function useDeleteApiWebauthn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.api.webauthn.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiWebauthnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiWebauthnAssertMutationKey() {
  return ['api', '/api/webauthn/assert', 'POST'] as const
}

export function getPostApiWebauthnAssertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.assert.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.webauthn.assert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWebauthnAssertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.webauthn.assert.$post>) {
      return parseResponse(client.api.webauthn.assert.$post(args, options))
    },
  })
}

export function usePostApiWebauthnAssert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.assert.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.webauthn.assert.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiWebauthnAssertMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiWebauthnImportMutationKey() {
  return ['api', '/api/webauthn/import', 'POST'] as const
}

export function getPostApiWebauthnImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.webauthn.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWebauthnImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.webauthn.import.$post>) {
      return parseResponse(client.api.webauthn.import.$post(args, options))
    },
  })
}

export function usePostApiWebauthnImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.import.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.webauthn.import.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiWebauthnImportMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiWebauthnLoginMutationKey() {
  return ['api', '/api/webauthn/login', 'POST'] as const
}

export function getPostApiWebauthnLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.login.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.webauthn.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWebauthnLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.webauthn.login.$post>) {
      return parseResponse(client.api.webauthn.login.$post(args, options))
    },
  })
}

export function usePostApiWebauthnLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.login.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.webauthn.login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiWebauthnLoginMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiWebauthnRegisterCompleteMutationKey() {
  return ['api', '/api/webauthn/register/complete', 'POST'] as const
}

export function getPostApiWebauthnRegisterCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.webauthn.register.complete.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.webauthn.register.complete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWebauthnRegisterCompleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.webauthn.register.complete.$post>) {
      return parseResponse(client.api.webauthn.register.complete.$post(args, options))
    },
  })
}

export function usePostApiWebauthnRegisterComplete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.webauthn.register.complete.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.webauthn.register.complete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiWebauthnRegisterCompleteMutationOptions<
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

export function getPostApiWebauthnRegisterStartMutationKey() {
  return ['api', '/api/webauthn/register/start', 'POST'] as const
}

export function getPostApiWebauthnRegisterStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.register.start.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.webauthn.register.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWebauthnRegisterStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.webauthn.register.start.$post>) {
      return parseResponse(client.api.webauthn.register.start.$post(args, options))
    },
  })
}

export function usePostApiWebauthnRegisterStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.webauthn.register.start.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.webauthn.register.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiWebauthnRegisterStartMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiWebauthnStartMutationKey() {
  return ['api', '/api/webauthn/start', 'POST'] as const
}

export function getPostApiWebauthnStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.start.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.webauthn.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWebauthnStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.webauthn.start.$post>) {
      return parseResponse(client.api.webauthn.start.$post(args, options))
    },
  })
}

export function usePostApiWebauthnStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.start.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.webauthn.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiWebauthnStartMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiWebauthnIdQueryKey(
  args: InferRequestType<(typeof client.api.webauthn)[':id']['$get']>,
) {
  return ['api', '/api/webauthn/:id', args] as const
}

export function getApiWebauthnIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.webauthn)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.webauthn)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.webauthn)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWebauthnIdQueryKey>
  >({
    queryKey: getApiWebauthnIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.webauthn[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiWebauthnId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.webauthn)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.webauthn)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.webauthn)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebauthnIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiWebauthnIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiWebauthnId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.webauthn)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.webauthn)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.webauthn)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebauthnIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiWebauthnIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiWebauthnIdMutationKey() {
  return ['api', '/api/webauthn/:id', 'DELETE'] as const
}

export function getDeleteApiWebauthnIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.webauthn)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.webauthn)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiWebauthnIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.webauthn)[':id']['$delete']>) {
      return parseResponse(client.api.webauthn[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiWebauthnId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.webauthn)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.webauthn)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiWebauthnIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiWebhookQueryKey() {
  return ['api', '/api/webhook'] as const
}

export function getApiWebhookQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiWebhookQueryKey>
  >({
    queryKey: getApiWebhookQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.webhook.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiWebhook<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebhookQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiWebhookQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiWebhook<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebhookQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiWebhookQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiWebhookMutationKey() {
  return ['api', '/api/webhook', 'POST'] as const
}

export function getPostApiWebhookMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.webhook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWebhookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.webhook.$post>) {
      return parseResponse(client.api.webhook.$post(args, options))
    },
  })
}

export function usePostApiWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.webhook.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiWebhookMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiWebhookSearchQueryKey(
  args: InferRequestType<typeof client.api.webhook.search.$get>,
) {
  return ['api', '/api/webhook/search', args] as const
}

export function getApiWebhookSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.webhook.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiWebhookSearchQueryKey>
  >({
    queryKey: getApiWebhookSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.webhook.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiWebhookSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.webhook.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebhookSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiWebhookSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiWebhookSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.webhook.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebhookSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiWebhookSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiWebhookSearchMutationKey() {
  return ['api', '/api/webhook/search', 'POST'] as const
}

export function getPostApiWebhookSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.webhook.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWebhookSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.webhook.search.$post>) {
      return parseResponse(client.api.webhook.search.$post(args, options))
    },
  })
}

export function usePostApiWebhookSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.webhook.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiWebhookSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiWebhookWebhookIdQueryKey(
  args: InferRequestType<(typeof client.api.webhook)[':webhookId']['$get']>,
) {
  return ['api', '/api/webhook/:webhookId', args] as const
}

export function getApiWebhookWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.webhook)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWebhookWebhookIdQueryKey>
  >({
    queryKey: getApiWebhookWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.webhook[':webhookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiWebhookWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.webhook)[':webhookId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebhookWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiWebhookWebhookIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiWebhookWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.webhook)[':webhookId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebhookWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiWebhookWebhookIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiWebhookWebhookIdMutationKey() {
  return ['api', '/api/webhook/:webhookId', 'PUT'] as const
}

export function getPutApiWebhookWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.webhook)[':webhookId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiWebhookWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.webhook)[':webhookId']['$put']>) {
      return parseResponse(client.api.webhook[':webhookId'].$put(args, options))
    },
  })
}

export function usePutApiWebhookWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.webhook)[':webhookId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiWebhookWebhookIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiWebhookWebhookIdMutationKey() {
  return ['api', '/api/webhook/:webhookId', 'POST'] as const
}

export function getPostApiWebhookWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.webhook)[':webhookId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWebhookWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.webhook)[':webhookId']['$post']>) {
      return parseResponse(client.api.webhook[':webhookId'].$post(args, options))
    },
  })
}

export function usePostApiWebhookWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.webhook)[':webhookId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiWebhookWebhookIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiWebhookWebhookIdMutationKey() {
  return ['api', '/api/webhook/:webhookId', 'DELETE'] as const
}

export function getDeleteApiWebhookWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.webhook)[':webhookId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiWebhookWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.webhook)[':webhookId']['$delete']>) {
      return parseResponse(client.api.webhook[':webhookId'].$delete(args, options))
    },
  })
}

export function useDeleteApiWebhookWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.webhook)[':webhookId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiWebhookWebhookIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiWebhookWebhookIdMutationKey() {
  return ['api', '/api/webhook/:webhookId', 'PATCH'] as const
}

export function getPatchApiWebhookWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.webhook)[':webhookId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiWebhookWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.webhook)[':webhookId']['$patch']>) {
      return parseResponse(client.api.webhook[':webhookId'].$patch(args, options))
    },
  })
}

export function usePatchApiWebhookWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.webhook)[':webhookId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiWebhookWebhookIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOauth2DeviceApproveMutationKey() {
  return ['oauth2', '/oauth2/device/approve', 'POST'] as const
}

export function getPostOauth2DeviceApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.approve.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.oauth2.device.approve.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2DeviceApproveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.device.approve.$post>) {
      return parseResponse(client.oauth2.device.approve.$post(args, options))
    },
  })
}

export function usePostOauth2DeviceApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.approve.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth2.device.approve.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauth2DeviceApproveMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOauth2DeviceUserCodeMutationKey() {
  return ['oauth2', '/oauth2/device/user-code', 'POST'] as const
}

export function getPostOauth2DeviceUserCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2.device)['user-code']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2DeviceUserCodeMutationKey(),
    async mutationFn() {
      return parseResponse(client.oauth2.device['user-code'].$post(undefined, options))
    },
  })
}

export function usePostOauth2DeviceUserCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.oauth2.device)['user-code']['$post']>>
            >
          >
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
  const mutationDefaults = getPostOauth2DeviceUserCodeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOauth2DeviceValidateQueryKey(
  args: InferRequestType<typeof client.oauth2.device.validate.$get>,
) {
  return ['oauth2', '/oauth2/device/validate', args] as const
}

export function getOauth2DeviceValidateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth2.device.validate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.validate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth2DeviceValidateQueryKey>
  >({
    queryKey: getOauth2DeviceValidateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth2.device.validate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOauth2DeviceValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth2.device.validate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.validate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauth2DeviceValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauth2DeviceValidateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauth2DeviceValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth2.device.validate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.validate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauth2DeviceValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauth2DeviceValidateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOauth2DeviceAuthorizeMutationKey() {
  return ['oauth2', '/oauth2/device_authorize', 'POST'] as const
}

export function getPostOauth2DeviceAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device_authorize.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.oauth2.device_authorize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2DeviceAuthorizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.device_authorize.$post>) {
      return parseResponse(client.oauth2.device_authorize.$post(args, options))
    },
  })
}

export function usePostOauth2DeviceAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device_authorize.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth2.device_authorize.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauth2DeviceAuthorizeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOauth2IntrospectMutationKey() {
  return ['oauth2', '/oauth2/introspect', 'POST'] as const
}

export function getPostOauth2IntrospectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.introspect.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth2.introspect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2IntrospectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.introspect.$post>) {
      return parseResponse(client.oauth2.introspect.$post(args, options))
    },
  })
}

export function usePostOauth2Introspect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.introspect.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth2.introspect.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauth2IntrospectMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOauth2TokenMutationKey() {
  return ['oauth2', '/oauth2/token', 'POST'] as const
}

export function getPostOauth2TokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth2.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2TokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.token.$post>) {
      return parseResponse(client.oauth2.token.$post(args, options))
    },
  })
}

export function usePostOauth2Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth2.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauth2TokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOauth2UserinfoQueryKey() {
  return ['oauth2', '/oauth2/userinfo'] as const
}

export function getOauth2UserinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauth2UserinfoQueryKey>
  >({
    queryKey: getOauth2UserinfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth2.userinfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOauth2Userinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauth2UserinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauth2UserinfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauth2Userinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauth2UserinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauth2UserinfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
