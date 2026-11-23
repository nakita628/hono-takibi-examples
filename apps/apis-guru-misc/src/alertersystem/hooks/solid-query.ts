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

export function getApiAlertLogQueryKey(
  args: InferRequestType<(typeof client.api)['alert-log']['$get']>,
) {
  return ['api', '/api/alert-log', args] as const
}

export function getApiAlertLogQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-log']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['alert-log']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-log']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlertLogQueryKey>
  >({
    queryKey: getApiAlertLogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['alert-log'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAlertLog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-log']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['alert-log']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-log']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiAlertLogQueryKey>
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
    return { ...getApiAlertLogQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiAlertLogStatusCodeQueryKey(
  args: InferRequestType<(typeof client.api)['alert-log-status-code']['$get']>,
) {
  return ['api', '/api/alert-log-status-code', args] as const
}

export function getApiAlertLogStatusCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['alert-log-status-code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['alert-log-status-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiAlertLogStatusCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['alert-log-status-code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAlertLogStatusCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['alert-log-status-code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['alert-log-status-code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiAlertLogStatusCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiAlertLogStatusCodeIdQueryKey(
  args: InferRequestType<(typeof client.api)['alert-log-status-code'][':id']['$get']>,
) {
  return ['api', '/api/alert-log-status-code/:id', args] as const
}

export function getApiAlertLogStatusCodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['alert-log-status-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['alert-log-status-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiAlertLogStatusCodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['alert-log-status-code'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAlertLogStatusCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['alert-log-status-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['alert-log-status-code'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiAlertLogStatusCodeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiAlertLogIdQueryKey(
  args: InferRequestType<(typeof client.api)['alert-log'][':id']['$get']>,
) {
  return ['api', '/api/alert-log/:id', args] as const
}

export function getApiAlertLogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-log'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['alert-log'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-log'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlertLogIdQueryKey>
  >({
    queryKey: getApiAlertLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['alert-log'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAlertLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-log'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['alert-log'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['alert-log'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiAlertLogIdQueryKey>
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
    return { ...getApiAlertLogIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiAlertServiceQueryKey(
  args: InferRequestType<(typeof client.api)['alert-service']['$get']>,
) {
  return ['api', '/api/alert-service', args] as const
}

export function getApiAlertServiceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-service']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['alert-service']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-service']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlertServiceQueryKey>
  >({
    queryKey: getApiAlertServiceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['alert-service'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAlertService<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-service']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['alert-service']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['alert-service']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiAlertServiceQueryKey>
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
    return { ...getApiAlertServiceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiAlertService<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiAlertServiceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAlertServiceTransportCodeQueryKey(
  args: InferRequestType<(typeof client.api)['alert-service-transport-code']['$get']>,
) {
  return ['api', '/api/alert-service-transport-code', args] as const
}

export function getApiAlertServiceTransportCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['alert-service-transport-code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['alert-service-transport-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiAlertServiceTransportCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['alert-service-transport-code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAlertServiceTransportCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['alert-service-transport-code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['alert-service-transport-code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiAlertServiceTransportCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiAlertServiceTransportCodeIdQueryKey(
  args: InferRequestType<(typeof client.api)['alert-service-transport-code'][':id']['$get']>,
) {
  return ['api', '/api/alert-service-transport-code/:id', args] as const
}

export function getApiAlertServiceTransportCodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['alert-service-transport-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['alert-service-transport-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiAlertServiceTransportCodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['alert-service-transport-code'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAlertServiceTransportCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['alert-service-transport-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['alert-service-transport-code'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getApiAlertServiceTransportCodeIdQueryKey>
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
      ...getApiAlertServiceTransportCodeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiAlertServiceIdQueryKey(
  args: InferRequestType<(typeof client.api)['alert-service'][':id']['$get']>,
) {
  return ['api', '/api/alert-service/:id', args] as const
}

export function getApiAlertServiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-service'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['alert-service'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiAlertServiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['alert-service'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAlertServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['alert-service'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['alert-service'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiAlertServiceIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiAlertServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiAlertServiceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiAlertServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiAlertServiceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiCreditsConsumptionQueryKey(
  args: InferRequestType<(typeof client.api)['credits-consumption']['$get']>,
) {
  return ['api', '/api/credits-consumption', args] as const
}

export function getApiCreditsConsumptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['credits-consumption']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['credits-consumption']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiCreditsConsumptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['credits-consumption'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCreditsConsumption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['credits-consumption']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['credits-consumption']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiCreditsConsumptionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiCreditsConsumptionIdQueryKey(
  args: InferRequestType<(typeof client.api)['credits-consumption'][':id']['$get']>,
) {
  return ['api', '/api/credits-consumption/:id', args] as const
}

export function getApiCreditsConsumptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['credits-consumption'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['credits-consumption'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiCreditsConsumptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['credits-consumption'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCreditsConsumptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['credits-consumption'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['credits-consumption'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiCreditsConsumptionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiHttpMethodCodeQueryKey(
  args: InferRequestType<(typeof client.api)['http-method-code']['$get']>,
) {
  return ['api', '/api/http-method-code', args] as const
}

export function getApiHttpMethodCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['http-method-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['http-method-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['http-method-code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiHttpMethodCodeQueryKey>
  >({
    queryKey: getApiHttpMethodCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['http-method-code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiHttpMethodCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['http-method-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['http-method-code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['http-method-code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiHttpMethodCodeQueryKey>
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
    return { ...getApiHttpMethodCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiHttpMethodCodeIdQueryKey(
  args: InferRequestType<(typeof client.api)['http-method-code'][':id']['$get']>,
) {
  return ['api', '/api/http-method-code/:id', args] as const
}

export function getApiHttpMethodCodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['http-method-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['http-method-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiHttpMethodCodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['http-method-code'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiHttpMethodCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['http-method-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['http-method-code'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiHttpMethodCodeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiMediaObjectQueryKey(
  args: InferRequestType<(typeof client.api)['media-object']['$get']>,
) {
  return ['api', '/api/media-object', args] as const
}

export function getApiMediaObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['media-object']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['media-object']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['media-object']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMediaObjectQueryKey>
  >({
    queryKey: getApiMediaObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['media-object'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiMediaObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['media-object']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['media-object']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['media-object']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiMediaObjectQueryKey>
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
    return { ...getApiMediaObjectQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiMediaObject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiMediaObjectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiMediaObjectIdQueryKey(
  args: InferRequestType<(typeof client.api)['media-object'][':id']['$get']>,
) {
  return ['api', '/api/media-object/:id', args] as const
}

export function getApiMediaObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['media-object'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['media-object'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiMediaObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['media-object'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMediaObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['media-object'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['media-object'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiMediaObjectIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiMediaObjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiMediaObjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiMonitorQueryKey(args: InferRequestType<typeof client.api.monitor.$get>) {
  return ['api', '/api/monitor', args] as const
}

export function getApiMonitorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monitor.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.monitor.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monitor.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiMonitorQueryKey>
  >({
    queryKey: getApiMonitorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.monitor.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiMonitor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monitor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.monitor.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monitor.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiMonitorQueryKey>
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
    return { ...getApiMonitorQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiMonitor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monitor.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.monitor.$post>,
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
    const mutationDefaults = getPostApiMonitorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiMonitorStatusCodeQueryKey(
  args: InferRequestType<(typeof client.api)['monitor-status-code']['$get']>,
) {
  return ['api', '/api/monitor-status-code', args] as const
}

export function getApiMonitorStatusCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['monitor-status-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['monitor-status-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiMonitorStatusCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['monitor-status-code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMonitorStatusCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['monitor-status-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['monitor-status-code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiMonitorStatusCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiMonitorStatusCodeIdQueryKey(
  args: InferRequestType<(typeof client.api)['monitor-status-code'][':id']['$get']>,
) {
  return ['api', '/api/monitor-status-code/:id', args] as const
}

export function getApiMonitorStatusCodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['monitor-status-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['monitor-status-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiMonitorStatusCodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['monitor-status-code'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMonitorStatusCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['monitor-status-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['monitor-status-code'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiMonitorStatusCodeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiMonitorStatusLogQueryKey(
  args: InferRequestType<(typeof client.api)['monitor-status-log']['$get']>,
) {
  return ['api', '/api/monitor-status-log', args] as const
}

export function getApiMonitorStatusLogQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['monitor-status-log']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['monitor-status-log']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['monitor-status-log']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMonitorStatusLogQueryKey>
  >({
    queryKey: getApiMonitorStatusLogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['monitor-status-log'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMonitorStatusLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['monitor-status-log']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['monitor-status-log']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['monitor-status-log']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiMonitorStatusLogQueryKey>
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
    return { ...getApiMonitorStatusLogQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiMonitorStatusLogIdQueryKey(
  args: InferRequestType<(typeof client.api)['monitor-status-log'][':id']['$get']>,
) {
  return ['api', '/api/monitor-status-log/:id', args] as const
}

export function getApiMonitorStatusLogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['monitor-status-log'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['monitor-status-log'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiMonitorStatusLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['monitor-status-log'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMonitorStatusLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['monitor-status-log'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['monitor-status-log'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiMonitorStatusLogIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiMonitorTypeCodeQueryKey(
  args: InferRequestType<(typeof client.api)['monitor-type-code']['$get']>,
) {
  return ['api', '/api/monitor-type-code', args] as const
}

export function getApiMonitorTypeCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['monitor-type-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['monitor-type-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['monitor-type-code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMonitorTypeCodeQueryKey>
  >({
    queryKey: getApiMonitorTypeCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['monitor-type-code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMonitorTypeCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['monitor-type-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['monitor-type-code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['monitor-type-code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiMonitorTypeCodeQueryKey>
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
    return { ...getApiMonitorTypeCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiMonitorTypeCodeIdQueryKey(
  args: InferRequestType<(typeof client.api)['monitor-type-code'][':id']['$get']>,
) {
  return ['api', '/api/monitor-type-code/:id', args] as const
}

export function getApiMonitorTypeCodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['monitor-type-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['monitor-type-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiMonitorTypeCodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['monitor-type-code'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMonitorTypeCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['monitor-type-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['monitor-type-code'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiMonitorTypeCodeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiMonitorIdQueryKey(
  args: InferRequestType<(typeof client.api.monitor)[':id']['$get']>,
) {
  return ['api', '/api/monitor/:id', args] as const
}

export function getApiMonitorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.monitor)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.monitor)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.monitor)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMonitorIdQueryKey>
  >({
    queryKey: getApiMonitorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.monitor[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiMonitorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.monitor)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.monitor)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.monitor)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiMonitorIdQueryKey>
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
    return { ...getApiMonitorIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiMonitorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.monitor)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.monitor)[':id']['$put']>,
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
    const mutationDefaults = getPutApiMonitorIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiMonitorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiMonitorIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPartitionQueryKey(args: InferRequestType<typeof client.api.partition.$get>) {
  return ['api', '/api/partition', args] as const
}

export function getApiPartitionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.partition.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.partition.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.partition.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPartitionQueryKey>
  >({
    queryKey: getApiPartitionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.partition.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPartition<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.partition.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.partition.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.partition.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiPartitionQueryKey>
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
    return { ...getApiPartitionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiPartition<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.partition.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.partition.$post>,
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
    const mutationDefaults = getPostApiPartitionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPartitionIdQueryKey(
  args: InferRequestType<(typeof client.api.partition)[':id']['$get']>,
) {
  return ['api', '/api/partition/:id', args] as const
}

export function getApiPartitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.partition)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.partition)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.partition)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPartitionIdQueryKey>
  >({
    queryKey: getApiPartitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.partition[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPartitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.partition)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.partition)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.partition)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiPartitionIdQueryKey>
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
    return { ...getApiPartitionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiPartitionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiPartitionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiPartitionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiPartitionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPingQueryKey(args: InferRequestType<typeof client.api.ping.$get>) {
  return ['api', '/api/ping', args] as const
}

export function getApiPingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.ping.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPingQueryKey>
  >({
    queryKey: getApiPingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ping.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.ping.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiPingQueryKey>
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
    return { ...getApiPingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.ping.$post>,
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
    const mutationDefaults = getPostApiPingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPingMethodCodeQueryKey(
  args: InferRequestType<(typeof client.api)['ping-method-code']['$get']>,
) {
  return ['api', '/api/ping-method-code', args] as const
}

export function getApiPingMethodCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ping-method-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['ping-method-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ping-method-code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPingMethodCodeQueryKey>
  >({
    queryKey: getApiPingMethodCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['ping-method-code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPingMethodCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ping-method-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['ping-method-code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['ping-method-code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiPingMethodCodeQueryKey>
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
    return { ...getApiPingMethodCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiPingMethodCodeIdQueryKey(
  args: InferRequestType<(typeof client.api)['ping-method-code'][':id']['$get']>,
) {
  return ['api', '/api/ping-method-code/:id', args] as const
}

export function getApiPingMethodCodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['ping-method-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['ping-method-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiPingMethodCodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['ping-method-code'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPingMethodCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['ping-method-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['ping-method-code'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiPingMethodCodeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiPingIdQueryKey(
  args: InferRequestType<(typeof client.api.ping)[':id']['$get']>,
) {
  return ['api', '/api/ping/:id', args] as const
}

export function getApiPingIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.ping)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.api.ping)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.ping)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPingIdQueryKey>
  >({
    queryKey: getApiPingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ping[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPingId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.ping)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.ping)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.ping)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiPingIdQueryKey>
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
    return { ...getApiPingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiTeamInvitationQueryKey(
  args: InferRequestType<(typeof client.api)['team-invitation']['$get']>,
) {
  return ['api', '/api/team-invitation', args] as const
}

export function getApiTeamInvitationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-invitation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['team-invitation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-invitation']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamInvitationQueryKey>
  >({
    queryKey: getApiTeamInvitationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['team-invitation'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTeamInvitation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-invitation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['team-invitation']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['team-invitation']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTeamInvitationQueryKey>
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
    return { ...getApiTeamInvitationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTeamInvitation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTeamInvitationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTeamInvitationIdQueryKey(
  args: InferRequestType<(typeof client.api)['team-invitation'][':id']['$get']>,
) {
  return ['api', '/api/team-invitation/:id', args] as const
}

export function getApiTeamInvitationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['team-invitation'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['team-invitation'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTeamInvitationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['team-invitation'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTeamInvitationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['team-invitation'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['team-invitation'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiTeamInvitationIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiTeamInvitationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTeamInvitationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTeamMemberQueryKey(
  args: InferRequestType<(typeof client.api)['team-member']['$get']>,
) {
  return ['api', '/api/team-member', args] as const
}

export function getApiTeamMemberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-member']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['team-member']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-member']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamMemberQueryKey>
  >({
    queryKey: getApiTeamMemberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['team-member'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTeamMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-member']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['team-member']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-member']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTeamMemberQueryKey>
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
    return { ...getApiTeamMemberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiTeamMemberRoleCodeQueryKey(
  args: InferRequestType<(typeof client.api)['team-member-role-code']['$get']>,
) {
  return ['api', '/api/team-member-role-code', args] as const
}

export function getApiTeamMemberRoleCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['team-member-role-code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['team-member-role-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTeamMemberRoleCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['team-member-role-code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTeamMemberRoleCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['team-member-role-code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['team-member-role-code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTeamMemberRoleCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiTeamMemberRoleCodeIdQueryKey(
  args: InferRequestType<(typeof client.api)['team-member-role-code'][':id']['$get']>,
) {
  return ['api', '/api/team-member-role-code/:id', args] as const
}

export function getApiTeamMemberRoleCodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['team-member-role-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['team-member-role-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTeamMemberRoleCodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['team-member-role-code'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTeamMemberRoleCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['team-member-role-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['team-member-role-code'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTeamMemberRoleCodeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiTeamMemberIdQueryKey(
  args: InferRequestType<(typeof client.api)['team-member'][':id']['$get']>,
) {
  return ['api', '/api/team-member/:id', args] as const
}

export function getApiTeamMemberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-member'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['team-member'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-member'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamMemberIdQueryKey>
  >({
    queryKey: getApiTeamMemberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['team-member'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTeamMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['team-member'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['team-member'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['team-member'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTeamMemberIdQueryKey>
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
    return { ...getApiTeamMemberIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiTeamMemberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTeamMemberIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTeamMemberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTeamMemberIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTimezoneCodeQueryKey(
  args: InferRequestType<(typeof client.api)['timezone-code']['$get']>,
) {
  return ['api', '/api/timezone-code', args] as const
}

export function getApiTimezoneCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['timezone-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['timezone-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['timezone-code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTimezoneCodeQueryKey>
  >({
    queryKey: getApiTimezoneCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['timezone-code'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTimezoneCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['timezone-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['timezone-code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['timezone-code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTimezoneCodeQueryKey>
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
    return { ...getApiTimezoneCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiTimezoneCodeIdQueryKey(
  args: InferRequestType<(typeof client.api)['timezone-code'][':id']['$get']>,
) {
  return ['api', '/api/timezone-code/:id', args] as const
}

export function getApiTimezoneCodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['timezone-code'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['timezone-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTimezoneCodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['timezone-code'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTimezoneCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['timezone-code'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['timezone-code'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiTimezoneCodeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiTransportAlertaQueryKey(
  args: InferRequestType<(typeof client.api)['transport-alerta']['$get']>,
) {
  return ['api', '/api/transport-alerta', args] as const
}

export function getApiTransportAlertaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-alerta']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-alerta']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-alerta']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportAlertaQueryKey>
  >({
    queryKey: getApiTransportAlertaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-alerta'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportAlerta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-alerta']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-alerta']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-alerta']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportAlertaQueryKey>
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
    return { ...getApiTransportAlertaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportAlerta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportAlertaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportAlertaIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-alerta'][':id']['$get']>,
) {
  return ['api', '/api/transport-alerta/:id', args] as const
}

export function getApiTransportAlertaIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-alerta'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-alerta'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportAlertaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-alerta'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportAlertaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-alerta'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-alerta'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportAlertaIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportAlertaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportAlertaIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportAlertaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportAlertaIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportAllMySmsQueryKey(
  args: InferRequestType<(typeof client.api)['transport-all-my-sms']['$get']>,
) {
  return ['api', '/api/transport-all-my-sms', args] as const
}

export function getApiTransportAllMySmsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-all-my-sms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-all-my-sms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportAllMySmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-all-my-sms'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportAllMySms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-all-my-sms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-all-my-sms']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportAllMySmsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportAllMySms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportAllMySmsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportAllMySmsIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-all-my-sms'][':id']['$get']>,
) {
  return ['api', '/api/transport-all-my-sms/:id', args] as const
}

export function getApiTransportAllMySmsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-all-my-sms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-all-my-sms'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportAllMySmsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-all-my-sms'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportAllMySmsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-all-my-sms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-all-my-sms'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportAllMySmsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportAllMySmsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportAllMySmsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportAllMySmsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportAllMySmsIdMutationOptions<
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

export function getApiTransportAmazonSnsQueryKey(
  args: InferRequestType<(typeof client.api)['transport-amazon-sns']['$get']>,
) {
  return ['api', '/api/transport-amazon-sns', args] as const
}

export function getApiTransportAmazonSnsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-amazon-sns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-amazon-sns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportAmazonSnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-amazon-sns'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportAmazonSns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-amazon-sns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-amazon-sns']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportAmazonSnsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportAmazonSns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportAmazonSnsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportAmazonSnsIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-amazon-sns'][':id']['$get']>,
) {
  return ['api', '/api/transport-amazon-sns/:id', args] as const
}

export function getApiTransportAmazonSnsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-amazon-sns'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-amazon-sns'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportAmazonSnsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-amazon-sns'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportAmazonSnsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-amazon-sns'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-amazon-sns'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportAmazonSnsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportAmazonSnsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportAmazonSnsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportAmazonSnsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportAmazonSnsIdMutationOptions<
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

export function getApiTransportBandwidthQueryKey(
  args: InferRequestType<(typeof client.api)['transport-bandwidth']['$get']>,
) {
  return ['api', '/api/transport-bandwidth', args] as const
}

export function getApiTransportBandwidthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-bandwidth']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-bandwidth']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportBandwidthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-bandwidth'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportBandwidth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-bandwidth']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-bandwidth']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportBandwidthQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportBandwidth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportBandwidthMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportBandwidthIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-bandwidth'][':id']['$get']>,
) {
  return ['api', '/api/transport-bandwidth/:id', args] as const
}

export function getApiTransportBandwidthIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-bandwidth'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-bandwidth'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportBandwidthIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-bandwidth'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportBandwidthId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-bandwidth'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-bandwidth'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportBandwidthIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportBandwidthId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportBandwidthIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportBandwidthId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportBandwidthIdMutationOptions<
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

export function getApiTransportChatworkQueryKey(
  args: InferRequestType<(typeof client.api)['transport-chatwork']['$get']>,
) {
  return ['api', '/api/transport-chatwork', args] as const
}

export function getApiTransportChatworkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-chatwork']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-chatwork']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-chatwork']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportChatworkQueryKey>
  >({
    queryKey: getApiTransportChatworkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-chatwork'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportChatwork<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-chatwork']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-chatwork']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-chatwork']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportChatworkQueryKey>
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
      ...getApiTransportChatworkQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportChatwork<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportChatworkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportChatworkIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-chatwork'][':id']['$get']>,
) {
  return ['api', '/api/transport-chatwork/:id', args] as const
}

export function getApiTransportChatworkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-chatwork'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-chatwork'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportChatworkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-chatwork'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportChatworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-chatwork'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-chatwork'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportChatworkIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportChatworkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportChatworkIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportChatworkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportChatworkIdMutationOptions<
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

export function getApiTransportClickSendQueryKey(
  args: InferRequestType<(typeof client.api)['transport-click-send']['$get']>,
) {
  return ['api', '/api/transport-click-send', args] as const
}

export function getApiTransportClickSendQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-click-send']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-click-send']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportClickSendQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-click-send'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportClickSend<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-click-send']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-click-send']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportClickSendQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportClickSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportClickSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportClickSendIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-click-send'][':id']['$get']>,
) {
  return ['api', '/api/transport-click-send/:id', args] as const
}

export function getApiTransportClickSendIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-click-send'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-click-send'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportClickSendIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-click-send'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportClickSendId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-click-send'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-click-send'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportClickSendIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportClickSendId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportClickSendIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportClickSendId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportClickSendIdMutationOptions<
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

export function getApiTransportClickatellQueryKey(
  args: InferRequestType<(typeof client.api)['transport-clickatell']['$get']>,
) {
  return ['api', '/api/transport-clickatell', args] as const
}

export function getApiTransportClickatellQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-clickatell']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-clickatell']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportClickatellQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-clickatell'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportClickatell<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-clickatell']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-clickatell']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportClickatellQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportClickatell<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportClickatellMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportClickatellIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-clickatell'][':id']['$get']>,
) {
  return ['api', '/api/transport-clickatell/:id', args] as const
}

export function getApiTransportClickatellIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-clickatell'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-clickatell'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportClickatellIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-clickatell'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportClickatellId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-clickatell'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-clickatell'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportClickatellIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportClickatellId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportClickatellIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportClickatellId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportClickatellIdMutationOptions<
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

export function getApiTransportContactEveryoneQueryKey(
  args: InferRequestType<(typeof client.api)['transport-contact-everyone']['$get']>,
) {
  return ['api', '/api/transport-contact-everyone', args] as const
}

export function getApiTransportContactEveryoneQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-contact-everyone']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-contact-everyone']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportContactEveryoneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-contact-everyone'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportContactEveryone<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-contact-everyone']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-contact-everyone']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportContactEveryoneQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportContactEveryone<
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
                Awaited<ReturnType<(typeof client.api)['transport-contact-everyone']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-contact-everyone']['$post']>,
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
    const mutationDefaults = getPostApiTransportContactEveryoneMutationOptions<
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

export function getApiTransportContactEveryoneIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-contact-everyone'][':id']['$get']>,
) {
  return ['api', '/api/transport-contact-everyone/:id', args] as const
}

export function getApiTransportContactEveryoneIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-contact-everyone'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-contact-everyone'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportContactEveryoneIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-contact-everyone'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportContactEveryoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-contact-everyone'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-contact-everyone'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getApiTransportContactEveryoneIdQueryKey>
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
      ...getApiTransportContactEveryoneIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportContactEveryoneId<
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
                Awaited<
                  ReturnType<(typeof client.api)['transport-contact-everyone'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-contact-everyone'][':id']['$put']>,
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
    const mutationDefaults = getPutApiTransportContactEveryoneIdMutationOptions<
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

export function createDeleteApiTransportContactEveryoneId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportContactEveryoneIdMutationOptions<
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

export function getApiTransportDiscordQueryKey(
  args: InferRequestType<(typeof client.api)['transport-discord']['$get']>,
) {
  return ['api', '/api/transport-discord', args] as const
}

export function getApiTransportDiscordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-discord']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-discord']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-discord']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportDiscordQueryKey>
  >({
    queryKey: getApiTransportDiscordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-discord'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportDiscord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-discord']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-discord']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-discord']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportDiscordQueryKey>
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
    return { ...getApiTransportDiscordQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportDiscord<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportDiscordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportDiscordIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-discord'][':id']['$get']>,
) {
  return ['api', '/api/transport-discord/:id', args] as const
}

export function getApiTransportDiscordIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-discord'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-discord'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportDiscordIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-discord'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportDiscordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-discord'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-discord'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportDiscordIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportDiscordId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportDiscordIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportDiscordId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportDiscordIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportEmailQueryKey(
  args: InferRequestType<(typeof client.api)['transport-email']['$get']>,
) {
  return ['api', '/api/transport-email', args] as const
}

export function getApiTransportEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-email']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-email']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-email']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportEmailQueryKey>
  >({
    queryKey: getApiTransportEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-email'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-email']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-email']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-email']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportEmailQueryKey>
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
    return { ...getApiTransportEmailQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportEmailIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-email'][':id']['$get']>,
) {
  return ['api', '/api/transport-email/:id', args] as const
}

export function getApiTransportEmailIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-email'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-email'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportEmailIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-email'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportEmailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-email'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-email'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiTransportEmailIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiTransportEmailId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportEmailIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportEmailId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportEmailIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportEngagespotQueryKey(
  args: InferRequestType<(typeof client.api)['transport-engagespot']['$get']>,
) {
  return ['api', '/api/transport-engagespot', args] as const
}

export function getApiTransportEngagespotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-engagespot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-engagespot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportEngagespotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-engagespot'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportEngagespot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-engagespot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-engagespot']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportEngagespotQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportEngagespot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportEngagespotMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportEngagespotIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-engagespot'][':id']['$get']>,
) {
  return ['api', '/api/transport-engagespot/:id', args] as const
}

export function getApiTransportEngagespotIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-engagespot'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-engagespot'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportEngagespotIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-engagespot'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportEngagespotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-engagespot'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-engagespot'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportEngagespotIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportEngagespotId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportEngagespotIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportEngagespotId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportEngagespotIdMutationOptions<
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

export function getApiTransportEsendexQueryKey(
  args: InferRequestType<(typeof client.api)['transport-esendex']['$get']>,
) {
  return ['api', '/api/transport-esendex', args] as const
}

export function getApiTransportEsendexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-esendex']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-esendex']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-esendex']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportEsendexQueryKey>
  >({
    queryKey: getApiTransportEsendexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-esendex'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportEsendex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-esendex']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-esendex']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-esendex']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportEsendexQueryKey>
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
    return { ...getApiTransportEsendexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportEsendex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportEsendexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportEsendexIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-esendex'][':id']['$get']>,
) {
  return ['api', '/api/transport-esendex/:id', args] as const
}

export function getApiTransportEsendexIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-esendex'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-esendex'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportEsendexIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-esendex'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportEsendexId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-esendex'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-esendex'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportEsendexIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportEsendexId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportEsendexIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportEsendexId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportEsendexIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportExpoQueryKey(
  args: InferRequestType<(typeof client.api)['transport-expo']['$get']>,
) {
  return ['api', '/api/transport-expo', args] as const
}

export function getApiTransportExpoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-expo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-expo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-expo']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportExpoQueryKey>
  >({
    queryKey: getApiTransportExpoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-expo'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTransportExpo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-expo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-expo']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-expo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportExpoQueryKey>
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
    return { ...getApiTransportExpoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportExpo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportExpoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportExpoIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-expo'][':id']['$get']>,
) {
  return ['api', '/api/transport-expo/:id', args] as const
}

export function getApiTransportExpoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-expo'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-expo'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportExpoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-expo'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportExpoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-expo'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-expo'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiTransportExpoIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiTransportExpoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportExpoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportExpoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportExpoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportFirebaseQueryKey(
  args: InferRequestType<(typeof client.api)['transport-firebase']['$get']>,
) {
  return ['api', '/api/transport-firebase', args] as const
}

export function getApiTransportFirebaseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-firebase']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-firebase']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-firebase']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportFirebaseQueryKey>
  >({
    queryKey: getApiTransportFirebaseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-firebase'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportFirebase<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-firebase']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-firebase']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-firebase']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportFirebaseQueryKey>
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
      ...getApiTransportFirebaseQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportFirebase<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportFirebaseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportFirebaseIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-firebase'][':id']['$get']>,
) {
  return ['api', '/api/transport-firebase/:id', args] as const
}

export function getApiTransportFirebaseIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-firebase'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-firebase'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportFirebaseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-firebase'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportFirebaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-firebase'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-firebase'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportFirebaseIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportFirebaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportFirebaseIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportFirebaseId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportFirebaseIdMutationOptions<
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

export function getApiTransportFortySixElksQueryKey(
  args: InferRequestType<(typeof client.api)['transport-forty-six-elks']['$get']>,
) {
  return ['api', '/api/transport-forty-six-elks', args] as const
}

export function getApiTransportFortySixElksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-forty-six-elks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportFortySixElksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-forty-six-elks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportFortySixElks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-forty-six-elks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportFortySixElksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportFortySixElks<
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
                Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-forty-six-elks']['$post']>,
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
    const mutationDefaults = getPostApiTransportFortySixElksMutationOptions<
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

export function getApiTransportFortySixElksIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-forty-six-elks'][':id']['$get']>,
) {
  return ['api', '/api/transport-forty-six-elks/:id', args] as const
}

export function getApiTransportFortySixElksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-forty-six-elks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportFortySixElksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-forty-six-elks'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportFortySixElksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-forty-six-elks'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportFortySixElksIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportFortySixElksId<
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
                Awaited<ReturnType<(typeof client.api)['transport-forty-six-elks'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-forty-six-elks'][':id']['$put']>,
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
    const mutationDefaults = getPutApiTransportFortySixElksIdMutationOptions<
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

export function createDeleteApiTransportFortySixElksId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportFortySixElksIdMutationOptions<
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

export function getApiTransportFreeMobileQueryKey(
  args: InferRequestType<(typeof client.api)['transport-free-mobile']['$get']>,
) {
  return ['api', '/api/transport-free-mobile', args] as const
}

export function getApiTransportFreeMobileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-free-mobile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-free-mobile']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportFreeMobileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-free-mobile'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportFreeMobile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-free-mobile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-free-mobile']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportFreeMobileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportFreeMobile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportFreeMobileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportFreeMobileIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-free-mobile'][':id']['$get']>,
) {
  return ['api', '/api/transport-free-mobile/:id', args] as const
}

export function getApiTransportFreeMobileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-free-mobile'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-free-mobile'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportFreeMobileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-free-mobile'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportFreeMobileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-free-mobile'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-free-mobile'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportFreeMobileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportFreeMobileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportFreeMobileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportFreeMobileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportFreeMobileIdMutationOptions<
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

export function getApiTransportFreshdeskQueryKey(
  args: InferRequestType<(typeof client.api)['transport-freshdesk']['$get']>,
) {
  return ['api', '/api/transport-freshdesk', args] as const
}

export function getApiTransportFreshdeskQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-freshdesk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-freshdesk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportFreshdeskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-freshdesk'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportFreshdesk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-freshdesk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-freshdesk']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportFreshdeskQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportFreshdesk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportFreshdeskMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportFreshdeskIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-freshdesk'][':id']['$get']>,
) {
  return ['api', '/api/transport-freshdesk/:id', args] as const
}

export function getApiTransportFreshdeskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-freshdesk'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-freshdesk'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportFreshdeskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-freshdesk'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportFreshdeskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-freshdesk'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-freshdesk'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportFreshdeskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportFreshdeskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportFreshdeskIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportFreshdeskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportFreshdeskIdMutationOptions<
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

export function getApiTransportGatewayApiQueryKey(
  args: InferRequestType<(typeof client.api)['transport-gateway-api']['$get']>,
) {
  return ['api', '/api/transport-gateway-api', args] as const
}

export function getApiTransportGatewayApiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-gateway-api']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-gateway-api']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportGatewayApiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-gateway-api'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportGatewayApi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-gateway-api']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-gateway-api']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportGatewayApiQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportGatewayApi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportGatewayApiMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportGatewayApiIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-gateway-api'][':id']['$get']>,
) {
  return ['api', '/api/transport-gateway-api/:id', args] as const
}

export function getApiTransportGatewayApiIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-gateway-api'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-gateway-api'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportGatewayApiIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-gateway-api'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportGatewayApiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-gateway-api'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-gateway-api'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportGatewayApiIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportGatewayApiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportGatewayApiIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportGatewayApiId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportGatewayApiIdMutationOptions<
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

export function getApiTransportGitterQueryKey(
  args: InferRequestType<(typeof client.api)['transport-gitter']['$get']>,
) {
  return ['api', '/api/transport-gitter', args] as const
}

export function getApiTransportGitterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-gitter']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-gitter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-gitter']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportGitterQueryKey>
  >({
    queryKey: getApiTransportGitterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-gitter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportGitter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-gitter']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-gitter']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gitter']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportGitterQueryKey>
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
    return { ...getApiTransportGitterQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportGitter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportGitterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportGitterIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-gitter'][':id']['$get']>,
) {
  return ['api', '/api/transport-gitter/:id', args] as const
}

export function getApiTransportGitterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-gitter'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-gitter'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportGitterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-gitter'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportGitterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-gitter'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-gitter'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportGitterIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportGitterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportGitterIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportGitterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportGitterIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportGoogleChatQueryKey(
  args: InferRequestType<(typeof client.api)['transport-google-chat']['$get']>,
) {
  return ['api', '/api/transport-google-chat', args] as const
}

export function getApiTransportGoogleChatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-google-chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-google-chat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportGoogleChatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-google-chat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportGoogleChat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-google-chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-google-chat']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportGoogleChatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportGoogleChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportGoogleChatMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportGoogleChatIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-google-chat'][':id']['$get']>,
) {
  return ['api', '/api/transport-google-chat/:id', args] as const
}

export function getApiTransportGoogleChatIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-google-chat'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-google-chat'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportGoogleChatIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-google-chat'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportGoogleChatId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-google-chat'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-google-chat'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportGoogleChatIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportGoogleChatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportGoogleChatIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportGoogleChatId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportGoogleChatIdMutationOptions<
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

export function getApiTransportGotifyQueryKey(
  args: InferRequestType<(typeof client.api)['transport-gotify']['$get']>,
) {
  return ['api', '/api/transport-gotify', args] as const
}

export function getApiTransportGotifyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-gotify']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-gotify']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-gotify']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportGotifyQueryKey>
  >({
    queryKey: getApiTransportGotifyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-gotify'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportGotify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-gotify']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-gotify']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-gotify']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportGotifyQueryKey>
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
    return { ...getApiTransportGotifyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportGotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportGotifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportGotifyIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-gotify'][':id']['$get']>,
) {
  return ['api', '/api/transport-gotify/:id', args] as const
}

export function getApiTransportGotifyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-gotify'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-gotify'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportGotifyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-gotify'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportGotifyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-gotify'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-gotify'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportGotifyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportGotifyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportGotifyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportGotifyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportGotifyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportHelpScoutQueryKey(
  args: InferRequestType<(typeof client.api)['transport-help-scout']['$get']>,
) {
  return ['api', '/api/transport-help-scout', args] as const
}

export function getApiTransportHelpScoutQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-help-scout']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-help-scout']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportHelpScoutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-help-scout'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportHelpScout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-help-scout']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-help-scout']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportHelpScoutQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportHelpScout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportHelpScoutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportHelpScoutIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-help-scout'][':id']['$get']>,
) {
  return ['api', '/api/transport-help-scout/:id', args] as const
}

export function getApiTransportHelpScoutIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-help-scout'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-help-scout'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportHelpScoutIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-help-scout'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportHelpScoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-help-scout'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-help-scout'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportHelpScoutIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportHelpScoutId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportHelpScoutIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportHelpScoutId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportHelpScoutIdMutationOptions<
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

export function getApiTransportInfobipQueryKey(
  args: InferRequestType<(typeof client.api)['transport-infobip']['$get']>,
) {
  return ['api', '/api/transport-infobip', args] as const
}

export function getApiTransportInfobipQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-infobip']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-infobip']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-infobip']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportInfobipQueryKey>
  >({
    queryKey: getApiTransportInfobipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-infobip'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportInfobip<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-infobip']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-infobip']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-infobip']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportInfobipQueryKey>
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
    return { ...getApiTransportInfobipQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportInfobip<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportInfobipMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportInfobipIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-infobip'][':id']['$get']>,
) {
  return ['api', '/api/transport-infobip/:id', args] as const
}

export function getApiTransportInfobipIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-infobip'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-infobip'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportInfobipIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-infobip'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportInfobipId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-infobip'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-infobip'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportInfobipIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportInfobipId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportInfobipIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportInfobipId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportInfobipIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportIqsmsQueryKey(
  args: InferRequestType<(typeof client.api)['transport-iqsms']['$get']>,
) {
  return ['api', '/api/transport-iqsms', args] as const
}

export function getApiTransportIqsmsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-iqsms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-iqsms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-iqsms']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportIqsmsQueryKey>
  >({
    queryKey: getApiTransportIqsmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-iqsms'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportIqsms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-iqsms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-iqsms']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-iqsms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportIqsmsQueryKey>
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
    return { ...getApiTransportIqsmsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportIqsms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportIqsmsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportIqsmsIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-iqsms'][':id']['$get']>,
) {
  return ['api', '/api/transport-iqsms/:id', args] as const
}

export function getApiTransportIqsmsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-iqsms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-iqsms'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportIqsmsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-iqsms'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportIqsmsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-iqsms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-iqsms'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiTransportIqsmsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiTransportIqsmsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportIqsmsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportIqsmsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportIqsmsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportKazInfoTehQueryKey(
  args: InferRequestType<(typeof client.api)['transport-kaz-info-teh']['$get']>,
) {
  return ['api', '/api/transport-kaz-info-teh', args] as const
}

export function getApiTransportKazInfoTehQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-kaz-info-teh']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportKazInfoTehQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-kaz-info-teh'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportKazInfoTeh<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-kaz-info-teh']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportKazInfoTehQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportKazInfoTeh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportKazInfoTehMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportKazInfoTehIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-kaz-info-teh'][':id']['$get']>,
) {
  return ['api', '/api/transport-kaz-info-teh/:id', args] as const
}

export function getApiTransportKazInfoTehIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-kaz-info-teh'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportKazInfoTehIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-kaz-info-teh'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportKazInfoTehId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-kaz-info-teh'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-kaz-info-teh'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportKazInfoTehIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportKazInfoTehId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportKazInfoTehIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportKazInfoTehId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportKazInfoTehIdMutationOptions<
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

export function getApiTransportLightSmsQueryKey(
  args: InferRequestType<(typeof client.api)['transport-light-sms']['$get']>,
) {
  return ['api', '/api/transport-light-sms', args] as const
}

export function getApiTransportLightSmsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-light-sms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-light-sms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportLightSmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-light-sms'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportLightSms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-light-sms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-light-sms']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportLightSmsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportLightSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportLightSmsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportLightSmsIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-light-sms'][':id']['$get']>,
) {
  return ['api', '/api/transport-light-sms/:id', args] as const
}

export function getApiTransportLightSmsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-light-sms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-light-sms'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportLightSmsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-light-sms'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportLightSmsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-light-sms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-light-sms'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportLightSmsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportLightSmsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportLightSmsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportLightSmsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportLightSmsIdMutationOptions<
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

export function getApiTransportLineNotifyQueryKey(
  args: InferRequestType<(typeof client.api)['transport-line-notify']['$get']>,
) {
  return ['api', '/api/transport-line-notify', args] as const
}

export function getApiTransportLineNotifyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-line-notify']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-line-notify']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportLineNotifyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-line-notify'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportLineNotify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-line-notify']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-line-notify']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportLineNotifyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportLineNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportLineNotifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportLineNotifyIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-line-notify'][':id']['$get']>,
) {
  return ['api', '/api/transport-line-notify/:id', args] as const
}

export function getApiTransportLineNotifyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-line-notify'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-line-notify'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportLineNotifyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-line-notify'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportLineNotifyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-line-notify'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-line-notify'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportLineNotifyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportLineNotifyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportLineNotifyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportLineNotifyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportLineNotifyIdMutationOptions<
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

export function getApiTransportLinkedInQueryKey(
  args: InferRequestType<(typeof client.api)['transport-linked-in']['$get']>,
) {
  return ['api', '/api/transport-linked-in', args] as const
}

export function getApiTransportLinkedInQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-linked-in']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-linked-in']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportLinkedInQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-linked-in'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportLinkedIn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-linked-in']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-linked-in']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportLinkedInQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportLinkedIn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportLinkedInMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportLinkedInIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-linked-in'][':id']['$get']>,
) {
  return ['api', '/api/transport-linked-in/:id', args] as const
}

export function getApiTransportLinkedInIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-linked-in'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-linked-in'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportLinkedInIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-linked-in'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportLinkedInId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-linked-in'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-linked-in'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportLinkedInIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportLinkedInId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportLinkedInIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportLinkedInId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportLinkedInIdMutationOptions<
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

export function getApiTransportMailjetQueryKey(
  args: InferRequestType<(typeof client.api)['transport-mailjet']['$get']>,
) {
  return ['api', '/api/transport-mailjet', args] as const
}

export function getApiTransportMailjetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mailjet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-mailjet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mailjet']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMailjetQueryKey>
  >({
    queryKey: getApiTransportMailjetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-mailjet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportMailjet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mailjet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-mailjet']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mailjet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportMailjetQueryKey>
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
    return { ...getApiTransportMailjetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportMailjet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportMailjetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportMailjetIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-mailjet'][':id']['$get']>,
) {
  return ['api', '/api/transport-mailjet/:id', args] as const
}

export function getApiTransportMailjetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-mailjet'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-mailjet'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportMailjetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-mailjet'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportMailjetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-mailjet'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-mailjet'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportMailjetIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportMailjetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportMailjetIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportMailjetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportMailjetIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportMastodonQueryKey(
  args: InferRequestType<(typeof client.api)['transport-mastodon']['$get']>,
) {
  return ['api', '/api/transport-mastodon', args] as const
}

export function getApiTransportMastodonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mastodon']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-mastodon']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mastodon']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMastodonQueryKey>
  >({
    queryKey: getApiTransportMastodonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-mastodon'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportMastodon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mastodon']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-mastodon']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mastodon']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportMastodonQueryKey>
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
      ...getApiTransportMastodonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportMastodon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportMastodonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportMastodonIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-mastodon'][':id']['$get']>,
) {
  return ['api', '/api/transport-mastodon/:id', args] as const
}

export function getApiTransportMastodonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-mastodon'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-mastodon'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportMastodonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-mastodon'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportMastodonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-mastodon'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-mastodon'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportMastodonIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportMastodonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportMastodonIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportMastodonId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportMastodonIdMutationOptions<
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

export function getApiTransportMattermostQueryKey(
  args: InferRequestType<(typeof client.api)['transport-mattermost']['$get']>,
) {
  return ['api', '/api/transport-mattermost', args] as const
}

export function getApiTransportMattermostQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mattermost']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-mattermost']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportMattermostQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-mattermost'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportMattermost<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mattermost']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-mattermost']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportMattermostQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportMattermost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportMattermostMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportMattermostIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-mattermost'][':id']['$get']>,
) {
  return ['api', '/api/transport-mattermost/:id', args] as const
}

export function getApiTransportMattermostIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-mattermost'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-mattermost'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportMattermostIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-mattermost'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportMattermostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-mattermost'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-mattermost'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportMattermostIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportMattermostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportMattermostIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportMattermostId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportMattermostIdMutationOptions<
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

export function getApiTransportMercureQueryKey(
  args: InferRequestType<(typeof client.api)['transport-mercure']['$get']>,
) {
  return ['api', '/api/transport-mercure', args] as const
}

export function getApiTransportMercureQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mercure']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-mercure']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mercure']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMercureQueryKey>
  >({
    queryKey: getApiTransportMercureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-mercure'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportMercure<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mercure']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-mercure']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mercure']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportMercureQueryKey>
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
    return { ...getApiTransportMercureQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportMercure<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportMercureMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportMercureIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-mercure'][':id']['$get']>,
) {
  return ['api', '/api/transport-mercure/:id', args] as const
}

export function getApiTransportMercureIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-mercure'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-mercure'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportMercureIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-mercure'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportMercureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-mercure'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-mercure'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportMercureIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportMercureId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportMercureIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportMercureId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportMercureIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportMessageBirdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-message-bird']['$get']>,
) {
  return ['api', '/api/transport-message-bird', args] as const
}

export function getApiTransportMessageBirdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-message-bird']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-message-bird']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportMessageBirdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-message-bird'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportMessageBird<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-message-bird']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-message-bird']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportMessageBirdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportMessageBird<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportMessageBirdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportMessageBirdIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-message-bird'][':id']['$get']>,
) {
  return ['api', '/api/transport-message-bird/:id', args] as const
}

export function getApiTransportMessageBirdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-message-bird'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-message-bird'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportMessageBirdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-message-bird'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportMessageBirdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-message-bird'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-message-bird'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportMessageBirdIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportMessageBirdId<
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
                Awaited<ReturnType<(typeof client.api)['transport-message-bird'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-message-bird'][':id']['$put']>,
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
    const mutationDefaults = getPutApiTransportMessageBirdIdMutationOptions<
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

export function createDeleteApiTransportMessageBirdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportMessageBirdIdMutationOptions<
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

export function getApiTransportMessageMediaQueryKey(
  args: InferRequestType<(typeof client.api)['transport-message-media']['$get']>,
) {
  return ['api', '/api/transport-message-media', args] as const
}

export function getApiTransportMessageMediaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-message-media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-message-media']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportMessageMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-message-media'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportMessageMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-message-media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-message-media']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportMessageMediaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportMessageMedia<
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
                Awaited<ReturnType<(typeof client.api)['transport-message-media']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-message-media']['$post']>,
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
    const mutationDefaults = getPostApiTransportMessageMediaMutationOptions<
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

export function getApiTransportMessageMediaIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-message-media'][':id']['$get']>,
) {
  return ['api', '/api/transport-message-media/:id', args] as const
}

export function getApiTransportMessageMediaIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-message-media'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-message-media'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportMessageMediaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-message-media'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportMessageMediaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-message-media'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-message-media'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportMessageMediaIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportMessageMediaId<
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
                Awaited<ReturnType<(typeof client.api)['transport-message-media'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-message-media'][':id']['$put']>,
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
    const mutationDefaults = getPutApiTransportMessageMediaIdMutationOptions<
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

export function createDeleteApiTransportMessageMediaId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportMessageMediaIdMutationOptions<
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

export function getApiTransportMicrosoftTeamsQueryKey(
  args: InferRequestType<(typeof client.api)['transport-microsoft-teams']['$get']>,
) {
  return ['api', '/api/transport-microsoft-teams', args] as const
}

export function getApiTransportMicrosoftTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-microsoft-teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportMicrosoftTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-microsoft-teams'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportMicrosoftTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-microsoft-teams']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportMicrosoftTeamsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportMicrosoftTeams<
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
                Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-microsoft-teams']['$post']>,
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
    const mutationDefaults = getPostApiTransportMicrosoftTeamsMutationOptions<
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

export function getApiTransportMicrosoftTeamsIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-microsoft-teams'][':id']['$get']>,
) {
  return ['api', '/api/transport-microsoft-teams/:id', args] as const
}

export function getApiTransportMicrosoftTeamsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-microsoft-teams'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportMicrosoftTeamsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-microsoft-teams'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportMicrosoftTeamsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-microsoft-teams'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportMicrosoftTeamsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportMicrosoftTeamsId<
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
                Awaited<ReturnType<(typeof client.api)['transport-microsoft-teams'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-microsoft-teams'][':id']['$put']>,
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
    const mutationDefaults = getPutApiTransportMicrosoftTeamsIdMutationOptions<
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

export function createDeleteApiTransportMicrosoftTeamsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportMicrosoftTeamsIdMutationOptions<
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

export function getApiTransportMobytQueryKey(
  args: InferRequestType<(typeof client.api)['transport-mobyt']['$get']>,
) {
  return ['api', '/api/transport-mobyt', args] as const
}

export function getApiTransportMobytQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mobyt']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-mobyt']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mobyt']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportMobytQueryKey>
  >({
    queryKey: getApiTransportMobytQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-mobyt'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportMobyt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-mobyt']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-mobyt']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-mobyt']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportMobytQueryKey>
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
    return { ...getApiTransportMobytQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportMobyt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportMobytMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportMobytIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-mobyt'][':id']['$get']>,
) {
  return ['api', '/api/transport-mobyt/:id', args] as const
}

export function getApiTransportMobytIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-mobyt'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-mobyt'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportMobytIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-mobyt'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportMobytId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-mobyt'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-mobyt'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiTransportMobytIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiTransportMobytId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportMobytIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportMobytId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportMobytIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportOctopushQueryKey(
  args: InferRequestType<(typeof client.api)['transport-octopush']['$get']>,
) {
  return ['api', '/api/transport-octopush', args] as const
}

export function getApiTransportOctopushQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-octopush']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-octopush']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-octopush']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportOctopushQueryKey>
  >({
    queryKey: getApiTransportOctopushQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-octopush'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportOctopush<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-octopush']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-octopush']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-octopush']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportOctopushQueryKey>
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
      ...getApiTransportOctopushQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportOctopush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportOctopushMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportOctopushIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-octopush'][':id']['$get']>,
) {
  return ['api', '/api/transport-octopush/:id', args] as const
}

export function getApiTransportOctopushIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-octopush'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-octopush'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportOctopushIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-octopush'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportOctopushId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-octopush'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-octopush'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportOctopushIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportOctopushId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportOctopushIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportOctopushId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportOctopushIdMutationOptions<
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

export function getApiTransportOneSignalQueryKey(
  args: InferRequestType<(typeof client.api)['transport-one-signal']['$get']>,
) {
  return ['api', '/api/transport-one-signal', args] as const
}

export function getApiTransportOneSignalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-one-signal']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-one-signal']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportOneSignalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-one-signal'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportOneSignal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-one-signal']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-one-signal']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportOneSignalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportOneSignal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportOneSignalMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportOneSignalIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-one-signal'][':id']['$get']>,
) {
  return ['api', '/api/transport-one-signal/:id', args] as const
}

export function getApiTransportOneSignalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-one-signal'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-one-signal'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportOneSignalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-one-signal'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportOneSignalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-one-signal'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-one-signal'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportOneSignalIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportOneSignalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportOneSignalIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportOneSignalId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportOneSignalIdMutationOptions<
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

export function getApiTransportOpsgenieQueryKey(
  args: InferRequestType<(typeof client.api)['transport-opsgenie']['$get']>,
) {
  return ['api', '/api/transport-opsgenie', args] as const
}

export function getApiTransportOpsgenieQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-opsgenie']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-opsgenie']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-opsgenie']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportOpsgenieQueryKey>
  >({
    queryKey: getApiTransportOpsgenieQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-opsgenie'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportOpsgenie<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-opsgenie']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-opsgenie']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-opsgenie']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportOpsgenieQueryKey>
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
      ...getApiTransportOpsgenieQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportOpsgenie<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportOpsgenieMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportOpsgenieIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-opsgenie'][':id']['$get']>,
) {
  return ['api', '/api/transport-opsgenie/:id', args] as const
}

export function getApiTransportOpsgenieIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-opsgenie'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-opsgenie'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportOpsgenieIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-opsgenie'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportOpsgenieId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-opsgenie'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-opsgenie'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportOpsgenieIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportOpsgenieId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportOpsgenieIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportOpsgenieId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportOpsgenieIdMutationOptions<
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

export function getApiTransportOrangeSmsQueryKey(
  args: InferRequestType<(typeof client.api)['transport-orange-sms']['$get']>,
) {
  return ['api', '/api/transport-orange-sms', args] as const
}

export function getApiTransportOrangeSmsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-orange-sms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-orange-sms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportOrangeSmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-orange-sms'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportOrangeSms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-orange-sms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-orange-sms']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportOrangeSmsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportOrangeSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportOrangeSmsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportOrangeSmsIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-orange-sms'][':id']['$get']>,
) {
  return ['api', '/api/transport-orange-sms/:id', args] as const
}

export function getApiTransportOrangeSmsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-orange-sms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-orange-sms'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportOrangeSmsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-orange-sms'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportOrangeSmsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-orange-sms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-orange-sms'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportOrangeSmsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportOrangeSmsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportOrangeSmsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportOrangeSmsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportOrangeSmsIdMutationOptions<
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

export function getApiTransportOvhCloudQueryKey(
  args: InferRequestType<(typeof client.api)['transport-ovh-cloud']['$get']>,
) {
  return ['api', '/api/transport-ovh-cloud', args] as const
}

export function getApiTransportOvhCloudQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-ovh-cloud']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportOvhCloudQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-ovh-cloud'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportOvhCloud<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-ovh-cloud']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportOvhCloudQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportOvhCloud<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportOvhCloudMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportOvhCloudIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-ovh-cloud'][':id']['$get']>,
) {
  return ['api', '/api/transport-ovh-cloud/:id', args] as const
}

export function getApiTransportOvhCloudIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-ovh-cloud'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportOvhCloudIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-ovh-cloud'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportOvhCloudId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-ovh-cloud'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-ovh-cloud'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportOvhCloudIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportOvhCloudId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportOvhCloudIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportOvhCloudId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportOvhCloudIdMutationOptions<
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

export function getApiTransportPagerDutyQueryKey(
  args: InferRequestType<(typeof client.api)['transport-pager-duty']['$get']>,
) {
  return ['api', '/api/transport-pager-duty', args] as const
}

export function getApiTransportPagerDutyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pager-duty']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-pager-duty']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportPagerDutyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-pager-duty'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportPagerDuty<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pager-duty']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-pager-duty']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportPagerDutyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportPagerDuty<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportPagerDutyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportPagerDutyIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-pager-duty'][':id']['$get']>,
) {
  return ['api', '/api/transport-pager-duty/:id', args] as const
}

export function getApiTransportPagerDutyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-pager-duty'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-pager-duty'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportPagerDutyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-pager-duty'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportPagerDutyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-pager-duty'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-pager-duty'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportPagerDutyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportPagerDutyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportPagerDutyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportPagerDutyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportPagerDutyIdMutationOptions<
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

export function getApiTransportPagerTreeQueryKey(
  args: InferRequestType<(typeof client.api)['transport-pager-tree']['$get']>,
) {
  return ['api', '/api/transport-pager-tree', args] as const
}

export function getApiTransportPagerTreeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pager-tree']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-pager-tree']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportPagerTreeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-pager-tree'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportPagerTree<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pager-tree']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-pager-tree']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportPagerTreeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportPagerTree<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportPagerTreeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportPagerTreeIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-pager-tree'][':id']['$get']>,
) {
  return ['api', '/api/transport-pager-tree/:id', args] as const
}

export function getApiTransportPagerTreeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-pager-tree'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-pager-tree'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportPagerTreeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-pager-tree'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportPagerTreeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-pager-tree'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-pager-tree'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportPagerTreeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportPagerTreeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportPagerTreeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportPagerTreeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportPagerTreeIdMutationOptions<
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

export function getApiTransportPlivoQueryKey(
  args: InferRequestType<(typeof client.api)['transport-plivo']['$get']>,
) {
  return ['api', '/api/transport-plivo', args] as const
}

export function getApiTransportPlivoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-plivo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-plivo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-plivo']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportPlivoQueryKey>
  >({
    queryKey: getApiTransportPlivoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-plivo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportPlivo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-plivo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-plivo']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-plivo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportPlivoQueryKey>
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
    return { ...getApiTransportPlivoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportPlivo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportPlivoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportPlivoIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-plivo'][':id']['$get']>,
) {
  return ['api', '/api/transport-plivo/:id', args] as const
}

export function getApiTransportPlivoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-plivo'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-plivo'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportPlivoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-plivo'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportPlivoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-plivo'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-plivo'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiTransportPlivoIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiTransportPlivoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportPlivoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportPlivoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportPlivoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportPushbulletQueryKey(
  args: InferRequestType<(typeof client.api)['transport-pushbullet']['$get']>,
) {
  return ['api', '/api/transport-pushbullet', args] as const
}

export function getApiTransportPushbulletQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pushbullet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-pushbullet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportPushbulletQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-pushbullet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportPushbullet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pushbullet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-pushbullet']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportPushbulletQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportPushbullet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportPushbulletMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportPushbulletIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-pushbullet'][':id']['$get']>,
) {
  return ['api', '/api/transport-pushbullet/:id', args] as const
}

export function getApiTransportPushbulletIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-pushbullet'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-pushbullet'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportPushbulletIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-pushbullet'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportPushbulletId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-pushbullet'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-pushbullet'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportPushbulletIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportPushbulletId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportPushbulletIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportPushbulletId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportPushbulletIdMutationOptions<
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

export function getApiTransportPushoverQueryKey(
  args: InferRequestType<(typeof client.api)['transport-pushover']['$get']>,
) {
  return ['api', '/api/transport-pushover', args] as const
}

export function getApiTransportPushoverQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pushover']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-pushover']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pushover']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportPushoverQueryKey>
  >({
    queryKey: getApiTransportPushoverQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-pushover'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportPushover<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pushover']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-pushover']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushover']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportPushoverQueryKey>
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
      ...getApiTransportPushoverQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportPushover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportPushoverMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportPushoverIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-pushover'][':id']['$get']>,
) {
  return ['api', '/api/transport-pushover/:id', args] as const
}

export function getApiTransportPushoverIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-pushover'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-pushover'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportPushoverIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-pushover'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportPushoverId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-pushover'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-pushover'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportPushoverIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportPushoverId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportPushoverIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportPushoverId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportPushoverIdMutationOptions<
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

export function getApiTransportPushyQueryKey(
  args: InferRequestType<(typeof client.api)['transport-pushy']['$get']>,
) {
  return ['api', '/api/transport-pushy', args] as const
}

export function getApiTransportPushyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pushy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-pushy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pushy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportPushyQueryKey>
  >({
    queryKey: getApiTransportPushyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-pushy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportPushy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-pushy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-pushy']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-pushy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportPushyQueryKey>
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
    return { ...getApiTransportPushyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportPushy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportPushyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportPushyIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-pushy'][':id']['$get']>,
) {
  return ['api', '/api/transport-pushy/:id', args] as const
}

export function getApiTransportPushyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-pushy'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-pushy'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportPushyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-pushy'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportPushyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-pushy'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-pushy'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiTransportPushyIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiTransportPushyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportPushyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportPushyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportPushyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportRingCentralQueryKey(
  args: InferRequestType<(typeof client.api)['transport-ring-central']['$get']>,
) {
  return ['api', '/api/transport-ring-central', args] as const
}

export function getApiTransportRingCentralQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-ring-central']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-ring-central']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportRingCentralQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-ring-central'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportRingCentral<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-ring-central']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-ring-central']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportRingCentralQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportRingCentral<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportRingCentralMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportRingCentralIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-ring-central'][':id']['$get']>,
) {
  return ['api', '/api/transport-ring-central/:id', args] as const
}

export function getApiTransportRingCentralIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-ring-central'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-ring-central'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportRingCentralIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-ring-central'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportRingCentralId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-ring-central'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-ring-central'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportRingCentralIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportRingCentralId<
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
                Awaited<ReturnType<(typeof client.api)['transport-ring-central'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-ring-central'][':id']['$put']>,
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
    const mutationDefaults = getPutApiTransportRingCentralIdMutationOptions<
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

export function createDeleteApiTransportRingCentralId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportRingCentralIdMutationOptions<
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

export function getApiTransportRocketChatQueryKey(
  args: InferRequestType<(typeof client.api)['transport-rocket-chat']['$get']>,
) {
  return ['api', '/api/transport-rocket-chat', args] as const
}

export function getApiTransportRocketChatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-rocket-chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-rocket-chat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportRocketChatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-rocket-chat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportRocketChat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-rocket-chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-rocket-chat']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportRocketChatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportRocketChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportRocketChatMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportRocketChatIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-rocket-chat'][':id']['$get']>,
) {
  return ['api', '/api/transport-rocket-chat/:id', args] as const
}

export function getApiTransportRocketChatIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-rocket-chat'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-rocket-chat'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportRocketChatIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-rocket-chat'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportRocketChatId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-rocket-chat'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-rocket-chat'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportRocketChatIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportRocketChatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportRocketChatIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportRocketChatId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportRocketChatIdMutationOptions<
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

export function getApiTransportSendberryQueryKey(
  args: InferRequestType<(typeof client.api)['transport-sendberry']['$get']>,
) {
  return ['api', '/api/transport-sendberry', args] as const
}

export function getApiTransportSendberryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sendberry']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-sendberry']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSendberryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-sendberry'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSendberry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sendberry']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-sendberry']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportSendberryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportSendberry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportSendberryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSendberryIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-sendberry'][':id']['$get']>,
) {
  return ['api', '/api/transport-sendberry/:id', args] as const
}

export function getApiTransportSendberryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sendberry'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-sendberry'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSendberryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-sendberry'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSendberryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sendberry'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-sendberry'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportSendberryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportSendberryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportSendberryIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportSendberryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportSendberryIdMutationOptions<
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

export function getApiTransportSendinblueQueryKey(
  args: InferRequestType<(typeof client.api)['transport-sendinblue']['$get']>,
) {
  return ['api', '/api/transport-sendinblue', args] as const
}

export function getApiTransportSendinblueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sendinblue']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-sendinblue']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSendinblueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-sendinblue'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSendinblue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sendinblue']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-sendinblue']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportSendinblueQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportSendinblue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportSendinblueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSendinblueIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-sendinblue'][':id']['$get']>,
) {
  return ['api', '/api/transport-sendinblue/:id', args] as const
}

export function getApiTransportSendinblueIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sendinblue'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-sendinblue'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSendinblueIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-sendinblue'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSendinblueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sendinblue'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-sendinblue'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportSendinblueIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportSendinblueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportSendinblueIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportSendinblueId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportSendinblueIdMutationOptions<
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

export function getApiTransportSimpleTextinQueryKey(
  args: InferRequestType<(typeof client.api)['transport-simple-textin']['$get']>,
) {
  return ['api', '/api/transport-simple-textin', args] as const
}

export function getApiTransportSimpleTextinQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-simple-textin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-simple-textin']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSimpleTextinQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-simple-textin'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSimpleTextin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-simple-textin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-simple-textin']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportSimpleTextinQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportSimpleTextin<
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
                Awaited<ReturnType<(typeof client.api)['transport-simple-textin']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-simple-textin']['$post']>,
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
    const mutationDefaults = getPostApiTransportSimpleTextinMutationOptions<
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

export function getApiTransportSimpleTextinIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-simple-textin'][':id']['$get']>,
) {
  return ['api', '/api/transport-simple-textin/:id', args] as const
}

export function getApiTransportSimpleTextinIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-simple-textin'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-simple-textin'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSimpleTextinIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-simple-textin'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSimpleTextinId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-simple-textin'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-simple-textin'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportSimpleTextinIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportSimpleTextinId<
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
                Awaited<ReturnType<(typeof client.api)['transport-simple-textin'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['transport-simple-textin'][':id']['$put']>,
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
    const mutationDefaults = getPutApiTransportSimpleTextinIdMutationOptions<
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

export function createDeleteApiTransportSimpleTextinId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportSimpleTextinIdMutationOptions<
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

export function getApiTransportSinchQueryKey(
  args: InferRequestType<(typeof client.api)['transport-sinch']['$get']>,
) {
  return ['api', '/api/transport-sinch', args] as const
}

export function getApiTransportSinchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sinch']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-sinch']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sinch']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSinchQueryKey>
  >({
    queryKey: getApiTransportSinchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-sinch'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSinch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sinch']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-sinch']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sinch']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportSinchQueryKey>
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
    return { ...getApiTransportSinchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportSinch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportSinchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSinchIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-sinch'][':id']['$get']>,
) {
  return ['api', '/api/transport-sinch/:id', args] as const
}

export function getApiTransportSinchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sinch'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-sinch'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSinchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-sinch'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSinchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sinch'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-sinch'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiTransportSinchIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiTransportSinchId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportSinchIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportSinchId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportSinchIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSlackQueryKey(
  args: InferRequestType<(typeof client.api)['transport-slack']['$get']>,
) {
  return ['api', '/api/transport-slack', args] as const
}

export function getApiTransportSlackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-slack']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-slack']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-slack']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSlackQueryKey>
  >({
    queryKey: getApiTransportSlackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-slack'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSlack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-slack']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-slack']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-slack']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportSlackQueryKey>
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
    return { ...getApiTransportSlackQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportSlack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportSlackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSlackIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-slack'][':id']['$get']>,
) {
  return ['api', '/api/transport-slack/:id', args] as const
}

export function getApiTransportSlackIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-slack'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-slack'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSlackIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-slack'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSlackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-slack'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-slack'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiTransportSlackIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiTransportSlackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportSlackIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportSlackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportSlackIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSmsBiurasQueryKey(
  args: InferRequestType<(typeof client.api)['transport-sms-biuras']['$get']>,
) {
  return ['api', '/api/transport-sms-biuras', args] as const
}

export function getApiTransportSmsBiurasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sms-biuras']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-sms-biuras']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSmsBiurasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-sms-biuras'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSmsBiuras<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sms-biuras']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-sms-biuras']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportSmsBiurasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportSmsBiuras<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportSmsBiurasMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSmsBiurasIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-sms-biuras'][':id']['$get']>,
) {
  return ['api', '/api/transport-sms-biuras/:id', args] as const
}

export function getApiTransportSmsBiurasIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sms-biuras'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-sms-biuras'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSmsBiurasIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-sms-biuras'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSmsBiurasId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sms-biuras'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-sms-biuras'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportSmsBiurasIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportSmsBiurasId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportSmsBiurasIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportSmsBiurasId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportSmsBiurasIdMutationOptions<
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

export function getApiTransportSmsFactorQueryKey(
  args: InferRequestType<(typeof client.api)['transport-sms-factor']['$get']>,
) {
  return ['api', '/api/transport-sms-factor', args] as const
}

export function getApiTransportSmsFactorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sms-factor']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-sms-factor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSmsFactorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-sms-factor'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSmsFactor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sms-factor']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-sms-factor']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportSmsFactorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportSmsFactor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportSmsFactorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSmsFactorIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-sms-factor'][':id']['$get']>,
) {
  return ['api', '/api/transport-sms-factor/:id', args] as const
}

export function getApiTransportSmsFactorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sms-factor'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-sms-factor'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSmsFactorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-sms-factor'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSmsFactorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sms-factor'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-sms-factor'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportSmsFactorIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportSmsFactorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportSmsFactorIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportSmsFactorId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportSmsFactorIdMutationOptions<
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

export function getApiTransportSms77QueryKey(
  args: InferRequestType<(typeof client.api)['transport-sms77']['$get']>,
) {
  return ['api', '/api/transport-sms77', args] as const
}

export function getApiTransportSms77QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sms77']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-sms77']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sms77']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSms77QueryKey>
  >({
    queryKey: getApiTransportSms77QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-sms77'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSms77<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-sms77']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-sms77']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-sms77']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportSms77QueryKey>
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
    return { ...getApiTransportSms77QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportSms77<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportSms77MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSms77IdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-sms77'][':id']['$get']>,
) {
  return ['api', '/api/transport-sms77/:id', args] as const
}

export function getApiTransportSms77IdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sms77'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-sms77'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSms77IdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-sms77'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSms77Id<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-sms77'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-sms77'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiTransportSms77IdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiTransportSms77Id<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportSms77IdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportSms77Id<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportSms77IdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSmsapiQueryKey(
  args: InferRequestType<(typeof client.api)['transport-smsapi']['$get']>,
) {
  return ['api', '/api/transport-smsapi', args] as const
}

export function getApiTransportSmsapiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsapi']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-smsapi']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsapi']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSmsapiQueryKey>
  >({
    queryKey: getApiTransportSmsapiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-smsapi'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSmsapi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsapi']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-smsapi']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsapi']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportSmsapiQueryKey>
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
    return { ...getApiTransportSmsapiQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportSmsapi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportSmsapiMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSmsapiIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-smsapi'][':id']['$get']>,
) {
  return ['api', '/api/transport-smsapi/:id', args] as const
}

export function getApiTransportSmsapiIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-smsapi'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-smsapi'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSmsapiIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-smsapi'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSmsapiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-smsapi'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-smsapi'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportSmsapiIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportSmsapiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportSmsapiIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportSmsapiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportSmsapiIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSmscQueryKey(
  args: InferRequestType<(typeof client.api)['transport-smsc']['$get']>,
) {
  return ['api', '/api/transport-smsc', args] as const
}

export function getApiTransportSmscQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsc']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-smsc']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsc']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSmscQueryKey>
  >({
    queryKey: getApiTransportSmscQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-smsc'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTransportSmsc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsc']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-smsc']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsc']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportSmscQueryKey>
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
    return { ...getApiTransportSmscQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportSmsc<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportSmscMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSmscIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-smsc'][':id']['$get']>,
) {
  return ['api', '/api/transport-smsc/:id', args] as const
}

export function getApiTransportSmscIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-smsc'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-smsc'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSmscIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-smsc'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSmscId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-smsc'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-smsc'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiTransportSmscIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiTransportSmscId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportSmscIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportSmscId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportSmscIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSmsmodeQueryKey(
  args: InferRequestType<(typeof client.api)['transport-smsmode']['$get']>,
) {
  return ['api', '/api/transport-smsmode', args] as const
}

export function getApiTransportSmsmodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsmode']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-smsmode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsmode']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSmsmodeQueryKey>
  >({
    queryKey: getApiTransportSmsmodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-smsmode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSmsmode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-smsmode']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-smsmode']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-smsmode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportSmsmodeQueryKey>
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
    return { ...getApiTransportSmsmodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportSmsmode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportSmsmodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSmsmodeIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-smsmode'][':id']['$get']>,
) {
  return ['api', '/api/transport-smsmode/:id', args] as const
}

export function getApiTransportSmsmodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-smsmode'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-smsmode'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSmsmodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-smsmode'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSmsmodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-smsmode'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-smsmode'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportSmsmodeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportSmsmodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportSmsmodeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportSmsmodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportSmsmodeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSpotHitQueryKey(
  args: InferRequestType<(typeof client.api)['transport-spot-hit']['$get']>,
) {
  return ['api', '/api/transport-spot-hit', args] as const
}

export function getApiTransportSpotHitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-spot-hit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-spot-hit']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-spot-hit']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportSpotHitQueryKey>
  >({
    queryKey: getApiTransportSpotHitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-spot-hit'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSpotHit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-spot-hit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-spot-hit']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-spot-hit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportSpotHitQueryKey>
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
    return { ...getApiTransportSpotHitQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportSpotHit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportSpotHitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportSpotHitIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-spot-hit'][':id']['$get']>,
) {
  return ['api', '/api/transport-spot-hit/:id', args] as const
}

export function getApiTransportSpotHitIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-spot-hit'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-spot-hit'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportSpotHitIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-spot-hit'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportSpotHitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-spot-hit'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-spot-hit'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportSpotHitIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportSpotHitId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportSpotHitIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportSpotHitId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportSpotHitIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportTelegramQueryKey(
  args: InferRequestType<(typeof client.api)['transport-telegram']['$get']>,
) {
  return ['api', '/api/transport-telegram', args] as const
}

export function getApiTransportTelegramQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-telegram']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-telegram']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-telegram']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTelegramQueryKey>
  >({
    queryKey: getApiTransportTelegramQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-telegram'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportTelegram<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-telegram']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-telegram']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-telegram']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportTelegramQueryKey>
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
      ...getApiTransportTelegramQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportTelegram<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportTelegramMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportTelegramIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-telegram'][':id']['$get']>,
) {
  return ['api', '/api/transport-telegram/:id', args] as const
}

export function getApiTransportTelegramIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-telegram'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-telegram'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportTelegramIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-telegram'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportTelegramId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-telegram'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-telegram'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportTelegramIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportTelegramId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportTelegramIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportTelegramId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportTelegramIdMutationOptions<
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

export function getApiTransportTelnyxQueryKey(
  args: InferRequestType<(typeof client.api)['transport-telnyx']['$get']>,
) {
  return ['api', '/api/transport-telnyx', args] as const
}

export function getApiTransportTelnyxQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-telnyx']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-telnyx']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-telnyx']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTelnyxQueryKey>
  >({
    queryKey: getApiTransportTelnyxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-telnyx'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportTelnyx<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-telnyx']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-telnyx']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-telnyx']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportTelnyxQueryKey>
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
    return { ...getApiTransportTelnyxQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportTelnyx<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportTelnyxMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportTelnyxIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-telnyx'][':id']['$get']>,
) {
  return ['api', '/api/transport-telnyx/:id', args] as const
}

export function getApiTransportTelnyxIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-telnyx'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-telnyx'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportTelnyxIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-telnyx'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportTelnyxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-telnyx'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-telnyx'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportTelnyxIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportTelnyxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportTelnyxIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportTelnyxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportTelnyxIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportTermiiQueryKey(
  args: InferRequestType<(typeof client.api)['transport-termii']['$get']>,
) {
  return ['api', '/api/transport-termii', args] as const
}

export function getApiTransportTermiiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-termii']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-termii']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-termii']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTermiiQueryKey>
  >({
    queryKey: getApiTransportTermiiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-termii'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportTermii<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-termii']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-termii']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-termii']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportTermiiQueryKey>
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
    return { ...getApiTransportTermiiQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportTermii<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportTermiiMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportTermiiIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-termii'][':id']['$get']>,
) {
  return ['api', '/api/transport-termii/:id', args] as const
}

export function getApiTransportTermiiIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-termii'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-termii'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportTermiiIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-termii'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportTermiiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-termii'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-termii'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportTermiiIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportTermiiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportTermiiIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportTermiiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportTermiiIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportTrelloQueryKey(
  args: InferRequestType<(typeof client.api)['transport-trello']['$get']>,
) {
  return ['api', '/api/transport-trello', args] as const
}

export function getApiTransportTrelloQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-trello']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-trello']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-trello']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTrelloQueryKey>
  >({
    queryKey: getApiTransportTrelloQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-trello'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportTrello<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-trello']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-trello']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-trello']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportTrelloQueryKey>
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
    return { ...getApiTransportTrelloQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportTrello<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportTrelloMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportTrelloIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-trello'][':id']['$get']>,
) {
  return ['api', '/api/transport-trello/:id', args] as const
}

export function getApiTransportTrelloIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-trello'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-trello'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportTrelloIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-trello'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportTrelloId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-trello'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-trello'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportTrelloIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportTrelloId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportTrelloIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportTrelloId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportTrelloIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportTurboSmsQueryKey(
  args: InferRequestType<(typeof client.api)['transport-turbo-sms']['$get']>,
) {
  return ['api', '/api/transport-turbo-sms', args] as const
}

export function getApiTransportTurboSmsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-turbo-sms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-turbo-sms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportTurboSmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-turbo-sms'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportTurboSms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-turbo-sms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-turbo-sms']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportTurboSmsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTransportTurboSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportTurboSmsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportTurboSmsIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-turbo-sms'][':id']['$get']>,
) {
  return ['api', '/api/transport-turbo-sms/:id', args] as const
}

export function getApiTransportTurboSmsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-turbo-sms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-turbo-sms'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportTurboSmsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-turbo-sms'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportTurboSmsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-turbo-sms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-turbo-sms'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportTurboSmsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportTurboSmsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportTurboSmsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportTurboSmsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportTurboSmsIdMutationOptions<
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

export function getApiTransportTwilioQueryKey(
  args: InferRequestType<(typeof client.api)['transport-twilio']['$get']>,
) {
  return ['api', '/api/transport-twilio', args] as const
}

export function getApiTransportTwilioQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-twilio']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-twilio']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-twilio']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTwilioQueryKey>
  >({
    queryKey: getApiTransportTwilioQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-twilio'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportTwilio<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-twilio']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-twilio']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-twilio']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportTwilioQueryKey>
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
    return { ...getApiTransportTwilioQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportTwilio<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportTwilioMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportTwilioIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-twilio'][':id']['$get']>,
) {
  return ['api', '/api/transport-twilio/:id', args] as const
}

export function getApiTransportTwilioIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-twilio'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-twilio'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportTwilioIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-twilio'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportTwilioId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-twilio'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-twilio'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportTwilioIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportTwilioId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportTwilioIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportTwilioId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportTwilioIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportTwitterQueryKey(
  args: InferRequestType<(typeof client.api)['transport-twitter']['$get']>,
) {
  return ['api', '/api/transport-twitter', args] as const
}

export function getApiTransportTwitterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-twitter']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-twitter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-twitter']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportTwitterQueryKey>
  >({
    queryKey: getApiTransportTwitterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-twitter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportTwitter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-twitter']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-twitter']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-twitter']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportTwitterQueryKey>
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
    return { ...getApiTransportTwitterQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportTwitter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportTwitterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportTwitterIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-twitter'][':id']['$get']>,
) {
  return ['api', '/api/transport-twitter/:id', args] as const
}

export function getApiTransportTwitterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-twitter'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-twitter'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportTwitterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-twitter'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportTwitterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-twitter'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-twitter'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportTwitterIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportTwitterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportTwitterIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportTwitterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportTwitterIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportVonageQueryKey(
  args: InferRequestType<(typeof client.api)['transport-vonage']['$get']>,
) {
  return ['api', '/api/transport-vonage', args] as const
}

export function getApiTransportVonageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-vonage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-vonage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-vonage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportVonageQueryKey>
  >({
    queryKey: getApiTransportVonageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-vonage'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportVonage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-vonage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-vonage']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-vonage']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportVonageQueryKey>
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
    return { ...getApiTransportVonageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportVonage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportVonageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportVonageIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-vonage'][':id']['$get']>,
) {
  return ['api', '/api/transport-vonage/:id', args] as const
}

export function getApiTransportVonageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-vonage'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-vonage'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportVonageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-vonage'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportVonageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-vonage'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-vonage'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportVonageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportVonageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportVonageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportVonageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportVonageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportWebhookQueryKey(
  args: InferRequestType<(typeof client.api)['transport-webhook']['$get']>,
) {
  return ['api', '/api/transport-webhook', args] as const
}

export function getApiTransportWebhookQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-webhook']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-webhook']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-webhook']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportWebhookQueryKey>
  >({
    queryKey: getApiTransportWebhookQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-webhook'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportWebhook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-webhook']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-webhook']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-webhook']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportWebhookQueryKey>
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
    return { ...getApiTransportWebhookQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportWebhookMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportWebhookIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-webhook'][':id']['$get']>,
) {
  return ['api', '/api/transport-webhook/:id', args] as const
}

export function getApiTransportWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-webhook'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-webhook'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-webhook'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-webhook'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-webhook'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportWebhookIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportYunpianQueryKey(
  args: InferRequestType<(typeof client.api)['transport-yunpian']['$get']>,
) {
  return ['api', '/api/transport-yunpian', args] as const
}

export function getApiTransportYunpianQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-yunpian']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-yunpian']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-yunpian']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportYunpianQueryKey>
  >({
    queryKey: getApiTransportYunpianQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-yunpian'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportYunpian<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-yunpian']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-yunpian']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-yunpian']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportYunpianQueryKey>
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
    return { ...getApiTransportYunpianQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportYunpian<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportYunpianMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportYunpianIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-yunpian'][':id']['$get']>,
) {
  return ['api', '/api/transport-yunpian/:id', args] as const
}

export function getApiTransportYunpianIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-yunpian'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-yunpian'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportYunpianIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-yunpian'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportYunpianId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-yunpian'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-yunpian'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportYunpianIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportYunpianId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportYunpianIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportYunpianId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportYunpianIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportZendeskQueryKey(
  args: InferRequestType<(typeof client.api)['transport-zendesk']['$get']>,
) {
  return ['api', '/api/transport-zendesk', args] as const
}

export function getApiTransportZendeskQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-zendesk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-zendesk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-zendesk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportZendeskQueryKey>
  >({
    queryKey: getApiTransportZendeskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-zendesk'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportZendesk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-zendesk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-zendesk']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-zendesk']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportZendeskQueryKey>
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
    return { ...getApiTransportZendeskQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportZendesk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportZendeskMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportZendeskIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-zendesk'][':id']['$get']>,
) {
  return ['api', '/api/transport-zendesk/:id', args] as const
}

export function getApiTransportZendeskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-zendesk'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-zendesk'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportZendeskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-zendesk'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportZendeskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-zendesk'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-zendesk'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiTransportZendeskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiTransportZendeskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportZendeskIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportZendeskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportZendeskIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportZulipQueryKey(
  args: InferRequestType<(typeof client.api)['transport-zulip']['$get']>,
) {
  return ['api', '/api/transport-zulip', args] as const
}

export function getApiTransportZulipQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-zulip']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-zulip']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-zulip']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransportZulipQueryKey>
  >({
    queryKey: getApiTransportZulipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-zulip'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportZulip<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['transport-zulip']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-zulip']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['transport-zulip']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiTransportZulipQueryKey>
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
    return { ...getApiTransportZulipQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTransportZulip<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiTransportZulipMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransportZulipIdQueryKey(
  args: InferRequestType<(typeof client.api)['transport-zulip'][':id']['$get']>,
) {
  return ['api', '/api/transport-zulip/:id', args] as const
}

export function getApiTransportZulipIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-zulip'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['transport-zulip'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTransportZulipIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['transport-zulip'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransportZulipId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['transport-zulip'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['transport-zulip'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiTransportZulipIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiTransportZulipId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiTransportZulipIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiTransportZulipId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiTransportZulipIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUserAccountQueryKey(
  args: InferRequestType<(typeof client.api)['user-account']['$get']>,
) {
  return ['api', '/api/user-account', args] as const
}

export function getApiUserAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-account']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['user-account']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-account']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserAccountQueryKey>
  >({
    queryKey: getApiUserAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['user-account'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUserAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-account']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['user-account']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-account']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiUserAccountQueryKey>
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
    return { ...getApiUserAccountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiUserAccountLevelCodeQueryKey(
  args: InferRequestType<(typeof client.api)['user-account-level-code']['$get']>,
) {
  return ['api', '/api/user-account-level-code', args] as const
}

export function getApiUserAccountLevelCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['user-account-level-code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['user-account-level-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUserAccountLevelCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['user-account-level-code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUserAccountLevelCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['user-account-level-code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['user-account-level-code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiUserAccountLevelCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiUserAccountLevelCodeIdQueryKey(
  args: InferRequestType<(typeof client.api)['user-account-level-code'][':id']['$get']>,
) {
  return ['api', '/api/user-account-level-code/:id', args] as const
}

export function getApiUserAccountLevelCodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['user-account-level-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['user-account-level-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUserAccountLevelCodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['user-account-level-code'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUserAccountLevelCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['user-account-level-code'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['user-account-level-code'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiUserAccountLevelCodeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiUserAccountIdQueryKey(
  args: InferRequestType<(typeof client.api)['user-account'][':id']['$get']>,
) {
  return ['api', '/api/user-account/:id', args] as const
}

export function getApiUserAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-account'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['user-account'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUserAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['user-account'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUserAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-account'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['user-account'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiUserAccountIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiUserAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutApiUserAccountIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
