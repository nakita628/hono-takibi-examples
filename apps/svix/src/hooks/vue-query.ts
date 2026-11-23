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

export function getApiV1HealthPingQueryKey() {
  return ['api', '/api/v1/health/ping'] as const
}

export function getApiV1HealthPingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1HealthPingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.health.ping.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1HealthPing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$get>>>
            >
          >,
          ReturnType<typeof getApiV1HealthPingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HealthPingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1HealthPingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.health.ping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV1HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
          >,
          ReturnType<typeof getApiV1HealthQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$head>>>>
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV1AppQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.app.$get>>,
) {
  return ['api', '/api/v1/app', toValue(args)] as const
}

export function getApiV1AppQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.app.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1App<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.app.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$get>>>>
          >,
          ReturnType<typeof getApiV1AppQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1AppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.app.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getApiV1AppAppIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.app)[':app_id']['$get']>>,
) {
  return ['api', '/api/v1/app/:app_id', toValue(args)] as const
}

export function getApiV1AppAppIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.app)[':app_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.app)[':app_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.app)[':app_id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
    InferRequestType<(typeof client.api.v1.app)[':app_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AppAppIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.app)[':app_id']['$delete']>) {
      return parseResponse(client.api.v1.app[':app_id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1AppAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
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
          InferRequestType<(typeof client.api.v1.app)[':app_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>
  >,
) {
  return ['api', '/api/v1/app/:app_id/endpoint', toValue(args)] as const
}

export function getApiV1AppAppIdEndpointQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdEndpointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdEndpointQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdEndpointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].endpoint.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>
  >,
) {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id', toValue(args)] as const
}

export function getApiV1AppAppIdEndpointEndpointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
    >
  >,
) {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/secret', toValue(args)] as const
}

export function getApiV1AppAppIdEndpointEndpointIdSecretQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdSecretQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdSecretQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdSecretQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdSecretQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
    >
  >,
) {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/stats', toValue(args)] as const
}

export function getApiV1AppAppIdEndpointEndpointIdStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdStatsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
    >
  >,
) {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/headers', toValue(args)] as const
}

export function getApiV1AppAppIdEndpointEndpointIdHeadersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdHeadersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdHeadersQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdHeadersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdHeadersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['event-type']['$get']>>,
) {
  return ['api', '/api/v1/event-type', toValue(args)] as const
}

export function getApiV1EventTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['event-type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EventTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['event-type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EventType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['event-type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['event-type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['event-type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['event-type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1EventTypeQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['event-type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EventTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EventTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['event-type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['event-type']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['event-type']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>
  >,
) {
  return ['api', '/api/v1/event-type/:event_type_name', toValue(args)] as const
}

export function getApiV1EventTypeEventTypeNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EventTypeEventTypeNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['event-type'][':event_type_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>
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
                  ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EventTypeEventTypeNameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EventTypeEventTypeNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EventTypeEventTypeNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['event-type'][':event_type_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>>,
) {
  return ['api', '/api/v1/app/:app_id/msg', toValue(args)] as const
}

export function getApiV1AppAppIdMsgQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdMsgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdMsgQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdMsgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdMsgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].msg.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>
  >,
) {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id', toValue(args)] as const
}

export function getApiV1AppAppIdMsgMsgIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdMsgMsgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdMsgMsgIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdMsgMsgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdMsgMsgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
    >
  >,
) {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/attempt/:attempt_id', toValue(args)] as const
}

export function getApiV1AppAppIdMsgMsgIdAttemptAttemptIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdMsgMsgIdAttemptAttemptIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdMsgMsgIdAttemptAttemptIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdMsgMsgIdAttemptAttemptIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdMsgMsgIdAttemptAttemptIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']>
  >,
) {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/endpoint', toValue(args)] as const
}

export function getApiV1AppAppIdMsgMsgIdEndpointQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdMsgMsgIdEndpointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].endpoint.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']>
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
                    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdMsgMsgIdEndpointQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdMsgMsgIdEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdMsgMsgIdEndpointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].endpoint.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
    >
  >,
) {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/msg', toValue(args)] as const
}

export function getApiV1AppAppIdEndpointEndpointIdMsgQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdMsgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].msg.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdMsgQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdMsgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdMsgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].msg.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AppAppIdAttemptEndpointEndpointIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
    >
  >,
) {
  return ['api', '/api/v1/app/:app_id/attempt/endpoint/:endpoint_id', toValue(args)] as const
}

export function getApiV1AppAppIdAttemptEndpointEndpointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdAttemptEndpointEndpointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].attempt.endpoint[':endpoint_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdAttemptEndpointEndpointIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdAttemptEndpointEndpointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdAttemptEndpointEndpointIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].attempt.endpoint[':endpoint_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AppAppIdAttemptMsgMsgIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']>
  >,
) {
  return ['api', '/api/v1/app/:app_id/attempt/msg/:msg_id', toValue(args)] as const
}

export function getApiV1AppAppIdAttemptMsgMsgIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdAttemptMsgMsgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].attempt.msg[':msg_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']>
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
                    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdAttemptMsgMsgIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdAttemptMsgMsgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdAttemptMsgMsgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].attempt.msg[':msg_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
