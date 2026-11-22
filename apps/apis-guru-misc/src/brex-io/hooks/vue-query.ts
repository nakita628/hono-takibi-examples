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

export function getApiV1CompanyAnnouncementIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.announcement)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/company/announcement/:id', toValue(args)] as const
}

export function getApiV1CompanyAnnouncementIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.announcement)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanyAnnouncementIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company.announcement[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyAnnouncementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.announcement)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.announcement)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company.announcement)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company.announcement)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyAnnouncementIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.company.announcement)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyAnnouncementIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanyAnnouncementIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company.announcement[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1CompanyDeepsearchIsin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1CompanyDeepsearchIsinMutationOptions<
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

export function getApiV1CompanyDeepsearchLeiNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.deepsearch.lei)[':number']['$get']>
  >,
) {
  return ['api', '/api/v1/company/deepsearch/lei/:number', toValue(args)] as const
}

export function getApiV1CompanyDeepsearchLeiNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.deepsearch.lei)[':number']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanyDeepsearchLeiNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company.deepsearch.lei[':number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyDeepsearchLeiNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.deepsearch.lei)[':number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.deepsearch.lei)[':number']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.company.deepsearch.lei)[':number']['$get']>
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
                  ReturnType<(typeof client.api.v1.company.deepsearch.lei)[':number']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyDeepsearchLeiNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.company.deepsearch.lei)[':number']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyDeepsearchLeiNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanyDeepsearchLeiNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company.deepsearch.lei[':number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CompanyDeepsearchNameCountryNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.deepsearch.name)[':country'][':name']['$get']>
  >,
) {
  return ['api', '/api/v1/company/deepsearch/name/:country/:name', toValue(args)] as const
}

export function getApiV1CompanyDeepsearchNameCountryNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.deepsearch.name)[':country'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanyDeepsearchNameCountryNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company.deepsearch.name[':country'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyDeepsearchNameCountryName<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.deepsearch.name)[':country'][':name']['$get']>
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
                    (typeof client.api.v1.company.deepsearch.name)[':country'][':name']['$get']
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
                    (typeof client.api.v1.company.deepsearch.name)[':country'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyDeepsearchNameCountryNameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.api.v1.company.deepsearch.name)[':country'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyDeepsearchNameCountryNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanyDeepsearchNameCountryNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company.deepsearch.name[':country'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CompanyDeepsearchNumberCountryNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.company.deepsearch.number)[':country'][':number']['$get']
    >
  >,
) {
  return ['api', '/api/v1/company/deepsearch/number/:country/:number', toValue(args)] as const
}

export function getApiV1CompanyDeepsearchNumberCountryNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.company.deepsearch.number)[':country'][':number']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanyDeepsearchNumberCountryNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company.deepsearch.number[':country'][':number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyDeepsearchNumberCountryNumber<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.company.deepsearch.number)[':country'][':number']['$get']
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
                    (typeof client.api.v1.company.deepsearch.number)[':country'][':number']['$get']
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
                    (typeof client.api.v1.company.deepsearch.number)[':country'][':number']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyDeepsearchNumberCountryNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.api.v1.company.deepsearch.number)[':country'][':number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyDeepsearchNumberCountryNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanyDeepsearchNumberCountryNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company.deepsearch.number[':country'][':number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CompanyMonitoringChangeTypesQueryKey() {
  return ['api', '/api/v1/company/monitoring/changeTypes'] as const
}

export function getApiV1CompanyMonitoringChangeTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1CompanyMonitoringChangeTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company.monitoring.changeTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyMonitoringChangeTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.company.monitoring.changeTypes.$get>>
      >
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
                Awaited<ReturnType<typeof client.api.v1.company.monitoring.changeTypes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.company.monitoring.changeTypes.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyMonitoringChangeTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<typeof client.api.v1.company.monitoring.changeTypes.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyMonitoringChangeTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1CompanyMonitoringChangeTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company.monitoring.changeTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CompanyMonitoringListQueryKey() {
  return ['api', '/api/v1/company/monitoring/list'] as const
}

export function getApiV1CompanyMonitoringListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1CompanyMonitoringListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company.monitoring.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyMonitoringList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company.monitoring.list.$get>>>
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
                Awaited<ReturnType<typeof client.api.v1.company.monitoring.list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.company.monitoring.list.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyMonitoringListQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company.monitoring.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyMonitoringListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1CompanyMonitoringListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company.monitoring.list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CompanyMonitoringListIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.monitoring.list)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/company/monitoring/list/:id', toValue(args)] as const
}

export function getApiV1CompanyMonitoringListIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.monitoring.list)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanyMonitoringListIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company.monitoring.list[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyMonitoringListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.monitoring.list)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.monitoring.list)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company.monitoring.list)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company.monitoring.list)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyMonitoringListIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.company.monitoring.list)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyMonitoringListIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanyMonitoringListIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company.monitoring.list[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1CompanyMonitoringRegisterId<
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
                  ReturnType<(typeof client.api.v1.company.monitoring.register)[':id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.company.monitoring.register)[':id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1CompanyMonitoringRegisterIdMutationOptions<
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

export function usePostApiV1CompanyMonitoringUnregisterId<
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
                  ReturnType<(typeof client.api.v1.company.monitoring.unregister)[':id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.company.monitoring.unregister)[':id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1CompanyMonitoringUnregisterIdMutationOptions<
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

export function getApiV1CompanyNotificationListQueryKey() {
  return ['api', '/api/v1/company/notification/list'] as const
}

export function getApiV1CompanyNotificationListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1CompanyNotificationListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company.notification.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyNotificationList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company.notification.list.$get>>>
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
                Awaited<ReturnType<typeof client.api.v1.company.notification.list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.company.notification.list.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyNotificationListQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<typeof client.api.v1.company.notification.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyNotificationListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1CompanyNotificationListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company.notification.list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CompanyNotificationListIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.notification.list)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/company/notification/list/:id', toValue(args)] as const
}

export function getApiV1CompanyNotificationListIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.notification.list)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanyNotificationListIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company.notification.list[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyNotificationListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.notification.list)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.notification.list)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company.notification.list)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company.notification.list)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyNotificationListIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.company.notification.list)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyNotificationListIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanyNotificationListIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company.notification.list[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1CompanyNotificationRegisterId<
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
                  ReturnType<(typeof client.api.v1.company.notification.register)[':id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.company.notification.register)[':id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1CompanyNotificationRegisterIdMutationOptions<
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

export function usePostApiV1CompanyNotificationUnregisterId<
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
                  ReturnType<(typeof client.api.v1.company.notification.unregister)[':id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.company.notification.unregister)[':id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1CompanyNotificationUnregisterIdMutationOptions<
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

export function getApiV1CompanySearchNameCountryNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.search.name)[':country'][':name']['$get']>
  >,
) {
  return ['api', '/api/v1/company/search/name/:country/:name', toValue(args)] as const
}

export function getApiV1CompanySearchNameCountryNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.search.name)[':country'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanySearchNameCountryNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company.search.name[':country'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanySearchNameCountryName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.search.name)[':country'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.search.name)[':country'][':name']['$get']>
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
                    (typeof client.api.v1.company.search.name)[':country'][':name']['$get']
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
                    (typeof client.api.v1.company.search.name)[':country'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CompanySearchNameCountryNameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.api.v1.company.search.name)[':country'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanySearchNameCountryNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanySearchNameCountryNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company.search.name[':country'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CompanySearchNumberCountryNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.search.number)[':country'][':number']['$get']>
  >,
) {
  return ['api', '/api/v1/company/search/number/:country/:number', toValue(args)] as const
}

export function getApiV1CompanySearchNumberCountryNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.search.number)[':country'][':number']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanySearchNumberCountryNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company.search.number[':country'][':number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanySearchNumberCountryNumber<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.search.number)[':country'][':number']['$get']>
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
                    (typeof client.api.v1.company.search.number)[':country'][':number']['$get']
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
                    (typeof client.api.v1.company.search.number)[':country'][':number']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CompanySearchNumberCountryNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.api.v1.company.search.number)[':country'][':number']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanySearchNumberCountryNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanySearchNumberCountryNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company.search.number[':country'][':number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1CompanySearchCountry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1CompanySearchCountryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1CompanyIdAnnouncementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company)[':id']['announcements']['$get']>
  >,
) {
  return ['api', '/api/v1/company/:id/announcements', toValue(args)] as const
}

export function getApiV1CompanyIdAnnouncementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company)[':id']['announcements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanyIdAnnouncementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company[':id'].announcements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyIdAnnouncements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company)[':id']['announcements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company)[':id']['announcements']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company)[':id']['announcements']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company)[':id']['announcements']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyIdAnnouncementsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.company)[':id']['announcements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyIdAnnouncementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanyIdAnnouncementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company[':id'].announcements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CompanyIdSuperCountryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company)[':id']['super'][':country']['$get']>
  >,
) {
  return ['api', '/api/v1/company/:id/super/:country', toValue(args)] as const
}

export function getApiV1CompanyIdSuperCountryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company)[':id']['super'][':country']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanyIdSuperCountryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company[':id'].super[':country'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyIdSuperCountry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company)[':id']['super'][':country']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company)[':id']['super'][':country']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.company)[':id']['super'][':country']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyIdSuperCountryQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.company)[':id']['super'][':country']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyIdSuperCountryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanyIdSuperCountryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company[':id'].super[':country'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CompanyIdDatasetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company)[':id'][':dataset']['$get']>
  >,
) {
  return ['api', '/api/v1/company/:id/:dataset', toValue(args)] as const
}

export function getApiV1CompanyIdDatasetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company)[':id'][':dataset']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanyIdDatasetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company[':id'][':dataset'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyIdDataset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company)[':id'][':dataset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company)[':id'][':dataset']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company)[':id'][':dataset']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company)[':id'][':dataset']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyIdDatasetQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.company)[':id'][':dataset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyIdDatasetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanyIdDatasetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company[':id'][':dataset'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EinVerificationBasicCheckQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['ein-verification']['basic-check']['$get']>
  >,
) {
  return ['api', '/api/v1/ein-verification/basic-check', toValue(args)] as const
}

export function getApiV1EinVerificationBasicCheckQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['ein-verification']['basic-check']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EinVerificationBasicCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['ein-verification']['basic-check'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EinVerificationBasicCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['ein-verification']['basic-check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['ein-verification']['basic-check']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['ein-verification']['basic-check']['$get']>
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
                  ReturnType<(typeof client.api.v1)['ein-verification']['basic-check']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EinVerificationBasicCheckQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1)['ein-verification']['basic-check']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EinVerificationBasicCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EinVerificationBasicCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['ein-verification']['basic-check'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EinVerificationComprehensiveCheckQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['ein-verification']['comprehensive-check']['$get']>
  >,
) {
  return ['api', '/api/v1/ein-verification/comprehensive-check', toValue(args)] as const
}

export function getApiV1EinVerificationComprehensiveCheckQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['ein-verification']['comprehensive-check']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EinVerificationComprehensiveCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['ein-verification']['comprehensive-check'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EinVerificationComprehensiveCheck<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['ein-verification']['comprehensive-check']['$get']>
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
                    (typeof client.api.v1)['ein-verification']['comprehensive-check']['$get']
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
                    (typeof client.api.v1)['ein-verification']['comprehensive-check']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EinVerificationComprehensiveCheckQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.api.v1)['ein-verification']['comprehensive-check']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EinVerificationComprehensiveCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EinVerificationComprehensiveCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['ein-verification']['comprehensive-check'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EinVerificationLookupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['ein-verification']['lookup']['$get']>
  >,
) {
  return ['api', '/api/v1/ein-verification/lookup', toValue(args)] as const
}

export function getApiV1EinVerificationLookupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['ein-verification']['lookup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EinVerificationLookupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['ein-verification'].lookup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EinVerificationLookup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['ein-verification']['lookup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['ein-verification']['lookup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['ein-verification']['lookup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['ein-verification']['lookup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1EinVerificationLookupQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1)['ein-verification']['lookup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EinVerificationLookupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EinVerificationLookupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['ein-verification'].lookup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1IbanVerificationCheckIban<
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
                  ReturnType<(typeof client.api.v1)['iban-verification']['check-iban']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['iban-verification']['check-iban']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1IbanVerificationCheckIbanMutationOptions<
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

export function usePostApiV1IbanVerificationComprehensiveCheckIban<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1IbanVerificationComprehensiveCheckIbanMutationOptions<
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

export function usePostApiV1NifVerificationBasicCheckCountry<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1NifVerificationBasicCheckCountryMutationOptions<
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

export function usePostApiV1NifVerificationComprehensiveCheckCountry<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1NifVerificationComprehensiveCheckCountryMutationOptions<
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

export function getApiV1PepsanctionMonitorListQueryKey() {
  return ['api', '/api/v1/pepsanction/monitor/list'] as const
}

export function getApiV1PepsanctionMonitorListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1PepsanctionMonitorListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.pepsanction.monitor.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PepsanctionMonitorList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pepsanction.monitor.list.$get>>>
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
                Awaited<ReturnType<typeof client.api.v1.pepsanction.monitor.list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.pepsanction.monitor.list.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1PepsanctionMonitorListQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<typeof client.api.v1.pepsanction.monitor.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PepsanctionMonitorListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1PepsanctionMonitorListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.pepsanction.monitor.list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1PepsanctionMonitorUnregisterId<
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
                  ReturnType<(typeof client.api.v1.pepsanction.monitor.unregister)[':id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.pepsanction.monitor.unregister)[':id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1PepsanctionMonitorUnregisterIdMutationOptions<
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

export function usePostApiV1PepsanctionMonitorUpdateId<
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
                  ReturnType<(typeof client.api.v1.pepsanction.monitor.update)[':id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.pepsanction.monitor.update)[':id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1PepsanctionMonitorUpdateIdMutationOptions<
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

export function usePostApiV1PepsanctionOrderTypeSearch<
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
                  ReturnType<(typeof client.api.v1.pepsanction.order)[':type'][':search']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.pepsanction.order)[':type'][':search']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1PepsanctionOrderTypeSearchMutationOptions<
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

export function getApiV1PepsanctionRetrieveIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.pepsanction.retrieve)[':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/pepsanction/retrieve/:id', keyArgs] as const
}

export function getApiV1PepsanctionRetrieveIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.pepsanction.retrieve)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PepsanctionRetrieveIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.pepsanction.retrieve[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PepsanctionRetrieveId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.pepsanction.retrieve)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.pepsanction.retrieve)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.pepsanction.retrieve)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.pepsanction.retrieve)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PepsanctionRetrieveIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.pepsanction.retrieve)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PepsanctionRetrieveIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PepsanctionRetrieveIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.pepsanction.retrieve[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ProductAvailabilitySkuSubjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.product.availability)[':sku'][':subjectId']['$get']>
  >,
) {
  return ['api', '/api/v1/product/availability/:sku/:subjectId', toValue(args)] as const
}

export function getApiV1ProductAvailabilitySkuSubjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.product.availability)[':sku'][':subjectId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProductAvailabilitySkuSubjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.product.availability[':sku'][':subjectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProductAvailabilitySkuSubjectId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.product.availability)[':sku'][':subjectId']['$get']>
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
                    (typeof client.api.v1.product.availability)[':sku'][':subjectId']['$get']
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
                    (typeof client.api.v1.product.availability)[':sku'][':subjectId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ProductAvailabilitySkuSubjectIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.api.v1.product.availability)[':sku'][':subjectId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProductAvailabilitySkuSubjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProductAvailabilitySkuSubjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.product.availability[':sku'][':subjectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ProductCatalogCountryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.product.catalog)[':country']['$get']>
  >,
) {
  return ['api', '/api/v1/product/catalog/:country', toValue(args)] as const
}

export function getApiV1ProductCatalogCountryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.product.catalog)[':country']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProductCatalogCountryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.product.catalog[':country'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProductCatalogCountry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.product.catalog)[':country']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.product.catalog)[':country']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.product.catalog)[':country']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.product.catalog)[':country']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ProductCatalogCountryQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.product.catalog)[':country']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProductCatalogCountryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProductCatalogCountryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.product.catalog[':country'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ProductNotifierNotifierIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.product.notifier)[':notifierId']['$get']>
  >,
) {
  return ['api', '/api/v1/product/notifier/:notifierId', toValue(args)] as const
}

export function getApiV1ProductNotifierNotifierIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.product.notifier)[':notifierId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProductNotifierNotifierIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.product.notifier[':notifierId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProductNotifierNotifierId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.product.notifier)[':notifierId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.product.notifier)[':notifierId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.product.notifier)[':notifierId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.product.notifier)[':notifierId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ProductNotifierNotifierIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.product.notifier)[':notifierId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProductNotifierNotifierIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProductNotifierNotifierIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.product.notifier[':notifierId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1ProductNotifierOrderIdTypeUri<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ProductNotifierOrderIdTypeUriMutationOptions<
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

export function usePostApiV1ProductOrderConcierge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ProductOrderConciergeMutationOptions<
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

export function usePostApiV1ProductOrderUbo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.product.order.ubo.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.product.order.ubo.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ProductOrderUboMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1ProductOrderSkuOptionSubjectId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ProductOrderSkuOptionSubjectIdMutationOptions<
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

export function usePostApiV1ProductOrderSkuSubjectId<
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
                  ReturnType<(typeof client.api.v1.product.order)[':sku'][':subjectId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.product.order)[':sku'][':subjectId']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ProductOrderSkuSubjectIdMutationOptions<
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

export function getApiV1ProductSearchSubjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.product.search)[':subjectId']['$get']>
  >,
) {
  return ['api', '/api/v1/product/search/:subjectId', toValue(args)] as const
}

export function getApiV1ProductSearchSubjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.product.search)[':subjectId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProductSearchSubjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.product.search[':subjectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProductSearchSubjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.product.search)[':subjectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.product.search)[':subjectId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.product.search)[':subjectId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.product.search)[':subjectId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ProductSearchSubjectIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.product.search)[':subjectId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProductSearchSubjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProductSearchSubjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.product.search[':subjectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ProductStatusOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.product.status)[':orderId']['$get']>
  >,
) {
  return ['api', '/api/v1/product/status/:orderId', toValue(args)] as const
}

export function getApiV1ProductStatusOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.product.status)[':orderId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProductStatusOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.product.status[':orderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProductStatusOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.product.status)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.product.status)[':orderId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.product.status)[':orderId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.product.status)[':orderId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ProductStatusOrderIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.product.status)[':orderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProductStatusOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProductStatusOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.product.status[':orderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1ProductUpdateActionOrderId<
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
                  ReturnType<(typeof client.api.v1.product.update)[':action'][':orderId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.product.update)[':action'][':orderId']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ProductUpdateActionOrderIdMutationOptions<
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

export function getApiV1ProductOrderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.product)[':orderId']['$get']>>,
) {
  return ['api', '/api/v1/product/:orderId', toValue(args)] as const
}

export function getApiV1ProductOrderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.product)[':orderId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProductOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.product[':orderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProductOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.product)[':orderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.product)[':orderId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.product)[':orderId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.product)[':orderId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ProductOrderIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.product)[':orderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProductOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProductOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.product[':orderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SystemCountriesQueryKey() {
  return ['api', '/api/v1/system/countries'] as const
}

export function getApiV1SystemCountriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SystemCountriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system.countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.countries.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.countries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.countries.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SystemCountriesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SystemCountriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system.countries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SystemHealthQueryKey() {
  return ['api', '/api/v1/system/health'] as const
}

export function getApiV1SystemHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SystemHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.health.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SystemHealthQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SystemHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SystemPricelistQueryKey() {
  return ['api', '/api/v1/system/pricelist'] as const
}

export function getApiV1SystemPricelistQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SystemPricelistQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system.pricelist.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemPricelist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.pricelist.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.pricelist.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.pricelist.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SystemPricelistQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.pricelist.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemPricelistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SystemPricelistQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system.pricelist.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TinVerificationBasicCheckQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['tin-verification']['basic-check']['$get']>
  >,
) {
  return ['api', '/api/v1/tin-verification/basic-check', toValue(args)] as const
}

export function getApiV1TinVerificationBasicCheckQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['tin-verification']['basic-check']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TinVerificationBasicCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['tin-verification']['basic-check'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TinVerificationBasicCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['tin-verification']['basic-check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['tin-verification']['basic-check']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['tin-verification']['basic-check']['$get']>
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
                  ReturnType<(typeof client.api.v1)['tin-verification']['basic-check']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1TinVerificationBasicCheckQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1)['tin-verification']['basic-check']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TinVerificationBasicCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TinVerificationBasicCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['tin-verification']['basic-check'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TinVerificationComprehensiveCheckQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['tin-verification']['comprehensive-check']['$get']>
  >,
) {
  return ['api', '/api/v1/tin-verification/comprehensive-check', toValue(args)] as const
}

export function getApiV1TinVerificationComprehensiveCheckQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['tin-verification']['comprehensive-check']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TinVerificationComprehensiveCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['tin-verification']['comprehensive-check'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TinVerificationComprehensiveCheck<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['tin-verification']['comprehensive-check']['$get']>
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
                    (typeof client.api.v1)['tin-verification']['comprehensive-check']['$get']
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
                    (typeof client.api.v1)['tin-verification']['comprehensive-check']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1TinVerificationComprehensiveCheckQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.api.v1)['tin-verification']['comprehensive-check']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TinVerificationComprehensiveCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TinVerificationComprehensiveCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['tin-verification']['comprehensive-check'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TinVerificationNameLookupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['tin-verification']['name-lookup']['$get']>
  >,
) {
  return ['api', '/api/v1/tin-verification/name-lookup', toValue(args)] as const
}

export function getApiV1TinVerificationNameLookupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['tin-verification']['name-lookup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TinVerificationNameLookupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['tin-verification']['name-lookup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TinVerificationNameLookup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['tin-verification']['name-lookup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['tin-verification']['name-lookup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['tin-verification']['name-lookup']['$get']>
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
                  ReturnType<(typeof client.api.v1)['tin-verification']['name-lookup']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1TinVerificationNameLookupQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1)['tin-verification']['name-lookup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TinVerificationNameLookupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TinVerificationNameLookupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['tin-verification']['name-lookup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1VatVerificationBasicCheckCountry<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VatVerificationBasicCheckCountryMutationOptions<
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

export function usePostApiV1VatVerificationComprehensiveCheckCountry<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VatVerificationComprehensiveCheckCountryMutationOptions<
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

export function usePostApiV1VatVerificationLeveltwoCheckCountry<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VatVerificationLeveltwoCheckCountryMutationOptions<
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

export function usePostApiV1VatVerificationLookupCountry<
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
                    (typeof client.api.v1)['vat-verification']['lookup'][':country']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['vat-verification']['lookup'][':country']['$post']
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
  const mutationDefaults = getPostApiV1VatVerificationLookupCountryMutationOptions<
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
