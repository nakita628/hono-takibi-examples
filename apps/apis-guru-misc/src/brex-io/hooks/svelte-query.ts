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

export function getApiV1CompanyAnnouncementIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.company.announcement)[':id']['$get']>,
) {
  return ['api', '/api/v1/company/announcement/:id', args] as const
}

export function getApiV1CompanyAnnouncementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.announcement)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.company.announcement)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.company.announcement)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyAnnouncementIdQueryKey>
  >({
    queryKey: getApiV1CompanyAnnouncementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.company.announcement[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CompanyAnnouncementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.announcement)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.company.announcement)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.company.announcement)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CompanyAnnouncementIdQueryKey>
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
      ...getApiV1CompanyAnnouncementIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1CompanyDeepsearchIsinMutationKey() {
  return ['api', '/api/v1/company/deepsearch/isin', 'POST'] as const
}

export function getPostApiV1CompanyDeepsearchIsinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.company.deepsearch.isin.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.company.deepsearch.isin.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CompanyDeepsearchIsinMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.company.deepsearch.isin.$post>) {
      return parseResponse(client.api.v1.company.deepsearch.isin.$post(args, options))
    },
  })
}

export function createPostApiV1CompanyDeepsearchIsin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.company.deepsearch.isin.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.company.deepsearch.isin.$post>,
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
    const mutationDefaults = getPostApiV1CompanyDeepsearchIsinMutationOptions<
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

export function getApiV1CompanyDeepsearchLeiNumberQueryKey(
  args: InferRequestType<(typeof client.api.v1.company.deepsearch.lei)[':number']['$get']>,
) {
  return ['api', '/api/v1/company/deepsearch/lei/:number', args] as const
}

export function getApiV1CompanyDeepsearchLeiNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.deepsearch.lei)[':number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.company.deepsearch.lei)[':number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.company.deepsearch.lei)[':number']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyDeepsearchLeiNumberQueryKey>
  >({
    queryKey: getApiV1CompanyDeepsearchLeiNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.company.deepsearch.lei[':number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CompanyDeepsearchLeiNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.deepsearch.lei)[':number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.company.deepsearch.lei)[':number']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.company.deepsearch.lei)[':number']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CompanyDeepsearchLeiNumberQueryKey>
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
      ...getApiV1CompanyDeepsearchLeiNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1CompanyDeepsearchNameCountryNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.company.deepsearch.name)[':country'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/company/deepsearch/name/:country/:name', args] as const
}

export function getApiV1CompanyDeepsearchNameCountryNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.company.deepsearch.name)[':country'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.company.deepsearch.name)[':country'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.company.deepsearch.name)[':country'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyDeepsearchNameCountryNameQueryKey>
  >({
    queryKey: getApiV1CompanyDeepsearchNameCountryNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.company.deepsearch.name[':country'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CompanyDeepsearchNameCountryName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.company.deepsearch.name)[':country'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.company.deepsearch.name)[':country'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.company.deepsearch.name)[':country'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CompanyDeepsearchNameCountryNameQueryKey>
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
      ...getApiV1CompanyDeepsearchNameCountryNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1CompanyDeepsearchNumberCountryNumberQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.company.deepsearch.number)[':country'][':number']['$get']
  >,
) {
  return ['api', '/api/v1/company/deepsearch/number/:country/:number', args] as const
}

export function getApiV1CompanyDeepsearchNumberCountryNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.company.deepsearch.number)[':country'][':number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.company.deepsearch.number)[':country'][':number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.company.deepsearch.number)[':country'][':number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyDeepsearchNumberCountryNumberQueryKey>
  >({
    queryKey: getApiV1CompanyDeepsearchNumberCountryNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.company.deepsearch.number[':country'][':number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CompanyDeepsearchNumberCountryNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.company.deepsearch.number)[':country'][':number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.company.deepsearch.number)[':country'][':number']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.company.deepsearch.number)[':country'][':number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CompanyDeepsearchNumberCountryNumberQueryKey>
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
      ...getApiV1CompanyDeepsearchNumberCountryNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1CompanyMonitoringChangeTypesQueryKey() {
  return ['api', '/api/v1/company/monitoring/changeTypes'] as const
}

export function getApiV1CompanyMonitoringChangeTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.company.monitoring.changeTypes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.company.monitoring.changeTypes.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyMonitoringChangeTypesQueryKey>
  >({
    queryKey: getApiV1CompanyMonitoringChangeTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.company.monitoring.changeTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CompanyMonitoringChangeTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.company.monitoring.changeTypes.$get>>
      >
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
              Awaited<ReturnType<typeof client.api.v1.company.monitoring.changeTypes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CompanyMonitoringChangeTypesQueryKey>
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
      ...getApiV1CompanyMonitoringChangeTypesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1CompanyMonitoringListQueryKey() {
  return ['api', '/api/v1/company/monitoring/list'] as const
}

export function getApiV1CompanyMonitoringListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company.monitoring.list.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company.monitoring.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyMonitoringListQueryKey>
  >({
    queryKey: getApiV1CompanyMonitoringListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.company.monitoring.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CompanyMonitoringList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company.monitoring.list.$get>>>
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
              Awaited<ReturnType<typeof client.api.v1.company.monitoring.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CompanyMonitoringListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1CompanyMonitoringListQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1CompanyMonitoringListIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.company.monitoring.list)[':id']['$get']>,
) {
  return ['api', '/api/v1/company/monitoring/list/:id', args] as const
}

export function getApiV1CompanyMonitoringListIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.monitoring.list)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.company.monitoring.list)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.company.monitoring.list)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyMonitoringListIdQueryKey>
  >({
    queryKey: getApiV1CompanyMonitoringListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.company.monitoring.list[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CompanyMonitoringListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.monitoring.list)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.company.monitoring.list)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.company.monitoring.list)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CompanyMonitoringListIdQueryKey>
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
      ...getApiV1CompanyMonitoringListIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1CompanyMonitoringRegisterIdMutationKey() {
  return ['api', '/api/v1/company/monitoring/register/:id', 'POST'] as const
}

export function getPostApiV1CompanyMonitoringRegisterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.company.monitoring.register)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.company.monitoring.register)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CompanyMonitoringRegisterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.company.monitoring.register)[':id']['$post']>,
    ) {
      return parseResponse(client.api.v1.company.monitoring.register[':id'].$post(args, options))
    },
  })
}

export function createPostApiV1CompanyMonitoringRegisterId<
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
                ReturnType<(typeof client.api.v1.company.monitoring.register)[':id']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.company.monitoring.register)[':id']['$post']>,
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
    const mutationDefaults = getPostApiV1CompanyMonitoringRegisterIdMutationOptions<
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

export function getPostApiV1CompanyMonitoringUnregisterIdMutationKey() {
  return ['api', '/api/v1/company/monitoring/unregister/:id', 'POST'] as const
}

export function getPostApiV1CompanyMonitoringUnregisterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.company.monitoring.unregister)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.company.monitoring.unregister)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CompanyMonitoringUnregisterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.company.monitoring.unregister)[':id']['$post']>,
    ) {
      return parseResponse(client.api.v1.company.monitoring.unregister[':id'].$post(args, options))
    },
  })
}

export function createPostApiV1CompanyMonitoringUnregisterId<
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
                ReturnType<(typeof client.api.v1.company.monitoring.unregister)[':id']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.company.monitoring.unregister)[':id']['$post']>,
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
    const mutationDefaults = getPostApiV1CompanyMonitoringUnregisterIdMutationOptions<
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

export function getApiV1CompanyNotificationListQueryKey() {
  return ['api', '/api/v1/company/notification/list'] as const
}

export function getApiV1CompanyNotificationListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company.notification.list.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.company.notification.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyNotificationListQueryKey>
  >({
    queryKey: getApiV1CompanyNotificationListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.company.notification.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CompanyNotificationList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company.notification.list.$get>>>
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
              Awaited<ReturnType<typeof client.api.v1.company.notification.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CompanyNotificationListQueryKey>
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
      ...getApiV1CompanyNotificationListQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1CompanyNotificationListIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.company.notification.list)[':id']['$get']>,
) {
  return ['api', '/api/v1/company/notification/list/:id', args] as const
}

export function getApiV1CompanyNotificationListIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.notification.list)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.company.notification.list)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.company.notification.list)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyNotificationListIdQueryKey>
  >({
    queryKey: getApiV1CompanyNotificationListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.company.notification.list[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CompanyNotificationListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.notification.list)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.company.notification.list)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.company.notification.list)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CompanyNotificationListIdQueryKey>
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
      ...getApiV1CompanyNotificationListIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1CompanyNotificationRegisterIdMutationKey() {
  return ['api', '/api/v1/company/notification/register/:id', 'POST'] as const
}

export function getPostApiV1CompanyNotificationRegisterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.company.notification.register)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.company.notification.register)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CompanyNotificationRegisterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.company.notification.register)[':id']['$post']>,
    ) {
      return parseResponse(client.api.v1.company.notification.register[':id'].$post(args, options))
    },
  })
}

export function createPostApiV1CompanyNotificationRegisterId<
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
                ReturnType<(typeof client.api.v1.company.notification.register)[':id']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.company.notification.register)[':id']['$post']>,
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
    const mutationDefaults = getPostApiV1CompanyNotificationRegisterIdMutationOptions<
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

export function getPostApiV1CompanyNotificationUnregisterIdMutationKey() {
  return ['api', '/api/v1/company/notification/unregister/:id', 'POST'] as const
}

export function getPostApiV1CompanyNotificationUnregisterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.company.notification.unregister)[':id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.company.notification.unregister)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CompanyNotificationUnregisterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.company.notification.unregister)[':id']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.company.notification.unregister[':id'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1CompanyNotificationUnregisterId<
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
                ReturnType<(typeof client.api.v1.company.notification.unregister)[':id']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.company.notification.unregister)[':id']['$post']>,
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
    const mutationDefaults = getPostApiV1CompanyNotificationUnregisterIdMutationOptions<
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

export function getApiV1CompanySearchNameCountryNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.company.search.name)[':country'][':name']['$get']>,
) {
  return ['api', '/api/v1/company/search/name/:country/:name', args] as const
}

export function getApiV1CompanySearchNameCountryNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.search.name)[':country'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.company.search.name)[':country'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.company.search.name)[':country'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanySearchNameCountryNameQueryKey>
  >({
    queryKey: getApiV1CompanySearchNameCountryNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.company.search.name[':country'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CompanySearchNameCountryName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.search.name)[':country'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.company.search.name)[':country'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.company.search.name)[':country'][':name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CompanySearchNameCountryNameQueryKey>
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
      ...getApiV1CompanySearchNameCountryNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1CompanySearchNumberCountryNumberQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.company.search.number)[':country'][':number']['$get']
  >,
) {
  return ['api', '/api/v1/company/search/number/:country/:number', args] as const
}

export function getApiV1CompanySearchNumberCountryNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.company.search.number)[':country'][':number']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.company.search.number)[':country'][':number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.company.search.number)[':country'][':number']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanySearchNumberCountryNumberQueryKey>
  >({
    queryKey: getApiV1CompanySearchNumberCountryNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.company.search.number[':country'][':number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CompanySearchNumberCountryNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.company.search.number)[':country'][':number']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.company.search.number)[':country'][':number']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.company.search.number)[':country'][':number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CompanySearchNumberCountryNumberQueryKey>
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
      ...getApiV1CompanySearchNumberCountryNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1CompanySearchCountryMutationKey() {
  return ['api', '/api/v1/company/search/:country', 'POST'] as const
}

export function getPostApiV1CompanySearchCountryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.company.search)[':country']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.company.search)[':country']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CompanySearchCountryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.company.search)[':country']['$post']>,
    ) {
      return parseResponse(client.api.v1.company.search[':country'].$post(args, options))
    },
  })
}

export function createPostApiV1CompanySearchCountry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.company.search)[':country']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.company.search)[':country']['$post']>,
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
    const mutationDefaults = getPostApiV1CompanySearchCountryMutationOptions<
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

export function getApiV1CompanyIdAnnouncementsQueryKey(
  args: InferRequestType<(typeof client.api.v1.company)[':id']['announcements']['$get']>,
) {
  return ['api', '/api/v1/company/:id/announcements', args] as const
}

export function getApiV1CompanyIdAnnouncementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company)[':id']['announcements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.company)[':id']['announcements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.company)[':id']['announcements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyIdAnnouncementsQueryKey>
  >({
    queryKey: getApiV1CompanyIdAnnouncementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.company[':id'].announcements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CompanyIdAnnouncements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company)[':id']['announcements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.company)[':id']['announcements']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.company)[':id']['announcements']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CompanyIdAnnouncementsQueryKey>
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
      ...getApiV1CompanyIdAnnouncementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1CompanyIdSuperCountryQueryKey(
  args: InferRequestType<(typeof client.api.v1.company)[':id']['super'][':country']['$get']>,
) {
  return ['api', '/api/v1/company/:id/super/:country', args] as const
}

export function getApiV1CompanyIdSuperCountryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company)[':id']['super'][':country']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.company)[':id']['super'][':country']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.company)[':id']['super'][':country']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyIdSuperCountryQueryKey>
  >({
    queryKey: getApiV1CompanyIdSuperCountryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.company[':id'].super[':country'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CompanyIdSuperCountry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company)[':id']['super'][':country']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.company)[':id']['super'][':country']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.company)[':id']['super'][':country']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CompanyIdSuperCountryQueryKey>
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
      ...getApiV1CompanyIdSuperCountryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1CompanyIdDatasetQueryKey(
  args: InferRequestType<(typeof client.api.v1.company)[':id'][':dataset']['$get']>,
) {
  return ['api', '/api/v1/company/:id/:dataset', args] as const
}

export function getApiV1CompanyIdDatasetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company)[':id'][':dataset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.company)[':id'][':dataset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.company)[':id'][':dataset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyIdDatasetQueryKey>
  >({
    queryKey: getApiV1CompanyIdDatasetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.company[':id'][':dataset'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CompanyIdDataset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company)[':id'][':dataset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.company)[':id'][':dataset']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.company)[':id'][':dataset']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CompanyIdDatasetQueryKey>
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
      ...getApiV1CompanyIdDatasetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1EinVerificationBasicCheckQueryKey(
  args: InferRequestType<(typeof client.api.v1)['ein-verification']['basic-check']['$get']>,
) {
  return ['api', '/api/v1/ein-verification/basic-check', args] as const
}

export function getApiV1EinVerificationBasicCheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['ein-verification']['basic-check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['ein-verification']['basic-check']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['ein-verification']['basic-check']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EinVerificationBasicCheckQueryKey>
  >({
    queryKey: getApiV1EinVerificationBasicCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['ein-verification']['basic-check'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EinVerificationBasicCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['ein-verification']['basic-check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['ein-verification']['basic-check']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['ein-verification']['basic-check']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EinVerificationBasicCheckQueryKey>
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
      ...getApiV1EinVerificationBasicCheckQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1EinVerificationComprehensiveCheckQueryKey(
  args: InferRequestType<(typeof client.api.v1)['ein-verification']['comprehensive-check']['$get']>,
) {
  return ['api', '/api/v1/ein-verification/comprehensive-check', args] as const
}

export function getApiV1EinVerificationComprehensiveCheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['ein-verification']['comprehensive-check']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['ein-verification']['comprehensive-check']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['ein-verification']['comprehensive-check']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EinVerificationComprehensiveCheckQueryKey>
  >({
    queryKey: getApiV1EinVerificationComprehensiveCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['ein-verification']['comprehensive-check'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EinVerificationComprehensiveCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['ein-verification']['comprehensive-check']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['ein-verification']['comprehensive-check']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['ein-verification']['comprehensive-check']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EinVerificationComprehensiveCheckQueryKey>
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
      ...getApiV1EinVerificationComprehensiveCheckQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1EinVerificationLookupQueryKey(
  args: InferRequestType<(typeof client.api.v1)['ein-verification']['lookup']['$get']>,
) {
  return ['api', '/api/v1/ein-verification/lookup', args] as const
}

export function getApiV1EinVerificationLookupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['ein-verification']['lookup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['ein-verification']['lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['ein-verification']['lookup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EinVerificationLookupQueryKey>
  >({
    queryKey: getApiV1EinVerificationLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['ein-verification'].lookup.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EinVerificationLookup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['ein-verification']['lookup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['ein-verification']['lookup']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['ein-verification']['lookup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EinVerificationLookupQueryKey>
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
      ...getApiV1EinVerificationLookupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1IbanVerificationCheckIbanMutationKey() {
  return ['api', '/api/v1/iban-verification/check-iban', 'POST'] as const
}

export function getPostApiV1IbanVerificationCheckIbanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['iban-verification']['check-iban']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['iban-verification']['check-iban']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IbanVerificationCheckIbanMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['iban-verification']['check-iban']['$post']>,
    ) {
      return parseResponse(client.api.v1['iban-verification']['check-iban'].$post(args, options))
    },
  })
}

export function createPostApiV1IbanVerificationCheckIban<
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
                ReturnType<(typeof client.api.v1)['iban-verification']['check-iban']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['iban-verification']['check-iban']['$post']>,
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
    const mutationDefaults = getPostApiV1IbanVerificationCheckIbanMutationOptions<
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

export function getPostApiV1IbanVerificationComprehensiveCheckIbanMutationKey() {
  return ['api', '/api/v1/iban-verification/comprehensive-check-iban', 'POST'] as const
}

export function getPostApiV1IbanVerificationComprehensiveCheckIbanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['iban-verification']['comprehensive-check-iban']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1)['iban-verification']['comprehensive-check-iban']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IbanVerificationComprehensiveCheckIbanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['iban-verification']['comprehensive-check-iban']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['iban-verification']['comprehensive-check-iban'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1IbanVerificationComprehensiveCheckIban<
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
                  (typeof client.api.v1)['iban-verification']['comprehensive-check-iban']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1)['iban-verification']['comprehensive-check-iban']['$post']
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
    const mutationDefaults = getPostApiV1IbanVerificationComprehensiveCheckIbanMutationOptions<
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

export function getPostApiV1NifVerificationBasicCheckCountryMutationKey() {
  return ['api', '/api/v1/nif-verification/basic-check/:country', 'POST'] as const
}

export function getPostApiV1NifVerificationBasicCheckCountryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['nif-verification']['basic-check'][':country']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1)['nif-verification']['basic-check'][':country']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NifVerificationBasicCheckCountryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['nif-verification']['basic-check'][':country']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['nif-verification']['basic-check'][':country'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NifVerificationBasicCheckCountry<
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
                  (typeof client.api.v1)['nif-verification']['basic-check'][':country']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1)['nif-verification']['basic-check'][':country']['$post']
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
    const mutationDefaults = getPostApiV1NifVerificationBasicCheckCountryMutationOptions<
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

export function getPostApiV1NifVerificationComprehensiveCheckCountryMutationKey() {
  return ['api', '/api/v1/nif-verification/comprehensive-check/:country', 'POST'] as const
}

export function getPostApiV1NifVerificationComprehensiveCheckCountryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['nif-verification']['comprehensive-check'][':country']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1)['nif-verification']['comprehensive-check'][':country']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NifVerificationComprehensiveCheckCountryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['nif-verification']['comprehensive-check'][':country']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['nif-verification']['comprehensive-check'][':country'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NifVerificationComprehensiveCheckCountry<
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
                  (typeof client.api.v1)['nif-verification']['comprehensive-check'][':country']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1)['nif-verification']['comprehensive-check'][':country']['$post']
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
    const mutationDefaults = getPostApiV1NifVerificationComprehensiveCheckCountryMutationOptions<
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

export function getApiV1PepsanctionMonitorListQueryKey() {
  return ['api', '/api/v1/pepsanction/monitor/list'] as const
}

export function getApiV1PepsanctionMonitorListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pepsanction.monitor.list.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.pepsanction.monitor.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PepsanctionMonitorListQueryKey>
  >({
    queryKey: getApiV1PepsanctionMonitorListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.pepsanction.monitor.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1PepsanctionMonitorList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pepsanction.monitor.list.$get>>>
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
              Awaited<ReturnType<typeof client.api.v1.pepsanction.monitor.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PepsanctionMonitorListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1PepsanctionMonitorListQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1PepsanctionMonitorUnregisterIdMutationKey() {
  return ['api', '/api/v1/pepsanction/monitor/unregister/:id', 'POST'] as const
}

export function getPostApiV1PepsanctionMonitorUnregisterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.pepsanction.monitor.unregister)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.pepsanction.monitor.unregister)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PepsanctionMonitorUnregisterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.pepsanction.monitor.unregister)[':id']['$post']>,
    ) {
      return parseResponse(client.api.v1.pepsanction.monitor.unregister[':id'].$post(args, options))
    },
  })
}

export function createPostApiV1PepsanctionMonitorUnregisterId<
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
                ReturnType<(typeof client.api.v1.pepsanction.monitor.unregister)[':id']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.pepsanction.monitor.unregister)[':id']['$post']>,
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
    const mutationDefaults = getPostApiV1PepsanctionMonitorUnregisterIdMutationOptions<
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

export function getPostApiV1PepsanctionMonitorUpdateIdMutationKey() {
  return ['api', '/api/v1/pepsanction/monitor/update/:id', 'POST'] as const
}

export function getPostApiV1PepsanctionMonitorUpdateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.pepsanction.monitor.update)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.pepsanction.monitor.update)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PepsanctionMonitorUpdateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.pepsanction.monitor.update)[':id']['$post']>,
    ) {
      return parseResponse(client.api.v1.pepsanction.monitor.update[':id'].$post(args, options))
    },
  })
}

export function createPostApiV1PepsanctionMonitorUpdateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.pepsanction.monitor.update)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.pepsanction.monitor.update)[':id']['$post']>,
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
    const mutationDefaults = getPostApiV1PepsanctionMonitorUpdateIdMutationOptions<
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

export function getPostApiV1PepsanctionOrderTypeSearchMutationKey() {
  return ['api', '/api/v1/pepsanction/order/:type/:search', 'POST'] as const
}

export function getPostApiV1PepsanctionOrderTypeSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.pepsanction.order)[':type'][':search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.pepsanction.order)[':type'][':search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PepsanctionOrderTypeSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.pepsanction.order)[':type'][':search']['$post']>,
    ) {
      return parseResponse(client.api.v1.pepsanction.order[':type'][':search'].$post(args, options))
    },
  })
}

export function createPostApiV1PepsanctionOrderTypeSearch<
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
                ReturnType<(typeof client.api.v1.pepsanction.order)[':type'][':search']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.pepsanction.order)[':type'][':search']['$post']>,
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
    const mutationDefaults = getPostApiV1PepsanctionOrderTypeSearchMutationOptions<
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

export function getApiV1PepsanctionRetrieveIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.pepsanction.retrieve)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/pepsanction/retrieve/:id', keyArgs] as const
}

export function getApiV1PepsanctionRetrieveIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.pepsanction.retrieve)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.pepsanction.retrieve)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.pepsanction.retrieve)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PepsanctionRetrieveIdQueryKey>
  >({
    queryKey: getApiV1PepsanctionRetrieveIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.pepsanction.retrieve[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1PepsanctionRetrieveId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.pepsanction.retrieve)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.pepsanction.retrieve)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.pepsanction.retrieve)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PepsanctionRetrieveIdQueryKey>
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
      ...getApiV1PepsanctionRetrieveIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ProductAvailabilitySkuSubjectIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.product.availability)[':sku'][':subjectId']['$get']>,
) {
  return ['api', '/api/v1/product/availability/:sku/:subjectId', args] as const
}

export function getApiV1ProductAvailabilitySkuSubjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.product.availability)[':sku'][':subjectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.product.availability)[':sku'][':subjectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.product.availability)[':sku'][':subjectId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProductAvailabilitySkuSubjectIdQueryKey>
  >({
    queryKey: getApiV1ProductAvailabilitySkuSubjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.product.availability[':sku'][':subjectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ProductAvailabilitySkuSubjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.product.availability)[':sku'][':subjectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.product.availability)[':sku'][':subjectId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.product.availability)[':sku'][':subjectId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ProductAvailabilitySkuSubjectIdQueryKey>
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
      ...getApiV1ProductAvailabilitySkuSubjectIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ProductCatalogCountryQueryKey(
  args: InferRequestType<(typeof client.api.v1.product.catalog)[':country']['$get']>,
) {
  return ['api', '/api/v1/product/catalog/:country', args] as const
}

export function getApiV1ProductCatalogCountryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.product.catalog)[':country']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.product.catalog)[':country']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.product.catalog)[':country']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProductCatalogCountryQueryKey>
  >({
    queryKey: getApiV1ProductCatalogCountryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.product.catalog[':country'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ProductCatalogCountry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.product.catalog)[':country']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.product.catalog)[':country']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.product.catalog)[':country']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ProductCatalogCountryQueryKey>
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
      ...getApiV1ProductCatalogCountryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ProductNotifierNotifierIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.product.notifier)[':notifierId']['$get']>,
) {
  return ['api', '/api/v1/product/notifier/:notifierId', args] as const
}

export function getApiV1ProductNotifierNotifierIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.product.notifier)[':notifierId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.product.notifier)[':notifierId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.product.notifier)[':notifierId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProductNotifierNotifierIdQueryKey>
  >({
    queryKey: getApiV1ProductNotifierNotifierIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.product.notifier[':notifierId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ProductNotifierNotifierId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.product.notifier)[':notifierId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.product.notifier)[':notifierId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.product.notifier)[':notifierId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ProductNotifierNotifierIdQueryKey>
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
      ...getApiV1ProductNotifierNotifierIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1ProductNotifierOrderIdTypeUriMutationKey() {
  return ['api', '/api/v1/product/notifier/:orderId/:type/:uri', 'POST'] as const
}

export function getPostApiV1ProductNotifierOrderIdTypeUriMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.product.notifier)[':orderId'][':type'][':uri']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.product.notifier)[':orderId'][':type'][':uri']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ProductNotifierOrderIdTypeUriMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.product.notifier)[':orderId'][':type'][':uri']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.product.notifier[':orderId'][':type'][':uri'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1ProductNotifierOrderIdTypeUri<
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
                  (typeof client.api.v1.product.notifier)[':orderId'][':type'][':uri']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.product.notifier)[':orderId'][':type'][':uri']['$post']
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
    const mutationDefaults = getPostApiV1ProductNotifierOrderIdTypeUriMutationOptions<
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

export function getPostApiV1ProductOrderConciergeMutationKey() {
  return ['api', '/api/v1/product/order/concierge', 'POST'] as const
}

export function getPostApiV1ProductOrderConciergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.product.order.concierge.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.product.order.concierge.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ProductOrderConciergeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.product.order.concierge.$post>) {
      return parseResponse(client.api.v1.product.order.concierge.$post(args, options))
    },
  })
}

export function createPostApiV1ProductOrderConcierge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.product.order.concierge.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.product.order.concierge.$post>,
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
    const mutationDefaults = getPostApiV1ProductOrderConciergeMutationOptions<
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

export function getPostApiV1ProductOrderUboMutationKey() {
  return ['api', '/api/v1/product/order/ubo', 'POST'] as const
}

export function getPostApiV1ProductOrderUboMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.product.order.ubo.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.product.order.ubo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ProductOrderUboMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.product.order.ubo.$post>) {
      return parseResponse(client.api.v1.product.order.ubo.$post(args, options))
    },
  })
}

export function createPostApiV1ProductOrderUbo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.product.order.ubo.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.product.order.ubo.$post>,
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
    const mutationDefaults = getPostApiV1ProductOrderUboMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ProductOrderSkuOptionSubjectIdMutationKey() {
  return ['api', '/api/v1/product/order/:sku/:option/:subjectId', 'POST'] as const
}

export function getPostApiV1ProductOrderSkuOptionSubjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.product.order)[':sku'][':option'][':subjectId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.product.order)[':sku'][':option'][':subjectId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ProductOrderSkuOptionSubjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.product.order)[':sku'][':option'][':subjectId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.product.order[':sku'][':option'][':subjectId'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1ProductOrderSkuOptionSubjectId<
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
                  (typeof client.api.v1.product.order)[':sku'][':option'][':subjectId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.product.order)[':sku'][':option'][':subjectId']['$post']
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
    const mutationDefaults = getPostApiV1ProductOrderSkuOptionSubjectIdMutationOptions<
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

export function getPostApiV1ProductOrderSkuSubjectIdMutationKey() {
  return ['api', '/api/v1/product/order/:sku/:subjectId', 'POST'] as const
}

export function getPostApiV1ProductOrderSkuSubjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.product.order)[':sku'][':subjectId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.product.order)[':sku'][':subjectId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ProductOrderSkuSubjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.product.order)[':sku'][':subjectId']['$post']>,
    ) {
      return parseResponse(client.api.v1.product.order[':sku'][':subjectId'].$post(args, options))
    },
  })
}

export function createPostApiV1ProductOrderSkuSubjectId<
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
                ReturnType<(typeof client.api.v1.product.order)[':sku'][':subjectId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.product.order)[':sku'][':subjectId']['$post']>,
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
    const mutationDefaults = getPostApiV1ProductOrderSkuSubjectIdMutationOptions<
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

export function getApiV1ProductSearchSubjectIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.product.search)[':subjectId']['$get']>,
) {
  return ['api', '/api/v1/product/search/:subjectId', args] as const
}

export function getApiV1ProductSearchSubjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.product.search)[':subjectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.product.search)[':subjectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.product.search)[':subjectId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProductSearchSubjectIdQueryKey>
  >({
    queryKey: getApiV1ProductSearchSubjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.product.search[':subjectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ProductSearchSubjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.product.search)[':subjectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.product.search)[':subjectId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.product.search)[':subjectId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ProductSearchSubjectIdQueryKey>
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
      ...getApiV1ProductSearchSubjectIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ProductStatusOrderIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.product.status)[':orderId']['$get']>,
) {
  return ['api', '/api/v1/product/status/:orderId', args] as const
}

export function getApiV1ProductStatusOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.product.status)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.product.status)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.product.status)[':orderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProductStatusOrderIdQueryKey>
  >({
    queryKey: getApiV1ProductStatusOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.product.status[':orderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ProductStatusOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.product.status)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.product.status)[':orderId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.product.status)[':orderId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ProductStatusOrderIdQueryKey>
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
      ...getApiV1ProductStatusOrderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1ProductUpdateActionOrderIdMutationKey() {
  return ['api', '/api/v1/product/update/:action/:orderId', 'POST'] as const
}

export function getPostApiV1ProductUpdateActionOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.product.update)[':action'][':orderId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.product.update)[':action'][':orderId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ProductUpdateActionOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.product.update)[':action'][':orderId']['$post']>,
    ) {
      return parseResponse(client.api.v1.product.update[':action'][':orderId'].$post(args, options))
    },
  })
}

export function createPostApiV1ProductUpdateActionOrderId<
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
                ReturnType<(typeof client.api.v1.product.update)[':action'][':orderId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.product.update)[':action'][':orderId']['$post']>,
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
    const mutationDefaults = getPostApiV1ProductUpdateActionOrderIdMutationOptions<
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

export function getApiV1ProductOrderIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.product)[':orderId']['$get']>,
) {
  return ['api', '/api/v1/product/:orderId', args] as const
}

export function getApiV1ProductOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.product)[':orderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.product)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.product)[':orderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProductOrderIdQueryKey>
  >({
    queryKey: getApiV1ProductOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.product[':orderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ProductOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.product)[':orderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.product)[':orderId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.product)[':orderId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ProductOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ProductOrderIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1SystemCountriesQueryKey() {
  return ['api', '/api/v1/system/countries'] as const
}

export function getApiV1SystemCountriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.countries.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemCountriesQueryKey>
  >({
    queryKey: getApiV1SystemCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.system.countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SystemCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.countries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SystemCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SystemCountriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1SystemHealthQueryKey() {
  return ['api', '/api/v1/system/health'] as const
}

export function getApiV1SystemHealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemHealthQueryKey>
  >({
    queryKey: getApiV1SystemHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.system.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SystemHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.health.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SystemHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SystemHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1SystemPricelistQueryKey() {
  return ['api', '/api/v1/system/pricelist'] as const
}

export function getApiV1SystemPricelistQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.pricelist.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.pricelist.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemPricelistQueryKey>
  >({
    queryKey: getApiV1SystemPricelistQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.system.pricelist.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SystemPricelist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.pricelist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.pricelist.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SystemPricelistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SystemPricelistQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1TinVerificationBasicCheckQueryKey(
  args: InferRequestType<(typeof client.api.v1)['tin-verification']['basic-check']['$get']>,
) {
  return ['api', '/api/v1/tin-verification/basic-check', args] as const
}

export function getApiV1TinVerificationBasicCheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['tin-verification']['basic-check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['tin-verification']['basic-check']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['tin-verification']['basic-check']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TinVerificationBasicCheckQueryKey>
  >({
    queryKey: getApiV1TinVerificationBasicCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['tin-verification']['basic-check'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1TinVerificationBasicCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['tin-verification']['basic-check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['tin-verification']['basic-check']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['tin-verification']['basic-check']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TinVerificationBasicCheckQueryKey>
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
      ...getApiV1TinVerificationBasicCheckQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1TinVerificationComprehensiveCheckQueryKey(
  args: InferRequestType<(typeof client.api.v1)['tin-verification']['comprehensive-check']['$get']>,
) {
  return ['api', '/api/v1/tin-verification/comprehensive-check', args] as const
}

export function getApiV1TinVerificationComprehensiveCheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['tin-verification']['comprehensive-check']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['tin-verification']['comprehensive-check']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['tin-verification']['comprehensive-check']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TinVerificationComprehensiveCheckQueryKey>
  >({
    queryKey: getApiV1TinVerificationComprehensiveCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['tin-verification']['comprehensive-check'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1TinVerificationComprehensiveCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['tin-verification']['comprehensive-check']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['tin-verification']['comprehensive-check']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['tin-verification']['comprehensive-check']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TinVerificationComprehensiveCheckQueryKey>
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
      ...getApiV1TinVerificationComprehensiveCheckQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1TinVerificationNameLookupQueryKey(
  args: InferRequestType<(typeof client.api.v1)['tin-verification']['name-lookup']['$get']>,
) {
  return ['api', '/api/v1/tin-verification/name-lookup', args] as const
}

export function getApiV1TinVerificationNameLookupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['tin-verification']['name-lookup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['tin-verification']['name-lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['tin-verification']['name-lookup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TinVerificationNameLookupQueryKey>
  >({
    queryKey: getApiV1TinVerificationNameLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['tin-verification']['name-lookup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1TinVerificationNameLookup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['tin-verification']['name-lookup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['tin-verification']['name-lookup']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['tin-verification']['name-lookup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TinVerificationNameLookupQueryKey>
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
      ...getApiV1TinVerificationNameLookupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1VatVerificationBasicCheckCountryMutationKey() {
  return ['api', '/api/v1/vat-verification/basic-check/:country', 'POST'] as const
}

export function getPostApiV1VatVerificationBasicCheckCountryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['vat-verification']['basic-check'][':country']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1)['vat-verification']['basic-check'][':country']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VatVerificationBasicCheckCountryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['vat-verification']['basic-check'][':country']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['vat-verification']['basic-check'][':country'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1VatVerificationBasicCheckCountry<
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
                  (typeof client.api.v1)['vat-verification']['basic-check'][':country']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1)['vat-verification']['basic-check'][':country']['$post']
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
    const mutationDefaults = getPostApiV1VatVerificationBasicCheckCountryMutationOptions<
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

export function getPostApiV1VatVerificationComprehensiveCheckCountryMutationKey() {
  return ['api', '/api/v1/vat-verification/comprehensive-check/:country', 'POST'] as const
}

export function getPostApiV1VatVerificationComprehensiveCheckCountryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['vat-verification']['comprehensive-check'][':country']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1)['vat-verification']['comprehensive-check'][':country']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VatVerificationComprehensiveCheckCountryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['vat-verification']['comprehensive-check'][':country']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['vat-verification']['comprehensive-check'][':country'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1VatVerificationComprehensiveCheckCountry<
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
                  (typeof client.api.v1)['vat-verification']['comprehensive-check'][':country']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1)['vat-verification']['comprehensive-check'][':country']['$post']
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
    const mutationDefaults = getPostApiV1VatVerificationComprehensiveCheckCountryMutationOptions<
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

export function getPostApiV1VatVerificationLeveltwoCheckCountryMutationKey() {
  return ['api', '/api/v1/vat-verification/leveltwo-check/:country', 'POST'] as const
}

export function getPostApiV1VatVerificationLeveltwoCheckCountryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['vat-verification']['leveltwo-check'][':country']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1)['vat-verification']['leveltwo-check'][':country']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VatVerificationLeveltwoCheckCountryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['vat-verification']['leveltwo-check'][':country']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['vat-verification']['leveltwo-check'][':country'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1VatVerificationLeveltwoCheckCountry<
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
                  (typeof client.api.v1)['vat-verification']['leveltwo-check'][':country']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1)['vat-verification']['leveltwo-check'][':country']['$post']
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
    const mutationDefaults = getPostApiV1VatVerificationLeveltwoCheckCountryMutationOptions<
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

export function getPostApiV1VatVerificationLookupCountryMutationKey() {
  return ['api', '/api/v1/vat-verification/lookup/:country', 'POST'] as const
}

export function getPostApiV1VatVerificationLookupCountryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['vat-verification']['lookup'][':country']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['vat-verification']['lookup'][':country']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VatVerificationLookupCountryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['vat-verification']['lookup'][':country']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['vat-verification'].lookup[':country'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1VatVerificationLookupCountry<
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
                  (typeof client.api.v1)['vat-verification']['lookup'][':country']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['vat-verification']['lookup'][':country']['$post']>,
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
    const mutationDefaults = getPostApiV1VatVerificationLookupCountryMutationOptions<
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
