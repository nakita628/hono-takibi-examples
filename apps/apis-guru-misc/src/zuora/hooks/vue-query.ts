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

export function getChargeMetricsKey() {
  return ['charge-metrics'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getObjectsKey() {
  return ['objects'] as const
}

export function getQueryKey() {
  return ['query'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getWorkflowsKey() {
  return ['workflows'] as const
}

export function getChargeMetricsDataChargeMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['charge-metrics', '/charge-metrics/data/charge-metrics', keyArgs] as const
}

export function getChargeMetricsDataChargeMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChargeMetricsDataChargeMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['charge-metrics'].data['charge-metrics'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChargeMetricsDataChargeMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>
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
                  ReturnType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChargeMetricsDataChargeMetricsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChargeMetricsDataChargeMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChargeMetricsDataChargeMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['charge-metrics'].data['charge-metrics'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChargeMetricsDataChargeMetricsDiscountAllocationDetailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['charge-metrics']['data']['charge-metrics-discount-allocation-detail']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'charge-metrics',
    '/charge-metrics/data/charge-metrics-discount-allocation-detail',
    keyArgs,
  ] as const
}

export function getChargeMetricsDataChargeMetricsDiscountAllocationDetailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['charge-metrics']['data']['charge-metrics-discount-allocation-detail']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getChargeMetricsDataChargeMetricsDiscountAllocationDetailQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['charge-metrics'].data['charge-metrics-discount-allocation-detail'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useChargeMetricsDataChargeMetricsDiscountAllocationDetail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['charge-metrics']['data']['charge-metrics-discount-allocation-detail']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['charge-metrics']['data']['charge-metrics-discount-allocation-detail']['$get']
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
                    (typeof client)['charge-metrics']['data']['charge-metrics-discount-allocation-detail']['$get']
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
                    (typeof client)['charge-metrics']['data']['charge-metrics-discount-allocation-detail']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChargeMetricsDataChargeMetricsDiscountAllocationDetailQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client)['charge-metrics']['data']['charge-metrics-discount-allocation-detail']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChargeMetricsDataChargeMetricsDiscountAllocationDetailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getChargeMetricsDataChargeMetricsDiscountAllocationDetailQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['charge-metrics'].data['charge-metrics-discount-allocation-detail'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getEventsEventTriggersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)['event-triggers']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['events', '/events/event-triggers', keyArgs] as const
}

export function getEventsEventTriggersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)['event-triggers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsEventTriggersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events['event-triggers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventTriggers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-triggers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)['event-triggers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)['event-triggers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)['event-triggers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsEventTriggersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-triggers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventTriggersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsEventTriggersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events['event-triggers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEventsEventTriggersMutationKey() {
  return ['events', '/events/event-triggers', 'POST'] as const
}

export function getPostEventsEventTriggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-triggers']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.events)['event-triggers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsEventTriggersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.events)['event-triggers']['$post']>) {
      return parseResponse(client.events['event-triggers'].$post(args, options))
    },
  })
}

export function usePostEventsEventTriggers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)['event-triggers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)['event-triggers']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEventsEventTriggersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEventsEventTriggersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)['event-triggers'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['events', '/events/event-triggers/:id', keyArgs] as const
}

export function getEventsEventTriggersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)['event-triggers'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsEventTriggersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events['event-triggers'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventTriggersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)['event-triggers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)['event-triggers'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)['event-triggers'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)['event-triggers'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsEventTriggersIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.events)['event-triggers'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventTriggersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsEventTriggersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events['event-triggers'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEventsEventTriggersIdMutationKey() {
  return ['events', '/events/event-triggers/:id', 'PUT'] as const
}

export function getPutEventsEventTriggersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)['event-triggers'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events)['event-triggers'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEventsEventTriggersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events)['event-triggers'][':id']['$put']>,
    ) {
      return parseResponse(client.events['event-triggers'][':id'].$put(args, options))
    },
  })
}

export function usePutEventsEventTriggersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)['event-triggers'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)['event-triggers'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEventsEventTriggersIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteEventsEventTriggersIdMutationKey() {
  return ['events', '/events/event-triggers/:id', 'DELETE'] as const
}

export function getDeleteEventsEventTriggersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['event-triggers'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.events)['event-triggers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEventsEventTriggersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events)['event-triggers'][':id']['$delete']>,
    ) {
      return parseResponse(client.events['event-triggers'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteEventsEventTriggersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.events)['event-triggers'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.events)['event-triggers'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEventsEventTriggersIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNotificationsEmailTemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)['email-templates']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notifications', '/notifications/email-templates', keyArgs] as const
}

export function getNotificationsEmailTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)['email-templates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsEmailTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications['email-templates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsEmailTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)['email-templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)['email-templates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)['email-templates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)['email-templates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsEmailTemplatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.notifications)['email-templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsEmailTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsEmailTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications['email-templates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNotificationsEmailTemplatesMutationKey() {
  return ['notifications', '/notifications/email-templates', 'POST'] as const
}

export function getPostNotificationsEmailTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)['email-templates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications)['email-templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsEmailTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications)['email-templates']['$post']>,
    ) {
      return parseResponse(client.notifications['email-templates'].$post(args, options))
    },
  })
}

export function usePostNotificationsEmailTemplates<
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
                Awaited<ReturnType<(typeof client.notifications)['email-templates']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications)['email-templates']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotificationsEmailTemplatesMutationOptions<
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

export function getNotificationsEmailTemplatesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)['email-templates'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notifications', '/notifications/email-templates/:id', keyArgs] as const
}

export function getNotificationsEmailTemplatesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)['email-templates'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsEmailTemplatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications['email-templates'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsEmailTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)['email-templates'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)['email-templates'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)['email-templates'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)['email-templates'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsEmailTemplatesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.notifications)['email-templates'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsEmailTemplatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsEmailTemplatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications['email-templates'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNotificationsEmailTemplatesIdMutationKey() {
  return ['notifications', '/notifications/email-templates/:id', 'PUT'] as const
}

export function getPutNotificationsEmailTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)['email-templates'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications)['email-templates'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsEmailTemplatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications)['email-templates'][':id']['$put']>,
    ) {
      return parseResponse(client.notifications['email-templates'][':id'].$put(args, options))
    },
  })
}

export function usePutNotificationsEmailTemplatesId<
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
                Awaited<ReturnType<(typeof client.notifications)['email-templates'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications)['email-templates'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNotificationsEmailTemplatesIdMutationOptions<
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

export function getDeleteNotificationsEmailTemplatesIdMutationKey() {
  return ['notifications', '/notifications/email-templates/:id', 'DELETE'] as const
}

export function getDeleteNotificationsEmailTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)['email-templates'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.notifications)['email-templates'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationsEmailTemplatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications)['email-templates'][':id']['$delete']>,
    ) {
      return parseResponse(client.notifications['email-templates'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteNotificationsEmailTemplatesId<
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
                    ReturnType<(typeof client.notifications)['email-templates'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.notifications)['email-templates'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNotificationsEmailTemplatesIdMutationOptions<
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

export function getDeleteNotificationsHistoryMutationKey() {
  return ['notifications', '/notifications/history', 'DELETE'] as const
}

export function getDeleteNotificationsHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.history.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.notifications.history.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationsHistoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.history.$delete>) {
      return parseResponse(client.notifications.history.$delete(args, options))
    },
  })
}

export function useDeleteNotificationsHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.history.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.notifications.history.$delete>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNotificationsHistoryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNotificationsHistoryTasksIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications.history.tasks)[':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notifications', '/notifications/history/tasks/:id', keyArgs] as const
}

export function getNotificationsHistoryTasksIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications.history.tasks)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsHistoryTasksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.history.tasks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsHistoryTasksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.history.tasks)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications.history.tasks)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications.history.tasks)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications.history.tasks)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsHistoryTasksIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.notifications.history.tasks)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsHistoryTasksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsHistoryTasksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.history.tasks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsNotificationDefinitionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)['notification-definitions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notifications', '/notifications/notification-definitions', keyArgs] as const
}

export function getNotificationsNotificationDefinitionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)['notification-definitions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsNotificationDefinitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications['notification-definitions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsNotificationDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)['notification-definitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)['notification-definitions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.notifications)['notification-definitions']['$get']>
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
                  ReturnType<(typeof client.notifications)['notification-definitions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsNotificationDefinitionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.notifications)['notification-definitions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsNotificationDefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsNotificationDefinitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications['notification-definitions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNotificationsNotificationDefinitionsMutationKey() {
  return ['notifications', '/notifications/notification-definitions', 'POST'] as const
}

export function getPostNotificationsNotificationDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)['notification-definitions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications)['notification-definitions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsNotificationDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications)['notification-definitions']['$post']>,
    ) {
      return parseResponse(client.notifications['notification-definitions'].$post(args, options))
    },
  })
}

export function usePostNotificationsNotificationDefinitions<
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
                  ReturnType<(typeof client.notifications)['notification-definitions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications)['notification-definitions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotificationsNotificationDefinitionsMutationOptions<
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

export function getNotificationsNotificationDefinitionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)['notification-definitions'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notifications', '/notifications/notification-definitions/:id', keyArgs] as const
}

export function getNotificationsNotificationDefinitionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)['notification-definitions'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsNotificationDefinitionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications['notification-definitions'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsNotificationDefinitionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.notifications)['notification-definitions'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)['notification-definitions'][':id']['$get']>
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
                    (typeof client.notifications)['notification-definitions'][':id']['$get']
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
                    (typeof client.notifications)['notification-definitions'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsNotificationDefinitionsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.notifications)['notification-definitions'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsNotificationDefinitionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsNotificationDefinitionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications['notification-definitions'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNotificationsNotificationDefinitionsIdMutationKey() {
  return ['notifications', '/notifications/notification-definitions/:id', 'PUT'] as const
}

export function getPutNotificationsNotificationDefinitionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.notifications)['notification-definitions'][':id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications)['notification-definitions'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsNotificationDefinitionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.notifications)['notification-definitions'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.notifications['notification-definitions'][':id'].$put(args, options),
      )
    },
  })
}

export function usePutNotificationsNotificationDefinitionsId<
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
                    (typeof client.notifications)['notification-definitions'][':id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.notifications)['notification-definitions'][':id']['$put']
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
  const mutationDefaults = getPutNotificationsNotificationDefinitionsIdMutationOptions<
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

export function getDeleteNotificationsNotificationDefinitionsIdMutationKey() {
  return ['notifications', '/notifications/notification-definitions/:id', 'DELETE'] as const
}

export function getDeleteNotificationsNotificationDefinitionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.notifications)['notification-definitions'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.notifications)['notification-definitions'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationsNotificationDefinitionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.notifications)['notification-definitions'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.notifications['notification-definitions'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNotificationsNotificationDefinitionsId<
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
                      (typeof client.notifications)['notification-definitions'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.notifications)['notification-definitions'][':id']['$delete']
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
  const mutationDefaults = getDeleteNotificationsNotificationDefinitionsIdMutationOptions<
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

export function getPostOauthTokenMutationKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function getPostOauthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.oauth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.token.$post>) {
      return parseResponse(client.oauth.token.$post(args, options))
    },
  })
}

export function usePostOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth.token.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostObjectsBatchDefaultObjectMutationKey() {
  return ['objects', '/objects/batch/default/:object', 'POST'] as const
}

export function getPostObjectsBatchDefaultObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.batch.default)[':object']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.objects.batch.default)[':object']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectsBatchDefaultObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.objects.batch.default)[':object']['$post']>,
    ) {
      return parseResponse(client.objects.batch.default[':object'].$post(args, options))
    },
  })
}

export function usePostObjectsBatchDefaultObject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.objects.batch.default)[':object']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.objects.batch.default)[':object']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectsBatchDefaultObjectMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getObjectsDefinitionsDefaultQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.objects.definitions.default.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['objects', '/objects/definitions/default', keyArgs] as const
}

export function getObjectsDefinitionsDefaultQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.objects.definitions.default.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectsDefinitionsDefaultQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.objects.definitions.default.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectsDefinitionsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.objects.definitions.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.objects.definitions.default.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.objects.definitions.default.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.objects.definitions.default.$get>>
              >
            >
          >,
          ReturnType<typeof getObjectsDefinitionsDefaultQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.objects.definitions.default.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectsDefinitionsDefaultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectsDefinitionsDefaultQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.objects.definitions.default.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostObjectsDefinitionsDefaultMutationKey() {
  return ['objects', '/objects/definitions/default', 'POST'] as const
}

export function getPostObjectsDefinitionsDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.objects.definitions.default.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.objects.definitions.default.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectsDefinitionsDefaultMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.objects.definitions.default.$post>) {
      return parseResponse(client.objects.definitions.default.$post(args, options))
    },
  })
}

export function usePostObjectsDefinitionsDefault<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.objects.definitions.default.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.objects.definitions.default.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectsDefinitionsDefaultMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getObjectsDefinitionsDefaultObjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.objects.definitions.default)[':object']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['objects', '/objects/definitions/default/:object', keyArgs] as const
}

export function getObjectsDefinitionsDefaultObjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.objects.definitions.default)[':object']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectsDefinitionsDefaultObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.objects.definitions.default[':object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectsDefinitionsDefaultObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects.definitions.default)[':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.objects.definitions.default)[':object']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.objects.definitions.default)[':object']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.objects.definitions.default)[':object']['$get']>>
              >
            >
          >,
          ReturnType<typeof getObjectsDefinitionsDefaultObjectQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.objects.definitions.default)[':object']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectsDefinitionsDefaultObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectsDefinitionsDefaultObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.objects.definitions.default[':object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteObjectsDefinitionsDefaultObjectMutationKey() {
  return ['objects', '/objects/definitions/default/:object', 'DELETE'] as const
}

export function getDeleteObjectsDefinitionsDefaultObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.definitions.default)[':object']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.objects.definitions.default)[':object']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteObjectsDefinitionsDefaultObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.objects.definitions.default)[':object']['$delete']>,
    ) {
      return parseResponse(client.objects.definitions.default[':object'].$delete(args, options))
    },
  })
}

export function useDeleteObjectsDefinitionsDefaultObject<
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
                  ReturnType<(typeof client.objects.definitions.default)[':object']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.objects.definitions.default)[':object']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteObjectsDefinitionsDefaultObjectMutationOptions<
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

export function getObjectsJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.objects.jobs.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['objects', '/objects/jobs', keyArgs] as const
}

export function getObjectsJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.objects.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectsJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.objects.jobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useObjectsJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.objects.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.jobs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.jobs.$get>>>>
          >,
          ReturnType<typeof getObjectsJobsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getObjectsJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectsJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.objects.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostObjectsJobsMutationKey() {
  return ['objects', '/objects/jobs', 'POST'] as const
}

export function getPostObjectsJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.jobs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.objects.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectsJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.objects.jobs.$post>) {
      return parseResponse(client.objects.jobs.$post(args, options))
    },
  })
}

export function usePostObjectsJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.jobs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.objects.jobs.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectsJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getObjectsJobsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.objects.jobs)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['objects', '/objects/jobs/:id', keyArgs] as const
}

export function getObjectsJobsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.objects.jobs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectsJobsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.objects.jobs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectsJobsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.objects.jobs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.objects.jobs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.objects.jobs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.objects.jobs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getObjectsJobsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.objects.jobs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectsJobsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectsJobsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.objects.jobs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getObjectsJobsIdErrorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.objects.jobs)[':id']['errors']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['objects', '/objects/jobs/:id/errors', keyArgs] as const
}

export function getObjectsJobsIdErrorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.objects.jobs)[':id']['errors']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectsJobsIdErrorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.objects.jobs[':id'].errors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectsJobsIdErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects.jobs)[':id']['errors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.objects.jobs)[':id']['errors']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.objects.jobs)[':id']['errors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.objects.jobs)[':id']['errors']['$get']>>
              >
            >
          >,
          ReturnType<typeof getObjectsJobsIdErrorsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.objects.jobs)[':id']['errors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectsJobsIdErrorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectsJobsIdErrorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.objects.jobs[':id'].errors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostObjectsJobsIdFilesMutationKey() {
  return ['objects', '/objects/jobs/:id/files', 'POST'] as const
}

export function getPostObjectsJobsIdFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.jobs)[':id']['files']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.objects.jobs)[':id']['files']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectsJobsIdFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.objects.jobs)[':id']['files']['$post']>,
    ) {
      return parseResponse(client.objects.jobs[':id'].files.$post(args, options))
    },
  })
}

export function usePostObjectsJobsIdFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.objects.jobs)[':id']['files']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.objects.jobs)[':id']['files']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectsJobsIdFilesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostObjectsMigrationsMutationKey() {
  return ['objects', '/objects/migrations', 'POST'] as const
}

export function getPostObjectsMigrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.migrations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.objects.migrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectsMigrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.objects.migrations.$post>) {
      return parseResponse(client.objects.migrations.$post(args, options))
    },
  })
}

export function usePostObjectsMigrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.objects.migrations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.objects.migrations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectsMigrationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getObjectsRecordsDefaultObjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.objects.records.default)[':object']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['objects', '/objects/records/default/:object', keyArgs] as const
}

export function getObjectsRecordsDefaultObjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.objects.records.default)[':object']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectsRecordsDefaultObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.objects.records.default[':object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectsRecordsDefaultObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects.records.default)[':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.objects.records.default)[':object']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.objects.records.default)[':object']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.objects.records.default)[':object']['$get']>>
              >
            >
          >,
          ReturnType<typeof getObjectsRecordsDefaultObjectQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.objects.records.default)[':object']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectsRecordsDefaultObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectsRecordsDefaultObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.objects.records.default[':object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostObjectsRecordsDefaultObjectMutationKey() {
  return ['objects', '/objects/records/default/:object', 'POST'] as const
}

export function getPostObjectsRecordsDefaultObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.records.default)[':object']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.objects.records.default)[':object']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectsRecordsDefaultObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.objects.records.default)[':object']['$post']>,
    ) {
      return parseResponse(client.objects.records.default[':object'].$post(args, options))
    },
  })
}

export function usePostObjectsRecordsDefaultObject<
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
                Awaited<ReturnType<(typeof client.objects.records.default)[':object']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.objects.records.default)[':object']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectsRecordsDefaultObjectMutationOptions<
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

export function getObjectsRecordsDefaultObjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['objects', '/objects/records/default/:object/:id', keyArgs] as const
}

export function getObjectsRecordsDefaultObjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectsRecordsDefaultObjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.objects.records.default[':object'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectsRecordsDefaultObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects.records.default)[':object'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.objects.records.default)[':object'][':id']['$get']>
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
                  ReturnType<(typeof client.objects.records.default)[':object'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getObjectsRecordsDefaultObjectIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.objects.records.default)[':object'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectsRecordsDefaultObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectsRecordsDefaultObjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.objects.records.default[':object'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutObjectsRecordsDefaultObjectIdMutationKey() {
  return ['objects', '/objects/records/default/:object/:id', 'PUT'] as const
}

export function getPutObjectsRecordsDefaultObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.records.default)[':object'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutObjectsRecordsDefaultObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$put']>,
    ) {
      return parseResponse(client.objects.records.default[':object'][':id'].$put(args, options))
    },
  })
}

export function usePutObjectsRecordsDefaultObjectId<
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
                  ReturnType<(typeof client.objects.records.default)[':object'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutObjectsRecordsDefaultObjectIdMutationOptions<
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

export function getDeleteObjectsRecordsDefaultObjectIdMutationKey() {
  return ['objects', '/objects/records/default/:object/:id', 'DELETE'] as const
}

export function getDeleteObjectsRecordsDefaultObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.records.default)[':object'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteObjectsRecordsDefaultObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$delete']>,
    ) {
      return parseResponse(client.objects.records.default[':object'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteObjectsRecordsDefaultObjectId<
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
                  ReturnType<(typeof client.objects.records.default)[':object'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteObjectsRecordsDefaultObjectIdMutationOptions<
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

export function getPatchObjectsRecordsDefaultObjectIdMutationKey() {
  return ['objects', '/objects/records/default/:object/:id', 'PATCH'] as const
}

export function getPatchObjectsRecordsDefaultObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.records.default)[':object'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchObjectsRecordsDefaultObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$patch']>,
    ) {
      return parseResponse(client.objects.records.default[':object'][':id'].$patch(args, options))
    },
  })
}

export function usePatchObjectsRecordsDefaultObjectId<
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
                  ReturnType<(typeof client.objects.records.default)[':object'][':id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchObjectsRecordsDefaultObjectIdMutationOptions<
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

export function getQueryJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.jobs.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['query', '/query/jobs', keyArgs] as const
}

export function getQueryJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query.jobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQueryJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.jobs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.jobs.$get>>>>
          >,
          ReturnType<typeof getQueryJobsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQueryJobsMutationKey() {
  return ['query', '/query/jobs', 'POST'] as const
}

export function getPostQueryJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.jobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.query.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.query.jobs.$post>) {
      return parseResponse(client.query.jobs.$post(args, options))
    },
  })
}

export function usePostQueryJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.jobs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.query.jobs.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQueryJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQueryJobsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query.jobs)[':job-id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['query', '/query/jobs/:job-id', keyArgs] as const
}

export function getQueryJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query.jobs)[':job-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query.jobs[':job-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueryJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.query.jobs)[':job-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query.jobs)[':job-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.query.jobs)[':job-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.query.jobs)[':job-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQueryJobsJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.query.jobs)[':job-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query.jobs[':job-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteQueryJobsJobIdMutationKey() {
  return ['query', '/query/jobs/:job-id', 'DELETE'] as const
}

export function getDeleteQueryJobsJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.query.jobs)[':job-id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.query.jobs)[':job-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQueryJobsJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.query.jobs)[':job-id']['$delete']>) {
      return parseResponse(client.query.jobs[':job-id'].$delete(args, options))
    },
  })
}

export function useDeleteQueryJobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.query.jobs)[':job-id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.query.jobs)[':job-id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteQueryJobsJobIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSettingsBatchRequestsMutationKey() {
  return ['settings', '/settings/batch-requests', 'POST'] as const
}

export function getPostSettingsBatchRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['batch-requests']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings)['batch-requests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsBatchRequestsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.settings)['batch-requests']['$post']>) {
      return parseResponse(client.settings['batch-requests'].$post(args, options))
    },
  })
}

export function usePostSettingsBatchRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings)['batch-requests']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.settings)['batch-requests']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsBatchRequestsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSettingsListingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.listing.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['settings', '/settings/listing', keyArgs] as const
}

export function getSettingsListingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.listing.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsListingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.listing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsListing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.listing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.listing.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.listing.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.listing.$get>>>
            >
          >,
          ReturnType<typeof getSettingsListingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.listing.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsListingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsListingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.listing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountingCodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['accounting-codes']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/accounting-codes', keyArgs] as const
}

export function getV1AccountingCodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['accounting-codes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountingCodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['accounting-codes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountingCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-codes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['accounting-codes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['accounting-codes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['accounting-codes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountingCodesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-codes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountingCodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountingCodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['accounting-codes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AccountingCodesMutationKey() {
  return ['v1', '/v1/accounting-codes', 'POST'] as const
}

export function getPostV1AccountingCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-codes']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['accounting-codes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountingCodesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['accounting-codes']['$post']>) {
      return parseResponse(client.v1['accounting-codes'].$post(args, options))
    },
  })
}

export function usePostV1AccountingCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['accounting-codes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['accounting-codes']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountingCodesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AccountingCodesAcIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/accounting-codes/:ac-id', keyArgs] as const
}

export function getV1AccountingCodesAcIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountingCodesAcIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['accounting-codes'][':ac-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountingCodesAcId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountingCodesAcIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountingCodesAcIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountingCodesAcIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['accounting-codes'][':ac-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AccountingCodesAcIdMutationKey() {
  return ['v1', '/v1/accounting-codes/:ac-id', 'PUT'] as const
}

export function getPutV1AccountingCodesAcIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AccountingCodesAcIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$put']>,
    ) {
      return parseResponse(client.v1['accounting-codes'][':ac-id'].$put(args, options))
    },
  })
}

export function usePutV1AccountingCodesAcId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1AccountingCodesAcIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1AccountingCodesAcIdMutationKey() {
  return ['v1', '/v1/accounting-codes/:ac-id', 'DELETE'] as const
}

export function getDeleteV1AccountingCodesAcIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AccountingCodesAcIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$delete']>,
    ) {
      return parseResponse(client.v1['accounting-codes'][':ac-id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AccountingCodesAcId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AccountingCodesAcIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1AccountingCodesAcIdActivateMutationKey() {
  return ['v1', '/v1/accounting-codes/:ac-id/activate', 'PUT'] as const
}

export function getPutV1AccountingCodesAcIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['activate']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['activate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AccountingCodesAcIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['activate']['$put']>,
    ) {
      return parseResponse(client.v1['accounting-codes'][':ac-id'].activate.$put(args, options))
    },
  })
}

export function usePutV1AccountingCodesAcIdActivate<
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
                  ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['activate']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['activate']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1AccountingCodesAcIdActivateMutationOptions<
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

export function getPutV1AccountingCodesAcIdDeactivateMutationKey() {
  return ['v1', '/v1/accounting-codes/:ac-id/deactivate', 'PUT'] as const
}

export function getPutV1AccountingCodesAcIdDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['deactivate']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['deactivate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AccountingCodesAcIdDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['accounting-codes'][':ac-id']['deactivate']['$put']
      >,
    ) {
      return parseResponse(client.v1['accounting-codes'][':ac-id'].deactivate.$put(args, options))
    },
  })
}

export function usePutV1AccountingCodesAcIdDeactivate<
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
                  ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['deactivate']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['deactivate']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1AccountingCodesAcIdDeactivateMutationOptions<
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

export function getV1AccountingPeriodsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['accounting-periods']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/accounting-periods', keyArgs] as const
}

export function getV1AccountingPeriodsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['accounting-periods']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountingPeriodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['accounting-periods'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountingPeriods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-periods']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['accounting-periods']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['accounting-periods']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['accounting-periods']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountingPeriodsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-periods']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountingPeriodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountingPeriodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['accounting-periods'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AccountingPeriodsMutationKey() {
  return ['v1', '/v1/accounting-periods', 'POST'] as const
}

export function getPostV1AccountingPeriodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-periods']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['accounting-periods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountingPeriodsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['accounting-periods']['$post']>) {
      return parseResponse(client.v1['accounting-periods'].$post(args, options))
    },
  })
}

export function usePostV1AccountingPeriods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['accounting-periods']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['accounting-periods']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountingPeriodsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AccountingPeriodsApIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/accounting-periods/:ap-id', keyArgs] as const
}

export function getV1AccountingPeriodsApIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountingPeriodsApIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['accounting-periods'][':ap-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountingPeriodsApId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountingPeriodsApIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountingPeriodsApIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountingPeriodsApIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['accounting-periods'][':ap-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AccountingPeriodsApIdMutationKey() {
  return ['v1', '/v1/accounting-periods/:ap-id', 'PUT'] as const
}

export function getPutV1AccountingPeriodsApIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AccountingPeriodsApIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$put']>,
    ) {
      return parseResponse(client.v1['accounting-periods'][':ap-id'].$put(args, options))
    },
  })
}

export function usePutV1AccountingPeriodsApId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1AccountingPeriodsApIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1AccountingPeriodsApIdMutationKey() {
  return ['v1', '/v1/accounting-periods/:ap-id', 'DELETE'] as const
}

export function getDeleteV1AccountingPeriodsApIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AccountingPeriodsApIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$delete']>,
    ) {
      return parseResponse(client.v1['accounting-periods'][':ap-id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AccountingPeriodsApId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AccountingPeriodsApIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1AccountingPeriodsApIdCloseMutationKey() {
  return ['v1', '/v1/accounting-periods/:ap-id/close', 'PUT'] as const
}

export function getPutV1AccountingPeriodsApIdCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['close']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['close']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AccountingPeriodsApIdCloseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['close']['$put']>,
    ) {
      return parseResponse(client.v1['accounting-periods'][':ap-id'].close.$put(args, options))
    },
  })
}

export function usePutV1AccountingPeriodsApIdClose<
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
                  ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['close']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['close']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1AccountingPeriodsApIdCloseMutationOptions<
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

export function getPutV1AccountingPeriodsApIdPendingCloseMutationKey() {
  return ['v1', '/v1/accounting-periods/:ap-id/pending-close', 'PUT'] as const
}

export function getPutV1AccountingPeriodsApIdPendingCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['pending-close']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['pending-close']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AccountingPeriodsApIdPendingCloseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['accounting-periods'][':ap-id']['pending-close']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['accounting-periods'][':ap-id']['pending-close'].$put(args, options),
      )
    },
  })
}

export function usePutV1AccountingPeriodsApIdPendingClose<
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
                    (typeof client.v1)['accounting-periods'][':ap-id']['pending-close']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['accounting-periods'][':ap-id']['pending-close']['$put']
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
  const mutationDefaults = getPutV1AccountingPeriodsApIdPendingCloseMutationOptions<
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

export function getPutV1AccountingPeriodsApIdReopenMutationKey() {
  return ['v1', '/v1/accounting-periods/:ap-id/reopen', 'PUT'] as const
}

export function getPutV1AccountingPeriodsApIdReopenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['reopen']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['reopen']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AccountingPeriodsApIdReopenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['reopen']['$put']>,
    ) {
      return parseResponse(client.v1['accounting-periods'][':ap-id'].reopen.$put(args, options))
    },
  })
}

export function usePutV1AccountingPeriodsApIdReopen<
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
                  ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['reopen']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['reopen']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1AccountingPeriodsApIdReopenMutationOptions<
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

export function getPutV1AccountingPeriodsApIdRunTrialBalanceMutationKey() {
  return ['v1', '/v1/accounting-periods/:ap-id/run-trial-balance', 'PUT'] as const
}

export function getPutV1AccountingPeriodsApIdRunTrialBalanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['accounting-periods'][':ap-id']['run-trial-balance']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['accounting-periods'][':ap-id']['run-trial-balance']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1AccountingPeriodsApIdRunTrialBalanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['accounting-periods'][':ap-id']['run-trial-balance']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['accounting-periods'][':ap-id']['run-trial-balance'].$put(args, options),
      )
    },
  })
}

export function usePutV1AccountingPeriodsApIdRunTrialBalance<
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
                    (typeof client.v1)['accounting-periods'][':ap-id']['run-trial-balance']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['accounting-periods'][':ap-id']['run-trial-balance']['$put']
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
  const mutationDefaults = getPutV1AccountingPeriodsApIdRunTrialBalanceMutationOptions<
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

export function getPostV1AccountsMutationKey() {
  return ['v1', '/v1/accounts', 'POST'] as const
}

export function getPostV1AccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.accounts.$post>) {
      return parseResponse(client.v1.accounts.$post(args, options))
    },
  })
}

export function usePostV1Accounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.accounts.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1AccountsBillingDocumentsFilesDeletionJobsMutationKey() {
  return ['v1', '/v1/accounts/billing-documents/files/deletion-jobs', 'POST'] as const
}

export function getPostV1AccountsBillingDocumentsFilesDeletionJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsBillingDocumentsFilesDeletionJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.accounts['billing-documents'].files['deletion-jobs'].$post(args, options),
      )
    },
  })
}

export function usePostV1AccountsBillingDocumentsFilesDeletionJobs<
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
                    (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs']['$post']
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
  const mutationDefaults = getPostV1AccountsBillingDocumentsFilesDeletionJobsMutationOptions<
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

export function getV1AccountsBillingDocumentsFilesDeletionJobsJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs'][':jobId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/accounts/billing-documents/files/deletion-jobs/:jobId', keyArgs] as const
}

export function getV1AccountsBillingDocumentsFilesDeletionJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs'][':jobId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsBillingDocumentsFilesDeletionJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts['billing-documents'].files['deletion-jobs'][':jobId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1AccountsBillingDocumentsFilesDeletionJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs'][':jobId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs'][':jobId']['$get']
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
                    (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs'][':jobId']['$get']
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
                    (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs'][':jobId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsBillingDocumentsFilesDeletionJobsJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs'][':jobId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsBillingDocumentsFilesDeletionJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsBillingDocumentsFilesDeletionJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts['billing-documents'].files['deletion-jobs'][':jobId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsAccountKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accounts)[':account-key']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/accounts/:account-key', keyArgs] as const
}

export function getV1AccountsAccountKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accounts)[':account-key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accounts)[':account-key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AccountsAccountKeyMutationKey() {
  return ['v1', '/v1/accounts/:account-key', 'PUT'] as const
}

export function getPutV1AccountsAccountKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accounts)[':account-key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AccountsAccountKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.accounts)[':account-key']['$put']>) {
      return parseResponse(client.v1.accounts[':account-key'].$put(args, options))
    },
  })
}

export function usePutV1AccountsAccountKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.accounts)[':account-key']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1AccountsAccountKeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AccountsAccountKeySummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/accounts/:account-key/summary', keyArgs] as const
}

export function getV1AccountsAccountKeySummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountKeySummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account-key'].summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountKeySummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountKeySummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountKeySummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountKeySummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account-key'].summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AccountsIdBillingDocumentsGenerateMutationKey() {
  return ['v1', '/v1/accounts/:id/billing-documents/generate', 'POST'] as const
}

export function getPostV1AccountsIdBillingDocumentsGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':id']['billing-documents']['generate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accounts)[':id']['billing-documents']['generate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsIdBillingDocumentsGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':id']['billing-documents']['generate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.accounts[':id']['billing-documents'].generate.$post(args, options),
      )
    },
  })
}

export function usePostV1AccountsIdBillingDocumentsGenerate<
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
                    (typeof client.v1.accounts)[':id']['billing-documents']['generate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.accounts)[':id']['billing-documents']['generate']['$post']
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
  const mutationDefaults = getPostV1AccountsIdBillingDocumentsGenerateMutationOptions<
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

export function getPostV1ActionAmendMutationKey() {
  return ['v1', '/v1/action/amend', 'POST'] as const
}

export function getPostV1ActionAmendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.amend.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.action.amend.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActionAmendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.action.amend.$post>) {
      return parseResponse(client.v1.action.amend.$post(args, options))
    },
  })
}

export function usePostV1ActionAmend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.amend.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.action.amend.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ActionAmendMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ActionCreateMutationKey() {
  return ['v1', '/v1/action/create', 'POST'] as const
}

export function getPostV1ActionCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.action.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActionCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.action.create.$post>) {
      return parseResponse(client.v1.action.create.$post(args, options))
    },
  })
}

export function usePostV1ActionCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.action.create.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ActionCreateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ActionDeleteMutationKey() {
  return ['v1', '/v1/action/delete', 'POST'] as const
}

export function getPostV1ActionDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.action.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActionDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.action.delete.$post>) {
      return parseResponse(client.v1.action.delete.$post(args, options))
    },
  })
}

export function usePostV1ActionDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.action.delete.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ActionDeleteMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ActionExecuteMutationKey() {
  return ['v1', '/v1/action/execute', 'POST'] as const
}

export function getPostV1ActionExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.execute.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.action.execute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActionExecuteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.action.execute.$post>) {
      return parseResponse(client.v1.action.execute.$post(args, options))
    },
  })
}

export function usePostV1ActionExecute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.execute.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.action.execute.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ActionExecuteMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ActionGenerateMutationKey() {
  return ['v1', '/v1/action/generate', 'POST'] as const
}

export function getPostV1ActionGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.generate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.action.generate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActionGenerateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.action.generate.$post>) {
      return parseResponse(client.v1.action.generate.$post(args, options))
    },
  })
}

export function usePostV1ActionGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.generate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.action.generate.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ActionGenerateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ActionQueryMutationKey() {
  return ['v1', '/v1/action/query', 'POST'] as const
}

export function getPostV1ActionQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.query.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.action.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActionQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.action.query.$post>) {
      return parseResponse(client.v1.action.query.$post(args, options))
    },
  })
}

export function usePostV1ActionQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.query.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.action.query.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ActionQueryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ActionQueryMoreMutationKey() {
  return ['v1', '/v1/action/queryMore', 'POST'] as const
}

export function getPostV1ActionQueryMoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.queryMore.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.action.queryMore.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActionQueryMoreMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.action.queryMore.$post>) {
      return parseResponse(client.v1.action.queryMore.$post(args, options))
    },
  })
}

export function usePostV1ActionQueryMore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.queryMore.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.action.queryMore.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ActionQueryMoreMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ActionSubscribeMutationKey() {
  return ['v1', '/v1/action/subscribe', 'POST'] as const
}

export function getPostV1ActionSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.subscribe.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.action.subscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActionSubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.action.subscribe.$post>) {
      return parseResponse(client.v1.action.subscribe.$post(args, options))
    },
  })
}

export function usePostV1ActionSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.subscribe.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.action.subscribe.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ActionSubscribeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ActionUpdateMutationKey() {
  return ['v1', '/v1/action/update', 'POST'] as const
}

export function getPostV1ActionUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.action.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActionUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.action.update.$post>) {
      return parseResponse(client.v1.action.update.$post(args, options))
    },
  })
}

export function usePostV1ActionUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.update.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.action.update.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ActionUpdateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AmendmentsSubscriptionsSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/amendments/subscriptions/:subscription-id', keyArgs] as const
}

export function getV1AmendmentsSubscriptionsSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AmendmentsSubscriptionsSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.amendments.subscriptions[':subscription-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AmendmentsSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>
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
                    (typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']
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
                    (typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AmendmentsSubscriptionsSubscriptionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AmendmentsSubscriptionsSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AmendmentsSubscriptionsSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.amendments.subscriptions[':subscription-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AmendmentsAmendmentKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.amendments)[':amendment-key']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/amendments/:amendment-key', keyArgs] as const
}

export function getV1AmendmentsAmendmentKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.amendments)[':amendment-key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AmendmentsAmendmentKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.amendments[':amendment-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AmendmentsAmendmentKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.amendments)[':amendment-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.amendments)[':amendment-key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.amendments)[':amendment-key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.amendments)[':amendment-key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AmendmentsAmendmentKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.amendments)[':amendment-key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AmendmentsAmendmentKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AmendmentsAmendmentKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.amendments[':amendment-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AsyncJobsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['async-jobs'][':jobId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/async-jobs/:jobId', keyArgs] as const
}

export function getV1AsyncJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['async-jobs'][':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AsyncJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['async-jobs'][':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AsyncJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['async-jobs'][':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['async-jobs'][':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['async-jobs'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['async-jobs'][':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AsyncJobsJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1)['async-jobs'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AsyncJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AsyncJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['async-jobs'][':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AsyncOrdersMutationKey() {
  return ['v1', '/v1/async/orders', 'POST'] as const
}

export function getPostV1AsyncOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.async.orders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.async.orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AsyncOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.async.orders.$post>) {
      return parseResponse(client.v1.async.orders.$post(args, options))
    },
  })
}

export function usePostV1AsyncOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.async.orders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.async.orders.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AsyncOrdersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1AsyncOrdersPreviewMutationKey() {
  return ['v1', '/v1/async/orders/preview', 'POST'] as const
}

export function getPostV1AsyncOrdersPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.async.orders.preview.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.async.orders.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AsyncOrdersPreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.async.orders.preview.$post>) {
      return parseResponse(client.v1.async.orders.preview.$post(args, options))
    },
  })
}

export function usePostV1AsyncOrdersPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.async.orders.preview.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.async.orders.preview.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AsyncOrdersPreviewMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1AttachmentsMutationKey() {
  return ['v1', '/v1/attachments', 'POST'] as const
}

export function getPostV1AttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.attachments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.attachments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AttachmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.attachments.$post>) {
      return parseResponse(client.v1.attachments.$post(args, options))
    },
  })
}

export function usePostV1Attachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.attachments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.attachments.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AttachmentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AttachmentsAttachmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/attachments/:attachment-id', keyArgs] as const
}

export function getV1AttachmentsAttachmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AttachmentsAttachmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.attachments[':attachment-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.attachments)[':attachment-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.attachments)[':attachment-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.attachments)[':attachment-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AttachmentsAttachmentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.attachments)[':attachment-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AttachmentsAttachmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AttachmentsAttachmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.attachments[':attachment-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AttachmentsAttachmentIdMutationKey() {
  return ['v1', '/v1/attachments/:attachment-id', 'PUT'] as const
}

export function getPutV1AttachmentsAttachmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.attachments)[':attachment-id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AttachmentsAttachmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$put']>,
    ) {
      return parseResponse(client.v1.attachments[':attachment-id'].$put(args, options))
    },
  })
}

export function usePutV1AttachmentsAttachmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.attachments)[':attachment-id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1AttachmentsAttachmentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1AttachmentsAttachmentIdMutationKey() {
  return ['v1', '/v1/attachments/:attachment-id', 'DELETE'] as const
}

export function getDeleteV1AttachmentsAttachmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.attachments)[':attachment-id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AttachmentsAttachmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$delete']>,
    ) {
      return parseResponse(client.v1.attachments[':attachment-id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AttachmentsAttachmentId<
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
                Awaited<ReturnType<(typeof client.v1.attachments)[':attachment-id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AttachmentsAttachmentIdMutationOptions<
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

export function getV1AttachmentsObjectTypeObjectKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/attachments/:object-type/:object-key', keyArgs] as const
}

export function getV1AttachmentsObjectTypeObjectKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AttachmentsObjectTypeObjectKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.attachments[':object-type'][':object-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AttachmentsObjectTypeObjectKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>
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
                  ReturnType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AttachmentsObjectTypeObjectKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AttachmentsObjectTypeObjectKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AttachmentsObjectTypeObjectKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.attachments[':object-type'][':object-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1BillRunsBillRunIdEmailsMutationKey() {
  return ['v1', '/v1/bill-runs/:billRunId/emails', 'POST'] as const
}

export function getPostV1BillRunsBillRunIdEmailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['bill-runs'][':billRunId']['emails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['bill-runs'][':billRunId']['emails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillRunsBillRunIdEmailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['bill-runs'][':billRunId']['emails']['$post']>,
    ) {
      return parseResponse(client.v1['bill-runs'][':billRunId'].emails.$post(args, options))
    },
  })
}

export function usePostV1BillRunsBillRunIdEmails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['bill-runs'][':billRunId']['emails']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['bill-runs'][':billRunId']['emails']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BillRunsBillRunIdEmailsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1BillingDocumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['billing-documents']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/billing-documents', keyArgs] as const
}

export function getV1BillingDocumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['billing-documents']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BillingDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['billing-documents'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BillingDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['billing-documents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['billing-documents']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['billing-documents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['billing-documents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BillingDocumentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['billing-documents']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BillingDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BillingDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['billing-documents'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1BillingPreviewRunsMutationKey() {
  return ['v1', '/v1/billing-preview-runs', 'POST'] as const
}

export function getPostV1BillingPreviewRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['billing-preview-runs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['billing-preview-runs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingPreviewRunsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['billing-preview-runs']['$post']>) {
      return parseResponse(client.v1['billing-preview-runs'].$post(args, options))
    },
  })
}

export function usePostV1BillingPreviewRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['billing-preview-runs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['billing-preview-runs']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BillingPreviewRunsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1BillingPreviewRunsBillingPreviewRunIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/billing-preview-runs/:billingPreviewRunId', keyArgs] as const
}

export function getV1BillingPreviewRunsBillingPreviewRunIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BillingPreviewRunsBillingPreviewRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['billing-preview-runs'][':billingPreviewRunId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BillingPreviewRunsBillingPreviewRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']>
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
                    (typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']
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
                    (typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1BillingPreviewRunsBillingPreviewRunIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BillingPreviewRunsBillingPreviewRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BillingPreviewRunsBillingPreviewRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['billing-preview-runs'][':billingPreviewRunId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1BulkMutationKey() {
  return ['v1', '/v1/bulk', 'POST'] as const
}

export function getPostV1BulkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bulk.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.bulk.$post>) {
      return parseResponse(client.v1.bulk.$post(args, options))
    },
  })
}

export function usePostV1Bulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bulk.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.bulk.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BulkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1BulkBulkKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.bulk)[':bulk-key']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/bulk/:bulk-key', keyArgs] as const
}

export function getV1BulkBulkKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.bulk)[':bulk-key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BulkBulkKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.bulk[':bulk-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BulkBulkKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bulk)[':bulk-key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.bulk)[':bulk-key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.bulk)[':bulk-key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.bulk)[':bulk-key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BulkBulkKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bulk)[':bulk-key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BulkBulkKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BulkBulkKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.bulk[':bulk-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1BulkBulkKeyStopMutationKey() {
  return ['v1', '/v1/bulk/:bulk-key/stop', 'PUT'] as const
}

export function getPutV1BulkBulkKeyStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.bulk)[':bulk-key']['stop']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.bulk)[':bulk-key']['stop']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BulkBulkKeyStopMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.bulk)[':bulk-key']['stop']['$put']>) {
      return parseResponse(client.v1.bulk[':bulk-key'].stop.$put(args, options))
    },
  })
}

export function usePutV1BulkBulkKeyStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.bulk)[':bulk-key']['stop']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.bulk)[':bulk-key']['stop']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1BulkBulkKeyStopMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1CatalogProductProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.catalog.product)[':product-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/catalog/product/:product-id', keyArgs] as const
}

export function getV1CatalogProductProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.catalog.product)[':product-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CatalogProductProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.catalog.product[':product-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CatalogProductProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.catalog.product)[':product-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.catalog.product)[':product-id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.catalog.product)[':product-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.catalog.product)[':product-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CatalogProductProductIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.catalog.product)[':product-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CatalogProductProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CatalogProductProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.catalog.product[':product-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CatalogProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.catalog.products.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/catalog/products', keyArgs] as const
}

export function getV1CatalogProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.catalog.products.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CatalogProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.catalog.products.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CatalogProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalog.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.catalog.products.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalog.products.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalog.products.$get>>>
            >
          >,
          ReturnType<typeof getV1CatalogProductsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalog.products.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CatalogProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CatalogProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.catalog.products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1CatalogProductsProductIdShareMutationKey() {
  return ['v1', '/v1/catalog/products/:product-id/share', 'POST'] as const
}

export function getPostV1CatalogProductsProductIdShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.catalog.products)[':product-id']['share']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.catalog.products)[':product-id']['share']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CatalogProductsProductIdShareMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.catalog.products)[':product-id']['share']['$post']>,
    ) {
      return parseResponse(client.v1.catalog.products[':product-id'].share.$post(args, options))
    },
  })
}

export function usePostV1CatalogProductsProductIdShare<
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
                  ReturnType<(typeof client.v1.catalog.products)[':product-id']['share']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.catalog.products)[':product-id']['share']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CatalogProductsProductIdShareMutationOptions<
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

export function getV1ChargeRevenueSummariesSubscriptionChargesChargeKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['charge-revenue-summaries']['subscription-charges'][':charge-key']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/charge-revenue-summaries/subscription-charges/:charge-key', keyArgs] as const
}

export function getV1ChargeRevenueSummariesSubscriptionChargesChargeKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['charge-revenue-summaries']['subscription-charges'][':charge-key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ChargeRevenueSummariesSubscriptionChargesChargeKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['charge-revenue-summaries']['subscription-charges'][':charge-key'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1ChargeRevenueSummariesSubscriptionChargesChargeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['charge-revenue-summaries']['subscription-charges'][':charge-key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['charge-revenue-summaries']['subscription-charges'][':charge-key']['$get']
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
                    (typeof client.v1)['charge-revenue-summaries']['subscription-charges'][':charge-key']['$get']
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
                    (typeof client.v1)['charge-revenue-summaries']['subscription-charges'][':charge-key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ChargeRevenueSummariesSubscriptionChargesChargeKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1)['charge-revenue-summaries']['subscription-charges'][':charge-key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChargeRevenueSummariesSubscriptionChargesChargeKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ChargeRevenueSummariesSubscriptionChargesChargeKeyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['charge-revenue-summaries']['subscription-charges'][':charge-key'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1ChargeRevenueSummariesCrsNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/charge-revenue-summaries/:crs-number', keyArgs] as const
}

export function getV1ChargeRevenueSummariesCrsNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ChargeRevenueSummariesCrsNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['charge-revenue-summaries'][':crs-number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ChargeRevenueSummariesCrsNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>
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
                  ReturnType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ChargeRevenueSummariesCrsNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChargeRevenueSummariesCrsNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ChargeRevenueSummariesCrsNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['charge-revenue-summaries'][':crs-number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ConnectionsMutationKey() {
  return ['v1', '/v1/connections', 'POST'] as const
}

export function getPostV1ConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.connections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.$post>) {
      return parseResponse(client.v1.connections.$post(args, options))
    },
  })
}

export function usePostV1Connections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.connections.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ConnectionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1ContactsContactIdScrubMutationKey() {
  return ['v1', '/v1/contacts/:contactId/scrub', 'PUT'] as const
}

export function getPutV1ContactsContactIdScrubMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.contacts)[':contactId']['scrub']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.contacts)[':contactId']['scrub']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ContactsContactIdScrubMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.contacts)[':contactId']['scrub']['$put']>,
    ) {
      return parseResponse(client.v1.contacts[':contactId'].scrub.$put(args, options))
    },
  })
}

export function usePutV1ContactsContactIdScrub<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.contacts)[':contactId']['scrub']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.contacts)[':contactId']['scrub']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ContactsContactIdScrubMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1CreditmemosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.creditmemos.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/creditmemos', keyArgs] as const
}

export function getV1CreditmemosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.creditmemos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CreditmemosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.creditmemos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Creditmemos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.creditmemos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.creditmemos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.creditmemos.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.creditmemos.$get>>>>
          >,
          ReturnType<typeof getV1CreditmemosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.creditmemos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CreditmemosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CreditmemosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.creditmemos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1CreditmemosMutationKey() {
  return ['v1', '/v1/creditmemos', 'POST'] as const
}

export function getPostV1CreditmemosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.creditmemos.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.creditmemos.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CreditmemosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.creditmemos.$post>) {
      return parseResponse(client.v1.creditmemos.$post(args, options))
    },
  })
}

export function usePostV1Creditmemos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.creditmemos.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.creditmemos.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CreditmemosMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1CreditmemosCreditMemoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/creditmemos/:creditMemoId', keyArgs] as const
}

export function getV1CreditmemosCreditMemoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CreditmemosCreditMemoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CreditmemosCreditMemoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CreditmemosCreditMemoIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CreditmemosCreditMemoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CreditmemosCreditMemoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.creditmemos[':creditMemoId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1CreditmemosCreditMemoIdMutationKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId', 'PUT'] as const
}

export function getPutV1CreditmemosCreditMemoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CreditmemosCreditMemoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$put']>,
    ) {
      return parseResponse(client.v1.creditmemos[':creditMemoId'].$put(args, options))
    },
  })
}

export function usePutV1CreditmemosCreditMemoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CreditmemosCreditMemoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1CreditmemosCreditMemoIdMutationKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId', 'DELETE'] as const
}

export function getDeleteV1CreditmemosCreditMemoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CreditmemosCreditMemoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$delete']>,
    ) {
      return parseResponse(client.v1.creditmemos[':creditMemoId'].$delete(args, options))
    },
  })
}

export function useDeleteV1CreditmemosCreditMemoId<
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
                Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1CreditmemosCreditMemoIdMutationOptions<
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

export function getPutV1CreditmemosCreditMemoIdApplyMutationKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/apply', 'PUT'] as const
}

export function getPutV1CreditmemosCreditMemoIdApplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['apply']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['apply']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CreditmemosCreditMemoIdApplyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['apply']['$put']>,
    ) {
      return parseResponse(client.v1.creditmemos[':creditMemoId'].apply.$put(args, options))
    },
  })
}

export function usePutV1CreditmemosCreditMemoIdApply<
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
                  ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['apply']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['apply']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CreditmemosCreditMemoIdApplyMutationOptions<
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

export function getPutV1CreditmemosCreditMemoIdCancelMutationKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/cancel', 'PUT'] as const
}

export function getPutV1CreditmemosCreditMemoIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CreditmemosCreditMemoIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['cancel']['$put']>,
    ) {
      return parseResponse(client.v1.creditmemos[':creditMemoId'].cancel.$put(args, options))
    },
  })
}

export function usePutV1CreditmemosCreditMemoIdCancel<
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
                  ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['cancel']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['cancel']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CreditmemosCreditMemoIdCancelMutationOptions<
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

export function getPostV1CreditmemosCreditMemoIdEmailsMutationKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/emails', 'POST'] as const
}

export function getPostV1CreditmemosCreditMemoIdEmailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['emails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['emails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CreditmemosCreditMemoIdEmailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['emails']['$post']>,
    ) {
      return parseResponse(client.v1.creditmemos[':creditMemoId'].emails.$post(args, options))
    },
  })
}

export function usePostV1CreditmemosCreditMemoIdEmails<
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
                  ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['emails']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['emails']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CreditmemosCreditMemoIdEmailsMutationOptions<
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

export function getPostV1CreditmemosCreditMemoIdFilesMutationKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/files', 'POST'] as const
}

export function getPostV1CreditmemosCreditMemoIdFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['files']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['files']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CreditmemosCreditMemoIdFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['files']['$post']>,
    ) {
      return parseResponse(client.v1.creditmemos[':creditMemoId'].files.$post(args, options))
    },
  })
}

export function usePostV1CreditmemosCreditMemoIdFiles<
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
                  ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['files']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['files']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CreditmemosCreditMemoIdFilesMutationOptions<
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

export function getV1CreditmemosCreditMemoIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/creditmemos/:creditMemoId/items', keyArgs] as const
}

export function getV1CreditmemosCreditMemoIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CreditmemosCreditMemoIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CreditmemosCreditMemoIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>
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
                  ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1CreditmemosCreditMemoIdItemsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CreditmemosCreditMemoIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CreditmemosCreditMemoIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.creditmemos[':creditMemoId'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CreditmemosCreditMemoIdItemsCmitemidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/creditmemos/:creditMemoId/items/:cmitemid', keyArgs] as const
}

export function getV1CreditmemosCreditMemoIdItemsCmitemidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CreditmemosCreditMemoIdItemsCmitemidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].items[':cmitemid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CreditmemosCreditMemoIdItemsCmitemid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['$get']>
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
                    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['$get']
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
                    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1CreditmemosCreditMemoIdItemsCmitemidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CreditmemosCreditMemoIdItemsCmitemidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CreditmemosCreditMemoIdItemsCmitemidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.creditmemos[':creditMemoId'].items[':cmitemid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['taxation-items']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/creditmemos/:creditMemoId/items/:cmitemid/taxation-items', keyArgs] as const
}

export function getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['taxation-items']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].items[':cmitemid']['taxation-items'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1CreditmemosCreditMemoIdItemsCmitemidTaxationItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['taxation-items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['taxation-items']['$get']
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
                    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['taxation-items']['$get']
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
                    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['taxation-items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['taxation-items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.creditmemos[':creditMemoId'].items[':cmitemid']['taxation-items'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1CreditmemosCreditMemoIdPartsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/creditmemos/:creditMemoId/parts', keyArgs] as const
}

export function getV1CreditmemosCreditMemoIdPartsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CreditmemosCreditMemoIdPartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].parts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CreditmemosCreditMemoIdParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>
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
                  ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1CreditmemosCreditMemoIdPartsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CreditmemosCreditMemoIdPartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CreditmemosCreditMemoIdPartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.creditmemos[':creditMemoId'].parts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CreditmemosCreditMemoIdPartsPartidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/creditmemos/:creditMemoId/parts/:partid', keyArgs] as const
}

export function getV1CreditmemosCreditMemoIdPartsPartidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CreditmemosCreditMemoIdPartsPartidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].parts[':partid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CreditmemosCreditMemoIdPartsPartid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['$get']>
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
                    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['$get']
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
                    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1CreditmemosCreditMemoIdPartsPartidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CreditmemosCreditMemoIdPartsPartidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CreditmemosCreditMemoIdPartsPartidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.creditmemos[':creditMemoId'].parts[':partid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CreditmemosCreditMemoIdPartsPartidItempartsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/creditmemos/:creditMemoId/parts/:partid/itemparts', keyArgs] as const
}

export function getV1CreditmemosCreditMemoIdPartsPartidItempartsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CreditmemosCreditMemoIdPartsPartidItempartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].parts[':partid'].itemparts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CreditmemosCreditMemoIdPartsPartidItemparts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts']['$get']
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
                    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts']['$get']
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
                    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1CreditmemosCreditMemoIdPartsPartidItempartsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CreditmemosCreditMemoIdPartsPartidItempartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CreditmemosCreditMemoIdPartsPartidItempartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.creditmemos[':creditMemoId'].parts[':partid'].itemparts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts'][':itempartid']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/creditmemos/:creditMemoId/parts/:partid/itemparts/:itempartid',
    keyArgs,
  ] as const
}

export function getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts'][':itempartid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].parts[':partid'].itemparts[':itempartid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1CreditmemosCreditMemoIdPartsPartidItempartsItempartid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts'][':itempartid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts'][':itempartid']['$get']
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
                    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts'][':itempartid']['$get']
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
                    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts'][':itempartid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts'][':itempartid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.creditmemos[':creditMemoId'].parts[':partid'].itemparts[':itempartid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1CreditmemosCreditMemoIdPdfsMutationKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/pdfs', 'POST'] as const
}

export function getPostV1CreditmemosCreditMemoIdPdfsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['pdfs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['pdfs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CreditmemosCreditMemoIdPdfsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['pdfs']['$post']>,
    ) {
      return parseResponse(client.v1.creditmemos[':creditMemoId'].pdfs.$post(args, options))
    },
  })
}

export function usePostV1CreditmemosCreditMemoIdPdfs<
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
                  ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['pdfs']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['pdfs']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CreditmemosCreditMemoIdPdfsMutationOptions<
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

export function getPutV1CreditmemosCreditMemoIdPostMutationKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/post', 'PUT'] as const
}

export function getPutV1CreditmemosCreditMemoIdPostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['post']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['post']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CreditmemosCreditMemoIdPostMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['post']['$put']>,
    ) {
      return parseResponse(client.v1.creditmemos[':creditMemoId'].post.$put(args, options))
    },
  })
}

export function usePutV1CreditmemosCreditMemoIdPost<
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
                Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['post']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['post']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CreditmemosCreditMemoIdPostMutationOptions<
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

export function getPostV1CreditmemosCreditMemoIdTaxationitemsMutationKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/taxationitems', 'POST'] as const
}

export function getPostV1CreditmemosCreditMemoIdTaxationitemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['taxationitems']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['taxationitems']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CreditmemosCreditMemoIdTaxationitemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.creditmemos)[':creditMemoId']['taxationitems']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].taxationitems.$post(args, options),
      )
    },
  })
}

export function usePostV1CreditmemosCreditMemoIdTaxationitems<
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
                    (typeof client.v1.creditmemos)[':creditMemoId']['taxationitems']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.creditmemos)[':creditMemoId']['taxationitems']['$post']
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
  const mutationDefaults = getPostV1CreditmemosCreditMemoIdTaxationitemsMutationOptions<
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

export function getPutV1CreditmemosCreditMemoIdUnapplyMutationKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/unapply', 'PUT'] as const
}

export function getPutV1CreditmemosCreditMemoIdUnapplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['unapply']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['unapply']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CreditmemosCreditMemoIdUnapplyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['unapply']['$put']>,
    ) {
      return parseResponse(client.v1.creditmemos[':creditMemoId'].unapply.$put(args, options))
    },
  })
}

export function usePutV1CreditmemosCreditMemoIdUnapply<
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
                  ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['unapply']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['unapply']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CreditmemosCreditMemoIdUnapplyMutationOptions<
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

export function getPutV1CreditmemosCreditMemoIdUnpostMutationKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/unpost', 'PUT'] as const
}

export function getPutV1CreditmemosCreditMemoIdUnpostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['unpost']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['unpost']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CreditmemosCreditMemoIdUnpostMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['unpost']['$put']>,
    ) {
      return parseResponse(client.v1.creditmemos[':creditMemoId'].unpost.$put(args, options))
    },
  })
}

export function usePutV1CreditmemosCreditMemoIdUnpost<
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
                  ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['unpost']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['unpost']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CreditmemosCreditMemoIdUnpostMutationOptions<
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

export function getPostV1CreditmemosCreditmemoIdRefundsMutationKey() {
  return ['v1', '/v1/creditmemos/:creditmemoId/refunds', 'POST'] as const
}

export function getPostV1CreditmemosCreditmemoIdRefundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditmemoId']['refunds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.creditmemos)[':creditmemoId']['refunds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CreditmemosCreditmemoIdRefundsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.creditmemos)[':creditmemoId']['refunds']['$post']>,
    ) {
      return parseResponse(client.v1.creditmemos[':creditmemoId'].refunds.$post(args, options))
    },
  })
}

export function usePostV1CreditmemosCreditmemoIdRefunds<
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
                  ReturnType<(typeof client.v1.creditmemos)[':creditmemoId']['refunds']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.creditmemos)[':creditmemoId']['refunds']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CreditmemosCreditmemoIdRefundsMutationOptions<
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

export function getV1CustomExchangeRatesCurrencyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/custom-exchange-rates/:currency', keyArgs] as const
}

export function getV1CustomExchangeRatesCurrencyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CustomExchangeRatesCurrencyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['custom-exchange-rates'][':currency'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CustomExchangeRatesCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>
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
                  ReturnType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1CustomExchangeRatesCurrencyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomExchangeRatesCurrencyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CustomExchangeRatesCurrencyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['custom-exchange-rates'][':currency'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DebitmemosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.debitmemos.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/debitmemos', keyArgs] as const
}

export function getV1DebitmemosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.debitmemos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DebitmemosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.debitmemos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Debitmemos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.debitmemos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$get>>>>
          >,
          ReturnType<typeof getV1DebitmemosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DebitmemosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DebitmemosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.debitmemos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1DebitmemosMutationKey() {
  return ['v1', '/v1/debitmemos', 'PUT'] as const
}

export function getPutV1DebitmemosMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.debitmemos.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DebitmemosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.debitmemos.$put>) {
      return parseResponse(client.v1.debitmemos.$put(args, options))
    },
  })
}

export function usePutV1Debitmemos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.debitmemos.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1DebitmemosMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1DebitmemosMutationKey() {
  return ['v1', '/v1/debitmemos', 'POST'] as const
}

export function getPostV1DebitmemosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.debitmemos.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DebitmemosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.debitmemos.$post>) {
      return parseResponse(client.v1.debitmemos.$post(args, options))
    },
  })
}

export function usePostV1Debitmemos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.debitmemos.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DebitmemosMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1DebitmemosDebitMemoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/debitmemos/:debitMemoId', keyArgs] as const
}

export function getV1DebitmemosDebitMemoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DebitmemosDebitMemoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.debitmemos[':debitMemoId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DebitmemosDebitMemoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DebitmemosDebitMemoIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DebitmemosDebitMemoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DebitmemosDebitMemoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.debitmemos[':debitMemoId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1DebitmemosDebitMemoIdMutationKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId', 'PUT'] as const
}

export function getPutV1DebitmemosDebitMemoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DebitmemosDebitMemoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$put']>,
    ) {
      return parseResponse(client.v1.debitmemos[':debitMemoId'].$put(args, options))
    },
  })
}

export function usePutV1DebitmemosDebitMemoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1DebitmemosDebitMemoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1DebitmemosDebitMemoIdMutationKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId', 'DELETE'] as const
}

export function getDeleteV1DebitmemosDebitMemoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DebitmemosDebitMemoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$delete']>,
    ) {
      return parseResponse(client.v1.debitmemos[':debitMemoId'].$delete(args, options))
    },
  })
}

export function useDeleteV1DebitmemosDebitMemoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1DebitmemosDebitMemoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1DebitmemosDebitMemoIdApplicationPartsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/debitmemos/:debitMemoId/application-parts', keyArgs] as const
}

export function getV1DebitmemosDebitMemoIdApplicationPartsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DebitmemosDebitMemoIdApplicationPartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.debitmemos[':debitMemoId']['application-parts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DebitmemosDebitMemoIdApplicationParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']>
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
                    (typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']
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
                    (typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1DebitmemosDebitMemoIdApplicationPartsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DebitmemosDebitMemoIdApplicationPartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DebitmemosDebitMemoIdApplicationPartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.debitmemos[':debitMemoId']['application-parts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1DebitmemosDebitMemoIdCancelMutationKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId/cancel', 'PUT'] as const
}

export function getPutV1DebitmemosDebitMemoIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DebitmemosDebitMemoIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['cancel']['$put']>,
    ) {
      return parseResponse(client.v1.debitmemos[':debitMemoId'].cancel.$put(args, options))
    },
  })
}

export function usePutV1DebitmemosDebitMemoIdCancel<
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
                Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['cancel']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['cancel']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1DebitmemosDebitMemoIdCancelMutationOptions<
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

export function getPostV1DebitmemosDebitMemoIdCollectMutationKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId/collect', 'POST'] as const
}

export function getPostV1DebitmemosDebitMemoIdCollectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['collect']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['collect']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DebitmemosDebitMemoIdCollectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['collect']['$post']>,
    ) {
      return parseResponse(client.v1.debitmemos[':debitMemoId'].collect.$post(args, options))
    },
  })
}

export function usePostV1DebitmemosDebitMemoIdCollect<
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
                  ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['collect']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['collect']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DebitmemosDebitMemoIdCollectMutationOptions<
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

export function getPostV1DebitmemosDebitMemoIdEmailsMutationKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId/emails', 'POST'] as const
}

export function getPostV1DebitmemosDebitMemoIdEmailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['emails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['emails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DebitmemosDebitMemoIdEmailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['emails']['$post']>,
    ) {
      return parseResponse(client.v1.debitmemos[':debitMemoId'].emails.$post(args, options))
    },
  })
}

export function usePostV1DebitmemosDebitMemoIdEmails<
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
                  ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['emails']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['emails']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DebitmemosDebitMemoIdEmailsMutationOptions<
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

export function getPostV1DebitmemosDebitMemoIdFilesMutationKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId/files', 'POST'] as const
}

export function getPostV1DebitmemosDebitMemoIdFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['files']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['files']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DebitmemosDebitMemoIdFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['files']['$post']>,
    ) {
      return parseResponse(client.v1.debitmemos[':debitMemoId'].files.$post(args, options))
    },
  })
}

export function usePostV1DebitmemosDebitMemoIdFiles<
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
                Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['files']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['files']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DebitmemosDebitMemoIdFilesMutationOptions<
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

export function getV1DebitmemosDebitMemoIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/debitmemos/:debitMemoId/items', keyArgs] as const
}

export function getV1DebitmemosDebitMemoIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DebitmemosDebitMemoIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.debitmemos[':debitMemoId'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DebitmemosDebitMemoIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DebitmemosDebitMemoIdItemsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DebitmemosDebitMemoIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DebitmemosDebitMemoIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.debitmemos[':debitMemoId'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DebitmemosDebitMemoIdItemsDmitemidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/debitmemos/:debitMemoId/items/:dmitemid', keyArgs] as const
}

export function getV1DebitmemosDebitMemoIdItemsDmitemidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DebitmemosDebitMemoIdItemsDmitemidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.debitmemos[':debitMemoId'].items[':dmitemid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DebitmemosDebitMemoIdItemsDmitemid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['$get']>
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
                    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['$get']
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
                    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1DebitmemosDebitMemoIdItemsDmitemidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DebitmemosDebitMemoIdItemsDmitemidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DebitmemosDebitMemoIdItemsDmitemidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.debitmemos[':debitMemoId'].items[':dmitemid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['taxation-items']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/debitmemos/:debitMemoId/items/:dmitemid/taxation-items', keyArgs] as const
}

export function getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['taxation-items']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.debitmemos[':debitMemoId'].items[':dmitemid']['taxation-items'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1DebitmemosDebitMemoIdItemsDmitemidTaxationItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['taxation-items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['taxation-items']['$get']
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
                    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['taxation-items']['$get']
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
                    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['taxation-items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['taxation-items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.debitmemos[':debitMemoId'].items[':dmitemid']['taxation-items'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DebitmemosDebitMemoIdPdfsMutationKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId/pdfs', 'POST'] as const
}

export function getPostV1DebitmemosDebitMemoIdPdfsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['pdfs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['pdfs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DebitmemosDebitMemoIdPdfsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['pdfs']['$post']>,
    ) {
      return parseResponse(client.v1.debitmemos[':debitMemoId'].pdfs.$post(args, options))
    },
  })
}

export function usePostV1DebitmemosDebitMemoIdPdfs<
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
                Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['pdfs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['pdfs']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DebitmemosDebitMemoIdPdfsMutationOptions<
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

export function getPutV1DebitmemosDebitMemoIdPostMutationKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId/post', 'PUT'] as const
}

export function getPutV1DebitmemosDebitMemoIdPostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['post']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['post']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DebitmemosDebitMemoIdPostMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['post']['$put']>,
    ) {
      return parseResponse(client.v1.debitmemos[':debitMemoId'].post.$put(args, options))
    },
  })
}

export function usePutV1DebitmemosDebitMemoIdPost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['post']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['post']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1DebitmemosDebitMemoIdPostMutationOptions<
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

export function getPostV1DebitmemosDebitMemoIdTaxationitemsMutationKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId/taxationitems', 'POST'] as const
}

export function getPostV1DebitmemosDebitMemoIdTaxationitemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['taxationitems']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['taxationitems']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DebitmemosDebitMemoIdTaxationitemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.debitmemos)[':debitMemoId']['taxationitems']['$post']
      >,
    ) {
      return parseResponse(client.v1.debitmemos[':debitMemoId'].taxationitems.$post(args, options))
    },
  })
}

export function usePostV1DebitmemosDebitMemoIdTaxationitems<
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
                    (typeof client.v1.debitmemos)[':debitMemoId']['taxationitems']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['taxationitems']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DebitmemosDebitMemoIdTaxationitemsMutationOptions<
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

export function getPutV1DebitmemosDebitMemoIdUnpostMutationKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId/unpost', 'PUT'] as const
}

export function getPutV1DebitmemosDebitMemoIdUnpostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['unpost']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['unpost']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DebitmemosDebitMemoIdUnpostMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['unpost']['$put']>,
    ) {
      return parseResponse(client.v1.debitmemos[':debitMemoId'].unpost.$put(args, options))
    },
  })
}

export function usePutV1DebitmemosDebitMemoIdUnpost<
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
                Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['unpost']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['unpost']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1DebitmemosDebitMemoIdUnpostMutationOptions<
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

export function getV1DescribeObjectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.describe)[':object']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/describe/:object', keyArgs] as const
}

export function getV1DescribeObjectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.describe)[':object']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DescribeObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.describe[':object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DescribeObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.describe)[':object']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.describe)[':object']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.describe)[':object']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.describe)[':object']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DescribeObjectQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.describe)[':object']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DescribeObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DescribeObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.describe[':object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DocumentPropertiesMutationKey() {
  return ['v1', '/v1/document-properties', 'POST'] as const
}

export function getPostV1DocumentPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['document-properties']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['document-properties']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DocumentPropertiesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['document-properties']['$post']>) {
      return parseResponse(client.v1['document-properties'].$post(args, options))
    },
  })
}

export function usePostV1DocumentProperties<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['document-properties']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['document-properties']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DocumentPropertiesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1DocumentPropertiesDocumentPropertiesIdMutationKey() {
  return ['v1', '/v1/document-properties/:documentPropertiesId', 'PUT'] as const
}

export function getPutV1DocumentPropertiesDocumentPropertiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['document-properties'][':documentPropertiesId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['document-properties'][':documentPropertiesId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DocumentPropertiesDocumentPropertiesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['document-properties'][':documentPropertiesId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['document-properties'][':documentPropertiesId'].$put(args, options),
      )
    },
  })
}

export function usePutV1DocumentPropertiesDocumentPropertiesId<
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
                    (typeof client.v1)['document-properties'][':documentPropertiesId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['document-properties'][':documentPropertiesId']['$put']
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
  const mutationDefaults = getPutV1DocumentPropertiesDocumentPropertiesIdMutationOptions<
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

export function getDeleteV1DocumentPropertiesDocumentPropertiesIdMutationKey() {
  return ['v1', '/v1/document-properties/:documentPropertiesId', 'DELETE'] as const
}

export function getDeleteV1DocumentPropertiesDocumentPropertiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['document-properties'][':documentPropertiesId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['document-properties'][':documentPropertiesId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DocumentPropertiesDocumentPropertiesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['document-properties'][':documentPropertiesId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1['document-properties'][':documentPropertiesId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1DocumentPropertiesDocumentPropertiesId<
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
                    (typeof client.v1)['document-properties'][':documentPropertiesId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['document-properties'][':documentPropertiesId']['$delete']
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
  const mutationDefaults = getDeleteV1DocumentPropertiesDocumentPropertiesIdMutationOptions<
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

export function getV1DocumentPropertiesDocumentTypeDocumentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['document-properties'][':documentType'][':documentId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/document-properties/:documentType/:documentId', keyArgs] as const
}

export function getV1DocumentPropertiesDocumentTypeDocumentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['document-properties'][':documentType'][':documentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DocumentPropertiesDocumentTypeDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['document-properties'][':documentType'][':documentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DocumentPropertiesDocumentTypeDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['document-properties'][':documentType'][':documentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['document-properties'][':documentType'][':documentId']['$get']
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
                    (typeof client.v1)['document-properties'][':documentType'][':documentId']['$get']
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
                    (typeof client.v1)['document-properties'][':documentType'][':documentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1DocumentPropertiesDocumentTypeDocumentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1)['document-properties'][':documentType'][':documentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DocumentPropertiesDocumentTypeDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DocumentPropertiesDocumentTypeDocumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['document-properties'][':documentType'][':documentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EntitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.entities.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/entities', keyArgs] as const
}

export function getV1EntitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.entities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EntitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.entities.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Entities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.entities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
          >,
          ReturnType<typeof getV1EntitiesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1EntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EntitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.entities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1EntitiesMutationKey() {
  return ['v1', '/v1/entities', 'POST'] as const
}

export function getPostV1EntitiesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.entities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EntitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.entities.$post>) {
      return parseResponse(client.v1.entities.$post(args, options))
    },
  })
}

export function usePostV1Entities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.entities.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1EntitiesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1EntitiesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.entities)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/entities/:id', keyArgs] as const
}

export function getV1EntitiesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.entities)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EntitiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.entities[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EntitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.entities)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1EntitiesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EntitiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EntitiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.entities[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1EntitiesIdMutationKey() {
  return ['v1', '/v1/entities/:id', 'PUT'] as const
}

export function getPutV1EntitiesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.entities)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EntitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.entities)[':id']['$put']>) {
      return parseResponse(client.v1.entities[':id'].$put(args, options))
    },
  })
}

export function usePutV1EntitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.entities)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1EntitiesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1EntitiesIdMutationKey() {
  return ['v1', '/v1/entities/:id', 'DELETE'] as const
}

export function getDeleteV1EntitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.entities)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1EntitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.entities)[':id']['$delete']>) {
      return parseResponse(client.v1.entities[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1EntitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.entities)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.entities)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1EntitiesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1EntitiesIdProvisionMutationKey() {
  return ['v1', '/v1/entities/:id/provision', 'PUT'] as const
}

export function getPutV1EntitiesIdProvisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.entities)[':id']['provision']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.entities)[':id']['provision']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EntitiesIdProvisionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.entities)[':id']['provision']['$put']>,
    ) {
      return parseResponse(client.v1.entities[':id'].provision.$put(args, options))
    },
  })
}

export function usePutV1EntitiesIdProvision<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.entities)[':id']['provision']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.entities)[':id']['provision']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1EntitiesIdProvisionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1EntityConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['entity-connections']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/entity-connections', keyArgs] as const
}

export function getV1EntityConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['entity-connections']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EntityConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['entity-connections'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EntityConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entity-connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['entity-connections']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['entity-connections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['entity-connections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EntityConnectionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entity-connections']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EntityConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EntityConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['entity-connections'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1EntityConnectionsMutationKey() {
  return ['v1', '/v1/entity-connections', 'POST'] as const
}

export function getPostV1EntityConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entity-connections']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['entity-connections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EntityConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['entity-connections']['$post']>) {
      return parseResponse(client.v1['entity-connections'].$post(args, options))
    },
  })
}

export function usePostV1EntityConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['entity-connections']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['entity-connections']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1EntityConnectionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1EntityConnectionsConnectionIdAcceptMutationKey() {
  return ['v1', '/v1/entity-connections/:connection-id/accept', 'PUT'] as const
}

export function getPutV1EntityConnectionsConnectionIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['entity-connections'][':connection-id']['accept']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['entity-connections'][':connection-id']['accept']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EntityConnectionsConnectionIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['entity-connections'][':connection-id']['accept']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['entity-connections'][':connection-id'].accept.$put(args, options),
      )
    },
  })
}

export function usePutV1EntityConnectionsConnectionIdAccept<
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
                    (typeof client.v1)['entity-connections'][':connection-id']['accept']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['entity-connections'][':connection-id']['accept']['$put']
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
  const mutationDefaults = getPutV1EntityConnectionsConnectionIdAcceptMutationOptions<
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

export function getPutV1EntityConnectionsConnectionIdDenyMutationKey() {
  return ['v1', '/v1/entity-connections/:connection-id/deny', 'PUT'] as const
}

export function getPutV1EntityConnectionsConnectionIdDenyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['entity-connections'][':connection-id']['deny']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['entity-connections'][':connection-id']['deny']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EntityConnectionsConnectionIdDenyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['entity-connections'][':connection-id']['deny']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['entity-connections'][':connection-id'].deny.$put(args, options),
      )
    },
  })
}

export function usePutV1EntityConnectionsConnectionIdDeny<
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
                    (typeof client.v1)['entity-connections'][':connection-id']['deny']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['entity-connections'][':connection-id']['deny']['$put']
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
  const mutationDefaults = getPutV1EntityConnectionsConnectionIdDenyMutationOptions<
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

export function getPutV1EntityConnectionsConnectionIdDisconnectMutationKey() {
  return ['v1', '/v1/entity-connections/:connection-id/disconnect', 'PUT'] as const
}

export function getPutV1EntityConnectionsConnectionIdDisconnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['entity-connections'][':connection-id']['disconnect']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['entity-connections'][':connection-id']['disconnect']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1EntityConnectionsConnectionIdDisconnectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['entity-connections'][':connection-id']['disconnect']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['entity-connections'][':connection-id'].disconnect.$put(args, options),
      )
    },
  })
}

export function usePutV1EntityConnectionsConnectionIdDisconnect<
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
                    (typeof client.v1)['entity-connections'][':connection-id']['disconnect']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['entity-connections'][':connection-id']['disconnect']['$put']
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
  const mutationDefaults = getPutV1EntityConnectionsConnectionIdDisconnectMutationOptions<
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

export function getV1FilesFileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file-id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/files/:file-id', keyArgs] as const
}

export function getV1FilesFileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FilesFileIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1GatewaySettlementPaymentsPaymentIdChargebackMutationKey() {
  return ['v1', '/v1/gateway-settlement/payments/:payment-id/chargeback', 'POST'] as const
}

export function getPostV1GatewaySettlementPaymentsPaymentIdChargebackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['chargeback']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['chargeback']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1GatewaySettlementPaymentsPaymentIdChargebackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['chargeback']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['gateway-settlement'].payments[':payment-id'].chargeback.$post(args, options),
      )
    },
  })
}

export function usePostV1GatewaySettlementPaymentsPaymentIdChargeback<
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
                    (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['chargeback']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['chargeback']['$post']
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
  const mutationDefaults = getPostV1GatewaySettlementPaymentsPaymentIdChargebackMutationOptions<
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

export function getPostV1GatewaySettlementPaymentsPaymentIdRejectMutationKey() {
  return ['v1', '/v1/gateway-settlement/payments/:payment-id/reject', 'POST'] as const
}

export function getPostV1GatewaySettlementPaymentsPaymentIdRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['reject']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['reject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1GatewaySettlementPaymentsPaymentIdRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['reject']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['gateway-settlement'].payments[':payment-id'].reject.$post(args, options),
      )
    },
  })
}

export function usePostV1GatewaySettlementPaymentsPaymentIdReject<
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
                    (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['reject']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['reject']['$post']
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
  const mutationDefaults = getPostV1GatewaySettlementPaymentsPaymentIdRejectMutationOptions<
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

export function getPostV1GatewaySettlementPaymentsPaymentIdSettleMutationKey() {
  return ['v1', '/v1/gateway-settlement/payments/:payment-id/settle', 'POST'] as const
}

export function getPostV1GatewaySettlementPaymentsPaymentIdSettleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['settle']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['settle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1GatewaySettlementPaymentsPaymentIdSettleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['settle']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['gateway-settlement'].payments[':payment-id'].settle.$post(args, options),
      )
    },
  })
}

export function usePostV1GatewaySettlementPaymentsPaymentIdSettle<
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
                    (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['settle']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['settle']['$post']
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
  const mutationDefaults = getPostV1GatewaySettlementPaymentsPaymentIdSettleMutationOptions<
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

export function getPostV1HmacSignaturesMutationKey() {
  return ['v1', '/v1/hmac-signatures', 'POST'] as const
}

export function getPostV1HmacSignaturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['hmac-signatures']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['hmac-signatures']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HmacSignaturesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['hmac-signatures']['$post']>) {
      return parseResponse(client.v1['hmac-signatures'].$post(args, options))
    },
  })
}

export function usePostV1HmacSignatures<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['hmac-signatures']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['hmac-signatures']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1HmacSignaturesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1HostedpagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.hostedpages.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/hostedpages', keyArgs] as const
}

export function getV1HostedpagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.hostedpages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1HostedpagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.hostedpages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Hostedpages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hostedpages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.hostedpages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hostedpages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hostedpages.$get>>>>
          >,
          ReturnType<typeof getV1HostedpagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hostedpages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1HostedpagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1HostedpagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.hostedpages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1InvoicesMutationKey() {
  return ['v1', '/v1/invoices', 'PUT'] as const
}

export function getPutV1InvoicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.$put>>>>>,
    TError,
    InferRequestType<typeof client.v1.invoices.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1InvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.invoices.$put>) {
      return parseResponse(client.v1.invoices.$put(args, options))
    },
  })
}

export function usePutV1Invoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.invoices.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1InvoicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1InvoicesMutationKey() {
  return ['v1', '/v1/invoices', 'POST'] as const
}

export function getPostV1InvoicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.invoices.$post>) {
      return parseResponse(client.v1.invoices.$post(args, options))
    },
  })
}

export function usePostV1Invoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.invoices.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1InvoicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1InvoicesInvoiceIdMutationKey() {
  return ['v1', '/v1/invoices/:invoiceId', 'PUT'] as const
}

export function getPutV1InvoicesInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1InvoicesInvoiceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['$put']>) {
      return parseResponse(client.v1.invoices[':invoiceId'].$put(args, options))
    },
  })
}

export function usePutV1InvoicesInvoiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.invoices)[':invoiceId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1InvoicesInvoiceIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1InvoicesInvoiceIdApplicationPartsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/invoices/:invoiceId/application-parts', keyArgs] as const
}

export function getV1InvoicesInvoiceIdApplicationPartsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1InvoicesInvoiceIdApplicationPartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.invoices[':invoiceId']['application-parts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InvoicesInvoiceIdApplicationParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>
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
                  ReturnType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1InvoicesInvoiceIdApplicationPartsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InvoicesInvoiceIdApplicationPartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1InvoicesInvoiceIdApplicationPartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.invoices[':invoiceId']['application-parts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1InvoicesInvoiceIdCreditmemosMutationKey() {
  return ['v1', '/v1/invoices/:invoiceId/creditmemos', 'POST'] as const
}

export function getPostV1InvoicesInvoiceIdCreditmemosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['creditmemos']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['creditmemos']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InvoicesInvoiceIdCreditmemosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['creditmemos']['$post']>,
    ) {
      return parseResponse(client.v1.invoices[':invoiceId'].creditmemos.$post(args, options))
    },
  })
}

export function usePostV1InvoicesInvoiceIdCreditmemos<
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
                  ReturnType<(typeof client.v1.invoices)[':invoiceId']['creditmemos']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.invoices)[':invoiceId']['creditmemos']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1InvoicesInvoiceIdCreditmemosMutationOptions<
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

export function getPostV1InvoicesInvoiceIdDebitmemosMutationKey() {
  return ['v1', '/v1/invoices/:invoiceId/debitmemos', 'POST'] as const
}

export function getPostV1InvoicesInvoiceIdDebitmemosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['debitmemos']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['debitmemos']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InvoicesInvoiceIdDebitmemosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['debitmemos']['$post']>,
    ) {
      return parseResponse(client.v1.invoices[':invoiceId'].debitmemos.$post(args, options))
    },
  })
}

export function usePostV1InvoicesInvoiceIdDebitmemos<
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
                  ReturnType<(typeof client.v1.invoices)[':invoiceId']['debitmemos']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.invoices)[':invoiceId']['debitmemos']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1InvoicesInvoiceIdDebitmemosMutationOptions<
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

export function getPostV1InvoicesInvoiceIdEmailsMutationKey() {
  return ['v1', '/v1/invoices/:invoiceId/emails', 'POST'] as const
}

export function getPostV1InvoicesInvoiceIdEmailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['emails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['emails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InvoicesInvoiceIdEmailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['emails']['$post']>,
    ) {
      return parseResponse(client.v1.invoices[':invoiceId'].emails.$post(args, options))
    },
  })
}

export function usePostV1InvoicesInvoiceIdEmails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['emails']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.invoices)[':invoiceId']['emails']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1InvoicesInvoiceIdEmailsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1InvoicesInvoiceIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/invoices/:invoiceId/files', keyArgs] as const
}

export function getV1InvoicesInvoiceIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1InvoicesInvoiceIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.invoices[':invoiceId'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InvoicesInvoiceIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1InvoicesInvoiceIdFilesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InvoicesInvoiceIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1InvoicesInvoiceIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.invoices[':invoiceId'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1InvoicesInvoiceIdFilesMutationKey() {
  return ['v1', '/v1/invoices/:invoiceId/files', 'POST'] as const
}

export function getPostV1InvoicesInvoiceIdFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['files']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['files']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InvoicesInvoiceIdFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['files']['$post']>,
    ) {
      return parseResponse(client.v1.invoices[':invoiceId'].files.$post(args, options))
    },
  })
}

export function usePostV1InvoicesInvoiceIdFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['files']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.invoices)[':invoiceId']['files']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1InvoicesInvoiceIdFilesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1InvoicesInvoiceIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/invoices/:invoiceId/items', keyArgs] as const
}

export function getV1InvoicesInvoiceIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1InvoicesInvoiceIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.invoices[':invoiceId'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InvoicesInvoiceIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1InvoicesInvoiceIdItemsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InvoicesInvoiceIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1InvoicesInvoiceIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.invoices[':invoiceId'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1InvoicesInvoiceIdItemsItemIdTaxationItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.invoices)[':invoiceId']['items'][':itemId']['taxation-items']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/invoices/:invoiceId/items/:itemId/taxation-items', keyArgs] as const
}

export function getV1InvoicesInvoiceIdItemsItemIdTaxationItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.invoices)[':invoiceId']['items'][':itemId']['taxation-items']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1InvoicesInvoiceIdItemsItemIdTaxationItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.invoices[':invoiceId'].items[':itemId']['taxation-items'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InvoicesInvoiceIdItemsItemIdTaxationItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.invoices)[':invoiceId']['items'][':itemId']['taxation-items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.invoices)[':invoiceId']['items'][':itemId']['taxation-items']['$get']
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
                    (typeof client.v1.invoices)[':invoiceId']['items'][':itemId']['taxation-items']['$get']
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
                    (typeof client.v1.invoices)[':invoiceId']['items'][':itemId']['taxation-items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1InvoicesInvoiceIdItemsItemIdTaxationItemsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1.invoices)[':invoiceId']['items'][':itemId']['taxation-items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InvoicesInvoiceIdItemsItemIdTaxationItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1InvoicesInvoiceIdItemsItemIdTaxationItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.invoices[':invoiceId'].items[':itemId']['taxation-items'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1InvoicesInvoiceIdReverseMutationKey() {
  return ['v1', '/v1/invoices/:invoiceId/reverse', 'PUT'] as const
}

export function getPutV1InvoicesInvoiceIdReverseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['reverse']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['reverse']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1InvoicesInvoiceIdReverseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['reverse']['$put']>,
    ) {
      return parseResponse(client.v1.invoices[':invoiceId'].reverse.$put(args, options))
    },
  })
}

export function usePutV1InvoicesInvoiceIdReverse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['reverse']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.invoices)[':invoiceId']['reverse']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1InvoicesInvoiceIdReverseMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1InvoicesInvoiceIdWriteOffMutationKey() {
  return ['v1', '/v1/invoices/:invoiceId/write-off', 'PUT'] as const
}

export function getPutV1InvoicesInvoiceIdWriteOffMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['write-off']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['write-off']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1InvoicesInvoiceIdWriteOffMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['write-off']['$put']>,
    ) {
      return parseResponse(client.v1.invoices[':invoiceId']['write-off'].$put(args, options))
    },
  })
}

export function usePutV1InvoicesInvoiceIdWriteOff<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['write-off']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.invoices)[':invoiceId']['write-off']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1InvoicesInvoiceIdWriteOffMutationOptions<
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

export function getPostV1JournalEntriesMutationKey() {
  return ['v1', '/v1/journal-entries', 'POST'] as const
}

export function getPostV1JournalEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['journal-entries']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['journal-entries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JournalEntriesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['journal-entries']['$post']>) {
      return parseResponse(client.v1['journal-entries'].$post(args, options))
    },
  })
}

export function usePostV1JournalEntries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['journal-entries']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['journal-entries']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1JournalEntriesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1JournalEntriesJournalRunsJrNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['journal-entries']['journal-runs'][':jr-number']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/journal-entries/journal-runs/:jr-number', keyArgs] as const
}

export function getV1JournalEntriesJournalRunsJrNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['journal-entries']['journal-runs'][':jr-number']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1JournalEntriesJournalRunsJrNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['journal-entries']['journal-runs'][':jr-number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1JournalEntriesJournalRunsJrNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)['journal-entries']['journal-runs'][':jr-number']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['journal-entries']['journal-runs'][':jr-number']['$get']>
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
                    (typeof client.v1)['journal-entries']['journal-runs'][':jr-number']['$get']
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
                    (typeof client.v1)['journal-entries']['journal-runs'][':jr-number']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1JournalEntriesJournalRunsJrNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1)['journal-entries']['journal-runs'][':jr-number']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1JournalEntriesJournalRunsJrNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1JournalEntriesJournalRunsJrNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['journal-entries']['journal-runs'][':jr-number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1JournalEntriesJeNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/journal-entries/:je-number', keyArgs] as const
}

export function getV1JournalEntriesJeNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1JournalEntriesJeNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['journal-entries'][':je-number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1JournalEntriesJeNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['journal-entries'][':je-number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['journal-entries'][':je-number']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['journal-entries'][':je-number']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1JournalEntriesJeNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1)['journal-entries'][':je-number']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1JournalEntriesJeNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1JournalEntriesJeNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['journal-entries'][':je-number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1JournalEntriesJeNumberMutationKey() {
  return ['v1', '/v1/journal-entries/:je-number', 'DELETE'] as const
}

export function getDeleteV1JournalEntriesJeNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['journal-entries'][':je-number']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1JournalEntriesJeNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['$delete']>,
    ) {
      return parseResponse(client.v1['journal-entries'][':je-number'].$delete(args, options))
    },
  })
}

export function useDeleteV1JournalEntriesJeNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['journal-entries'][':je-number']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1JournalEntriesJeNumberMutationOptions<
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

export function getPutV1JournalEntriesJeNumberBasicInformationMutationKey() {
  return ['v1', '/v1/journal-entries/:je-number/basic-information', 'PUT'] as const
}

export function getPutV1JournalEntriesJeNumberBasicInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['journal-entries'][':je-number']['basic-information']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['journal-entries'][':je-number']['basic-information']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1JournalEntriesJeNumberBasicInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['journal-entries'][':je-number']['basic-information']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['journal-entries'][':je-number']['basic-information'].$put(args, options),
      )
    },
  })
}

export function usePutV1JournalEntriesJeNumberBasicInformation<
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
                    (typeof client.v1)['journal-entries'][':je-number']['basic-information']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['journal-entries'][':je-number']['basic-information']['$put']
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
  const mutationDefaults = getPutV1JournalEntriesJeNumberBasicInformationMutationOptions<
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

export function getPutV1JournalEntriesJeNumberCancelMutationKey() {
  return ['v1', '/v1/journal-entries/:je-number/cancel', 'PUT'] as const
}

export function getPutV1JournalEntriesJeNumberCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['journal-entries'][':je-number']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1JournalEntriesJeNumberCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['cancel']['$put']>,
    ) {
      return parseResponse(client.v1['journal-entries'][':je-number'].cancel.$put(args, options))
    },
  })
}

export function usePutV1JournalEntriesJeNumberCancel<
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
                  ReturnType<(typeof client.v1)['journal-entries'][':je-number']['cancel']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['cancel']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1JournalEntriesJeNumberCancelMutationOptions<
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

export function getPostV1JournalRunsMutationKey() {
  return ['v1', '/v1/journal-runs', 'POST'] as const
}

export function getPostV1JournalRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['journal-runs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['journal-runs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JournalRunsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['journal-runs']['$post']>) {
      return parseResponse(client.v1['journal-runs'].$post(args, options))
    },
  })
}

export function usePostV1JournalRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['journal-runs']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['journal-runs']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1JournalRunsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1JournalRunsJrNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/journal-runs/:jr-number', keyArgs] as const
}

export function getV1JournalRunsJrNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1JournalRunsJrNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['journal-runs'][':jr-number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1JournalRunsJrNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1JournalRunsJrNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1JournalRunsJrNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1JournalRunsJrNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['journal-runs'][':jr-number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1JournalRunsJrNumberMutationKey() {
  return ['v1', '/v1/journal-runs/:jr-number', 'DELETE'] as const
}

export function getDeleteV1JournalRunsJrNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1JournalRunsJrNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['$delete']>,
    ) {
      return parseResponse(client.v1['journal-runs'][':jr-number'].$delete(args, options))
    },
  })
}

export function useDeleteV1JournalRunsJrNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1JournalRunsJrNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1JournalRunsJrNumberCancelMutationKey() {
  return ['v1', '/v1/journal-runs/:jr-number/cancel', 'PUT'] as const
}

export function getPutV1JournalRunsJrNumberCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1JournalRunsJrNumberCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['cancel']['$put']>,
    ) {
      return parseResponse(client.v1['journal-runs'][':jr-number'].cancel.$put(args, options))
    },
  })
}

export function usePutV1JournalRunsJrNumberCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['cancel']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['cancel']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1JournalRunsJrNumberCancelMutationOptions<
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

export function getV1NotificationHistoryCalloutQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['notification-history']['callout']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/notification-history/callout', keyArgs] as const
}

export function getV1NotificationHistoryCalloutQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['notification-history']['callout']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NotificationHistoryCalloutQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['notification-history'].callout.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NotificationHistoryCallout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['notification-history']['callout']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['notification-history']['callout']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['notification-history']['callout']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['notification-history']['callout']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1NotificationHistoryCalloutQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1)['notification-history']['callout']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationHistoryCalloutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NotificationHistoryCalloutQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['notification-history'].callout.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1NotificationHistoryEmailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['notification-history']['email']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/notification-history/email', keyArgs] as const
}

export function getV1NotificationHistoryEmailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['notification-history']['email']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NotificationHistoryEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['notification-history'].email.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NotificationHistoryEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['notification-history']['email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['notification-history']['email']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['notification-history']['email']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['notification-history']['email']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1NotificationHistoryEmailQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1)['notification-history']['email']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationHistoryEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NotificationHistoryEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['notification-history'].email.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ObjectAccountMutationKey() {
  return ['v1', '/v1/object/account', 'POST'] as const
}

export function getPostV1ObjectAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.account.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.object.account.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.object.account.$post>) {
      return parseResponse(client.v1.object.account.$post(args, options))
    },
  })
}

export function usePostV1ObjectAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.account.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.object.account.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectAccountMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.account)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/account/:id', keyArgs] as const
}

export function getV1ObjectAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.account)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object.account[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.account)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectAccountIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object.account[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectAccountIdMutationKey() {
  return ['v1', '/v1/object/account/:id', 'PUT'] as const
}

export function getPutV1ObjectAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.account)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.account)[':id']['$put']>) {
      return parseResponse(client.v1.object.account[':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.account)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectAccountIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ObjectAccountIdMutationKey() {
  return ['v1', '/v1/object/account/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.account)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.account)[':id']['$delete']>) {
      return parseResponse(client.v1.object.account[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.account)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectAccountIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectAmendmentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.amendment)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/amendment/:id', keyArgs] as const
}

export function getV1ObjectAmendmentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.amendment)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectAmendmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object.amendment[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectAmendmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.amendment)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.amendment)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.amendment)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.amendment)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectAmendmentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object.amendment)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectAmendmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectAmendmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object.amendment[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectAmendmentIdMutationKey() {
  return ['v1', '/v1/object/amendment/:id', 'PUT'] as const
}

export function getPutV1ObjectAmendmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.amendment)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.amendment)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectAmendmentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.amendment)[':id']['$put']>) {
      return parseResponse(client.v1.object.amendment[':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectAmendmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.amendment)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.amendment)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectAmendmentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ObjectAmendmentIdMutationKey() {
  return ['v1', '/v1/object/amendment/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectAmendmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.amendment)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.amendment)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectAmendmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object.amendment)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.object.amendment[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectAmendmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.amendment)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.amendment)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectAmendmentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ObjectBillRunMutationKey() {
  return ['v1', '/v1/object/bill-run', 'POST'] as const
}

export function getPostV1ObjectBillRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object)['bill-run']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['bill-run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectBillRunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object)['bill-run']['$post']>) {
      return parseResponse(client.v1.object['bill-run'].$post(args, options))
    },
  })
}

export function usePostV1ObjectBillRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['bill-run']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['bill-run']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectBillRunMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectBillRunIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/bill-run/:id', keyArgs] as const
}

export function getV1ObjectBillRunIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectBillRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['bill-run'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectBillRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['bill-run'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['bill-run'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['bill-run'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectBillRunIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['bill-run'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectBillRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectBillRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['bill-run'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectBillRunIdMutationKey() {
  return ['v1', '/v1/object/bill-run/:id', 'PUT'] as const
}

export function getPutV1ObjectBillRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['bill-run'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectBillRunIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$put']>) {
      return parseResponse(client.v1.object['bill-run'][':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectBillRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['bill-run'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectBillRunIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ObjectBillRunIdMutationKey() {
  return ['v1', '/v1/object/bill-run/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectBillRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['bill-run'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectBillRunIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1.object['bill-run'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectBillRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['bill-run'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectBillRunIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectCommunicationProfileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['communication-profile'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/communication-profile/:id', keyArgs] as const
}

export function getV1ObjectCommunicationProfileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['communication-profile'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectCommunicationProfileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['communication-profile'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectCommunicationProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['communication-profile'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['communication-profile'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.object)['communication-profile'][':id']['$get']>
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
                  ReturnType<(typeof client.v1.object)['communication-profile'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectCommunicationProfileIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['communication-profile'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectCommunicationProfileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectCommunicationProfileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['communication-profile'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ObjectContactMutationKey() {
  return ['v1', '/v1/object/contact', 'POST'] as const
}

export function getPostV1ObjectContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.contact.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.object.contact.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectContactMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.object.contact.$post>) {
      return parseResponse(client.v1.object.contact.$post(args, options))
    },
  })
}

export function usePostV1ObjectContact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.contact.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.object.contact.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectContactMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectContactIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.contact)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/contact/:id', keyArgs] as const
}

export function getV1ObjectContactIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.contact)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectContactIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object.contact[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.contact)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectContactIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectContactIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectContactIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object.contact[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectContactIdMutationKey() {
  return ['v1', '/v1/object/contact/:id', 'PUT'] as const
}

export function getPutV1ObjectContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.contact)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectContactIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.contact)[':id']['$put']>) {
      return parseResponse(client.v1.object.contact[':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectContactId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.contact)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectContactIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ObjectContactIdMutationKey() {
  return ['v1', '/v1/object/contact/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.contact)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectContactIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.contact)[':id']['$delete']>) {
      return parseResponse(client.v1.object.contact[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectContactId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.contact)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectContactIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ObjectCreditBalanceAdjustmentMutationKey() {
  return ['v1', '/v1/object/credit-balance-adjustment', 'POST'] as const
}

export function getPostV1ObjectCreditBalanceAdjustmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['credit-balance-adjustment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['credit-balance-adjustment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectCreditBalanceAdjustmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['credit-balance-adjustment']['$post']>,
    ) {
      return parseResponse(client.v1.object['credit-balance-adjustment'].$post(args, options))
    },
  })
}

export function usePostV1ObjectCreditBalanceAdjustment<
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
                Awaited<ReturnType<(typeof client.v1.object)['credit-balance-adjustment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['credit-balance-adjustment']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectCreditBalanceAdjustmentMutationOptions<
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

export function getV1ObjectCreditBalanceAdjustmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/credit-balance-adjustment/:id', keyArgs] as const
}

export function getV1ObjectCreditBalanceAdjustmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectCreditBalanceAdjustmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['credit-balance-adjustment'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectCreditBalanceAdjustmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>
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
                  ReturnType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectCreditBalanceAdjustmentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectCreditBalanceAdjustmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectCreditBalanceAdjustmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['credit-balance-adjustment'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectCreditBalanceAdjustmentIdMutationKey() {
  return ['v1', '/v1/object/credit-balance-adjustment/:id', 'PUT'] as const
}

export function getPutV1ObjectCreditBalanceAdjustmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectCreditBalanceAdjustmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$put']>,
    ) {
      return parseResponse(client.v1.object['credit-balance-adjustment'][':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectCreditBalanceAdjustmentId<
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
                  ReturnType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectCreditBalanceAdjustmentIdMutationOptions<
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

export function getPostV1ObjectExportMutationKey() {
  return ['v1', '/v1/object/export', 'POST'] as const
}

export function getPostV1ObjectExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.export.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.object.export.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectExportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.object.export.$post>) {
      return parseResponse(client.v1.object.export.$post(args, options))
    },
  })
}

export function usePostV1ObjectExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.export.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.object.export.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectExportMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectExportIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.export)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/export/:id', keyArgs] as const
}

export function getV1ObjectExportIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.export)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectExportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object.export[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.export)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.export)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.export)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.export)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectExportIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.export)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectExportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectExportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object.export[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ObjectFeatureMutationKey() {
  return ['v1', '/v1/object/feature', 'POST'] as const
}

export function getPostV1ObjectFeatureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.feature.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.object.feature.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectFeatureMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.object.feature.$post>) {
      return parseResponse(client.v1.object.feature.$post(args, options))
    },
  })
}

export function usePostV1ObjectFeature<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.feature.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.object.feature.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectFeatureMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectFeatureIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.feature)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/feature/:id', keyArgs] as const
}

export function getV1ObjectFeatureIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.feature)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectFeatureIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object.feature[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectFeatureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.feature)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectFeatureIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectFeatureIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectFeatureIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object.feature[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectFeatureIdMutationKey() {
  return ['v1', '/v1/object/feature/:id', 'PUT'] as const
}

export function getPutV1ObjectFeatureIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.feature)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectFeatureIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.feature)[':id']['$put']>) {
      return parseResponse(client.v1.object.feature[':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectFeatureId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.feature)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectFeatureIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ObjectFeatureIdMutationKey() {
  return ['v1', '/v1/object/feature/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectFeatureIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.feature)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectFeatureIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.feature)[':id']['$delete']>) {
      return parseResponse(client.v1.object.feature[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectFeatureId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.feature)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectFeatureIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ObjectImportMutationKey() {
  return ['v1', '/v1/object/import', 'POST'] as const
}

export function getPostV1ObjectImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.object.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.object.import.$post>) {
      return parseResponse(client.v1.object.import.$post(args, options))
    },
  })
}

export function usePostV1ObjectImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.object.import.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectImportMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectImportIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.import)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/import/:id', keyArgs] as const
}

export function getV1ObjectImportIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.import)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectImportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object.import[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectImportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.import)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.import)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.import)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.import)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectImportIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.import)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectImportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectImportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object.import[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ObjectInvoiceAdjustmentMutationKey() {
  return ['v1', '/v1/object/invoice-adjustment', 'POST'] as const
}

export function getPostV1ObjectInvoiceAdjustmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['invoice-adjustment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectInvoiceAdjustmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['invoice-adjustment']['$post']>,
    ) {
      return parseResponse(client.v1.object['invoice-adjustment'].$post(args, options))
    },
  })
}

export function usePostV1ObjectInvoiceAdjustment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['invoice-adjustment']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectInvoiceAdjustmentMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectInvoiceAdjustmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/invoice-adjustment/:id', keyArgs] as const
}

export function getV1ObjectInvoiceAdjustmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectInvoiceAdjustmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['invoice-adjustment'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectInvoiceAdjustmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectInvoiceAdjustmentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectInvoiceAdjustmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectInvoiceAdjustmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['invoice-adjustment'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectInvoiceAdjustmentIdMutationKey() {
  return ['v1', '/v1/object/invoice-adjustment/:id', 'PUT'] as const
}

export function getPutV1ObjectInvoiceAdjustmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectInvoiceAdjustmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$put']>,
    ) {
      return parseResponse(client.v1.object['invoice-adjustment'][':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectInvoiceAdjustmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectInvoiceAdjustmentIdMutationOptions<
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

export function getDeleteV1ObjectInvoiceAdjustmentIdMutationKey() {
  return ['v1', '/v1/object/invoice-adjustment/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectInvoiceAdjustmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectInvoiceAdjustmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1.object['invoice-adjustment'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectInvoiceAdjustmentId<
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
                  ReturnType<(typeof client.v1.object)['invoice-adjustment'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectInvoiceAdjustmentIdMutationOptions<
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

export function getV1ObjectInvoiceItemAdjustmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/invoice-item-adjustment/:id', keyArgs] as const
}

export function getV1ObjectInvoiceItemAdjustmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectInvoiceItemAdjustmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['invoice-item-adjustment'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectInvoiceItemAdjustmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>
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
                  ReturnType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectInvoiceItemAdjustmentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectInvoiceItemAdjustmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectInvoiceItemAdjustmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['invoice-item-adjustment'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ObjectInvoiceItemAdjustmentIdMutationKey() {
  return ['v1', '/v1/object/invoice-item-adjustment/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectInvoiceItemAdjustmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectInvoiceItemAdjustmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.object)['invoice-item-adjustment'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.object['invoice-item-adjustment'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ObjectInvoiceItemAdjustmentId<
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
                  ReturnType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectInvoiceItemAdjustmentIdMutationOptions<
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

export function getV1ObjectInvoiceItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-item'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/invoice-item/:id', keyArgs] as const
}

export function getV1ObjectInvoiceItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-item'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectInvoiceItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['invoice-item'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectInvoiceItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-item'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-item'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['invoice-item'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['invoice-item'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectInvoiceItemIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['invoice-item'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectInvoiceItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectInvoiceItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['invoice-item'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ObjectInvoicePaymentMutationKey() {
  return ['v1', '/v1/object/invoice-payment', 'POST'] as const
}

export function getPostV1ObjectInvoicePaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['invoice-payment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['invoice-payment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectInvoicePaymentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['invoice-payment']['$post']>,
    ) {
      return parseResponse(client.v1.object['invoice-payment'].$post(args, options))
    },
  })
}

export function usePostV1ObjectInvoicePayment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['invoice-payment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['invoice-payment']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectInvoicePaymentMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectInvoicePaymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/invoice-payment/:id', keyArgs] as const
}

export function getV1ObjectInvoicePaymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectInvoicePaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['invoice-payment'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectInvoicePaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectInvoicePaymentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectInvoicePaymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectInvoicePaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['invoice-payment'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectInvoicePaymentIdMutationKey() {
  return ['v1', '/v1/object/invoice-payment/:id', 'PUT'] as const
}

export function getPutV1ObjectInvoicePaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['invoice-payment'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['invoice-payment'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectInvoicePaymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['invoice-payment'][':id']['$put']>,
    ) {
      return parseResponse(client.v1.object['invoice-payment'][':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectInvoicePaymentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['invoice-payment'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['invoice-payment'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectInvoicePaymentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectInvoiceSplitItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/invoice-split-item/:id', keyArgs] as const
}

export function getV1ObjectInvoiceSplitItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectInvoiceSplitItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['invoice-split-item'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectInvoiceSplitItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectInvoiceSplitItemIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectInvoiceSplitItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectInvoiceSplitItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['invoice-split-item'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObjectInvoiceSplitIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-split'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/invoice-split/:id', keyArgs] as const
}

export function getV1ObjectInvoiceSplitIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-split'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectInvoiceSplitIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['invoice-split'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectInvoiceSplitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-split'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['invoice-split'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['invoice-split'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['invoice-split'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectInvoiceSplitIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['invoice-split'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectInvoiceSplitIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectInvoiceSplitIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['invoice-split'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObjectInvoiceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.invoice)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/invoice/:id', keyArgs] as const
}

export function getV1ObjectInvoiceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.invoice)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectInvoiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object.invoice[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.invoice)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectInvoiceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectInvoiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectInvoiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object.invoice[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectInvoiceIdMutationKey() {
  return ['v1', '/v1/object/invoice/:id', 'PUT'] as const
}

export function getPutV1ObjectInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.invoice)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectInvoiceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.invoice)[':id']['$put']>) {
      return parseResponse(client.v1.object.invoice[':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectInvoiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.invoice)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectInvoiceIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ObjectInvoiceIdMutationKey() {
  return ['v1', '/v1/object/invoice/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.invoice)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectInvoiceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.invoice)[':id']['$delete']>) {
      return parseResponse(client.v1.object.invoice[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectInvoiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.invoice)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectInvoiceIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ObjectPaymentMutationKey() {
  return ['v1', '/v1/object/payment', 'POST'] as const
}

export function getPostV1ObjectPaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.payment.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.object.payment.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectPaymentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.object.payment.$post>) {
      return parseResponse(client.v1.object.payment.$post(args, options))
    },
  })
}

export function usePostV1ObjectPayment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.payment.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.object.payment.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectPaymentMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ObjectPaymentMethodMutationKey() {
  return ['v1', '/v1/object/payment-method', 'POST'] as const
}

export function getPostV1ObjectPaymentMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['payment-method']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['payment-method']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectPaymentMethodMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object)['payment-method']['$post']>) {
      return parseResponse(client.v1.object['payment-method'].$post(args, options))
    },
  })
}

export function usePostV1ObjectPaymentMethod<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['payment-method']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['payment-method']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectPaymentMethodMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectPaymentMethodSnapshotIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/payment-method-snapshot/:id', keyArgs] as const
}

export function getV1ObjectPaymentMethodSnapshotIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectPaymentMethodSnapshotIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['payment-method-snapshot'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectPaymentMethodSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>
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
                  ReturnType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectPaymentMethodSnapshotIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectPaymentMethodSnapshotIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectPaymentMethodSnapshotIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['payment-method-snapshot'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObjectPaymentMethodTransactionLogIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/payment-method-transaction-log/:id', keyArgs] as const
}

export function getV1ObjectPaymentMethodTransactionLogIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectPaymentMethodTransactionLogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['payment-method-transaction-log'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectPaymentMethodTransactionLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']>
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
                    (typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']
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
                    (typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectPaymentMethodTransactionLogIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectPaymentMethodTransactionLogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectPaymentMethodTransactionLogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['payment-method-transaction-log'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObjectPaymentMethodIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/payment-method/:id', keyArgs] as const
}

export function getV1ObjectPaymentMethodIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectPaymentMethodIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['payment-method'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectPaymentMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['payment-method'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['payment-method'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['payment-method'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectPaymentMethodIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['payment-method'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectPaymentMethodIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectPaymentMethodIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['payment-method'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectPaymentMethodIdMutationKey() {
  return ['v1', '/v1/object/payment-method/:id', 'PUT'] as const
}

export function getPutV1ObjectPaymentMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['payment-method'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectPaymentMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$put']>,
    ) {
      return parseResponse(client.v1.object['payment-method'][':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectPaymentMethodId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['payment-method'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectPaymentMethodIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ObjectPaymentMethodIdMutationKey() {
  return ['v1', '/v1/object/payment-method/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectPaymentMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['payment-method'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectPaymentMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1.object['payment-method'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectPaymentMethodId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['payment-method'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectPaymentMethodIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectPaymentTransactionLogIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/payment-transaction-log/:id', keyArgs] as const
}

export function getV1ObjectPaymentTransactionLogIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectPaymentTransactionLogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['payment-transaction-log'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectPaymentTransactionLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>
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
                  ReturnType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectPaymentTransactionLogIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectPaymentTransactionLogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectPaymentTransactionLogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['payment-transaction-log'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObjectPaymentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.payment)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/payment/:id', keyArgs] as const
}

export function getV1ObjectPaymentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.payment)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectPaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object.payment[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.payment)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectPaymentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectPaymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectPaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object.payment[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectPaymentIdMutationKey() {
  return ['v1', '/v1/object/payment/:id', 'PUT'] as const
}

export function getPutV1ObjectPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.payment)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectPaymentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.payment)[':id']['$put']>) {
      return parseResponse(client.v1.object.payment[':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectPaymentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.payment)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectPaymentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ObjectPaymentIdMutationKey() {
  return ['v1', '/v1/object/payment/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.payment)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectPaymentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.payment)[':id']['$delete']>) {
      return parseResponse(client.v1.object.payment[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectPaymentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.payment)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectPaymentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ObjectProductMutationKey() {
  return ['v1', '/v1/object/product', 'POST'] as const
}

export function getPostV1ObjectProductMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.product.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.object.product.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectProductMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.object.product.$post>) {
      return parseResponse(client.v1.object.product.$post(args, options))
    },
  })
}

export function usePostV1ObjectProduct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.product.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.object.product.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectProductMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectProductFeatureIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['product-feature'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/product-feature/:id', keyArgs] as const
}

export function getV1ObjectProductFeatureIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['product-feature'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectProductFeatureIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['product-feature'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectProductFeatureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['product-feature'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['product-feature'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['product-feature'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['product-feature'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectProductFeatureIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['product-feature'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectProductFeatureIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectProductFeatureIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['product-feature'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ObjectProductFeatureIdMutationKey() {
  return ['v1', '/v1/object/product-feature/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectProductFeatureIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['product-feature'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['product-feature'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectProductFeatureIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['product-feature'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1.object['product-feature'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectProductFeatureId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['product-feature'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['product-feature'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectProductFeatureIdMutationOptions<
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

export function getPostV1ObjectProductRatePlanMutationKey() {
  return ['v1', '/v1/object/product-rate-plan', 'POST'] as const
}

export function getPostV1ObjectProductRatePlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['product-rate-plan']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectProductRatePlanMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['product-rate-plan']['$post']>,
    ) {
      return parseResponse(client.v1.object['product-rate-plan'].$post(args, options))
    },
  })
}

export function usePostV1ObjectProductRatePlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['product-rate-plan']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectProductRatePlanMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ObjectProductRatePlanChargeMutationKey() {
  return ['v1', '/v1/object/product-rate-plan-charge', 'POST'] as const
}

export function getPostV1ObjectProductRatePlanChargeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan-charge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['product-rate-plan-charge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectProductRatePlanChargeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge']['$post']>,
    ) {
      return parseResponse(client.v1.object['product-rate-plan-charge'].$post(args, options))
    },
  })
}

export function usePostV1ObjectProductRatePlanCharge<
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
                Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan-charge']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['product-rate-plan-charge']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectProductRatePlanChargeMutationOptions<
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

export function getV1ObjectProductRatePlanChargeTierIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/product-rate-plan-charge-tier/:id', keyArgs] as const
}

export function getV1ObjectProductRatePlanChargeTierIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectProductRatePlanChargeTierIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['product-rate-plan-charge-tier'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectProductRatePlanChargeTierId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']>
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
                    (typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']
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
                    (typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectProductRatePlanChargeTierIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectProductRatePlanChargeTierIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectProductRatePlanChargeTierIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['product-rate-plan-charge-tier'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectProductRatePlanChargeTierIdMutationKey() {
  return ['v1', '/v1/object/product-rate-plan-charge-tier/:id', 'PUT'] as const
}

export function getPutV1ObjectProductRatePlanChargeTierIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectProductRatePlanChargeTierIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.object['product-rate-plan-charge-tier'][':id'].$put(args, options),
      )
    },
  })
}

export function usePutV1ObjectProductRatePlanChargeTierId<
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
                    (typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$put']
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
  const mutationDefaults = getPutV1ObjectProductRatePlanChargeTierIdMutationOptions<
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

export function getV1ObjectProductRatePlanChargeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/product-rate-plan-charge/:id', keyArgs] as const
}

export function getV1ObjectProductRatePlanChargeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectProductRatePlanChargeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['product-rate-plan-charge'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectProductRatePlanChargeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>
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
                  ReturnType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectProductRatePlanChargeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectProductRatePlanChargeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectProductRatePlanChargeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['product-rate-plan-charge'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectProductRatePlanChargeIdMutationKey() {
  return ['v1', '/v1/object/product-rate-plan-charge/:id', 'PUT'] as const
}

export function getPutV1ObjectProductRatePlanChargeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectProductRatePlanChargeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$put']>,
    ) {
      return parseResponse(client.v1.object['product-rate-plan-charge'][':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectProductRatePlanChargeId<
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
                  ReturnType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectProductRatePlanChargeIdMutationOptions<
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

export function getDeleteV1ObjectProductRatePlanChargeIdMutationKey() {
  return ['v1', '/v1/object/product-rate-plan-charge/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectProductRatePlanChargeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectProductRatePlanChargeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.object)['product-rate-plan-charge'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.object['product-rate-plan-charge'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ObjectProductRatePlanChargeId<
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
                    (typeof client.v1.object)['product-rate-plan-charge'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectProductRatePlanChargeIdMutationOptions<
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

export function getV1ObjectProductRatePlanIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/product-rate-plan/:id', keyArgs] as const
}

export function getV1ObjectProductRatePlanIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectProductRatePlanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['product-rate-plan'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectProductRatePlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectProductRatePlanIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectProductRatePlanIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectProductRatePlanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['product-rate-plan'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectProductRatePlanIdMutationKey() {
  return ['v1', '/v1/object/product-rate-plan/:id', 'PUT'] as const
}

export function getPutV1ObjectProductRatePlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectProductRatePlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$put']>,
    ) {
      return parseResponse(client.v1.object['product-rate-plan'][':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectProductRatePlanId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectProductRatePlanIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ObjectProductRatePlanIdMutationKey() {
  return ['v1', '/v1/object/product-rate-plan/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectProductRatePlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectProductRatePlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1.object['product-rate-plan'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectProductRatePlanId<
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
                  ReturnType<(typeof client.v1.object)['product-rate-plan'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectProductRatePlanIdMutationOptions<
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

export function getV1ObjectProductIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.product)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/product/:id', keyArgs] as const
}

export function getV1ObjectProductIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.product)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object.product[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.product)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectProductIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object.product[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectProductIdMutationKey() {
  return ['v1', '/v1/object/product/:id', 'PUT'] as const
}

export function getPutV1ObjectProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.product)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectProductIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.product)[':id']['$put']>) {
      return parseResponse(client.v1.object.product[':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectProductId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.product)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectProductIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ObjectProductIdMutationKey() {
  return ['v1', '/v1/object/product/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.product)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectProductIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.product)[':id']['$delete']>) {
      return parseResponse(client.v1.object.product[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectProductId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.product)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectProductIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectRatePlanChargeTierIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/rate-plan-charge-tier/:id', keyArgs] as const
}

export function getV1ObjectRatePlanChargeTierIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectRatePlanChargeTierIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['rate-plan-charge-tier'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectRatePlanChargeTierId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>
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
                  ReturnType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectRatePlanChargeTierIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectRatePlanChargeTierIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectRatePlanChargeTierIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['rate-plan-charge-tier'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObjectRatePlanChargeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/rate-plan-charge/:id', keyArgs] as const
}

export function getV1ObjectRatePlanChargeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectRatePlanChargeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['rate-plan-charge'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectRatePlanChargeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectRatePlanChargeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectRatePlanChargeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectRatePlanChargeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['rate-plan-charge'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectRatePlanChargeIdMutationKey() {
  return ['v1', '/v1/object/rate-plan-charge/:id', 'PUT'] as const
}

export function getPutV1ObjectRatePlanChargeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['rate-plan-charge'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectRatePlanChargeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['rate-plan-charge'][':id']['$put']>,
    ) {
      return parseResponse(client.v1.object['rate-plan-charge'][':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectRatePlanChargeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['rate-plan-charge'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectRatePlanChargeIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectRatePlanIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object)['rate-plan'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/rate-plan/:id', keyArgs] as const
}

export function getV1ObjectRatePlanIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object)['rate-plan'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectRatePlanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['rate-plan'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectRatePlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['rate-plan'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object)['rate-plan'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['rate-plan'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['rate-plan'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectRatePlanIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['rate-plan'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectRatePlanIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectRatePlanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['rate-plan'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ObjectRefundMutationKey() {
  return ['v1', '/v1/object/refund', 'POST'] as const
}

export function getPostV1ObjectRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.refund.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.object.refund.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectRefundMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.object.refund.$post>) {
      return parseResponse(client.v1.object.refund.$post(args, options))
    },
  })
}

export function usePostV1ObjectRefund<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.refund.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.object.refund.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectRefundMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectRefundInvoicePaymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/refund-invoice-payment/:id', keyArgs] as const
}

export function getV1ObjectRefundInvoicePaymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectRefundInvoicePaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['refund-invoice-payment'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectRefundInvoicePaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>
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
                  ReturnType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectRefundInvoicePaymentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectRefundInvoicePaymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectRefundInvoicePaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['refund-invoice-payment'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObjectRefundTransactionLogIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/refund-transaction-log/:id', keyArgs] as const
}

export function getV1ObjectRefundTransactionLogIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectRefundTransactionLogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['refund-transaction-log'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectRefundTransactionLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>
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
                  ReturnType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectRefundTransactionLogIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectRefundTransactionLogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectRefundTransactionLogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['refund-transaction-log'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObjectRefundIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.refund)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/refund/:id', keyArgs] as const
}

export function getV1ObjectRefundIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.refund)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectRefundIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object.refund[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectRefundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.refund)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectRefundIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectRefundIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectRefundIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object.refund[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectRefundIdMutationKey() {
  return ['v1', '/v1/object/refund/:id', 'PUT'] as const
}

export function getPutV1ObjectRefundIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.refund)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectRefundIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.refund)[':id']['$put']>) {
      return parseResponse(client.v1.object.refund[':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectRefundId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.refund)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectRefundIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ObjectRefundIdMutationKey() {
  return ['v1', '/v1/object/refund/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectRefundIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.refund)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectRefundIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.refund)[':id']['$delete']>) {
      return parseResponse(client.v1.object.refund[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectRefundId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.refund)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectRefundIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectSubscriptionProductFeatureIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['subscription-product-feature'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/subscription-product-feature/:id', keyArgs] as const
}

export function getV1ObjectSubscriptionProductFeatureIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['subscription-product-feature'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectSubscriptionProductFeatureIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['subscription-product-feature'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectSubscriptionProductFeatureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.object)['subscription-product-feature'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['subscription-product-feature'][':id']['$get']>
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
                    (typeof client.v1.object)['subscription-product-feature'][':id']['$get']
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
                    (typeof client.v1.object)['subscription-product-feature'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectSubscriptionProductFeatureIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1.object)['subscription-product-feature'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectSubscriptionProductFeatureIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectSubscriptionProductFeatureIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['subscription-product-feature'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObjectSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.subscription)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/subscription/:id', keyArgs] as const
}

export function getV1ObjectSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.subscription)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object.subscription[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object.subscription)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.subscription)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.subscription)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.subscription)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectSubscriptionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object.subscription)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object.subscription[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectSubscriptionIdMutationKey() {
  return ['v1', '/v1/object/subscription/:id', 'PUT'] as const
}

export function getPutV1ObjectSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.subscription)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.subscription)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object.subscription)[':id']['$put']>,
    ) {
      return parseResponse(client.v1.object.subscription[':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectSubscriptionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.subscription)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.subscription)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectSubscriptionIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ObjectSubscriptionIdMutationKey() {
  return ['v1', '/v1/object/subscription/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.subscription)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.subscription)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object.subscription)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.object.subscription[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectSubscriptionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.subscription)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.subscription)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectSubscriptionIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ObjectTaxationItemMutationKey() {
  return ['v1', '/v1/object/taxation-item', 'POST'] as const
}

export function getPostV1ObjectTaxationItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['taxation-item']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['taxation-item']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectTaxationItemMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object)['taxation-item']['$post']>) {
      return parseResponse(client.v1.object['taxation-item'].$post(args, options))
    },
  })
}

export function usePostV1ObjectTaxationItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['taxation-item']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['taxation-item']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectTaxationItemMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectTaxationItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/taxation-item/:id', keyArgs] as const
}

export function getV1ObjectTaxationItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectTaxationItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['taxation-item'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectTaxationItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['taxation-item'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['taxation-item'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['taxation-item'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectTaxationItemIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['taxation-item'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectTaxationItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectTaxationItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['taxation-item'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectTaxationItemIdMutationKey() {
  return ['v1', '/v1/object/taxation-item/:id', 'PUT'] as const
}

export function getPutV1ObjectTaxationItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['taxation-item'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectTaxationItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$put']>,
    ) {
      return parseResponse(client.v1.object['taxation-item'][':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectTaxationItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['taxation-item'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectTaxationItemIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ObjectTaxationItemIdMutationKey() {
  return ['v1', '/v1/object/taxation-item/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectTaxationItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['taxation-item'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectTaxationItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1.object['taxation-item'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectTaxationItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['taxation-item'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectTaxationItemIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ObjectUnitOfMeasureMutationKey() {
  return ['v1', '/v1/object/unit-of-measure', 'POST'] as const
}

export function getPostV1ObjectUnitOfMeasureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['unit-of-measure']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectUnitOfMeasureMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['unit-of-measure']['$post']>,
    ) {
      return parseResponse(client.v1.object['unit-of-measure'].$post(args, options))
    },
  })
}

export function usePostV1ObjectUnitOfMeasure<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['unit-of-measure']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectUnitOfMeasureMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectUnitOfMeasureIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/unit-of-measure/:id', keyArgs] as const
}

export function getV1ObjectUnitOfMeasureIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectUnitOfMeasureIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object['unit-of-measure'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectUnitOfMeasureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectUnitOfMeasureIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectUnitOfMeasureIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectUnitOfMeasureIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object['unit-of-measure'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectUnitOfMeasureIdMutationKey() {
  return ['v1', '/v1/object/unit-of-measure/:id', 'PUT'] as const
}

export function getPutV1ObjectUnitOfMeasureIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectUnitOfMeasureIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$put']>,
    ) {
      return parseResponse(client.v1.object['unit-of-measure'][':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectUnitOfMeasureId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectUnitOfMeasureIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ObjectUnitOfMeasureIdMutationKey() {
  return ['v1', '/v1/object/unit-of-measure/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectUnitOfMeasureIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectUnitOfMeasureIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1.object['unit-of-measure'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectUnitOfMeasureId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectUnitOfMeasureIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ObjectUsageMutationKey() {
  return ['v1', '/v1/object/usage', 'POST'] as const
}

export function getPostV1ObjectUsageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.usage.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.object.usage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectUsageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.object.usage.$post>) {
      return parseResponse(client.v1.object.usage.$post(args, options))
    },
  })
}

export function usePostV1ObjectUsage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.usage.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.object.usage.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ObjectUsageMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObjectUsageIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.usage)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/object/usage/:id', keyArgs] as const
}

export function getV1ObjectUsageIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.usage)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectUsageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.object.usage[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectUsageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.object.usage)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectUsageIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectUsageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectUsageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.object.usage[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectUsageIdMutationKey() {
  return ['v1', '/v1/object/usage/:id', 'PUT'] as const
}

export function getPutV1ObjectUsageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.usage)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectUsageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.usage)[':id']['$put']>) {
      return parseResponse(client.v1.object.usage[':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectUsageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.usage)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ObjectUsageIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ObjectUsageIdMutationKey() {
  return ['v1', '/v1/object/usage/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectUsageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.object.usage)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectUsageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.object.usage)[':id']['$delete']>) {
      return parseResponse(client.v1.object.usage[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectUsageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.object.usage)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ObjectUsageIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1OperationsBillingPreviewMutationKey() {
  return ['v1', '/v1/operations/billing-preview', 'POST'] as const
}

export function getPostV1OperationsBillingPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.operations)['billing-preview']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.operations)['billing-preview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OperationsBillingPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.operations)['billing-preview']['$post']>,
    ) {
      return parseResponse(client.v1.operations['billing-preview'].$post(args, options))
    },
  })
}

export function usePostV1OperationsBillingPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.operations)['billing-preview']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.operations)['billing-preview']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OperationsBillingPreviewMutationOptions<
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

export function getPostV1OperationsInvoiceCollectMutationKey() {
  return ['v1', '/v1/operations/invoice-collect', 'POST'] as const
}

export function getPostV1OperationsInvoiceCollectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.operations)['invoice-collect']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.operations)['invoice-collect']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OperationsInvoiceCollectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.operations)['invoice-collect']['$post']>,
    ) {
      return parseResponse(client.v1.operations['invoice-collect'].$post(args, options))
    },
  })
}

export function usePostV1OperationsInvoiceCollect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.operations)['invoice-collect']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.operations)['invoice-collect']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OperationsInvoiceCollectMutationOptions<
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

export function getPostV1OrderLineItemsBulkMutationKey() {
  return ['v1', '/v1/order-line-items/bulk', 'POST'] as const
}

export function getPostV1OrderLineItemsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['order-line-items']['bulk']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['order-line-items']['bulk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrderLineItemsBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['order-line-items']['bulk']['$post']>,
    ) {
      return parseResponse(client.v1['order-line-items'].bulk.$post(args, options))
    },
  })
}

export function usePostV1OrderLineItemsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['order-line-items']['bulk']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['order-line-items']['bulk']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OrderLineItemsBulkMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1OrderLineItemsItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['order-line-items'][':itemId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/order-line-items/:itemId', keyArgs] as const
}

export function getV1OrderLineItemsItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['order-line-items'][':itemId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrderLineItemsItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['order-line-items'][':itemId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrderLineItemsItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['order-line-items'][':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['order-line-items'][':itemId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['order-line-items'][':itemId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['order-line-items'][':itemId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1OrderLineItemsItemIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1)['order-line-items'][':itemId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrderLineItemsItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrderLineItemsItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['order-line-items'][':itemId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1OrderLineItemsItemIdMutationKey() {
  return ['v1', '/v1/order-line-items/:itemId', 'PUT'] as const
}

export function getPutV1OrderLineItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['order-line-items'][':itemId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['order-line-items'][':itemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1OrderLineItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['order-line-items'][':itemId']['$put']>,
    ) {
      return parseResponse(client.v1['order-line-items'][':itemId'].$put(args, options))
    },
  })
}

export function usePutV1OrderLineItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['order-line-items'][':itemId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['order-line-items'][':itemId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1OrderLineItemsItemIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1OrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.orders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/orders', keyArgs] as const
}

export function getV1OrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.orders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Orders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>
          >,
          ReturnType<typeof getV1OrdersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1OrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrdersMutationKey() {
  return ['v1', '/v1/orders', 'POST'] as const
}

export function getPostV1OrdersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.orders.$post>) {
      return parseResponse(client.v1.orders.$post(args, options))
    },
  })
}

export function usePostV1Orders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.orders.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OrdersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1OrdersInvoiceOwnerAccountNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/orders/invoiceOwner/:accountNumber', keyArgs] as const
}

export function getV1OrdersInvoiceOwnerAccountNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrdersInvoiceOwnerAccountNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.orders.invoiceOwner[':accountNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrdersInvoiceOwnerAccountNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>
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
                  ReturnType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1OrdersInvoiceOwnerAccountNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrdersInvoiceOwnerAccountNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrdersInvoiceOwnerAccountNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.orders.invoiceOwner[':accountNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrdersPreviewMutationKey() {
  return ['v1', '/v1/orders/preview', 'POST'] as const
}

export function getPostV1OrdersPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.preview.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.orders.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrdersPreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.orders.preview.$post>) {
      return parseResponse(client.v1.orders.preview.$post(args, options))
    },
  })
}

export function usePostV1OrdersPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.preview.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.orders.preview.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OrdersPreviewMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1OrdersSubscriptionSubscriptionNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/orders/subscription/:subscriptionNumber', keyArgs] as const
}

export function getV1OrdersSubscriptionSubscriptionNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrdersSubscriptionSubscriptionNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.orders.subscription[':subscriptionNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrdersSubscriptionSubscriptionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>
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
                  ReturnType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1OrdersSubscriptionSubscriptionNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrdersSubscriptionSubscriptionNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrdersSubscriptionSubscriptionNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.orders.subscription[':subscriptionNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrdersSubscriptionOwnerAccountNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/orders/subscriptionOwner/:accountNumber', keyArgs] as const
}

export function getV1OrdersSubscriptionOwnerAccountNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrdersSubscriptionOwnerAccountNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.orders.subscriptionOwner[':accountNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrdersSubscriptionOwnerAccountNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>
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
                  ReturnType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1OrdersSubscriptionOwnerAccountNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrdersSubscriptionOwnerAccountNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrdersSubscriptionOwnerAccountNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.orders.subscriptionOwner[':accountNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrdersTermSubscriptionNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/orders/term/:subscriptionNumber', keyArgs] as const
}

export function getV1OrdersTermSubscriptionNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrdersTermSubscriptionNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.orders.term[':subscriptionNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrdersTermSubscriptionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1OrdersTermSubscriptionNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrdersTermSubscriptionNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrdersTermSubscriptionNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.orders.term[':subscriptionNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrdersOrderNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.orders)[':orderNumber']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/orders/:orderNumber', keyArgs] as const
}

export function getV1OrdersOrderNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.orders)[':orderNumber']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrdersOrderNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.orders[':orderNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrdersOrderNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.orders)[':orderNumber']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1OrdersOrderNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrdersOrderNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrdersOrderNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.orders[':orderNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1OrdersOrderNumberMutationKey() {
  return ['v1', '/v1/orders/:orderNumber', 'DELETE'] as const
}

export function getDeleteV1OrdersOrderNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.orders)[':orderNumber']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1OrdersOrderNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['$delete']>) {
      return parseResponse(client.v1.orders[':orderNumber'].$delete(args, options))
    },
  })
}

export function useDeleteV1OrdersOrderNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.orders)[':orderNumber']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1OrdersOrderNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1OrdersOrderNumberCustomFieldsMutationKey() {
  return ['v1', '/v1/orders/:orderNumber/customFields', 'PUT'] as const
}

export function getPutV1OrdersOrderNumberCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['customFields']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.orders)[':orderNumber']['customFields']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1OrdersOrderNumberCustomFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['customFields']['$put']>,
    ) {
      return parseResponse(client.v1.orders[':orderNumber'].customFields.$put(args, options))
    },
  })
}

export function usePutV1OrdersOrderNumberCustomFields<
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
                  ReturnType<(typeof client.v1.orders)[':orderNumber']['customFields']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.orders)[':orderNumber']['customFields']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1OrdersOrderNumberCustomFieldsMutationOptions<
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

export function getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.orders)[':orderNumber']['evergreenMetrics'][':subscriptionNumber']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/orders/:orderNumber/evergreenMetrics/:subscriptionNumber', keyArgs] as const
}

export function getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.orders)[':orderNumber']['evergreenMetrics'][':subscriptionNumber']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.orders[':orderNumber'].evergreenMetrics[':subscriptionNumber'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrdersOrderNumberEvergreenMetricsSubscriptionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.orders)[':orderNumber']['evergreenMetrics'][':subscriptionNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.orders)[':orderNumber']['evergreenMetrics'][':subscriptionNumber']['$get']
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
                    (typeof client.v1.orders)[':orderNumber']['evergreenMetrics'][':subscriptionNumber']['$get']
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
                    (typeof client.v1.orders)[':orderNumber']['evergreenMetrics'][':subscriptionNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1.orders)[':orderNumber']['evergreenMetrics'][':subscriptionNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.orders[':orderNumber'].evergreenMetrics[':subscriptionNumber'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrdersOrderNumberRampMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/orders/:orderNumber/ramp-metrics', keyArgs] as const
}

export function getV1OrdersOrderNumberRampMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrdersOrderNumberRampMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.orders[':orderNumber']['ramp-metrics'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrdersOrderNumberRampMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>
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
                  ReturnType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1OrdersOrderNumberRampMetricsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrdersOrderNumberRampMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrdersOrderNumberRampMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.orders[':orderNumber']['ramp-metrics'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1OrdersOrderNumberTriggerDatesMutationKey() {
  return ['v1', '/v1/orders/:orderNumber/triggerDates', 'PUT'] as const
}

export function getPutV1OrdersOrderNumberTriggerDatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['triggerDates']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.orders)[':orderNumber']['triggerDates']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1OrdersOrderNumberTriggerDatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['triggerDates']['$put']>,
    ) {
      return parseResponse(client.v1.orders[':orderNumber'].triggerDates.$put(args, options))
    },
  })
}

export function usePutV1OrdersOrderNumberTriggerDates<
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
                  ReturnType<(typeof client.v1.orders)[':orderNumber']['triggerDates']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.orders)[':orderNumber']['triggerDates']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1OrdersOrderNumberTriggerDatesMutationOptions<
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

export function getPostV1PaymentMethodsMutationKey() {
  return ['v1', '/v1/payment-methods', 'POST'] as const
}

export function getPostV1PaymentMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-methods']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['payment-methods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentMethodsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['payment-methods']['$post']>) {
      return parseResponse(client.v1['payment-methods'].$post(args, options))
    },
  })
}

export function usePostV1PaymentMethods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['payment-methods']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['payment-methods']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PaymentMethodsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1PaymentMethodsCreditCardsMutationKey() {
  return ['v1', '/v1/payment-methods/credit-cards', 'POST'] as const
}

export function getPostV1PaymentMethodsCreditCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['payment-methods']['credit-cards']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['payment-methods']['credit-cards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentMethodsCreditCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['payment-methods']['credit-cards']['$post']>,
    ) {
      return parseResponse(client.v1['payment-methods']['credit-cards'].$post(args, options))
    },
  })
}

export function usePostV1PaymentMethodsCreditCards<
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
                Awaited<ReturnType<(typeof client.v1)['payment-methods']['credit-cards']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['payment-methods']['credit-cards']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PaymentMethodsCreditCardsMutationOptions<
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

export function getV1PaymentMethodsCreditCardsAccountsAccountKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['payment-methods']['credit-cards']['accounts'][':account-key']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/payment-methods/credit-cards/accounts/:account-key', keyArgs] as const
}

export function getV1PaymentMethodsCreditCardsAccountsAccountKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['payment-methods']['credit-cards']['accounts'][':account-key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentMethodsCreditCardsAccountsAccountKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['payment-methods']['credit-cards'].accounts[':account-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentMethodsCreditCardsAccountsAccountKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['payment-methods']['credit-cards']['accounts'][':account-key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['payment-methods']['credit-cards']['accounts'][':account-key']['$get']
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
                    (typeof client.v1)['payment-methods']['credit-cards']['accounts'][':account-key']['$get']
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
                    (typeof client.v1)['payment-methods']['credit-cards']['accounts'][':account-key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PaymentMethodsCreditCardsAccountsAccountKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1)['payment-methods']['credit-cards']['accounts'][':account-key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentMethodsCreditCardsAccountsAccountKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentMethodsCreditCardsAccountsAccountKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['payment-methods']['credit-cards'].accounts[':account-key'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PaymentMethodsCreditCardsPaymentMethodIdMutationKey() {
  return ['v1', '/v1/payment-methods/credit-cards/:payment-method-id', 'PUT'] as const
}

export function getPutV1PaymentMethodsCreditCardsPaymentMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['payment-methods']['credit-cards'][':payment-method-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['payment-methods']['credit-cards'][':payment-method-id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1PaymentMethodsCreditCardsPaymentMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['payment-methods']['credit-cards'][':payment-method-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['payment-methods']['credit-cards'][':payment-method-id'].$put(args, options),
      )
    },
  })
}

export function usePutV1PaymentMethodsCreditCardsPaymentMethodId<
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
                    (typeof client.v1)['payment-methods']['credit-cards'][':payment-method-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['payment-methods']['credit-cards'][':payment-method-id']['$put']
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
  const mutationDefaults = getPutV1PaymentMethodsCreditCardsPaymentMethodIdMutationOptions<
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

export function getPostV1PaymentMethodsDecryptionMutationKey() {
  return ['v1', '/v1/payment-methods/decryption', 'POST'] as const
}

export function getPostV1PaymentMethodsDecryptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['payment-methods']['decryption']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['payment-methods']['decryption']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentMethodsDecryptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['payment-methods']['decryption']['$post']>,
    ) {
      return parseResponse(client.v1['payment-methods'].decryption.$post(args, options))
    },
  })
}

export function usePostV1PaymentMethodsDecryption<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['payment-methods']['decryption']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['payment-methods']['decryption']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PaymentMethodsDecryptionMutationOptions<
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

export function getV1PaymentMethodsPaymentMethodIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/payment-methods/:payment-method-id', keyArgs] as const
}

export function getV1PaymentMethodsPaymentMethodIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentMethodsPaymentMethodIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['payment-methods'][':payment-method-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentMethodsPaymentMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>
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
                  ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PaymentMethodsPaymentMethodIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentMethodsPaymentMethodIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentMethodsPaymentMethodIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['payment-methods'][':payment-method-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PaymentMethodsPaymentMethodIdMutationKey() {
  return ['v1', '/v1/payment-methods/:payment-method-id', 'PUT'] as const
}

export function getPutV1PaymentMethodsPaymentMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PaymentMethodsPaymentMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$put']>,
    ) {
      return parseResponse(client.v1['payment-methods'][':payment-method-id'].$put(args, options))
    },
  })
}

export function usePutV1PaymentMethodsPaymentMethodId<
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
                  ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PaymentMethodsPaymentMethodIdMutationOptions<
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

export function getDeleteV1PaymentMethodsPaymentMethodIdMutationKey() {
  return ['v1', '/v1/payment-methods/:payment-method-id', 'DELETE'] as const
}

export function getDeleteV1PaymentMethodsPaymentMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PaymentMethodsPaymentMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['payment-methods'][':payment-method-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1['payment-methods'][':payment-method-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1PaymentMethodsPaymentMethodId<
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
                  ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1PaymentMethodsPaymentMethodIdMutationOptions<
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

export function getPostV1PaymentMethodsPaymentMethodIdAuthorizeMutationKey() {
  return ['v1', '/v1/payment-methods/:payment-method-id/authorize', 'POST'] as const
}

export function getPostV1PaymentMethodsPaymentMethodIdAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['payment-methods'][':payment-method-id']['authorize']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['payment-methods'][':payment-method-id']['authorize']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentMethodsPaymentMethodIdAuthorizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['payment-methods'][':payment-method-id']['authorize']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['payment-methods'][':payment-method-id'].authorize.$post(args, options),
      )
    },
  })
}

export function usePostV1PaymentMethodsPaymentMethodIdAuthorize<
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
                    (typeof client.v1)['payment-methods'][':payment-method-id']['authorize']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['payment-methods'][':payment-method-id']['authorize']['$post']
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
  const mutationDefaults = getPostV1PaymentMethodsPaymentMethodIdAuthorizeMutationOptions<
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

export function getV1PaymentMethodsPaymentMethodIdProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/payment-methods/:payment-method-id/profiles', keyArgs] as const
}

export function getV1PaymentMethodsPaymentMethodIdProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentMethodsPaymentMethodIdProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['payment-methods'][':payment-method-id'].profiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentMethodsPaymentMethodIdProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$get']
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
                    (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$get']
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
                    (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PaymentMethodsPaymentMethodIdProfilesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentMethodsPaymentMethodIdProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentMethodsPaymentMethodIdProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['payment-methods'][':payment-method-id'].profiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PaymentMethodsPaymentMethodIdProfilesMutationKey() {
  return ['v1', '/v1/payment-methods/:payment-method-id/profiles', 'POST'] as const
}

export function getPostV1PaymentMethodsPaymentMethodIdProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentMethodsPaymentMethodIdProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['payment-methods'][':payment-method-id'].profiles.$post(args, options),
      )
    },
  })
}

export function usePostV1PaymentMethodsPaymentMethodIdProfiles<
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
                    (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$post']
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
  const mutationDefaults = getPostV1PaymentMethodsPaymentMethodIdProfilesMutationOptions<
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

export function getPostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancelMutationKey() {
  return [
    'v1',
    '/v1/payment-methods/:payment-method-id/profiles/:profile-number/cancel',
    'POST',
  ] as const
}

export function getPostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['payment-methods'][':payment-method-id']['profiles'][':profile-number']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['payment-methods'][':payment-method-id']['profiles'][':profile-number']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['payment-methods'][':payment-method-id']['profiles'][':profile-number']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['payment-methods'][':payment-method-id'].profiles[':profile-number'].cancel.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancel<
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
                    (typeof client.v1)['payment-methods'][':payment-method-id']['profiles'][':profile-number']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['payment-methods'][':payment-method-id']['profiles'][':profile-number']['cancel']['$post']
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
  const mutationDefaults =
    getPostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancelMutationOptions<
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

export function getPostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpireMutationKey() {
  return [
    'v1',
    '/v1/payment-methods/:payment-method-id/profiles/:profile-number/expire',
    'POST',
  ] as const
}

export function getPostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpireMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['payment-methods'][':payment-method-id']['profiles'][':profile-number']['expire']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['payment-methods'][':payment-method-id']['profiles'][':profile-number']['expire']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpireMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['payment-methods'][':payment-method-id']['profiles'][':profile-number']['expire']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['payment-methods'][':payment-method-id'].profiles[':profile-number'].expire.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpire<
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
                    (typeof client.v1)['payment-methods'][':payment-method-id']['profiles'][':profile-number']['expire']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['payment-methods'][':payment-method-id']['profiles'][':profile-number']['expire']['$post']
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
  const mutationDefaults =
    getPostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpireMutationOptions<
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

export function getPutV1PaymentMethodsPaymentMethodIdScrubMutationKey() {
  return ['v1', '/v1/payment-methods/:payment-method-id/scrub', 'PUT'] as const
}

export function getPutV1PaymentMethodsPaymentMethodIdScrubMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['scrub']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['scrub']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PaymentMethodsPaymentMethodIdScrubMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['payment-methods'][':payment-method-id']['scrub']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['payment-methods'][':payment-method-id'].scrub.$put(args, options),
      )
    },
  })
}

export function usePutV1PaymentMethodsPaymentMethodIdScrub<
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
                    (typeof client.v1)['payment-methods'][':payment-method-id']['scrub']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['payment-methods'][':payment-method-id']['scrub']['$put']
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
  const mutationDefaults = getPutV1PaymentMethodsPaymentMethodIdScrubMutationOptions<
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

export function getPutV1PaymentMethodsPaymentMethodIdVerifyMutationKey() {
  return ['v1', '/v1/payment-methods/:payment-method-id/verify', 'PUT'] as const
}

export function getPutV1PaymentMethodsPaymentMethodIdVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['payment-methods'][':payment-method-id']['verify']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['verify']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PaymentMethodsPaymentMethodIdVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['payment-methods'][':payment-method-id']['verify']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['payment-methods'][':payment-method-id'].verify.$put(args, options),
      )
    },
  })
}

export function usePutV1PaymentMethodsPaymentMethodIdVerify<
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
                    (typeof client.v1)['payment-methods'][':payment-method-id']['verify']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['payment-methods'][':payment-method-id']['verify']['$put']
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
  const mutationDefaults = getPutV1PaymentMethodsPaymentMethodIdVerifyMutationOptions<
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

export function getPostV1PaymentMethodsPaymentMethodIdVoidAuthorizeMutationKey() {
  return ['v1', '/v1/payment-methods/:payment-method-id/voidAuthorize', 'POST'] as const
}

export function getPostV1PaymentMethodsPaymentMethodIdVoidAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['payment-methods'][':payment-method-id']['voidAuthorize']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['payment-methods'][':payment-method-id']['voidAuthorize']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentMethodsPaymentMethodIdVoidAuthorizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['payment-methods'][':payment-method-id']['voidAuthorize']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['payment-methods'][':payment-method-id'].voidAuthorize.$post(args, options),
      )
    },
  })
}

export function usePostV1PaymentMethodsPaymentMethodIdVoidAuthorize<
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
                    (typeof client.v1)['payment-methods'][':payment-method-id']['voidAuthorize']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['payment-methods'][':payment-method-id']['voidAuthorize']['$post']
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
  const mutationDefaults = getPostV1PaymentMethodsPaymentMethodIdVoidAuthorizeMutationOptions<
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

export function getV1PaymentRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['payment-runs']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/payment-runs', keyArgs] as const
}

export function getV1PaymentRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['payment-runs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['payment-runs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-runs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['payment-runs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-runs']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-runs']['$get']>>>
            >
          >,
          ReturnType<typeof getV1PaymentRunsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-runs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['payment-runs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PaymentRunsMutationKey() {
  return ['v1', '/v1/payment-runs', 'POST'] as const
}

export function getPostV1PaymentRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-runs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['payment-runs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentRunsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['payment-runs']['$post']>) {
      return parseResponse(client.v1['payment-runs'].$post(args, options))
    },
  })
}

export function usePostV1PaymentRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-runs']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['payment-runs']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PaymentRunsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1PaymentRunsPaymentRunIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/payment-runs/:paymentRunId', keyArgs] as const
}

export function getV1PaymentRunsPaymentRunIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentRunsPaymentRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['payment-runs'][':paymentRunId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentRunsPaymentRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PaymentRunsPaymentRunIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentRunsPaymentRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentRunsPaymentRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['payment-runs'][':paymentRunId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PaymentRunsPaymentRunIdMutationKey() {
  return ['v1', '/v1/payment-runs/:paymentRunId', 'PUT'] as const
}

export function getPutV1PaymentRunsPaymentRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PaymentRunsPaymentRunIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$put']>,
    ) {
      return parseResponse(client.v1['payment-runs'][':paymentRunId'].$put(args, options))
    },
  })
}

export function usePutV1PaymentRunsPaymentRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PaymentRunsPaymentRunIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1PaymentRunsPaymentRunIdMutationKey() {
  return ['v1', '/v1/payment-runs/:paymentRunId', 'DELETE'] as const
}

export function getDeleteV1PaymentRunsPaymentRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PaymentRunsPaymentRunIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$delete']>,
    ) {
      return parseResponse(client.v1['payment-runs'][':paymentRunId'].$delete(args, options))
    },
  })
}

export function useDeleteV1PaymentRunsPaymentRunId<
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
                Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1PaymentRunsPaymentRunIdMutationOptions<
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

export function getV1PaymentRunsPaymentRunIdDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/payment-runs/:paymentRunId/data', keyArgs] as const
}

export function getV1PaymentRunsPaymentRunIdDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentRunsPaymentRunIdDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['payment-runs'][':paymentRunId'].data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentRunsPaymentRunIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>
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
                  ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PaymentRunsPaymentRunIdDataQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentRunsPaymentRunIdDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentRunsPaymentRunIdDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['payment-runs'][':paymentRunId'].data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PaymentRunsPaymentRunIdSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/payment-runs/:paymentRunId/summary', keyArgs] as const
}

export function getV1PaymentRunsPaymentRunIdSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentRunsPaymentRunIdSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['payment-runs'][':paymentRunId'].summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentRunsPaymentRunIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>
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
                  ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PaymentRunsPaymentRunIdSummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentRunsPaymentRunIdSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentRunsPaymentRunIdSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['payment-runs'][':paymentRunId'].summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PaymentgatewaysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.paymentgateways.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/paymentgateways', keyArgs] as const
}

export function getV1PaymentgatewaysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.paymentgateways.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentgatewaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.paymentgateways.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Paymentgateways<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentgateways.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.paymentgateways.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentgateways.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentgateways.$get>>>
            >
          >,
          ReturnType<typeof getV1PaymentgatewaysQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentgateways.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentgatewaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentgatewaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.paymentgateways.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.payments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/payments', keyArgs] as const
}

export function getV1PaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Payments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
          >,
          ReturnType<typeof getV1PaymentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PaymentsMutationKey() {
  return ['v1', '/v1/payments', 'POST'] as const
}

export function getPostV1PaymentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.payments.$post>) {
      return parseResponse(client.v1.payments.$post(args, options))
    },
  })
}

export function usePostV1Payments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.payments.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PaymentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1PaymentsPaymentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payments)[':paymentId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/payments/:paymentId', keyArgs] as const
}

export function getV1PaymentsPaymentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payments)[':paymentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentsPaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payments[':paymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payments)[':paymentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PaymentsPaymentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsPaymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentsPaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payments[':paymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PaymentsPaymentIdMutationKey() {
  return ['v1', '/v1/payments/:paymentId', 'PUT'] as const
}

export function getPutV1PaymentsPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.payments)[':paymentId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PaymentsPaymentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.payments)[':paymentId']['$put']>) {
      return parseResponse(client.v1.payments[':paymentId'].$put(args, options))
    },
  })
}

export function usePutV1PaymentsPaymentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.payments)[':paymentId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PaymentsPaymentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1PaymentsPaymentIdMutationKey() {
  return ['v1', '/v1/payments/:paymentId', 'DELETE'] as const
}

export function getDeleteV1PaymentsPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.payments)[':paymentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PaymentsPaymentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.payments)[':paymentId']['$delete']>) {
      return parseResponse(client.v1.payments[':paymentId'].$delete(args, options))
    },
  })
}

export function useDeleteV1PaymentsPaymentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.payments)[':paymentId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1PaymentsPaymentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1PaymentsPaymentIdApplyMutationKey() {
  return ['v1', '/v1/payments/:paymentId/apply', 'PUT'] as const
}

export function getPutV1PaymentsPaymentIdApplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['apply']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.payments)[':paymentId']['apply']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PaymentsPaymentIdApplyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.payments)[':paymentId']['apply']['$put']>,
    ) {
      return parseResponse(client.v1.payments[':paymentId'].apply.$put(args, options))
    },
  })
}

export function usePutV1PaymentsPaymentIdApply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['apply']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.payments)[':paymentId']['apply']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PaymentsPaymentIdApplyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1PaymentsPaymentIdCancelMutationKey() {
  return ['v1', '/v1/payments/:paymentId/cancel', 'PUT'] as const
}

export function getPutV1PaymentsPaymentIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.payments)[':paymentId']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PaymentsPaymentIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.payments)[':paymentId']['cancel']['$put']>,
    ) {
      return parseResponse(client.v1.payments[':paymentId'].cancel.$put(args, options))
    },
  })
}

export function usePutV1PaymentsPaymentIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['cancel']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.payments)[':paymentId']['cancel']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PaymentsPaymentIdCancelMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1PaymentsPaymentIdPartsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/payments/:paymentId/parts', keyArgs] as const
}

export function getV1PaymentsPaymentIdPartsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentsPaymentIdPartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payments[':paymentId'].parts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentsPaymentIdParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PaymentsPaymentIdPartsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsPaymentIdPartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentsPaymentIdPartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payments[':paymentId'].parts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PaymentsPaymentIdPartsPartidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/payments/:paymentId/parts/:partid', keyArgs] as const
}

export function getV1PaymentsPaymentIdPartsPartidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentsPaymentIdPartsPartidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payments[':paymentId'].parts[':partid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentsPaymentIdPartsPartid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>
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
                  ReturnType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PaymentsPaymentIdPartsPartidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsPaymentIdPartsPartidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentsPaymentIdPartsPartidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payments[':paymentId'].parts[':partid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PaymentsPaymentIdPartsPartidItempartsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/payments/:paymentId/parts/:partid/itemparts', keyArgs] as const
}

export function getV1PaymentsPaymentIdPartsPartidItempartsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentsPaymentIdPartsPartidItempartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payments[':paymentId'].parts[':partid'].itemparts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentsPaymentIdPartsPartidItemparts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts']['$get']
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
                    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts']['$get']
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
                    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PaymentsPaymentIdPartsPartidItempartsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsPaymentIdPartsPartidItempartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentsPaymentIdPartsPartidItempartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payments[':paymentId'].parts[':partid'].itemparts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PaymentsPaymentIdPartsPartidItempartsItempartidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts'][':itempartid']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/payments/:paymentId/parts/:partid/itemparts/:itempartid', keyArgs] as const
}

export function getV1PaymentsPaymentIdPartsPartidItempartsItempartidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts'][':itempartid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentsPaymentIdPartsPartidItempartsItempartidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payments[':paymentId'].parts[':partid'].itemparts[':itempartid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1PaymentsPaymentIdPartsPartidItempartsItempartid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts'][':itempartid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts'][':itempartid']['$get']
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
                    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts'][':itempartid']['$get']
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
                    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts'][':itempartid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PaymentsPaymentIdPartsPartidItempartsItempartidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts'][':itempartid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsPaymentIdPartsPartidItempartsItempartidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentsPaymentIdPartsPartidItempartsItempartidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payments[':paymentId'].parts[':partid'].itemparts[':itempartid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PaymentsPaymentIdRefundsMutationKey() {
  return ['v1', '/v1/payments/:paymentId/refunds', 'POST'] as const
}

export function getPostV1PaymentsPaymentIdRefundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['refunds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.payments)[':paymentId']['refunds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentsPaymentIdRefundsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.payments)[':paymentId']['refunds']['$post']>,
    ) {
      return parseResponse(client.v1.payments[':paymentId'].refunds.$post(args, options))
    },
  })
}

export function usePostV1PaymentsPaymentIdRefunds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['refunds']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.payments)[':paymentId']['refunds']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PaymentsPaymentIdRefundsMutationOptions<
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

export function getPutV1PaymentsPaymentIdTransferMutationKey() {
  return ['v1', '/v1/payments/:paymentId/transfer', 'PUT'] as const
}

export function getPutV1PaymentsPaymentIdTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['transfer']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.payments)[':paymentId']['transfer']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PaymentsPaymentIdTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.payments)[':paymentId']['transfer']['$put']>,
    ) {
      return parseResponse(client.v1.payments[':paymentId'].transfer.$put(args, options))
    },
  })
}

export function usePutV1PaymentsPaymentIdTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['transfer']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.payments)[':paymentId']['transfer']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PaymentsPaymentIdTransferMutationOptions<
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

export function getPutV1PaymentsPaymentIdUnapplyMutationKey() {
  return ['v1', '/v1/payments/:paymentId/unapply', 'PUT'] as const
}

export function getPutV1PaymentsPaymentIdUnapplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['unapply']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.payments)[':paymentId']['unapply']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PaymentsPaymentIdUnapplyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.payments)[':paymentId']['unapply']['$put']>,
    ) {
      return parseResponse(client.v1.payments[':paymentId'].unapply.$put(args, options))
    },
  })
}

export function usePutV1PaymentsPaymentIdUnapply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['unapply']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.payments)[':paymentId']['unapply']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PaymentsPaymentIdUnapplyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1QuotesDocumentMutationKey() {
  return ['v1', '/v1/quotes/document', 'POST'] as const
}

export function getPostV1QuotesDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.document.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.quotes.document.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1QuotesDocumentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.quotes.document.$post>) {
      return parseResponse(client.v1.quotes.document.$post(args, options))
    },
  })
}

export function usePostV1QuotesDocument<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.document.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.quotes.document.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1QuotesDocumentMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1RampsRampNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ramps)[':rampNumber']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/ramps/:rampNumber', keyArgs] as const
}

export function getV1RampsRampNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ramps)[':rampNumber']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RampsRampNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.ramps[':rampNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RampsRampNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ramps)[':rampNumber']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1RampsRampNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RampsRampNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RampsRampNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.ramps[':rampNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1RampsRampNumberRampMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/ramps/:rampNumber/ramp-metrics', keyArgs] as const
}

export function getV1RampsRampNumberRampMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RampsRampNumberRampMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.ramps[':rampNumber']['ramp-metrics'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RampsRampNumberRampMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1RampsRampNumberRampMetricsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RampsRampNumberRampMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RampsRampNumberRampMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.ramps[':rampNumber']['ramp-metrics'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1RateplanProductIdProductRatePlanQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/rateplan/:product_id/productRatePlan', keyArgs] as const
}

export function getV1RateplanProductIdProductRatePlanQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RateplanProductIdProductRatePlanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.rateplan[':product_id'].productRatePlan.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RateplanProductIdProductRatePlan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>
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
                  ReturnType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1RateplanProductIdProductRatePlanQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RateplanProductIdProductRatePlanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RateplanProductIdProductRatePlanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.rateplan[':product_id'].productRatePlan.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1RefundsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.refunds.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/refunds', keyArgs] as const
}

export function getV1RefundsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.refunds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RefundsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.refunds.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Refunds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.refunds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$get>>>>
          >,
          ReturnType<typeof getV1RefundsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1RefundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RefundsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.refunds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1RefundsRefundIdReconcileMutationKey() {
  return ['v1', '/v1/refunds/:refund-id/reconcile', 'POST'] as const
}

export function getPostV1RefundsRefundIdReconcileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.refunds)[':refund-id']['reconcile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.refunds)[':refund-id']['reconcile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RefundsRefundIdReconcileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.refunds)[':refund-id']['reconcile']['$post']>,
    ) {
      return parseResponse(client.v1.refunds[':refund-id'].reconcile.$post(args, options))
    },
  })
}

export function usePostV1RefundsRefundIdReconcile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.refunds)[':refund-id']['reconcile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.refunds)[':refund-id']['reconcile']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1RefundsRefundIdReconcileMutationOptions<
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

export function getV1RefundsRefundIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.refunds)[':refundId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/refunds/:refundId', keyArgs] as const
}

export function getV1RefundsRefundIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.refunds)[':refundId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RefundsRefundIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.refunds[':refundId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RefundsRefundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.refunds)[':refundId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1RefundsRefundIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RefundsRefundIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RefundsRefundIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.refunds[':refundId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1RefundsRefundIdMutationKey() {
  return ['v1', '/v1/refunds/:refundId', 'PUT'] as const
}

export function getPutV1RefundsRefundIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.refunds)[':refundId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1RefundsRefundIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.refunds)[':refundId']['$put']>) {
      return parseResponse(client.v1.refunds[':refundId'].$put(args, options))
    },
  })
}

export function usePutV1RefundsRefundId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.refunds)[':refundId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1RefundsRefundIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1RefundsRefundIdMutationKey() {
  return ['v1', '/v1/refunds/:refundId', 'DELETE'] as const
}

export function getDeleteV1RefundsRefundIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.refunds)[':refundId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1RefundsRefundIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.refunds)[':refundId']['$delete']>) {
      return parseResponse(client.v1.refunds[':refundId'].$delete(args, options))
    },
  })
}

export function useDeleteV1RefundsRefundId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.refunds)[':refundId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1RefundsRefundIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1RefundsRefundIdCancelMutationKey() {
  return ['v1', '/v1/refunds/:refundId/cancel', 'PUT'] as const
}

export function getPutV1RefundsRefundIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.refunds)[':refundId']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1RefundsRefundIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.refunds)[':refundId']['cancel']['$put']>,
    ) {
      return parseResponse(client.v1.refunds[':refundId'].cancel.$put(args, options))
    },
  })
}

export function usePutV1RefundsRefundIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['cancel']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.refunds)[':refundId']['cancel']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1RefundsRefundIdCancelMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1RefundsRefundIdPartsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/refunds/:refundId/parts', keyArgs] as const
}

export function getV1RefundsRefundIdPartsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RefundsRefundIdPartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.refunds[':refundId'].parts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RefundsRefundIdParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1RefundsRefundIdPartsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RefundsRefundIdPartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RefundsRefundIdPartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.refunds[':refundId'].parts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1RefundsRefundIdPartsRefundpartidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/refunds/:refundId/parts/:refundpartid', keyArgs] as const
}

export function getV1RefundsRefundIdPartsRefundpartidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RefundsRefundIdPartsRefundpartidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.refunds[':refundId'].parts[':refundpartid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RefundsRefundIdPartsRefundpartid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']>
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
                    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']
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
                    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RefundsRefundIdPartsRefundpartidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RefundsRefundIdPartsRefundpartidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RefundsRefundIdPartsRefundpartidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.refunds[':refundId'].parts[':refundpartid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1RefundsRefundIdPartsRefundpartidItempartsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/refunds/:refundId/parts/:refundpartid/itemparts', keyArgs] as const
}

export function getV1RefundsRefundIdPartsRefundpartidItempartsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RefundsRefundIdPartsRefundpartidItempartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.refunds[':refundId'].parts[':refundpartid'].itemparts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RefundsRefundIdPartsRefundpartidItemparts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts']['$get']
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
                    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts']['$get']
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
                    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RefundsRefundIdPartsRefundpartidItempartsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RefundsRefundIdPartsRefundpartidItempartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RefundsRefundIdPartsRefundpartidItempartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.refunds[':refundId'].parts[':refundpartid'].itemparts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1RefundsRefundIdPartsRefundpartidItempartsItempartidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts'][':itempartid']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/refunds/:refundId/parts/:refundpartid/itemparts/:itempartid', keyArgs] as const
}

export function getV1RefundsRefundIdPartsRefundpartidItempartsItempartidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts'][':itempartid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1RefundsRefundIdPartsRefundpartidItempartsItempartidQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.refunds[':refundId'].parts[':refundpartid'].itemparts[':itempartid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1RefundsRefundIdPartsRefundpartidItempartsItempartid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts'][':itempartid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts'][':itempartid']['$get']
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
                    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts'][':itempartid']['$get']
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
                    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts'][':itempartid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RefundsRefundIdPartsRefundpartidItempartsItempartidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts'][':itempartid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RefundsRefundIdPartsRefundpartidItempartsItempartidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1RefundsRefundIdPartsRefundpartidItempartsItempartidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.refunds[':refundId'].parts[':refundpartid'].itemparts[':itempartid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1RevenueEventsRevenueSchedulesRsNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-events']['revenue-schedules'][':rs-number']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/revenue-events/revenue-schedules/:rs-number', keyArgs] as const
}

export function getV1RevenueEventsRevenueSchedulesRsNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-events']['revenue-schedules'][':rs-number']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RevenueEventsRevenueSchedulesRsNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['revenue-events']['revenue-schedules'][':rs-number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RevenueEventsRevenueSchedulesRsNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['revenue-events']['revenue-schedules'][':rs-number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-events']['revenue-schedules'][':rs-number']['$get']
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
                    (typeof client.v1)['revenue-events']['revenue-schedules'][':rs-number']['$get']
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
                    (typeof client.v1)['revenue-events']['revenue-schedules'][':rs-number']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RevenueEventsRevenueSchedulesRsNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1)['revenue-events']['revenue-schedules'][':rs-number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RevenueEventsRevenueSchedulesRsNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RevenueEventsRevenueSchedulesRsNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['revenue-events']['revenue-schedules'][':rs-number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1RevenueEventsEventNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['revenue-events'][':event-number']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/revenue-events/:event-number', keyArgs] as const
}

export function getV1RevenueEventsEventNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['revenue-events'][':event-number']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RevenueEventsEventNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['revenue-events'][':event-number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RevenueEventsEventNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['revenue-events'][':event-number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['revenue-events'][':event-number']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['revenue-events'][':event-number']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['revenue-events'][':event-number']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1RevenueEventsEventNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1)['revenue-events'][':event-number']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RevenueEventsEventNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RevenueEventsEventNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['revenue-events'][':event-number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1RevenueItemsChargeRevenueSummariesCrsNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-items']['charge-revenue-summaries'][':crs-number']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/revenue-items/charge-revenue-summaries/:crs-number', keyArgs] as const
}

export function getV1RevenueItemsChargeRevenueSummariesCrsNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-items']['charge-revenue-summaries'][':crs-number']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RevenueItemsChargeRevenueSummariesCrsNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['revenue-items']['charge-revenue-summaries'][':crs-number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RevenueItemsChargeRevenueSummariesCrsNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['revenue-items']['charge-revenue-summaries'][':crs-number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-items']['charge-revenue-summaries'][':crs-number']['$get']
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
                    (typeof client.v1)['revenue-items']['charge-revenue-summaries'][':crs-number']['$get']
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
                    (typeof client.v1)['revenue-items']['charge-revenue-summaries'][':crs-number']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RevenueItemsChargeRevenueSummariesCrsNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1)['revenue-items']['charge-revenue-summaries'][':crs-number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RevenueItemsChargeRevenueSummariesCrsNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RevenueItemsChargeRevenueSummariesCrsNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['revenue-items']['charge-revenue-summaries'][':crs-number'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1RevenueItemsRevenueEventsEventNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/revenue-items/revenue-events/:event-number', keyArgs] as const
}

export function getV1RevenueItemsRevenueEventsEventNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RevenueItemsRevenueEventsEventNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['revenue-items']['revenue-events'][':event-number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RevenueItemsRevenueEventsEventNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$get']>
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
                    (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$get']
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
                    (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RevenueItemsRevenueEventsEventNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RevenueItemsRevenueEventsEventNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RevenueItemsRevenueEventsEventNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['revenue-items']['revenue-events'][':event-number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1RevenueItemsRevenueEventsEventNumberMutationKey() {
  return ['v1', '/v1/revenue-items/revenue-events/:event-number', 'PUT'] as const
}

export function getPutV1RevenueItemsRevenueEventsEventNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1RevenueItemsRevenueEventsEventNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['revenue-items']['revenue-events'][':event-number'].$put(args, options),
      )
    },
  })
}

export function usePutV1RevenueItemsRevenueEventsEventNumber<
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
                    (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$put']
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
  const mutationDefaults = getPutV1RevenueItemsRevenueEventsEventNumberMutationOptions<
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

export function getV1RevenueItemsRevenueSchedulesRsNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/revenue-items/revenue-schedules/:rs-number', keyArgs] as const
}

export function getV1RevenueItemsRevenueSchedulesRsNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RevenueItemsRevenueSchedulesRsNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['revenue-items']['revenue-schedules'][':rs-number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RevenueItemsRevenueSchedulesRsNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$get']>
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
                    (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$get']
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
                    (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RevenueItemsRevenueSchedulesRsNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RevenueItemsRevenueSchedulesRsNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RevenueItemsRevenueSchedulesRsNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['revenue-items']['revenue-schedules'][':rs-number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1RevenueItemsRevenueSchedulesRsNumberMutationKey() {
  return ['v1', '/v1/revenue-items/revenue-schedules/:rs-number', 'PUT'] as const
}

export function getPutV1RevenueItemsRevenueSchedulesRsNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1RevenueItemsRevenueSchedulesRsNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['revenue-items']['revenue-schedules'][':rs-number'].$put(args, options),
      )
    },
  })
}

export function usePutV1RevenueItemsRevenueSchedulesRsNumber<
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
                    (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$put']
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
  const mutationDefaults = getPutV1RevenueItemsRevenueSchedulesRsNumberMutationOptions<
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

export function getV1RevenueRecognitionRulesProductChargesChargeKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-recognition-rules']['product-charges'][':charge-key']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/revenue-recognition-rules/product-charges/:charge-key', keyArgs] as const
}

export function getV1RevenueRecognitionRulesProductChargesChargeKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-recognition-rules']['product-charges'][':charge-key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RevenueRecognitionRulesProductChargesChargeKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['revenue-recognition-rules']['product-charges'][':charge-key'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1RevenueRecognitionRulesProductChargesChargeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['revenue-recognition-rules']['product-charges'][':charge-key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-recognition-rules']['product-charges'][':charge-key']['$get']
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
                    (typeof client.v1)['revenue-recognition-rules']['product-charges'][':charge-key']['$get']
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
                    (typeof client.v1)['revenue-recognition-rules']['product-charges'][':charge-key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RevenueRecognitionRulesProductChargesChargeKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1)['revenue-recognition-rules']['product-charges'][':charge-key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RevenueRecognitionRulesProductChargesChargeKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RevenueRecognitionRulesProductChargesChargeKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['revenue-recognition-rules']['product-charges'][':charge-key'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1RevenueRecognitionRulesSubscriptionChargesChargeKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-recognition-rules']['subscription-charges'][':charge-key']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/revenue-recognition-rules/subscription-charges/:charge-key', keyArgs] as const
}

export function getV1RevenueRecognitionRulesSubscriptionChargesChargeKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-recognition-rules']['subscription-charges'][':charge-key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1RevenueRecognitionRulesSubscriptionChargesChargeKeyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['revenue-recognition-rules']['subscription-charges'][':charge-key'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1RevenueRecognitionRulesSubscriptionChargesChargeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['revenue-recognition-rules']['subscription-charges'][':charge-key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-recognition-rules']['subscription-charges'][':charge-key']['$get']
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
                    (typeof client.v1)['revenue-recognition-rules']['subscription-charges'][':charge-key']['$get']
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
                    (typeof client.v1)['revenue-recognition-rules']['subscription-charges'][':charge-key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RevenueRecognitionRulesSubscriptionChargesChargeKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1)['revenue-recognition-rules']['subscription-charges'][':charge-key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RevenueRecognitionRulesSubscriptionChargesChargeKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1RevenueRecognitionRulesSubscriptionChargesChargeKeyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['revenue-recognition-rules']['subscription-charges'][':charge-key'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1RevenueSchedulesCreditMemoItemsCmiIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/revenue-schedules/credit-memo-items/:cmi-id', keyArgs] as const
}

export function getV1RevenueSchedulesCreditMemoItemsCmiIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RevenueSchedulesCreditMemoItemsCmiIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['revenue-schedules']['credit-memo-items'][':cmi-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RevenueSchedulesCreditMemoItemsCmiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$get']
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
                    (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$get']
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
                    (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RevenueSchedulesCreditMemoItemsCmiIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RevenueSchedulesCreditMemoItemsCmiIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RevenueSchedulesCreditMemoItemsCmiIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['revenue-schedules']['credit-memo-items'][':cmi-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1RevenueSchedulesCreditMemoItemsCmiIdMutationKey() {
  return ['v1', '/v1/revenue-schedules/credit-memo-items/:cmi-id', 'POST'] as const
}

export function getPostV1RevenueSchedulesCreditMemoItemsCmiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1RevenueSchedulesCreditMemoItemsCmiIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['revenue-schedules']['credit-memo-items'][':cmi-id'].$post(args, options),
      )
    },
  })
}

export function usePostV1RevenueSchedulesCreditMemoItemsCmiId<
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
                    (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$post']
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
  const mutationDefaults = getPostV1RevenueSchedulesCreditMemoItemsCmiIdMutationOptions<
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

export function getPostV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRangeMutationKey() {
  return [
    'v1',
    '/v1/revenue-schedules/credit-memo-items/:cmi-id/distribute-revenue-with-date-range',
    'POST',
  ] as const
}

export function getPostV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['distribute-revenue-with-date-range']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['distribute-revenue-with-date-range']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRangeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['distribute-revenue-with-date-range']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['revenue-schedules']['credit-memo-items'][':cmi-id'][
          'distribute-revenue-with-date-range'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRange<
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
                    (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['distribute-revenue-with-date-range']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['distribute-revenue-with-date-range']['$post']
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
  const mutationDefaults =
    getPostV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRangeMutationOptions<
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

export function getV1RevenueSchedulesDebitMemoItemsDmiIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/revenue-schedules/debit-memo-items/:dmi-id', keyArgs] as const
}

export function getV1RevenueSchedulesDebitMemoItemsDmiIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RevenueSchedulesDebitMemoItemsDmiIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['revenue-schedules']['debit-memo-items'][':dmi-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RevenueSchedulesDebitMemoItemsDmiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$get']>
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
                    (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$get']
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
                    (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RevenueSchedulesDebitMemoItemsDmiIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RevenueSchedulesDebitMemoItemsDmiIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RevenueSchedulesDebitMemoItemsDmiIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['revenue-schedules']['debit-memo-items'][':dmi-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1RevenueSchedulesDebitMemoItemsDmiIdMutationKey() {
  return ['v1', '/v1/revenue-schedules/debit-memo-items/:dmi-id', 'POST'] as const
}

export function getPostV1RevenueSchedulesDebitMemoItemsDmiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1RevenueSchedulesDebitMemoItemsDmiIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['revenue-schedules']['debit-memo-items'][':dmi-id'].$post(args, options),
      )
    },
  })
}

export function usePostV1RevenueSchedulesDebitMemoItemsDmiId<
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
                    (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$post']
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
  const mutationDefaults = getPostV1RevenueSchedulesDebitMemoItemsDmiIdMutationOptions<
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

export function getPostV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRangeMutationKey() {
  return [
    'v1',
    '/v1/revenue-schedules/debit-memo-items/:dmi-id/distribute-revenue-with-date-range',
    'POST',
  ] as const
}

export function getPostV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['distribute-revenue-with-date-range']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['distribute-revenue-with-date-range']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRangeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['distribute-revenue-with-date-range']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['revenue-schedules']['debit-memo-items'][':dmi-id'][
          'distribute-revenue-with-date-range'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRange<
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
                    (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['distribute-revenue-with-date-range']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['distribute-revenue-with-date-range']['$post']
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
  const mutationDefaults =
    getPostV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRangeMutationOptions<
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

export function getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/revenue-schedules/invoice-item-adjustments/:invoice-item-adj-key',
    keyArgs,
  ] as const
}

export function getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$get']
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
                    (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$get']
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
                    (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyMutationKey() {
  return [
    'v1',
    '/v1/revenue-schedules/invoice-item-adjustments/:invoice-item-adj-key',
    'POST',
  ] as const
}

export function getPostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKey<
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
                    (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$post']
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
  const mutationDefaults =
    getPostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyMutationOptions<
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

export function getPostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRangeMutationKey() {
  return [
    'v1',
    '/v1/revenue-schedules/invoice-item-adjustments/:invoice-item-adj-key/distribute-revenue-with-date-range',
    'POST',
  ] as const
}

export function getPostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['distribute-revenue-with-date-range']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['distribute-revenue-with-date-range']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRangeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['distribute-revenue-with-date-range']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key'][
          'distribute-revenue-with-date-range'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRange<
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
                    (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['distribute-revenue-with-date-range']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['distribute-revenue-with-date-range']['$post']
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
  const mutationDefaults =
    getPostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRangeMutationOptions<
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

export function getV1RevenueSchedulesInvoiceItemsInvoiceItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/revenue-schedules/invoice-items/:invoice-item-id', keyArgs] as const
}

export function getV1RevenueSchedulesInvoiceItemsInvoiceItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RevenueSchedulesInvoiceItemsInvoiceItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['revenue-schedules']['invoice-items'][':invoice-item-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RevenueSchedulesInvoiceItemsInvoiceItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$get']
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
                    (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$get']
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
                    (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RevenueSchedulesInvoiceItemsInvoiceItemIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RevenueSchedulesInvoiceItemsInvoiceItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RevenueSchedulesInvoiceItemsInvoiceItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['revenue-schedules']['invoice-items'][':invoice-item-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1RevenueSchedulesInvoiceItemsInvoiceItemIdMutationKey() {
  return ['v1', '/v1/revenue-schedules/invoice-items/:invoice-item-id', 'POST'] as const
}

export function getPostV1RevenueSchedulesInvoiceItemsInvoiceItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1RevenueSchedulesInvoiceItemsInvoiceItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['revenue-schedules']['invoice-items'][':invoice-item-id'].$post(args, options),
      )
    },
  })
}

export function usePostV1RevenueSchedulesInvoiceItemsInvoiceItemId<
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
                    (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$post']
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
  const mutationDefaults = getPostV1RevenueSchedulesInvoiceItemsInvoiceItemIdMutationOptions<
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

export function getPostV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRangeMutationKey() {
  return [
    'v1',
    '/v1/revenue-schedules/invoice-items/:invoice-item-id/distribute-revenue-with-date-range',
    'POST',
  ] as const
}

export function getPostV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['distribute-revenue-with-date-range']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['distribute-revenue-with-date-range']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRangeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['distribute-revenue-with-date-range']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['revenue-schedules']['invoice-items'][':invoice-item-id'][
          'distribute-revenue-with-date-range'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRange<
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
                    (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['distribute-revenue-with-date-range']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['distribute-revenue-with-date-range']['$post']
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
  const mutationDefaults =
    getPostV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRangeMutationOptions<
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

export function getV1RevenueSchedulesProductChargesChargeKeyAccountKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['product-charges'][':charge-key'][':account-key']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/revenue-schedules/product-charges/:charge-key/:account-key', keyArgs] as const
}

export function getV1RevenueSchedulesProductChargesChargeKeyAccountKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['product-charges'][':charge-key'][':account-key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RevenueSchedulesProductChargesChargeKeyAccountKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['revenue-schedules']['product-charges'][':charge-key'][':account-key'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1RevenueSchedulesProductChargesChargeKeyAccountKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['revenue-schedules']['product-charges'][':charge-key'][':account-key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['product-charges'][':charge-key'][':account-key']['$get']
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
                    (typeof client.v1)['revenue-schedules']['product-charges'][':charge-key'][':account-key']['$get']
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
                    (typeof client.v1)['revenue-schedules']['product-charges'][':charge-key'][':account-key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RevenueSchedulesProductChargesChargeKeyAccountKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1)['revenue-schedules']['product-charges'][':charge-key'][':account-key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RevenueSchedulesProductChargesChargeKeyAccountKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1RevenueSchedulesProductChargesChargeKeyAccountKeyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['revenue-schedules']['product-charges'][':charge-key'][':account-key'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1RevenueSchedulesSubscriptionChargesChargeKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/revenue-schedules/subscription-charges/:charge-key', keyArgs] as const
}

export function getV1RevenueSchedulesSubscriptionChargesChargeKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RevenueSchedulesSubscriptionChargesChargeKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['revenue-schedules']['subscription-charges'][':charge-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RevenueSchedulesSubscriptionChargesChargeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$get']
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
                    (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$get']
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
                    (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RevenueSchedulesSubscriptionChargesChargeKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RevenueSchedulesSubscriptionChargesChargeKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RevenueSchedulesSubscriptionChargesChargeKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['revenue-schedules']['subscription-charges'][':charge-key'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1RevenueSchedulesSubscriptionChargesChargeKeyMutationKey() {
  return ['v1', '/v1/revenue-schedules/subscription-charges/:charge-key', 'POST'] as const
}

export function getPostV1RevenueSchedulesSubscriptionChargesChargeKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1RevenueSchedulesSubscriptionChargesChargeKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['revenue-schedules']['subscription-charges'][':charge-key'].$post(args, options),
      )
    },
  })
}

export function usePostV1RevenueSchedulesSubscriptionChargesChargeKey<
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
                    (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$post']
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
  const mutationDefaults = getPostV1RevenueSchedulesSubscriptionChargesChargeKeyMutationOptions<
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

export function getV1RevenueSchedulesRsNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/revenue-schedules/:rs-number', keyArgs] as const
}

export function getV1RevenueSchedulesRsNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RevenueSchedulesRsNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['revenue-schedules'][':rs-number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RevenueSchedulesRsNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1RevenueSchedulesRsNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RevenueSchedulesRsNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RevenueSchedulesRsNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['revenue-schedules'][':rs-number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1RevenueSchedulesRsNumberMutationKey() {
  return ['v1', '/v1/revenue-schedules/:rs-number', 'DELETE'] as const
}

export function getDeleteV1RevenueSchedulesRsNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['revenue-schedules'][':rs-number']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['revenue-schedules'][':rs-number']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1RevenueSchedulesRsNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['revenue-schedules'][':rs-number']['$delete']>,
    ) {
      return parseResponse(client.v1['revenue-schedules'][':rs-number'].$delete(args, options))
    },
  })
}

export function useDeleteV1RevenueSchedulesRsNumber<
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
                  ReturnType<(typeof client.v1)['revenue-schedules'][':rs-number']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['revenue-schedules'][':rs-number']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1RevenueSchedulesRsNumberMutationOptions<
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

export function getPutV1RevenueSchedulesRsNumberBasicInformationMutationKey() {
  return ['v1', '/v1/revenue-schedules/:rs-number/basic-information', 'PUT'] as const
}

export function getPutV1RevenueSchedulesRsNumberBasicInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['revenue-schedules'][':rs-number']['basic-information']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['revenue-schedules'][':rs-number']['basic-information']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1RevenueSchedulesRsNumberBasicInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['revenue-schedules'][':rs-number']['basic-information']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['revenue-schedules'][':rs-number']['basic-information'].$put(args, options),
      )
    },
  })
}

export function usePutV1RevenueSchedulesRsNumberBasicInformation<
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
                    (typeof client.v1)['revenue-schedules'][':rs-number']['basic-information']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['revenue-schedules'][':rs-number']['basic-information']['$put']
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
  const mutationDefaults = getPutV1RevenueSchedulesRsNumberBasicInformationMutationOptions<
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

export function getPutV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriodsMutationKey() {
  return [
    'v1',
    '/v1/revenue-schedules/:rs-number/distribute-revenue-across-accounting-periods',
    'PUT',
  ] as const
}

export function getPutV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-across-accounting-periods']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-across-accounting-periods']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriodsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-across-accounting-periods']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['revenue-schedules'][':rs-number'][
          'distribute-revenue-across-accounting-periods'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriods<
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
                    (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-across-accounting-periods']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-across-accounting-periods']['$put']
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
  const mutationDefaults =
    getPutV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriodsMutationOptions<
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

export function getPutV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDateMutationKey() {
  return [
    'v1',
    '/v1/revenue-schedules/:rs-number/distribute-revenue-on-specific-date',
    'PUT',
  ] as const
}

export function getPutV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-on-specific-date']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-on-specific-date']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-on-specific-date']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['revenue-schedules'][':rs-number']['distribute-revenue-on-specific-date'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDate<
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
                    (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-on-specific-date']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-on-specific-date']['$put']
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
  const mutationDefaults =
    getPutV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDateMutationOptions<
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

export function getPutV1RevenueSchedulesRsNumberDistributeRevenueWithDateRangeMutationKey() {
  return [
    'v1',
    '/v1/revenue-schedules/:rs-number/distribute-revenue-with-date-range',
    'PUT',
  ] as const
}

export function getPutV1RevenueSchedulesRsNumberDistributeRevenueWithDateRangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-with-date-range']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-with-date-range']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1RevenueSchedulesRsNumberDistributeRevenueWithDateRangeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-with-date-range']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['revenue-schedules'][':rs-number']['distribute-revenue-with-date-range'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1RevenueSchedulesRsNumberDistributeRevenueWithDateRange<
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
                    (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-with-date-range']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-with-date-range']['$put']
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
  const mutationDefaults =
    getPutV1RevenueSchedulesRsNumberDistributeRevenueWithDateRangeMutationOptions<
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

export function getPutV1RevproAccountingCodesMutationKey() {
  return ['v1', '/v1/revpro-accounting-codes', 'PUT'] as const
}

export function getPutV1RevproAccountingCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['revpro-accounting-codes']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['revpro-accounting-codes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1RevproAccountingCodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['revpro-accounting-codes']['$put']>,
    ) {
      return parseResponse(client.v1['revpro-accounting-codes'].$put(args, options))
    },
  })
}

export function usePutV1RevproAccountingCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['revpro-accounting-codes']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['revpro-accounting-codes']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1RevproAccountingCodesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1RsaSignaturesMutationKey() {
  return ['v1', '/v1/rsa-signatures', 'POST'] as const
}

export function getPostV1RsaSignaturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['rsa-signatures']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['rsa-signatures']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RsaSignaturesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['rsa-signatures']['$post']>) {
      return parseResponse(client.v1['rsa-signatures'].$post(args, options))
    },
  })
}

export function usePostV1RsaSignatures<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['rsa-signatures']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['rsa-signatures']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1RsaSignaturesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1RsaSignaturesDecryptMutationKey() {
  return ['v1', '/v1/rsa-signatures/decrypt', 'POST'] as const
}

export function getPostV1RsaSignaturesDecryptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['rsa-signatures']['decrypt']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['rsa-signatures']['decrypt']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RsaSignaturesDecryptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['rsa-signatures']['decrypt']['$post']>,
    ) {
      return parseResponse(client.v1['rsa-signatures'].decrypt.$post(args, options))
    },
  })
}

export function usePostV1RsaSignaturesDecrypt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['rsa-signatures']['decrypt']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['rsa-signatures']['decrypt']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1RsaSignaturesDecryptMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1SequenceSetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sequence-sets']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/sequence-sets', keyArgs] as const
}

export function getV1SequenceSetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sequence-sets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SequenceSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['sequence-sets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SequenceSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sequence-sets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets']['$get']>>>
            >
          >,
          ReturnType<typeof getV1SequenceSetsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SequenceSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SequenceSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['sequence-sets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1SequenceSetsMutationKey() {
  return ['v1', '/v1/sequence-sets', 'POST'] as const
}

export function getPostV1SequenceSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['sequence-sets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SequenceSetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['sequence-sets']['$post']>) {
      return parseResponse(client.v1['sequence-sets'].$post(args, options))
    },
  })
}

export function usePostV1SequenceSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sequence-sets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['sequence-sets']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SequenceSetsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1SequenceSetsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/sequence-sets/:id', keyArgs] as const
}

export function getV1SequenceSetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SequenceSetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['sequence-sets'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SequenceSetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sequence-sets'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sequence-sets'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SequenceSetsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1)['sequence-sets'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SequenceSetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SequenceSetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['sequence-sets'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1SequenceSetsIdMutationKey() {
  return ['v1', '/v1/sequence-sets/:id', 'PUT'] as const
}

export function getPutV1SequenceSetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sequence-sets'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SequenceSetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$put']>) {
      return parseResponse(client.v1['sequence-sets'][':id'].$put(args, options))
    },
  })
}

export function usePutV1SequenceSetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sequence-sets'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SequenceSetsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1SequenceSetsIdMutationKey() {
  return ['v1', '/v1/sequence-sets/:id', 'DELETE'] as const
}

export function getDeleteV1SequenceSetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sequence-sets'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SequenceSetsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1['sequence-sets'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1SequenceSetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sequence-sets'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1SequenceSetsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1SettingsFinanceRevenueAutomationStartDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.settings.finance)['revenue-automation-start-date']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/settings/finance/revenue-automation-start-date', keyArgs] as const
}

export function getV1SettingsFinanceRevenueAutomationStartDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.settings.finance)['revenue-automation-start-date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SettingsFinanceRevenueAutomationStartDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.settings.finance['revenue-automation-start-date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SettingsFinanceRevenueAutomationStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.settings.finance)['revenue-automation-start-date']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.settings.finance)['revenue-automation-start-date']['$get']>
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
                    (typeof client.v1.settings.finance)['revenue-automation-start-date']['$get']
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
                    (typeof client.v1.settings.finance)['revenue-automation-start-date']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1SettingsFinanceRevenueAutomationStartDateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1.settings.finance)['revenue-automation-start-date']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SettingsFinanceRevenueAutomationStartDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SettingsFinanceRevenueAutomationStartDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.settings.finance['revenue-automation-start-date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1SubscriptionsMutationKey() {
  return ['v1', '/v1/subscriptions', 'POST'] as const
}

export function getPostV1SubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.subscriptions.$post>) {
      return parseResponse(client.v1.subscriptions.$post(args, options))
    },
  })
}

export function usePostV1Subscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.subscriptions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SubscriptionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1SubscriptionsAccountsAccountKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/subscriptions/accounts/:account-key', keyArgs] as const
}

export function getV1SubscriptionsAccountsAccountKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SubscriptionsAccountsAccountKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.subscriptions.accounts[':account-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SubscriptionsAccountsAccountKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>
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
                  ReturnType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1SubscriptionsAccountsAccountKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubscriptionsAccountsAccountKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SubscriptionsAccountsAccountKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.subscriptions.accounts[':account-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1SubscriptionsPreviewMutationKey() {
  return ['v1', '/v1/subscriptions/preview', 'POST'] as const
}

export function getPostV1SubscriptionsPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.preview.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.subscriptions.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SubscriptionsPreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.subscriptions.preview.$post>) {
      return parseResponse(client.v1.subscriptions.preview.$post(args, options))
    },
  })
}

export function usePostV1SubscriptionsPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.subscriptions.preview.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.subscriptions.preview.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SubscriptionsPreviewMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1SubscriptionsSubscriptionKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/subscriptions/:subscription-key', keyArgs] as const
}

export function getV1SubscriptionsSubscriptionKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SubscriptionsSubscriptionKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.subscriptions[':subscription-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SubscriptionsSubscriptionKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SubscriptionsSubscriptionKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubscriptionsSubscriptionKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SubscriptionsSubscriptionKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.subscriptions[':subscription-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1SubscriptionsSubscriptionKeyMutationKey() {
  return ['v1', '/v1/subscriptions/:subscription-key', 'PUT'] as const
}

export function getPutV1SubscriptionsSubscriptionKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SubscriptionsSubscriptionKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['$put']>,
    ) {
      return parseResponse(client.v1.subscriptions[':subscription-key'].$put(args, options))
    },
  })
}

export function usePutV1SubscriptionsSubscriptionKey<
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
                Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SubscriptionsSubscriptionKeyMutationOptions<
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

export function getPutV1SubscriptionsSubscriptionKeyCancelMutationKey() {
  return ['v1', '/v1/subscriptions/:subscription-key/cancel', 'PUT'] as const
}

export function getPutV1SubscriptionsSubscriptionKeyCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['cancel']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SubscriptionsSubscriptionKeyCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.subscriptions)[':subscription-key']['cancel']['$put']
      >,
    ) {
      return parseResponse(client.v1.subscriptions[':subscription-key'].cancel.$put(args, options))
    },
  })
}

export function usePutV1SubscriptionsSubscriptionKeyCancel<
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
                    (typeof client.v1.subscriptions)[':subscription-key']['cancel']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['cancel']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SubscriptionsSubscriptionKeyCancelMutationOptions<
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

export function getPutV1SubscriptionsSubscriptionKeyRenewMutationKey() {
  return ['v1', '/v1/subscriptions/:subscription-key/renew', 'PUT'] as const
}

export function getPutV1SubscriptionsSubscriptionKeyRenewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['renew']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['renew']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SubscriptionsSubscriptionKeyRenewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.subscriptions)[':subscription-key']['renew']['$put']
      >,
    ) {
      return parseResponse(client.v1.subscriptions[':subscription-key'].renew.$put(args, options))
    },
  })
}

export function usePutV1SubscriptionsSubscriptionKeyRenew<
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
                  ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['renew']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['renew']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SubscriptionsSubscriptionKeyRenewMutationOptions<
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

export function getPutV1SubscriptionsSubscriptionKeyResumeMutationKey() {
  return ['v1', '/v1/subscriptions/:subscription-key/resume', 'PUT'] as const
}

export function getPutV1SubscriptionsSubscriptionKeyResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['resume']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['resume']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SubscriptionsSubscriptionKeyResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.subscriptions)[':subscription-key']['resume']['$put']
      >,
    ) {
      return parseResponse(client.v1.subscriptions[':subscription-key'].resume.$put(args, options))
    },
  })
}

export function usePutV1SubscriptionsSubscriptionKeyResume<
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
                    (typeof client.v1.subscriptions)[':subscription-key']['resume']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['resume']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SubscriptionsSubscriptionKeyResumeMutationOptions<
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

export function getPutV1SubscriptionsSubscriptionKeySuspendMutationKey() {
  return ['v1', '/v1/subscriptions/:subscription-key/suspend', 'PUT'] as const
}

export function getPutV1SubscriptionsSubscriptionKeySuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['suspend']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['suspend']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SubscriptionsSubscriptionKeySuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.subscriptions)[':subscription-key']['suspend']['$put']
      >,
    ) {
      return parseResponse(client.v1.subscriptions[':subscription-key'].suspend.$put(args, options))
    },
  })
}

export function usePutV1SubscriptionsSubscriptionKeySuspend<
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
                    (typeof client.v1.subscriptions)[':subscription-key']['suspend']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.subscriptions)[':subscription-key']['suspend']['$put']
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
  const mutationDefaults = getPutV1SubscriptionsSubscriptionKeySuspendMutationOptions<
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

export function getV1SubscriptionsSubscriptionKeyVersionsVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.subscriptions)[':subscription-key']['versions'][':version']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/subscriptions/:subscription-key/versions/:version', keyArgs] as const
}

export function getV1SubscriptionsSubscriptionKeyVersionsVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.subscriptions)[':subscription-key']['versions'][':version']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SubscriptionsSubscriptionKeyVersionsVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.subscriptions[':subscription-key'].versions[':version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SubscriptionsSubscriptionKeyVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.subscriptions)[':subscription-key']['versions'][':version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.subscriptions)[':subscription-key']['versions'][':version']['$get']
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
                    (typeof client.v1.subscriptions)[':subscription-key']['versions'][':version']['$get']
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
                    (typeof client.v1.subscriptions)[':subscription-key']['versions'][':version']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1SubscriptionsSubscriptionKeyVersionsVersionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1.subscriptions)[':subscription-key']['versions'][':version']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubscriptionsSubscriptionKeyVersionsVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SubscriptionsSubscriptionKeyVersionsVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.subscriptions[':subscription-key'].versions[':version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SubscriptionsSubscriptionKeyRampMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramp-metrics']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/subscriptions/:subscriptionKey/ramp-metrics', keyArgs] as const
}

export function getV1SubscriptionsSubscriptionKeyRampMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramp-metrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SubscriptionsSubscriptionKeyRampMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.subscriptions[':subscriptionKey']['ramp-metrics'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SubscriptionsSubscriptionKeyRampMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramp-metrics']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramp-metrics']['$get']>
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
                    (typeof client.v1.subscriptions)[':subscriptionKey']['ramp-metrics']['$get']
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
                    (typeof client.v1.subscriptions)[':subscriptionKey']['ramp-metrics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1SubscriptionsSubscriptionKeyRampMetricsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramp-metrics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubscriptionsSubscriptionKeyRampMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SubscriptionsSubscriptionKeyRampMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.subscriptions[':subscriptionKey']['ramp-metrics'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SubscriptionsSubscriptionKeyRampsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/subscriptions/:subscriptionKey/ramps', keyArgs] as const
}

export function getV1SubscriptionsSubscriptionKeyRampsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SubscriptionsSubscriptionKeyRampsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.subscriptions[':subscriptionKey'].ramps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SubscriptionsSubscriptionKeyRamps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>
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
                  ReturnType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1SubscriptionsSubscriptionKeyRampsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubscriptionsSubscriptionKeyRampsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SubscriptionsSubscriptionKeyRampsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.subscriptions[':subscriptionKey'].ramps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1SubscriptionsSubscriptionNumberCustomFieldsMutationKey() {
  return ['v1', '/v1/subscriptions/:subscriptionNumber/customFields', 'PUT'] as const
}

export function getPutV1SubscriptionsSubscriptionNumberCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.subscriptions)[':subscriptionNumber']['customFields']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.subscriptions)[':subscriptionNumber']['customFields']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1SubscriptionsSubscriptionNumberCustomFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.subscriptions)[':subscriptionNumber']['customFields']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.subscriptions[':subscriptionNumber'].customFields.$put(args, options),
      )
    },
  })
}

export function usePutV1SubscriptionsSubscriptionNumberCustomFields<
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
                    (typeof client.v1.subscriptions)[':subscriptionNumber']['customFields']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.subscriptions)[':subscriptionNumber']['customFields']['$put']
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
  const mutationDefaults = getPutV1SubscriptionsSubscriptionNumberCustomFieldsMutationOptions<
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

export function getPutV1SubscriptionsSubscriptionNumberVersionsVersionCustomFieldsMutationKey() {
  return [
    'v1',
    '/v1/subscriptions/:subscriptionNumber/versions/:version/customFields',
    'PUT',
  ] as const
}

export function getPutV1SubscriptionsSubscriptionNumberVersionsVersionCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.subscriptions)[':subscriptionNumber']['versions'][':version']['customFields']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.subscriptions)[':subscriptionNumber']['versions'][':version']['customFields']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1SubscriptionsSubscriptionNumberVersionsVersionCustomFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.subscriptions)[':subscriptionNumber']['versions'][':version']['customFields']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.subscriptions[':subscriptionNumber'].versions[':version'].customFields.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1SubscriptionsSubscriptionNumberVersionsVersionCustomFields<
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
                    (typeof client.v1.subscriptions)[':subscriptionNumber']['versions'][':version']['customFields']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.subscriptions)[':subscriptionNumber']['versions'][':version']['customFields']['$put']
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
  const mutationDefaults =
    getPutV1SubscriptionsSubscriptionNumberVersionsVersionCustomFieldsMutationOptions<
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

export function getV1TaxationitemsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.taxationitems)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/taxationitems/:id', keyArgs] as const
}

export function getV1TaxationitemsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.taxationitems)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TaxationitemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.taxationitems[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TaxationitemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.taxationitems)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TaxationitemsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TaxationitemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TaxationitemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.taxationitems[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1TaxationitemsIdMutationKey() {
  return ['v1', '/v1/taxationitems/:id', 'PUT'] as const
}

export function getPutV1TaxationitemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.taxationitems)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TaxationitemsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.taxationitems)[':id']['$put']>) {
      return parseResponse(client.v1.taxationitems[':id'].$put(args, options))
    },
  })
}

export function usePutV1TaxationitemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.taxationitems)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1TaxationitemsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1TaxationitemsIdMutationKey() {
  return ['v1', '/v1/taxationitems/:id', 'DELETE'] as const
}

export function getDeleteV1TaxationitemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.taxationitems)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TaxationitemsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.taxationitems)[':id']['$delete']>) {
      return parseResponse(client.v1.taxationitems[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1TaxationitemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.taxationitems)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1TaxationitemsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1TransactionsInvoicesAccountsAccountKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/transactions/invoices/accounts/:account-key', keyArgs] as const
}

export function getV1TransactionsInvoicesAccountsAccountKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionsInvoicesAccountsAccountKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transactions.invoices.accounts[':account-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransactionsInvoicesAccountsAccountKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']>
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
                    (typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']
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
                    (typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TransactionsInvoicesAccountsAccountKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionsInvoicesAccountsAccountKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransactionsInvoicesAccountsAccountKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transactions.invoices.accounts[':account-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TransactionsPaymentsAccountsAccountKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transactions.payments.accounts)[':account-key']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/transactions/payments/accounts/:account-key', keyArgs] as const
}

export function getV1TransactionsPaymentsAccountsAccountKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transactions.payments.accounts)[':account-key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionsPaymentsAccountsAccountKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transactions.payments.accounts[':account-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransactionsPaymentsAccountsAccountKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.transactions.payments.accounts)[':account-key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transactions.payments.accounts)[':account-key']['$get']>
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
                    (typeof client.v1.transactions.payments.accounts)[':account-key']['$get']
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
                    (typeof client.v1.transactions.payments.accounts)[':account-key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TransactionsPaymentsAccountsAccountKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1.transactions.payments.accounts)[':account-key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionsPaymentsAccountsAccountKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransactionsPaymentsAccountsAccountKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transactions.payments.accounts[':account-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1UsageMutationKey() {
  return ['v1', '/v1/usage', 'POST'] as const
}

export function getPostV1UsageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.usage.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.usage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.usage.$post>) {
      return parseResponse(client.v1.usage.$post(args, options))
    },
  })
}

export function usePostV1Usage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.usage.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.usage.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1UsageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1UsageAccountsAccountKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.usage.accounts)[':account-key']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/usage/accounts/:account-key', keyArgs] as const
}

export function getV1UsageAccountsAccountKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.usage.accounts)[':account-key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsageAccountsAccountKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.usage.accounts[':account-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsageAccountsAccountKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.usage.accounts)[':account-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.usage.accounts)[':account-key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.usage.accounts)[':account-key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.usage.accounts)[':account-key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1UsageAccountsAccountKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.usage.accounts)[':account-key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsageAccountsAccountKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsageAccountsAccountKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.usage.accounts[':account-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1UsersUsernameAcceptAccessMutationKey() {
  return ['v1', '/v1/users/:username/accept-access', 'PUT'] as const
}

export function getPutV1UsersUsernameAcceptAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users)[':username']['accept-access']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users)[':username']['accept-access']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUsernameAcceptAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.users)[':username']['accept-access']['$put']>,
    ) {
      return parseResponse(client.v1.users[':username']['accept-access'].$put(args, options))
    },
  })
}

export function usePutV1UsersUsernameAcceptAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':username']['accept-access']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.users)[':username']['accept-access']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1UsersUsernameAcceptAccessMutationOptions<
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

export function getV1UsersUsernameAccessibleEntitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/users/:username/accessible-entities', keyArgs] as const
}

export function getV1UsersUsernameAccessibleEntitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersUsernameAccessibleEntitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users[':username']['accessible-entities'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersUsernameAccessibleEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>
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
                  ReturnType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1UsersUsernameAccessibleEntitiesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersUsernameAccessibleEntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersUsernameAccessibleEntitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users[':username']['accessible-entities'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1UsersUsernameDenyAccessMutationKey() {
  return ['v1', '/v1/users/:username/deny-access', 'PUT'] as const
}

export function getPutV1UsersUsernameDenyAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users)[':username']['deny-access']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users)[':username']['deny-access']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUsernameDenyAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.users)[':username']['deny-access']['$put']>,
    ) {
      return parseResponse(client.v1.users[':username']['deny-access'].$put(args, options))
    },
  })
}

export function usePutV1UsersUsernameDenyAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':username']['deny-access']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.users)[':username']['deny-access']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1UsersUsernameDenyAccessMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1UsersUsernameRequestAccessMutationKey() {
  return ['v1', '/v1/users/:username/request-access', 'PUT'] as const
}

export function getPutV1UsersUsernameRequestAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users)[':username']['request-access']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users)[':username']['request-access']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUsernameRequestAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.users)[':username']['request-access']['$put']>,
    ) {
      return parseResponse(client.v1.users[':username']['request-access'].$put(args, options))
    },
  })
}

export function usePutV1UsersUsernameRequestAccess<
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
                Awaited<ReturnType<(typeof client.v1.users)[':username']['request-access']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.users)[':username']['request-access']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1UsersUsernameRequestAccessMutationOptions<
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

export function getWorkflowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflows.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workflows', '/workflows', keyArgs] as const
}

export function getWorkflowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWorkflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
          >,
          ReturnType<typeof getWorkflowsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWorkflowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWorkflowsImportMutationKey() {
  return ['workflows', '/workflows/import', 'POST'] as const
}

export function getPostWorkflowsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.workflows.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkflowsImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workflows.import.$post>) {
      return parseResponse(client.workflows.import.$post(args, options))
    },
  })
}

export function usePostWorkflowsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.workflows.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.workflows.import.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkflowsImportMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkflowsMetricsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)['metrics.json']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workflows', '/workflows/metrics.json', keyArgs] as const
}

export function getWorkflowsMetricsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)['metrics.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsMetricsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows['metrics.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowsMetricsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)['metrics.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)['metrics.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)['metrics.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)['metrics.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkflowsMetricsJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)['metrics.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsMetricsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsMetricsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows['metrics.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkflowsTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflows.tasks.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workflows', '/workflows/tasks', keyArgs] as const
}

export function getWorkflowsTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflows.tasks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows.tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowsTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflows.tasks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.workflows.tasks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.workflows.tasks.$get>>>
            >
          >,
          ReturnType<typeof getWorkflowsTasksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.tasks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows.tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWorkflowsTasksBatchUpdateMutationKey() {
  return ['workflows', '/workflows/tasks/batch_update', 'PUT'] as const
}

export function getPutWorkflowsTasksBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.workflows.tasks.batch_update.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.workflows.tasks.batch_update.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutWorkflowsTasksBatchUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workflows.tasks.batch_update.$put>) {
      return parseResponse(client.workflows.tasks.batch_update.$put(args, options))
    },
  })
}

export function usePutWorkflowsTasksBatchUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.workflows.tasks.batch_update.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.workflows.tasks.batch_update.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWorkflowsTasksBatchUpdateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkflowsTasksTaskIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows.tasks)[':task_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workflows', '/workflows/tasks/:task_id', keyArgs] as const
}

export function getWorkflowsTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows.tasks)[':task_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsTasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows.tasks[':task_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowsTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflows.tasks)[':task_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows.tasks)[':task_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows.tasks)[':task_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows.tasks)[':task_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkflowsTasksTaskIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.workflows.tasks)[':task_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsTasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsTasksTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows.tasks[':task_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWorkflowsTasksTaskIdRerunMutationKey() {
  return ['workflows', '/workflows/tasks/:task_id/rerun', 'POST'] as const
}

export function getPostWorkflowsTasksTaskIdRerunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows.tasks)[':task_id']['rerun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workflows.tasks)[':task_id']['rerun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkflowsTasksTaskIdRerunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workflows.tasks)[':task_id']['rerun']['$post']>,
    ) {
      return parseResponse(client.workflows.tasks[':task_id'].rerun.$post(args, options))
    },
  })
}

export function usePostWorkflowsTasksTaskIdRerun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows.tasks)[':task_id']['rerun']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workflows.tasks)[':task_id']['rerun']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkflowsTasksTaskIdRerunMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkflowsWorkflowIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':workflow_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workflows', '/workflows/:workflow_id', keyArgs] as const
}

export function getWorkflowsWorkflowIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':workflow_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsWorkflowIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows[':workflow_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowsWorkflowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':workflow_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkflowsWorkflowIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsWorkflowIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsWorkflowIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows[':workflow_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWorkflowsWorkflowIdMutationKey() {
  return ['workflows', '/workflows/:workflow_id', 'DELETE'] as const
}

export function getDeleteWorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workflows)[':workflow_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkflowsWorkflowIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workflows)[':workflow_id']['$delete']>) {
      return parseResponse(client.workflows[':workflow_id'].$delete(args, options))
    },
  })
}

export function useDeleteWorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workflows)[':workflow_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchWorkflowsWorkflowIdMutationKey() {
  return ['workflows', '/workflows/:workflow_id', 'PATCH'] as const
}

export function getPatchWorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workflows)[':workflow_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWorkflowsWorkflowIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workflows)[':workflow_id']['$patch']>) {
      return parseResponse(client.workflows[':workflow_id'].$patch(args, options))
    },
  })
}

export function usePatchWorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workflows)[':workflow_id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkflowsWorkflowIdExportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workflows)[':workflow_id']['export']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workflows', '/workflows/:workflow_id/export', keyArgs] as const
}

export function getWorkflowsWorkflowIdExportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workflows)[':workflow_id']['export']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsWorkflowIdExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows[':workflow_id'].export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowsWorkflowIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workflows)[':workflow_id']['export']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['export']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['export']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkflowsWorkflowIdExportQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsWorkflowIdExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsWorkflowIdExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows[':workflow_id'].export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWorkflowsWorkflowIdRunMutationKey() {
  return ['workflows', '/workflows/:workflow_id/run', 'POST'] as const
}

export function getPostWorkflowsWorkflowIdRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workflows)[':workflow_id']['run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkflowsWorkflowIdRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workflows)[':workflow_id']['run']['$post']>,
    ) {
      return parseResponse(client.workflows[':workflow_id'].run.$post(args, options))
    },
  })
}

export function usePostWorkflowsWorkflowIdRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['run']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workflows)[':workflow_id']['run']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkflowsWorkflowIdRunMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
