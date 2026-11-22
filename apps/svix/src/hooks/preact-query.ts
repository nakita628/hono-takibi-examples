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

export function getApiV1HealthPingQueryKey() {
  return ['api', '/api/v1/health/ping'] as const
}

export function getApiV1HealthPingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HealthPingQueryKey>
  >({
    queryKey: getApiV1HealthPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.health.ping.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1HealthPing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1HealthPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1HealthPingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1HealthPing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1HealthPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1HealthPingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHeadApiV1HealthPingMutationKey() {
  return ['api', '/api/v1/health/ping', 'HEAD'] as const
}

export function getHeadApiV1HealthPingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$head>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getHeadApiV1HealthPingMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.health.ping.$head(undefined, options))
    },
  })
}

export function useHeadApiV1HealthPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$head>>>
            >
          >
        | undefined,
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
  const mutationDefaults = getHeadApiV1HealthPingMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1HealthQueryKey() {
  return ['api', '/api/v1/health'] as const
}

export function getApiV1HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HealthQueryKey>
  >({
    queryKey: getApiV1HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1HealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1HealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1HealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1HealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHeadApiV1HealthMutationKey() {
  return ['api', '/api/v1/health', 'HEAD'] as const
}

export function getHeadApiV1HealthMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$head>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getHeadApiV1HealthMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.health.$head(undefined, options))
    },
  })
}

export function useHeadApiV1Health<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$head>>>>
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
  const mutationDefaults = getHeadApiV1HealthMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1AuthLogoutMutationKey() {
  return ['api', '/api/v1/auth/logout', 'POST'] as const
}

export function getPostApiV1AuthLogoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.auth.logout.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.auth.logout.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AuthLogoutMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.auth.logout.$post>) {
      return parseResponse(client.api.v1.auth.logout.$post(args, options))
    },
  })
}

export function usePostApiV1AuthLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.auth.logout.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.v1.auth.logout.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AuthLogoutMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1AuthAppPortalAccessAppIdMutationKey() {
  return ['api', '/api/v1/auth/app-portal-access/:app_id', 'POST'] as const
}

export function getPostApiV1AuthAppPortalAccessAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.auth)['app-portal-access'][':app_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.auth)['app-portal-access'][':app_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AuthAppPortalAccessAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.auth)['app-portal-access'][':app_id']['$post']>,
    ) {
      return parseResponse(client.api.v1.auth['app-portal-access'][':app_id'].$post(args, options))
    },
  })
}

export function usePostApiV1AuthAppPortalAccessAppId<
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
                ReturnType<(typeof client.api.v1.auth)['app-portal-access'][':app_id']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.auth)['app-portal-access'][':app_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AuthAppPortalAccessAppIdMutationOptions<
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

export function getApiV1AppQueryKey(args: InferRequestType<typeof client.api.v1.app.$get>) {
  return ['api', '/api/v1/app', args] as const
}

export function getApiV1AppQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.app.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1AppQueryKey>
  >({
    queryKey: getApiV1AppQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1App<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.app.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AppQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1App<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.app.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AppQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1AppMutationKey() {
  return ['api', '/api/v1/app', 'POST'] as const
}

export function getPostApiV1AppMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.v1.app.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.app.$post>) {
      return parseResponse(client.api.v1.app.$post(args, options))
    },
  })
}

export function usePostApiV1App<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.app.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AppMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AppAppIdQueryKey() {
  return ['api', '/api/v1/app/:app_id'] as const
}

export function getApiV1AppAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdQueryKey>
  >({
    queryKey: getApiV1AppAppIdQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AppAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AppAppIdQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AppAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AppAppIdQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV1AppAppIdMutationKey() {
  return ['api', '/api/v1/app/:app_id', 'PUT'] as const
}

export function getPutApiV1AppAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AppAppIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.app)[':app_id']['$put']>) {
      return parseResponse(client.api.v1.app[':app_id'].$put(args, options))
    },
  })
}

export function usePutApiV1AppAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.app)[':app_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1AppAppIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1AppAppIdMutationKey() {
  return ['api', '/api/v1/app/:app_id', 'DELETE'] as const
}

export function getDeleteApiV1AppAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AppAppIdMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.app[':app_id'].$delete(undefined, options))
    },
  })
}

export function useDeleteApiV1AppAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$delete']>>
              >
            >
          >
        | undefined,
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
  const mutationDefaults = getDeleteApiV1AppAppIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApiV1AppAppIdMutationKey() {
  return ['api', '/api/v1/app/:app_id', 'PATCH'] as const
}

export function getPatchApiV1AppAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AppAppIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.app)[':app_id']['$patch']>) {
      return parseResponse(client.api.v1.app[':app_id'].$patch(args, options))
    },
  })
}

export function usePatchApiV1AppAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.app)[':app_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AppAppIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AppAppIdEndpointQueryKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>,
) {
  return ['api', '/api/v1/app/:app_id/endpoint', args] as const
}

export function getApiV1AppAppIdEndpointQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointQueryKey>
  >({
    queryKey: getApiV1AppAppIdEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AppAppIdEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdEndpointQueryKey>
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
      ...getApiV1AppAppIdEndpointQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AppAppIdEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdEndpointQueryKey>
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
      ...getApiV1AppAppIdEndpointQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AppAppIdEndpointMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint', 'POST'] as const
}

export function getPostApiV1AppAppIdEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppAppIdEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$post']>,
    ) {
      return parseResponse(client.api.v1.app[':app_id'].endpoint.$post(args, options))
    },
  })
}

export function usePostApiV1AppAppIdEndpoint<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AppAppIdEndpointMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AppAppIdEndpointEndpointIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>,
) {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id', args] as const
}

export function getApiV1AppAppIdEndpointEndpointIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdQueryKey>
  >({
    queryKey: getApiV1AppAppIdEndpointEndpointIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AppAppIdEndpointEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdQueryKey>
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
      ...getApiV1AppAppIdEndpointEndpointIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AppAppIdEndpointEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdQueryKey>
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
      ...getApiV1AppAppIdEndpointEndpointIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1AppAppIdEndpointEndpointIdMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id', 'PUT'] as const
}

export function getPutApiV1AppAppIdEndpointEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AppAppIdEndpointEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1AppAppIdEndpointEndpointId<
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
                  (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1AppAppIdEndpointEndpointIdMutationOptions<
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

export function getDeleteApiV1AppAppIdEndpointEndpointIdMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id', 'DELETE'] as const
}

export function getDeleteApiV1AppAppIdEndpointEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AppAppIdEndpointEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AppAppIdEndpointEndpointId<
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
                  ReturnType<
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$delete']
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
  const mutationDefaults = getDeleteApiV1AppAppIdEndpointEndpointIdMutationOptions<
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

export function getPatchApiV1AppAppIdEndpointEndpointIdMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id', 'PATCH'] as const
}

export function getPatchApiV1AppAppIdEndpointEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AppAppIdEndpointEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AppAppIdEndpointEndpointId<
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
                  (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$patch']
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
  const mutationDefaults = getPatchApiV1AppAppIdEndpointEndpointIdMutationOptions<
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

export function getApiV1AppAppIdEndpointEndpointIdSecretQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
  >,
) {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/secret', args] as const
}

export function getApiV1AppAppIdEndpointEndpointIdSecretQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdSecretQueryKey>
  >({
    queryKey: getApiV1AppAppIdEndpointEndpointIdSecretQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AppAppIdEndpointEndpointIdSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdSecretQueryKey>
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
      ...getApiV1AppAppIdEndpointEndpointIdSecretQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AppAppIdEndpointEndpointIdSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdSecretQueryKey>
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
      ...getApiV1AppAppIdEndpointEndpointIdSecretQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AppAppIdEndpointEndpointIdSecretRotateMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/secret/rotate', 'POST'] as const
}

export function getPostApiV1AppAppIdEndpointEndpointIdSecretRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppAppIdEndpointEndpointIdSecretRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.rotate.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AppAppIdEndpointEndpointIdSecretRotate<
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
                  (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['$post']
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
  const mutationDefaults = getPostApiV1AppAppIdEndpointEndpointIdSecretRotateMutationOptions<
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

export function getApiV1AppAppIdEndpointEndpointIdStatsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
  >,
) {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/stats', args] as const
}

export function getApiV1AppAppIdEndpointEndpointIdStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdStatsQueryKey>
  >({
    queryKey: getApiV1AppAppIdEndpointEndpointIdStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AppAppIdEndpointEndpointIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdStatsQueryKey>
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
      ...getApiV1AppAppIdEndpointEndpointIdStatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AppAppIdEndpointEndpointIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdStatsQueryKey>
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
      ...getApiV1AppAppIdEndpointEndpointIdStatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AppAppIdEndpointEndpointIdSendExampleMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/send-example', 'POST'] as const
}

export function getPostApiV1AppAppIdEndpointEndpointIdSendExampleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['send-example']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['send-example']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppAppIdEndpointEndpointIdSendExampleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['send-example']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id']['send-example'].$post(args, options),
      )
    },
  })
}

export function usePostApiV1AppAppIdEndpointEndpointIdSendExample<
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
                  (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['send-example']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['send-example']['$post']
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
  const mutationDefaults = getPostApiV1AppAppIdEndpointEndpointIdSendExampleMutationOptions<
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

export function getPostApiV1AppAppIdEndpointEndpointIdRecoverMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/recover', 'POST'] as const
}

export function getPostApiV1AppAppIdEndpointEndpointIdRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppAppIdEndpointEndpointIdRecoverMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].recover.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AppAppIdEndpointEndpointIdRecover<
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
                  (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['$post']
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
  const mutationDefaults = getPostApiV1AppAppIdEndpointEndpointIdRecoverMutationOptions<
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

export function getApiV1AppAppIdEndpointEndpointIdHeadersQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
  >,
) {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/headers', args] as const
}

export function getApiV1AppAppIdEndpointEndpointIdHeadersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdHeadersQueryKey>
  >({
    queryKey: getApiV1AppAppIdEndpointEndpointIdHeadersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AppAppIdEndpointEndpointIdHeaders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdHeadersQueryKey>
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
      ...getApiV1AppAppIdEndpointEndpointIdHeadersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AppAppIdEndpointEndpointIdHeaders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdHeadersQueryKey>
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
      ...getApiV1AppAppIdEndpointEndpointIdHeadersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1AppAppIdEndpointEndpointIdHeadersMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/headers', 'PUT'] as const
}

export function getPutApiV1AppAppIdEndpointEndpointIdHeadersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AppAppIdEndpointEndpointIdHeadersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.$put(args, options),
      )
    },
  })
}

export function usePutApiV1AppAppIdEndpointEndpointIdHeaders<
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
                  ReturnType<
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$put']
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
  const mutationDefaults = getPutApiV1AppAppIdEndpointEndpointIdHeadersMutationOptions<
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

export function getPatchApiV1AppAppIdEndpointEndpointIdHeadersMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/headers', 'PATCH'] as const
}

export function getPatchApiV1AppAppIdEndpointEndpointIdHeadersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AppAppIdEndpointEndpointIdHeadersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AppAppIdEndpointEndpointIdHeaders<
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
                  ReturnType<
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$patch']
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
  const mutationDefaults = getPatchApiV1AppAppIdEndpointEndpointIdHeadersMutationOptions<
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

export function getApiV1EventTypeQueryKey(
  args: InferRequestType<(typeof client.api.v1)['event-type']['$get']>,
) {
  return ['api', '/api/v1/event-type', args] as const
}

export function getApiV1EventTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['event-type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['event-type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['event-type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EventTypeQueryKey>
  >({
    queryKey: getApiV1EventTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['event-type'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1EventType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['event-type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['event-type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['event-type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EventTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1EventTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1EventType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['event-type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['event-type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['event-type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EventTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1EventTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1EventTypeMutationKey() {
  return ['api', '/api/v1/event-type', 'POST'] as const
}

export function getPostApiV1EventTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['event-type']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['event-type']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EventTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['event-type']['$post']>) {
      return parseResponse(client.api.v1['event-type'].$post(args, options))
    },
  })
}

export function usePostApiV1EventType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['event-type']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['event-type']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1EventTypeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1EventTypeEventTypeNameQueryKey(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>,
) {
  return ['api', '/api/v1/event-type/:event_type_name', args] as const
}

export function getApiV1EventTypeEventTypeNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EventTypeEventTypeNameQueryKey>
  >({
    queryKey: getApiV1EventTypeEventTypeNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['event-type'][':event_type_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1EventTypeEventTypeName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EventTypeEventTypeNameQueryKey>
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
      ...getApiV1EventTypeEventTypeNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1EventTypeEventTypeName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EventTypeEventTypeNameQueryKey>
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
      ...getApiV1EventTypeEventTypeNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1EventTypeEventTypeNameMutationKey() {
  return ['api', '/api/v1/event-type/:event_type_name', 'PUT'] as const
}

export function getPutApiV1EventTypeEventTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EventTypeEventTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$put']>,
    ) {
      return parseResponse(client.api.v1['event-type'][':event_type_name'].$put(args, options))
    },
  })
}

export function usePutApiV1EventTypeEventTypeName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1EventTypeEventTypeNameMutationOptions<
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

export function getDeleteApiV1EventTypeEventTypeNameMutationKey() {
  return ['api', '/api/v1/event-type/:event_type_name', 'DELETE'] as const
}

export function getDeleteApiV1EventTypeEventTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1EventTypeEventTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$delete']>,
    ) {
      return parseResponse(client.api.v1['event-type'][':event_type_name'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1EventTypeEventTypeName<
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
                  ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1EventTypeEventTypeNameMutationOptions<
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

export function getPatchApiV1EventTypeEventTypeNameMutationKey() {
  return ['api', '/api/v1/event-type/:event_type_name', 'PATCH'] as const
}

export function getPatchApiV1EventTypeEventTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1EventTypeEventTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$patch']>,
    ) {
      return parseResponse(client.api.v1['event-type'][':event_type_name'].$patch(args, options))
    },
  })
}

export function usePatchApiV1EventTypeEventTypeName<
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
                ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1EventTypeEventTypeNameMutationOptions<
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

export function getApiV1AppAppIdMsgQueryKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>,
) {
  return ['api', '/api/v1/app/:app_id/msg', args] as const
}

export function getApiV1AppAppIdMsgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdMsgQueryKey>
  >({
    queryKey: getApiV1AppAppIdMsgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AppAppIdMsg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdMsgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AppAppIdMsgQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AppAppIdMsg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdMsgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AppAppIdMsgQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1AppAppIdMsgMutationKey() {
  return ['api', '/api/v1/app/:app_id/msg', 'POST'] as const
}

export function getPostApiV1AppAppIdMsgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppAppIdMsgMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$post']>,
    ) {
      return parseResponse(client.api.v1.app[':app_id'].msg.$post(args, options))
    },
  })
}

export function usePostApiV1AppAppIdMsg<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AppAppIdMsgMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AppAppIdMsgMsgIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>,
) {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id', args] as const
}

export function getApiV1AppAppIdMsgMsgIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdMsgMsgIdQueryKey>
  >({
    queryKey: getApiV1AppAppIdMsgMsgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AppAppIdMsgMsgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdMsgMsgIdQueryKey>
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
      ...getApiV1AppAppIdMsgMsgIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AppAppIdMsgMsgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdMsgMsgIdQueryKey>
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
      ...getApiV1AppAppIdMsgMsgIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV1AppAppIdMsgMsgIdContentMutationKey() {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/content', 'DELETE'] as const
}

export function getDeleteApiV1AppAppIdMsgMsgIdContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AppAppIdMsgMsgIdContentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].content.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AppAppIdMsgMsgIdContent<
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
                  (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['$delete']
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
  const mutationDefaults = getDeleteApiV1AppAppIdMsgMsgIdContentMutationOptions<
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

export function getPostApiV1AppAppIdMsgBulkExpungeMutationKey() {
  return ['api', '/api/v1/app/:app_id/msg/bulk-expunge', 'POST'] as const
}

export function getPostApiV1AppAppIdMsgBulkExpungeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['bulk-expunge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['bulk-expunge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppAppIdMsgBulkExpungeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['bulk-expunge']['$post']>,
    ) {
      return parseResponse(client.api.v1.app[':app_id'].msg['bulk-expunge'].$post(args, options))
    },
  })
}

export function usePostApiV1AppAppIdMsgBulkExpunge<
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
                ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['bulk-expunge']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['bulk-expunge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AppAppIdMsgBulkExpungeMutationOptions<
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

export function getApiV1AppAppIdMsgMsgIdAttemptAttemptIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
  >,
) {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/attempt/:attempt_id', args] as const
}

export function getApiV1AppAppIdMsgMsgIdAttemptAttemptIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdMsgMsgIdAttemptAttemptIdQueryKey>
  >({
    queryKey: getApiV1AppAppIdMsgMsgIdAttemptAttemptIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AppAppIdMsgMsgIdAttemptAttemptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdMsgMsgIdAttemptAttemptIdQueryKey>
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
      ...getApiV1AppAppIdMsgMsgIdAttemptAttemptIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AppAppIdMsgMsgIdAttemptAttemptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdMsgMsgIdAttemptAttemptIdQueryKey>
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
      ...getApiV1AppAppIdMsgMsgIdAttemptAttemptIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentMutationKey() {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/attempt/:attempt_id/content', 'DELETE'] as const
}

export function getDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].content.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContent<
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
                  (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['$delete']
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
  const mutationDefaults = getDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentMutationOptions<
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

export function getApiV1AppAppIdMsgMsgIdEndpointQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']
  >,
) {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/endpoint', args] as const
}

export function getApiV1AppAppIdMsgMsgIdEndpointQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdMsgMsgIdEndpointQueryKey>
  >({
    queryKey: getApiV1AppAppIdMsgMsgIdEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].endpoint.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AppAppIdMsgMsgIdEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdMsgMsgIdEndpointQueryKey>
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
      ...getApiV1AppAppIdMsgMsgIdEndpointQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AppAppIdMsgMsgIdEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdMsgMsgIdEndpointQueryKey>
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
      ...getApiV1AppAppIdMsgMsgIdEndpointQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendMutationKey() {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/endpoint/:endpoint_id/resend', 'POST'] as const
}

export function getPostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].endpoint[':endpoint_id'].resend.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResend<
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
                  (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['$post']
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
  const mutationDefaults = getPostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendMutationOptions<
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

export function getApiV1AppAppIdEndpointEndpointIdMsgQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
  >,
) {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/msg', args] as const
}

export function getApiV1AppAppIdEndpointEndpointIdMsgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdMsgQueryKey>
  >({
    queryKey: getApiV1AppAppIdEndpointEndpointIdMsgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].msg.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AppAppIdEndpointEndpointIdMsg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdMsgQueryKey>
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
      ...getApiV1AppAppIdEndpointEndpointIdMsgQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AppAppIdEndpointEndpointIdMsg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdMsgQueryKey>
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
      ...getApiV1AppAppIdEndpointEndpointIdMsgQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AppAppIdAttemptEndpointEndpointIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
  >,
) {
  return ['api', '/api/v1/app/:app_id/attempt/endpoint/:endpoint_id', args] as const
}

export function getApiV1AppAppIdAttemptEndpointEndpointIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdAttemptEndpointEndpointIdQueryKey>
  >({
    queryKey: getApiV1AppAppIdAttemptEndpointEndpointIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].attempt.endpoint[':endpoint_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AppAppIdAttemptEndpointEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdAttemptEndpointEndpointIdQueryKey>
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
      ...getApiV1AppAppIdAttemptEndpointEndpointIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AppAppIdAttemptEndpointEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdAttemptEndpointEndpointIdQueryKey>
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
      ...getApiV1AppAppIdAttemptEndpointEndpointIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AppAppIdAttemptMsgMsgIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']
  >,
) {
  return ['api', '/api/v1/app/:app_id/attempt/msg/:msg_id', args] as const
}

export function getApiV1AppAppIdAttemptMsgMsgIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdAttemptMsgMsgIdQueryKey>
  >({
    queryKey: getApiV1AppAppIdAttemptMsgMsgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].attempt.msg[':msg_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AppAppIdAttemptMsgMsgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdAttemptMsgMsgIdQueryKey>
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
      ...getApiV1AppAppIdAttemptMsgMsgIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AppAppIdAttemptMsgMsgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppAppIdAttemptMsgMsgIdQueryKey>
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
      ...getApiV1AppAppIdAttemptMsgMsgIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
