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

export function getApiAlertLogQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['alert-log']['$get']>>,
) {
  return ['api', '/api/alert-log', toValue(args)] as const
}

export function getApiAlertLogQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['alert-log']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlertLogQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['alert-log'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlertLog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-log']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['alert-log']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-log']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-log']['$get']>>>
            >
          >,
          ReturnType<typeof getApiAlertLogQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-log']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlertLogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlertLogQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['alert-log'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAlertLogStatusCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['alert-log-status-code']['$get']>>,
) {
  return ['api', '/api/alert-log-status-code', toValue(args)] as const
}

export function getApiAlertLogStatusCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['alert-log-status-code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlertLogStatusCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['alert-log-status-code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlertLogStatusCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['alert-log-status-code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['alert-log-status-code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['alert-log-status-code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['alert-log-status-code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAlertLogStatusCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['alert-log-status-code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlertLogStatusCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlertLogStatusCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['alert-log-status-code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAlertLogStatusCodeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['alert-log-status-code'][':id']['$get']>
  >,
) {
  return ['api', '/api/alert-log-status-code/:id', toValue(args)] as const
}

export function getApiAlertLogStatusCodeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['alert-log-status-code'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlertLogStatusCodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['alert-log-status-code'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlertLogStatusCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['alert-log-status-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['alert-log-status-code'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['alert-log-status-code'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['alert-log-status-code'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAlertLogStatusCodeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['alert-log-status-code'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlertLogStatusCodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlertLogStatusCodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['alert-log-status-code'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAlertLogIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['alert-log'][':id']['$get']>>,
) {
  return ['api', '/api/alert-log/:id', toValue(args)] as const
}

export function getApiAlertLogIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['alert-log'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlertLogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['alert-log'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlertLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-log'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['alert-log'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['alert-log'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['alert-log'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAlertLogIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-log'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlertLogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlertLogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['alert-log'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAlertServiceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['alert-service']['$get']>>,
) {
  return ['api', '/api/alert-service', toValue(args)] as const
}

export function getApiAlertServiceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['alert-service']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlertServiceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['alert-service'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlertService<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-service']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['alert-service']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['alert-service']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['alert-service']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAlertServiceQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-service']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlertServiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlertServiceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['alert-service'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiAlertServiceMutationKey() {
  return ['api', '/api/alert-service', 'POST'] as const
}

export function getPostApiAlertServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-service']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['alert-service']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAlertServiceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['alert-service']['$post']>) {
      return parseResponse(client.api['alert-service'].$post(args, options))
    },
  })
}

export function usePostApiAlertService<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['alert-service']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['alert-service']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAlertServiceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiAlertServiceTransportCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['alert-service-transport-code']['$get']>
  >,
) {
  return ['api', '/api/alert-service-transport-code', toValue(args)] as const
}

export function getApiAlertServiceTransportCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['alert-service-transport-code']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlertServiceTransportCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['alert-service-transport-code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlertServiceTransportCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['alert-service-transport-code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['alert-service-transport-code']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['alert-service-transport-code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['alert-service-transport-code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAlertServiceTransportCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['alert-service-transport-code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlertServiceTransportCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlertServiceTransportCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['alert-service-transport-code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAlertServiceTransportCodeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['alert-service-transport-code'][':id']['$get']>
  >,
) {
  return ['api', '/api/alert-service-transport-code/:id', toValue(args)] as const
}

export function getApiAlertServiceTransportCodeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['alert-service-transport-code'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlertServiceTransportCodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['alert-service-transport-code'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlertServiceTransportCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['alert-service-transport-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['alert-service-transport-code'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['alert-service-transport-code'][':id']['$get']>
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
                  ReturnType<(typeof client.api)['alert-service-transport-code'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiAlertServiceTransportCodeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['alert-service-transport-code'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlertServiceTransportCodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlertServiceTransportCodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['alert-service-transport-code'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAlertServiceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['alert-service'][':id']['$get']>>,
) {
  return ['api', '/api/alert-service/:id', toValue(args)] as const
}

export function getApiAlertServiceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['alert-service'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlertServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['alert-service'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlertServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-service'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['alert-service'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['alert-service'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['alert-service'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAlertServiceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['alert-service'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlertServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlertServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['alert-service'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiAlertServiceIdMutationKey() {
  return ['api', '/api/alert-service/:id', 'PUT'] as const
}

export function getPutApiAlertServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['alert-service'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['alert-service'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAlertServiceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['alert-service'][':id']['$put']>) {
      return parseResponse(client.api['alert-service'][':id'].$put(args, options))
    },
  })
}

export function usePutApiAlertServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['alert-service'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['alert-service'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAlertServiceIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiAlertServiceIdMutationKey() {
  return ['api', '/api/alert-service/:id', 'DELETE'] as const
}

export function getDeleteApiAlertServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['alert-service'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['alert-service'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAlertServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['alert-service'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['alert-service'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiAlertServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['alert-service'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['alert-service'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAlertServiceIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiCreditsConsumptionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['credits-consumption']['$get']>>,
) {
  return ['api', '/api/credits-consumption', toValue(args)] as const
}

export function getApiCreditsConsumptionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['credits-consumption']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCreditsConsumptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['credits-consumption'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCreditsConsumption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['credits-consumption']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['credits-consumption']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['credits-consumption']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['credits-consumption']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCreditsConsumptionQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['credits-consumption']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCreditsConsumptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCreditsConsumptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['credits-consumption'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCreditsConsumptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['credits-consumption'][':id']['$get']>
  >,
) {
  return ['api', '/api/credits-consumption/:id', toValue(args)] as const
}

export function getApiCreditsConsumptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['credits-consumption'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCreditsConsumptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['credits-consumption'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCreditsConsumptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['credits-consumption'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['credits-consumption'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['credits-consumption'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['credits-consumption'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCreditsConsumptionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['credits-consumption'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCreditsConsumptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCreditsConsumptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['credits-consumption'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiHttpMethodCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['http-method-code']['$get']>>,
) {
  return ['api', '/api/http-method-code', toValue(args)] as const
}

export function getApiHttpMethodCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['http-method-code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiHttpMethodCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['http-method-code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiHttpMethodCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['http-method-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['http-method-code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['http-method-code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['http-method-code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiHttpMethodCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['http-method-code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiHttpMethodCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiHttpMethodCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['http-method-code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiHttpMethodCodeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['http-method-code'][':id']['$get']>>,
) {
  return ['api', '/api/http-method-code/:id', toValue(args)] as const
}

export function getApiHttpMethodCodeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['http-method-code'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiHttpMethodCodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['http-method-code'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiHttpMethodCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['http-method-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['http-method-code'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['http-method-code'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['http-method-code'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiHttpMethodCodeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['http-method-code'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiHttpMethodCodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiHttpMethodCodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['http-method-code'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMediaObjectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['media-object']['$get']>>,
) {
  return ['api', '/api/media-object', toValue(args)] as const
}

export function getApiMediaObjectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['media-object']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMediaObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['media-object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMediaObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['media-object']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['media-object']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['media-object']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['media-object']['$get']>>>
            >
          >,
          ReturnType<typeof getApiMediaObjectQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['media-object']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMediaObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMediaObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['media-object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiMediaObjectMutationKey() {
  return ['api', '/api/media-object', 'POST'] as const
}

export function getPostApiMediaObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['media-object']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['media-object']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMediaObjectMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['media-object']['$post']>) {
      return parseResponse(client.api['media-object'].$post(args, options))
    },
  })
}

export function usePostApiMediaObject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['media-object']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['media-object']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiMediaObjectMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiMediaObjectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['media-object'][':id']['$get']>>,
) {
  return ['api', '/api/media-object/:id', toValue(args)] as const
}

export function getApiMediaObjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['media-object'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMediaObjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['media-object'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMediaObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['media-object'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['media-object'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['media-object'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['media-object'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMediaObjectIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['media-object'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMediaObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMediaObjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['media-object'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiMediaObjectIdMutationKey() {
  return ['api', '/api/media-object/:id', 'DELETE'] as const
}

export function getDeleteApiMediaObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['media-object'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['media-object'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiMediaObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['media-object'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['media-object'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiMediaObjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['media-object'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['media-object'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiMediaObjectIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiMonitorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.monitor.$get>>,
) {
  return ['api', '/api/monitor', toValue(args)] as const
}

export function getApiMonitorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.monitor.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMonitorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.monitor.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiMonitor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monitor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.monitor.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monitor.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monitor.$get>>>>
          >,
          ReturnType<typeof getApiMonitorQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monitor.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiMonitorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMonitorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.monitor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiMonitorMutationKey() {
  return ['api', '/api/monitor', 'POST'] as const
}

export function getPostApiMonitorMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monitor.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.monitor.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMonitorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.monitor.$post>) {
      return parseResponse(client.api.monitor.$post(args, options))
    },
  })
}

export function usePostApiMonitor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monitor.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.monitor.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiMonitorMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiMonitorStatusCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['monitor-status-code']['$get']>>,
) {
  return ['api', '/api/monitor-status-code', toValue(args)] as const
}

export function getApiMonitorStatusCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['monitor-status-code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMonitorStatusCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['monitor-status-code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMonitorStatusCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['monitor-status-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['monitor-status-code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['monitor-status-code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['monitor-status-code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMonitorStatusCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['monitor-status-code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMonitorStatusCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMonitorStatusCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['monitor-status-code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMonitorStatusCodeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['monitor-status-code'][':id']['$get']>
  >,
) {
  return ['api', '/api/monitor-status-code/:id', toValue(args)] as const
}

export function getApiMonitorStatusCodeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['monitor-status-code'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMonitorStatusCodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['monitor-status-code'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMonitorStatusCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['monitor-status-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['monitor-status-code'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['monitor-status-code'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['monitor-status-code'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMonitorStatusCodeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['monitor-status-code'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMonitorStatusCodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMonitorStatusCodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['monitor-status-code'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMonitorStatusLogQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['monitor-status-log']['$get']>>,
) {
  return ['api', '/api/monitor-status-log', toValue(args)] as const
}

export function getApiMonitorStatusLogQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['monitor-status-log']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMonitorStatusLogQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['monitor-status-log'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMonitorStatusLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['monitor-status-log']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['monitor-status-log']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['monitor-status-log']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['monitor-status-log']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMonitorStatusLogQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['monitor-status-log']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMonitorStatusLogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMonitorStatusLogQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['monitor-status-log'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMonitorStatusLogIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['monitor-status-log'][':id']['$get']>
  >,
) {
  return ['api', '/api/monitor-status-log/:id', toValue(args)] as const
}

export function getApiMonitorStatusLogIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['monitor-status-log'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMonitorStatusLogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['monitor-status-log'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMonitorStatusLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['monitor-status-log'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['monitor-status-log'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['monitor-status-log'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['monitor-status-log'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMonitorStatusLogIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['monitor-status-log'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMonitorStatusLogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMonitorStatusLogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['monitor-status-log'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMonitorTypeCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['monitor-type-code']['$get']>>,
) {
  return ['api', '/api/monitor-type-code', toValue(args)] as const
}

export function getApiMonitorTypeCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['monitor-type-code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMonitorTypeCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['monitor-type-code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMonitorTypeCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['monitor-type-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['monitor-type-code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['monitor-type-code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['monitor-type-code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMonitorTypeCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['monitor-type-code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMonitorTypeCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMonitorTypeCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['monitor-type-code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMonitorTypeCodeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['monitor-type-code'][':id']['$get']>>,
) {
  return ['api', '/api/monitor-type-code/:id', toValue(args)] as const
}

export function getApiMonitorTypeCodeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['monitor-type-code'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMonitorTypeCodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['monitor-type-code'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMonitorTypeCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['monitor-type-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['monitor-type-code'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['monitor-type-code'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['monitor-type-code'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMonitorTypeCodeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['monitor-type-code'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMonitorTypeCodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMonitorTypeCodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['monitor-type-code'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMonitorIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.monitor)[':id']['$get']>>,
) {
  return ['api', '/api/monitor/:id', toValue(args)] as const
}

export function getApiMonitorIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.monitor)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMonitorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.monitor[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMonitorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.monitor)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.monitor)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.monitor)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.monitor)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiMonitorIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.monitor)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMonitorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMonitorIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.monitor[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiMonitorIdMutationKey() {
  return ['api', '/api/monitor/:id', 'PUT'] as const
}

export function getPutApiMonitorIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.monitor)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.monitor)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiMonitorIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.monitor)[':id']['$put']>) {
      return parseResponse(client.api.monitor[':id'].$put(args, options))
    },
  })
}

export function usePutApiMonitorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.monitor)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.monitor)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiMonitorIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiMonitorIdMutationKey() {
  return ['api', '/api/monitor/:id', 'DELETE'] as const
}

export function getDeleteApiMonitorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.monitor)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.monitor)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiMonitorIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.monitor)[':id']['$delete']>) {
      return parseResponse(client.api.monitor[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiMonitorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.monitor)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.monitor)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiMonitorIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiPartitionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.partition.$get>>,
) {
  return ['api', '/api/partition', toValue(args)] as const
}

export function getApiPartitionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.partition.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPartitionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.partition.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPartition<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.partition.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.partition.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.partition.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.partition.$get>>>>
          >,
          ReturnType<typeof getApiPartitionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.partition.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPartitionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPartitionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.partition.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPartitionMutationKey() {
  return ['api', '/api/partition', 'POST'] as const
}

export function getPostApiPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.partition.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.partition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPartitionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.partition.$post>) {
      return parseResponse(client.api.partition.$post(args, options))
    },
  })
}

export function usePostApiPartition<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.partition.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.partition.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPartitionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiPartitionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.partition)[':id']['$get']>>,
) {
  return ['api', '/api/partition/:id', toValue(args)] as const
}

export function getApiPartitionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.partition)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPartitionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.partition[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPartitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.partition)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.partition)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.partition)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.partition)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPartitionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.partition)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPartitionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPartitionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.partition[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiPartitionIdMutationKey() {
  return ['api', '/api/partition/:id', 'PUT'] as const
}

export function getPutApiPartitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.partition)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.partition)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPartitionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.partition)[':id']['$put']>) {
      return parseResponse(client.api.partition[':id'].$put(args, options))
    },
  })
}

export function usePutApiPartitionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.partition)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.partition)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPartitionIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiPartitionIdMutationKey() {
  return ['api', '/api/partition/:id', 'DELETE'] as const
}

export function getDeleteApiPartitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.partition)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.partition)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPartitionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.partition)[':id']['$delete']>) {
      return parseResponse(client.api.partition[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiPartitionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.partition)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.partition)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPartitionIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiPingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ping.$get>>,
) {
  return ['api', '/api/ping', toValue(args)] as const
}

export function getApiPingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ping.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ping.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ping.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>
          >,
          ReturnType<typeof getApiPingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ping.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPingMutationKey() {
  return ['api', '/api/ping', 'POST'] as const
}

export function getPostApiPingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.ping.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.ping.$post>) {
      return parseResponse(client.api.ping.$post(args, options))
    },
  })
}

export function usePostApiPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.ping.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiPingMethodCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['ping-method-code']['$get']>>,
) {
  return ['api', '/api/ping-method-code', toValue(args)] as const
}

export function getApiPingMethodCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['ping-method-code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPingMethodCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['ping-method-code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPingMethodCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ping-method-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['ping-method-code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['ping-method-code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['ping-method-code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPingMethodCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ping-method-code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPingMethodCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPingMethodCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['ping-method-code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPingMethodCodeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['ping-method-code'][':id']['$get']>>,
) {
  return ['api', '/api/ping-method-code/:id', toValue(args)] as const
}

export function getApiPingMethodCodeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['ping-method-code'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPingMethodCodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['ping-method-code'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPingMethodCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['ping-method-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['ping-method-code'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['ping-method-code'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['ping-method-code'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPingMethodCodeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['ping-method-code'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPingMethodCodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPingMethodCodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['ping-method-code'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ping)[':id']['$get']>>,
) {
  return ['api', '/api/ping/:id', toValue(args)] as const
}

export function getApiPingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ping)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ping[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPingId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.ping)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ping)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.ping)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.ping)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiPingIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.ping)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ping[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTeamInvitationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['team-invitation']['$get']>>,
) {
  return ['api', '/api/team-invitation', toValue(args)] as const
}

export function getApiTeamInvitationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['team-invitation']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTeamInvitationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['team-invitation'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTeamInvitation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-invitation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['team-invitation']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['team-invitation']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['team-invitation']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTeamInvitationQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-invitation']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamInvitationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTeamInvitationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['team-invitation'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTeamInvitationMutationKey() {
  return ['api', '/api/team-invitation', 'POST'] as const
}

export function getPostApiTeamInvitationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-invitation']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['team-invitation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTeamInvitationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['team-invitation']['$post']>) {
      return parseResponse(client.api['team-invitation'].$post(args, options))
    },
  })
}

export function usePostApiTeamInvitation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['team-invitation']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['team-invitation']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTeamInvitationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTeamInvitationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['team-invitation'][':id']['$get']>>,
) {
  return ['api', '/api/team-invitation/:id', toValue(args)] as const
}

export function getApiTeamInvitationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['team-invitation'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTeamInvitationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['team-invitation'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTeamInvitationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['team-invitation'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['team-invitation'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['team-invitation'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['team-invitation'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTeamInvitationIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['team-invitation'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamInvitationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTeamInvitationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['team-invitation'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiTeamInvitationIdMutationKey() {
  return ['api', '/api/team-invitation/:id', 'DELETE'] as const
}

export function getDeleteApiTeamInvitationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['team-invitation'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['team-invitation'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTeamInvitationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['team-invitation'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['team-invitation'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTeamInvitationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['team-invitation'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['team-invitation'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTeamInvitationIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTeamMemberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['team-member']['$get']>>,
) {
  return ['api', '/api/team-member', toValue(args)] as const
}

export function getApiTeamMemberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['team-member']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTeamMemberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['team-member'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTeamMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-member']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['team-member']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-member']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-member']['$get']>>>
            >
          >,
          ReturnType<typeof getApiTeamMemberQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-member']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamMemberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTeamMemberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['team-member'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTeamMemberRoleCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['team-member-role-code']['$get']>>,
) {
  return ['api', '/api/team-member-role-code', toValue(args)] as const
}

export function getApiTeamMemberRoleCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['team-member-role-code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTeamMemberRoleCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['team-member-role-code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTeamMemberRoleCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['team-member-role-code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['team-member-role-code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['team-member-role-code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['team-member-role-code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTeamMemberRoleCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['team-member-role-code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamMemberRoleCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTeamMemberRoleCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['team-member-role-code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTeamMemberRoleCodeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['team-member-role-code'][':id']['$get']>
  >,
) {
  return ['api', '/api/team-member-role-code/:id', toValue(args)] as const
}

export function getApiTeamMemberRoleCodeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['team-member-role-code'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTeamMemberRoleCodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['team-member-role-code'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTeamMemberRoleCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['team-member-role-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['team-member-role-code'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['team-member-role-code'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['team-member-role-code'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTeamMemberRoleCodeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['team-member-role-code'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamMemberRoleCodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTeamMemberRoleCodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['team-member-role-code'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTeamMemberIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['team-member'][':id']['$get']>>,
) {
  return ['api', '/api/team-member/:id', toValue(args)] as const
}

export function getApiTeamMemberIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['team-member'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTeamMemberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['team-member'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTeamMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-member'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['team-member'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['team-member'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['team-member'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTeamMemberIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-member'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamMemberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTeamMemberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['team-member'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTeamMemberIdMutationKey() {
  return ['api', '/api/team-member/:id', 'PUT'] as const
}

export function getPutApiTeamMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-member'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['team-member'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTeamMemberIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['team-member'][':id']['$put']>) {
      return parseResponse(client.api['team-member'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTeamMemberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['team-member'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['team-member'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTeamMemberIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTeamMemberIdMutationKey() {
  return ['api', '/api/team-member/:id', 'DELETE'] as const
}

export function getDeleteApiTeamMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['team-member'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['team-member'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTeamMemberIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['team-member'][':id']['$delete']>) {
      return parseResponse(client.api['team-member'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTeamMemberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['team-member'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['team-member'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTeamMemberIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTimezoneCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['timezone-code']['$get']>>,
) {
  return ['api', '/api/timezone-code', toValue(args)] as const
}

export function getApiTimezoneCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['timezone-code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTimezoneCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['timezone-code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTimezoneCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['timezone-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['timezone-code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['timezone-code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['timezone-code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTimezoneCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['timezone-code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTimezoneCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTimezoneCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['timezone-code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTimezoneCodeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['timezone-code'][':id']['$get']>>,
) {
  return ['api', '/api/timezone-code/:id', toValue(args)] as const
}

export function getApiTimezoneCodeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['timezone-code'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTimezoneCodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['timezone-code'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTimezoneCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['timezone-code'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['timezone-code'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['timezone-code'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['timezone-code'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTimezoneCodeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['timezone-code'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTimezoneCodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTimezoneCodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['timezone-code'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTransportAlertaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-alerta']['$get']>>,
) {
  return ['api', '/api/transport-alerta', toValue(args)] as const
}

export function getApiTransportAlertaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-alerta']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportAlertaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-alerta'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportAlerta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-alerta']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-alerta']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-alerta']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-alerta']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportAlertaQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-alerta']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportAlertaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportAlertaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-alerta'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportAlertaMutationKey() {
  return ['api', '/api/transport-alerta', 'POST'] as const
}

export function getPostApiTransportAlertaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-alerta']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-alerta']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportAlertaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-alerta']['$post']>) {
      return parseResponse(client.api['transport-alerta'].$post(args, options))
    },
  })
}

export function usePostApiTransportAlerta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-alerta']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-alerta']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportAlertaMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportAlertaIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-alerta'][':id']['$get']>>,
) {
  return ['api', '/api/transport-alerta/:id', toValue(args)] as const
}

export function getApiTransportAlertaIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-alerta'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportAlertaIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-alerta'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportAlertaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-alerta'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-alerta'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-alerta'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-alerta'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportAlertaIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-alerta'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportAlertaIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportAlertaIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-alerta'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportAlertaIdMutationKey() {
  return ['api', '/api/transport-alerta/:id', 'PUT'] as const
}

export function getPutApiTransportAlertaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-alerta'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-alerta'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportAlertaIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-alerta'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-alerta'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportAlertaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-alerta'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-alerta'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportAlertaIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportAlertaIdMutationKey() {
  return ['api', '/api/transport-alerta/:id', 'DELETE'] as const
}

export function getDeleteApiTransportAlertaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-alerta'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-alerta'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportAlertaIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-alerta'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-alerta'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportAlertaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-alerta'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-alerta'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportAlertaIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportAllMySmsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-all-my-sms']['$get']>>,
) {
  return ['api', '/api/transport-all-my-sms', toValue(args)] as const
}

export function getApiTransportAllMySmsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-all-my-sms']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportAllMySmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-all-my-sms'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportAllMySms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-all-my-sms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-all-my-sms']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-all-my-sms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-all-my-sms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportAllMySmsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-all-my-sms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportAllMySmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportAllMySmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-all-my-sms'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportAllMySmsMutationKey() {
  return ['api', '/api/transport-all-my-sms', 'POST'] as const
}

export function getPostApiTransportAllMySmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-all-my-sms']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-all-my-sms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportAllMySmsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-all-my-sms']['$post']>) {
      return parseResponse(client.api['transport-all-my-sms'].$post(args, options))
    },
  })
}

export function usePostApiTransportAllMySms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-all-my-sms']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-all-my-sms']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportAllMySmsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportAllMySmsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-all-my-sms'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-all-my-sms/:id', toValue(args)] as const
}

export function getApiTransportAllMySmsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-all-my-sms'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportAllMySmsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-all-my-sms'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportAllMySmsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-all-my-sms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-all-my-sms'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-all-my-sms'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-all-my-sms'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportAllMySmsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-all-my-sms'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportAllMySmsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportAllMySmsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-all-my-sms'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportAllMySmsIdMutationKey() {
  return ['api', '/api/transport-all-my-sms/:id', 'PUT'] as const
}

export function getPutApiTransportAllMySmsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-all-my-sms'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-all-my-sms'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportAllMySmsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-all-my-sms'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-all-my-sms'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportAllMySmsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-all-my-sms'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-all-my-sms'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportAllMySmsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportAllMySmsIdMutationKey() {
  return ['api', '/api/transport-all-my-sms/:id', 'DELETE'] as const
}

export function getDeleteApiTransportAllMySmsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-all-my-sms'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-all-my-sms'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportAllMySmsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-all-my-sms'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-all-my-sms'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportAllMySmsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-all-my-sms'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-all-my-sms'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportAllMySmsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportAmazonSnsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-amazon-sns']['$get']>>,
) {
  return ['api', '/api/transport-amazon-sns', toValue(args)] as const
}

export function getApiTransportAmazonSnsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-amazon-sns']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportAmazonSnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-amazon-sns'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportAmazonSns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-amazon-sns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-amazon-sns']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-amazon-sns']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-amazon-sns']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportAmazonSnsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-amazon-sns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportAmazonSnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportAmazonSnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-amazon-sns'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportAmazonSnsMutationKey() {
  return ['api', '/api/transport-amazon-sns', 'POST'] as const
}

export function getPostApiTransportAmazonSnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-amazon-sns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-amazon-sns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportAmazonSnsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-amazon-sns']['$post']>) {
      return parseResponse(client.api['transport-amazon-sns'].$post(args, options))
    },
  })
}

export function usePostApiTransportAmazonSns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-amazon-sns']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-amazon-sns']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportAmazonSnsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportAmazonSnsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-amazon-sns'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-amazon-sns/:id', toValue(args)] as const
}

export function getApiTransportAmazonSnsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-amazon-sns'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportAmazonSnsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-amazon-sns'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportAmazonSnsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-amazon-sns'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-amazon-sns'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-amazon-sns'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-amazon-sns'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportAmazonSnsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-amazon-sns'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportAmazonSnsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportAmazonSnsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-amazon-sns'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportAmazonSnsIdMutationKey() {
  return ['api', '/api/transport-amazon-sns/:id', 'PUT'] as const
}

export function getPutApiTransportAmazonSnsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-amazon-sns'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-amazon-sns'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportAmazonSnsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-amazon-sns'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-amazon-sns'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportAmazonSnsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-amazon-sns'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-amazon-sns'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportAmazonSnsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportAmazonSnsIdMutationKey() {
  return ['api', '/api/transport-amazon-sns/:id', 'DELETE'] as const
}

export function getDeleteApiTransportAmazonSnsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-amazon-sns'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-amazon-sns'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportAmazonSnsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-amazon-sns'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-amazon-sns'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportAmazonSnsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-amazon-sns'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-amazon-sns'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportAmazonSnsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportBandwidthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-bandwidth']['$get']>>,
) {
  return ['api', '/api/transport-bandwidth', toValue(args)] as const
}

export function getApiTransportBandwidthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-bandwidth']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportBandwidthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-bandwidth'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportBandwidth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-bandwidth']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-bandwidth']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-bandwidth']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-bandwidth']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportBandwidthQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-bandwidth']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportBandwidthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportBandwidthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-bandwidth'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportBandwidthMutationKey() {
  return ['api', '/api/transport-bandwidth', 'POST'] as const
}

export function getPostApiTransportBandwidthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-bandwidth']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-bandwidth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportBandwidthMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-bandwidth']['$post']>) {
      return parseResponse(client.api['transport-bandwidth'].$post(args, options))
    },
  })
}

export function usePostApiTransportBandwidth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-bandwidth']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-bandwidth']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportBandwidthMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportBandwidthIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-bandwidth'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-bandwidth/:id', toValue(args)] as const
}

export function getApiTransportBandwidthIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-bandwidth'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportBandwidthIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-bandwidth'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportBandwidthId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-bandwidth'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-bandwidth'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-bandwidth'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-bandwidth'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportBandwidthIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-bandwidth'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportBandwidthIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportBandwidthIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-bandwidth'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportBandwidthIdMutationKey() {
  return ['api', '/api/transport-bandwidth/:id', 'PUT'] as const
}

export function getPutApiTransportBandwidthIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-bandwidth'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-bandwidth'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportBandwidthIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-bandwidth'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-bandwidth'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportBandwidthId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-bandwidth'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-bandwidth'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportBandwidthIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportBandwidthIdMutationKey() {
  return ['api', '/api/transport-bandwidth/:id', 'DELETE'] as const
}

export function getDeleteApiTransportBandwidthIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-bandwidth'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-bandwidth'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportBandwidthIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-bandwidth'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-bandwidth'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportBandwidthId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-bandwidth'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-bandwidth'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportBandwidthIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportChatworkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-chatwork']['$get']>>,
) {
  return ['api', '/api/transport-chatwork', toValue(args)] as const
}

export function getApiTransportChatworkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-chatwork']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportChatworkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-chatwork'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportChatwork<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-chatwork']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-chatwork']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-chatwork']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-chatwork']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportChatworkQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-chatwork']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportChatworkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportChatworkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-chatwork'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportChatworkMutationKey() {
  return ['api', '/api/transport-chatwork', 'POST'] as const
}

export function getPostApiTransportChatworkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-chatwork']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-chatwork']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportChatworkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-chatwork']['$post']>) {
      return parseResponse(client.api['transport-chatwork'].$post(args, options))
    },
  })
}

export function usePostApiTransportChatwork<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-chatwork']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-chatwork']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportChatworkMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportChatworkIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-chatwork'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-chatwork/:id', toValue(args)] as const
}

export function getApiTransportChatworkIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-chatwork'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportChatworkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-chatwork'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportChatworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-chatwork'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-chatwork'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-chatwork'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-chatwork'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportChatworkIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-chatwork'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportChatworkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportChatworkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-chatwork'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportChatworkIdMutationKey() {
  return ['api', '/api/transport-chatwork/:id', 'PUT'] as const
}

export function getPutApiTransportChatworkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-chatwork'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-chatwork'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportChatworkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-chatwork'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-chatwork'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportChatworkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-chatwork'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-chatwork'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportChatworkIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportChatworkIdMutationKey() {
  return ['api', '/api/transport-chatwork/:id', 'DELETE'] as const
}

export function getDeleteApiTransportChatworkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-chatwork'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-chatwork'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportChatworkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-chatwork'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-chatwork'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportChatworkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-chatwork'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-chatwork'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportChatworkIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportClickSendQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-click-send']['$get']>>,
) {
  return ['api', '/api/transport-click-send', toValue(args)] as const
}

export function getApiTransportClickSendQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-click-send']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportClickSendQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-click-send'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportClickSend<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-click-send']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-click-send']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-click-send']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-click-send']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportClickSendQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-click-send']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportClickSendQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportClickSendQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-click-send'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportClickSendMutationKey() {
  return ['api', '/api/transport-click-send', 'POST'] as const
}

export function getPostApiTransportClickSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-click-send']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-click-send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportClickSendMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-click-send']['$post']>) {
      return parseResponse(client.api['transport-click-send'].$post(args, options))
    },
  })
}

export function usePostApiTransportClickSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-click-send']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-click-send']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportClickSendMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportClickSendIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-click-send'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-click-send/:id', toValue(args)] as const
}

export function getApiTransportClickSendIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-click-send'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportClickSendIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-click-send'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportClickSendId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-click-send'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-click-send'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-click-send'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-click-send'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportClickSendIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-click-send'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportClickSendIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportClickSendIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-click-send'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportClickSendIdMutationKey() {
  return ['api', '/api/transport-click-send/:id', 'PUT'] as const
}

export function getPutApiTransportClickSendIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-click-send'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-click-send'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportClickSendIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-click-send'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-click-send'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportClickSendId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-click-send'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-click-send'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportClickSendIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportClickSendIdMutationKey() {
  return ['api', '/api/transport-click-send/:id', 'DELETE'] as const
}

export function getDeleteApiTransportClickSendIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-click-send'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-click-send'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportClickSendIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-click-send'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-click-send'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportClickSendId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-click-send'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-click-send'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportClickSendIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportClickatellQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-clickatell']['$get']>>,
) {
  return ['api', '/api/transport-clickatell', toValue(args)] as const
}

export function getApiTransportClickatellQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-clickatell']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportClickatellQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-clickatell'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportClickatell<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-clickatell']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-clickatell']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-clickatell']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-clickatell']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportClickatellQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-clickatell']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportClickatellQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportClickatellQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-clickatell'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportClickatellMutationKey() {
  return ['api', '/api/transport-clickatell', 'POST'] as const
}

export function getPostApiTransportClickatellMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-clickatell']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-clickatell']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportClickatellMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-clickatell']['$post']>) {
      return parseResponse(client.api['transport-clickatell'].$post(args, options))
    },
  })
}

export function usePostApiTransportClickatell<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-clickatell']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-clickatell']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportClickatellMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportClickatellIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-clickatell'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-clickatell/:id', toValue(args)] as const
}

export function getApiTransportClickatellIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-clickatell'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportClickatellIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-clickatell'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportClickatellId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-clickatell'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-clickatell'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-clickatell'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-clickatell'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportClickatellIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-clickatell'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportClickatellIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportClickatellIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-clickatell'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportClickatellIdMutationKey() {
  return ['api', '/api/transport-clickatell/:id', 'PUT'] as const
}

export function getPutApiTransportClickatellIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-clickatell'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-clickatell'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportClickatellIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-clickatell'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-clickatell'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportClickatellId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-clickatell'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-clickatell'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportClickatellIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportClickatellIdMutationKey() {
  return ['api', '/api/transport-clickatell/:id', 'DELETE'] as const
}

export function getDeleteApiTransportClickatellIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-clickatell'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-clickatell'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportClickatellIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-clickatell'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-clickatell'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportClickatellId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-clickatell'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-clickatell'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportClickatellIdMutationOptions<
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

export function getApiTransportContactEveryoneQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-contact-everyone']['$get']>
  >,
) {
  return ['api', '/api/transport-contact-everyone', toValue(args)] as const
}

export function getApiTransportContactEveryoneQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-contact-everyone']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportContactEveryoneQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-contact-everyone'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportContactEveryone<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-contact-everyone']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-contact-everyone']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-contact-everyone']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-contact-everyone']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportContactEveryoneQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-contact-everyone']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportContactEveryoneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportContactEveryoneQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-contact-everyone'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportContactEveryoneMutationKey() {
  return ['api', '/api/transport-contact-everyone', 'POST'] as const
}

export function getPostApiTransportContactEveryoneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-contact-everyone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-contact-everyone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportContactEveryoneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-contact-everyone']['$post']>,
    ) {
      return parseResponse(client.api['transport-contact-everyone'].$post(args, options))
    },
  })
}

export function usePostApiTransportContactEveryone<
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
                Awaited<ReturnType<(typeof client.api)['transport-contact-everyone']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-contact-everyone']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportContactEveryoneMutationOptions<
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

export function getApiTransportContactEveryoneIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-contact-everyone'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-contact-everyone/:id', toValue(args)] as const
}

export function getApiTransportContactEveryoneIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-contact-everyone'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportContactEveryoneIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-contact-everyone'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportContactEveryoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-contact-everyone'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-contact-everyone'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['transport-contact-everyone'][':id']['$get']>
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
                  ReturnType<(typeof client.api)['transport-contact-everyone'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiTransportContactEveryoneIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-contact-everyone'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportContactEveryoneIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportContactEveryoneIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-contact-everyone'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportContactEveryoneIdMutationKey() {
  return ['api', '/api/transport-contact-everyone/:id', 'PUT'] as const
}

export function getPutApiTransportContactEveryoneIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-contact-everyone'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-contact-everyone'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportContactEveryoneIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-contact-everyone'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-contact-everyone'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportContactEveryoneId<
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
                  ReturnType<(typeof client.api)['transport-contact-everyone'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-contact-everyone'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportContactEveryoneIdMutationOptions<
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

export function getDeleteApiTransportContactEveryoneIdMutationKey() {
  return ['api', '/api/transport-contact-everyone/:id', 'DELETE'] as const
}

export function getDeleteApiTransportContactEveryoneIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-contact-everyone'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-contact-everyone'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportContactEveryoneIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-contact-everyone'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-contact-everyone'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportContactEveryoneId<
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
                    ReturnType<(typeof client.api)['transport-contact-everyone'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-contact-everyone'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportContactEveryoneIdMutationOptions<
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

export function getApiTransportDiscordQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-discord']['$get']>>,
) {
  return ['api', '/api/transport-discord', toValue(args)] as const
}

export function getApiTransportDiscordQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-discord']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportDiscordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-discord'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportDiscord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-discord']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-discord']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-discord']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-discord']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportDiscordQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-discord']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportDiscordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportDiscordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-discord'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportDiscordMutationKey() {
  return ['api', '/api/transport-discord', 'POST'] as const
}

export function getPostApiTransportDiscordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-discord']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-discord']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportDiscordMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-discord']['$post']>) {
      return parseResponse(client.api['transport-discord'].$post(args, options))
    },
  })
}

export function usePostApiTransportDiscord<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-discord']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-discord']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportDiscordMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportDiscordIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-discord'][':id']['$get']>>,
) {
  return ['api', '/api/transport-discord/:id', toValue(args)] as const
}

export function getApiTransportDiscordIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-discord'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportDiscordIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-discord'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportDiscordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-discord'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-discord'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-discord'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-discord'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportDiscordIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-discord'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportDiscordIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportDiscordIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-discord'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportDiscordIdMutationKey() {
  return ['api', '/api/transport-discord/:id', 'PUT'] as const
}

export function getPutApiTransportDiscordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-discord'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-discord'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportDiscordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-discord'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-discord'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportDiscordId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-discord'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-discord'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportDiscordIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportDiscordIdMutationKey() {
  return ['api', '/api/transport-discord/:id', 'DELETE'] as const
}

export function getDeleteApiTransportDiscordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-discord'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-discord'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportDiscordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-discord'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-discord'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportDiscordId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-discord'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-discord'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportDiscordIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportEmailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-email']['$get']>>,
) {
  return ['api', '/api/transport-email', toValue(args)] as const
}

export function getApiTransportEmailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-email']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-email'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-email']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-email']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-email']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-email']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportEmailQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-email']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-email'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportEmailMutationKey() {
  return ['api', '/api/transport-email', 'POST'] as const
}

export function getPostApiTransportEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-email']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-email']['$post']>) {
      return parseResponse(client.api['transport-email'].$post(args, options))
    },
  })
}

export function usePostApiTransportEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-email']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-email']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportEmailMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportEmailIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-email'][':id']['$get']>>,
) {
  return ['api', '/api/transport-email/:id', toValue(args)] as const
}

export function getApiTransportEmailIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-email'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportEmailIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-email'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportEmailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-email'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-email'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-email'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-email'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportEmailIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-email'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportEmailIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportEmailIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-email'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportEmailIdMutationKey() {
  return ['api', '/api/transport-email/:id', 'PUT'] as const
}

export function getPutApiTransportEmailIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-email'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-email'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportEmailIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-email'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-email'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportEmailId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-email'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-email'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportEmailIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportEmailIdMutationKey() {
  return ['api', '/api/transport-email/:id', 'DELETE'] as const
}

export function getDeleteApiTransportEmailIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-email'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-email'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportEmailIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-email'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-email'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportEmailId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-email'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-email'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportEmailIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportEngagespotQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-engagespot']['$get']>>,
) {
  return ['api', '/api/transport-engagespot', toValue(args)] as const
}

export function getApiTransportEngagespotQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-engagespot']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportEngagespotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-engagespot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportEngagespot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-engagespot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-engagespot']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-engagespot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-engagespot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportEngagespotQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-engagespot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportEngagespotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportEngagespotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-engagespot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportEngagespotMutationKey() {
  return ['api', '/api/transport-engagespot', 'POST'] as const
}

export function getPostApiTransportEngagespotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-engagespot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-engagespot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportEngagespotMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-engagespot']['$post']>) {
      return parseResponse(client.api['transport-engagespot'].$post(args, options))
    },
  })
}

export function usePostApiTransportEngagespot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-engagespot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-engagespot']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportEngagespotMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportEngagespotIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-engagespot'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-engagespot/:id', toValue(args)] as const
}

export function getApiTransportEngagespotIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-engagespot'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportEngagespotIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-engagespot'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportEngagespotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-engagespot'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-engagespot'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-engagespot'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-engagespot'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportEngagespotIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-engagespot'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportEngagespotIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportEngagespotIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-engagespot'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportEngagespotIdMutationKey() {
  return ['api', '/api/transport-engagespot/:id', 'PUT'] as const
}

export function getPutApiTransportEngagespotIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-engagespot'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-engagespot'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportEngagespotIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-engagespot'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-engagespot'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportEngagespotId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-engagespot'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-engagespot'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportEngagespotIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportEngagespotIdMutationKey() {
  return ['api', '/api/transport-engagespot/:id', 'DELETE'] as const
}

export function getDeleteApiTransportEngagespotIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-engagespot'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-engagespot'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportEngagespotIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-engagespot'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-engagespot'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportEngagespotId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-engagespot'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-engagespot'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportEngagespotIdMutationOptions<
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

export function getApiTransportEsendexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-esendex']['$get']>>,
) {
  return ['api', '/api/transport-esendex', toValue(args)] as const
}

export function getApiTransportEsendexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-esendex']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportEsendexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-esendex'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportEsendex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-esendex']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-esendex']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-esendex']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-esendex']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportEsendexQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-esendex']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportEsendexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportEsendexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-esendex'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportEsendexMutationKey() {
  return ['api', '/api/transport-esendex', 'POST'] as const
}

export function getPostApiTransportEsendexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-esendex']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-esendex']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportEsendexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-esendex']['$post']>) {
      return parseResponse(client.api['transport-esendex'].$post(args, options))
    },
  })
}

export function usePostApiTransportEsendex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-esendex']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-esendex']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportEsendexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportEsendexIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-esendex'][':id']['$get']>>,
) {
  return ['api', '/api/transport-esendex/:id', toValue(args)] as const
}

export function getApiTransportEsendexIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-esendex'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportEsendexIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-esendex'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportEsendexId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-esendex'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-esendex'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-esendex'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-esendex'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportEsendexIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-esendex'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportEsendexIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportEsendexIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-esendex'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportEsendexIdMutationKey() {
  return ['api', '/api/transport-esendex/:id', 'PUT'] as const
}

export function getPutApiTransportEsendexIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-esendex'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-esendex'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportEsendexIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-esendex'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-esendex'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportEsendexId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-esendex'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-esendex'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportEsendexIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportEsendexIdMutationKey() {
  return ['api', '/api/transport-esendex/:id', 'DELETE'] as const
}

export function getDeleteApiTransportEsendexIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-esendex'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-esendex'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportEsendexIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-esendex'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-esendex'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportEsendexId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-esendex'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-esendex'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportEsendexIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportExpoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-expo']['$get']>>,
) {
  return ['api', '/api/transport-expo', toValue(args)] as const
}

export function getApiTransportExpoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-expo']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportExpoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-expo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportExpo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-expo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-expo']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-expo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-expo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportExpoQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-expo']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportExpoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportExpoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-expo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportExpoMutationKey() {
  return ['api', '/api/transport-expo', 'POST'] as const
}

export function getPostApiTransportExpoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-expo']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-expo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportExpoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-expo']['$post']>) {
      return parseResponse(client.api['transport-expo'].$post(args, options))
    },
  })
}

export function usePostApiTransportExpo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-expo']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-expo']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportExpoMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportExpoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-expo'][':id']['$get']>>,
) {
  return ['api', '/api/transport-expo/:id', toValue(args)] as const
}

export function getApiTransportExpoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-expo'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportExpoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-expo'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportExpoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-expo'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-expo'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-expo'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-expo'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportExpoIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-expo'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportExpoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportExpoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-expo'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportExpoIdMutationKey() {
  return ['api', '/api/transport-expo/:id', 'PUT'] as const
}

export function getPutApiTransportExpoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-expo'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-expo'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportExpoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-expo'][':id']['$put']>) {
      return parseResponse(client.api['transport-expo'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportExpoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-expo'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-expo'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportExpoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportExpoIdMutationKey() {
  return ['api', '/api/transport-expo/:id', 'DELETE'] as const
}

export function getDeleteApiTransportExpoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-expo'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-expo'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportExpoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-expo'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-expo'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportExpoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-expo'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-expo'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportExpoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportFirebaseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-firebase']['$get']>>,
) {
  return ['api', '/api/transport-firebase', toValue(args)] as const
}

export function getApiTransportFirebaseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-firebase']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportFirebaseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-firebase'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportFirebase<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-firebase']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-firebase']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-firebase']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-firebase']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportFirebaseQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-firebase']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportFirebaseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportFirebaseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-firebase'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportFirebaseMutationKey() {
  return ['api', '/api/transport-firebase', 'POST'] as const
}

export function getPostApiTransportFirebaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-firebase']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-firebase']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportFirebaseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-firebase']['$post']>) {
      return parseResponse(client.api['transport-firebase'].$post(args, options))
    },
  })
}

export function usePostApiTransportFirebase<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-firebase']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-firebase']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportFirebaseMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportFirebaseIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-firebase'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-firebase/:id', toValue(args)] as const
}

export function getApiTransportFirebaseIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-firebase'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportFirebaseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-firebase'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportFirebaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-firebase'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-firebase'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-firebase'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-firebase'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportFirebaseIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-firebase'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportFirebaseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportFirebaseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-firebase'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportFirebaseIdMutationKey() {
  return ['api', '/api/transport-firebase/:id', 'PUT'] as const
}

export function getPutApiTransportFirebaseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-firebase'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-firebase'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportFirebaseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-firebase'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-firebase'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportFirebaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-firebase'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-firebase'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportFirebaseIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportFirebaseIdMutationKey() {
  return ['api', '/api/transport-firebase/:id', 'DELETE'] as const
}

export function getDeleteApiTransportFirebaseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-firebase'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-firebase'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportFirebaseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-firebase'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-firebase'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportFirebaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-firebase'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-firebase'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportFirebaseIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportFortySixElksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-forty-six-elks']['$get']>>,
) {
  return ['api', '/api/transport-forty-six-elks', toValue(args)] as const
}

export function getApiTransportFortySixElksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-forty-six-elks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportFortySixElksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-forty-six-elks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportFortySixElks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-forty-six-elks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportFortySixElksQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportFortySixElksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportFortySixElksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-forty-six-elks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportFortySixElksMutationKey() {
  return ['api', '/api/transport-forty-six-elks', 'POST'] as const
}

export function getPostApiTransportFortySixElksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-forty-six-elks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportFortySixElksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-forty-six-elks']['$post']>,
    ) {
      return parseResponse(client.api['transport-forty-six-elks'].$post(args, options))
    },
  })
}

export function usePostApiTransportFortySixElks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-forty-six-elks']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportFortySixElksMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportFortySixElksIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-forty-six-elks'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-forty-six-elks/:id', toValue(args)] as const
}

export function getApiTransportFortySixElksIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-forty-six-elks'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportFortySixElksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-forty-six-elks'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportFortySixElksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-forty-six-elks'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportFortySixElksIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportFortySixElksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportFortySixElksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-forty-six-elks'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportFortySixElksIdMutationKey() {
  return ['api', '/api/transport-forty-six-elks/:id', 'PUT'] as const
}

export function getPutApiTransportFortySixElksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-forty-six-elks'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportFortySixElksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-forty-six-elks'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-forty-six-elks'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportFortySixElksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-forty-six-elks'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportFortySixElksIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportFortySixElksIdMutationKey() {
  return ['api', '/api/transport-forty-six-elks/:id', 'DELETE'] as const
}

export function getDeleteApiTransportFortySixElksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-forty-six-elks'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportFortySixElksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-forty-six-elks'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-forty-six-elks'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportFortySixElksId<
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
                    ReturnType<(typeof client.api)['transport-forty-six-elks'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-forty-six-elks'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportFortySixElksIdMutationOptions<
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

export function getApiTransportFreeMobileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-free-mobile']['$get']>>,
) {
  return ['api', '/api/transport-free-mobile', toValue(args)] as const
}

export function getApiTransportFreeMobileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-free-mobile']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportFreeMobileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-free-mobile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportFreeMobile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-free-mobile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-free-mobile']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-free-mobile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-free-mobile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportFreeMobileQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-free-mobile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportFreeMobileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportFreeMobileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-free-mobile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportFreeMobileMutationKey() {
  return ['api', '/api/transport-free-mobile', 'POST'] as const
}

export function getPostApiTransportFreeMobileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-free-mobile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-free-mobile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportFreeMobileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-free-mobile']['$post']>,
    ) {
      return parseResponse(client.api['transport-free-mobile'].$post(args, options))
    },
  })
}

export function usePostApiTransportFreeMobile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-free-mobile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-free-mobile']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportFreeMobileMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportFreeMobileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-free-mobile'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-free-mobile/:id', toValue(args)] as const
}

export function getApiTransportFreeMobileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-free-mobile'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportFreeMobileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-free-mobile'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportFreeMobileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-free-mobile'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-free-mobile'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-free-mobile'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-free-mobile'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportFreeMobileIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-free-mobile'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportFreeMobileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportFreeMobileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-free-mobile'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportFreeMobileIdMutationKey() {
  return ['api', '/api/transport-free-mobile/:id', 'PUT'] as const
}

export function getPutApiTransportFreeMobileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-free-mobile'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-free-mobile'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportFreeMobileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-free-mobile'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-free-mobile'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportFreeMobileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-free-mobile'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-free-mobile'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportFreeMobileIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportFreeMobileIdMutationKey() {
  return ['api', '/api/transport-free-mobile/:id', 'DELETE'] as const
}

export function getDeleteApiTransportFreeMobileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-free-mobile'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-free-mobile'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportFreeMobileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-free-mobile'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-free-mobile'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportFreeMobileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api)['transport-free-mobile'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-free-mobile'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportFreeMobileIdMutationOptions<
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

export function getApiTransportFreshdeskQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-freshdesk']['$get']>>,
) {
  return ['api', '/api/transport-freshdesk', toValue(args)] as const
}

export function getApiTransportFreshdeskQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-freshdesk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportFreshdeskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-freshdesk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportFreshdesk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-freshdesk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-freshdesk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-freshdesk']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-freshdesk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportFreshdeskQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-freshdesk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportFreshdeskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportFreshdeskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-freshdesk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportFreshdeskMutationKey() {
  return ['api', '/api/transport-freshdesk', 'POST'] as const
}

export function getPostApiTransportFreshdeskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-freshdesk']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-freshdesk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportFreshdeskMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-freshdesk']['$post']>) {
      return parseResponse(client.api['transport-freshdesk'].$post(args, options))
    },
  })
}

export function usePostApiTransportFreshdesk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-freshdesk']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-freshdesk']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportFreshdeskMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportFreshdeskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-freshdesk'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-freshdesk/:id', toValue(args)] as const
}

export function getApiTransportFreshdeskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-freshdesk'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportFreshdeskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-freshdesk'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportFreshdeskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-freshdesk'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-freshdesk'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-freshdesk'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-freshdesk'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportFreshdeskIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-freshdesk'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportFreshdeskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportFreshdeskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-freshdesk'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportFreshdeskIdMutationKey() {
  return ['api', '/api/transport-freshdesk/:id', 'PUT'] as const
}

export function getPutApiTransportFreshdeskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-freshdesk'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-freshdesk'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportFreshdeskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-freshdesk'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-freshdesk'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportFreshdeskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-freshdesk'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-freshdesk'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportFreshdeskIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportFreshdeskIdMutationKey() {
  return ['api', '/api/transport-freshdesk/:id', 'DELETE'] as const
}

export function getDeleteApiTransportFreshdeskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-freshdesk'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-freshdesk'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportFreshdeskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-freshdesk'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-freshdesk'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportFreshdeskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-freshdesk'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-freshdesk'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportFreshdeskIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportGatewayApiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-gateway-api']['$get']>>,
) {
  return ['api', '/api/transport-gateway-api', toValue(args)] as const
}

export function getApiTransportGatewayApiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-gateway-api']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportGatewayApiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-gateway-api'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportGatewayApi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-gateway-api']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-gateway-api']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gateway-api']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gateway-api']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportGatewayApiQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-gateway-api']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportGatewayApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportGatewayApiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-gateway-api'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportGatewayApiMutationKey() {
  return ['api', '/api/transport-gateway-api', 'POST'] as const
}

export function getPostApiTransportGatewayApiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-gateway-api']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-gateway-api']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportGatewayApiMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-gateway-api']['$post']>,
    ) {
      return parseResponse(client.api['transport-gateway-api'].$post(args, options))
    },
  })
}

export function usePostApiTransportGatewayApi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gateway-api']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-gateway-api']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportGatewayApiMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportGatewayApiIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-gateway-api'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-gateway-api/:id', toValue(args)] as const
}

export function getApiTransportGatewayApiIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-gateway-api'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportGatewayApiIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-gateway-api'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportGatewayApiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-gateway-api'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-gateway-api'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gateway-api'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gateway-api'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportGatewayApiIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-gateway-api'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportGatewayApiIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportGatewayApiIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-gateway-api'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportGatewayApiIdMutationKey() {
  return ['api', '/api/transport-gateway-api/:id', 'PUT'] as const
}

export function getPutApiTransportGatewayApiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-gateway-api'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-gateway-api'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportGatewayApiIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-gateway-api'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-gateway-api'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportGatewayApiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gateway-api'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-gateway-api'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportGatewayApiIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportGatewayApiIdMutationKey() {
  return ['api', '/api/transport-gateway-api/:id', 'DELETE'] as const
}

export function getDeleteApiTransportGatewayApiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-gateway-api'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-gateway-api'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportGatewayApiIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-gateway-api'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-gateway-api'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportGatewayApiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api)['transport-gateway-api'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-gateway-api'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportGatewayApiIdMutationOptions<
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

export function getApiTransportGitterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-gitter']['$get']>>,
) {
  return ['api', '/api/transport-gitter', toValue(args)] as const
}

export function getApiTransportGitterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-gitter']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportGitterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-gitter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportGitter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-gitter']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-gitter']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gitter']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gitter']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportGitterQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-gitter']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportGitterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportGitterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-gitter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportGitterMutationKey() {
  return ['api', '/api/transport-gitter', 'POST'] as const
}

export function getPostApiTransportGitterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-gitter']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-gitter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportGitterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-gitter']['$post']>) {
      return parseResponse(client.api['transport-gitter'].$post(args, options))
    },
  })
}

export function usePostApiTransportGitter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gitter']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-gitter']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportGitterMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportGitterIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-gitter'][':id']['$get']>>,
) {
  return ['api', '/api/transport-gitter/:id', toValue(args)] as const
}

export function getApiTransportGitterIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-gitter'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportGitterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-gitter'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportGitterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-gitter'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-gitter'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gitter'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gitter'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportGitterIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-gitter'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportGitterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportGitterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-gitter'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportGitterIdMutationKey() {
  return ['api', '/api/transport-gitter/:id', 'PUT'] as const
}

export function getPutApiTransportGitterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-gitter'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-gitter'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportGitterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-gitter'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-gitter'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportGitterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gitter'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-gitter'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportGitterIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportGitterIdMutationKey() {
  return ['api', '/api/transport-gitter/:id', 'DELETE'] as const
}

export function getDeleteApiTransportGitterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-gitter'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-gitter'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportGitterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-gitter'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-gitter'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportGitterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-gitter'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-gitter'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportGitterIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportGoogleChatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-google-chat']['$get']>>,
) {
  return ['api', '/api/transport-google-chat', toValue(args)] as const
}

export function getApiTransportGoogleChatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-google-chat']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportGoogleChatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-google-chat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportGoogleChat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-google-chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-google-chat']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-google-chat']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-google-chat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportGoogleChatQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-google-chat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportGoogleChatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportGoogleChatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-google-chat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportGoogleChatMutationKey() {
  return ['api', '/api/transport-google-chat', 'POST'] as const
}

export function getPostApiTransportGoogleChatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-google-chat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-google-chat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportGoogleChatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-google-chat']['$post']>,
    ) {
      return parseResponse(client.api['transport-google-chat'].$post(args, options))
    },
  })
}

export function usePostApiTransportGoogleChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-google-chat']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-google-chat']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportGoogleChatMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportGoogleChatIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-google-chat'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-google-chat/:id', toValue(args)] as const
}

export function getApiTransportGoogleChatIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-google-chat'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportGoogleChatIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-google-chat'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportGoogleChatId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-google-chat'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-google-chat'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-google-chat'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-google-chat'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportGoogleChatIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-google-chat'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportGoogleChatIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportGoogleChatIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-google-chat'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportGoogleChatIdMutationKey() {
  return ['api', '/api/transport-google-chat/:id', 'PUT'] as const
}

export function getPutApiTransportGoogleChatIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-google-chat'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-google-chat'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportGoogleChatIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-google-chat'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-google-chat'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportGoogleChatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-google-chat'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-google-chat'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportGoogleChatIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportGoogleChatIdMutationKey() {
  return ['api', '/api/transport-google-chat/:id', 'DELETE'] as const
}

export function getDeleteApiTransportGoogleChatIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-google-chat'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-google-chat'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportGoogleChatIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-google-chat'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-google-chat'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportGoogleChatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api)['transport-google-chat'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-google-chat'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportGoogleChatIdMutationOptions<
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

export function getApiTransportGotifyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-gotify']['$get']>>,
) {
  return ['api', '/api/transport-gotify', toValue(args)] as const
}

export function getApiTransportGotifyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-gotify']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportGotifyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-gotify'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportGotify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-gotify']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-gotify']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gotify']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gotify']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportGotifyQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-gotify']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportGotifyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportGotifyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-gotify'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportGotifyMutationKey() {
  return ['api', '/api/transport-gotify', 'POST'] as const
}

export function getPostApiTransportGotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-gotify']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-gotify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportGotifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-gotify']['$post']>) {
      return parseResponse(client.api['transport-gotify'].$post(args, options))
    },
  })
}

export function usePostApiTransportGotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gotify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-gotify']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportGotifyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportGotifyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-gotify'][':id']['$get']>>,
) {
  return ['api', '/api/transport-gotify/:id', toValue(args)] as const
}

export function getApiTransportGotifyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-gotify'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportGotifyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-gotify'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportGotifyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-gotify'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-gotify'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gotify'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gotify'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportGotifyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-gotify'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportGotifyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportGotifyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-gotify'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportGotifyIdMutationKey() {
  return ['api', '/api/transport-gotify/:id', 'PUT'] as const
}

export function getPutApiTransportGotifyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-gotify'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-gotify'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportGotifyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-gotify'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-gotify'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportGotifyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gotify'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-gotify'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportGotifyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportGotifyIdMutationKey() {
  return ['api', '/api/transport-gotify/:id', 'DELETE'] as const
}

export function getDeleteApiTransportGotifyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-gotify'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-gotify'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportGotifyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-gotify'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-gotify'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportGotifyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-gotify'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-gotify'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportGotifyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportHelpScoutQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-help-scout']['$get']>>,
) {
  return ['api', '/api/transport-help-scout', toValue(args)] as const
}

export function getApiTransportHelpScoutQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-help-scout']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportHelpScoutQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-help-scout'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportHelpScout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-help-scout']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-help-scout']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-help-scout']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-help-scout']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportHelpScoutQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-help-scout']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportHelpScoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportHelpScoutQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-help-scout'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportHelpScoutMutationKey() {
  return ['api', '/api/transport-help-scout', 'POST'] as const
}

export function getPostApiTransportHelpScoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-help-scout']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-help-scout']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportHelpScoutMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-help-scout']['$post']>) {
      return parseResponse(client.api['transport-help-scout'].$post(args, options))
    },
  })
}

export function usePostApiTransportHelpScout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-help-scout']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-help-scout']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportHelpScoutMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportHelpScoutIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-help-scout'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-help-scout/:id', toValue(args)] as const
}

export function getApiTransportHelpScoutIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-help-scout'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportHelpScoutIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-help-scout'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportHelpScoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-help-scout'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-help-scout'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-help-scout'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-help-scout'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportHelpScoutIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-help-scout'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportHelpScoutIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportHelpScoutIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-help-scout'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportHelpScoutIdMutationKey() {
  return ['api', '/api/transport-help-scout/:id', 'PUT'] as const
}

export function getPutApiTransportHelpScoutIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-help-scout'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-help-scout'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportHelpScoutIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-help-scout'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-help-scout'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportHelpScoutId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-help-scout'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-help-scout'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportHelpScoutIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportHelpScoutIdMutationKey() {
  return ['api', '/api/transport-help-scout/:id', 'DELETE'] as const
}

export function getDeleteApiTransportHelpScoutIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-help-scout'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-help-scout'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportHelpScoutIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-help-scout'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-help-scout'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportHelpScoutId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-help-scout'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-help-scout'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportHelpScoutIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportInfobipQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-infobip']['$get']>>,
) {
  return ['api', '/api/transport-infobip', toValue(args)] as const
}

export function getApiTransportInfobipQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-infobip']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportInfobipQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-infobip'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportInfobip<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-infobip']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-infobip']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-infobip']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-infobip']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportInfobipQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-infobip']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportInfobipQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportInfobipQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-infobip'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportInfobipMutationKey() {
  return ['api', '/api/transport-infobip', 'POST'] as const
}

export function getPostApiTransportInfobipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-infobip']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-infobip']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportInfobipMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-infobip']['$post']>) {
      return parseResponse(client.api['transport-infobip'].$post(args, options))
    },
  })
}

export function usePostApiTransportInfobip<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-infobip']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-infobip']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportInfobipMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportInfobipIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-infobip'][':id']['$get']>>,
) {
  return ['api', '/api/transport-infobip/:id', toValue(args)] as const
}

export function getApiTransportInfobipIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-infobip'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportInfobipIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-infobip'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportInfobipId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-infobip'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-infobip'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-infobip'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-infobip'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportInfobipIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-infobip'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportInfobipIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportInfobipIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-infobip'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportInfobipIdMutationKey() {
  return ['api', '/api/transport-infobip/:id', 'PUT'] as const
}

export function getPutApiTransportInfobipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-infobip'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-infobip'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportInfobipIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-infobip'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-infobip'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportInfobipId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-infobip'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-infobip'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportInfobipIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportInfobipIdMutationKey() {
  return ['api', '/api/transport-infobip/:id', 'DELETE'] as const
}

export function getDeleteApiTransportInfobipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-infobip'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-infobip'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportInfobipIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-infobip'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-infobip'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportInfobipId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-infobip'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-infobip'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportInfobipIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportIqsmsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-iqsms']['$get']>>,
) {
  return ['api', '/api/transport-iqsms', toValue(args)] as const
}

export function getApiTransportIqsmsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-iqsms']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportIqsmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-iqsms'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportIqsms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-iqsms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-iqsms']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-iqsms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-iqsms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportIqsmsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-iqsms']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportIqsmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportIqsmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-iqsms'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportIqsmsMutationKey() {
  return ['api', '/api/transport-iqsms', 'POST'] as const
}

export function getPostApiTransportIqsmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-iqsms']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-iqsms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportIqsmsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-iqsms']['$post']>) {
      return parseResponse(client.api['transport-iqsms'].$post(args, options))
    },
  })
}

export function usePostApiTransportIqsms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-iqsms']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-iqsms']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportIqsmsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportIqsmsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-iqsms'][':id']['$get']>>,
) {
  return ['api', '/api/transport-iqsms/:id', toValue(args)] as const
}

export function getApiTransportIqsmsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-iqsms'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportIqsmsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-iqsms'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportIqsmsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-iqsms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-iqsms'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-iqsms'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-iqsms'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportIqsmsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-iqsms'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportIqsmsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportIqsmsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-iqsms'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportIqsmsIdMutationKey() {
  return ['api', '/api/transport-iqsms/:id', 'PUT'] as const
}

export function getPutApiTransportIqsmsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-iqsms'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-iqsms'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportIqsmsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-iqsms'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-iqsms'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportIqsmsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-iqsms'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-iqsms'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportIqsmsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportIqsmsIdMutationKey() {
  return ['api', '/api/transport-iqsms/:id', 'DELETE'] as const
}

export function getDeleteApiTransportIqsmsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-iqsms'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-iqsms'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportIqsmsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-iqsms'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-iqsms'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportIqsmsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-iqsms'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-iqsms'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportIqsmsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportKazInfoTehQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-kaz-info-teh']['$get']>>,
) {
  return ['api', '/api/transport-kaz-info-teh', toValue(args)] as const
}

export function getApiTransportKazInfoTehQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-kaz-info-teh']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportKazInfoTehQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-kaz-info-teh'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportKazInfoTeh<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-kaz-info-teh']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportKazInfoTehQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportKazInfoTehQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportKazInfoTehQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-kaz-info-teh'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportKazInfoTehMutationKey() {
  return ['api', '/api/transport-kaz-info-teh', 'POST'] as const
}

export function getPostApiTransportKazInfoTehMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-kaz-info-teh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportKazInfoTehMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-kaz-info-teh']['$post']>,
    ) {
      return parseResponse(client.api['transport-kaz-info-teh'].$post(args, options))
    },
  })
}

export function usePostApiTransportKazInfoTeh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-kaz-info-teh']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportKazInfoTehMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportKazInfoTehIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-kaz-info-teh'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-kaz-info-teh/:id', toValue(args)] as const
}

export function getApiTransportKazInfoTehIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-kaz-info-teh'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportKazInfoTehIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-kaz-info-teh'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportKazInfoTehId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-kaz-info-teh'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportKazInfoTehIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportKazInfoTehIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportKazInfoTehIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-kaz-info-teh'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportKazInfoTehIdMutationKey() {
  return ['api', '/api/transport-kaz-info-teh/:id', 'PUT'] as const
}

export function getPutApiTransportKazInfoTehIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-kaz-info-teh'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportKazInfoTehIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-kaz-info-teh'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-kaz-info-teh'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportKazInfoTehId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-kaz-info-teh'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportKazInfoTehIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportKazInfoTehIdMutationKey() {
  return ['api', '/api/transport-kaz-info-teh/:id', 'DELETE'] as const
}

export function getDeleteApiTransportKazInfoTehIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-kaz-info-teh'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportKazInfoTehIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-kaz-info-teh'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-kaz-info-teh'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportKazInfoTehId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api)['transport-kaz-info-teh'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-kaz-info-teh'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportKazInfoTehIdMutationOptions<
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

export function getApiTransportLightSmsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-light-sms']['$get']>>,
) {
  return ['api', '/api/transport-light-sms', toValue(args)] as const
}

export function getApiTransportLightSmsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-light-sms']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportLightSmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-light-sms'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportLightSms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-light-sms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-light-sms']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-light-sms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-light-sms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportLightSmsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-light-sms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportLightSmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportLightSmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-light-sms'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportLightSmsMutationKey() {
  return ['api', '/api/transport-light-sms', 'POST'] as const
}

export function getPostApiTransportLightSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-light-sms']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-light-sms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportLightSmsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-light-sms']['$post']>) {
      return parseResponse(client.api['transport-light-sms'].$post(args, options))
    },
  })
}

export function usePostApiTransportLightSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-light-sms']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-light-sms']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportLightSmsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportLightSmsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-light-sms'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-light-sms/:id', toValue(args)] as const
}

export function getApiTransportLightSmsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-light-sms'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportLightSmsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-light-sms'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportLightSmsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-light-sms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-light-sms'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-light-sms'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-light-sms'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportLightSmsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-light-sms'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportLightSmsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportLightSmsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-light-sms'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportLightSmsIdMutationKey() {
  return ['api', '/api/transport-light-sms/:id', 'PUT'] as const
}

export function getPutApiTransportLightSmsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-light-sms'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-light-sms'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportLightSmsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-light-sms'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-light-sms'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportLightSmsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-light-sms'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-light-sms'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportLightSmsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportLightSmsIdMutationKey() {
  return ['api', '/api/transport-light-sms/:id', 'DELETE'] as const
}

export function getDeleteApiTransportLightSmsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-light-sms'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-light-sms'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportLightSmsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-light-sms'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-light-sms'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportLightSmsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-light-sms'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-light-sms'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportLightSmsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportLineNotifyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-line-notify']['$get']>>,
) {
  return ['api', '/api/transport-line-notify', toValue(args)] as const
}

export function getApiTransportLineNotifyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-line-notify']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportLineNotifyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-line-notify'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportLineNotify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-line-notify']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-line-notify']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-line-notify']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-line-notify']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportLineNotifyQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-line-notify']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportLineNotifyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportLineNotifyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-line-notify'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportLineNotifyMutationKey() {
  return ['api', '/api/transport-line-notify', 'POST'] as const
}

export function getPostApiTransportLineNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-line-notify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-line-notify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportLineNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-line-notify']['$post']>,
    ) {
      return parseResponse(client.api['transport-line-notify'].$post(args, options))
    },
  })
}

export function usePostApiTransportLineNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-line-notify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-line-notify']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportLineNotifyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportLineNotifyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-line-notify'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-line-notify/:id', toValue(args)] as const
}

export function getApiTransportLineNotifyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-line-notify'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportLineNotifyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-line-notify'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportLineNotifyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-line-notify'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-line-notify'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-line-notify'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-line-notify'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportLineNotifyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-line-notify'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportLineNotifyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportLineNotifyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-line-notify'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportLineNotifyIdMutationKey() {
  return ['api', '/api/transport-line-notify/:id', 'PUT'] as const
}

export function getPutApiTransportLineNotifyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-line-notify'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-line-notify'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportLineNotifyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-line-notify'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-line-notify'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportLineNotifyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-line-notify'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-line-notify'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportLineNotifyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportLineNotifyIdMutationKey() {
  return ['api', '/api/transport-line-notify/:id', 'DELETE'] as const
}

export function getDeleteApiTransportLineNotifyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-line-notify'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-line-notify'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportLineNotifyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-line-notify'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-line-notify'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportLineNotifyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api)['transport-line-notify'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-line-notify'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportLineNotifyIdMutationOptions<
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

export function getApiTransportLinkedInQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-linked-in']['$get']>>,
) {
  return ['api', '/api/transport-linked-in', toValue(args)] as const
}

export function getApiTransportLinkedInQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-linked-in']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportLinkedInQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-linked-in'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportLinkedIn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-linked-in']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-linked-in']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-linked-in']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-linked-in']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportLinkedInQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-linked-in']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportLinkedInQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportLinkedInQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-linked-in'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportLinkedInMutationKey() {
  return ['api', '/api/transport-linked-in', 'POST'] as const
}

export function getPostApiTransportLinkedInMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-linked-in']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-linked-in']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportLinkedInMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-linked-in']['$post']>) {
      return parseResponse(client.api['transport-linked-in'].$post(args, options))
    },
  })
}

export function usePostApiTransportLinkedIn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-linked-in']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-linked-in']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportLinkedInMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportLinkedInIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-linked-in'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-linked-in/:id', toValue(args)] as const
}

export function getApiTransportLinkedInIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-linked-in'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportLinkedInIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-linked-in'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportLinkedInId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-linked-in'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-linked-in'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-linked-in'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-linked-in'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportLinkedInIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-linked-in'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportLinkedInIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportLinkedInIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-linked-in'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportLinkedInIdMutationKey() {
  return ['api', '/api/transport-linked-in/:id', 'PUT'] as const
}

export function getPutApiTransportLinkedInIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-linked-in'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-linked-in'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportLinkedInIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-linked-in'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-linked-in'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportLinkedInId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-linked-in'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-linked-in'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportLinkedInIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportLinkedInIdMutationKey() {
  return ['api', '/api/transport-linked-in/:id', 'DELETE'] as const
}

export function getDeleteApiTransportLinkedInIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-linked-in'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-linked-in'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportLinkedInIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-linked-in'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-linked-in'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportLinkedInId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-linked-in'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-linked-in'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportLinkedInIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportMailjetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mailjet']['$get']>>,
) {
  return ['api', '/api/transport-mailjet', toValue(args)] as const
}

export function getApiTransportMailjetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mailjet']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportMailjetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-mailjet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportMailjet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mailjet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mailjet']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mailjet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mailjet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportMailjetQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mailjet']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMailjetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportMailjetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-mailjet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportMailjetMutationKey() {
  return ['api', '/api/transport-mailjet', 'POST'] as const
}

export function getPostApiTransportMailjetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mailjet']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-mailjet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportMailjetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-mailjet']['$post']>) {
      return parseResponse(client.api['transport-mailjet'].$post(args, options))
    },
  })
}

export function usePostApiTransportMailjet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mailjet']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-mailjet']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportMailjetMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportMailjetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mailjet'][':id']['$get']>>,
) {
  return ['api', '/api/transport-mailjet/:id', toValue(args)] as const
}

export function getApiTransportMailjetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mailjet'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportMailjetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-mailjet'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportMailjetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-mailjet'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mailjet'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mailjet'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mailjet'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportMailjetIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-mailjet'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMailjetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportMailjetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-mailjet'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportMailjetIdMutationKey() {
  return ['api', '/api/transport-mailjet/:id', 'PUT'] as const
}

export function getPutApiTransportMailjetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-mailjet'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-mailjet'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportMailjetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-mailjet'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-mailjet'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportMailjetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mailjet'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-mailjet'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportMailjetIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportMailjetIdMutationKey() {
  return ['api', '/api/transport-mailjet/:id', 'DELETE'] as const
}

export function getDeleteApiTransportMailjetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-mailjet'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-mailjet'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportMailjetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-mailjet'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-mailjet'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportMailjetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-mailjet'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-mailjet'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportMailjetIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportMastodonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mastodon']['$get']>>,
) {
  return ['api', '/api/transport-mastodon', toValue(args)] as const
}

export function getApiTransportMastodonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mastodon']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportMastodonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-mastodon'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportMastodon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mastodon']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mastodon']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mastodon']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mastodon']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportMastodonQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mastodon']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMastodonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportMastodonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-mastodon'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportMastodonMutationKey() {
  return ['api', '/api/transport-mastodon', 'POST'] as const
}

export function getPostApiTransportMastodonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-mastodon']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-mastodon']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportMastodonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-mastodon']['$post']>) {
      return parseResponse(client.api['transport-mastodon'].$post(args, options))
    },
  })
}

export function usePostApiTransportMastodon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mastodon']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-mastodon']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportMastodonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportMastodonIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-mastodon'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-mastodon/:id', toValue(args)] as const
}

export function getApiTransportMastodonIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-mastodon'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportMastodonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-mastodon'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportMastodonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-mastodon'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-mastodon'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mastodon'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mastodon'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportMastodonIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-mastodon'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMastodonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportMastodonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-mastodon'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportMastodonIdMutationKey() {
  return ['api', '/api/transport-mastodon/:id', 'PUT'] as const
}

export function getPutApiTransportMastodonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-mastodon'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-mastodon'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportMastodonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-mastodon'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-mastodon'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportMastodonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mastodon'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-mastodon'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportMastodonIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportMastodonIdMutationKey() {
  return ['api', '/api/transport-mastodon/:id', 'DELETE'] as const
}

export function getDeleteApiTransportMastodonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-mastodon'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-mastodon'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportMastodonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-mastodon'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-mastodon'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportMastodonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-mastodon'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-mastodon'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportMastodonIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportMattermostQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mattermost']['$get']>>,
) {
  return ['api', '/api/transport-mattermost', toValue(args)] as const
}

export function getApiTransportMattermostQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mattermost']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportMattermostQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-mattermost'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportMattermost<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mattermost']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mattermost']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mattermost']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mattermost']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportMattermostQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-mattermost']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMattermostQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportMattermostQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-mattermost'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportMattermostMutationKey() {
  return ['api', '/api/transport-mattermost', 'POST'] as const
}

export function getPostApiTransportMattermostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-mattermost']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-mattermost']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportMattermostMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-mattermost']['$post']>) {
      return parseResponse(client.api['transport-mattermost'].$post(args, options))
    },
  })
}

export function usePostApiTransportMattermost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mattermost']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-mattermost']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportMattermostMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportMattermostIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-mattermost'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-mattermost/:id', toValue(args)] as const
}

export function getApiTransportMattermostIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-mattermost'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportMattermostIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-mattermost'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportMattermostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-mattermost'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-mattermost'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mattermost'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mattermost'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportMattermostIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-mattermost'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMattermostIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportMattermostIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-mattermost'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportMattermostIdMutationKey() {
  return ['api', '/api/transport-mattermost/:id', 'PUT'] as const
}

export function getPutApiTransportMattermostIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-mattermost'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-mattermost'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportMattermostIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-mattermost'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-mattermost'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportMattermostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mattermost'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-mattermost'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportMattermostIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportMattermostIdMutationKey() {
  return ['api', '/api/transport-mattermost/:id', 'DELETE'] as const
}

export function getDeleteApiTransportMattermostIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-mattermost'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-mattermost'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportMattermostIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-mattermost'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-mattermost'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportMattermostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-mattermost'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-mattermost'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportMattermostIdMutationOptions<
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

export function getApiTransportMercureQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mercure']['$get']>>,
) {
  return ['api', '/api/transport-mercure', toValue(args)] as const
}

export function getApiTransportMercureQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mercure']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportMercureQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-mercure'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportMercure<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mercure']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mercure']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mercure']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mercure']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportMercureQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mercure']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMercureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportMercureQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-mercure'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportMercureMutationKey() {
  return ['api', '/api/transport-mercure', 'POST'] as const
}

export function getPostApiTransportMercureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mercure']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-mercure']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportMercureMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-mercure']['$post']>) {
      return parseResponse(client.api['transport-mercure'].$post(args, options))
    },
  })
}

export function usePostApiTransportMercure<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mercure']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-mercure']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportMercureMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportMercureIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mercure'][':id']['$get']>>,
) {
  return ['api', '/api/transport-mercure/:id', toValue(args)] as const
}

export function getApiTransportMercureIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mercure'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportMercureIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-mercure'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportMercureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-mercure'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mercure'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mercure'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mercure'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportMercureIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-mercure'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMercureIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportMercureIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-mercure'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportMercureIdMutationKey() {
  return ['api', '/api/transport-mercure/:id', 'PUT'] as const
}

export function getPutApiTransportMercureIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-mercure'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-mercure'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportMercureIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-mercure'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-mercure'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportMercureId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mercure'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-mercure'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportMercureIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportMercureIdMutationKey() {
  return ['api', '/api/transport-mercure/:id', 'DELETE'] as const
}

export function getDeleteApiTransportMercureIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-mercure'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-mercure'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportMercureIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-mercure'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-mercure'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportMercureId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-mercure'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-mercure'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportMercureIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportMessageBirdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-message-bird']['$get']>>,
) {
  return ['api', '/api/transport-message-bird', toValue(args)] as const
}

export function getApiTransportMessageBirdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-message-bird']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportMessageBirdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-message-bird'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportMessageBird<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-message-bird']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-message-bird']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-message-bird']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-message-bird']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportMessageBirdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-message-bird']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMessageBirdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportMessageBirdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-message-bird'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportMessageBirdMutationKey() {
  return ['api', '/api/transport-message-bird', 'POST'] as const
}

export function getPostApiTransportMessageBirdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-message-bird']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-message-bird']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportMessageBirdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-message-bird']['$post']>,
    ) {
      return parseResponse(client.api['transport-message-bird'].$post(args, options))
    },
  })
}

export function usePostApiTransportMessageBird<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-message-bird']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-message-bird']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportMessageBirdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportMessageBirdIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-message-bird'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-message-bird/:id', toValue(args)] as const
}

export function getApiTransportMessageBirdIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-message-bird'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportMessageBirdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-message-bird'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportMessageBirdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-message-bird'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-message-bird'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-message-bird'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-message-bird'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportMessageBirdIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-message-bird'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMessageBirdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportMessageBirdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-message-bird'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportMessageBirdIdMutationKey() {
  return ['api', '/api/transport-message-bird/:id', 'PUT'] as const
}

export function getPutApiTransportMessageBirdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-message-bird'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-message-bird'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportMessageBirdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-message-bird'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-message-bird'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportMessageBirdId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-message-bird'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-message-bird'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportMessageBirdIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportMessageBirdIdMutationKey() {
  return ['api', '/api/transport-message-bird/:id', 'DELETE'] as const
}

export function getDeleteApiTransportMessageBirdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-message-bird'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-message-bird'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportMessageBirdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-message-bird'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-message-bird'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportMessageBirdId<
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
                    ReturnType<(typeof client.api)['transport-message-bird'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-message-bird'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportMessageBirdIdMutationOptions<
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

export function getApiTransportMessageMediaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-message-media']['$get']>>,
) {
  return ['api', '/api/transport-message-media', toValue(args)] as const
}

export function getApiTransportMessageMediaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-message-media']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportMessageMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-message-media'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportMessageMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-message-media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-message-media']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-message-media']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-message-media']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportMessageMediaQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-message-media']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMessageMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportMessageMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-message-media'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportMessageMediaMutationKey() {
  return ['api', '/api/transport-message-media', 'POST'] as const
}

export function getPostApiTransportMessageMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-message-media']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-message-media']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportMessageMediaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-message-media']['$post']>,
    ) {
      return parseResponse(client.api['transport-message-media'].$post(args, options))
    },
  })
}

export function usePostApiTransportMessageMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-message-media']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-message-media']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportMessageMediaMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportMessageMediaIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-message-media'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-message-media/:id', toValue(args)] as const
}

export function getApiTransportMessageMediaIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-message-media'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportMessageMediaIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-message-media'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportMessageMediaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-message-media'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-message-media'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-message-media'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-message-media'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportMessageMediaIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-message-media'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMessageMediaIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportMessageMediaIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-message-media'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportMessageMediaIdMutationKey() {
  return ['api', '/api/transport-message-media/:id', 'PUT'] as const
}

export function getPutApiTransportMessageMediaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-message-media'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-message-media'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportMessageMediaIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-message-media'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-message-media'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportMessageMediaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-message-media'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-message-media'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportMessageMediaIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportMessageMediaIdMutationKey() {
  return ['api', '/api/transport-message-media/:id', 'DELETE'] as const
}

export function getDeleteApiTransportMessageMediaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-message-media'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-message-media'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportMessageMediaIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-message-media'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-message-media'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportMessageMediaId<
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
                    ReturnType<(typeof client.api)['transport-message-media'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-message-media'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportMessageMediaIdMutationOptions<
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

export function getApiTransportMicrosoftTeamsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-microsoft-teams']['$get']>
  >,
) {
  return ['api', '/api/transport-microsoft-teams', toValue(args)] as const
}

export function getApiTransportMicrosoftTeamsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-microsoft-teams']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportMicrosoftTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-microsoft-teams'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportMicrosoftTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-microsoft-teams']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportMicrosoftTeamsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMicrosoftTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportMicrosoftTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-microsoft-teams'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportMicrosoftTeamsMutationKey() {
  return ['api', '/api/transport-microsoft-teams', 'POST'] as const
}

export function getPostApiTransportMicrosoftTeamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-microsoft-teams']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportMicrosoftTeamsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-microsoft-teams']['$post']>,
    ) {
      return parseResponse(client.api['transport-microsoft-teams'].$post(args, options))
    },
  })
}

export function usePostApiTransportMicrosoftTeams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-microsoft-teams']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportMicrosoftTeamsMutationOptions<
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

export function getApiTransportMicrosoftTeamsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-microsoft-teams'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-microsoft-teams/:id', toValue(args)] as const
}

export function getApiTransportMicrosoftTeamsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-microsoft-teams'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportMicrosoftTeamsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-microsoft-teams'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportMicrosoftTeamsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-microsoft-teams'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportMicrosoftTeamsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMicrosoftTeamsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportMicrosoftTeamsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-microsoft-teams'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportMicrosoftTeamsIdMutationKey() {
  return ['api', '/api/transport-microsoft-teams/:id', 'PUT'] as const
}

export function getPutApiTransportMicrosoftTeamsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-microsoft-teams'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportMicrosoftTeamsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-microsoft-teams'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-microsoft-teams'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportMicrosoftTeamsId<
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
                Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-microsoft-teams'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportMicrosoftTeamsIdMutationOptions<
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

export function getDeleteApiTransportMicrosoftTeamsIdMutationKey() {
  return ['api', '/api/transport-microsoft-teams/:id', 'DELETE'] as const
}

export function getDeleteApiTransportMicrosoftTeamsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-microsoft-teams'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportMicrosoftTeamsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-microsoft-teams'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-microsoft-teams'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportMicrosoftTeamsId<
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
                    ReturnType<(typeof client.api)['transport-microsoft-teams'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-microsoft-teams'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportMicrosoftTeamsIdMutationOptions<
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

export function getApiTransportMobytQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mobyt']['$get']>>,
) {
  return ['api', '/api/transport-mobyt', toValue(args)] as const
}

export function getApiTransportMobytQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mobyt']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportMobytQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-mobyt'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportMobyt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mobyt']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mobyt']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mobyt']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mobyt']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportMobytQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mobyt']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMobytQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportMobytQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-mobyt'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportMobytMutationKey() {
  return ['api', '/api/transport-mobyt', 'POST'] as const
}

export function getPostApiTransportMobytMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mobyt']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-mobyt']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportMobytMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-mobyt']['$post']>) {
      return parseResponse(client.api['transport-mobyt'].$post(args, options))
    },
  })
}

export function usePostApiTransportMobyt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mobyt']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-mobyt']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportMobytMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportMobytIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mobyt'][':id']['$get']>>,
) {
  return ['api', '/api/transport-mobyt/:id', toValue(args)] as const
}

export function getApiTransportMobytIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mobyt'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportMobytIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-mobyt'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportMobytId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-mobyt'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-mobyt'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mobyt'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mobyt'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportMobytIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-mobyt'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMobytIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportMobytIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-mobyt'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportMobytIdMutationKey() {
  return ['api', '/api/transport-mobyt/:id', 'PUT'] as const
}

export function getPutApiTransportMobytIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-mobyt'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-mobyt'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportMobytIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-mobyt'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-mobyt'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportMobytId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mobyt'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-mobyt'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportMobytIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportMobytIdMutationKey() {
  return ['api', '/api/transport-mobyt/:id', 'DELETE'] as const
}

export function getDeleteApiTransportMobytIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-mobyt'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-mobyt'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportMobytIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-mobyt'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-mobyt'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportMobytId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-mobyt'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-mobyt'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportMobytIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportOctopushQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-octopush']['$get']>>,
) {
  return ['api', '/api/transport-octopush', toValue(args)] as const
}

export function getApiTransportOctopushQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-octopush']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportOctopushQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-octopush'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportOctopush<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-octopush']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-octopush']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-octopush']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-octopush']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportOctopushQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-octopush']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportOctopushQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportOctopushQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-octopush'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportOctopushMutationKey() {
  return ['api', '/api/transport-octopush', 'POST'] as const
}

export function getPostApiTransportOctopushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-octopush']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-octopush']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportOctopushMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-octopush']['$post']>) {
      return parseResponse(client.api['transport-octopush'].$post(args, options))
    },
  })
}

export function usePostApiTransportOctopush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-octopush']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-octopush']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportOctopushMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportOctopushIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-octopush'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-octopush/:id', toValue(args)] as const
}

export function getApiTransportOctopushIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-octopush'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportOctopushIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-octopush'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportOctopushId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-octopush'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-octopush'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-octopush'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-octopush'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportOctopushIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-octopush'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportOctopushIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportOctopushIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-octopush'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportOctopushIdMutationKey() {
  return ['api', '/api/transport-octopush/:id', 'PUT'] as const
}

export function getPutApiTransportOctopushIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-octopush'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-octopush'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportOctopushIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-octopush'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-octopush'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportOctopushId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-octopush'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-octopush'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportOctopushIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportOctopushIdMutationKey() {
  return ['api', '/api/transport-octopush/:id', 'DELETE'] as const
}

export function getDeleteApiTransportOctopushIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-octopush'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-octopush'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportOctopushIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-octopush'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-octopush'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportOctopushId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-octopush'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-octopush'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportOctopushIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportOneSignalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-one-signal']['$get']>>,
) {
  return ['api', '/api/transport-one-signal', toValue(args)] as const
}

export function getApiTransportOneSignalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-one-signal']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportOneSignalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-one-signal'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportOneSignal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-one-signal']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-one-signal']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-one-signal']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-one-signal']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportOneSignalQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-one-signal']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportOneSignalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportOneSignalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-one-signal'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportOneSignalMutationKey() {
  return ['api', '/api/transport-one-signal', 'POST'] as const
}

export function getPostApiTransportOneSignalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-one-signal']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-one-signal']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportOneSignalMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-one-signal']['$post']>) {
      return parseResponse(client.api['transport-one-signal'].$post(args, options))
    },
  })
}

export function usePostApiTransportOneSignal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-one-signal']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-one-signal']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportOneSignalMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportOneSignalIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-one-signal'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-one-signal/:id', toValue(args)] as const
}

export function getApiTransportOneSignalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-one-signal'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportOneSignalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-one-signal'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportOneSignalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-one-signal'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-one-signal'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-one-signal'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-one-signal'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportOneSignalIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-one-signal'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportOneSignalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportOneSignalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-one-signal'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportOneSignalIdMutationKey() {
  return ['api', '/api/transport-one-signal/:id', 'PUT'] as const
}

export function getPutApiTransportOneSignalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-one-signal'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-one-signal'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportOneSignalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-one-signal'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-one-signal'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportOneSignalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-one-signal'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-one-signal'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportOneSignalIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportOneSignalIdMutationKey() {
  return ['api', '/api/transport-one-signal/:id', 'DELETE'] as const
}

export function getDeleteApiTransportOneSignalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-one-signal'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-one-signal'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportOneSignalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-one-signal'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-one-signal'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportOneSignalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-one-signal'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-one-signal'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportOneSignalIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportOpsgenieQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-opsgenie']['$get']>>,
) {
  return ['api', '/api/transport-opsgenie', toValue(args)] as const
}

export function getApiTransportOpsgenieQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-opsgenie']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportOpsgenieQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-opsgenie'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportOpsgenie<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-opsgenie']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-opsgenie']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-opsgenie']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-opsgenie']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportOpsgenieQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-opsgenie']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportOpsgenieQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportOpsgenieQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-opsgenie'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportOpsgenieMutationKey() {
  return ['api', '/api/transport-opsgenie', 'POST'] as const
}

export function getPostApiTransportOpsgenieMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-opsgenie']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-opsgenie']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportOpsgenieMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-opsgenie']['$post']>) {
      return parseResponse(client.api['transport-opsgenie'].$post(args, options))
    },
  })
}

export function usePostApiTransportOpsgenie<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-opsgenie']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-opsgenie']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportOpsgenieMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportOpsgenieIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-opsgenie'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-opsgenie/:id', toValue(args)] as const
}

export function getApiTransportOpsgenieIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-opsgenie'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportOpsgenieIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-opsgenie'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportOpsgenieId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-opsgenie'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-opsgenie'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-opsgenie'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-opsgenie'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportOpsgenieIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-opsgenie'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportOpsgenieIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportOpsgenieIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-opsgenie'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportOpsgenieIdMutationKey() {
  return ['api', '/api/transport-opsgenie/:id', 'PUT'] as const
}

export function getPutApiTransportOpsgenieIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-opsgenie'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-opsgenie'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportOpsgenieIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-opsgenie'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-opsgenie'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportOpsgenieId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-opsgenie'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-opsgenie'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportOpsgenieIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportOpsgenieIdMutationKey() {
  return ['api', '/api/transport-opsgenie/:id', 'DELETE'] as const
}

export function getDeleteApiTransportOpsgenieIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-opsgenie'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-opsgenie'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportOpsgenieIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-opsgenie'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-opsgenie'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportOpsgenieId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-opsgenie'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-opsgenie'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportOpsgenieIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportOrangeSmsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-orange-sms']['$get']>>,
) {
  return ['api', '/api/transport-orange-sms', toValue(args)] as const
}

export function getApiTransportOrangeSmsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-orange-sms']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportOrangeSmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-orange-sms'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportOrangeSms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-orange-sms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-orange-sms']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-orange-sms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-orange-sms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportOrangeSmsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-orange-sms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportOrangeSmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportOrangeSmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-orange-sms'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportOrangeSmsMutationKey() {
  return ['api', '/api/transport-orange-sms', 'POST'] as const
}

export function getPostApiTransportOrangeSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-orange-sms']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-orange-sms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportOrangeSmsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-orange-sms']['$post']>) {
      return parseResponse(client.api['transport-orange-sms'].$post(args, options))
    },
  })
}

export function usePostApiTransportOrangeSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-orange-sms']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-orange-sms']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportOrangeSmsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportOrangeSmsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-orange-sms'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-orange-sms/:id', toValue(args)] as const
}

export function getApiTransportOrangeSmsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-orange-sms'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportOrangeSmsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-orange-sms'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportOrangeSmsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-orange-sms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-orange-sms'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-orange-sms'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-orange-sms'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportOrangeSmsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-orange-sms'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportOrangeSmsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportOrangeSmsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-orange-sms'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportOrangeSmsIdMutationKey() {
  return ['api', '/api/transport-orange-sms/:id', 'PUT'] as const
}

export function getPutApiTransportOrangeSmsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-orange-sms'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-orange-sms'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportOrangeSmsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-orange-sms'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-orange-sms'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportOrangeSmsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-orange-sms'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-orange-sms'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportOrangeSmsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportOrangeSmsIdMutationKey() {
  return ['api', '/api/transport-orange-sms/:id', 'DELETE'] as const
}

export function getDeleteApiTransportOrangeSmsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-orange-sms'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-orange-sms'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportOrangeSmsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-orange-sms'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-orange-sms'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportOrangeSmsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-orange-sms'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-orange-sms'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportOrangeSmsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportOvhCloudQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-ovh-cloud']['$get']>>,
) {
  return ['api', '/api/transport-ovh-cloud', toValue(args)] as const
}

export function getApiTransportOvhCloudQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-ovh-cloud']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportOvhCloudQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-ovh-cloud'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportOvhCloud<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-ovh-cloud']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportOvhCloudQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportOvhCloudQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportOvhCloudQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-ovh-cloud'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportOvhCloudMutationKey() {
  return ['api', '/api/transport-ovh-cloud', 'POST'] as const
}

export function getPostApiTransportOvhCloudMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-ovh-cloud']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportOvhCloudMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-ovh-cloud']['$post']>) {
      return parseResponse(client.api['transport-ovh-cloud'].$post(args, options))
    },
  })
}

export function usePostApiTransportOvhCloud<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-ovh-cloud']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportOvhCloudMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportOvhCloudIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-ovh-cloud'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-ovh-cloud/:id', toValue(args)] as const
}

export function getApiTransportOvhCloudIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-ovh-cloud'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportOvhCloudIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-ovh-cloud'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportOvhCloudId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-ovh-cloud'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportOvhCloudIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportOvhCloudIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportOvhCloudIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-ovh-cloud'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportOvhCloudIdMutationKey() {
  return ['api', '/api/transport-ovh-cloud/:id', 'PUT'] as const
}

export function getPutApiTransportOvhCloudIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-ovh-cloud'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportOvhCloudIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-ovh-cloud'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-ovh-cloud'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportOvhCloudId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-ovh-cloud'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportOvhCloudIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportOvhCloudIdMutationKey() {
  return ['api', '/api/transport-ovh-cloud/:id', 'DELETE'] as const
}

export function getDeleteApiTransportOvhCloudIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-ovh-cloud'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportOvhCloudIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-ovh-cloud'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-ovh-cloud'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportOvhCloudId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-ovh-cloud'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportOvhCloudIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportPagerDutyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pager-duty']['$get']>>,
) {
  return ['api', '/api/transport-pager-duty', toValue(args)] as const
}

export function getApiTransportPagerDutyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pager-duty']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportPagerDutyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-pager-duty'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportPagerDuty<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pager-duty']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pager-duty']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pager-duty']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pager-duty']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportPagerDutyQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-pager-duty']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportPagerDutyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportPagerDutyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-pager-duty'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportPagerDutyMutationKey() {
  return ['api', '/api/transport-pager-duty', 'POST'] as const
}

export function getPostApiTransportPagerDutyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-pager-duty']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-pager-duty']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportPagerDutyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-pager-duty']['$post']>) {
      return parseResponse(client.api['transport-pager-duty'].$post(args, options))
    },
  })
}

export function usePostApiTransportPagerDuty<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pager-duty']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-pager-duty']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportPagerDutyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportPagerDutyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-pager-duty'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-pager-duty/:id', toValue(args)] as const
}

export function getApiTransportPagerDutyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-pager-duty'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportPagerDutyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-pager-duty'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportPagerDutyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-pager-duty'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-pager-duty'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pager-duty'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pager-duty'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportPagerDutyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-pager-duty'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportPagerDutyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportPagerDutyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-pager-duty'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportPagerDutyIdMutationKey() {
  return ['api', '/api/transport-pager-duty/:id', 'PUT'] as const
}

export function getPutApiTransportPagerDutyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-pager-duty'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-pager-duty'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportPagerDutyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-pager-duty'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-pager-duty'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportPagerDutyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pager-duty'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-pager-duty'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportPagerDutyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportPagerDutyIdMutationKey() {
  return ['api', '/api/transport-pager-duty/:id', 'DELETE'] as const
}

export function getDeleteApiTransportPagerDutyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-pager-duty'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-pager-duty'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportPagerDutyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-pager-duty'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-pager-duty'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportPagerDutyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-pager-duty'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-pager-duty'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportPagerDutyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportPagerTreeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pager-tree']['$get']>>,
) {
  return ['api', '/api/transport-pager-tree', toValue(args)] as const
}

export function getApiTransportPagerTreeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pager-tree']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportPagerTreeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-pager-tree'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportPagerTree<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pager-tree']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pager-tree']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pager-tree']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pager-tree']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportPagerTreeQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-pager-tree']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportPagerTreeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportPagerTreeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-pager-tree'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportPagerTreeMutationKey() {
  return ['api', '/api/transport-pager-tree', 'POST'] as const
}

export function getPostApiTransportPagerTreeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-pager-tree']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-pager-tree']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportPagerTreeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-pager-tree']['$post']>) {
      return parseResponse(client.api['transport-pager-tree'].$post(args, options))
    },
  })
}

export function usePostApiTransportPagerTree<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pager-tree']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-pager-tree']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportPagerTreeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportPagerTreeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-pager-tree'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-pager-tree/:id', toValue(args)] as const
}

export function getApiTransportPagerTreeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-pager-tree'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportPagerTreeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-pager-tree'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportPagerTreeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-pager-tree'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-pager-tree'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pager-tree'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pager-tree'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportPagerTreeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-pager-tree'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportPagerTreeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportPagerTreeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-pager-tree'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportPagerTreeIdMutationKey() {
  return ['api', '/api/transport-pager-tree/:id', 'PUT'] as const
}

export function getPutApiTransportPagerTreeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-pager-tree'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-pager-tree'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportPagerTreeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-pager-tree'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-pager-tree'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportPagerTreeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pager-tree'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-pager-tree'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportPagerTreeIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportPagerTreeIdMutationKey() {
  return ['api', '/api/transport-pager-tree/:id', 'DELETE'] as const
}

export function getDeleteApiTransportPagerTreeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-pager-tree'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-pager-tree'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportPagerTreeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-pager-tree'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-pager-tree'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportPagerTreeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-pager-tree'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-pager-tree'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportPagerTreeIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportPlivoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-plivo']['$get']>>,
) {
  return ['api', '/api/transport-plivo', toValue(args)] as const
}

export function getApiTransportPlivoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-plivo']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportPlivoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-plivo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportPlivo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-plivo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-plivo']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-plivo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-plivo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportPlivoQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-plivo']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportPlivoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportPlivoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-plivo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportPlivoMutationKey() {
  return ['api', '/api/transport-plivo', 'POST'] as const
}

export function getPostApiTransportPlivoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-plivo']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-plivo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportPlivoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-plivo']['$post']>) {
      return parseResponse(client.api['transport-plivo'].$post(args, options))
    },
  })
}

export function usePostApiTransportPlivo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-plivo']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-plivo']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportPlivoMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportPlivoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-plivo'][':id']['$get']>>,
) {
  return ['api', '/api/transport-plivo/:id', toValue(args)] as const
}

export function getApiTransportPlivoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-plivo'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportPlivoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-plivo'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportPlivoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-plivo'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-plivo'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-plivo'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-plivo'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportPlivoIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-plivo'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportPlivoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportPlivoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-plivo'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportPlivoIdMutationKey() {
  return ['api', '/api/transport-plivo/:id', 'PUT'] as const
}

export function getPutApiTransportPlivoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-plivo'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-plivo'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportPlivoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-plivo'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-plivo'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportPlivoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-plivo'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-plivo'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportPlivoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportPlivoIdMutationKey() {
  return ['api', '/api/transport-plivo/:id', 'DELETE'] as const
}

export function getDeleteApiTransportPlivoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-plivo'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-plivo'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportPlivoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-plivo'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-plivo'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportPlivoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-plivo'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-plivo'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportPlivoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportPushbulletQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pushbullet']['$get']>>,
) {
  return ['api', '/api/transport-pushbullet', toValue(args)] as const
}

export function getApiTransportPushbulletQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pushbullet']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportPushbulletQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-pushbullet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportPushbullet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pushbullet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pushbullet']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushbullet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushbullet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportPushbulletQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-pushbullet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportPushbulletQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportPushbulletQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-pushbullet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportPushbulletMutationKey() {
  return ['api', '/api/transport-pushbullet', 'POST'] as const
}

export function getPostApiTransportPushbulletMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-pushbullet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-pushbullet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportPushbulletMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-pushbullet']['$post']>) {
      return parseResponse(client.api['transport-pushbullet'].$post(args, options))
    },
  })
}

export function usePostApiTransportPushbullet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushbullet']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-pushbullet']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportPushbulletMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportPushbulletIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-pushbullet'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-pushbullet/:id', toValue(args)] as const
}

export function getApiTransportPushbulletIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-pushbullet'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportPushbulletIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-pushbullet'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportPushbulletId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-pushbullet'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-pushbullet'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushbullet'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushbullet'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportPushbulletIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-pushbullet'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportPushbulletIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportPushbulletIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-pushbullet'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportPushbulletIdMutationKey() {
  return ['api', '/api/transport-pushbullet/:id', 'PUT'] as const
}

export function getPutApiTransportPushbulletIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-pushbullet'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-pushbullet'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportPushbulletIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-pushbullet'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-pushbullet'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportPushbulletId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushbullet'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-pushbullet'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportPushbulletIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportPushbulletIdMutationKey() {
  return ['api', '/api/transport-pushbullet/:id', 'DELETE'] as const
}

export function getDeleteApiTransportPushbulletIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-pushbullet'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-pushbullet'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportPushbulletIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-pushbullet'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-pushbullet'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportPushbulletId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-pushbullet'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-pushbullet'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportPushbulletIdMutationOptions<
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

export function getApiTransportPushoverQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pushover']['$get']>>,
) {
  return ['api', '/api/transport-pushover', toValue(args)] as const
}

export function getApiTransportPushoverQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pushover']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportPushoverQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-pushover'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportPushover<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pushover']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pushover']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushover']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushover']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportPushoverQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pushover']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportPushoverQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportPushoverQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-pushover'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportPushoverMutationKey() {
  return ['api', '/api/transport-pushover', 'POST'] as const
}

export function getPostApiTransportPushoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-pushover']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-pushover']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportPushoverMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-pushover']['$post']>) {
      return parseResponse(client.api['transport-pushover'].$post(args, options))
    },
  })
}

export function usePostApiTransportPushover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushover']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-pushover']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportPushoverMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportPushoverIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-pushover'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-pushover/:id', toValue(args)] as const
}

export function getApiTransportPushoverIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-pushover'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportPushoverIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-pushover'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportPushoverId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-pushover'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-pushover'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushover'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushover'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportPushoverIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-pushover'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportPushoverIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportPushoverIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-pushover'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportPushoverIdMutationKey() {
  return ['api', '/api/transport-pushover/:id', 'PUT'] as const
}

export function getPutApiTransportPushoverIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-pushover'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-pushover'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportPushoverIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-pushover'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-pushover'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportPushoverId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushover'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-pushover'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportPushoverIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportPushoverIdMutationKey() {
  return ['api', '/api/transport-pushover/:id', 'DELETE'] as const
}

export function getDeleteApiTransportPushoverIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-pushover'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-pushover'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportPushoverIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-pushover'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-pushover'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportPushoverId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-pushover'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-pushover'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportPushoverIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportPushyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pushy']['$get']>>,
) {
  return ['api', '/api/transport-pushy', toValue(args)] as const
}

export function getApiTransportPushyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pushy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportPushyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-pushy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportPushy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pushy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pushy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportPushyQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pushy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportPushyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportPushyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-pushy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportPushyMutationKey() {
  return ['api', '/api/transport-pushy', 'POST'] as const
}

export function getPostApiTransportPushyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pushy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-pushy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportPushyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-pushy']['$post']>) {
      return parseResponse(client.api['transport-pushy'].$post(args, options))
    },
  })
}

export function usePostApiTransportPushy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-pushy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportPushyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportPushyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pushy'][':id']['$get']>>,
) {
  return ['api', '/api/transport-pushy/:id', toValue(args)] as const
}

export function getApiTransportPushyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pushy'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportPushyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-pushy'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportPushyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-pushy'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-pushy'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushy'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushy'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportPushyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-pushy'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportPushyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportPushyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-pushy'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportPushyIdMutationKey() {
  return ['api', '/api/transport-pushy/:id', 'PUT'] as const
}

export function getPutApiTransportPushyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-pushy'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-pushy'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportPushyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-pushy'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-pushy'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportPushyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushy'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-pushy'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportPushyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportPushyIdMutationKey() {
  return ['api', '/api/transport-pushy/:id', 'DELETE'] as const
}

export function getDeleteApiTransportPushyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-pushy'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-pushy'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportPushyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-pushy'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-pushy'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportPushyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-pushy'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-pushy'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportPushyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportRingCentralQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-ring-central']['$get']>>,
) {
  return ['api', '/api/transport-ring-central', toValue(args)] as const
}

export function getApiTransportRingCentralQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-ring-central']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportRingCentralQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-ring-central'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportRingCentral<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-ring-central']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-ring-central']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-ring-central']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-ring-central']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportRingCentralQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-ring-central']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportRingCentralQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportRingCentralQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-ring-central'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportRingCentralMutationKey() {
  return ['api', '/api/transport-ring-central', 'POST'] as const
}

export function getPostApiTransportRingCentralMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-ring-central']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-ring-central']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportRingCentralMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-ring-central']['$post']>,
    ) {
      return parseResponse(client.api['transport-ring-central'].$post(args, options))
    },
  })
}

export function usePostApiTransportRingCentral<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-ring-central']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-ring-central']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportRingCentralMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportRingCentralIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-ring-central'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-ring-central/:id', toValue(args)] as const
}

export function getApiTransportRingCentralIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-ring-central'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportRingCentralIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-ring-central'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportRingCentralId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-ring-central'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-ring-central'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-ring-central'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-ring-central'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportRingCentralIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-ring-central'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportRingCentralIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportRingCentralIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-ring-central'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportRingCentralIdMutationKey() {
  return ['api', '/api/transport-ring-central/:id', 'PUT'] as const
}

export function getPutApiTransportRingCentralIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-ring-central'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-ring-central'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportRingCentralIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-ring-central'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-ring-central'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportRingCentralId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-ring-central'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-ring-central'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportRingCentralIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportRingCentralIdMutationKey() {
  return ['api', '/api/transport-ring-central/:id', 'DELETE'] as const
}

export function getDeleteApiTransportRingCentralIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-ring-central'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-ring-central'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportRingCentralIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-ring-central'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-ring-central'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportRingCentralId<
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
                    ReturnType<(typeof client.api)['transport-ring-central'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-ring-central'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportRingCentralIdMutationOptions<
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

export function getApiTransportRocketChatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-rocket-chat']['$get']>>,
) {
  return ['api', '/api/transport-rocket-chat', toValue(args)] as const
}

export function getApiTransportRocketChatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-rocket-chat']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportRocketChatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-rocket-chat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportRocketChat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-rocket-chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-rocket-chat']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-rocket-chat']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-rocket-chat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportRocketChatQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-rocket-chat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportRocketChatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportRocketChatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-rocket-chat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportRocketChatMutationKey() {
  return ['api', '/api/transport-rocket-chat', 'POST'] as const
}

export function getPostApiTransportRocketChatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-rocket-chat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-rocket-chat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportRocketChatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-rocket-chat']['$post']>,
    ) {
      return parseResponse(client.api['transport-rocket-chat'].$post(args, options))
    },
  })
}

export function usePostApiTransportRocketChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-rocket-chat']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-rocket-chat']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportRocketChatMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportRocketChatIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-rocket-chat'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-rocket-chat/:id', toValue(args)] as const
}

export function getApiTransportRocketChatIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-rocket-chat'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportRocketChatIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-rocket-chat'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportRocketChatId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-rocket-chat'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-rocket-chat'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-rocket-chat'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-rocket-chat'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportRocketChatIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-rocket-chat'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportRocketChatIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportRocketChatIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-rocket-chat'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportRocketChatIdMutationKey() {
  return ['api', '/api/transport-rocket-chat/:id', 'PUT'] as const
}

export function getPutApiTransportRocketChatIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-rocket-chat'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-rocket-chat'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportRocketChatIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-rocket-chat'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-rocket-chat'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportRocketChatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-rocket-chat'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-rocket-chat'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportRocketChatIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportRocketChatIdMutationKey() {
  return ['api', '/api/transport-rocket-chat/:id', 'DELETE'] as const
}

export function getDeleteApiTransportRocketChatIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-rocket-chat'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-rocket-chat'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportRocketChatIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-rocket-chat'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-rocket-chat'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportRocketChatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api)['transport-rocket-chat'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-rocket-chat'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportRocketChatIdMutationOptions<
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

export function getApiTransportSendberryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sendberry']['$get']>>,
) {
  return ['api', '/api/transport-sendberry', toValue(args)] as const
}

export function getApiTransportSendberryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sendberry']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSendberryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-sendberry'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSendberry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sendberry']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sendberry']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sendberry']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sendberry']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSendberryQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-sendberry']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSendberryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSendberryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-sendberry'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportSendberryMutationKey() {
  return ['api', '/api/transport-sendberry', 'POST'] as const
}

export function getPostApiTransportSendberryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-sendberry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-sendberry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportSendberryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-sendberry']['$post']>) {
      return parseResponse(client.api['transport-sendberry'].$post(args, options))
    },
  })
}

export function usePostApiTransportSendberry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sendberry']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-sendberry']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportSendberryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSendberryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-sendberry'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-sendberry/:id', toValue(args)] as const
}

export function getApiTransportSendberryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-sendberry'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSendberryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-sendberry'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSendberryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sendberry'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-sendberry'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sendberry'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sendberry'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSendberryIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-sendberry'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSendberryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSendberryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-sendberry'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportSendberryIdMutationKey() {
  return ['api', '/api/transport-sendberry/:id', 'PUT'] as const
}

export function getPutApiTransportSendberryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-sendberry'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-sendberry'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportSendberryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-sendberry'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-sendberry'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportSendberryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sendberry'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-sendberry'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportSendberryIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportSendberryIdMutationKey() {
  return ['api', '/api/transport-sendberry/:id', 'DELETE'] as const
}

export function getDeleteApiTransportSendberryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-sendberry'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-sendberry'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportSendberryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-sendberry'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-sendberry'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportSendberryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-sendberry'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-sendberry'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportSendberryIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSendinblueQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sendinblue']['$get']>>,
) {
  return ['api', '/api/transport-sendinblue', toValue(args)] as const
}

export function getApiTransportSendinblueQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sendinblue']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSendinblueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-sendinblue'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSendinblue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sendinblue']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sendinblue']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sendinblue']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sendinblue']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSendinblueQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-sendinblue']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSendinblueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSendinblueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-sendinblue'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportSendinblueMutationKey() {
  return ['api', '/api/transport-sendinblue', 'POST'] as const
}

export function getPostApiTransportSendinblueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-sendinblue']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-sendinblue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportSendinblueMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-sendinblue']['$post']>) {
      return parseResponse(client.api['transport-sendinblue'].$post(args, options))
    },
  })
}

export function usePostApiTransportSendinblue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sendinblue']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-sendinblue']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportSendinblueMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSendinblueIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-sendinblue'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-sendinblue/:id', toValue(args)] as const
}

export function getApiTransportSendinblueIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-sendinblue'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSendinblueIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-sendinblue'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSendinblueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sendinblue'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-sendinblue'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sendinblue'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sendinblue'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSendinblueIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-sendinblue'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSendinblueIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSendinblueIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-sendinblue'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportSendinblueIdMutationKey() {
  return ['api', '/api/transport-sendinblue/:id', 'PUT'] as const
}

export function getPutApiTransportSendinblueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-sendinblue'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-sendinblue'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportSendinblueIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-sendinblue'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-sendinblue'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportSendinblueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sendinblue'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-sendinblue'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportSendinblueIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportSendinblueIdMutationKey() {
  return ['api', '/api/transport-sendinblue/:id', 'DELETE'] as const
}

export function getDeleteApiTransportSendinblueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-sendinblue'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-sendinblue'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportSendinblueIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-sendinblue'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-sendinblue'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportSendinblueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-sendinblue'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-sendinblue'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportSendinblueIdMutationOptions<
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

export function getApiTransportSimpleTextinQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-simple-textin']['$get']>>,
) {
  return ['api', '/api/transport-simple-textin', toValue(args)] as const
}

export function getApiTransportSimpleTextinQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-simple-textin']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSimpleTextinQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-simple-textin'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSimpleTextin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-simple-textin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-simple-textin']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-simple-textin']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-simple-textin']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSimpleTextinQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-simple-textin']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSimpleTextinQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSimpleTextinQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-simple-textin'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportSimpleTextinMutationKey() {
  return ['api', '/api/transport-simple-textin', 'POST'] as const
}

export function getPostApiTransportSimpleTextinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-simple-textin']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-simple-textin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportSimpleTextinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-simple-textin']['$post']>,
    ) {
      return parseResponse(client.api['transport-simple-textin'].$post(args, options))
    },
  })
}

export function usePostApiTransportSimpleTextin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-simple-textin']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-simple-textin']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportSimpleTextinMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSimpleTextinIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-simple-textin'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-simple-textin/:id', toValue(args)] as const
}

export function getApiTransportSimpleTextinIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-simple-textin'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSimpleTextinIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-simple-textin'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSimpleTextinId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-simple-textin'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-simple-textin'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-simple-textin'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-simple-textin'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSimpleTextinIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-simple-textin'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSimpleTextinIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSimpleTextinIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-simple-textin'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportSimpleTextinIdMutationKey() {
  return ['api', '/api/transport-simple-textin/:id', 'PUT'] as const
}

export function getPutApiTransportSimpleTextinIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-simple-textin'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-simple-textin'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportSimpleTextinIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-simple-textin'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-simple-textin'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportSimpleTextinId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-simple-textin'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-simple-textin'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportSimpleTextinIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportSimpleTextinIdMutationKey() {
  return ['api', '/api/transport-simple-textin/:id', 'DELETE'] as const
}

export function getDeleteApiTransportSimpleTextinIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-simple-textin'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-simple-textin'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportSimpleTextinIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-simple-textin'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-simple-textin'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportSimpleTextinId<
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
                    ReturnType<(typeof client.api)['transport-simple-textin'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-simple-textin'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportSimpleTextinIdMutationOptions<
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

export function getApiTransportSinchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sinch']['$get']>>,
) {
  return ['api', '/api/transport-sinch', toValue(args)] as const
}

export function getApiTransportSinchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sinch']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSinchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-sinch'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSinch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sinch']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sinch']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sinch']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sinch']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSinchQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sinch']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSinchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSinchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-sinch'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportSinchMutationKey() {
  return ['api', '/api/transport-sinch', 'POST'] as const
}

export function getPostApiTransportSinchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sinch']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-sinch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportSinchMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-sinch']['$post']>) {
      return parseResponse(client.api['transport-sinch'].$post(args, options))
    },
  })
}

export function usePostApiTransportSinch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sinch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-sinch']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportSinchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSinchIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sinch'][':id']['$get']>>,
) {
  return ['api', '/api/transport-sinch/:id', toValue(args)] as const
}

export function getApiTransportSinchIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sinch'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSinchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-sinch'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSinchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sinch'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sinch'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sinch'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sinch'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSinchIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-sinch'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSinchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSinchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-sinch'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportSinchIdMutationKey() {
  return ['api', '/api/transport-sinch/:id', 'PUT'] as const
}

export function getPutApiTransportSinchIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-sinch'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-sinch'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportSinchIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-sinch'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-sinch'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportSinchId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sinch'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-sinch'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportSinchIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportSinchIdMutationKey() {
  return ['api', '/api/transport-sinch/:id', 'DELETE'] as const
}

export function getDeleteApiTransportSinchIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-sinch'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-sinch'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportSinchIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-sinch'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-sinch'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportSinchId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-sinch'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-sinch'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportSinchIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSlackQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-slack']['$get']>>,
) {
  return ['api', '/api/transport-slack', toValue(args)] as const
}

export function getApiTransportSlackQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-slack']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSlackQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-slack'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSlack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-slack']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-slack']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-slack']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-slack']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSlackQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-slack']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSlackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSlackQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-slack'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportSlackMutationKey() {
  return ['api', '/api/transport-slack', 'POST'] as const
}

export function getPostApiTransportSlackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-slack']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-slack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportSlackMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-slack']['$post']>) {
      return parseResponse(client.api['transport-slack'].$post(args, options))
    },
  })
}

export function usePostApiTransportSlack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-slack']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-slack']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportSlackMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSlackIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-slack'][':id']['$get']>>,
) {
  return ['api', '/api/transport-slack/:id', toValue(args)] as const
}

export function getApiTransportSlackIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-slack'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSlackIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-slack'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSlackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-slack'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-slack'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-slack'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-slack'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSlackIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-slack'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSlackIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSlackIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-slack'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportSlackIdMutationKey() {
  return ['api', '/api/transport-slack/:id', 'PUT'] as const
}

export function getPutApiTransportSlackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-slack'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-slack'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportSlackIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-slack'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-slack'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportSlackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-slack'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-slack'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportSlackIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportSlackIdMutationKey() {
  return ['api', '/api/transport-slack/:id', 'DELETE'] as const
}

export function getDeleteApiTransportSlackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-slack'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-slack'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportSlackIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-slack'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-slack'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportSlackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-slack'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-slack'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportSlackIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSmsBiurasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sms-biuras']['$get']>>,
) {
  return ['api', '/api/transport-sms-biuras', toValue(args)] as const
}

export function getApiTransportSmsBiurasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sms-biuras']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSmsBiurasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-sms-biuras'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSmsBiuras<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sms-biuras']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sms-biuras']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms-biuras']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms-biuras']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSmsBiurasQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-sms-biuras']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSmsBiurasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSmsBiurasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-sms-biuras'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportSmsBiurasMutationKey() {
  return ['api', '/api/transport-sms-biuras', 'POST'] as const
}

export function getPostApiTransportSmsBiurasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-sms-biuras']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-sms-biuras']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportSmsBiurasMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-sms-biuras']['$post']>) {
      return parseResponse(client.api['transport-sms-biuras'].$post(args, options))
    },
  })
}

export function usePostApiTransportSmsBiuras<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms-biuras']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-sms-biuras']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportSmsBiurasMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSmsBiurasIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-sms-biuras'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-sms-biuras/:id', toValue(args)] as const
}

export function getApiTransportSmsBiurasIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-sms-biuras'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSmsBiurasIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-sms-biuras'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSmsBiurasId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sms-biuras'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-sms-biuras'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms-biuras'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms-biuras'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSmsBiurasIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-sms-biuras'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSmsBiurasIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSmsBiurasIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-sms-biuras'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportSmsBiurasIdMutationKey() {
  return ['api', '/api/transport-sms-biuras/:id', 'PUT'] as const
}

export function getPutApiTransportSmsBiurasIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-sms-biuras'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-sms-biuras'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportSmsBiurasIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-sms-biuras'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-sms-biuras'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportSmsBiurasId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms-biuras'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-sms-biuras'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportSmsBiurasIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportSmsBiurasIdMutationKey() {
  return ['api', '/api/transport-sms-biuras/:id', 'DELETE'] as const
}

export function getDeleteApiTransportSmsBiurasIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-sms-biuras'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-sms-biuras'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportSmsBiurasIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-sms-biuras'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-sms-biuras'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportSmsBiurasId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-sms-biuras'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-sms-biuras'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportSmsBiurasIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSmsFactorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sms-factor']['$get']>>,
) {
  return ['api', '/api/transport-sms-factor', toValue(args)] as const
}

export function getApiTransportSmsFactorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sms-factor']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSmsFactorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-sms-factor'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSmsFactor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sms-factor']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sms-factor']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms-factor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms-factor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSmsFactorQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-sms-factor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSmsFactorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSmsFactorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-sms-factor'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportSmsFactorMutationKey() {
  return ['api', '/api/transport-sms-factor', 'POST'] as const
}

export function getPostApiTransportSmsFactorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-sms-factor']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-sms-factor']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportSmsFactorMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-sms-factor']['$post']>) {
      return parseResponse(client.api['transport-sms-factor'].$post(args, options))
    },
  })
}

export function usePostApiTransportSmsFactor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms-factor']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-sms-factor']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportSmsFactorMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSmsFactorIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-sms-factor'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-sms-factor/:id', toValue(args)] as const
}

export function getApiTransportSmsFactorIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-sms-factor'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSmsFactorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-sms-factor'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSmsFactorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sms-factor'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-sms-factor'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms-factor'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms-factor'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSmsFactorIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-sms-factor'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSmsFactorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSmsFactorIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-sms-factor'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportSmsFactorIdMutationKey() {
  return ['api', '/api/transport-sms-factor/:id', 'PUT'] as const
}

export function getPutApiTransportSmsFactorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-sms-factor'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-sms-factor'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportSmsFactorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-sms-factor'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-sms-factor'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportSmsFactorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms-factor'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-sms-factor'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportSmsFactorIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportSmsFactorIdMutationKey() {
  return ['api', '/api/transport-sms-factor/:id', 'DELETE'] as const
}

export function getDeleteApiTransportSmsFactorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-sms-factor'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-sms-factor'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportSmsFactorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-sms-factor'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-sms-factor'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportSmsFactorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-sms-factor'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-sms-factor'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportSmsFactorIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSms77QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sms77']['$get']>>,
) {
  return ['api', '/api/transport-sms77', toValue(args)] as const
}

export function getApiTransportSms77QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sms77']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSms77QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-sms77'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSms77<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sms77']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sms77']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms77']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms77']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSms77QueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sms77']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSms77QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSms77QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-sms77'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportSms77MutationKey() {
  return ['api', '/api/transport-sms77', 'POST'] as const
}

export function getPostApiTransportSms77MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sms77']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-sms77']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportSms77MutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-sms77']['$post']>) {
      return parseResponse(client.api['transport-sms77'].$post(args, options))
    },
  })
}

export function usePostApiTransportSms77<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms77']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-sms77']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportSms77MutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSms77IdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sms77'][':id']['$get']>>,
) {
  return ['api', '/api/transport-sms77/:id', toValue(args)] as const
}

export function getApiTransportSms77IdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sms77'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSms77IdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-sms77'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSms77Id<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sms77'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-sms77'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms77'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms77'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSms77IdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-sms77'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSms77IdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSms77IdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-sms77'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportSms77IdMutationKey() {
  return ['api', '/api/transport-sms77/:id', 'PUT'] as const
}

export function getPutApiTransportSms77IdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-sms77'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-sms77'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportSms77IdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-sms77'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-sms77'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportSms77Id<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms77'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-sms77'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportSms77IdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportSms77IdMutationKey() {
  return ['api', '/api/transport-sms77/:id', 'DELETE'] as const
}

export function getDeleteApiTransportSms77IdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-sms77'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-sms77'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportSms77IdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-sms77'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-sms77'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportSms77Id<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-sms77'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-sms77'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportSms77IdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSmsapiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsapi']['$get']>>,
) {
  return ['api', '/api/transport-smsapi', toValue(args)] as const
}

export function getApiTransportSmsapiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsapi']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSmsapiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-smsapi'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSmsapi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsapi']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsapi']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsapi']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsapi']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSmsapiQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsapi']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSmsapiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSmsapiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-smsapi'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportSmsapiMutationKey() {
  return ['api', '/api/transport-smsapi', 'POST'] as const
}

export function getPostApiTransportSmsapiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsapi']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-smsapi']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportSmsapiMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-smsapi']['$post']>) {
      return parseResponse(client.api['transport-smsapi'].$post(args, options))
    },
  })
}

export function usePostApiTransportSmsapi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsapi']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-smsapi']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportSmsapiMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSmsapiIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsapi'][':id']['$get']>>,
) {
  return ['api', '/api/transport-smsapi/:id', toValue(args)] as const
}

export function getApiTransportSmsapiIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsapi'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSmsapiIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-smsapi'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSmsapiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-smsapi'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsapi'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsapi'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsapi'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSmsapiIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-smsapi'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSmsapiIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSmsapiIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-smsapi'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportSmsapiIdMutationKey() {
  return ['api', '/api/transport-smsapi/:id', 'PUT'] as const
}

export function getPutApiTransportSmsapiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-smsapi'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-smsapi'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportSmsapiIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-smsapi'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-smsapi'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportSmsapiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsapi'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-smsapi'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportSmsapiIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportSmsapiIdMutationKey() {
  return ['api', '/api/transport-smsapi/:id', 'DELETE'] as const
}

export function getDeleteApiTransportSmsapiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-smsapi'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-smsapi'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportSmsapiIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-smsapi'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-smsapi'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportSmsapiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-smsapi'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-smsapi'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportSmsapiIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSmscQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsc']['$get']>>,
) {
  return ['api', '/api/transport-smsc', toValue(args)] as const
}

export function getApiTransportSmscQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsc']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSmscQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-smsc'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSmsc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsc']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsc']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsc']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsc']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSmscQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsc']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSmscQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSmscQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-smsc'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportSmscMutationKey() {
  return ['api', '/api/transport-smsc', 'POST'] as const
}

export function getPostApiTransportSmscMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsc']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-smsc']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportSmscMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-smsc']['$post']>) {
      return parseResponse(client.api['transport-smsc'].$post(args, options))
    },
  })
}

export function usePostApiTransportSmsc<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsc']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-smsc']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportSmscMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSmscIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsc'][':id']['$get']>>,
) {
  return ['api', '/api/transport-smsc/:id', toValue(args)] as const
}

export function getApiTransportSmscIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsc'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSmscIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-smsc'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSmscId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-smsc'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsc'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsc'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsc'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSmscIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-smsc'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSmscIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSmscIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-smsc'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportSmscIdMutationKey() {
  return ['api', '/api/transport-smsc/:id', 'PUT'] as const
}

export function getPutApiTransportSmscIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-smsc'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-smsc'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportSmscIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-smsc'][':id']['$put']>) {
      return parseResponse(client.api['transport-smsc'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportSmscId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsc'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-smsc'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportSmscIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportSmscIdMutationKey() {
  return ['api', '/api/transport-smsc/:id', 'DELETE'] as const
}

export function getDeleteApiTransportSmscIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-smsc'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-smsc'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportSmscIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-smsc'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-smsc'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportSmscId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-smsc'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-smsc'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportSmscIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSmsmodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsmode']['$get']>>,
) {
  return ['api', '/api/transport-smsmode', toValue(args)] as const
}

export function getApiTransportSmsmodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsmode']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSmsmodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-smsmode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSmsmode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsmode']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsmode']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsmode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsmode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSmsmodeQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsmode']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSmsmodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSmsmodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-smsmode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportSmsmodeMutationKey() {
  return ['api', '/api/transport-smsmode', 'POST'] as const
}

export function getPostApiTransportSmsmodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsmode']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-smsmode']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportSmsmodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-smsmode']['$post']>) {
      return parseResponse(client.api['transport-smsmode'].$post(args, options))
    },
  })
}

export function usePostApiTransportSmsmode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsmode']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-smsmode']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportSmsmodeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSmsmodeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsmode'][':id']['$get']>>,
) {
  return ['api', '/api/transport-smsmode/:id', toValue(args)] as const
}

export function getApiTransportSmsmodeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsmode'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSmsmodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-smsmode'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSmsmodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-smsmode'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-smsmode'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsmode'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsmode'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSmsmodeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-smsmode'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSmsmodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSmsmodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-smsmode'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportSmsmodeIdMutationKey() {
  return ['api', '/api/transport-smsmode/:id', 'PUT'] as const
}

export function getPutApiTransportSmsmodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-smsmode'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-smsmode'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportSmsmodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-smsmode'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-smsmode'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportSmsmodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsmode'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-smsmode'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportSmsmodeIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportSmsmodeIdMutationKey() {
  return ['api', '/api/transport-smsmode/:id', 'DELETE'] as const
}

export function getDeleteApiTransportSmsmodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-smsmode'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-smsmode'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportSmsmodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-smsmode'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-smsmode'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportSmsmodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-smsmode'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-smsmode'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportSmsmodeIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSpotHitQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-spot-hit']['$get']>>,
) {
  return ['api', '/api/transport-spot-hit', toValue(args)] as const
}

export function getApiTransportSpotHitQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-spot-hit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSpotHitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-spot-hit'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSpotHit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-spot-hit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-spot-hit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-spot-hit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-spot-hit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSpotHitQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-spot-hit']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSpotHitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSpotHitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-spot-hit'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportSpotHitMutationKey() {
  return ['api', '/api/transport-spot-hit', 'POST'] as const
}

export function getPostApiTransportSpotHitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-spot-hit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-spot-hit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportSpotHitMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-spot-hit']['$post']>) {
      return parseResponse(client.api['transport-spot-hit'].$post(args, options))
    },
  })
}

export function usePostApiTransportSpotHit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-spot-hit']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-spot-hit']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportSpotHitMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportSpotHitIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-spot-hit'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-spot-hit/:id', toValue(args)] as const
}

export function getApiTransportSpotHitIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-spot-hit'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportSpotHitIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-spot-hit'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportSpotHitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-spot-hit'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-spot-hit'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-spot-hit'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-spot-hit'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportSpotHitIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-spot-hit'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSpotHitIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportSpotHitIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-spot-hit'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportSpotHitIdMutationKey() {
  return ['api', '/api/transport-spot-hit/:id', 'PUT'] as const
}

export function getPutApiTransportSpotHitIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-spot-hit'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-spot-hit'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportSpotHitIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-spot-hit'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-spot-hit'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportSpotHitId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-spot-hit'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-spot-hit'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportSpotHitIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportSpotHitIdMutationKey() {
  return ['api', '/api/transport-spot-hit/:id', 'DELETE'] as const
}

export function getDeleteApiTransportSpotHitIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-spot-hit'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-spot-hit'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportSpotHitIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-spot-hit'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-spot-hit'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportSpotHitId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-spot-hit'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-spot-hit'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportSpotHitIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportTelegramQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-telegram']['$get']>>,
) {
  return ['api', '/api/transport-telegram', toValue(args)] as const
}

export function getApiTransportTelegramQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-telegram']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportTelegramQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-telegram'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportTelegram<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-telegram']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-telegram']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-telegram']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-telegram']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportTelegramQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-telegram']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTelegramQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportTelegramQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-telegram'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportTelegramMutationKey() {
  return ['api', '/api/transport-telegram', 'POST'] as const
}

export function getPostApiTransportTelegramMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-telegram']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-telegram']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportTelegramMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-telegram']['$post']>) {
      return parseResponse(client.api['transport-telegram'].$post(args, options))
    },
  })
}

export function usePostApiTransportTelegram<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-telegram']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-telegram']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportTelegramMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportTelegramIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-telegram'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-telegram/:id', toValue(args)] as const
}

export function getApiTransportTelegramIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-telegram'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportTelegramIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-telegram'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportTelegramId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-telegram'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-telegram'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-telegram'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-telegram'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportTelegramIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-telegram'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTelegramIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportTelegramIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-telegram'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportTelegramIdMutationKey() {
  return ['api', '/api/transport-telegram/:id', 'PUT'] as const
}

export function getPutApiTransportTelegramIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-telegram'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-telegram'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportTelegramIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-telegram'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-telegram'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportTelegramId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-telegram'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-telegram'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportTelegramIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportTelegramIdMutationKey() {
  return ['api', '/api/transport-telegram/:id', 'DELETE'] as const
}

export function getDeleteApiTransportTelegramIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-telegram'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-telegram'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportTelegramIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-telegram'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-telegram'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportTelegramId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-telegram'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-telegram'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportTelegramIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportTelnyxQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-telnyx']['$get']>>,
) {
  return ['api', '/api/transport-telnyx', toValue(args)] as const
}

export function getApiTransportTelnyxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-telnyx']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportTelnyxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-telnyx'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportTelnyx<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-telnyx']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-telnyx']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-telnyx']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-telnyx']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportTelnyxQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-telnyx']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTelnyxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportTelnyxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-telnyx'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportTelnyxMutationKey() {
  return ['api', '/api/transport-telnyx', 'POST'] as const
}

export function getPostApiTransportTelnyxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-telnyx']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-telnyx']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportTelnyxMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-telnyx']['$post']>) {
      return parseResponse(client.api['transport-telnyx'].$post(args, options))
    },
  })
}

export function usePostApiTransportTelnyx<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-telnyx']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-telnyx']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportTelnyxMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportTelnyxIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-telnyx'][':id']['$get']>>,
) {
  return ['api', '/api/transport-telnyx/:id', toValue(args)] as const
}

export function getApiTransportTelnyxIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-telnyx'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportTelnyxIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-telnyx'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportTelnyxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-telnyx'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-telnyx'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-telnyx'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-telnyx'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportTelnyxIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-telnyx'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTelnyxIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportTelnyxIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-telnyx'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportTelnyxIdMutationKey() {
  return ['api', '/api/transport-telnyx/:id', 'PUT'] as const
}

export function getPutApiTransportTelnyxIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-telnyx'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-telnyx'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportTelnyxIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-telnyx'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-telnyx'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportTelnyxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-telnyx'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-telnyx'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportTelnyxIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportTelnyxIdMutationKey() {
  return ['api', '/api/transport-telnyx/:id', 'DELETE'] as const
}

export function getDeleteApiTransportTelnyxIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-telnyx'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-telnyx'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportTelnyxIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-telnyx'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-telnyx'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportTelnyxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-telnyx'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-telnyx'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportTelnyxIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportTermiiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-termii']['$get']>>,
) {
  return ['api', '/api/transport-termii', toValue(args)] as const
}

export function getApiTransportTermiiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-termii']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportTermiiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-termii'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportTermii<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-termii']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-termii']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-termii']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-termii']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportTermiiQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-termii']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTermiiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportTermiiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-termii'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportTermiiMutationKey() {
  return ['api', '/api/transport-termii', 'POST'] as const
}

export function getPostApiTransportTermiiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-termii']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-termii']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportTermiiMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-termii']['$post']>) {
      return parseResponse(client.api['transport-termii'].$post(args, options))
    },
  })
}

export function usePostApiTransportTermii<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-termii']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-termii']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportTermiiMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportTermiiIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-termii'][':id']['$get']>>,
) {
  return ['api', '/api/transport-termii/:id', toValue(args)] as const
}

export function getApiTransportTermiiIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-termii'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportTermiiIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-termii'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportTermiiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-termii'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-termii'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-termii'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-termii'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportTermiiIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-termii'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTermiiIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportTermiiIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-termii'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportTermiiIdMutationKey() {
  return ['api', '/api/transport-termii/:id', 'PUT'] as const
}

export function getPutApiTransportTermiiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-termii'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-termii'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportTermiiIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-termii'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-termii'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportTermiiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-termii'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-termii'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportTermiiIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportTermiiIdMutationKey() {
  return ['api', '/api/transport-termii/:id', 'DELETE'] as const
}

export function getDeleteApiTransportTermiiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-termii'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-termii'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportTermiiIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-termii'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-termii'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportTermiiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-termii'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-termii'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportTermiiIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportTrelloQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-trello']['$get']>>,
) {
  return ['api', '/api/transport-trello', toValue(args)] as const
}

export function getApiTransportTrelloQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-trello']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportTrelloQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-trello'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportTrello<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-trello']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-trello']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-trello']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-trello']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportTrelloQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-trello']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTrelloQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportTrelloQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-trello'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportTrelloMutationKey() {
  return ['api', '/api/transport-trello', 'POST'] as const
}

export function getPostApiTransportTrelloMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-trello']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-trello']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportTrelloMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-trello']['$post']>) {
      return parseResponse(client.api['transport-trello'].$post(args, options))
    },
  })
}

export function usePostApiTransportTrello<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-trello']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-trello']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportTrelloMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportTrelloIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-trello'][':id']['$get']>>,
) {
  return ['api', '/api/transport-trello/:id', toValue(args)] as const
}

export function getApiTransportTrelloIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-trello'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportTrelloIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-trello'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportTrelloId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-trello'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-trello'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-trello'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-trello'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportTrelloIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-trello'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTrelloIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportTrelloIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-trello'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportTrelloIdMutationKey() {
  return ['api', '/api/transport-trello/:id', 'PUT'] as const
}

export function getPutApiTransportTrelloIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-trello'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-trello'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportTrelloIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-trello'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-trello'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportTrelloId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-trello'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-trello'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportTrelloIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportTrelloIdMutationKey() {
  return ['api', '/api/transport-trello/:id', 'DELETE'] as const
}

export function getDeleteApiTransportTrelloIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-trello'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-trello'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportTrelloIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-trello'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-trello'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportTrelloId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-trello'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-trello'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportTrelloIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportTurboSmsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-turbo-sms']['$get']>>,
) {
  return ['api', '/api/transport-turbo-sms', toValue(args)] as const
}

export function getApiTransportTurboSmsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-turbo-sms']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportTurboSmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-turbo-sms'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportTurboSms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-turbo-sms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-turbo-sms']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-turbo-sms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-turbo-sms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportTurboSmsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-turbo-sms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTurboSmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportTurboSmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-turbo-sms'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportTurboSmsMutationKey() {
  return ['api', '/api/transport-turbo-sms', 'POST'] as const
}

export function getPostApiTransportTurboSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-turbo-sms']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-turbo-sms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportTurboSmsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-turbo-sms']['$post']>) {
      return parseResponse(client.api['transport-turbo-sms'].$post(args, options))
    },
  })
}

export function usePostApiTransportTurboSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-turbo-sms']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-turbo-sms']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportTurboSmsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportTurboSmsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-turbo-sms'][':id']['$get']>
  >,
) {
  return ['api', '/api/transport-turbo-sms/:id', toValue(args)] as const
}

export function getApiTransportTurboSmsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-turbo-sms'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportTurboSmsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-turbo-sms'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportTurboSmsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-turbo-sms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['transport-turbo-sms'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-turbo-sms'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-turbo-sms'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportTurboSmsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-turbo-sms'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTurboSmsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportTurboSmsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-turbo-sms'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportTurboSmsIdMutationKey() {
  return ['api', '/api/transport-turbo-sms/:id', 'PUT'] as const
}

export function getPutApiTransportTurboSmsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-turbo-sms'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-turbo-sms'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportTurboSmsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-turbo-sms'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-turbo-sms'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportTurboSmsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-turbo-sms'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-turbo-sms'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportTurboSmsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportTurboSmsIdMutationKey() {
  return ['api', '/api/transport-turbo-sms/:id', 'DELETE'] as const
}

export function getDeleteApiTransportTurboSmsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-turbo-sms'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-turbo-sms'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportTurboSmsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-turbo-sms'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-turbo-sms'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportTurboSmsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-turbo-sms'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-turbo-sms'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportTurboSmsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportTwilioQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-twilio']['$get']>>,
) {
  return ['api', '/api/transport-twilio', toValue(args)] as const
}

export function getApiTransportTwilioQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-twilio']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportTwilioQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-twilio'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportTwilio<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-twilio']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-twilio']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-twilio']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-twilio']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportTwilioQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-twilio']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTwilioQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportTwilioQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-twilio'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportTwilioMutationKey() {
  return ['api', '/api/transport-twilio', 'POST'] as const
}

export function getPostApiTransportTwilioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-twilio']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-twilio']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportTwilioMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-twilio']['$post']>) {
      return parseResponse(client.api['transport-twilio'].$post(args, options))
    },
  })
}

export function usePostApiTransportTwilio<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-twilio']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-twilio']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportTwilioMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportTwilioIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-twilio'][':id']['$get']>>,
) {
  return ['api', '/api/transport-twilio/:id', toValue(args)] as const
}

export function getApiTransportTwilioIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-twilio'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportTwilioIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-twilio'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportTwilioId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-twilio'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-twilio'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-twilio'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-twilio'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportTwilioIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-twilio'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTwilioIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportTwilioIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-twilio'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportTwilioIdMutationKey() {
  return ['api', '/api/transport-twilio/:id', 'PUT'] as const
}

export function getPutApiTransportTwilioIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-twilio'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-twilio'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportTwilioIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-twilio'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-twilio'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportTwilioId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-twilio'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-twilio'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportTwilioIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportTwilioIdMutationKey() {
  return ['api', '/api/transport-twilio/:id', 'DELETE'] as const
}

export function getDeleteApiTransportTwilioIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-twilio'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-twilio'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportTwilioIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-twilio'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-twilio'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportTwilioId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-twilio'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-twilio'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportTwilioIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportTwitterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-twitter']['$get']>>,
) {
  return ['api', '/api/transport-twitter', toValue(args)] as const
}

export function getApiTransportTwitterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-twitter']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportTwitterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-twitter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportTwitter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-twitter']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-twitter']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-twitter']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-twitter']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportTwitterQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-twitter']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTwitterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportTwitterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-twitter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportTwitterMutationKey() {
  return ['api', '/api/transport-twitter', 'POST'] as const
}

export function getPostApiTransportTwitterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-twitter']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-twitter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportTwitterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-twitter']['$post']>) {
      return parseResponse(client.api['transport-twitter'].$post(args, options))
    },
  })
}

export function usePostApiTransportTwitter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-twitter']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-twitter']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportTwitterMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportTwitterIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-twitter'][':id']['$get']>>,
) {
  return ['api', '/api/transport-twitter/:id', toValue(args)] as const
}

export function getApiTransportTwitterIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-twitter'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportTwitterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-twitter'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportTwitterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-twitter'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-twitter'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-twitter'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-twitter'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportTwitterIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-twitter'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTwitterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportTwitterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-twitter'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportTwitterIdMutationKey() {
  return ['api', '/api/transport-twitter/:id', 'PUT'] as const
}

export function getPutApiTransportTwitterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-twitter'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-twitter'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportTwitterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-twitter'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-twitter'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportTwitterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-twitter'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-twitter'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportTwitterIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportTwitterIdMutationKey() {
  return ['api', '/api/transport-twitter/:id', 'DELETE'] as const
}

export function getDeleteApiTransportTwitterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-twitter'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-twitter'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportTwitterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-twitter'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-twitter'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportTwitterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-twitter'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-twitter'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportTwitterIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportVonageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-vonage']['$get']>>,
) {
  return ['api', '/api/transport-vonage', toValue(args)] as const
}

export function getApiTransportVonageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-vonage']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportVonageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-vonage'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportVonage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-vonage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-vonage']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-vonage']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-vonage']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportVonageQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-vonage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportVonageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportVonageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-vonage'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportVonageMutationKey() {
  return ['api', '/api/transport-vonage', 'POST'] as const
}

export function getPostApiTransportVonageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-vonage']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-vonage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportVonageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-vonage']['$post']>) {
      return parseResponse(client.api['transport-vonage'].$post(args, options))
    },
  })
}

export function usePostApiTransportVonage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-vonage']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-vonage']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportVonageMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportVonageIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-vonage'][':id']['$get']>>,
) {
  return ['api', '/api/transport-vonage/:id', toValue(args)] as const
}

export function getApiTransportVonageIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-vonage'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportVonageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-vonage'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportVonageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-vonage'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-vonage'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-vonage'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-vonage'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportVonageIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-vonage'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportVonageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportVonageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-vonage'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportVonageIdMutationKey() {
  return ['api', '/api/transport-vonage/:id', 'PUT'] as const
}

export function getPutApiTransportVonageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-vonage'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-vonage'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportVonageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-vonage'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-vonage'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportVonageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-vonage'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-vonage'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportVonageIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportVonageIdMutationKey() {
  return ['api', '/api/transport-vonage/:id', 'DELETE'] as const
}

export function getDeleteApiTransportVonageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-vonage'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-vonage'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportVonageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-vonage'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-vonage'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportVonageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-vonage'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-vonage'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportVonageIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportWebhookQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-webhook']['$get']>>,
) {
  return ['api', '/api/transport-webhook', toValue(args)] as const
}

export function getApiTransportWebhookQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-webhook']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportWebhookQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-webhook'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportWebhook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-webhook']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-webhook']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-webhook']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-webhook']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportWebhookQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-webhook']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportWebhookQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportWebhookQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-webhook'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportWebhookMutationKey() {
  return ['api', '/api/transport-webhook', 'POST'] as const
}

export function getPostApiTransportWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-webhook']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-webhook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportWebhookMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-webhook']['$post']>) {
      return parseResponse(client.api['transport-webhook'].$post(args, options))
    },
  })
}

export function usePostApiTransportWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-webhook']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-webhook']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportWebhookMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportWebhookIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-webhook'][':id']['$get']>>,
) {
  return ['api', '/api/transport-webhook/:id', toValue(args)] as const
}

export function getApiTransportWebhookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-webhook'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-webhook'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-webhook'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-webhook'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-webhook'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-webhook'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportWebhookIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-webhook'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportWebhookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-webhook'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportWebhookIdMutationKey() {
  return ['api', '/api/transport-webhook/:id', 'PUT'] as const
}

export function getPutApiTransportWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-webhook'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-webhook'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-webhook'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-webhook'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-webhook'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-webhook'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportWebhookIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportWebhookIdMutationKey() {
  return ['api', '/api/transport-webhook/:id', 'DELETE'] as const
}

export function getDeleteApiTransportWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-webhook'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-webhook'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-webhook'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-webhook'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-webhook'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-webhook'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportWebhookIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportYunpianQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-yunpian']['$get']>>,
) {
  return ['api', '/api/transport-yunpian', toValue(args)] as const
}

export function getApiTransportYunpianQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-yunpian']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportYunpianQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-yunpian'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportYunpian<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-yunpian']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-yunpian']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-yunpian']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-yunpian']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportYunpianQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-yunpian']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportYunpianQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportYunpianQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-yunpian'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportYunpianMutationKey() {
  return ['api', '/api/transport-yunpian', 'POST'] as const
}

export function getPostApiTransportYunpianMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-yunpian']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-yunpian']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportYunpianMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-yunpian']['$post']>) {
      return parseResponse(client.api['transport-yunpian'].$post(args, options))
    },
  })
}

export function usePostApiTransportYunpian<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-yunpian']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-yunpian']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportYunpianMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportYunpianIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-yunpian'][':id']['$get']>>,
) {
  return ['api', '/api/transport-yunpian/:id', toValue(args)] as const
}

export function getApiTransportYunpianIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-yunpian'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportYunpianIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-yunpian'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportYunpianId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-yunpian'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-yunpian'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-yunpian'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-yunpian'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportYunpianIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-yunpian'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportYunpianIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportYunpianIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-yunpian'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportYunpianIdMutationKey() {
  return ['api', '/api/transport-yunpian/:id', 'PUT'] as const
}

export function getPutApiTransportYunpianIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-yunpian'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-yunpian'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportYunpianIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-yunpian'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-yunpian'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportYunpianId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-yunpian'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-yunpian'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportYunpianIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportYunpianIdMutationKey() {
  return ['api', '/api/transport-yunpian/:id', 'DELETE'] as const
}

export function getDeleteApiTransportYunpianIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-yunpian'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-yunpian'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportYunpianIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-yunpian'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-yunpian'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportYunpianId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-yunpian'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-yunpian'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportYunpianIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportZendeskQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-zendesk']['$get']>>,
) {
  return ['api', '/api/transport-zendesk', toValue(args)] as const
}

export function getApiTransportZendeskQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-zendesk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportZendeskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-zendesk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportZendesk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-zendesk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-zendesk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-zendesk']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-zendesk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportZendeskQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-zendesk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportZendeskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportZendeskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-zendesk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportZendeskMutationKey() {
  return ['api', '/api/transport-zendesk', 'POST'] as const
}

export function getPostApiTransportZendeskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-zendesk']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-zendesk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportZendeskMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-zendesk']['$post']>) {
      return parseResponse(client.api['transport-zendesk'].$post(args, options))
    },
  })
}

export function usePostApiTransportZendesk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-zendesk']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-zendesk']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportZendeskMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportZendeskIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-zendesk'][':id']['$get']>>,
) {
  return ['api', '/api/transport-zendesk/:id', toValue(args)] as const
}

export function getApiTransportZendeskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-zendesk'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportZendeskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-zendesk'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportZendeskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-zendesk'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-zendesk'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-zendesk'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-zendesk'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportZendeskIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-zendesk'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportZendeskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportZendeskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-zendesk'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportZendeskIdMutationKey() {
  return ['api', '/api/transport-zendesk/:id', 'PUT'] as const
}

export function getPutApiTransportZendeskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-zendesk'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-zendesk'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportZendeskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-zendesk'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-zendesk'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportZendeskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-zendesk'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-zendesk'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportZendeskIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportZendeskIdMutationKey() {
  return ['api', '/api/transport-zendesk/:id', 'DELETE'] as const
}

export function getDeleteApiTransportZendeskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-zendesk'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-zendesk'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportZendeskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-zendesk'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-zendesk'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportZendeskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-zendesk'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-zendesk'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportZendeskIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportZulipQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-zulip']['$get']>>,
) {
  return ['api', '/api/transport-zulip', toValue(args)] as const
}

export function getApiTransportZulipQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-zulip']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportZulipQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-zulip'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportZulip<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-zulip']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-zulip']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-zulip']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-zulip']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportZulipQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-zulip']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportZulipQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportZulipQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-zulip'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransportZulipMutationKey() {
  return ['api', '/api/transport-zulip', 'POST'] as const
}

export function getPostApiTransportZulipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-zulip']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-zulip']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransportZulipMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['transport-zulip']['$post']>) {
      return parseResponse(client.api['transport-zulip'].$post(args, options))
    },
  })
}

export function usePostApiTransportZulip<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-zulip']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-zulip']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTransportZulipMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransportZulipIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-zulip'][':id']['$get']>>,
) {
  return ['api', '/api/transport-zulip/:id', toValue(args)] as const
}

export function getApiTransportZulipIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-zulip'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransportZulipIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['transport-zulip'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransportZulipId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-zulip'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['transport-zulip'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-zulip'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-zulip'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransportZulipIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['transport-zulip'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportZulipIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransportZulipIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['transport-zulip'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiTransportZulipIdMutationKey() {
  return ['api', '/api/transport-zulip/:id', 'PUT'] as const
}

export function getPutApiTransportZulipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['transport-zulip'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['transport-zulip'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTransportZulipIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-zulip'][':id']['$put']>,
    ) {
      return parseResponse(client.api['transport-zulip'][':id'].$put(args, options))
    },
  })
}

export function usePutApiTransportZulipId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-zulip'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-zulip'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTransportZulipIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTransportZulipIdMutationKey() {
  return ['api', '/api/transport-zulip/:id', 'DELETE'] as const
}

export function getDeleteApiTransportZulipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['transport-zulip'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['transport-zulip'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransportZulipIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['transport-zulip'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['transport-zulip'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransportZulipId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['transport-zulip'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['transport-zulip'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTransportZulipIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUserAccountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['user-account']['$get']>>,
) {
  return ['api', '/api/user-account', toValue(args)] as const
}

export function getApiUserAccountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['user-account']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['user-account'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-account']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['user-account']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-account']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-account']['$get']>>>
            >
          >,
          ReturnType<typeof getApiUserAccountQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-account']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['user-account'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserAccountLevelCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['user-account-level-code']['$get']>>,
) {
  return ['api', '/api/user-account-level-code', toValue(args)] as const
}

export function getApiUserAccountLevelCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['user-account-level-code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserAccountLevelCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['user-account-level-code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserAccountLevelCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['user-account-level-code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['user-account-level-code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['user-account-level-code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['user-account-level-code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUserAccountLevelCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['user-account-level-code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserAccountLevelCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserAccountLevelCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['user-account-level-code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserAccountLevelCodeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['user-account-level-code'][':id']['$get']>
  >,
) {
  return ['api', '/api/user-account-level-code/:id', toValue(args)] as const
}

export function getApiUserAccountLevelCodeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['user-account-level-code'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserAccountLevelCodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['user-account-level-code'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserAccountLevelCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['user-account-level-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['user-account-level-code'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['user-account-level-code'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['user-account-level-code'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUserAccountLevelCodeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['user-account-level-code'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserAccountLevelCodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserAccountLevelCodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['user-account-level-code'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['user-account'][':id']['$get']>>,
) {
  return ['api', '/api/user-account/:id', toValue(args)] as const
}

export function getApiUserAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['user-account'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['user-account'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-account'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['user-account'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['user-account'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['user-account'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUserAccountIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api)['user-account'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['user-account'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiUserAccountIdMutationKey() {
  return ['api', '/api/user-account/:id', 'PUT'] as const
}

export function getPutApiUserAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['user-account'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['user-account'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiUserAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['user-account'][':id']['$put']>) {
      return parseResponse(client.api['user-account'][':id'].$put(args, options))
    },
  })
}

export function usePutApiUserAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['user-account'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['user-account'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiUserAccountIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
