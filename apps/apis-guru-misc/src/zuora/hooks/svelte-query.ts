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
  args: InferRequestType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['charge-metrics', '/charge-metrics/data/charge-metrics', keyArgs] as const
}

export function getChargeMetricsDataChargeMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChargeMetricsDataChargeMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['charge-metrics'].data['charge-metrics'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChargeMetricsDataChargeMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getChargeMetricsDataChargeMetricsQueryKey>
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
      ...getChargeMetricsDataChargeMetricsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getChargeMetricsDataChargeMetricsDiscountAllocationDetailQueryKey(
  args: InferRequestType<
    (typeof client)['charge-metrics']['data']['charge-metrics-discount-allocation-detail']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'charge-metrics',
    '/charge-metrics/data/charge-metrics-discount-allocation-detail',
    keyArgs,
  ] as const
}

export function getChargeMetricsDataChargeMetricsDiscountAllocationDetailQueryOptions<
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
  args: InferRequestType<
    (typeof client)['charge-metrics']['data']['charge-metrics-discount-allocation-detail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChargeMetricsDataChargeMetricsDiscountAllocationDetailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['charge-metrics'].data['charge-metrics-discount-allocation-detail'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChargeMetricsDataChargeMetricsDiscountAllocationDetail<
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
  args: () => InferRequestType<
    (typeof client)['charge-metrics']['data']['charge-metrics-discount-allocation-detail']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getChargeMetricsDataChargeMetricsDiscountAllocationDetailQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getEventsEventTriggersQueryKey(
  args: InferRequestType<(typeof client.events)['event-triggers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/event-triggers', keyArgs] as const
}

export function getEventsEventTriggersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-triggers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)['event-triggers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-triggers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventTriggersQueryKey>
  >({
    queryKey: getEventsEventTriggersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events['event-triggers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsEventTriggers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-triggers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)['event-triggers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events)['event-triggers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsEventTriggersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsEventTriggersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostEventsEventTriggers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsEventTriggersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEventsEventTriggersIdQueryKey(
  args: InferRequestType<(typeof client.events)['event-triggers'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/event-triggers/:id', keyArgs] as const
}

export function getEventsEventTriggersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)['event-triggers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)['event-triggers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEventsEventTriggersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events['event-triggers'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsEventTriggersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)['event-triggers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)['event-triggers'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEventsEventTriggersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutEventsEventTriggersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEventsEventTriggersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteEventsEventTriggersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEventsEventTriggersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNotificationsEmailTemplatesQueryKey(
  args: InferRequestType<(typeof client.notifications)['email-templates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications/email-templates', keyArgs] as const
}

export function getNotificationsEmailTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)['email-templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)['email-templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsEmailTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications['email-templates'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNotificationsEmailTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)['email-templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notifications)['email-templates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNotificationsEmailTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNotificationsEmailTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificationsEmailTemplatesMutationOptions<
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

export function getNotificationsEmailTemplatesIdQueryKey(
  args: InferRequestType<(typeof client.notifications)['email-templates'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications/email-templates/:id', keyArgs] as const
}

export function getNotificationsEmailTemplatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)['email-templates'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)['email-templates'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsEmailTemplatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications['email-templates'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNotificationsEmailTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)['email-templates'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notifications)['email-templates'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNotificationsEmailTemplatesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNotificationsEmailTemplatesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutNotificationsEmailTemplatesIdMutationOptions<
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

export function createDeleteNotificationsEmailTemplatesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteNotificationsEmailTemplatesIdMutationOptions<
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

export function createDeleteNotificationsHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notifications.history.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.notifications.history.$delete>,
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
    const mutationDefaults = getDeleteNotificationsHistoryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNotificationsHistoryTasksIdQueryKey(
  args: InferRequestType<(typeof client.notifications.history.tasks)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications/history/tasks/:id', keyArgs] as const
}

export function getNotificationsHistoryTasksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.history.tasks)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications.history.tasks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsHistoryTasksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.history.tasks[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNotificationsHistoryTasksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.history.tasks)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notifications.history.tasks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNotificationsHistoryTasksIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNotificationsNotificationDefinitionsQueryKey(
  args: InferRequestType<(typeof client.notifications)['notification-definitions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications/notification-definitions', keyArgs] as const
}

export function getNotificationsNotificationDefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)['notification-definitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)['notification-definitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsNotificationDefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications['notification-definitions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNotificationsNotificationDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)['notification-definitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notifications)['notification-definitions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNotificationsNotificationDefinitionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNotificationsNotificationDefinitions<
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
                ReturnType<(typeof client.notifications)['notification-definitions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications)['notification-definitions']['$post']>,
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
    const mutationDefaults = getPostNotificationsNotificationDefinitionsMutationOptions<
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

export function getNotificationsNotificationDefinitionsIdQueryKey(
  args: InferRequestType<(typeof client.notifications)['notification-definitions'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications/notification-definitions/:id', keyArgs] as const
}

export function getNotificationsNotificationDefinitionsIdQueryOptions<
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
  args: InferRequestType<(typeof client.notifications)['notification-definitions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsNotificationDefinitionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications['notification-definitions'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNotificationsNotificationDefinitionsId<
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
  args: () => InferRequestType<
    (typeof client.notifications)['notification-definitions'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNotificationsNotificationDefinitionsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNotificationsNotificationDefinitionsId<
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
                ReturnType<(typeof client.notifications)['notification-definitions'][':id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications)['notification-definitions'][':id']['$put']>,
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
    const mutationDefaults = getPutNotificationsNotificationDefinitionsIdMutationOptions<
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

export function createDeleteNotificationsNotificationDefinitionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteNotificationsNotificationDefinitionsIdMutationOptions<
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

export function createPostOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth.token.$post>,
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
    const mutationDefaults = getPostOauthTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostObjectsBatchDefaultObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostObjectsBatchDefaultObjectMutationOptions<
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

export function getObjectsDefinitionsDefaultQueryKey(
  args: InferRequestType<typeof client.objects.definitions.default.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['objects', '/objects/definitions/default', keyArgs] as const
}

export function getObjectsDefinitionsDefaultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.objects.definitions.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.objects.definitions.default.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.objects.definitions.default.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectsDefinitionsDefaultQueryKey>
  >({
    queryKey: getObjectsDefinitionsDefaultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.objects.definitions.default.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createObjectsDefinitionsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.objects.definitions.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.objects.definitions.default.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.objects.definitions.default.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectsDefinitionsDefaultQueryKey>
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
      ...getObjectsDefinitionsDefaultQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostObjectsDefinitionsDefault<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostObjectsDefinitionsDefaultMutationOptions<
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

export function getObjectsDefinitionsDefaultObjectQueryKey(
  args: InferRequestType<(typeof client.objects.definitions.default)[':object']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['objects', '/objects/definitions/default/:object', keyArgs] as const
}

export function getObjectsDefinitionsDefaultObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects.definitions.default)[':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.objects.definitions.default)[':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getObjectsDefinitionsDefaultObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.objects.definitions.default[':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createObjectsDefinitionsDefaultObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects.definitions.default)[':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.objects.definitions.default)[':object']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getObjectsDefinitionsDefaultObjectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteObjectsDefinitionsDefaultObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteObjectsDefinitionsDefaultObjectMutationOptions<
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

export function getObjectsJobsQueryKey(args: InferRequestType<typeof client.objects.jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['objects', '/objects/jobs', keyArgs] as const
}

export function getObjectsJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.objects.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getObjectsJobsQueryKey>
  >({
    queryKey: getObjectsJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.objects.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createObjectsJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.objects.jobs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.jobs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getObjectsJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getObjectsJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostObjectsJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.jobs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.objects.jobs.$post>,
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
    const mutationDefaults = getPostObjectsJobsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getObjectsJobsIdQueryKey(
  args: InferRequestType<(typeof client.objects.jobs)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['objects', '/objects/jobs/:id', keyArgs] as const
}

export function getObjectsJobsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.objects.jobs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.objects.jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.objects.jobs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectsJobsIdQueryKey>
  >({
    queryKey: getObjectsJobsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.objects.jobs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createObjectsJobsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.objects.jobs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.objects.jobs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.objects.jobs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectsJobsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getObjectsJobsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getObjectsJobsIdErrorsQueryKey(
  args: InferRequestType<(typeof client.objects.jobs)[':id']['errors']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['objects', '/objects/jobs/:id/errors', keyArgs] as const
}

export function getObjectsJobsIdErrorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects.jobs)[':id']['errors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.objects.jobs)[':id']['errors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getObjectsJobsIdErrorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.objects.jobs[':id'].errors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createObjectsJobsIdErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects.jobs)[':id']['errors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.objects.jobs)[':id']['errors']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getObjectsJobsIdErrorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostObjectsJobsIdFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostObjectsJobsIdFilesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostObjectsMigrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.objects.migrations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.objects.migrations.$post>,
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
    const mutationDefaults = getPostObjectsMigrationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getObjectsRecordsDefaultObjectQueryKey(
  args: InferRequestType<(typeof client.objects.records.default)[':object']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['objects', '/objects/records/default/:object', keyArgs] as const
}

export function getObjectsRecordsDefaultObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects.records.default)[':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.objects.records.default)[':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getObjectsRecordsDefaultObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.objects.records.default[':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createObjectsRecordsDefaultObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects.records.default)[':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.objects.records.default)[':object']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getObjectsRecordsDefaultObjectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostObjectsRecordsDefaultObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostObjectsRecordsDefaultObjectMutationOptions<
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

export function getObjectsRecordsDefaultObjectIdQueryKey(
  args: InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['objects', '/objects/records/default/:object/:id', keyArgs] as const
}

export function getObjectsRecordsDefaultObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects.records.default)[':object'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getObjectsRecordsDefaultObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.objects.records.default[':object'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createObjectsRecordsDefaultObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects.records.default)[':object'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getObjectsRecordsDefaultObjectIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutObjectsRecordsDefaultObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutObjectsRecordsDefaultObjectIdMutationOptions<
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

export function createDeleteObjectsRecordsDefaultObjectId<
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
                ReturnType<(typeof client.objects.records.default)[':object'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteObjectsRecordsDefaultObjectIdMutationOptions<
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

export function createPatchObjectsRecordsDefaultObjectId<
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
                ReturnType<(typeof client.objects.records.default)[':object'][':id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$patch']>,
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
    const mutationDefaults = getPatchObjectsRecordsDefaultObjectIdMutationOptions<
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

export function getQueryJobsQueryKey(args: InferRequestType<typeof client.query.jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['query', '/query/jobs', keyArgs] as const
}

export function getQueryJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.query.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryJobsQueryKey>
  >({
    queryKey: getQueryJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQueryJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.query.jobs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.jobs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQueryJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostQueryJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.jobs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.query.jobs.$post>,
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
    const mutationDefaults = getPostQueryJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getQueryJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.query.jobs)[':job-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['query', '/query/jobs/:job-id', keyArgs] as const
}

export function getQueryJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.query.jobs)[':job-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.query.jobs)[':job-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.query.jobs)[':job-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryJobsJobIdQueryKey>
  >({
    queryKey: getQueryJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query.jobs[':job-id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQueryJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.query.jobs)[':job-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.query.jobs)[':job-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.query.jobs)[':job-id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueryJobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryJobsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteQueryJobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteQueryJobsJobIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSettingsBatchRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsBatchRequestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSettingsListingQueryKey(
  args: InferRequestType<typeof client.settings.listing.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['settings', '/settings/listing', keyArgs] as const
}

export function getSettingsListingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.listing.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.settings.listing.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.listing.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsListingQueryKey>
  >({
    queryKey: getSettingsListingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.listing.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSettingsListing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.listing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.settings.listing.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.listing.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsListingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsListingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1AccountingCodesQueryKey(
  args: InferRequestType<(typeof client.v1)['accounting-codes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounting-codes', keyArgs] as const
}

export function getV1AccountingCodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-codes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['accounting-codes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-codes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountingCodesQueryKey>
  >({
    queryKey: getV1AccountingCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['accounting-codes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountingCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-codes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['accounting-codes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['accounting-codes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountingCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountingCodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1AccountingCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountingCodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AccountingCodesAcIdQueryKey(
  args: InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounting-codes/:ac-id', keyArgs] as const
}

export function getV1AccountingCodesAcIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AccountingCodesAcIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['accounting-codes'][':ac-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountingCodesAcId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AccountingCodesAcIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1AccountingCodesAcId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1AccountingCodesAcIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1AccountingCodesAcId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AccountingCodesAcIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1AccountingCodesAcIdActivate<
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
                ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['activate']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['activate']['$put']>,
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
    const mutationDefaults = getPutV1AccountingCodesAcIdActivateMutationOptions<
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

export function createPutV1AccountingCodesAcIdDeactivate<
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
                ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['deactivate']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['deactivate']['$put']>,
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
    const mutationDefaults = getPutV1AccountingCodesAcIdDeactivateMutationOptions<
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

export function getV1AccountingPeriodsQueryKey(
  args: InferRequestType<(typeof client.v1)['accounting-periods']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounting-periods', keyArgs] as const
}

export function getV1AccountingPeriodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-periods']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['accounting-periods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-periods']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountingPeriodsQueryKey>
  >({
    queryKey: getV1AccountingPeriodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['accounting-periods'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountingPeriods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-periods']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['accounting-periods']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['accounting-periods']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountingPeriodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountingPeriodsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1AccountingPeriods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountingPeriodsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AccountingPeriodsApIdQueryKey(
  args: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounting-periods/:ap-id', keyArgs] as const
}

export function getV1AccountingPeriodsApIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AccountingPeriodsApIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['accounting-periods'][':ap-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountingPeriodsApId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AccountingPeriodsApIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1AccountingPeriodsApId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1AccountingPeriodsApIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1AccountingPeriodsApId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AccountingPeriodsApIdMutationOptions<
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

export function createPutV1AccountingPeriodsApIdClose<
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
                ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['close']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['close']['$put']>,
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
    const mutationDefaults = getPutV1AccountingPeriodsApIdCloseMutationOptions<
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

export function createPutV1AccountingPeriodsApIdPendingClose<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1AccountingPeriodsApIdPendingCloseMutationOptions<
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

export function createPutV1AccountingPeriodsApIdReopen<
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
                ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['reopen']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['reopen']['$put']>,
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
    const mutationDefaults = getPutV1AccountingPeriodsApIdReopenMutationOptions<
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

export function createPutV1AccountingPeriodsApIdRunTrialBalance<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1AccountingPeriodsApIdRunTrialBalanceMutationOptions<
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

export function createPostV1Accounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.accounts.$post>,
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
    const mutationDefaults = getPostV1AccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1AccountsBillingDocumentsFilesDeletionJobs<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountsBillingDocumentsFilesDeletionJobsMutationOptions<
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

export function getV1AccountsBillingDocumentsFilesDeletionJobsJobIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs'][':jobId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounts/billing-documents/files/deletion-jobs/:jobId', keyArgs] as const
}

export function getV1AccountsBillingDocumentsFilesDeletionJobsJobIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AccountsBillingDocumentsFilesDeletionJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts['billing-documents'].files['deletion-jobs'][':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountsBillingDocumentsFilesDeletionJobsJobId<
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
  args: () => InferRequestType<
    (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs'][':jobId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AccountsBillingDocumentsFilesDeletionJobsJobIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1AccountsAccountKeyQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounts/:account-key', keyArgs] as const
}

export function getV1AccountsAccountKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':account-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AccountsAccountKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountsAccountKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.accounts)[':account-key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AccountsAccountKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1AccountsAccountKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1AccountsAccountKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AccountsAccountKeySummaryQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounts/:account-key/summary', keyArgs] as const
}

export function getV1AccountsAccountKeySummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AccountsAccountKeySummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account-key'].summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountsAccountKeySummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AccountsAccountKeySummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1AccountsIdBillingDocumentsGenerate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountsIdBillingDocumentsGenerateMutationOptions<
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

export function createPostV1ActionAmend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.amend.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.action.amend.$post>,
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
    const mutationDefaults = getPostV1ActionAmendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ActionCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.action.create.$post>,
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
    const mutationDefaults = getPostV1ActionCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ActionDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.action.delete.$post>,
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
    const mutationDefaults = getPostV1ActionDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ActionExecute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.execute.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.action.execute.$post>,
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
    const mutationDefaults = getPostV1ActionExecuteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ActionGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.generate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.action.generate.$post>,
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
    const mutationDefaults = getPostV1ActionGenerateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ActionQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.query.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.action.query.$post>,
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
    const mutationDefaults = getPostV1ActionQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ActionQueryMore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.queryMore.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.action.queryMore.$post>,
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
    const mutationDefaults = getPostV1ActionQueryMoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ActionSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.subscribe.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.action.subscribe.$post>,
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
    const mutationDefaults = getPostV1ActionSubscribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ActionUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.action.update.$post>,
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
    const mutationDefaults = getPostV1ActionUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AmendmentsSubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/amendments/subscriptions/:subscription-id', keyArgs] as const
}

export function getV1AmendmentsSubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AmendmentsSubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.amendments.subscriptions[':subscription-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AmendmentsSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AmendmentsSubscriptionsSubscriptionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1AmendmentsAmendmentKeyQueryKey(
  args: InferRequestType<(typeof client.v1.amendments)[':amendment-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/amendments/:amendment-key', keyArgs] as const
}

export function getV1AmendmentsAmendmentKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.amendments)[':amendment-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.amendments)[':amendment-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AmendmentsAmendmentKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.amendments[':amendment-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AmendmentsAmendmentKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.amendments)[':amendment-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.amendments)[':amendment-key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AmendmentsAmendmentKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1AsyncJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.v1)['async-jobs'][':jobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/async-jobs/:jobId', keyArgs] as const
}

export function getV1AsyncJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['async-jobs'][':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['async-jobs'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AsyncJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['async-jobs'][':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AsyncJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['async-jobs'][':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['async-jobs'][':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AsyncJobsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1AsyncOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.async.orders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.async.orders.$post>,
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
    const mutationDefaults = getPostV1AsyncOrdersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1AsyncOrdersPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.async.orders.preview.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.async.orders.preview.$post>,
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
    const mutationDefaults = getPostV1AsyncOrdersPreviewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1Attachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.attachments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.attachments.$post>,
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
    const mutationDefaults = getPostV1AttachmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AttachmentsAttachmentIdQueryKey(
  args: InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/attachments/:attachment-id', keyArgs] as const
}

export function getV1AttachmentsAttachmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.attachments)[':attachment-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AttachmentsAttachmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.attachments[':attachment-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.attachments)[':attachment-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AttachmentsAttachmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1AttachmentsAttachmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1AttachmentsAttachmentIdMutationOptions<
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

export function createDeleteV1AttachmentsAttachmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AttachmentsAttachmentIdMutationOptions<
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

export function getV1AttachmentsObjectTypeObjectKeyQueryKey(
  args: InferRequestType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/attachments/:object-type/:object-key', keyArgs] as const
}

export function getV1AttachmentsObjectTypeObjectKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AttachmentsObjectTypeObjectKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.attachments[':object-type'][':object-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AttachmentsObjectTypeObjectKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.attachments)[':object-type'][':object-key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1AttachmentsObjectTypeObjectKeyQueryKey>
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
      ...getV1AttachmentsObjectTypeObjectKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1BillRunsBillRunIdEmails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1BillRunsBillRunIdEmailsMutationOptions<
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

export function getV1BillingDocumentsQueryKey(
  args: InferRequestType<(typeof client.v1)['billing-documents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/billing-documents', keyArgs] as const
}

export function getV1BillingDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['billing-documents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['billing-documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['billing-documents']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BillingDocumentsQueryKey>
  >({
    queryKey: getV1BillingDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['billing-documents'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BillingDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['billing-documents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['billing-documents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['billing-documents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BillingDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BillingDocumentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1BillingPreviewRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1BillingPreviewRunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1BillingPreviewRunsBillingPreviewRunIdQueryKey(
  args: InferRequestType<
    (typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/billing-preview-runs/:billingPreviewRunId', keyArgs] as const
}

export function getV1BillingPreviewRunsBillingPreviewRunIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1BillingPreviewRunsBillingPreviewRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['billing-preview-runs'][':billingPreviewRunId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BillingPreviewRunsBillingPreviewRunId<
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
  args: () => InferRequestType<
    (typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1BillingPreviewRunsBillingPreviewRunIdQueryKey>
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
      ...getV1BillingPreviewRunsBillingPreviewRunIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1Bulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bulk.$post>>>>>,
        TError,
        InferRequestType<typeof client.v1.bulk.$post>,
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
    const mutationDefaults = getPostV1BulkMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1BulkBulkKeyQueryKey(
  args: InferRequestType<(typeof client.v1.bulk)[':bulk-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/bulk/:bulk-key', keyArgs] as const
}

export function getV1BulkBulkKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bulk)[':bulk-key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bulk)[':bulk-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bulk)[':bulk-key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BulkBulkKeyQueryKey>
  >({
    queryKey: getV1BulkBulkKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.bulk[':bulk-key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1BulkBulkKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bulk)[':bulk-key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.bulk)[':bulk-key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bulk)[':bulk-key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BulkBulkKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BulkBulkKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1BulkBulkKeyStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1BulkBulkKeyStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CatalogProductProductIdQueryKey(
  args: InferRequestType<(typeof client.v1.catalog.product)[':product-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/catalog/product/:product-id', keyArgs] as const
}

export function getV1CatalogProductProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.catalog.product)[':product-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.catalog.product)[':product-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CatalogProductProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.catalog.product[':product-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CatalogProductProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.catalog.product)[':product-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.catalog.product)[':product-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CatalogProductProductIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CatalogProductsQueryKey(
  args: InferRequestType<typeof client.v1.catalog.products.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/catalog/products', keyArgs] as const
}

export function getV1CatalogProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalog.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.catalog.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalog.products.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CatalogProductsQueryKey>
  >({
    queryKey: getV1CatalogProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.catalog.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CatalogProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalog.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.catalog.products.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalog.products.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CatalogProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CatalogProductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1CatalogProductsProductIdShare<
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
                ReturnType<(typeof client.v1.catalog.products)[':product-id']['share']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.catalog.products)[':product-id']['share']['$post']>,
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
    const mutationDefaults = getPostV1CatalogProductsProductIdShareMutationOptions<
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

export function getV1ChargeRevenueSummariesSubscriptionChargesChargeKeyQueryKey(
  args: InferRequestType<
    (typeof client.v1)['charge-revenue-summaries']['subscription-charges'][':charge-key']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/charge-revenue-summaries/subscription-charges/:charge-key', keyArgs] as const
}

export function getV1ChargeRevenueSummariesSubscriptionChargesChargeKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['charge-revenue-summaries']['subscription-charges'][':charge-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ChargeRevenueSummariesSubscriptionChargesChargeKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['charge-revenue-summaries']['subscription-charges'][':charge-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ChargeRevenueSummariesSubscriptionChargesChargeKey<
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
  args: () => InferRequestType<
    (typeof client.v1)['charge-revenue-summaries']['subscription-charges'][':charge-key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ChargeRevenueSummariesSubscriptionChargesChargeKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1ChargeRevenueSummariesCrsNumberQueryKey(
  args: InferRequestType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/charge-revenue-summaries/:crs-number', keyArgs] as const
}

export function getV1ChargeRevenueSummariesCrsNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ChargeRevenueSummariesCrsNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['charge-revenue-summaries'][':crs-number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ChargeRevenueSummariesCrsNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ChargeRevenueSummariesCrsNumberQueryKey>
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
      ...getV1ChargeRevenueSummariesCrsNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1Connections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.connections.$post>,
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
    const mutationDefaults = getPostV1ConnectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1ContactsContactIdScrub<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ContactsContactIdScrubMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CreditmemosQueryKey(
  args: InferRequestType<typeof client.v1.creditmemos.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/creditmemos', keyArgs] as const
}

export function getV1CreditmemosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.creditmemos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.creditmemos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.creditmemos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CreditmemosQueryKey>
  >({
    queryKey: getV1CreditmemosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.creditmemos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Creditmemos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.creditmemos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.creditmemos.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.creditmemos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CreditmemosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CreditmemosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1Creditmemos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.creditmemos.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.creditmemos.$post>,
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
    const mutationDefaults = getPostV1CreditmemosMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CreditmemosCreditMemoIdQueryKey(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/creditmemos/:creditMemoId', keyArgs] as const
}

export function getV1CreditmemosCreditMemoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CreditmemosCreditMemoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CreditmemosCreditMemoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CreditmemosCreditMemoIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1CreditmemosCreditMemoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CreditmemosCreditMemoIdMutationOptions<
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

export function createDeleteV1CreditmemosCreditMemoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CreditmemosCreditMemoIdMutationOptions<
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

export function createPutV1CreditmemosCreditMemoIdApply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CreditmemosCreditMemoIdApplyMutationOptions<
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

export function createPutV1CreditmemosCreditMemoIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CreditmemosCreditMemoIdCancelMutationOptions<
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

export function createPostV1CreditmemosCreditMemoIdEmails<
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
                ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['emails']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['emails']['$post']>,
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
    const mutationDefaults = getPostV1CreditmemosCreditMemoIdEmailsMutationOptions<
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

export function createPostV1CreditmemosCreditMemoIdFiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CreditmemosCreditMemoIdFilesMutationOptions<
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

export function getV1CreditmemosCreditMemoIdItemsQueryKey(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/creditmemos/:creditMemoId/items', keyArgs] as const
}

export function getV1CreditmemosCreditMemoIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CreditmemosCreditMemoIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CreditmemosCreditMemoIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CreditmemosCreditMemoIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CreditmemosCreditMemoIdItemsCmitemidQueryKey(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/creditmemos/:creditMemoId/items/:cmitemid', keyArgs] as const
}

export function getV1CreditmemosCreditMemoIdItemsCmitemidQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CreditmemosCreditMemoIdItemsCmitemidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].items[':cmitemid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CreditmemosCreditMemoIdItemsCmitemid<
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
  args: () => InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CreditmemosCreditMemoIdItemsCmitemidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsQueryKey(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['taxation-items']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/creditmemos/:creditMemoId/items/:cmitemid/taxation-items', keyArgs] as const
}

export function getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['taxation-items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].items[':cmitemid']['taxation-items'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CreditmemosCreditMemoIdItemsCmitemidTaxationItems<
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
  args: () => InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['taxation-items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1CreditmemosCreditMemoIdPartsQueryKey(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/creditmemos/:creditMemoId/parts', keyArgs] as const
}

export function getV1CreditmemosCreditMemoIdPartsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CreditmemosCreditMemoIdPartsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].parts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CreditmemosCreditMemoIdParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CreditmemosCreditMemoIdPartsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CreditmemosCreditMemoIdPartsPartidQueryKey(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/creditmemos/:creditMemoId/parts/:partid', keyArgs] as const
}

export function getV1CreditmemosCreditMemoIdPartsPartidQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CreditmemosCreditMemoIdPartsPartidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].parts[':partid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CreditmemosCreditMemoIdPartsPartid<
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
  args: () => InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1CreditmemosCreditMemoIdPartsPartidQueryKey>
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
      ...getV1CreditmemosCreditMemoIdPartsPartidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CreditmemosCreditMemoIdPartsPartidItempartsQueryKey(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/creditmemos/:creditMemoId/parts/:partid/itemparts', keyArgs] as const
}

export function getV1CreditmemosCreditMemoIdPartsPartidItempartsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CreditmemosCreditMemoIdPartsPartidItempartsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].parts[':partid'].itemparts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CreditmemosCreditMemoIdPartsPartidItemparts<
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
  args: () => InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CreditmemosCreditMemoIdPartsPartidItempartsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidQueryKey(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts'][':itempartid']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/creditmemos/:creditMemoId/parts/:partid/itemparts/:itempartid',
    keyArgs,
  ] as const
}

export function getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts'][':itempartid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.creditmemos[':creditMemoId'].parts[':partid'].itemparts[':itempartid'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1CreditmemosCreditMemoIdPartsPartidItempartsItempartid<
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
  args: () => InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts'][':itempartid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1CreditmemosCreditMemoIdPdfs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CreditmemosCreditMemoIdPdfsMutationOptions<
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

export function createPutV1CreditmemosCreditMemoIdPost<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CreditmemosCreditMemoIdPostMutationOptions<
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

export function createPostV1CreditmemosCreditMemoIdTaxationitems<
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
                  (typeof client.v1.creditmemos)[':creditMemoId']['taxationitems']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['taxationitems']['$post']>,
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
    const mutationDefaults = getPostV1CreditmemosCreditMemoIdTaxationitemsMutationOptions<
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

export function createPutV1CreditmemosCreditMemoIdUnapply<
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
                ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['unapply']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['unapply']['$put']>,
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
    const mutationDefaults = getPutV1CreditmemosCreditMemoIdUnapplyMutationOptions<
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

export function createPutV1CreditmemosCreditMemoIdUnpost<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CreditmemosCreditMemoIdUnpostMutationOptions<
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

export function createPostV1CreditmemosCreditmemoIdRefunds<
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
                ReturnType<(typeof client.v1.creditmemos)[':creditmemoId']['refunds']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.creditmemos)[':creditmemoId']['refunds']['$post']>,
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
    const mutationDefaults = getPostV1CreditmemosCreditmemoIdRefundsMutationOptions<
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

export function getV1CustomExchangeRatesCurrencyQueryKey(
  args: InferRequestType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/custom-exchange-rates/:currency', keyArgs] as const
}

export function getV1CustomExchangeRatesCurrencyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CustomExchangeRatesCurrencyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['custom-exchange-rates'][':currency'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomExchangeRatesCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CustomExchangeRatesCurrencyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1DebitmemosQueryKey(args: InferRequestType<typeof client.v1.debitmemos.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/debitmemos', keyArgs] as const
}

export function getV1DebitmemosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.debitmemos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DebitmemosQueryKey>
  >({
    queryKey: getV1DebitmemosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.debitmemos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Debitmemos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.debitmemos.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1DebitmemosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DebitmemosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1Debitmemos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.debitmemos.$put>,
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
    const mutationDefaults = getPutV1DebitmemosMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1Debitmemos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.debitmemos.$post>,
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
    const mutationDefaults = getPostV1DebitmemosMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1DebitmemosDebitMemoIdQueryKey(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/debitmemos/:debitMemoId', keyArgs] as const
}

export function getV1DebitmemosDebitMemoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DebitmemosDebitMemoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.debitmemos[':debitMemoId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DebitmemosDebitMemoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DebitmemosDebitMemoIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1DebitmemosDebitMemoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1DebitmemosDebitMemoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1DebitmemosDebitMemoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1DebitmemosDebitMemoIdMutationOptions<
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

export function getV1DebitmemosDebitMemoIdApplicationPartsQueryKey(
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/debitmemos/:debitMemoId/application-parts', keyArgs] as const
}

export function getV1DebitmemosDebitMemoIdApplicationPartsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DebitmemosDebitMemoIdApplicationPartsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.debitmemos[':debitMemoId']['application-parts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DebitmemosDebitMemoIdApplicationParts<
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
  args: () => InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1DebitmemosDebitMemoIdApplicationPartsQueryKey>
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
      ...getV1DebitmemosDebitMemoIdApplicationPartsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutV1DebitmemosDebitMemoIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1DebitmemosDebitMemoIdCancelMutationOptions<
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

export function createPostV1DebitmemosDebitMemoIdCollect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1DebitmemosDebitMemoIdCollectMutationOptions<
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

export function createPostV1DebitmemosDebitMemoIdEmails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1DebitmemosDebitMemoIdEmailsMutationOptions<
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

export function createPostV1DebitmemosDebitMemoIdFiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1DebitmemosDebitMemoIdFilesMutationOptions<
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

export function getV1DebitmemosDebitMemoIdItemsQueryKey(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/debitmemos/:debitMemoId/items', keyArgs] as const
}

export function getV1DebitmemosDebitMemoIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DebitmemosDebitMemoIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.debitmemos[':debitMemoId'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DebitmemosDebitMemoIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DebitmemosDebitMemoIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1DebitmemosDebitMemoIdItemsDmitemidQueryKey(
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/debitmemos/:debitMemoId/items/:dmitemid', keyArgs] as const
}

export function getV1DebitmemosDebitMemoIdItemsDmitemidQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DebitmemosDebitMemoIdItemsDmitemidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.debitmemos[':debitMemoId'].items[':dmitemid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DebitmemosDebitMemoIdItemsDmitemid<
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
  args: () => InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1DebitmemosDebitMemoIdItemsDmitemidQueryKey>
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
      ...getV1DebitmemosDebitMemoIdItemsDmitemidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsQueryKey(
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['taxation-items']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/debitmemos/:debitMemoId/items/:dmitemid/taxation-items', keyArgs] as const
}

export function getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['taxation-items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.debitmemos[':debitMemoId'].items[':dmitemid']['taxation-items'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DebitmemosDebitMemoIdItemsDmitemidTaxationItems<
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
  args: () => InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['taxation-items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1DebitmemosDebitMemoIdPdfs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1DebitmemosDebitMemoIdPdfsMutationOptions<
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

export function createPutV1DebitmemosDebitMemoIdPost<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1DebitmemosDebitMemoIdPostMutationOptions<
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

export function createPostV1DebitmemosDebitMemoIdTaxationitems<
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
                ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['taxationitems']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['taxationitems']['$post']>,
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
    const mutationDefaults = getPostV1DebitmemosDebitMemoIdTaxationitemsMutationOptions<
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

export function createPutV1DebitmemosDebitMemoIdUnpost<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1DebitmemosDebitMemoIdUnpostMutationOptions<
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

export function getV1DescribeObjectQueryKey(
  args: InferRequestType<(typeof client.v1.describe)[':object']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/describe/:object', keyArgs] as const
}

export function getV1DescribeObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.describe)[':object']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.describe)[':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.describe)[':object']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DescribeObjectQueryKey>
  >({
    queryKey: getV1DescribeObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.describe[':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DescribeObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.describe)[':object']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.describe)[':object']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.describe)[':object']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DescribeObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DescribeObjectQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1DocumentProperties<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1DocumentPropertiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1DocumentPropertiesDocumentPropertiesId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1DocumentPropertiesDocumentPropertiesIdMutationOptions<
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

export function createDeleteV1DocumentPropertiesDocumentPropertiesId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1DocumentPropertiesDocumentPropertiesIdMutationOptions<
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

export function getV1DocumentPropertiesDocumentTypeDocumentIdQueryKey(
  args: InferRequestType<
    (typeof client.v1)['document-properties'][':documentType'][':documentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/document-properties/:documentType/:documentId', keyArgs] as const
}

export function getV1DocumentPropertiesDocumentTypeDocumentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['document-properties'][':documentType'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DocumentPropertiesDocumentTypeDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['document-properties'][':documentType'][':documentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DocumentPropertiesDocumentTypeDocumentId<
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
  args: () => InferRequestType<
    (typeof client.v1)['document-properties'][':documentType'][':documentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DocumentPropertiesDocumentTypeDocumentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1EntitiesQueryKey(args: InferRequestType<typeof client.v1.entities.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/entities', keyArgs] as const
}

export function getV1EntitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.entities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1EntitiesQueryKey>
  >({
    queryKey: getV1EntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.entities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Entities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.entities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EntitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1Entities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.entities.$post>,
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
    const mutationDefaults = getPostV1EntitiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1EntitiesIdQueryKey(
  args: InferRequestType<(typeof client.v1.entities)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/entities/:id', keyArgs] as const
}

export function getV1EntitiesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.entities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EntitiesIdQueryKey>
  >({
    queryKey: getV1EntitiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.entities[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1EntitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.entities)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EntitiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EntitiesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1EntitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.entities)[':id']['$put']>,
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
    const mutationDefaults = getPutV1EntitiesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1EntitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.entities)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1EntitiesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1EntitiesIdProvision<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1EntitiesIdProvisionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1EntityConnectionsQueryKey(
  args: InferRequestType<(typeof client.v1)['entity-connections']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/entity-connections', keyArgs] as const
}

export function getV1EntityConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entity-connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['entity-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entity-connections']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EntityConnectionsQueryKey>
  >({
    queryKey: getV1EntityConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['entity-connections'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EntityConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entity-connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['entity-connections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['entity-connections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EntityConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EntityConnectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1EntityConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1EntityConnectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1EntityConnectionsConnectionIdAccept<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1EntityConnectionsConnectionIdAcceptMutationOptions<
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

export function createPutV1EntityConnectionsConnectionIdDeny<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1EntityConnectionsConnectionIdDenyMutationOptions<
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

export function createPutV1EntityConnectionsConnectionIdDisconnect<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1EntityConnectionsConnectionIdDisconnectMutationOptions<
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

export function getV1FilesFileIdQueryKey(
  args: InferRequestType<(typeof client.v1.files)[':file-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/files/:file-id', keyArgs] as const
}

export function getV1FilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.files)[':file-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileIdQueryKey>
  >({
    queryKey: getV1FilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file-id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1FilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.files)[':file-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file-id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FilesFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FilesFileIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1GatewaySettlementPaymentsPaymentIdChargeback<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GatewaySettlementPaymentsPaymentIdChargebackMutationOptions<
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

export function createPostV1GatewaySettlementPaymentsPaymentIdReject<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GatewaySettlementPaymentsPaymentIdRejectMutationOptions<
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

export function createPostV1GatewaySettlementPaymentsPaymentIdSettle<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GatewaySettlementPaymentsPaymentIdSettleMutationOptions<
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

export function createPostV1HmacSignatures<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1HmacSignaturesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1HostedpagesQueryKey(
  args: InferRequestType<typeof client.v1.hostedpages.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/hostedpages', keyArgs] as const
}

export function getV1HostedpagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hostedpages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.hostedpages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hostedpages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1HostedpagesQueryKey>
  >({
    queryKey: getV1HostedpagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.hostedpages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Hostedpages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hostedpages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.hostedpages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hostedpages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1HostedpagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1HostedpagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1Invoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.invoices.$put>,
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
    const mutationDefaults = getPutV1InvoicesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1Invoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.invoices.$post>,
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
    const mutationDefaults = getPostV1InvoicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1InvoicesInvoiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1InvoicesInvoiceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1InvoicesInvoiceIdApplicationPartsQueryKey(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/invoices/:invoiceId/application-parts', keyArgs] as const
}

export function getV1InvoicesInvoiceIdApplicationPartsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1InvoicesInvoiceIdApplicationPartsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.invoices[':invoiceId']['application-parts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1InvoicesInvoiceIdApplicationParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1InvoicesInvoiceIdApplicationPartsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1InvoicesInvoiceIdCreditmemos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1InvoicesInvoiceIdCreditmemosMutationOptions<
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

export function createPostV1InvoicesInvoiceIdDebitmemos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1InvoicesInvoiceIdDebitmemosMutationOptions<
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

export function createPostV1InvoicesInvoiceIdEmails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1InvoicesInvoiceIdEmailsMutationOptions<
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

export function getV1InvoicesInvoiceIdFilesQueryKey(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/invoices/:invoiceId/files', keyArgs] as const
}

export function getV1InvoicesInvoiceIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1InvoicesInvoiceIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.invoices[':invoiceId'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1InvoicesInvoiceIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1InvoicesInvoiceIdFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1InvoicesInvoiceIdFiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1InvoicesInvoiceIdFilesMutationOptions<
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

export function getV1InvoicesInvoiceIdItemsQueryKey(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/invoices/:invoiceId/items', keyArgs] as const
}

export function getV1InvoicesInvoiceIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1InvoicesInvoiceIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.invoices[':invoiceId'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1InvoicesInvoiceIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1InvoicesInvoiceIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1InvoicesInvoiceIdItemsItemIdTaxationItemsQueryKey(
  args: InferRequestType<
    (typeof client.v1.invoices)[':invoiceId']['items'][':itemId']['taxation-items']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/invoices/:invoiceId/items/:itemId/taxation-items', keyArgs] as const
}

export function getV1InvoicesInvoiceIdItemsItemIdTaxationItemsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.invoices)[':invoiceId']['items'][':itemId']['taxation-items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1InvoicesInvoiceIdItemsItemIdTaxationItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.invoices[':invoiceId'].items[':itemId']['taxation-items'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1InvoicesInvoiceIdItemsItemIdTaxationItems<
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
  args: () => InferRequestType<
    (typeof client.v1.invoices)[':invoiceId']['items'][':itemId']['taxation-items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1InvoicesInvoiceIdItemsItemIdTaxationItemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutV1InvoicesInvoiceIdReverse<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1InvoicesInvoiceIdReverseMutationOptions<
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

export function createPutV1InvoicesInvoiceIdWriteOff<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1InvoicesInvoiceIdWriteOffMutationOptions<
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

export function createPostV1JournalEntries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1JournalEntriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1JournalEntriesJournalRunsJrNumberQueryKey(
  args: InferRequestType<
    (typeof client.v1)['journal-entries']['journal-runs'][':jr-number']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/journal-entries/journal-runs/:jr-number', keyArgs] as const
}

export function getV1JournalEntriesJournalRunsJrNumberQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['journal-entries']['journal-runs'][':jr-number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1JournalEntriesJournalRunsJrNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['journal-entries']['journal-runs'][':jr-number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1JournalEntriesJournalRunsJrNumber<
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
  args: () => InferRequestType<
    (typeof client.v1)['journal-entries']['journal-runs'][':jr-number']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1JournalEntriesJournalRunsJrNumberQueryKey>
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
      ...getV1JournalEntriesJournalRunsJrNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1JournalEntriesJeNumberQueryKey(
  args: InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/journal-entries/:je-number', keyArgs] as const
}

export function getV1JournalEntriesJeNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['journal-entries'][':je-number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1JournalEntriesJeNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['journal-entries'][':je-number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1JournalEntriesJeNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['journal-entries'][':je-number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1JournalEntriesJeNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1JournalEntriesJeNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1JournalEntriesJeNumberMutationOptions<
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

export function createPutV1JournalEntriesJeNumberBasicInformation<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1JournalEntriesJeNumberBasicInformationMutationOptions<
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

export function createPutV1JournalEntriesJeNumberCancel<
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
                ReturnType<(typeof client.v1)['journal-entries'][':je-number']['cancel']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['cancel']['$put']>,
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
    const mutationDefaults = getPutV1JournalEntriesJeNumberCancelMutationOptions<
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

export function createPostV1JournalRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['journal-runs']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['journal-runs']['$post']>,
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
    const mutationDefaults = getPostV1JournalRunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1JournalRunsJrNumberQueryKey(
  args: InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/journal-runs/:jr-number', keyArgs] as const
}

export function getV1JournalRunsJrNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1JournalRunsJrNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['journal-runs'][':jr-number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1JournalRunsJrNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1JournalRunsJrNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1JournalRunsJrNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1JournalRunsJrNumberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1JournalRunsJrNumberCancel<
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
                ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['cancel']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['cancel']['$put']>,
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
    const mutationDefaults = getPutV1JournalRunsJrNumberCancelMutationOptions<
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

export function getV1NotificationHistoryCalloutQueryKey(
  args: InferRequestType<(typeof client.v1)['notification-history']['callout']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/notification-history/callout', keyArgs] as const
}

export function getV1NotificationHistoryCalloutQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['notification-history']['callout']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['notification-history']['callout']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1NotificationHistoryCalloutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['notification-history'].callout.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NotificationHistoryCallout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['notification-history']['callout']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['notification-history']['callout']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1NotificationHistoryCalloutQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1NotificationHistoryEmailQueryKey(
  args: InferRequestType<(typeof client.v1)['notification-history']['email']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/notification-history/email', keyArgs] as const
}

export function getV1NotificationHistoryEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['notification-history']['email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['notification-history']['email']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1NotificationHistoryEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['notification-history'].email.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NotificationHistoryEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['notification-history']['email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['notification-history']['email']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1NotificationHistoryEmailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1ObjectAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.account.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.object.account.$post>,
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
    const mutationDefaults = getPostV1ObjectAccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectAccountIdQueryKey(
  args: InferRequestType<(typeof client.v1.object.account)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/account/:id', keyArgs] as const
}

export function getV1ObjectAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object.account)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectAccountIdQueryKey>
  >({
    queryKey: getV1ObjectAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object.account[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object.account)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObjectAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObjectAccountIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1ObjectAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectAccountIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ObjectAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectAccountIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectAmendmentIdQueryKey(
  args: InferRequestType<(typeof client.v1.object.amendment)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/amendment/:id', keyArgs] as const
}

export function getV1ObjectAmendmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.amendment)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object.amendment)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectAmendmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object.amendment[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectAmendmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.amendment)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object.amendment)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObjectAmendmentIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1ObjectAmendmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectAmendmentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ObjectAmendmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectAmendmentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ObjectBillRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObjectBillRunMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectBillRunIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/bill-run/:id', keyArgs] as const
}

export function getV1ObjectBillRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['bill-run'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectBillRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['bill-run'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectBillRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['bill-run'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObjectBillRunIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1ObjectBillRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectBillRunIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ObjectBillRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectBillRunIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectCommunicationProfileIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['communication-profile'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/communication-profile/:id', keyArgs] as const
}

export function getV1ObjectCommunicationProfileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['communication-profile'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['communication-profile'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectCommunicationProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['communication-profile'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectCommunicationProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['communication-profile'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['communication-profile'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectCommunicationProfileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1ObjectContact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.contact.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.object.contact.$post>,
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
    const mutationDefaults = getPostV1ObjectContactMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectContactIdQueryKey(
  args: InferRequestType<(typeof client.v1.object.contact)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/contact/:id', keyArgs] as const
}

export function getV1ObjectContactIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object.contact)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectContactIdQueryKey>
  >({
    queryKey: getV1ObjectContactIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object.contact[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object.contact)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObjectContactIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObjectContactIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1ObjectContactId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectContactIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ObjectContactId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectContactIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ObjectCreditBalanceAdjustment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObjectCreditBalanceAdjustmentMutationOptions<
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

export function getV1ObjectCreditBalanceAdjustmentIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/credit-balance-adjustment/:id', keyArgs] as const
}

export function getV1ObjectCreditBalanceAdjustmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectCreditBalanceAdjustmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['credit-balance-adjustment'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectCreditBalanceAdjustmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObjectCreditBalanceAdjustmentIdQueryKey>
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
      ...getV1ObjectCreditBalanceAdjustmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ObjectCreditBalanceAdjustmentId<
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
                ReturnType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$put']>,
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
    const mutationDefaults = getPutV1ObjectCreditBalanceAdjustmentIdMutationOptions<
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

export function createPostV1ObjectExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.export.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.object.export.$post>,
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
    const mutationDefaults = getPostV1ObjectExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectExportIdQueryKey(
  args: InferRequestType<(typeof client.v1.object.export)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/export/:id', keyArgs] as const
}

export function getV1ObjectExportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.export)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object.export)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.export)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectExportIdQueryKey>
  >({
    queryKey: getV1ObjectExportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object.export[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.export)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object.export)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.object.export)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObjectExportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObjectExportIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1ObjectFeature<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.feature.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.object.feature.$post>,
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
    const mutationDefaults = getPostV1ObjectFeatureMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectFeatureIdQueryKey(
  args: InferRequestType<(typeof client.v1.object.feature)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/feature/:id', keyArgs] as const
}

export function getV1ObjectFeatureIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object.feature)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectFeatureIdQueryKey>
  >({
    queryKey: getV1ObjectFeatureIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object.feature[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectFeatureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object.feature)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObjectFeatureIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObjectFeatureIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1ObjectFeatureId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectFeatureIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ObjectFeatureId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectFeatureIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ObjectImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.import.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.object.import.$post>,
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
    const mutationDefaults = getPostV1ObjectImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectImportIdQueryKey(
  args: InferRequestType<(typeof client.v1.object.import)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/import/:id', keyArgs] as const
}

export function getV1ObjectImportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.import)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object.import)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.import)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectImportIdQueryKey>
  >({
    queryKey: getV1ObjectImportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object.import[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectImportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.import)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object.import)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.object.import)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObjectImportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObjectImportIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1ObjectInvoiceAdjustment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObjectInvoiceAdjustmentMutationOptions<
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

export function getV1ObjectInvoiceAdjustmentIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/invoice-adjustment/:id', keyArgs] as const
}

export function getV1ObjectInvoiceAdjustmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectInvoiceAdjustmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['invoice-adjustment'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectInvoiceAdjustmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectInvoiceAdjustmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ObjectInvoiceAdjustmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectInvoiceAdjustmentIdMutationOptions<
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

export function createDeleteV1ObjectInvoiceAdjustmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectInvoiceAdjustmentIdMutationOptions<
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

export function getV1ObjectInvoiceItemAdjustmentIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/invoice-item-adjustment/:id', keyArgs] as const
}

export function getV1ObjectInvoiceItemAdjustmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectInvoiceItemAdjustmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['invoice-item-adjustment'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectInvoiceItemAdjustmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObjectInvoiceItemAdjustmentIdQueryKey>
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
      ...getV1ObjectInvoiceItemAdjustmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1ObjectInvoiceItemAdjustmentId<
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
                ReturnType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1ObjectInvoiceItemAdjustmentIdMutationOptions<
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

export function getV1ObjectInvoiceItemIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['invoice-item'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/invoice-item/:id', keyArgs] as const
}

export function getV1ObjectInvoiceItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-item'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['invoice-item'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectInvoiceItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['invoice-item'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectInvoiceItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-item'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['invoice-item'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectInvoiceItemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1ObjectInvoicePayment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObjectInvoicePaymentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectInvoicePaymentIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/invoice-payment/:id', keyArgs] as const
}

export function getV1ObjectInvoicePaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectInvoicePaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['invoice-payment'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectInvoicePaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectInvoicePaymentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ObjectInvoicePaymentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectInvoicePaymentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectInvoiceSplitItemIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/invoice-split-item/:id', keyArgs] as const
}

export function getV1ObjectInvoiceSplitItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectInvoiceSplitItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['invoice-split-item'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectInvoiceSplitItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectInvoiceSplitItemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ObjectInvoiceSplitIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['invoice-split'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/invoice-split/:id', keyArgs] as const
}

export function getV1ObjectInvoiceSplitIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-split'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['invoice-split'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectInvoiceSplitIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['invoice-split'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectInvoiceSplitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['invoice-split'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['invoice-split'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectInvoiceSplitIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ObjectInvoiceIdQueryKey(
  args: InferRequestType<(typeof client.v1.object.invoice)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/invoice/:id', keyArgs] as const
}

export function getV1ObjectInvoiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object.invoice)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectInvoiceIdQueryKey>
  >({
    queryKey: getV1ObjectInvoiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object.invoice[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object.invoice)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObjectInvoiceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObjectInvoiceIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1ObjectInvoiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectInvoiceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ObjectInvoiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectInvoiceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ObjectPayment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.payment.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.object.payment.$post>,
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
    const mutationDefaults = getPostV1ObjectPaymentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ObjectPaymentMethod<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObjectPaymentMethodMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectPaymentMethodSnapshotIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/payment-method-snapshot/:id', keyArgs] as const
}

export function getV1ObjectPaymentMethodSnapshotIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectPaymentMethodSnapshotIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['payment-method-snapshot'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectPaymentMethodSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObjectPaymentMethodSnapshotIdQueryKey>
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
      ...getV1ObjectPaymentMethodSnapshotIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ObjectPaymentMethodTransactionLogIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/payment-method-transaction-log/:id', keyArgs] as const
}

export function getV1ObjectPaymentMethodTransactionLogIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectPaymentMethodTransactionLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['payment-method-transaction-log'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectPaymentMethodTransactionLogId<
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
  args: () => InferRequestType<
    (typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObjectPaymentMethodTransactionLogIdQueryKey>
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
      ...getV1ObjectPaymentMethodTransactionLogIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ObjectPaymentMethodIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/payment-method/:id', keyArgs] as const
}

export function getV1ObjectPaymentMethodIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['payment-method'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectPaymentMethodIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['payment-method'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectPaymentMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['payment-method'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectPaymentMethodIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ObjectPaymentMethodId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectPaymentMethodIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ObjectPaymentMethodId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectPaymentMethodIdMutationOptions<
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

export function getV1ObjectPaymentTransactionLogIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/payment-transaction-log/:id', keyArgs] as const
}

export function getV1ObjectPaymentTransactionLogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectPaymentTransactionLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['payment-transaction-log'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectPaymentTransactionLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObjectPaymentTransactionLogIdQueryKey>
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
      ...getV1ObjectPaymentTransactionLogIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ObjectPaymentIdQueryKey(
  args: InferRequestType<(typeof client.v1.object.payment)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/payment/:id', keyArgs] as const
}

export function getV1ObjectPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object.payment)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectPaymentIdQueryKey>
  >({
    queryKey: getV1ObjectPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object.payment[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object.payment)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObjectPaymentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObjectPaymentIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1ObjectPaymentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectPaymentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ObjectPaymentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectPaymentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ObjectProduct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.product.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.object.product.$post>,
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
    const mutationDefaults = getPostV1ObjectProductMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectProductFeatureIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['product-feature'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/product-feature/:id', keyArgs] as const
}

export function getV1ObjectProductFeatureIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['product-feature'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['product-feature'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectProductFeatureIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['product-feature'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectProductFeatureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['product-feature'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['product-feature'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectProductFeatureIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1ObjectProductFeatureId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectProductFeatureIdMutationOptions<
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

export function createPostV1ObjectProductRatePlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObjectProductRatePlanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ObjectProductRatePlanCharge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObjectProductRatePlanChargeMutationOptions<
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

export function getV1ObjectProductRatePlanChargeTierIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/product-rate-plan-charge-tier/:id', keyArgs] as const
}

export function getV1ObjectProductRatePlanChargeTierIdQueryOptions<
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
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectProductRatePlanChargeTierIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['product-rate-plan-charge-tier'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectProductRatePlanChargeTierId<
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
  args: () => InferRequestType<
    (typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObjectProductRatePlanChargeTierIdQueryKey>
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
      ...getV1ObjectProductRatePlanChargeTierIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ObjectProductRatePlanChargeTierId<
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
                  (typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$put']>,
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
    const mutationDefaults = getPutV1ObjectProductRatePlanChargeTierIdMutationOptions<
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

export function getV1ObjectProductRatePlanChargeIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/product-rate-plan-charge/:id', keyArgs] as const
}

export function getV1ObjectProductRatePlanChargeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectProductRatePlanChargeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['product-rate-plan-charge'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectProductRatePlanChargeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObjectProductRatePlanChargeIdQueryKey>
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
      ...getV1ObjectProductRatePlanChargeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ObjectProductRatePlanChargeId<
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
                ReturnType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$put']>,
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
    const mutationDefaults = getPutV1ObjectProductRatePlanChargeIdMutationOptions<
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

export function createDeleteV1ObjectProductRatePlanChargeId<
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
                ReturnType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1ObjectProductRatePlanChargeIdMutationOptions<
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

export function getV1ObjectProductRatePlanIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/product-rate-plan/:id', keyArgs] as const
}

export function getV1ObjectProductRatePlanIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectProductRatePlanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['product-rate-plan'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectProductRatePlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectProductRatePlanIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ObjectProductRatePlanId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectProductRatePlanIdMutationOptions<
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

export function createDeleteV1ObjectProductRatePlanId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectProductRatePlanIdMutationOptions<
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

export function getV1ObjectProductIdQueryKey(
  args: InferRequestType<(typeof client.v1.object.product)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/product/:id', keyArgs] as const
}

export function getV1ObjectProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object.product)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectProductIdQueryKey>
  >({
    queryKey: getV1ObjectProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object.product[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object.product)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObjectProductIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObjectProductIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1ObjectProductId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectProductIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ObjectProductId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectProductIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectRatePlanChargeTierIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/rate-plan-charge-tier/:id', keyArgs] as const
}

export function getV1ObjectRatePlanChargeTierIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectRatePlanChargeTierIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['rate-plan-charge-tier'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectRatePlanChargeTierId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectRatePlanChargeTierIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ObjectRatePlanChargeIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/rate-plan-charge/:id', keyArgs] as const
}

export function getV1ObjectRatePlanChargeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectRatePlanChargeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['rate-plan-charge'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectRatePlanChargeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectRatePlanChargeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ObjectRatePlanChargeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectRatePlanChargeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectRatePlanIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['rate-plan'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/rate-plan/:id', keyArgs] as const
}

export function getV1ObjectRatePlanIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['rate-plan'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['rate-plan'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectRatePlanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['rate-plan'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectRatePlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['rate-plan'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['rate-plan'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObjectRatePlanIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1ObjectRefund<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.refund.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.object.refund.$post>,
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
    const mutationDefaults = getPostV1ObjectRefundMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectRefundInvoicePaymentIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/refund-invoice-payment/:id', keyArgs] as const
}

export function getV1ObjectRefundInvoicePaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectRefundInvoicePaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['refund-invoice-payment'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectRefundInvoicePaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObjectRefundInvoicePaymentIdQueryKey>
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
      ...getV1ObjectRefundInvoicePaymentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ObjectRefundTransactionLogIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/refund-transaction-log/:id', keyArgs] as const
}

export function getV1ObjectRefundTransactionLogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectRefundTransactionLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['refund-transaction-log'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectRefundTransactionLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObjectRefundTransactionLogIdQueryKey>
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
      ...getV1ObjectRefundTransactionLogIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ObjectRefundIdQueryKey(
  args: InferRequestType<(typeof client.v1.object.refund)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/refund/:id', keyArgs] as const
}

export function getV1ObjectRefundIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object.refund)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectRefundIdQueryKey>
  >({
    queryKey: getV1ObjectRefundIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object.refund[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectRefundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object.refund)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObjectRefundIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObjectRefundIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1ObjectRefundId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectRefundIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ObjectRefundId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectRefundIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectSubscriptionProductFeatureIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['subscription-product-feature'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/subscription-product-feature/:id', keyArgs] as const
}

export function getV1ObjectSubscriptionProductFeatureIdQueryOptions<
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
  args: InferRequestType<(typeof client.v1.object)['subscription-product-feature'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectSubscriptionProductFeatureIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['subscription-product-feature'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectSubscriptionProductFeatureId<
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
  args: () => InferRequestType<
    (typeof client.v1.object)['subscription-product-feature'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectSubscriptionProductFeatureIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ObjectSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.v1.object.subscription)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/subscription/:id', keyArgs] as const
}

export function getV1ObjectSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object.subscription)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object.subscription)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object.subscription[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object.subscription)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object.subscription)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectSubscriptionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ObjectSubscriptionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectSubscriptionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ObjectSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectSubscriptionIdMutationOptions<
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

export function createPostV1ObjectTaxationItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObjectTaxationItemMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectTaxationItemIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/taxation-item/:id', keyArgs] as const
}

export function getV1ObjectTaxationItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['taxation-item'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectTaxationItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['taxation-item'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectTaxationItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['taxation-item'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectTaxationItemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ObjectTaxationItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectTaxationItemIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ObjectTaxationItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectTaxationItemIdMutationOptions<
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

export function createPostV1ObjectUnitOfMeasure<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObjectUnitOfMeasureMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectUnitOfMeasureIdQueryKey(
  args: InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/unit-of-measure/:id', keyArgs] as const
}

export function getV1ObjectUnitOfMeasureIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectUnitOfMeasureIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object['unit-of-measure'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectUnitOfMeasureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectUnitOfMeasureIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ObjectUnitOfMeasureId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectUnitOfMeasureIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ObjectUnitOfMeasureId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectUnitOfMeasureIdMutationOptions<
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

export function createPostV1ObjectUsage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.usage.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.object.usage.$post>,
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
    const mutationDefaults = getPostV1ObjectUsageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectUsageIdQueryKey(
  args: InferRequestType<(typeof client.v1.object.usage)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/usage/:id', keyArgs] as const
}

export function getV1ObjectUsageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.object.usage)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectUsageIdQueryKey>
  >({
    queryKey: getV1ObjectUsageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.object.usage[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectUsageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.object.usage)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObjectUsageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObjectUsageIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1ObjectUsageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectUsageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ObjectUsageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectUsageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1OperationsBillingPreview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OperationsBillingPreviewMutationOptions<
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

export function createPostV1OperationsInvoiceCollect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OperationsInvoiceCollectMutationOptions<
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

export function createPostV1OrderLineItemsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrderLineItemsBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1OrderLineItemsItemIdQueryKey(
  args: InferRequestType<(typeof client.v1)['order-line-items'][':itemId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/order-line-items/:itemId', keyArgs] as const
}

export function getV1OrderLineItemsItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['order-line-items'][':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['order-line-items'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrderLineItemsItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['order-line-items'][':itemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrderLineItemsItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['order-line-items'][':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['order-line-items'][':itemId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1OrderLineItemsItemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1OrderLineItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1OrderLineItemsItemIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1OrdersQueryKey(args: InferRequestType<typeof client.v1.orders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders', keyArgs] as const
}

export function getV1OrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1OrdersQueryKey>
  >({
    queryKey: getV1OrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Orders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1Orders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.orders.$post>,
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
    const mutationDefaults = getPostV1OrdersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1OrdersInvoiceOwnerAccountNumberQueryKey(
  args: InferRequestType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders/invoiceOwner/:accountNumber', keyArgs] as const
}

export function getV1OrdersInvoiceOwnerAccountNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrdersInvoiceOwnerAccountNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.orders.invoiceOwner[':accountNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrdersInvoiceOwnerAccountNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1OrdersInvoiceOwnerAccountNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrdersPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.preview.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.orders.preview.$post>,
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
    const mutationDefaults = getPostV1OrdersPreviewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1OrdersSubscriptionSubscriptionNumberQueryKey(
  args: InferRequestType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders/subscription/:subscriptionNumber', keyArgs] as const
}

export function getV1OrdersSubscriptionSubscriptionNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrdersSubscriptionSubscriptionNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.orders.subscription[':subscriptionNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrdersSubscriptionSubscriptionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1OrdersSubscriptionSubscriptionNumberQueryKey>
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
      ...getV1OrdersSubscriptionSubscriptionNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrdersSubscriptionOwnerAccountNumberQueryKey(
  args: InferRequestType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders/subscriptionOwner/:accountNumber', keyArgs] as const
}

export function getV1OrdersSubscriptionOwnerAccountNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrdersSubscriptionOwnerAccountNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.orders.subscriptionOwner[':accountNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrdersSubscriptionOwnerAccountNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1OrdersSubscriptionOwnerAccountNumberQueryKey>
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
      ...getV1OrdersSubscriptionOwnerAccountNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrdersTermSubscriptionNumberQueryKey(
  args: InferRequestType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders/term/:subscriptionNumber', keyArgs] as const
}

export function getV1OrdersTermSubscriptionNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrdersTermSubscriptionNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.orders.term[':subscriptionNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrdersTermSubscriptionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1OrdersTermSubscriptionNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OrdersOrderNumberQueryKey(
  args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders/:orderNumber', keyArgs] as const
}

export function getV1OrdersOrderNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrdersOrderNumberQueryKey>
  >({
    queryKey: getV1OrdersOrderNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.orders[':orderNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrdersOrderNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.orders)[':orderNumber']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrdersOrderNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OrdersOrderNumberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteV1OrdersOrderNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1OrdersOrderNumberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1OrdersOrderNumberCustomFields<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1OrdersOrderNumberCustomFieldsMutationOptions<
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

export function getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberQueryKey(
  args: InferRequestType<
    (typeof client.v1.orders)[':orderNumber']['evergreenMetrics'][':subscriptionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders/:orderNumber/evergreenMetrics/:subscriptionNumber', keyArgs] as const
}

export function getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.orders)[':orderNumber']['evergreenMetrics'][':subscriptionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.orders[':orderNumber'].evergreenMetrics[':subscriptionNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrdersOrderNumberEvergreenMetricsSubscriptionNumber<
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
  args: () => InferRequestType<
    (typeof client.v1.orders)[':orderNumber']['evergreenMetrics'][':subscriptionNumber']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrdersOrderNumberRampMetricsQueryKey(
  args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders/:orderNumber/ramp-metrics', keyArgs] as const
}

export function getV1OrdersOrderNumberRampMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrdersOrderNumberRampMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.orders[':orderNumber']['ramp-metrics'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrdersOrderNumberRampMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1OrdersOrderNumberRampMetricsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1OrdersOrderNumberTriggerDates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1OrdersOrderNumberTriggerDatesMutationOptions<
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

export function createPostV1PaymentMethods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PaymentMethodsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1PaymentMethodsCreditCards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PaymentMethodsCreditCardsMutationOptions<
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

export function getV1PaymentMethodsCreditCardsAccountsAccountKeyQueryKey(
  args: InferRequestType<
    (typeof client.v1)['payment-methods']['credit-cards']['accounts'][':account-key']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payment-methods/credit-cards/accounts/:account-key', keyArgs] as const
}

export function getV1PaymentMethodsCreditCardsAccountsAccountKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['payment-methods']['credit-cards']['accounts'][':account-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PaymentMethodsCreditCardsAccountsAccountKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['payment-methods']['credit-cards'].accounts[':account-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentMethodsCreditCardsAccountsAccountKey<
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
  args: () => InferRequestType<
    (typeof client.v1)['payment-methods']['credit-cards']['accounts'][':account-key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1PaymentMethodsCreditCardsAccountsAccountKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutV1PaymentMethodsCreditCardsPaymentMethodId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1PaymentMethodsCreditCardsPaymentMethodIdMutationOptions<
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

export function createPostV1PaymentMethodsDecryption<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PaymentMethodsDecryptionMutationOptions<
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

export function getV1PaymentMethodsPaymentMethodIdQueryKey(
  args: InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payment-methods/:payment-method-id', keyArgs] as const
}

export function getV1PaymentMethodsPaymentMethodIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PaymentMethodsPaymentMethodIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['payment-methods'][':payment-method-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentMethodsPaymentMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1PaymentMethodsPaymentMethodIdQueryKey>
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
      ...getV1PaymentMethodsPaymentMethodIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1PaymentMethodsPaymentMethodId<
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
                ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$put']>,
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
    const mutationDefaults = getPutV1PaymentMethodsPaymentMethodIdMutationOptions<
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

export function createDeleteV1PaymentMethodsPaymentMethodId<
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
                ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$delete']>,
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
    const mutationDefaults = getDeleteV1PaymentMethodsPaymentMethodIdMutationOptions<
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

export function createPostV1PaymentMethodsPaymentMethodIdAuthorize<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PaymentMethodsPaymentMethodIdAuthorizeMutationOptions<
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

export function getV1PaymentMethodsPaymentMethodIdProfilesQueryKey(
  args: InferRequestType<
    (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payment-methods/:payment-method-id/profiles', keyArgs] as const
}

export function getV1PaymentMethodsPaymentMethodIdProfilesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PaymentMethodsPaymentMethodIdProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['payment-methods'][':payment-method-id'].profiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentMethodsPaymentMethodIdProfiles<
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
  args: () => InferRequestType<
    (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1PaymentMethodsPaymentMethodIdProfilesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1PaymentMethodsPaymentMethodIdProfiles<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PaymentMethodsPaymentMethodIdProfilesMutationOptions<
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

export function createPostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancel<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancelMutationOptions<
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

export function createPostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpire<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpireMutationOptions<
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

export function createPutV1PaymentMethodsPaymentMethodIdScrub<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1PaymentMethodsPaymentMethodIdScrubMutationOptions<
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

export function createPutV1PaymentMethodsPaymentMethodIdVerify<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1PaymentMethodsPaymentMethodIdVerifyMutationOptions<
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

export function createPostV1PaymentMethodsPaymentMethodIdVoidAuthorize<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PaymentMethodsPaymentMethodIdVoidAuthorizeMutationOptions<
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

export function getV1PaymentRunsQueryKey(
  args: InferRequestType<(typeof client.v1)['payment-runs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payment-runs', keyArgs] as const
}

export function getV1PaymentRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-runs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['payment-runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-runs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentRunsQueryKey>
  >({
    queryKey: getV1PaymentRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['payment-runs'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1PaymentRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-runs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['payment-runs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-runs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PaymentRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1PaymentRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-runs']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['payment-runs']['$post']>,
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
    const mutationDefaults = getPostV1PaymentRunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PaymentRunsPaymentRunIdQueryKey(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payment-runs/:paymentRunId', keyArgs] as const
}

export function getV1PaymentRunsPaymentRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PaymentRunsPaymentRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['payment-runs'][':paymentRunId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentRunsPaymentRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1PaymentRunsPaymentRunIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1PaymentRunsPaymentRunId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1PaymentRunsPaymentRunIdMutationOptions<
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

export function createDeleteV1PaymentRunsPaymentRunId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1PaymentRunsPaymentRunIdMutationOptions<
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

export function getV1PaymentRunsPaymentRunIdDataQueryKey(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payment-runs/:paymentRunId/data', keyArgs] as const
}

export function getV1PaymentRunsPaymentRunIdDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PaymentRunsPaymentRunIdDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['payment-runs'][':paymentRunId'].data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentRunsPaymentRunIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1PaymentRunsPaymentRunIdDataQueryKey>
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
      ...getV1PaymentRunsPaymentRunIdDataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1PaymentRunsPaymentRunIdSummaryQueryKey(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payment-runs/:paymentRunId/summary', keyArgs] as const
}

export function getV1PaymentRunsPaymentRunIdSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PaymentRunsPaymentRunIdSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['payment-runs'][':paymentRunId'].summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentRunsPaymentRunIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1PaymentRunsPaymentRunIdSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1PaymentgatewaysQueryKey(
  args: InferRequestType<typeof client.v1.paymentgateways.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/paymentgateways', keyArgs] as const
}

export function getV1PaymentgatewaysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentgateways.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.paymentgateways.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentgateways.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentgatewaysQueryKey>
  >({
    queryKey: getV1PaymentgatewaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.paymentgateways.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Paymentgateways<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentgateways.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.paymentgateways.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentgateways.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentgatewaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PaymentgatewaysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1PaymentsQueryKey(args: InferRequestType<typeof client.v1.payments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payments', keyArgs] as const
}

export function getV1PaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.payments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsQueryKey>
  >({
    queryKey: getV1PaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Payments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.payments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1Payments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.payments.$post>,
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
    const mutationDefaults = getPostV1PaymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PaymentsPaymentIdQueryKey(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payments/:paymentId', keyArgs] as const
}

export function getV1PaymentsPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsPaymentIdQueryKey>
  >({
    queryKey: getV1PaymentsPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payments[':paymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.payments)[':paymentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentsPaymentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PaymentsPaymentIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1PaymentsPaymentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1PaymentsPaymentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1PaymentsPaymentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1PaymentsPaymentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1PaymentsPaymentIdApply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1PaymentsPaymentIdApplyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1PaymentsPaymentIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1PaymentsPaymentIdCancelMutationOptions<
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

export function getV1PaymentsPaymentIdPartsQueryKey(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payments/:paymentId/parts', keyArgs] as const
}

export function getV1PaymentsPaymentIdPartsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PaymentsPaymentIdPartsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payments[':paymentId'].parts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentsPaymentIdParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1PaymentsPaymentIdPartsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1PaymentsPaymentIdPartsPartidQueryKey(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payments/:paymentId/parts/:partid', keyArgs] as const
}

export function getV1PaymentsPaymentIdPartsPartidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PaymentsPaymentIdPartsPartidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payments[':paymentId'].parts[':partid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentsPaymentIdPartsPartid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1PaymentsPaymentIdPartsPartidQueryKey>
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
      ...getV1PaymentsPaymentIdPartsPartidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1PaymentsPaymentIdPartsPartidItempartsQueryKey(
  args: InferRequestType<
    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payments/:paymentId/parts/:partid/itemparts', keyArgs] as const
}

export function getV1PaymentsPaymentIdPartsPartidItempartsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PaymentsPaymentIdPartsPartidItempartsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payments[':paymentId'].parts[':partid'].itemparts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentsPaymentIdPartsPartidItemparts<
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
  args: () => InferRequestType<
    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1PaymentsPaymentIdPartsPartidItempartsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1PaymentsPaymentIdPartsPartidItempartsItempartidQueryKey(
  args: InferRequestType<
    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts'][':itempartid']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payments/:paymentId/parts/:partid/itemparts/:itempartid', keyArgs] as const
}

export function getV1PaymentsPaymentIdPartsPartidItempartsItempartidQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts'][':itempartid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PaymentsPaymentIdPartsPartidItempartsItempartidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payments[':paymentId'].parts[':partid'].itemparts[':itempartid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentsPaymentIdPartsPartidItempartsItempartid<
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
  args: () => InferRequestType<
    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts'][':itempartid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1PaymentsPaymentIdPartsPartidItempartsItempartidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1PaymentsPaymentIdRefunds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PaymentsPaymentIdRefundsMutationOptions<
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

export function createPutV1PaymentsPaymentIdTransfer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1PaymentsPaymentIdTransferMutationOptions<
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

export function createPutV1PaymentsPaymentIdUnapply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1PaymentsPaymentIdUnapplyMutationOptions<
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

export function createPostV1QuotesDocument<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.document.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.quotes.document.$post>,
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
    const mutationDefaults = getPostV1QuotesDocumentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1RampsRampNumberQueryKey(
  args: InferRequestType<(typeof client.v1.ramps)[':rampNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/ramps/:rampNumber', keyArgs] as const
}

export function getV1RampsRampNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.ramps)[':rampNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RampsRampNumberQueryKey>
  >({
    queryKey: getV1RampsRampNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ramps[':rampNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RampsRampNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.ramps)[':rampNumber']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1RampsRampNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1RampsRampNumberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1RampsRampNumberRampMetricsQueryKey(
  args: InferRequestType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/ramps/:rampNumber/ramp-metrics', keyArgs] as const
}

export function getV1RampsRampNumberRampMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RampsRampNumberRampMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ramps[':rampNumber']['ramp-metrics'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RampsRampNumberRampMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RampsRampNumberRampMetricsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1RateplanProductIdProductRatePlanQueryKey(
  args: InferRequestType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/rateplan/:product_id/productRatePlan', keyArgs] as const
}

export function getV1RateplanProductIdProductRatePlanQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RateplanProductIdProductRatePlanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.rateplan[':product_id'].productRatePlan.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RateplanProductIdProductRatePlan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1RateplanProductIdProductRatePlanQueryKey>
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
      ...getV1RateplanProductIdProductRatePlanQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1RefundsQueryKey(args: InferRequestType<typeof client.v1.refunds.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/refunds', keyArgs] as const
}

export function getV1RefundsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.refunds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1RefundsQueryKey>
  >({
    queryKey: getV1RefundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.refunds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Refunds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.refunds.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1RefundsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1RefundsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1RefundsRefundIdReconcile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1RefundsRefundIdReconcileMutationOptions<
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

export function getV1RefundsRefundIdQueryKey(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/refunds/:refundId', keyArgs] as const
}

export function getV1RefundsRefundIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RefundsRefundIdQueryKey>
  >({
    queryKey: getV1RefundsRefundIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.refunds[':refundId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RefundsRefundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.refunds)[':refundId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1RefundsRefundIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1RefundsRefundIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1RefundsRefundId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1RefundsRefundIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1RefundsRefundId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1RefundsRefundIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1RefundsRefundIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1RefundsRefundIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1RefundsRefundIdPartsQueryKey(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/refunds/:refundId/parts', keyArgs] as const
}

export function getV1RefundsRefundIdPartsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RefundsRefundIdPartsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.refunds[':refundId'].parts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RefundsRefundIdParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RefundsRefundIdPartsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1RefundsRefundIdPartsRefundpartidQueryKey(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/refunds/:refundId/parts/:refundpartid', keyArgs] as const
}

export function getV1RefundsRefundIdPartsRefundpartidQueryOptions<
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
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RefundsRefundIdPartsRefundpartidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.refunds[':refundId'].parts[':refundpartid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RefundsRefundIdPartsRefundpartid<
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
  args: () => InferRequestType<
    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1RefundsRefundIdPartsRefundpartidQueryKey>
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
      ...getV1RefundsRefundIdPartsRefundpartidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1RefundsRefundIdPartsRefundpartidItempartsQueryKey(
  args: InferRequestType<
    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/refunds/:refundId/parts/:refundpartid/itemparts', keyArgs] as const
}

export function getV1RefundsRefundIdPartsRefundpartidItempartsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RefundsRefundIdPartsRefundpartidItempartsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.refunds[':refundId'].parts[':refundpartid'].itemparts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RefundsRefundIdPartsRefundpartidItemparts<
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
  args: () => InferRequestType<
    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RefundsRefundIdPartsRefundpartidItempartsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1RefundsRefundIdPartsRefundpartidItempartsItempartidQueryKey(
  args: InferRequestType<
    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts'][':itempartid']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/refunds/:refundId/parts/:refundpartid/itemparts/:itempartid', keyArgs] as const
}

export function getV1RefundsRefundIdPartsRefundpartidItempartsItempartidQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts'][':itempartid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RefundsRefundIdPartsRefundpartidItempartsItempartidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.refunds[':refundId'].parts[':refundpartid'].itemparts[':itempartid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RefundsRefundIdPartsRefundpartidItempartsItempartid<
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
  args: () => InferRequestType<
    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts'][':itempartid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RefundsRefundIdPartsRefundpartidItempartsItempartidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1RevenueEventsRevenueSchedulesRsNumberQueryKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-events']['revenue-schedules'][':rs-number']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-events/revenue-schedules/:rs-number', keyArgs] as const
}

export function getV1RevenueEventsRevenueSchedulesRsNumberQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['revenue-events']['revenue-schedules'][':rs-number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RevenueEventsRevenueSchedulesRsNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['revenue-events']['revenue-schedules'][':rs-number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RevenueEventsRevenueSchedulesRsNumber<
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
  args: () => InferRequestType<
    (typeof client.v1)['revenue-events']['revenue-schedules'][':rs-number']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RevenueEventsRevenueSchedulesRsNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1RevenueEventsEventNumberQueryKey(
  args: InferRequestType<(typeof client.v1)['revenue-events'][':event-number']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-events/:event-number', keyArgs] as const
}

export function getV1RevenueEventsEventNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['revenue-events'][':event-number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['revenue-events'][':event-number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RevenueEventsEventNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['revenue-events'][':event-number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RevenueEventsEventNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['revenue-events'][':event-number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['revenue-events'][':event-number']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RevenueEventsEventNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1RevenueItemsChargeRevenueSummariesCrsNumberQueryKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['charge-revenue-summaries'][':crs-number']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-items/charge-revenue-summaries/:crs-number', keyArgs] as const
}

export function getV1RevenueItemsChargeRevenueSummariesCrsNumberQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['charge-revenue-summaries'][':crs-number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RevenueItemsChargeRevenueSummariesCrsNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['revenue-items']['charge-revenue-summaries'][':crs-number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RevenueItemsChargeRevenueSummariesCrsNumber<
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
  args: () => InferRequestType<
    (typeof client.v1)['revenue-items']['charge-revenue-summaries'][':crs-number']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RevenueItemsChargeRevenueSummariesCrsNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1RevenueItemsRevenueEventsEventNumberQueryKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-items/revenue-events/:event-number', keyArgs] as const
}

export function getV1RevenueItemsRevenueEventsEventNumberQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RevenueItemsRevenueEventsEventNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['revenue-items']['revenue-events'][':event-number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RevenueItemsRevenueEventsEventNumber<
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
  args: () => InferRequestType<
    (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RevenueItemsRevenueEventsEventNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutV1RevenueItemsRevenueEventsEventNumber<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1RevenueItemsRevenueEventsEventNumberMutationOptions<
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

export function getV1RevenueItemsRevenueSchedulesRsNumberQueryKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-items/revenue-schedules/:rs-number', keyArgs] as const
}

export function getV1RevenueItemsRevenueSchedulesRsNumberQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RevenueItemsRevenueSchedulesRsNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['revenue-items']['revenue-schedules'][':rs-number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RevenueItemsRevenueSchedulesRsNumber<
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
  args: () => InferRequestType<
    (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RevenueItemsRevenueSchedulesRsNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutV1RevenueItemsRevenueSchedulesRsNumber<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1RevenueItemsRevenueSchedulesRsNumberMutationOptions<
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

export function getV1RevenueRecognitionRulesProductChargesChargeKeyQueryKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-recognition-rules']['product-charges'][':charge-key']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-recognition-rules/product-charges/:charge-key', keyArgs] as const
}

export function getV1RevenueRecognitionRulesProductChargesChargeKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['revenue-recognition-rules']['product-charges'][':charge-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RevenueRecognitionRulesProductChargesChargeKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['revenue-recognition-rules']['product-charges'][':charge-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RevenueRecognitionRulesProductChargesChargeKey<
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
  args: () => InferRequestType<
    (typeof client.v1)['revenue-recognition-rules']['product-charges'][':charge-key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RevenueRecognitionRulesProductChargesChargeKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1RevenueRecognitionRulesSubscriptionChargesChargeKeyQueryKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-recognition-rules']['subscription-charges'][':charge-key']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-recognition-rules/subscription-charges/:charge-key', keyArgs] as const
}

export function getV1RevenueRecognitionRulesSubscriptionChargesChargeKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['revenue-recognition-rules']['subscription-charges'][':charge-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RevenueRecognitionRulesSubscriptionChargesChargeKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['revenue-recognition-rules']['subscription-charges'][':charge-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RevenueRecognitionRulesSubscriptionChargesChargeKey<
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
  args: () => InferRequestType<
    (typeof client.v1)['revenue-recognition-rules']['subscription-charges'][':charge-key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RevenueRecognitionRulesSubscriptionChargesChargeKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1RevenueSchedulesCreditMemoItemsCmiIdQueryKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-schedules/credit-memo-items/:cmi-id', keyArgs] as const
}

export function getV1RevenueSchedulesCreditMemoItemsCmiIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RevenueSchedulesCreditMemoItemsCmiIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['revenue-schedules']['credit-memo-items'][':cmi-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RevenueSchedulesCreditMemoItemsCmiId<
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
  args: () => InferRequestType<
    (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RevenueSchedulesCreditMemoItemsCmiIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1RevenueSchedulesCreditMemoItemsCmiId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1RevenueSchedulesCreditMemoItemsCmiIdMutationOptions<
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

export function createPostV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRange<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRangeMutationOptions<
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

export function getV1RevenueSchedulesDebitMemoItemsDmiIdQueryKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-schedules/debit-memo-items/:dmi-id', keyArgs] as const
}

export function getV1RevenueSchedulesDebitMemoItemsDmiIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RevenueSchedulesDebitMemoItemsDmiIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['revenue-schedules']['debit-memo-items'][':dmi-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RevenueSchedulesDebitMemoItemsDmiId<
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
  args: () => InferRequestType<
    (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RevenueSchedulesDebitMemoItemsDmiIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1RevenueSchedulesDebitMemoItemsDmiId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1RevenueSchedulesDebitMemoItemsDmiIdMutationOptions<
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

export function createPostV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRange<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRangeMutationOptions<
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

export function getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyQueryKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/revenue-schedules/invoice-item-adjustments/:invoice-item-adj-key',
    keyArgs,
  ] as const
}

export function getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKey<
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
  args: () => InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKey<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyMutationOptions<
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

export function createPostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRange<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRangeMutationOptions<
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

export function getV1RevenueSchedulesInvoiceItemsInvoiceItemIdQueryKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-schedules/invoice-items/:invoice-item-id', keyArgs] as const
}

export function getV1RevenueSchedulesInvoiceItemsInvoiceItemIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RevenueSchedulesInvoiceItemsInvoiceItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['revenue-schedules']['invoice-items'][':invoice-item-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RevenueSchedulesInvoiceItemsInvoiceItemId<
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
  args: () => InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RevenueSchedulesInvoiceItemsInvoiceItemIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1RevenueSchedulesInvoiceItemsInvoiceItemId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1RevenueSchedulesInvoiceItemsInvoiceItemIdMutationOptions<
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

export function createPostV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRange<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRangeMutationOptions<
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

export function getV1RevenueSchedulesProductChargesChargeKeyAccountKeyQueryKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['product-charges'][':charge-key'][':account-key']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-schedules/product-charges/:charge-key/:account-key', keyArgs] as const
}

export function getV1RevenueSchedulesProductChargesChargeKeyAccountKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['product-charges'][':charge-key'][':account-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RevenueSchedulesProductChargesChargeKeyAccountKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['revenue-schedules']['product-charges'][':charge-key'][':account-key'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1RevenueSchedulesProductChargesChargeKeyAccountKey<
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
  args: () => InferRequestType<
    (typeof client.v1)['revenue-schedules']['product-charges'][':charge-key'][':account-key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RevenueSchedulesProductChargesChargeKeyAccountKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1RevenueSchedulesSubscriptionChargesChargeKeyQueryKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-schedules/subscription-charges/:charge-key', keyArgs] as const
}

export function getV1RevenueSchedulesSubscriptionChargesChargeKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RevenueSchedulesSubscriptionChargesChargeKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['revenue-schedules']['subscription-charges'][':charge-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RevenueSchedulesSubscriptionChargesChargeKey<
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
  args: () => InferRequestType<
    (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RevenueSchedulesSubscriptionChargesChargeKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1RevenueSchedulesSubscriptionChargesChargeKey<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1RevenueSchedulesSubscriptionChargesChargeKeyMutationOptions<
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

export function getV1RevenueSchedulesRsNumberQueryKey(
  args: InferRequestType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-schedules/:rs-number', keyArgs] as const
}

export function getV1RevenueSchedulesRsNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1RevenueSchedulesRsNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['revenue-schedules'][':rs-number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RevenueSchedulesRsNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1RevenueSchedulesRsNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1RevenueSchedulesRsNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1RevenueSchedulesRsNumberMutationOptions<
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

export function createPutV1RevenueSchedulesRsNumberBasicInformation<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1RevenueSchedulesRsNumberBasicInformationMutationOptions<
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

export function createPutV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriods<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriodsMutationOptions<
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

export function createPutV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDateMutationOptions<
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

export function createPutV1RevenueSchedulesRsNumberDistributeRevenueWithDateRange<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1RevenueSchedulesRsNumberDistributeRevenueWithDateRangeMutationOptions<
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

export function createPutV1RevproAccountingCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1RevproAccountingCodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1RsaSignatures<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['rsa-signatures']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['rsa-signatures']['$post']>,
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
    const mutationDefaults = getPostV1RsaSignaturesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1RsaSignaturesDecrypt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1RsaSignaturesDecryptMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SequenceSetsQueryKey(
  args: InferRequestType<(typeof client.v1)['sequence-sets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/sequence-sets', keyArgs] as const
}

export function getV1SequenceSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['sequence-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SequenceSetsQueryKey>
  >({
    queryKey: getV1SequenceSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['sequence-sets'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1SequenceSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['sequence-sets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SequenceSetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SequenceSetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1SequenceSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['sequence-sets']['$post']>,
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
    const mutationDefaults = getPostV1SequenceSetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SequenceSetsIdQueryKey(
  args: InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/sequence-sets/:id', keyArgs] as const
}

export function getV1SequenceSetsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1SequenceSetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['sequence-sets'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SequenceSetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SequenceSetsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1SequenceSetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1SequenceSetsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1SequenceSetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1SequenceSetsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SettingsFinanceRevenueAutomationStartDateQueryKey(
  args: InferRequestType<
    (typeof client.v1.settings.finance)['revenue-automation-start-date']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/settings/finance/revenue-automation-start-date', keyArgs] as const
}

export function getV1SettingsFinanceRevenueAutomationStartDateQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.settings.finance)['revenue-automation-start-date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1SettingsFinanceRevenueAutomationStartDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.settings.finance['revenue-automation-start-date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SettingsFinanceRevenueAutomationStartDate<
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
  args: () => InferRequestType<
    (typeof client.v1.settings.finance)['revenue-automation-start-date']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1SettingsFinanceRevenueAutomationStartDateQueryKey>
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
      ...getV1SettingsFinanceRevenueAutomationStartDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1Subscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.subscriptions.$post>,
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
    const mutationDefaults = getPostV1SubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SubscriptionsAccountsAccountKeyQueryKey(
  args: InferRequestType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/subscriptions/accounts/:account-key', keyArgs] as const
}

export function getV1SubscriptionsAccountsAccountKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1SubscriptionsAccountsAccountKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.subscriptions.accounts[':account-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SubscriptionsAccountsAccountKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1SubscriptionsAccountsAccountKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1SubscriptionsPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.preview.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.subscriptions.preview.$post>,
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
    const mutationDefaults = getPostV1SubscriptionsPreviewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SubscriptionsSubscriptionKeyQueryKey(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/subscriptions/:subscription-key', keyArgs] as const
}

export function getV1SubscriptionsSubscriptionKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1SubscriptionsSubscriptionKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.subscriptions[':subscription-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SubscriptionsSubscriptionKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1SubscriptionsSubscriptionKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1SubscriptionsSubscriptionKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1SubscriptionsSubscriptionKeyMutationOptions<
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

export function createPutV1SubscriptionsSubscriptionKeyCancel<
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
                ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['cancel']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['cancel']['$put']>,
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
    const mutationDefaults = getPutV1SubscriptionsSubscriptionKeyCancelMutationOptions<
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

export function createPutV1SubscriptionsSubscriptionKeyRenew<
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
                ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['renew']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['renew']['$put']>,
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
    const mutationDefaults = getPutV1SubscriptionsSubscriptionKeyRenewMutationOptions<
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

export function createPutV1SubscriptionsSubscriptionKeyResume<
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
                ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['resume']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['resume']['$put']>,
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
    const mutationDefaults = getPutV1SubscriptionsSubscriptionKeyResumeMutationOptions<
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

export function createPutV1SubscriptionsSubscriptionKeySuspend<
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
                ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['suspend']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['suspend']['$put']>,
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
    const mutationDefaults = getPutV1SubscriptionsSubscriptionKeySuspendMutationOptions<
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

export function getV1SubscriptionsSubscriptionKeyVersionsVersionQueryKey(
  args: InferRequestType<
    (typeof client.v1.subscriptions)[':subscription-key']['versions'][':version']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/subscriptions/:subscription-key/versions/:version', keyArgs] as const
}

export function getV1SubscriptionsSubscriptionKeyVersionsVersionQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.subscriptions)[':subscription-key']['versions'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1SubscriptionsSubscriptionKeyVersionsVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.subscriptions[':subscription-key'].versions[':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SubscriptionsSubscriptionKeyVersionsVersion<
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
  args: () => InferRequestType<
    (typeof client.v1.subscriptions)[':subscription-key']['versions'][':version']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1SubscriptionsSubscriptionKeyVersionsVersionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1SubscriptionsSubscriptionKeyRampMetricsQueryKey(
  args: InferRequestType<
    (typeof client.v1.subscriptions)[':subscriptionKey']['ramp-metrics']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/subscriptions/:subscriptionKey/ramp-metrics', keyArgs] as const
}

export function getV1SubscriptionsSubscriptionKeyRampMetricsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.subscriptions)[':subscriptionKey']['ramp-metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1SubscriptionsSubscriptionKeyRampMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.subscriptions[':subscriptionKey']['ramp-metrics'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SubscriptionsSubscriptionKeyRampMetrics<
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
  args: () => InferRequestType<
    (typeof client.v1.subscriptions)[':subscriptionKey']['ramp-metrics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1SubscriptionsSubscriptionKeyRampMetricsQueryKey>
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
      ...getV1SubscriptionsSubscriptionKeyRampMetricsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1SubscriptionsSubscriptionKeyRampsQueryKey(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/subscriptions/:subscriptionKey/ramps', keyArgs] as const
}

export function getV1SubscriptionsSubscriptionKeyRampsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1SubscriptionsSubscriptionKeyRampsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.subscriptions[':subscriptionKey'].ramps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SubscriptionsSubscriptionKeyRamps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1SubscriptionsSubscriptionKeyRampsQueryKey>
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
      ...getV1SubscriptionsSubscriptionKeyRampsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1SubscriptionsSubscriptionNumberCustomFields<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1SubscriptionsSubscriptionNumberCustomFieldsMutationOptions<
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

export function createPutV1SubscriptionsSubscriptionNumberVersionsVersionCustomFields<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1SubscriptionsSubscriptionNumberVersionsVersionCustomFieldsMutationOptions<
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

export function getV1TaxationitemsIdQueryKey(
  args: InferRequestType<(typeof client.v1.taxationitems)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/taxationitems/:id', keyArgs] as const
}

export function getV1TaxationitemsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.taxationitems)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TaxationitemsIdQueryKey>
  >({
    queryKey: getV1TaxationitemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.taxationitems[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TaxationitemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.taxationitems)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TaxationitemsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TaxationitemsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1TaxationitemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1TaxationitemsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1TaxationitemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1TaxationitemsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TransactionsInvoicesAccountsAccountKeyQueryKey(
  args: InferRequestType<(typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/transactions/invoices/accounts/:account-key', keyArgs] as const
}

export function getV1TransactionsInvoicesAccountsAccountKeyQueryOptions<
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
  args: InferRequestType<(typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TransactionsInvoicesAccountsAccountKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transactions.invoices.accounts[':account-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionsInvoicesAccountsAccountKey<
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
  args: () => InferRequestType<
    (typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1TransactionsInvoicesAccountsAccountKeyQueryKey>
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
      ...getV1TransactionsInvoicesAccountsAccountKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1TransactionsPaymentsAccountsAccountKeyQueryKey(
  args: InferRequestType<(typeof client.v1.transactions.payments.accounts)[':account-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/transactions/payments/accounts/:account-key', keyArgs] as const
}

export function getV1TransactionsPaymentsAccountsAccountKeyQueryOptions<
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
  args: InferRequestType<(typeof client.v1.transactions.payments.accounts)[':account-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TransactionsPaymentsAccountsAccountKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transactions.payments.accounts[':account-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionsPaymentsAccountsAccountKey<
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
  args: () => InferRequestType<
    (typeof client.v1.transactions.payments.accounts)[':account-key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1TransactionsPaymentsAccountsAccountKeyQueryKey>
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
      ...getV1TransactionsPaymentsAccountsAccountKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1Usage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.usage.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.usage.$post>,
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
    const mutationDefaults = getPostV1UsageMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1UsageAccountsAccountKeyQueryKey(
  args: InferRequestType<(typeof client.v1.usage.accounts)[':account-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/usage/accounts/:account-key', keyArgs] as const
}

export function getV1UsageAccountsAccountKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.usage.accounts)[':account-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.usage.accounts)[':account-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1UsageAccountsAccountKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.usage.accounts[':account-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UsageAccountsAccountKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.usage.accounts)[':account-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.usage.accounts)[':account-key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1UsageAccountsAccountKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1UsersUsernameAcceptAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUsernameAcceptAccessMutationOptions<
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

export function getV1UsersUsernameAccessibleEntitiesQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/users/:username/accessible-entities', keyArgs] as const
}

export function getV1UsersUsernameAccessibleEntitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1UsersUsernameAccessibleEntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':username']['accessible-entities'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UsersUsernameAccessibleEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.users)[':username']['accessible-entities']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1UsersUsernameAccessibleEntitiesQueryKey>
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
      ...getV1UsersUsernameAccessibleEntitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1UsersUsernameDenyAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUsernameDenyAccessMutationOptions<
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

export function createPutV1UsersUsernameRequestAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUsernameRequestAccessMutationOptions<
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

export function getWorkflowsQueryKey(args: InferRequestType<typeof client.workflows.$get>) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows', keyArgs] as const
}

export function getWorkflowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.workflows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWorkflowsQueryKey>
  >({
    queryKey: getWorkflowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workflows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWorkflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.workflows.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWorkflowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWorkflowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostWorkflowsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.workflows.import.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.workflows.import.$post>,
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
    const mutationDefaults = getPostWorkflowsImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWorkflowsMetricsJsonQueryKey(
  args: InferRequestType<(typeof client.workflows)['metrics.json']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows/metrics.json', keyArgs] as const
}

export function getWorkflowsMetricsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)['metrics.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workflows)['metrics.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)['metrics.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsMetricsJsonQueryKey>
  >({
    queryKey: getWorkflowsMetricsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workflows['metrics.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkflowsMetricsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)['metrics.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workflows)['metrics.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workflows)['metrics.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkflowsMetricsJsonQueryKey>
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
      ...getWorkflowsMetricsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkflowsTasksQueryKey(
  args: InferRequestType<typeof client.workflows.tasks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows/tasks', keyArgs] as const
}

export function getWorkflowsTasksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.tasks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.workflows.tasks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.tasks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsTasksQueryKey>
  >({
    queryKey: getWorkflowsTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workflows.tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWorkflowsTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.workflows.tasks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.tasks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWorkflowsTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWorkflowsTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutWorkflowsTasksBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWorkflowsTasksBatchUpdateMutationOptions<
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

export function getWorkflowsTasksTaskIdQueryKey(
  args: InferRequestType<(typeof client.workflows.tasks)[':task_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows/tasks/:task_id', keyArgs] as const
}

export function getWorkflowsTasksTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflows.tasks)[':task_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workflows.tasks)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkflowsTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workflows.tasks[':task_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkflowsTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflows.tasks)[':task_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workflows.tasks)[':task_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWorkflowsTasksTaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostWorkflowsTasksTaskIdRerun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkflowsTasksTaskIdRerunMutationOptions<
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

export function getWorkflowsWorkflowIdQueryKey(
  args: InferRequestType<(typeof client.workflows)[':workflow_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows/:workflow_id', keyArgs] as const
}

export function getWorkflowsWorkflowIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workflows)[':workflow_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsWorkflowIdQueryKey>
  >({
    queryKey: getWorkflowsWorkflowIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workflows[':workflow_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkflowsWorkflowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workflows)[':workflow_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkflowsWorkflowIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWorkflowsWorkflowIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteWorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchWorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchWorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWorkflowsWorkflowIdExportQueryKey(
  args: InferRequestType<(typeof client.workflows)[':workflow_id']['export']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows/:workflow_id/export', keyArgs] as const
}

export function getWorkflowsWorkflowIdExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workflows)[':workflow_id']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkflowsWorkflowIdExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workflows[':workflow_id'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkflowsWorkflowIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workflows)[':workflow_id']['export']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWorkflowsWorkflowIdExportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostWorkflowsWorkflowIdRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkflowsWorkflowIdRunMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
