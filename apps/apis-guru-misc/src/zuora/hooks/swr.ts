import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetChargeMetricsDataChargeMetricsKey(
  args: InferRequestType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['charge-metrics', '/charge-metrics/data/charge-metrics', keyArgs] as const
}

export function useGetChargeMetricsDataChargeMetrics<TError = unknown>(
  args: InferRequestType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChargeMetricsDataChargeMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['charge-metrics'].data['charge-metrics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChargeMetricsDataChargeMetrics<TError = unknown>(
  args: InferRequestType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChargeMetricsDataChargeMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['charge-metrics'].data['charge-metrics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChargeMetricsDataChargeMetricsDiscountAllocationDetailKey(
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

export function useGetChargeMetricsDataChargeMetricsDiscountAllocationDetail<TError = unknown>(
  args: InferRequestType<
    (typeof client)['charge-metrics']['data']['charge-metrics-discount-allocation-detail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChargeMetricsDataChargeMetricsDiscountAllocationDetailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['charge-metrics'].data['charge-metrics-discount-allocation-detail'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChargeMetricsDataChargeMetricsDiscountAllocationDetail<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['charge-metrics']['data']['charge-metrics-discount-allocation-detail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChargeMetricsDataChargeMetricsDiscountAllocationDetailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['charge-metrics'].data['charge-metrics-discount-allocation-detail'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEventsEventTriggersKey(
  args: InferRequestType<(typeof client.events)['event-triggers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/event-triggers', keyArgs] as const
}

export function useGetEventsEventTriggers<TError = unknown>(
  args: InferRequestType<(typeof client.events)['event-triggers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['event-triggers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEventsEventTriggersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['event-triggers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events['event-triggers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsEventTriggers<TError = unknown>(
  args: InferRequestType<(typeof client.events)['event-triggers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['event-triggers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEventsEventTriggersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['event-triggers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events['event-triggers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEventsEventTriggersKey() {
  return ['events', '/events/event-triggers', 'POST'] as const
}

export function usePostEventsEventTriggers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-triggers']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)['event-triggers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsEventTriggersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events)['event-triggers']['$post']> },
      ) => parseResponse(client.events['event-triggers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsEventTriggersIdKey(
  args: InferRequestType<(typeof client.events)['event-triggers'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/event-triggers/:id', keyArgs] as const
}

export function useGetEventsEventTriggersId<TError = unknown>(
  args: InferRequestType<(typeof client.events)['event-triggers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['event-triggers'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEventsEventTriggersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['event-triggers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events['event-triggers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsEventTriggersId<TError = unknown>(
  args: InferRequestType<(typeof client.events)['event-triggers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['event-triggers'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEventsEventTriggersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['event-triggers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events['event-triggers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEventsEventTriggersIdKey() {
  return ['events', '/events/event-triggers/:id', 'PUT'] as const
}

export function usePutEventsEventTriggersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)['event-triggers'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)['event-triggers'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventsEventTriggersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events)['event-triggers'][':id']['$put']> },
      ) => parseResponse(client.events['event-triggers'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEventsEventTriggersIdKey() {
  return ['events', '/events/event-triggers/:id', 'DELETE'] as const
}

export function useDeleteEventsEventTriggersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['event-triggers'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.events)['event-triggers'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEventsEventTriggersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.events)['event-triggers'][':id']['$delete']> },
      ) => parseResponse(client.events['event-triggers'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsEmailTemplatesKey(
  args: InferRequestType<(typeof client.notifications)['email-templates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications/email-templates', keyArgs] as const
}

export function useGetNotificationsEmailTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)['email-templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)['email-templates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsEmailTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)['email-templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications['email-templates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsEmailTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)['email-templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)['email-templates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsEmailTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)['email-templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications['email-templates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationsEmailTemplatesKey() {
  return ['notifications', '/notifications/email-templates', 'POST'] as const
}

export function usePostNotificationsEmailTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)['email-templates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notifications)['email-templates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsEmailTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.notifications)['email-templates']['$post']> },
      ) => parseResponse(client.notifications['email-templates'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsEmailTemplatesIdKey(
  args: InferRequestType<(typeof client.notifications)['email-templates'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications/email-templates/:id', keyArgs] as const
}

export function useGetNotificationsEmailTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)['email-templates'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)['email-templates'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsEmailTemplatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)['email-templates'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications['email-templates'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsEmailTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)['email-templates'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)['email-templates'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsEmailTemplatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)['email-templates'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications['email-templates'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNotificationsEmailTemplatesIdKey() {
  return ['notifications', '/notifications/email-templates/:id', 'PUT'] as const
}

export function usePutNotificationsEmailTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)['email-templates'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notifications)['email-templates'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNotificationsEmailTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.notifications)['email-templates'][':id']['$put']>
        },
      ) => parseResponse(client.notifications['email-templates'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNotificationsEmailTemplatesIdKey() {
  return ['notifications', '/notifications/email-templates/:id', 'DELETE'] as const
}

export function useDeleteNotificationsEmailTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)['email-templates'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.notifications)['email-templates'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotificationsEmailTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.notifications)['email-templates'][':id']['$delete']>
        },
      ) =>
        parseResponse(client.notifications['email-templates'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNotificationsHistoryKey() {
  return ['notifications', '/notifications/history', 'DELETE'] as const
}

export function useDeleteNotificationsHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.history.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.notifications.history.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotificationsHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.notifications.history.$delete> },
      ) => parseResponse(client.notifications.history.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsHistoryTasksIdKey(
  args: InferRequestType<(typeof client.notifications.history.tasks)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications/history/tasks/:id', keyArgs] as const
}

export function useGetNotificationsHistoryTasksId<TError = unknown>(
  args: InferRequestType<(typeof client.notifications.history.tasks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications.history.tasks)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsHistoryTasksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications.history.tasks)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications.history.tasks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsHistoryTasksId<TError = unknown>(
  args: InferRequestType<(typeof client.notifications.history.tasks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications.history.tasks)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsHistoryTasksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications.history.tasks)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications.history.tasks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsNotificationDefinitionsKey(
  args: InferRequestType<(typeof client.notifications)['notification-definitions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications/notification-definitions', keyArgs] as const
}

export function useGetNotificationsNotificationDefinitions<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)['notification-definitions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)['notification-definitions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsNotificationDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)['notification-definitions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications['notification-definitions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsNotificationDefinitions<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)['notification-definitions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)['notification-definitions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsNotificationDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)['notification-definitions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications['notification-definitions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationsNotificationDefinitionsKey() {
  return ['notifications', '/notifications/notification-definitions', 'POST'] as const
}

export function usePostNotificationsNotificationDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)['notification-definitions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notifications)['notification-definitions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsNotificationDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.notifications)['notification-definitions']['$post']>
        },
      ) =>
        parseResponse(client.notifications['notification-definitions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsNotificationDefinitionsIdKey(
  args: InferRequestType<(typeof client.notifications)['notification-definitions'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications/notification-definitions/:id', keyArgs] as const
}

export function useGetNotificationsNotificationDefinitionsId<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)['notification-definitions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)['notification-definitions'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsNotificationDefinitionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)['notification-definitions'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.notifications['notification-definitions'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsNotificationDefinitionsId<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)['notification-definitions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)['notification-definitions'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsNotificationDefinitionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)['notification-definitions'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.notifications['notification-definitions'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNotificationsNotificationDefinitionsIdKey() {
  return ['notifications', '/notifications/notification-definitions/:id', 'PUT'] as const
}

export function usePutNotificationsNotificationDefinitionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.notifications)['notification-definitions'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNotificationsNotificationDefinitionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.notifications)['notification-definitions'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.notifications['notification-definitions'][':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteNotificationsNotificationDefinitionsIdKey() {
  return ['notifications', '/notifications/notification-definitions/:id', 'DELETE'] as const
}

export function useDeleteNotificationsNotificationDefinitionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.notifications)['notification-definitions'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotificationsNotificationDefinitionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.notifications)['notification-definitions'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.notifications['notification-definitions'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOauthTokenKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function usePostOauthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.oauth.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.token.$post> }) =>
        parseResponse(client.oauth.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostObjectsBatchDefaultObjectKey() {
  return ['objects', '/objects/batch/default/:object', 'POST'] as const
}

export function usePostObjectsBatchDefaultObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.batch.default)[':object']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.objects.batch.default)[':object']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectsBatchDefaultObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.objects.batch.default)[':object']['$post']> },
      ) => parseResponse(client.objects.batch.default[':object'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetObjectsDefinitionsDefaultKey(
  args: InferRequestType<typeof client.objects.definitions.default.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['objects', '/objects/definitions/default', keyArgs] as const
}

export function useGetObjectsDefinitionsDefault<TError = unknown>(
  args: InferRequestType<typeof client.objects.definitions.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.objects.definitions.default.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectsDefinitionsDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.objects.definitions.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.objects.definitions.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectsDefinitionsDefault<TError = unknown>(
  args: InferRequestType<typeof client.objects.definitions.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.objects.definitions.default.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectsDefinitionsDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.objects.definitions.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.objects.definitions.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostObjectsDefinitionsDefaultKey() {
  return ['objects', '/objects/definitions/default', 'POST'] as const
}

export function usePostObjectsDefinitionsDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.objects.definitions.default.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.objects.definitions.default.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectsDefinitionsDefaultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.objects.definitions.default.$post> },
      ) => parseResponse(client.objects.definitions.default.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetObjectsDefinitionsDefaultObjectKey(
  args: InferRequestType<(typeof client.objects.definitions.default)[':object']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['objects', '/objects/definitions/default/:object', keyArgs] as const
}

export function useGetObjectsDefinitionsDefaultObject<TError = unknown>(
  args: InferRequestType<(typeof client.objects.definitions.default)[':object']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.definitions.default)[':object']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectsDefinitionsDefaultObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.definitions.default)[':object']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.objects.definitions.default[':object'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectsDefinitionsDefaultObject<TError = unknown>(
  args: InferRequestType<(typeof client.objects.definitions.default)[':object']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.definitions.default)[':object']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectsDefinitionsDefaultObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.definitions.default)[':object']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.objects.definitions.default[':object'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteObjectsDefinitionsDefaultObjectKey() {
  return ['objects', '/objects/definitions/default/:object', 'DELETE'] as const
}

export function useDeleteObjectsDefinitionsDefaultObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.definitions.default)[':object']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.objects.definitions.default)[':object']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteObjectsDefinitionsDefaultObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.objects.definitions.default)[':object']['$delete']>
        },
      ) => parseResponse(client.objects.definitions.default[':object'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetObjectsJobsKey(args: InferRequestType<typeof client.objects.jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['objects', '/objects/jobs', keyArgs] as const
}

export function useGetObjectsJobs<TError = unknown>(
  args: InferRequestType<typeof client.objects.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetObjectsJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.objects.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectsJobs<TError = unknown>(
  args: InferRequestType<typeof client.objects.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetObjectsJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.objects.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostObjectsJobsKey() {
  return ['objects', '/objects/jobs', 'POST'] as const
}

export function usePostObjectsJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.jobs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.objects.jobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectsJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.objects.jobs.$post> }) =>
        parseResponse(client.objects.jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetObjectsJobsIdKey(
  args: InferRequestType<(typeof client.objects.jobs)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['objects', '/objects/jobs/:id', keyArgs] as const
}

export function useGetObjectsJobsId<TError = unknown>(
  args: InferRequestType<(typeof client.objects.jobs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.objects.jobs)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetObjectsJobsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.objects.jobs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.objects.jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectsJobsId<TError = unknown>(
  args: InferRequestType<(typeof client.objects.jobs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.objects.jobs)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetObjectsJobsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.objects.jobs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.objects.jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetObjectsJobsIdErrorsKey(
  args: InferRequestType<(typeof client.objects.jobs)[':id']['errors']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['objects', '/objects/jobs/:id/errors', keyArgs] as const
}

export function useGetObjectsJobsIdErrors<TError = unknown>(
  args: InferRequestType<(typeof client.objects.jobs)[':id']['errors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.jobs)[':id']['errors']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectsJobsIdErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.jobs)[':id']['errors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.objects.jobs[':id'].errors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectsJobsIdErrors<TError = unknown>(
  args: InferRequestType<(typeof client.objects.jobs)[':id']['errors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.jobs)[':id']['errors']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectsJobsIdErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.jobs)[':id']['errors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.objects.jobs[':id'].errors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostObjectsJobsIdFilesKey() {
  return ['objects', '/objects/jobs/:id/files', 'POST'] as const
}

export function usePostObjectsJobsIdFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.jobs)[':id']['files']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.objects.jobs)[':id']['files']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectsJobsIdFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.objects.jobs)[':id']['files']['$post']> },
      ) => parseResponse(client.objects.jobs[':id'].files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostObjectsMigrationsKey() {
  return ['objects', '/objects/migrations', 'POST'] as const
}

export function usePostObjectsMigrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.migrations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.objects.migrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectsMigrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.objects.migrations.$post> }) =>
        parseResponse(client.objects.migrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetObjectsRecordsDefaultObjectKey(
  args: InferRequestType<(typeof client.objects.records.default)[':object']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['objects', '/objects/records/default/:object', keyArgs] as const
}

export function useGetObjectsRecordsDefaultObject<TError = unknown>(
  args: InferRequestType<(typeof client.objects.records.default)[':object']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.records.default)[':object']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectsRecordsDefaultObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.records.default)[':object']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.objects.records.default[':object'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectsRecordsDefaultObject<TError = unknown>(
  args: InferRequestType<(typeof client.objects.records.default)[':object']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.records.default)[':object']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectsRecordsDefaultObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.records.default)[':object']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.objects.records.default[':object'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostObjectsRecordsDefaultObjectKey() {
  return ['objects', '/objects/records/default/:object', 'POST'] as const
}

export function usePostObjectsRecordsDefaultObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.records.default)[':object']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.objects.records.default)[':object']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectsRecordsDefaultObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.objects.records.default)[':object']['$post']> },
      ) => parseResponse(client.objects.records.default[':object'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetObjectsRecordsDefaultObjectIdKey(
  args: InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['objects', '/objects/records/default/:object/:id', keyArgs] as const
}

export function useGetObjectsRecordsDefaultObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.records.default)[':object'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectsRecordsDefaultObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.records.default)[':object'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.objects.records.default[':object'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectsRecordsDefaultObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.records.default)[':object'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectsRecordsDefaultObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.records.default)[':object'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.objects.records.default[':object'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutObjectsRecordsDefaultObjectIdKey() {
  return ['objects', '/objects/records/default/:object/:id', 'PUT'] as const
}

export function usePutObjectsRecordsDefaultObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.records.default)[':object'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutObjectsRecordsDefaultObjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$put']>
        },
      ) => parseResponse(client.objects.records.default[':object'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteObjectsRecordsDefaultObjectIdKey() {
  return ['objects', '/objects/records/default/:object/:id', 'DELETE'] as const
}

export function useDeleteObjectsRecordsDefaultObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.records.default)[':object'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteObjectsRecordsDefaultObjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.objects.records.default)[':object'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.objects.records.default[':object'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchObjectsRecordsDefaultObjectIdKey() {
  return ['objects', '/objects/records/default/:object/:id', 'PATCH'] as const
}

export function usePatchObjectsRecordsDefaultObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.records.default)[':object'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchObjectsRecordsDefaultObjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$patch']>
        },
      ) =>
        parseResponse(client.objects.records.default[':object'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQueryJobsKey(args: InferRequestType<typeof client.query.jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['query', '/query/jobs', keyArgs] as const
}

export function useGetQueryJobs<TError = unknown>(
  args: InferRequestType<typeof client.query.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.jobs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueryJobs<TError = unknown>(
  args: InferRequestType<typeof client.query.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.jobs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQueryJobsKey() {
  return ['query', '/query/jobs', 'POST'] as const
}

export function usePostQueryJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.jobs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.query.jobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.query.jobs.$post> }) =>
        parseResponse(client.query.jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQueryJobsJobIdKey(
  args: InferRequestType<(typeof client.query.jobs)[':job-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['query', '/query/jobs/:job-id', keyArgs] as const
}

export function useGetQueryJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.query.jobs)[':job-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.query.jobs)[':job-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryJobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.query.jobs)[':job-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query.jobs[':job-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueryJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.query.jobs)[':job-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.query.jobs)[':job-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryJobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.query.jobs)[':job-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query.jobs[':job-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteQueryJobsJobIdKey() {
  return ['query', '/query/jobs/:job-id', 'DELETE'] as const
}

export function useDeleteQueryJobsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.query.jobs)[':job-id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.query.jobs)[':job-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQueryJobsJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.query.jobs)[':job-id']['$delete']> },
      ) => parseResponse(client.query.jobs[':job-id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsBatchRequestsKey() {
  return ['settings', '/settings/batch-requests', 'POST'] as const
}

export function usePostSettingsBatchRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['batch-requests']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings)['batch-requests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsBatchRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.settings)['batch-requests']['$post']> },
      ) => parseResponse(client.settings['batch-requests'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsListingKey(
  args: InferRequestType<typeof client.settings.listing.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['settings', '/settings/listing', keyArgs] as const
}

export function useGetSettingsListing<TError = unknown>(
  args: InferRequestType<typeof client.settings.listing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.listing.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsListingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.listing.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.listing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsListing<TError = unknown>(
  args: InferRequestType<typeof client.settings.listing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.listing.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsListingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.listing.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.listing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountingCodesKey(
  args: InferRequestType<(typeof client.v1)['accounting-codes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounting-codes', keyArgs] as const
}

export function useGetV1AccountingCodes<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['accounting-codes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-codes']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountingCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-codes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['accounting-codes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountingCodes<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['accounting-codes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-codes']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountingCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-codes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['accounting-codes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountingCodesKey() {
  return ['v1', '/v1/accounting-codes', 'POST'] as const
}

export function usePostV1AccountingCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-codes']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['accounting-codes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountingCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['accounting-codes']['$post']> },
      ) => parseResponse(client.v1['accounting-codes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountingCodesAcIdKey(
  args: InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounting-codes/:ac-id', keyArgs] as const
}

export function useGetV1AccountingCodesAcId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountingCodesAcIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['accounting-codes'][':ac-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountingCodesAcId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountingCodesAcIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['accounting-codes'][':ac-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AccountingCodesAcIdKey() {
  return ['v1', '/v1/accounting-codes/:ac-id', 'PUT'] as const
}

export function usePutV1AccountingCodesAcId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AccountingCodesAcIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$put']> },
      ) => parseResponse(client.v1['accounting-codes'][':ac-id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountingCodesAcIdKey() {
  return ['v1', '/v1/accounting-codes/:ac-id', 'DELETE'] as const
}

export function useDeleteV1AccountingCodesAcId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountingCodesAcIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$delete']> },
      ) => parseResponse(client.v1['accounting-codes'][':ac-id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1AccountingCodesAcIdActivateKey() {
  return ['v1', '/v1/accounting-codes/:ac-id/activate', 'PUT'] as const
}

export function usePutV1AccountingCodesAcIdActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['accounting-codes'][':ac-id']['activate']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['activate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AccountingCodesAcIdActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['accounting-codes'][':ac-id']['activate']['$put']
          >
        },
      ) => parseResponse(client.v1['accounting-codes'][':ac-id'].activate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1AccountingCodesAcIdDeactivateKey() {
  return ['v1', '/v1/accounting-codes/:ac-id/deactivate', 'PUT'] as const
}

export function usePutV1AccountingCodesAcIdDeactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['deactivate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AccountingCodesAcIdDeactivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['accounting-codes'][':ac-id']['deactivate']['$put']
          >
        },
      ) =>
        parseResponse(client.v1['accounting-codes'][':ac-id'].deactivate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountingPeriodsKey(
  args: InferRequestType<(typeof client.v1)['accounting-periods']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounting-periods', keyArgs] as const
}

export function useGetV1AccountingPeriods<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['accounting-periods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['accounting-periods']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountingPeriodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['accounting-periods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['accounting-periods'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountingPeriods<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['accounting-periods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['accounting-periods']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountingPeriodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['accounting-periods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['accounting-periods'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountingPeriodsKey() {
  return ['v1', '/v1/accounting-periods', 'POST'] as const
}

export function usePostV1AccountingPeriods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accounting-periods']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['accounting-periods']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountingPeriodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['accounting-periods']['$post']> },
      ) => parseResponse(client.v1['accounting-periods'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountingPeriodsApIdKey(
  args: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounting-periods/:ap-id', keyArgs] as const
}

export function useGetV1AccountingPeriodsApId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountingPeriodsApIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['accounting-periods'][':ap-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountingPeriodsApId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountingPeriodsApIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['accounting-periods'][':ap-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AccountingPeriodsApIdKey() {
  return ['v1', '/v1/accounting-periods/:ap-id', 'PUT'] as const
}

export function usePutV1AccountingPeriodsApId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AccountingPeriodsApIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$put']> },
      ) => parseResponse(client.v1['accounting-periods'][':ap-id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountingPeriodsApIdKey() {
  return ['v1', '/v1/accounting-periods/:ap-id', 'DELETE'] as const
}

export function useDeleteV1AccountingPeriodsApId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountingPeriodsApIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$delete']> },
      ) => parseResponse(client.v1['accounting-periods'][':ap-id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1AccountingPeriodsApIdCloseKey() {
  return ['v1', '/v1/accounting-periods/:ap-id/close', 'PUT'] as const
}

export function usePutV1AccountingPeriodsApIdClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['close']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['close']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AccountingPeriodsApIdCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['close']['$put']>
        },
      ) => parseResponse(client.v1['accounting-periods'][':ap-id'].close.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1AccountingPeriodsApIdPendingCloseKey() {
  return ['v1', '/v1/accounting-periods/:ap-id/pending-close', 'PUT'] as const
}

export function usePutV1AccountingPeriodsApIdPendingClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['pending-close']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AccountingPeriodsApIdPendingCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['accounting-periods'][':ap-id']['pending-close']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['accounting-periods'][':ap-id']['pending-close'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1AccountingPeriodsApIdReopenKey() {
  return ['v1', '/v1/accounting-periods/:ap-id/reopen', 'PUT'] as const
}

export function usePutV1AccountingPeriodsApIdReopen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['accounting-periods'][':ap-id']['reopen']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['reopen']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AccountingPeriodsApIdReopenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['accounting-periods'][':ap-id']['reopen']['$put']
          >
        },
      ) => parseResponse(client.v1['accounting-periods'][':ap-id'].reopen.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1AccountingPeriodsApIdRunTrialBalanceKey() {
  return ['v1', '/v1/accounting-periods/:ap-id/run-trial-balance', 'PUT'] as const
}

export function usePutV1AccountingPeriodsApIdRunTrialBalance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['accounting-periods'][':ap-id']['run-trial-balance']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AccountingPeriodsApIdRunTrialBalanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['accounting-periods'][':ap-id']['run-trial-balance']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['accounting-periods'][':ap-id']['run-trial-balance'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AccountsKey() {
  return ['v1', '/v1/accounts', 'POST'] as const
}

export function usePostV1Accounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.accounts.$post> }) =>
        parseResponse(client.v1.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AccountsBillingDocumentsFilesDeletionJobsKey() {
  return ['v1', '/v1/accounts/billing-documents/files/deletion-jobs', 'POST'] as const
}

export function usePostV1AccountsBillingDocumentsFilesDeletionJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsBillingDocumentsFilesDeletionJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts['billing-documents'].files['deletion-jobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsBillingDocumentsFilesDeletionJobsJobIdKey(
  args: InferRequestType<
    (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs'][':jobId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounts/billing-documents/files/deletion-jobs/:jobId', keyArgs] as const
}

export function useGetV1AccountsBillingDocumentsFilesDeletionJobsJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs'][':jobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountsBillingDocumentsFilesDeletionJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.accounts['billing-documents'].files['deletion-jobs'][':jobId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsBillingDocumentsFilesDeletionJobsJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs'][':jobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountsBillingDocumentsFilesDeletionJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.accounts['billing-documents'].files['deletion-jobs'][':jobId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountKeyKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounts/:account-key', keyArgs] as const
}

export function useGetV1AccountsAccountKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountsAccountKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts[':account-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountsAccountKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts[':account-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AccountsAccountKeyKey() {
  return ['v1', '/v1/accounts/:account-key', 'PUT'] as const
}

export function usePutV1AccountsAccountKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account-key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AccountsAccountKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.accounts)[':account-key']['$put']> },
      ) => parseResponse(client.v1.accounts[':account-key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountKeySummaryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounts/:account-key/summary', keyArgs] as const
}

export function useGetV1AccountsAccountKeySummary<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountsAccountKeySummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account-key'].summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountKeySummary<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountsAccountKeySummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account-key'].summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsIdBillingDocumentsGenerateKey() {
  return ['v1', '/v1/accounts/:id/billing-documents/generate', 'POST'] as const
}

export function usePostV1AccountsIdBillingDocumentsGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.accounts)[':id']['billing-documents']['generate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsIdBillingDocumentsGenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.accounts)[':id']['billing-documents']['generate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':id']['billing-documents'].generate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActionAmendKey() {
  return ['v1', '/v1/action/amend', 'POST'] as const
}

export function usePostV1ActionAmend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.amend.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.action.amend.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActionAmendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.action.amend.$post> }) =>
        parseResponse(client.v1.action.amend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActionCreateKey() {
  return ['v1', '/v1/action/create', 'POST'] as const
}

export function usePostV1ActionCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.action.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActionCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.action.create.$post> }) =>
        parseResponse(client.v1.action.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActionDeleteKey() {
  return ['v1', '/v1/action/delete', 'POST'] as const
}

export function usePostV1ActionDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.action.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActionDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.action.delete.$post> }) =>
        parseResponse(client.v1.action.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActionExecuteKey() {
  return ['v1', '/v1/action/execute', 'POST'] as const
}

export function usePostV1ActionExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.execute.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.action.execute.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActionExecuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.action.execute.$post> }) =>
        parseResponse(client.v1.action.execute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActionGenerateKey() {
  return ['v1', '/v1/action/generate', 'POST'] as const
}

export function usePostV1ActionGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.generate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.action.generate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActionGenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.action.generate.$post> }) =>
        parseResponse(client.v1.action.generate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActionQueryKey() {
  return ['v1', '/v1/action/query', 'POST'] as const
}

export function usePostV1ActionQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.query.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.action.query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActionQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.action.query.$post> }) =>
        parseResponse(client.v1.action.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActionQueryMoreKey() {
  return ['v1', '/v1/action/queryMore', 'POST'] as const
}

export function usePostV1ActionQueryMore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.queryMore.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.action.queryMore.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActionQueryMoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.action.queryMore.$post> }) =>
        parseResponse(client.v1.action.queryMore.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActionSubscribeKey() {
  return ['v1', '/v1/action/subscribe', 'POST'] as const
}

export function usePostV1ActionSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.subscribe.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.action.subscribe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActionSubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.action.subscribe.$post> }) =>
        parseResponse(client.v1.action.subscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActionUpdateKey() {
  return ['v1', '/v1/action/update', 'POST'] as const
}

export function usePostV1ActionUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.action.update.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.action.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActionUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.action.update.$post> }) =>
        parseResponse(client.v1.action.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AmendmentsSubscriptionsSubscriptionIdKey(
  args: InferRequestType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/amendments/subscriptions/:subscription-id', keyArgs] as const
}

export function useGetV1AmendmentsSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AmendmentsSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.amendments.subscriptions[':subscription-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AmendmentsSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AmendmentsSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.amendments.subscriptions[':subscription-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AmendmentsAmendmentKeyKey(
  args: InferRequestType<(typeof client.v1.amendments)[':amendment-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/amendments/:amendment-key', keyArgs] as const
}

export function useGetV1AmendmentsAmendmentKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.amendments)[':amendment-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.amendments)[':amendment-key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AmendmentsAmendmentKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.amendments)[':amendment-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.amendments[':amendment-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AmendmentsAmendmentKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.amendments)[':amendment-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.amendments)[':amendment-key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AmendmentsAmendmentKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.amendments)[':amendment-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.amendments[':amendment-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AsyncJobsJobIdKey(
  args: InferRequestType<(typeof client.v1)['async-jobs'][':jobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/async-jobs/:jobId', keyArgs] as const
}

export function useGetV1AsyncJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['async-jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['async-jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AsyncJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['async-jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['async-jobs'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AsyncJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['async-jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['async-jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AsyncJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['async-jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['async-jobs'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AsyncOrdersKey() {
  return ['v1', '/v1/async/orders', 'POST'] as const
}

export function usePostV1AsyncOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.async.orders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.async.orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AsyncOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.async.orders.$post> }) =>
        parseResponse(client.v1.async.orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AsyncOrdersPreviewKey() {
  return ['v1', '/v1/async/orders/preview', 'POST'] as const
}

export function usePostV1AsyncOrdersPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.async.orders.preview.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.async.orders.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AsyncOrdersPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.async.orders.preview.$post> },
      ) => parseResponse(client.v1.async.orders.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AttachmentsKey() {
  return ['v1', '/v1/attachments', 'POST'] as const
}

export function usePostV1Attachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.attachments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.attachments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.attachments.$post> }) =>
        parseResponse(client.v1.attachments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AttachmentsAttachmentIdKey(
  args: InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/attachments/:attachment-id', keyArgs] as const
}

export function useGetV1AttachmentsAttachmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.attachments)[':attachment-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AttachmentsAttachmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.attachments)[':attachment-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.attachments[':attachment-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AttachmentsAttachmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.attachments)[':attachment-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AttachmentsAttachmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.attachments)[':attachment-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.attachments[':attachment-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AttachmentsAttachmentIdKey() {
  return ['v1', '/v1/attachments/:attachment-id', 'PUT'] as const
}

export function usePutV1AttachmentsAttachmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.attachments)[':attachment-id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AttachmentsAttachmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$put']> },
      ) => parseResponse(client.v1.attachments[':attachment-id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AttachmentsAttachmentIdKey() {
  return ['v1', '/v1/attachments/:attachment-id', 'DELETE'] as const
}

export function useDeleteV1AttachmentsAttachmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.attachments)[':attachment-id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AttachmentsAttachmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$delete']> },
      ) => parseResponse(client.v1.attachments[':attachment-id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AttachmentsObjectTypeObjectKeyKey(
  args: InferRequestType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/attachments/:object-type/:object-key', keyArgs] as const
}

export function useGetV1AttachmentsObjectTypeObjectKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AttachmentsObjectTypeObjectKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.attachments[':object-type'][':object-key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AttachmentsObjectTypeObjectKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AttachmentsObjectTypeObjectKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.attachments[':object-type'][':object-key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1BillRunsBillRunIdEmailsKey() {
  return ['v1', '/v1/bill-runs/:billRunId/emails', 'POST'] as const
}

export function usePostV1BillRunsBillRunIdEmails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['bill-runs'][':billRunId']['emails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['bill-runs'][':billRunId']['emails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillRunsBillRunIdEmailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['bill-runs'][':billRunId']['emails']['$post']>
        },
      ) => parseResponse(client.v1['bill-runs'][':billRunId'].emails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BillingDocumentsKey(
  args: InferRequestType<(typeof client.v1)['billing-documents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/billing-documents', keyArgs] as const
}

export function useGetV1BillingDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['billing-documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['billing-documents']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BillingDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['billing-documents']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['billing-documents'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BillingDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['billing-documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['billing-documents']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BillingDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['billing-documents']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['billing-documents'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BillingPreviewRunsKey() {
  return ['v1', '/v1/billing-preview-runs', 'POST'] as const
}

export function usePostV1BillingPreviewRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['billing-preview-runs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['billing-preview-runs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingPreviewRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['billing-preview-runs']['$post']> },
      ) => parseResponse(client.v1['billing-preview-runs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BillingPreviewRunsBillingPreviewRunIdKey(
  args: InferRequestType<
    (typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/billing-preview-runs/:billingPreviewRunId', keyArgs] as const
}

export function useGetV1BillingPreviewRunsBillingPreviewRunId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BillingPreviewRunsBillingPreviewRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['billing-preview-runs'][':billingPreviewRunId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BillingPreviewRunsBillingPreviewRunId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BillingPreviewRunsBillingPreviewRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['billing-preview-runs'][':billingPreviewRunId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1BulkKey() {
  return ['v1', '/v1/bulk', 'POST'] as const
}

export function usePostV1Bulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bulk.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.bulk.$post> }) =>
        parseResponse(client.v1.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BulkBulkKeyKey(
  args: InferRequestType<(typeof client.v1.bulk)[':bulk-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/bulk/:bulk-key', keyArgs] as const
}

export function useGetV1BulkBulkKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.bulk)[':bulk-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bulk)[':bulk-key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BulkBulkKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bulk)[':bulk-key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.bulk[':bulk-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BulkBulkKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.bulk)[':bulk-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bulk)[':bulk-key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BulkBulkKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bulk)[':bulk-key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.bulk[':bulk-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1BulkBulkKeyStopKey() {
  return ['v1', '/v1/bulk/:bulk-key/stop', 'PUT'] as const
}

export function usePutV1BulkBulkKeyStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.bulk)[':bulk-key']['stop']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.bulk)[':bulk-key']['stop']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1BulkBulkKeyStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.bulk)[':bulk-key']['stop']['$put']> },
      ) => parseResponse(client.v1.bulk[':bulk-key'].stop.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CatalogProductProductIdKey(
  args: InferRequestType<(typeof client.v1.catalog.product)[':product-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/catalog/product/:product-id', keyArgs] as const
}

export function useGetV1CatalogProductProductId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.catalog.product)[':product-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.catalog.product)[':product-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CatalogProductProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.catalog.product)[':product-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.catalog.product[':product-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CatalogProductProductId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.catalog.product)[':product-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.catalog.product)[':product-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CatalogProductProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.catalog.product)[':product-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.catalog.product[':product-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CatalogProductsKey(
  args: InferRequestType<typeof client.v1.catalog.products.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/catalog/products', keyArgs] as const
}

export function useGetV1CatalogProducts<TError = unknown>(
  args: InferRequestType<typeof client.v1.catalog.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalog.products.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CatalogProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalog.products.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.catalog.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CatalogProducts<TError = unknown>(
  args: InferRequestType<typeof client.v1.catalog.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalog.products.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CatalogProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalog.products.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.catalog.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CatalogProductsProductIdShareKey() {
  return ['v1', '/v1/catalog/products/:product-id/share', 'POST'] as const
}

export function usePostV1CatalogProductsProductIdShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.catalog.products)[':product-id']['share']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.catalog.products)[':product-id']['share']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CatalogProductsProductIdShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.catalog.products)[':product-id']['share']['$post']
          >
        },
      ) => parseResponse(client.v1.catalog.products[':product-id'].share.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ChargeRevenueSummariesSubscriptionChargesChargeKeyKey(
  args: InferRequestType<
    (typeof client.v1)['charge-revenue-summaries']['subscription-charges'][':charge-key']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/charge-revenue-summaries/subscription-charges/:charge-key', keyArgs] as const
}

export function useGetV1ChargeRevenueSummariesSubscriptionChargesChargeKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['charge-revenue-summaries']['subscription-charges'][':charge-key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ChargeRevenueSummariesSubscriptionChargesChargeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['charge-revenue-summaries']['subscription-charges'][':charge-key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ChargeRevenueSummariesSubscriptionChargesChargeKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['charge-revenue-summaries']['subscription-charges'][':charge-key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ChargeRevenueSummariesSubscriptionChargesChargeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['charge-revenue-summaries']['subscription-charges'][':charge-key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ChargeRevenueSummariesCrsNumberKey(
  args: InferRequestType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/charge-revenue-summaries/:crs-number', keyArgs] as const
}

export function useGetV1ChargeRevenueSummariesCrsNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ChargeRevenueSummariesCrsNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['charge-revenue-summaries'][':crs-number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ChargeRevenueSummariesCrsNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ChargeRevenueSummariesCrsNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['charge-revenue-summaries'][':crs-number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConnectionsKey() {
  return ['v1', '/v1/connections', 'POST'] as const
}

export function usePostV1Connections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.connections.$post> }) =>
        parseResponse(client.v1.connections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ContactsContactIdScrubKey() {
  return ['v1', '/v1/contacts/:contactId/scrub', 'PUT'] as const
}

export function usePutV1ContactsContactIdScrub<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.contacts)[':contactId']['scrub']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.contacts)[':contactId']['scrub']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ContactsContactIdScrubKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.contacts)[':contactId']['scrub']['$put']> },
      ) => parseResponse(client.v1.contacts[':contactId'].scrub.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CreditmemosKey(args: InferRequestType<typeof client.v1.creditmemos.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/creditmemos', keyArgs] as const
}

export function useGetV1Creditmemos<TError = unknown>(
  args: InferRequestType<typeof client.v1.creditmemos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.creditmemos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CreditmemosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.creditmemos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.creditmemos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Creditmemos<TError = unknown>(
  args: InferRequestType<typeof client.v1.creditmemos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.creditmemos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CreditmemosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.creditmemos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.creditmemos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CreditmemosKey() {
  return ['v1', '/v1/creditmemos', 'POST'] as const
}

export function usePostV1Creditmemos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.creditmemos.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.creditmemos.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreditmemosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.creditmemos.$post> }) =>
        parseResponse(client.v1.creditmemos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CreditmemosCreditMemoIdKey(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/creditmemos/:creditMemoId', keyArgs] as const
}

export function useGetV1CreditmemosCreditMemoId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemosCreditMemoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.creditmemos[':creditMemoId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditmemosCreditMemoId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemosCreditMemoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.creditmemos[':creditMemoId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CreditmemosCreditMemoIdKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId', 'PUT'] as const
}

export function usePutV1CreditmemosCreditMemoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CreditmemosCreditMemoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$put']> },
      ) => parseResponse(client.v1.creditmemos[':creditMemoId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CreditmemosCreditMemoIdKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId', 'DELETE'] as const
}

export function useDeleteV1CreditmemosCreditMemoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CreditmemosCreditMemoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$delete']> },
      ) => parseResponse(client.v1.creditmemos[':creditMemoId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CreditmemosCreditMemoIdApplyKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/apply', 'PUT'] as const
}

export function usePutV1CreditmemosCreditMemoIdApply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['apply']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['apply']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CreditmemosCreditMemoIdApplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['apply']['$put']>
        },
      ) => parseResponse(client.v1.creditmemos[':creditMemoId'].apply.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CreditmemosCreditMemoIdCancelKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/cancel', 'PUT'] as const
}

export function usePutV1CreditmemosCreditMemoIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CreditmemosCreditMemoIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['cancel']['$put']>
        },
      ) => parseResponse(client.v1.creditmemos[':creditMemoId'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CreditmemosCreditMemoIdEmailsKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/emails', 'POST'] as const
}

export function usePostV1CreditmemosCreditMemoIdEmails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['emails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['emails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreditmemosCreditMemoIdEmailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['emails']['$post']>
        },
      ) => parseResponse(client.v1.creditmemos[':creditMemoId'].emails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CreditmemosCreditMemoIdFilesKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/files', 'POST'] as const
}

export function usePostV1CreditmemosCreditMemoIdFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['files']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['files']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreditmemosCreditMemoIdFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['files']['$post']>
        },
      ) => parseResponse(client.v1.creditmemos[':creditMemoId'].files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CreditmemosCreditMemoIdItemsKey(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/creditmemos/:creditMemoId/items', keyArgs] as const
}

export function useGetV1CreditmemosCreditMemoIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemosCreditMemoIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.creditmemos[':creditMemoId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditmemosCreditMemoIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemosCreditMemoIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.creditmemos[':creditMemoId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CreditmemosCreditMemoIdItemsCmitemidKey(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/creditmemos/:creditMemoId/items/:cmitemid', keyArgs] as const
}

export function useGetV1CreditmemosCreditMemoIdItemsCmitemid<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemosCreditMemoIdItemsCmitemidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.creditmemos[':creditMemoId'].items[':cmitemid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditmemosCreditMemoIdItemsCmitemid<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemosCreditMemoIdItemsCmitemidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.creditmemos[':creditMemoId'].items[':cmitemid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsKey(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['taxation-items']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/creditmemos/:creditMemoId/items/:cmitemid/taxation-items', keyArgs] as const
}

export function useGetV1CreditmemosCreditMemoIdItemsCmitemidTaxationItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['taxation-items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.creditmemos[':creditMemoId'].items[':cmitemid']['taxation-items'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditmemosCreditMemoIdItemsCmitemidTaxationItems<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['taxation-items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.creditmemos[':creditMemoId'].items[':cmitemid']['taxation-items'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CreditmemosCreditMemoIdPartsKey(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/creditmemos/:creditMemoId/parts', keyArgs] as const
}

export function useGetV1CreditmemosCreditMemoIdParts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemosCreditMemoIdPartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.creditmemos[':creditMemoId'].parts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditmemosCreditMemoIdParts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemosCreditMemoIdPartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.creditmemos[':creditMemoId'].parts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CreditmemosCreditMemoIdPartsPartidKey(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/creditmemos/:creditMemoId/parts/:partid', keyArgs] as const
}

export function useGetV1CreditmemosCreditMemoIdPartsPartid<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemosCreditMemoIdPartsPartidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.creditmemos[':creditMemoId'].parts[':partid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditmemosCreditMemoIdPartsPartid<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemosCreditMemoIdPartsPartidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.creditmemos[':creditMemoId'].parts[':partid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CreditmemosCreditMemoIdPartsPartidItempartsKey(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/creditmemos/:creditMemoId/parts/:partid/itemparts', keyArgs] as const
}

export function useGetV1CreditmemosCreditMemoIdPartsPartidItemparts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemosCreditMemoIdPartsPartidItempartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.creditmemos[':creditMemoId'].parts[':partid'].itemparts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditmemosCreditMemoIdPartsPartidItemparts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemosCreditMemoIdPartsPartidItempartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.creditmemos[':creditMemoId'].parts[':partid'].itemparts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidKey(
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

export function useGetV1CreditmemosCreditMemoIdPartsPartidItempartsItempartid<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts'][':itempartid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.creditmemos[':creditMemoId'].parts[':partid'].itemparts[':itempartid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditmemosCreditMemoIdPartsPartidItempartsItempartid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts'][':itempartid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.creditmemos[':creditMemoId'].parts[':partid'].itemparts[':itempartid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1CreditmemosCreditMemoIdPdfsKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/pdfs', 'POST'] as const
}

export function usePostV1CreditmemosCreditMemoIdPdfs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['pdfs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['pdfs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreditmemosCreditMemoIdPdfsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['pdfs']['$post']>
        },
      ) => parseResponse(client.v1.creditmemos[':creditMemoId'].pdfs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CreditmemosCreditMemoIdPostKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/post', 'PUT'] as const
}

export function usePutV1CreditmemosCreditMemoIdPost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['post']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['post']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CreditmemosCreditMemoIdPostKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['post']['$put']>
        },
      ) => parseResponse(client.v1.creditmemos[':creditMemoId'].post.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CreditmemosCreditMemoIdTaxationitemsKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/taxationitems', 'POST'] as const
}

export function usePostV1CreditmemosCreditMemoIdTaxationitems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['taxationitems']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreditmemosCreditMemoIdTaxationitemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.creditmemos)[':creditMemoId']['taxationitems']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.creditmemos[':creditMemoId'].taxationitems.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1CreditmemosCreditMemoIdUnapplyKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/unapply', 'PUT'] as const
}

export function usePutV1CreditmemosCreditMemoIdUnapply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['unapply']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['unapply']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CreditmemosCreditMemoIdUnapplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['unapply']['$put']>
        },
      ) => parseResponse(client.v1.creditmemos[':creditMemoId'].unapply.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CreditmemosCreditMemoIdUnpostKey() {
  return ['v1', '/v1/creditmemos/:creditMemoId/unpost', 'PUT'] as const
}

export function usePutV1CreditmemosCreditMemoIdUnpost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditMemoId']['unpost']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['unpost']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CreditmemosCreditMemoIdUnpostKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['unpost']['$put']>
        },
      ) => parseResponse(client.v1.creditmemos[':creditMemoId'].unpost.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CreditmemosCreditmemoIdRefundsKey() {
  return ['v1', '/v1/creditmemos/:creditmemoId/refunds', 'POST'] as const
}

export function usePostV1CreditmemosCreditmemoIdRefunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.creditmemos)[':creditmemoId']['refunds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.creditmemos)[':creditmemoId']['refunds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreditmemosCreditmemoIdRefundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.creditmemos)[':creditmemoId']['refunds']['$post']>
        },
      ) => parseResponse(client.v1.creditmemos[':creditmemoId'].refunds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomExchangeRatesCurrencyKey(
  args: InferRequestType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/custom-exchange-rates/:currency', keyArgs] as const
}

export function useGetV1CustomExchangeRatesCurrency<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomExchangeRatesCurrencyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['custom-exchange-rates'][':currency'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomExchangeRatesCurrency<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomExchangeRatesCurrencyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['custom-exchange-rates'][':currency'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DebitmemosKey(args: InferRequestType<typeof client.v1.debitmemos.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/debitmemos', keyArgs] as const
}

export function useGetV1Debitmemos<TError = unknown>(
  args: InferRequestType<typeof client.v1.debitmemos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DebitmemosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.debitmemos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Debitmemos<TError = unknown>(
  args: InferRequestType<typeof client.v1.debitmemos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DebitmemosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.debitmemos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1DebitmemosKey() {
  return ['v1', '/v1/debitmemos', 'PUT'] as const
}

export function usePutV1Debitmemos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.debitmemos.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DebitmemosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.debitmemos.$put> }) =>
        parseResponse(client.v1.debitmemos.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DebitmemosKey() {
  return ['v1', '/v1/debitmemos', 'POST'] as const
}

export function usePostV1Debitmemos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debitmemos.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.debitmemos.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DebitmemosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.debitmemos.$post> }) =>
        parseResponse(client.v1.debitmemos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DebitmemosDebitMemoIdKey(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/debitmemos/:debitMemoId', keyArgs] as const
}

export function useGetV1DebitmemosDebitMemoId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DebitmemosDebitMemoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.debitmemos[':debitMemoId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DebitmemosDebitMemoId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DebitmemosDebitMemoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.debitmemos[':debitMemoId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1DebitmemosDebitMemoIdKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId', 'PUT'] as const
}

export function usePutV1DebitmemosDebitMemoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DebitmemosDebitMemoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$put']> },
      ) => parseResponse(client.v1.debitmemos[':debitMemoId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DebitmemosDebitMemoIdKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId', 'DELETE'] as const
}

export function useDeleteV1DebitmemosDebitMemoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DebitmemosDebitMemoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$delete']> },
      ) => parseResponse(client.v1.debitmemos[':debitMemoId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DebitmemosDebitMemoIdApplicationPartsKey(
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/debitmemos/:debitMemoId/application-parts', keyArgs] as const
}

export function useGetV1DebitmemosDebitMemoIdApplicationParts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DebitmemosDebitMemoIdApplicationPartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.debitmemos[':debitMemoId']['application-parts'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DebitmemosDebitMemoIdApplicationParts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DebitmemosDebitMemoIdApplicationPartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.debitmemos[':debitMemoId']['application-parts'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1DebitmemosDebitMemoIdCancelKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId/cancel', 'PUT'] as const
}

export function usePutV1DebitmemosDebitMemoIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DebitmemosDebitMemoIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['cancel']['$put']>
        },
      ) => parseResponse(client.v1.debitmemos[':debitMemoId'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DebitmemosDebitMemoIdCollectKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId/collect', 'POST'] as const
}

export function usePostV1DebitmemosDebitMemoIdCollect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['collect']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['collect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DebitmemosDebitMemoIdCollectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['collect']['$post']>
        },
      ) => parseResponse(client.v1.debitmemos[':debitMemoId'].collect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DebitmemosDebitMemoIdEmailsKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId/emails', 'POST'] as const
}

export function usePostV1DebitmemosDebitMemoIdEmails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['emails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['emails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DebitmemosDebitMemoIdEmailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['emails']['$post']>
        },
      ) => parseResponse(client.v1.debitmemos[':debitMemoId'].emails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DebitmemosDebitMemoIdFilesKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId/files', 'POST'] as const
}

export function usePostV1DebitmemosDebitMemoIdFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['files']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['files']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DebitmemosDebitMemoIdFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['files']['$post']>
        },
      ) => parseResponse(client.v1.debitmemos[':debitMemoId'].files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DebitmemosDebitMemoIdItemsKey(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/debitmemos/:debitMemoId/items', keyArgs] as const
}

export function useGetV1DebitmemosDebitMemoIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DebitmemosDebitMemoIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.debitmemos[':debitMemoId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DebitmemosDebitMemoIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DebitmemosDebitMemoIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.debitmemos[':debitMemoId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DebitmemosDebitMemoIdItemsDmitemidKey(
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/debitmemos/:debitMemoId/items/:dmitemid', keyArgs] as const
}

export function useGetV1DebitmemosDebitMemoIdItemsDmitemid<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DebitmemosDebitMemoIdItemsDmitemidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.debitmemos[':debitMemoId'].items[':dmitemid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DebitmemosDebitMemoIdItemsDmitemid<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DebitmemosDebitMemoIdItemsDmitemidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.debitmemos[':debitMemoId'].items[':dmitemid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsKey(
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['taxation-items']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/debitmemos/:debitMemoId/items/:dmitemid/taxation-items', keyArgs] as const
}

export function useGetV1DebitmemosDebitMemoIdItemsDmitemidTaxationItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['taxation-items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.debitmemos[':debitMemoId'].items[':dmitemid']['taxation-items'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DebitmemosDebitMemoIdItemsDmitemidTaxationItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['taxation-items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.debitmemos[':debitMemoId'].items[':dmitemid']['taxation-items'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1DebitmemosDebitMemoIdPdfsKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId/pdfs', 'POST'] as const
}

export function usePostV1DebitmemosDebitMemoIdPdfs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['pdfs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['pdfs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DebitmemosDebitMemoIdPdfsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['pdfs']['$post']>
        },
      ) => parseResponse(client.v1.debitmemos[':debitMemoId'].pdfs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1DebitmemosDebitMemoIdPostKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId/post', 'PUT'] as const
}

export function usePutV1DebitmemosDebitMemoIdPost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['post']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['post']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DebitmemosDebitMemoIdPostKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['post']['$put']> },
      ) => parseResponse(client.v1.debitmemos[':debitMemoId'].post.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DebitmemosDebitMemoIdTaxationitemsKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId/taxationitems', 'POST'] as const
}

export function usePostV1DebitmemosDebitMemoIdTaxationitems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['taxationitems']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DebitmemosDebitMemoIdTaxationitemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.debitmemos)[':debitMemoId']['taxationitems']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.debitmemos[':debitMemoId'].taxationitems.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1DebitmemosDebitMemoIdUnpostKey() {
  return ['v1', '/v1/debitmemos/:debitMemoId/unpost', 'PUT'] as const
}

export function usePutV1DebitmemosDebitMemoIdUnpost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debitmemos)[':debitMemoId']['unpost']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['unpost']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DebitmemosDebitMemoIdUnpostKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['unpost']['$put']>
        },
      ) => parseResponse(client.v1.debitmemos[':debitMemoId'].unpost.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DescribeObjectKey(
  args: InferRequestType<(typeof client.v1.describe)[':object']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/describe/:object', keyArgs] as const
}

export function useGetV1DescribeObject<TError = unknown>(
  args: InferRequestType<(typeof client.v1.describe)[':object']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.describe)[':object']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DescribeObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.describe)[':object']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.describe[':object'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DescribeObject<TError = unknown>(
  args: InferRequestType<(typeof client.v1.describe)[':object']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.describe)[':object']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DescribeObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.describe)[':object']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.describe[':object'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DocumentPropertiesKey() {
  return ['v1', '/v1/document-properties', 'POST'] as const
}

export function usePostV1DocumentProperties<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['document-properties']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['document-properties']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DocumentPropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['document-properties']['$post']> },
      ) => parseResponse(client.v1['document-properties'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1DocumentPropertiesDocumentPropertiesIdKey() {
  return ['v1', '/v1/document-properties/:documentPropertiesId', 'PUT'] as const
}

export function usePutV1DocumentPropertiesDocumentPropertiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)['document-properties'][':documentPropertiesId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DocumentPropertiesDocumentPropertiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['document-properties'][':documentPropertiesId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['document-properties'][':documentPropertiesId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DocumentPropertiesDocumentPropertiesIdKey() {
  return ['v1', '/v1/document-properties/:documentPropertiesId', 'DELETE'] as const
}

export function useDeleteV1DocumentPropertiesDocumentPropertiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)['document-properties'][':documentPropertiesId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DocumentPropertiesDocumentPropertiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['document-properties'][':documentPropertiesId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['document-properties'][':documentPropertiesId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1DocumentPropertiesDocumentTypeDocumentIdKey(
  args: InferRequestType<
    (typeof client.v1)['document-properties'][':documentType'][':documentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/document-properties/:documentType/:documentId', keyArgs] as const
}

export function useGetV1DocumentPropertiesDocumentTypeDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['document-properties'][':documentType'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DocumentPropertiesDocumentTypeDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['document-properties'][':documentType'][':documentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DocumentPropertiesDocumentTypeDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['document-properties'][':documentType'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DocumentPropertiesDocumentTypeDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['document-properties'][':documentType'][':documentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1EntitiesKey(args: InferRequestType<typeof client.v1.entities.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/entities', keyArgs] as const
}

export function useGetV1Entities<TError = unknown>(
  args: InferRequestType<typeof client.v1.entities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EntitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.entities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Entities<TError = unknown>(
  args: InferRequestType<typeof client.v1.entities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EntitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.entities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EntitiesKey() {
  return ['v1', '/v1/entities', 'POST'] as const
}

export function usePostV1Entities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.entities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.entities.$post> }) =>
        parseResponse(client.v1.entities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EntitiesIdKey(
  args: InferRequestType<(typeof client.v1.entities)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/entities/:id', keyArgs] as const
}

export function useGetV1EntitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.entities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EntitiesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.entities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EntitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.entities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EntitiesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.entities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1EntitiesIdKey() {
  return ['v1', '/v1/entities/:id', 'PUT'] as const
}

export function usePutV1EntitiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.entities)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EntitiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.entities)[':id']['$put']> },
      ) => parseResponse(client.v1.entities[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1EntitiesIdKey() {
  return ['v1', '/v1/entities/:id', 'DELETE'] as const
}

export function useDeleteV1EntitiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entities)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.entities)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EntitiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.entities)[':id']['$delete']> },
      ) => parseResponse(client.v1.entities[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1EntitiesIdProvisionKey() {
  return ['v1', '/v1/entities/:id/provision', 'PUT'] as const
}

export function usePutV1EntitiesIdProvision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.entities)[':id']['provision']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.entities)[':id']['provision']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EntitiesIdProvisionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.entities)[':id']['provision']['$put']> },
      ) => parseResponse(client.v1.entities[':id'].provision.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EntityConnectionsKey(
  args: InferRequestType<(typeof client.v1)['entity-connections']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/entity-connections', keyArgs] as const
}

export function useGetV1EntityConnections<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['entity-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['entity-connections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1EntityConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['entity-connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['entity-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EntityConnections<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['entity-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['entity-connections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1EntityConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['entity-connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['entity-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EntityConnectionsKey() {
  return ['v1', '/v1/entity-connections', 'POST'] as const
}

export function usePostV1EntityConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entity-connections']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['entity-connections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EntityConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['entity-connections']['$post']> },
      ) => parseResponse(client.v1['entity-connections'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1EntityConnectionsConnectionIdAcceptKey() {
  return ['v1', '/v1/entity-connections/:connection-id/accept', 'PUT'] as const
}

export function usePutV1EntityConnectionsConnectionIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)['entity-connections'][':connection-id']['accept']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EntityConnectionsConnectionIdAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['entity-connections'][':connection-id']['accept']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['entity-connections'][':connection-id'].accept.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1EntityConnectionsConnectionIdDenyKey() {
  return ['v1', '/v1/entity-connections/:connection-id/deny', 'PUT'] as const
}

export function usePutV1EntityConnectionsConnectionIdDeny<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)['entity-connections'][':connection-id']['deny']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EntityConnectionsConnectionIdDenyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['entity-connections'][':connection-id']['deny']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['entity-connections'][':connection-id'].deny.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1EntityConnectionsConnectionIdDisconnectKey() {
  return ['v1', '/v1/entity-connections/:connection-id/disconnect', 'PUT'] as const
}

export function usePutV1EntityConnectionsConnectionIdDisconnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['entity-connections'][':connection-id']['disconnect']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EntityConnectionsConnectionIdDisconnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['entity-connections'][':connection-id']['disconnect']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['entity-connections'][':connection-id'].disconnect.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1FilesFileIdKey(
  args: InferRequestType<(typeof client.v1.files)[':file-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/files/:file-id', keyArgs] as const
}

export function useGetV1FilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FilesFileIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file-id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FilesFileIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file-id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1GatewaySettlementPaymentsPaymentIdChargebackKey() {
  return ['v1', '/v1/gateway-settlement/payments/:payment-id/chargeback', 'POST'] as const
}

export function usePostV1GatewaySettlementPaymentsPaymentIdChargeback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['chargeback']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GatewaySettlementPaymentsPaymentIdChargebackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['chargeback']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['gateway-settlement'].payments[':payment-id'].chargeback.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1GatewaySettlementPaymentsPaymentIdRejectKey() {
  return ['v1', '/v1/gateway-settlement/payments/:payment-id/reject', 'POST'] as const
}

export function usePostV1GatewaySettlementPaymentsPaymentIdReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['reject']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GatewaySettlementPaymentsPaymentIdRejectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['reject']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['gateway-settlement'].payments[':payment-id'].reject.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1GatewaySettlementPaymentsPaymentIdSettleKey() {
  return ['v1', '/v1/gateway-settlement/payments/:payment-id/settle', 'POST'] as const
}

export function usePostV1GatewaySettlementPaymentsPaymentIdSettle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['settle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GatewaySettlementPaymentsPaymentIdSettleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['settle']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['gateway-settlement'].payments[':payment-id'].settle.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1HmacSignaturesKey() {
  return ['v1', '/v1/hmac-signatures', 'POST'] as const
}

export function usePostV1HmacSignatures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['hmac-signatures']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['hmac-signatures']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HmacSignaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['hmac-signatures']['$post']> },
      ) => parseResponse(client.v1['hmac-signatures'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1HostedpagesKey(args: InferRequestType<typeof client.v1.hostedpages.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/hostedpages', keyArgs] as const
}

export function useGetV1Hostedpages<TError = unknown>(
  args: InferRequestType<typeof client.v1.hostedpages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hostedpages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1HostedpagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hostedpages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.hostedpages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Hostedpages<TError = unknown>(
  args: InferRequestType<typeof client.v1.hostedpages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hostedpages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1HostedpagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hostedpages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.hostedpages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1InvoicesKey() {
  return ['v1', '/v1/invoices', 'PUT'] as const
}

export function usePutV1Invoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.invoices.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1InvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.invoices.$put> }) =>
        parseResponse(client.v1.invoices.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InvoicesKey() {
  return ['v1', '/v1/invoices', 'POST'] as const
}

export function usePostV1Invoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.invoices.$post> }) =>
        parseResponse(client.v1.invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1InvoicesInvoiceIdKey() {
  return ['v1', '/v1/invoices/:invoiceId', 'PUT'] as const
}

export function usePutV1InvoicesInvoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1InvoicesInvoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['$put']> },
      ) => parseResponse(client.v1.invoices[':invoiceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InvoicesInvoiceIdApplicationPartsKey(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/invoices/:invoiceId/application-parts', keyArgs] as const
}

export function useGetV1InvoicesInvoiceIdApplicationParts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1InvoicesInvoiceIdApplicationPartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.invoices[':invoiceId']['application-parts'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InvoicesInvoiceIdApplicationParts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1InvoicesInvoiceIdApplicationPartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.invoices[':invoiceId']['application-parts'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1InvoicesInvoiceIdCreditmemosKey() {
  return ['v1', '/v1/invoices/:invoiceId/creditmemos', 'POST'] as const
}

export function usePostV1InvoicesInvoiceIdCreditmemos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['creditmemos']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['creditmemos']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesInvoiceIdCreditmemosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['creditmemos']['$post']>
        },
      ) => parseResponse(client.v1.invoices[':invoiceId'].creditmemos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InvoicesInvoiceIdDebitmemosKey() {
  return ['v1', '/v1/invoices/:invoiceId/debitmemos', 'POST'] as const
}

export function usePostV1InvoicesInvoiceIdDebitmemos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['debitmemos']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['debitmemos']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesInvoiceIdDebitmemosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['debitmemos']['$post']>
        },
      ) => parseResponse(client.v1.invoices[':invoiceId'].debitmemos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InvoicesInvoiceIdEmailsKey() {
  return ['v1', '/v1/invoices/:invoiceId/emails', 'POST'] as const
}

export function usePostV1InvoicesInvoiceIdEmails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['emails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['emails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesInvoiceIdEmailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['emails']['$post']> },
      ) => parseResponse(client.v1.invoices[':invoiceId'].emails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InvoicesInvoiceIdFilesKey(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/invoices/:invoiceId/files', keyArgs] as const
}

export function useGetV1InvoicesInvoiceIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1InvoicesInvoiceIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoices[':invoiceId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InvoicesInvoiceIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1InvoicesInvoiceIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoices[':invoiceId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InvoicesInvoiceIdFilesKey() {
  return ['v1', '/v1/invoices/:invoiceId/files', 'POST'] as const
}

export function usePostV1InvoicesInvoiceIdFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['files']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['files']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesInvoiceIdFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['files']['$post']> },
      ) => parseResponse(client.v1.invoices[':invoiceId'].files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InvoicesInvoiceIdItemsKey(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/invoices/:invoiceId/items', keyArgs] as const
}

export function useGetV1InvoicesInvoiceIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1InvoicesInvoiceIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoices[':invoiceId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InvoicesInvoiceIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1InvoicesInvoiceIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoices[':invoiceId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1InvoicesInvoiceIdItemsItemIdTaxationItemsKey(
  args: InferRequestType<
    (typeof client.v1.invoices)[':invoiceId']['items'][':itemId']['taxation-items']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/invoices/:invoiceId/items/:itemId/taxation-items', keyArgs] as const
}

export function useGetV1InvoicesInvoiceIdItemsItemIdTaxationItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.invoices)[':invoiceId']['items'][':itemId']['taxation-items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1InvoicesInvoiceIdItemsItemIdTaxationItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.invoices[':invoiceId'].items[':itemId']['taxation-items'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InvoicesInvoiceIdItemsItemIdTaxationItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.invoices)[':invoiceId']['items'][':itemId']['taxation-items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1InvoicesInvoiceIdItemsItemIdTaxationItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.invoices[':invoiceId'].items[':itemId']['taxation-items'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1InvoicesInvoiceIdReverseKey() {
  return ['v1', '/v1/invoices/:invoiceId/reverse', 'PUT'] as const
}

export function usePutV1InvoicesInvoiceIdReverse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['reverse']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['reverse']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1InvoicesInvoiceIdReverseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['reverse']['$put']> },
      ) => parseResponse(client.v1.invoices[':invoiceId'].reverse.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1InvoicesInvoiceIdWriteOffKey() {
  return ['v1', '/v1/invoices/:invoiceId/write-off', 'PUT'] as const
}

export function usePutV1InvoicesInvoiceIdWriteOff<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoiceId']['write-off']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invoices)[':invoiceId']['write-off']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1InvoicesInvoiceIdWriteOffKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['write-off']['$put']>
        },
      ) => parseResponse(client.v1.invoices[':invoiceId']['write-off'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JournalEntriesKey() {
  return ['v1', '/v1/journal-entries', 'POST'] as const
}

export function usePostV1JournalEntries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['journal-entries']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['journal-entries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JournalEntriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['journal-entries']['$post']> },
      ) => parseResponse(client.v1['journal-entries'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1JournalEntriesJournalRunsJrNumberKey(
  args: InferRequestType<
    (typeof client.v1)['journal-entries']['journal-runs'][':jr-number']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/journal-entries/journal-runs/:jr-number', keyArgs] as const
}

export function useGetV1JournalEntriesJournalRunsJrNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['journal-entries']['journal-runs'][':jr-number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1JournalEntriesJournalRunsJrNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['journal-entries']['journal-runs'][':jr-number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1JournalEntriesJournalRunsJrNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['journal-entries']['journal-runs'][':jr-number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1JournalEntriesJournalRunsJrNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['journal-entries']['journal-runs'][':jr-number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1JournalEntriesJeNumberKey(
  args: InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/journal-entries/:je-number', keyArgs] as const
}

export function useGetV1JournalEntriesJeNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['journal-entries'][':je-number']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1JournalEntriesJeNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['journal-entries'][':je-number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['journal-entries'][':je-number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1JournalEntriesJeNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['journal-entries'][':je-number']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1JournalEntriesJeNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['journal-entries'][':je-number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['journal-entries'][':je-number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1JournalEntriesJeNumberKey() {
  return ['v1', '/v1/journal-entries/:je-number', 'DELETE'] as const
}

export function useDeleteV1JournalEntriesJeNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['journal-entries'][':je-number']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1JournalEntriesJeNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['$delete']>
        },
      ) => parseResponse(client.v1['journal-entries'][':je-number'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1JournalEntriesJeNumberBasicInformationKey() {
  return ['v1', '/v1/journal-entries/:je-number/basic-information', 'PUT'] as const
}

export function usePutV1JournalEntriesJeNumberBasicInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['journal-entries'][':je-number']['basic-information']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1JournalEntriesJeNumberBasicInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['journal-entries'][':je-number']['basic-information']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['journal-entries'][':je-number']['basic-information'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1JournalEntriesJeNumberCancelKey() {
  return ['v1', '/v1/journal-entries/:je-number/cancel', 'PUT'] as const
}

export function usePutV1JournalEntriesJeNumberCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['journal-entries'][':je-number']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1JournalEntriesJeNumberCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['journal-entries'][':je-number']['cancel']['$put']
          >
        },
      ) =>
        parseResponse(client.v1['journal-entries'][':je-number'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JournalRunsKey() {
  return ['v1', '/v1/journal-runs', 'POST'] as const
}

export function usePostV1JournalRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['journal-runs']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['journal-runs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JournalRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['journal-runs']['$post']> },
      ) => parseResponse(client.v1['journal-runs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1JournalRunsJrNumberKey(
  args: InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/journal-runs/:jr-number', keyArgs] as const
}

export function useGetV1JournalRunsJrNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1JournalRunsJrNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['journal-runs'][':jr-number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1JournalRunsJrNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1JournalRunsJrNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['journal-runs'][':jr-number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1JournalRunsJrNumberKey() {
  return ['v1', '/v1/journal-runs/:jr-number', 'DELETE'] as const
}

export function useDeleteV1JournalRunsJrNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1JournalRunsJrNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['$delete']> },
      ) => parseResponse(client.v1['journal-runs'][':jr-number'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1JournalRunsJrNumberCancelKey() {
  return ['v1', '/v1/journal-runs/:jr-number/cancel', 'PUT'] as const
}

export function usePutV1JournalRunsJrNumberCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['journal-runs'][':jr-number']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1JournalRunsJrNumberCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['cancel']['$put']>
        },
      ) => parseResponse(client.v1['journal-runs'][':jr-number'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1NotificationHistoryCalloutKey(
  args: InferRequestType<(typeof client.v1)['notification-history']['callout']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/notification-history/callout', keyArgs] as const
}

export function useGetV1NotificationHistoryCallout<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['notification-history']['callout']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['notification-history']['callout']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NotificationHistoryCalloutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['notification-history']['callout']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['notification-history'].callout.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1NotificationHistoryCallout<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['notification-history']['callout']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['notification-history']['callout']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NotificationHistoryCalloutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['notification-history']['callout']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['notification-history'].callout.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1NotificationHistoryEmailKey(
  args: InferRequestType<(typeof client.v1)['notification-history']['email']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/notification-history/email', keyArgs] as const
}

export function useGetV1NotificationHistoryEmail<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['notification-history']['email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['notification-history']['email']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NotificationHistoryEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['notification-history']['email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['notification-history'].email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1NotificationHistoryEmail<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['notification-history']['email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['notification-history']['email']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NotificationHistoryEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['notification-history']['email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['notification-history'].email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ObjectAccountKey() {
  return ['v1', '/v1/object/account', 'POST'] as const
}

export function usePostV1ObjectAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.account.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.object.account.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.object.account.$post> }) =>
        parseResponse(client.v1.object.account.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectAccountIdKey(
  args: InferRequestType<(typeof client.v1.object.account)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/account/:id', keyArgs] as const
}

export function useGetV1ObjectAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.account)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.account[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.account)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.account[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectAccountIdKey() {
  return ['v1', '/v1/object/account/:id', 'PUT'] as const
}

export function usePutV1ObjectAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.account)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.account)[':id']['$put']> },
      ) => parseResponse(client.v1.object.account[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectAccountIdKey() {
  return ['v1', '/v1/object/account/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.account)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.account)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.account)[':id']['$delete']> },
      ) => parseResponse(client.v1.object.account[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectAmendmentIdKey(
  args: InferRequestType<(typeof client.v1.object.amendment)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/amendment/:id', keyArgs] as const
}

export function useGetV1ObjectAmendmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.amendment)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.amendment)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectAmendmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.amendment)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.amendment[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectAmendmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.amendment)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.amendment)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectAmendmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.amendment)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.amendment[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectAmendmentIdKey() {
  return ['v1', '/v1/object/amendment/:id', 'PUT'] as const
}

export function usePutV1ObjectAmendmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.amendment)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.amendment)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectAmendmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.amendment)[':id']['$put']> },
      ) => parseResponse(client.v1.object.amendment[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectAmendmentIdKey() {
  return ['v1', '/v1/object/amendment/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectAmendmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.amendment)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.amendment)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectAmendmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.amendment)[':id']['$delete']> },
      ) => parseResponse(client.v1.object.amendment[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObjectBillRunKey() {
  return ['v1', '/v1/object/bill-run', 'POST'] as const
}

export function usePostV1ObjectBillRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object)['bill-run']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['bill-run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectBillRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object)['bill-run']['$post']> },
      ) => parseResponse(client.v1.object['bill-run'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectBillRunIdKey(
  args: InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/bill-run/:id', keyArgs] as const
}

export function useGetV1ObjectBillRunId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['bill-run'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectBillRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['bill-run'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object['bill-run'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectBillRunId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['bill-run'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectBillRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['bill-run'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object['bill-run'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectBillRunIdKey() {
  return ['v1', '/v1/object/bill-run/:id', 'PUT'] as const
}

export function usePutV1ObjectBillRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['bill-run'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectBillRunIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$put']> },
      ) => parseResponse(client.v1.object['bill-run'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectBillRunIdKey() {
  return ['v1', '/v1/object/bill-run/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectBillRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['bill-run'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectBillRunIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$delete']> },
      ) => parseResponse(client.v1.object['bill-run'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectCommunicationProfileIdKey(
  args: InferRequestType<(typeof client.v1.object)['communication-profile'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/communication-profile/:id', keyArgs] as const
}

export function useGetV1ObjectCommunicationProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['communication-profile'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['communication-profile'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectCommunicationProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['communication-profile'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['communication-profile'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectCommunicationProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['communication-profile'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['communication-profile'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectCommunicationProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['communication-profile'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['communication-profile'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ObjectContactKey() {
  return ['v1', '/v1/object/contact', 'POST'] as const
}

export function usePostV1ObjectContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.contact.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.object.contact.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.object.contact.$post> }) =>
        parseResponse(client.v1.object.contact.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectContactIdKey(
  args: InferRequestType<(typeof client.v1.object.contact)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/contact/:id', keyArgs] as const
}

export function useGetV1ObjectContactId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.contact)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectContactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.contact[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectContactId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.contact)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectContactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.contact[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectContactIdKey() {
  return ['v1', '/v1/object/contact/:id', 'PUT'] as const
}

export function usePutV1ObjectContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.contact)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectContactIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.contact)[':id']['$put']> },
      ) => parseResponse(client.v1.object.contact[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectContactIdKey() {
  return ['v1', '/v1/object/contact/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.contact)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.contact)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectContactIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.contact)[':id']['$delete']> },
      ) => parseResponse(client.v1.object.contact[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObjectCreditBalanceAdjustmentKey() {
  return ['v1', '/v1/object/credit-balance-adjustment', 'POST'] as const
}

export function usePostV1ObjectCreditBalanceAdjustment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['credit-balance-adjustment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['credit-balance-adjustment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectCreditBalanceAdjustmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.object)['credit-balance-adjustment']['$post']>
        },
      ) => parseResponse(client.v1.object['credit-balance-adjustment'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectCreditBalanceAdjustmentIdKey(
  args: InferRequestType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/credit-balance-adjustment/:id', keyArgs] as const
}

export function useGetV1ObjectCreditBalanceAdjustmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectCreditBalanceAdjustmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.object['credit-balance-adjustment'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectCreditBalanceAdjustmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectCreditBalanceAdjustmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.object['credit-balance-adjustment'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectCreditBalanceAdjustmentIdKey() {
  return ['v1', '/v1/object/credit-balance-adjustment/:id', 'PUT'] as const
}

export function usePutV1ObjectCreditBalanceAdjustmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectCreditBalanceAdjustmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.object)['credit-balance-adjustment'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.object['credit-balance-adjustment'][':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObjectExportKey() {
  return ['v1', '/v1/object/export', 'POST'] as const
}

export function usePostV1ObjectExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.export.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.object.export.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.object.export.$post> }) =>
        parseResponse(client.v1.object.export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectExportIdKey(
  args: InferRequestType<(typeof client.v1.object.export)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/export/:id', keyArgs] as const
}

export function useGetV1ObjectExportId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.export)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.export)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.export)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.export[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectExportId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.export)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.export)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.export)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.export[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ObjectFeatureKey() {
  return ['v1', '/v1/object/feature', 'POST'] as const
}

export function usePostV1ObjectFeature<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.feature.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.object.feature.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectFeatureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.object.feature.$post> }) =>
        parseResponse(client.v1.object.feature.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectFeatureIdKey(
  args: InferRequestType<(typeof client.v1.object.feature)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/feature/:id', keyArgs] as const
}

export function useGetV1ObjectFeatureId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.feature)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectFeatureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.feature[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectFeatureId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.feature)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectFeatureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.feature[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectFeatureIdKey() {
  return ['v1', '/v1/object/feature/:id', 'PUT'] as const
}

export function usePutV1ObjectFeatureId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.feature)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectFeatureIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.feature)[':id']['$put']> },
      ) => parseResponse(client.v1.object.feature[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectFeatureIdKey() {
  return ['v1', '/v1/object/feature/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectFeatureId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.feature)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.feature)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectFeatureIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.feature)[':id']['$delete']> },
      ) => parseResponse(client.v1.object.feature[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObjectImportKey() {
  return ['v1', '/v1/object/import', 'POST'] as const
}

export function usePostV1ObjectImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.object.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.object.import.$post> }) =>
        parseResponse(client.v1.object.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectImportIdKey(
  args: InferRequestType<(typeof client.v1.object.import)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/import/:id', keyArgs] as const
}

export function useGetV1ObjectImportId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.import)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.import)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectImportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.import)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.import[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectImportId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.import)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.import)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectImportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.import)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.import[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ObjectInvoiceAdjustmentKey() {
  return ['v1', '/v1/object/invoice-adjustment', 'POST'] as const
}

export function usePostV1ObjectInvoiceAdjustment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['invoice-adjustment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectInvoiceAdjustmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.object)['invoice-adjustment']['$post']> },
      ) => parseResponse(client.v1.object['invoice-adjustment'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectInvoiceAdjustmentIdKey(
  args: InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/invoice-adjustment/:id', keyArgs] as const
}

export function useGetV1ObjectInvoiceAdjustmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectInvoiceAdjustmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['invoice-adjustment'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectInvoiceAdjustmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectInvoiceAdjustmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['invoice-adjustment'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectInvoiceAdjustmentIdKey() {
  return ['v1', '/v1/object/invoice-adjustment/:id', 'PUT'] as const
}

export function usePutV1ObjectInvoiceAdjustmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectInvoiceAdjustmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$put']>
        },
      ) => parseResponse(client.v1.object['invoice-adjustment'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectInvoiceAdjustmentIdKey() {
  return ['v1', '/v1/object/invoice-adjustment/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectInvoiceAdjustmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['invoice-adjustment'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectInvoiceAdjustmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$delete']>
        },
      ) => parseResponse(client.v1.object['invoice-adjustment'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectInvoiceItemAdjustmentIdKey(
  args: InferRequestType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/invoice-item-adjustment/:id', keyArgs] as const
}

export function useGetV1ObjectInvoiceItemAdjustmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectInvoiceItemAdjustmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['invoice-item-adjustment'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectInvoiceItemAdjustmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectInvoiceItemAdjustmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['invoice-item-adjustment'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ObjectInvoiceItemAdjustmentIdKey() {
  return ['v1', '/v1/object/invoice-item-adjustment/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectInvoiceItemAdjustmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectInvoiceItemAdjustmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.object)['invoice-item-adjustment'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.object['invoice-item-adjustment'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectInvoiceItemIdKey(
  args: InferRequestType<(typeof client.v1.object)['invoice-item'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/invoice-item/:id', keyArgs] as const
}

export function useGetV1ObjectInvoiceItemId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['invoice-item'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-item'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectInvoiceItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-item'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object['invoice-item'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectInvoiceItemId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['invoice-item'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-item'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectInvoiceItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-item'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object['invoice-item'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ObjectInvoicePaymentKey() {
  return ['v1', '/v1/object/invoice-payment', 'POST'] as const
}

export function usePostV1ObjectInvoicePayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['invoice-payment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['invoice-payment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectInvoicePaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object)['invoice-payment']['$post']> },
      ) => parseResponse(client.v1.object['invoice-payment'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectInvoicePaymentIdKey(
  args: InferRequestType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/invoice-payment/:id', keyArgs] as const
}

export function useGetV1ObjectInvoicePaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectInvoicePaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['invoice-payment'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectInvoicePaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectInvoicePaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['invoice-payment'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectInvoicePaymentIdKey() {
  return ['v1', '/v1/object/invoice-payment/:id', 'PUT'] as const
}

export function usePutV1ObjectInvoicePaymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['invoice-payment'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['invoice-payment'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectInvoicePaymentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.object)['invoice-payment'][':id']['$put']> },
      ) => parseResponse(client.v1.object['invoice-payment'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectInvoiceSplitItemIdKey(
  args: InferRequestType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/invoice-split-item/:id', keyArgs] as const
}

export function useGetV1ObjectInvoiceSplitItemId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectInvoiceSplitItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['invoice-split-item'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectInvoiceSplitItemId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectInvoiceSplitItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['invoice-split-item'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObjectInvoiceSplitIdKey(
  args: InferRequestType<(typeof client.v1.object)['invoice-split'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/invoice-split/:id', keyArgs] as const
}

export function useGetV1ObjectInvoiceSplitId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['invoice-split'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-split'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectInvoiceSplitIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-split'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object['invoice-split'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectInvoiceSplitId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['invoice-split'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-split'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectInvoiceSplitIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['invoice-split'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object['invoice-split'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObjectInvoiceIdKey(
  args: InferRequestType<(typeof client.v1.object.invoice)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/invoice/:id', keyArgs] as const
}

export function useGetV1ObjectInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.invoice)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.invoice[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.invoice)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.invoice[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectInvoiceIdKey() {
  return ['v1', '/v1/object/invoice/:id', 'PUT'] as const
}

export function usePutV1ObjectInvoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.invoice)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectInvoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.invoice)[':id']['$put']> },
      ) => parseResponse(client.v1.object.invoice[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectInvoiceIdKey() {
  return ['v1', '/v1/object/invoice/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectInvoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.invoice)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.invoice)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectInvoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.invoice)[':id']['$delete']> },
      ) => parseResponse(client.v1.object.invoice[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObjectPaymentKey() {
  return ['v1', '/v1/object/payment', 'POST'] as const
}

export function usePostV1ObjectPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.payment.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.object.payment.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectPaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.object.payment.$post> }) =>
        parseResponse(client.v1.object.payment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObjectPaymentMethodKey() {
  return ['v1', '/v1/object/payment-method', 'POST'] as const
}

export function usePostV1ObjectPaymentMethod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['payment-method']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['payment-method']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectPaymentMethodKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object)['payment-method']['$post']> },
      ) => parseResponse(client.v1.object['payment-method'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectPaymentMethodSnapshotIdKey(
  args: InferRequestType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/payment-method-snapshot/:id', keyArgs] as const
}

export function useGetV1ObjectPaymentMethodSnapshotId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectPaymentMethodSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['payment-method-snapshot'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectPaymentMethodSnapshotId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectPaymentMethodSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['payment-method-snapshot'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObjectPaymentMethodTransactionLogIdKey(
  args: InferRequestType<
    (typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/payment-method-transaction-log/:id', keyArgs] as const
}

export function useGetV1ObjectPaymentMethodTransactionLogId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectPaymentMethodTransactionLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.object['payment-method-transaction-log'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectPaymentMethodTransactionLogId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectPaymentMethodTransactionLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.object['payment-method-transaction-log'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObjectPaymentMethodIdKey(
  args: InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/payment-method/:id', keyArgs] as const
}

export function useGetV1ObjectPaymentMethodId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['payment-method'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectPaymentMethodIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['payment-method'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['payment-method'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectPaymentMethodId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['payment-method'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectPaymentMethodIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['payment-method'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['payment-method'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectPaymentMethodIdKey() {
  return ['v1', '/v1/object/payment-method/:id', 'PUT'] as const
}

export function usePutV1ObjectPaymentMethodId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['payment-method'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectPaymentMethodIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$put']> },
      ) => parseResponse(client.v1.object['payment-method'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectPaymentMethodIdKey() {
  return ['v1', '/v1/object/payment-method/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectPaymentMethodId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['payment-method'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectPaymentMethodIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$delete']> },
      ) => parseResponse(client.v1.object['payment-method'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectPaymentTransactionLogIdKey(
  args: InferRequestType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/payment-transaction-log/:id', keyArgs] as const
}

export function useGetV1ObjectPaymentTransactionLogId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectPaymentTransactionLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['payment-transaction-log'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectPaymentTransactionLogId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectPaymentTransactionLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['payment-transaction-log'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObjectPaymentIdKey(
  args: InferRequestType<(typeof client.v1.object.payment)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/payment/:id', keyArgs] as const
}

export function useGetV1ObjectPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.payment)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.payment[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.payment)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.payment[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectPaymentIdKey() {
  return ['v1', '/v1/object/payment/:id', 'PUT'] as const
}

export function usePutV1ObjectPaymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.payment)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectPaymentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.payment)[':id']['$put']> },
      ) => parseResponse(client.v1.object.payment[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectPaymentIdKey() {
  return ['v1', '/v1/object/payment/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectPaymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.payment)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.payment)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectPaymentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.payment)[':id']['$delete']> },
      ) => parseResponse(client.v1.object.payment[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObjectProductKey() {
  return ['v1', '/v1/object/product', 'POST'] as const
}

export function usePostV1ObjectProduct<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.product.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.object.product.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectProductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.object.product.$post> }) =>
        parseResponse(client.v1.object.product.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectProductFeatureIdKey(
  args: InferRequestType<(typeof client.v1.object)['product-feature'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/product-feature/:id', keyArgs] as const
}

export function useGetV1ObjectProductFeatureId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['product-feature'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['product-feature'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectProductFeatureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['product-feature'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['product-feature'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectProductFeatureId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['product-feature'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['product-feature'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectProductFeatureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['product-feature'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['product-feature'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ObjectProductFeatureIdKey() {
  return ['v1', '/v1/object/product-feature/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectProductFeatureId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['product-feature'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['product-feature'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectProductFeatureIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.object)['product-feature'][':id']['$delete']>
        },
      ) => parseResponse(client.v1.object['product-feature'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObjectProductRatePlanKey() {
  return ['v1', '/v1/object/product-rate-plan', 'POST'] as const
}

export function usePostV1ObjectProductRatePlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['product-rate-plan']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectProductRatePlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object)['product-rate-plan']['$post']> },
      ) => parseResponse(client.v1.object['product-rate-plan'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObjectProductRatePlanChargeKey() {
  return ['v1', '/v1/object/product-rate-plan-charge', 'POST'] as const
}

export function usePostV1ObjectProductRatePlanCharge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan-charge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['product-rate-plan-charge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectProductRatePlanChargeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge']['$post']>
        },
      ) => parseResponse(client.v1.object['product-rate-plan-charge'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectProductRatePlanChargeTierIdKey(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/product-rate-plan-charge-tier/:id', keyArgs] as const
}

export function useGetV1ObjectProductRatePlanChargeTierId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectProductRatePlanChargeTierIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.object['product-rate-plan-charge-tier'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectProductRatePlanChargeTierId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectProductRatePlanChargeTierIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.object['product-rate-plan-charge-tier'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectProductRatePlanChargeTierIdKey() {
  return ['v1', '/v1/object/product-rate-plan-charge-tier/:id', 'PUT'] as const
}

export function usePutV1ObjectProductRatePlanChargeTierId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectProductRatePlanChargeTierIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.object['product-rate-plan-charge-tier'][':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectProductRatePlanChargeIdKey(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/product-rate-plan-charge/:id', keyArgs] as const
}

export function useGetV1ObjectProductRatePlanChargeId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectProductRatePlanChargeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.object['product-rate-plan-charge'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectProductRatePlanChargeId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectProductRatePlanChargeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.object['product-rate-plan-charge'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectProductRatePlanChargeIdKey() {
  return ['v1', '/v1/object/product-rate-plan-charge/:id', 'PUT'] as const
}

export function usePutV1ObjectProductRatePlanChargeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectProductRatePlanChargeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.object)['product-rate-plan-charge'][':id']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.object['product-rate-plan-charge'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectProductRatePlanChargeIdKey() {
  return ['v1', '/v1/object/product-rate-plan-charge/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectProductRatePlanChargeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectProductRatePlanChargeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.object)['product-rate-plan-charge'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.object['product-rate-plan-charge'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectProductRatePlanIdKey(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/product-rate-plan/:id', keyArgs] as const
}

export function useGetV1ObjectProductRatePlanId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectProductRatePlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['product-rate-plan'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectProductRatePlanId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectProductRatePlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['product-rate-plan'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectProductRatePlanIdKey() {
  return ['v1', '/v1/object/product-rate-plan/:id', 'PUT'] as const
}

export function usePutV1ObjectProductRatePlanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectProductRatePlanIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$put']> },
      ) => parseResponse(client.v1.object['product-rate-plan'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectProductRatePlanIdKey() {
  return ['v1', '/v1/object/product-rate-plan/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectProductRatePlanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['product-rate-plan'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectProductRatePlanIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$delete']>
        },
      ) => parseResponse(client.v1.object['product-rate-plan'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectProductIdKey(
  args: InferRequestType<(typeof client.v1.object.product)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/product/:id', keyArgs] as const
}

export function useGetV1ObjectProductId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.product)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.product[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectProductId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.product)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.product[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectProductIdKey() {
  return ['v1', '/v1/object/product/:id', 'PUT'] as const
}

export function usePutV1ObjectProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.product)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.product)[':id']['$put']> },
      ) => parseResponse(client.v1.object.product[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectProductIdKey() {
  return ['v1', '/v1/object/product/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.product)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.product)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.product)[':id']['$delete']> },
      ) => parseResponse(client.v1.object.product[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectRatePlanChargeTierIdKey(
  args: InferRequestType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/rate-plan-charge-tier/:id', keyArgs] as const
}

export function useGetV1ObjectRatePlanChargeTierId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectRatePlanChargeTierIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['rate-plan-charge-tier'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectRatePlanChargeTierId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectRatePlanChargeTierIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['rate-plan-charge-tier'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObjectRatePlanChargeIdKey(
  args: InferRequestType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/rate-plan-charge/:id', keyArgs] as const
}

export function useGetV1ObjectRatePlanChargeId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectRatePlanChargeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['rate-plan-charge'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectRatePlanChargeId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectRatePlanChargeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['rate-plan-charge'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectRatePlanChargeIdKey() {
  return ['v1', '/v1/object/rate-plan-charge/:id', 'PUT'] as const
}

export function usePutV1ObjectRatePlanChargeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['rate-plan-charge'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['rate-plan-charge'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectRatePlanChargeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.object)['rate-plan-charge'][':id']['$put']> },
      ) => parseResponse(client.v1.object['rate-plan-charge'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectRatePlanIdKey(
  args: InferRequestType<(typeof client.v1.object)['rate-plan'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/rate-plan/:id', keyArgs] as const
}

export function useGetV1ObjectRatePlanId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['rate-plan'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['rate-plan'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectRatePlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['rate-plan'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object['rate-plan'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectRatePlanId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['rate-plan'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['rate-plan'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectRatePlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['rate-plan'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object['rate-plan'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ObjectRefundKey() {
  return ['v1', '/v1/object/refund', 'POST'] as const
}

export function usePostV1ObjectRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.refund.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.object.refund.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.object.refund.$post> }) =>
        parseResponse(client.v1.object.refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectRefundInvoicePaymentIdKey(
  args: InferRequestType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/refund-invoice-payment/:id', keyArgs] as const
}

export function useGetV1ObjectRefundInvoicePaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectRefundInvoicePaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['refund-invoice-payment'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectRefundInvoicePaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectRefundInvoicePaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['refund-invoice-payment'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObjectRefundTransactionLogIdKey(
  args: InferRequestType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/refund-transaction-log/:id', keyArgs] as const
}

export function useGetV1ObjectRefundTransactionLogId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectRefundTransactionLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['refund-transaction-log'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectRefundTransactionLogId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectRefundTransactionLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['refund-transaction-log'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObjectRefundIdKey(
  args: InferRequestType<(typeof client.v1.object.refund)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/refund/:id', keyArgs] as const
}

export function useGetV1ObjectRefundId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.refund)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectRefundIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.refund[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectRefundId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.refund)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectRefundIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.refund[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectRefundIdKey() {
  return ['v1', '/v1/object/refund/:id', 'PUT'] as const
}

export function usePutV1ObjectRefundId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.refund)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectRefundIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.refund)[':id']['$put']> },
      ) => parseResponse(client.v1.object.refund[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectRefundIdKey() {
  return ['v1', '/v1/object/refund/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectRefundId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.refund)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.refund)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectRefundIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.refund)[':id']['$delete']> },
      ) => parseResponse(client.v1.object.refund[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectSubscriptionProductFeatureIdKey(
  args: InferRequestType<(typeof client.v1.object)['subscription-product-feature'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/subscription-product-feature/:id', keyArgs] as const
}

export function useGetV1ObjectSubscriptionProductFeatureId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['subscription-product-feature'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['subscription-product-feature'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectSubscriptionProductFeatureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['subscription-product-feature'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.object['subscription-product-feature'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectSubscriptionProductFeatureId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['subscription-product-feature'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['subscription-product-feature'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectSubscriptionProductFeatureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.object)['subscription-product-feature'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.object['subscription-product-feature'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObjectSubscriptionIdKey(
  args: InferRequestType<(typeof client.v1.object.subscription)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/subscription/:id', keyArgs] as const
}

export function useGetV1ObjectSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.subscription)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.subscription)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.subscription)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.subscription[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.subscription)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.subscription)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object.subscription)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.subscription[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectSubscriptionIdKey() {
  return ['v1', '/v1/object/subscription/:id', 'PUT'] as const
}

export function usePutV1ObjectSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.subscription)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.subscription)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectSubscriptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.subscription)[':id']['$put']> },
      ) => parseResponse(client.v1.object.subscription[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectSubscriptionIdKey() {
  return ['v1', '/v1/object/subscription/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object.subscription)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.subscription)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectSubscriptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.object.subscription)[':id']['$delete']> },
      ) => parseResponse(client.v1.object.subscription[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObjectTaxationItemKey() {
  return ['v1', '/v1/object/taxation-item', 'POST'] as const
}

export function usePostV1ObjectTaxationItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['taxation-item']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['taxation-item']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectTaxationItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object)['taxation-item']['$post']> },
      ) => parseResponse(client.v1.object['taxation-item'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectTaxationItemIdKey(
  args: InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/taxation-item/:id', keyArgs] as const
}

export function useGetV1ObjectTaxationItemId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['taxation-item'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectTaxationItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['taxation-item'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object['taxation-item'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectTaxationItemId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['taxation-item'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectTaxationItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['taxation-item'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object['taxation-item'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectTaxationItemIdKey() {
  return ['v1', '/v1/object/taxation-item/:id', 'PUT'] as const
}

export function usePutV1ObjectTaxationItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['taxation-item'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectTaxationItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$put']> },
      ) => parseResponse(client.v1.object['taxation-item'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectTaxationItemIdKey() {
  return ['v1', '/v1/object/taxation-item/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectTaxationItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['taxation-item'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectTaxationItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$delete']> },
      ) => parseResponse(client.v1.object['taxation-item'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObjectUnitOfMeasureKey() {
  return ['v1', '/v1/object/unit-of-measure', 'POST'] as const
}

export function usePostV1ObjectUnitOfMeasure<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['unit-of-measure']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectUnitOfMeasureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object)['unit-of-measure']['$post']> },
      ) => parseResponse(client.v1.object['unit-of-measure'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectUnitOfMeasureIdKey(
  args: InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/unit-of-measure/:id', keyArgs] as const
}

export function useGetV1ObjectUnitOfMeasureId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectUnitOfMeasureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['unit-of-measure'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectUnitOfMeasureId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectUnitOfMeasureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.object['unit-of-measure'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectUnitOfMeasureIdKey() {
  return ['v1', '/v1/object/unit-of-measure/:id', 'PUT'] as const
}

export function usePutV1ObjectUnitOfMeasureId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectUnitOfMeasureIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$put']> },
      ) => parseResponse(client.v1.object['unit-of-measure'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectUnitOfMeasureIdKey() {
  return ['v1', '/v1/object/unit-of-measure/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectUnitOfMeasureId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.object)['unit-of-measure'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectUnitOfMeasureIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$delete']>
        },
      ) => parseResponse(client.v1.object['unit-of-measure'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObjectUsageKey() {
  return ['v1', '/v1/object/usage', 'POST'] as const
}

export function usePostV1ObjectUsage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.object.usage.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.object.usage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectUsageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.object.usage.$post> }) =>
        parseResponse(client.v1.object.usage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectUsageIdKey(
  args: InferRequestType<(typeof client.v1.object.usage)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/object/usage/:id', keyArgs] as const
}

export function useGetV1ObjectUsageId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.usage)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectUsageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.usage[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectUsageId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.object.usage)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObjectUsageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.object.usage[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectUsageIdKey() {
  return ['v1', '/v1/object/usage/:id', 'PUT'] as const
}

export function usePutV1ObjectUsageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.usage)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectUsageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.usage)[':id']['$put']> },
      ) => parseResponse(client.v1.object.usage[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectUsageIdKey() {
  return ['v1', '/v1/object/usage/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectUsageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.object.usage)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.object.usage)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectUsageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.object.usage)[':id']['$delete']> },
      ) => parseResponse(client.v1.object.usage[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OperationsBillingPreviewKey() {
  return ['v1', '/v1/operations/billing-preview', 'POST'] as const
}

export function usePostV1OperationsBillingPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.operations)['billing-preview']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.operations)['billing-preview']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OperationsBillingPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.operations)['billing-preview']['$post']> },
      ) => parseResponse(client.v1.operations['billing-preview'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OperationsInvoiceCollectKey() {
  return ['v1', '/v1/operations/invoice-collect', 'POST'] as const
}

export function usePostV1OperationsInvoiceCollect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.operations)['invoice-collect']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.operations)['invoice-collect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OperationsInvoiceCollectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.operations)['invoice-collect']['$post']> },
      ) => parseResponse(client.v1.operations['invoice-collect'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrderLineItemsBulkKey() {
  return ['v1', '/v1/order-line-items/bulk', 'POST'] as const
}

export function usePostV1OrderLineItemsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['order-line-items']['bulk']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['order-line-items']['bulk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrderLineItemsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['order-line-items']['bulk']['$post']> },
      ) => parseResponse(client.v1['order-line-items'].bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrderLineItemsItemIdKey(
  args: InferRequestType<(typeof client.v1)['order-line-items'][':itemId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/order-line-items/:itemId', keyArgs] as const
}

export function useGetV1OrderLineItemsItemId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['order-line-items'][':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['order-line-items'][':itemId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrderLineItemsItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['order-line-items'][':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['order-line-items'][':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrderLineItemsItemId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['order-line-items'][':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['order-line-items'][':itemId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrderLineItemsItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['order-line-items'][':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['order-line-items'][':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1OrderLineItemsItemIdKey() {
  return ['v1', '/v1/order-line-items/:itemId', 'PUT'] as const
}

export function usePutV1OrderLineItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['order-line-items'][':itemId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['order-line-items'][':itemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1OrderLineItemsItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['order-line-items'][':itemId']['$put']> },
      ) => parseResponse(client.v1['order-line-items'][':itemId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrdersKey(args: InferRequestType<typeof client.v1.orders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders', keyArgs] as const
}

export function useGetV1Orders<TError = unknown>(
  args: InferRequestType<typeof client.v1.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Orders<TError = unknown>(
  args: InferRequestType<typeof client.v1.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrdersKey() {
  return ['v1', '/v1/orders', 'POST'] as const
}

export function usePostV1Orders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.orders.$post> }) =>
        parseResponse(client.v1.orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrdersInvoiceOwnerAccountNumberKey(
  args: InferRequestType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders/invoiceOwner/:accountNumber', keyArgs] as const
}

export function useGetV1OrdersInvoiceOwnerAccountNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersInvoiceOwnerAccountNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.orders.invoiceOwner[':accountNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrdersInvoiceOwnerAccountNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersInvoiceOwnerAccountNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.orders.invoiceOwner[':accountNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrdersPreviewKey() {
  return ['v1', '/v1/orders/preview', 'POST'] as const
}

export function usePostV1OrdersPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.preview.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.orders.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrdersPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.orders.preview.$post> }) =>
        parseResponse(client.v1.orders.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrdersSubscriptionSubscriptionNumberKey(
  args: InferRequestType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders/subscription/:subscriptionNumber', keyArgs] as const
}

export function useGetV1OrdersSubscriptionSubscriptionNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersSubscriptionSubscriptionNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.orders.subscription[':subscriptionNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrdersSubscriptionSubscriptionNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersSubscriptionSubscriptionNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.orders.subscription[':subscriptionNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrdersSubscriptionOwnerAccountNumberKey(
  args: InferRequestType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders/subscriptionOwner/:accountNumber', keyArgs] as const
}

export function useGetV1OrdersSubscriptionOwnerAccountNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersSubscriptionOwnerAccountNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.orders.subscriptionOwner[':accountNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrdersSubscriptionOwnerAccountNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersSubscriptionOwnerAccountNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.orders.subscriptionOwner[':accountNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrdersTermSubscriptionNumberKey(
  args: InferRequestType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders/term/:subscriptionNumber', keyArgs] as const
}

export function useGetV1OrdersTermSubscriptionNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersTermSubscriptionNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.orders.term[':subscriptionNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrdersTermSubscriptionNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersTermSubscriptionNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.orders.term[':subscriptionNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrdersOrderNumberKey(
  args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders/:orderNumber', keyArgs] as const
}

export function useGetV1OrdersOrderNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersOrderNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.orders[':orderNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrdersOrderNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersOrderNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.orders[':orderNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1OrdersOrderNumberKey() {
  return ['v1', '/v1/orders/:orderNumber', 'DELETE'] as const
}

export function useDeleteV1OrdersOrderNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.orders)[':orderNumber']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1OrdersOrderNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.orders)[':orderNumber']['$delete']> },
      ) => parseResponse(client.v1.orders[':orderNumber'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1OrdersOrderNumberCustomFieldsKey() {
  return ['v1', '/v1/orders/:orderNumber/customFields', 'PUT'] as const
}

export function usePutV1OrdersOrderNumberCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['customFields']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.orders)[':orderNumber']['customFields']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1OrdersOrderNumberCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.orders)[':orderNumber']['customFields']['$put']>
        },
      ) => parseResponse(client.v1.orders[':orderNumber'].customFields.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberKey(
  args: InferRequestType<
    (typeof client.v1.orders)[':orderNumber']['evergreenMetrics'][':subscriptionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders/:orderNumber/evergreenMetrics/:subscriptionNumber', keyArgs] as const
}

export function useGetV1OrdersOrderNumberEvergreenMetricsSubscriptionNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.orders)[':orderNumber']['evergreenMetrics'][':subscriptionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.orders[':orderNumber'].evergreenMetrics[':subscriptionNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrdersOrderNumberEvergreenMetricsSubscriptionNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.orders)[':orderNumber']['evergreenMetrics'][':subscriptionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.orders[':orderNumber'].evergreenMetrics[':subscriptionNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrdersOrderNumberRampMetricsKey(
  args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders/:orderNumber/ramp-metrics', keyArgs] as const
}

export function useGetV1OrdersOrderNumberRampMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersOrderNumberRampMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.orders[':orderNumber']['ramp-metrics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrdersOrderNumberRampMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersOrderNumberRampMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.orders[':orderNumber']['ramp-metrics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1OrdersOrderNumberTriggerDatesKey() {
  return ['v1', '/v1/orders/:orderNumber/triggerDates', 'PUT'] as const
}

export function usePutV1OrdersOrderNumberTriggerDates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.orders)[':orderNumber']['triggerDates']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.orders)[':orderNumber']['triggerDates']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1OrdersOrderNumberTriggerDatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.orders)[':orderNumber']['triggerDates']['$put']>
        },
      ) => parseResponse(client.v1.orders[':orderNumber'].triggerDates.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentMethodsKey() {
  return ['v1', '/v1/payment-methods', 'POST'] as const
}

export function usePostV1PaymentMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-methods']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['payment-methods']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['payment-methods']['$post']> },
      ) => parseResponse(client.v1['payment-methods'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentMethodsCreditCardsKey() {
  return ['v1', '/v1/payment-methods/credit-cards', 'POST'] as const
}

export function usePostV1PaymentMethodsCreditCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['payment-methods']['credit-cards']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['payment-methods']['credit-cards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentMethodsCreditCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['payment-methods']['credit-cards']['$post']>
        },
      ) => parseResponse(client.v1['payment-methods']['credit-cards'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentMethodsCreditCardsAccountsAccountKeyKey(
  args: InferRequestType<
    (typeof client.v1)['payment-methods']['credit-cards']['accounts'][':account-key']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payment-methods/credit-cards/accounts/:account-key', keyArgs] as const
}

export function useGetV1PaymentMethodsCreditCardsAccountsAccountKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['payment-methods']['credit-cards']['accounts'][':account-key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentMethodsCreditCardsAccountsAccountKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['payment-methods']['credit-cards'].accounts[':account-key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentMethodsCreditCardsAccountsAccountKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['payment-methods']['credit-cards']['accounts'][':account-key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentMethodsCreditCardsAccountsAccountKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['payment-methods']['credit-cards'].accounts[':account-key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1PaymentMethodsCreditCardsPaymentMethodIdKey() {
  return ['v1', '/v1/payment-methods/credit-cards/:payment-method-id', 'PUT'] as const
}

export function usePutV1PaymentMethodsCreditCardsPaymentMethodId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['payment-methods']['credit-cards'][':payment-method-id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PaymentMethodsCreditCardsPaymentMethodIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['payment-methods']['credit-cards'][':payment-method-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['payment-methods']['credit-cards'][':payment-method-id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentMethodsDecryptionKey() {
  return ['v1', '/v1/payment-methods/decryption', 'POST'] as const
}

export function usePostV1PaymentMethodsDecryption<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['payment-methods']['decryption']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['payment-methods']['decryption']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentMethodsDecryptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['payment-methods']['decryption']['$post']> },
      ) => parseResponse(client.v1['payment-methods'].decryption.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentMethodsPaymentMethodIdKey(
  args: InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payment-methods/:payment-method-id', keyArgs] as const
}

export function useGetV1PaymentMethodsPaymentMethodId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentMethodsPaymentMethodIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['payment-methods'][':payment-method-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentMethodsPaymentMethodId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentMethodsPaymentMethodIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['payment-methods'][':payment-method-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PaymentMethodsPaymentMethodIdKey() {
  return ['v1', '/v1/payment-methods/:payment-method-id', 'PUT'] as const
}

export function usePutV1PaymentMethodsPaymentMethodId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['payment-methods'][':payment-method-id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PaymentMethodsPaymentMethodIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$put']>
        },
      ) =>
        parseResponse(client.v1['payment-methods'][':payment-method-id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PaymentMethodsPaymentMethodIdKey() {
  return ['v1', '/v1/payment-methods/:payment-method-id', 'DELETE'] as const
}

export function useDeleteV1PaymentMethodsPaymentMethodId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PaymentMethodsPaymentMethodIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['payment-methods'][':payment-method-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['payment-methods'][':payment-method-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentMethodsPaymentMethodIdAuthorizeKey() {
  return ['v1', '/v1/payment-methods/:payment-method-id/authorize', 'POST'] as const
}

export function usePostV1PaymentMethodsPaymentMethodIdAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['payment-methods'][':payment-method-id']['authorize']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentMethodsPaymentMethodIdAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['payment-methods'][':payment-method-id']['authorize']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['payment-methods'][':payment-method-id'].authorize.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentMethodsPaymentMethodIdProfilesKey(
  args: InferRequestType<
    (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payment-methods/:payment-method-id/profiles', keyArgs] as const
}

export function useGetV1PaymentMethodsPaymentMethodIdProfiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentMethodsPaymentMethodIdProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['payment-methods'][':payment-method-id'].profiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentMethodsPaymentMethodIdProfiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentMethodsPaymentMethodIdProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['payment-methods'][':payment-method-id'].profiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentMethodsPaymentMethodIdProfilesKey() {
  return ['v1', '/v1/payment-methods/:payment-method-id/profiles', 'POST'] as const
}

export function usePostV1PaymentMethodsPaymentMethodIdProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentMethodsPaymentMethodIdProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['payment-methods'][':payment-method-id'].profiles.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancelKey() {
  return [
    'v1',
    '/v1/payment-methods/:payment-method-id/profiles/:profile-number/cancel',
    'POST',
  ] as const
}

export function usePostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['payment-methods'][':payment-method-id']['profiles'][':profile-number']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['payment-methods'][':payment-method-id']['profiles'][':profile-number']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['payment-methods'][':payment-method-id'].profiles[
            ':profile-number'
          ].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpireKey() {
  return [
    'v1',
    '/v1/payment-methods/:payment-method-id/profiles/:profile-number/expire',
    'POST',
  ] as const
}

export function usePostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpire<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['payment-methods'][':payment-method-id']['profiles'][':profile-number']['expire']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpireKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['payment-methods'][':payment-method-id']['profiles'][':profile-number']['expire']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['payment-methods'][':payment-method-id'].profiles[
            ':profile-number'
          ].expire.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1PaymentMethodsPaymentMethodIdScrubKey() {
  return ['v1', '/v1/payment-methods/:payment-method-id/scrub', 'PUT'] as const
}

export function usePutV1PaymentMethodsPaymentMethodIdScrub<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['scrub']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PaymentMethodsPaymentMethodIdScrubKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['payment-methods'][':payment-method-id']['scrub']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['payment-methods'][':payment-method-id'].scrub.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1PaymentMethodsPaymentMethodIdVerifyKey() {
  return ['v1', '/v1/payment-methods/:payment-method-id/verify', 'PUT'] as const
}

export function usePutV1PaymentMethodsPaymentMethodIdVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['verify']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PaymentMethodsPaymentMethodIdVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['payment-methods'][':payment-method-id']['verify']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['payment-methods'][':payment-method-id'].verify.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentMethodsPaymentMethodIdVoidAuthorizeKey() {
  return ['v1', '/v1/payment-methods/:payment-method-id/voidAuthorize', 'POST'] as const
}

export function usePostV1PaymentMethodsPaymentMethodIdVoidAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['payment-methods'][':payment-method-id']['voidAuthorize']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentMethodsPaymentMethodIdVoidAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['payment-methods'][':payment-method-id']['voidAuthorize']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['payment-methods'][':payment-method-id'].voidAuthorize.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentRunsKey(
  args: InferRequestType<(typeof client.v1)['payment-runs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payment-runs', keyArgs] as const
}

export function useGetV1PaymentRuns<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['payment-runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-runs']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PaymentRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-runs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['payment-runs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentRuns<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['payment-runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-runs']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PaymentRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-runs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['payment-runs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentRunsKey() {
  return ['v1', '/v1/payment-runs', 'POST'] as const
}

export function usePostV1PaymentRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-runs']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['payment-runs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['payment-runs']['$post']> },
      ) => parseResponse(client.v1['payment-runs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentRunsPaymentRunIdKey(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payment-runs/:paymentRunId', keyArgs] as const
}

export function useGetV1PaymentRunsPaymentRunId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentRunsPaymentRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['payment-runs'][':paymentRunId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentRunsPaymentRunId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentRunsPaymentRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['payment-runs'][':paymentRunId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PaymentRunsPaymentRunIdKey() {
  return ['v1', '/v1/payment-runs/:paymentRunId', 'PUT'] as const
}

export function usePutV1PaymentRunsPaymentRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PaymentRunsPaymentRunIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$put']> },
      ) => parseResponse(client.v1['payment-runs'][':paymentRunId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PaymentRunsPaymentRunIdKey() {
  return ['v1', '/v1/payment-runs/:paymentRunId', 'DELETE'] as const
}

export function useDeleteV1PaymentRunsPaymentRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PaymentRunsPaymentRunIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$delete']>
        },
      ) => parseResponse(client.v1['payment-runs'][':paymentRunId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentRunsPaymentRunIdDataKey(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payment-runs/:paymentRunId/data', keyArgs] as const
}

export function useGetV1PaymentRunsPaymentRunIdData<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentRunsPaymentRunIdDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['payment-runs'][':paymentRunId'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentRunsPaymentRunIdData<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentRunsPaymentRunIdDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['payment-runs'][':paymentRunId'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PaymentRunsPaymentRunIdSummaryKey(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payment-runs/:paymentRunId/summary', keyArgs] as const
}

export function useGetV1PaymentRunsPaymentRunIdSummary<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentRunsPaymentRunIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['payment-runs'][':paymentRunId'].summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentRunsPaymentRunIdSummary<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentRunsPaymentRunIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['payment-runs'][':paymentRunId'].summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PaymentgatewaysKey(
  args: InferRequestType<typeof client.v1.paymentgateways.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/paymentgateways', keyArgs] as const
}

export function useGetV1Paymentgateways<TError = unknown>(
  args: InferRequestType<typeof client.v1.paymentgateways.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentgateways.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentgatewaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentgateways.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.paymentgateways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Paymentgateways<TError = unknown>(
  args: InferRequestType<typeof client.v1.paymentgateways.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentgateways.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentgatewaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentgateways.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.paymentgateways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PaymentsKey(args: InferRequestType<typeof client.v1.payments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payments', keyArgs] as const
}

export function useGetV1Payments<TError = unknown>(
  args: InferRequestType<typeof client.v1.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Payments<TError = unknown>(
  args: InferRequestType<typeof client.v1.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentsKey() {
  return ['v1', '/v1/payments', 'POST'] as const
}

export function usePostV1Payments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.payments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.payments.$post> }) =>
        parseResponse(client.v1.payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentsPaymentIdKey(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payments/:paymentId', keyArgs] as const
}

export function useGetV1PaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payments[':paymentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payments[':paymentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PaymentsPaymentIdKey() {
  return ['v1', '/v1/payments/:paymentId', 'PUT'] as const
}

export function usePutV1PaymentsPaymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payments)[':paymentId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PaymentsPaymentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.payments)[':paymentId']['$put']> },
      ) => parseResponse(client.v1.payments[':paymentId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PaymentsPaymentIdKey() {
  return ['v1', '/v1/payments/:paymentId', 'DELETE'] as const
}

export function useDeleteV1PaymentsPaymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payments)[':paymentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PaymentsPaymentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.payments)[':paymentId']['$delete']> },
      ) => parseResponse(client.v1.payments[':paymentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1PaymentsPaymentIdApplyKey() {
  return ['v1', '/v1/payments/:paymentId/apply', 'PUT'] as const
}

export function usePutV1PaymentsPaymentIdApply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['apply']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payments)[':paymentId']['apply']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PaymentsPaymentIdApplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.payments)[':paymentId']['apply']['$put']> },
      ) => parseResponse(client.v1.payments[':paymentId'].apply.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1PaymentsPaymentIdCancelKey() {
  return ['v1', '/v1/payments/:paymentId/cancel', 'PUT'] as const
}

export function usePutV1PaymentsPaymentIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payments)[':paymentId']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PaymentsPaymentIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.payments)[':paymentId']['cancel']['$put']> },
      ) => parseResponse(client.v1.payments[':paymentId'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentsPaymentIdPartsKey(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payments/:paymentId/parts', keyArgs] as const
}

export function useGetV1PaymentsPaymentIdParts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentsPaymentIdPartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payments[':paymentId'].parts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentsPaymentIdParts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentsPaymentIdPartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payments[':paymentId'].parts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PaymentsPaymentIdPartsPartidKey(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payments/:paymentId/parts/:partid', keyArgs] as const
}

export function useGetV1PaymentsPaymentIdPartsPartid<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentsPaymentIdPartsPartidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.payments[':paymentId'].parts[':partid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentsPaymentIdPartsPartid<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentsPaymentIdPartsPartidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.payments[':paymentId'].parts[':partid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PaymentsPaymentIdPartsPartidItempartsKey(
  args: InferRequestType<
    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payments/:paymentId/parts/:partid/itemparts', keyArgs] as const
}

export function useGetV1PaymentsPaymentIdPartsPartidItemparts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentsPaymentIdPartsPartidItempartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.payments[':paymentId'].parts[':partid'].itemparts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentsPaymentIdPartsPartidItemparts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentsPaymentIdPartsPartidItempartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.payments[':paymentId'].parts[':partid'].itemparts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PaymentsPaymentIdPartsPartidItempartsItempartidKey(
  args: InferRequestType<
    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts'][':itempartid']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payments/:paymentId/parts/:partid/itemparts/:itempartid', keyArgs] as const
}

export function useGetV1PaymentsPaymentIdPartsPartidItempartsItempartid<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts'][':itempartid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentsPaymentIdPartsPartidItempartsItempartidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.payments[':paymentId'].parts[':partid'].itemparts[':itempartid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentsPaymentIdPartsPartidItempartsItempartid<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts'][':itempartid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentsPaymentIdPartsPartidItempartsItempartidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.payments[':paymentId'].parts[':partid'].itemparts[':itempartid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentsPaymentIdRefundsKey() {
  return ['v1', '/v1/payments/:paymentId/refunds', 'POST'] as const
}

export function usePostV1PaymentsPaymentIdRefunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['refunds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payments)[':paymentId']['refunds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentsPaymentIdRefundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.payments)[':paymentId']['refunds']['$post']> },
      ) => parseResponse(client.v1.payments[':paymentId'].refunds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1PaymentsPaymentIdTransferKey() {
  return ['v1', '/v1/payments/:paymentId/transfer', 'PUT'] as const
}

export function usePutV1PaymentsPaymentIdTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['transfer']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payments)[':paymentId']['transfer']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PaymentsPaymentIdTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.payments)[':paymentId']['transfer']['$put']> },
      ) => parseResponse(client.v1.payments[':paymentId'].transfer.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1PaymentsPaymentIdUnapplyKey() {
  return ['v1', '/v1/payments/:paymentId/unapply', 'PUT'] as const
}

export function usePutV1PaymentsPaymentIdUnapply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['unapply']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payments)[':paymentId']['unapply']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PaymentsPaymentIdUnapplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.payments)[':paymentId']['unapply']['$put']> },
      ) => parseResponse(client.v1.payments[':paymentId'].unapply.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1QuotesDocumentKey() {
  return ['v1', '/v1/quotes/document', 'POST'] as const
}

export function usePostV1QuotesDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.document.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.quotes.document.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1QuotesDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.quotes.document.$post> }) =>
        parseResponse(client.v1.quotes.document.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RampsRampNumberKey(
  args: InferRequestType<(typeof client.v1.ramps)[':rampNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/ramps/:rampNumber', keyArgs] as const
}

export function useGetV1RampsRampNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ramps)[':rampNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RampsRampNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ramps[':rampNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RampsRampNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ramps)[':rampNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RampsRampNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ramps[':rampNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1RampsRampNumberRampMetricsKey(
  args: InferRequestType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/ramps/:rampNumber/ramp-metrics', keyArgs] as const
}

export function useGetV1RampsRampNumberRampMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RampsRampNumberRampMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.ramps[':rampNumber']['ramp-metrics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RampsRampNumberRampMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RampsRampNumberRampMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.ramps[':rampNumber']['ramp-metrics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1RateplanProductIdProductRatePlanKey(
  args: InferRequestType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/rateplan/:product_id/productRatePlan', keyArgs] as const
}

export function useGetV1RateplanProductIdProductRatePlan<TError = unknown>(
  args: InferRequestType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RateplanProductIdProductRatePlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.rateplan[':product_id'].productRatePlan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RateplanProductIdProductRatePlan<TError = unknown>(
  args: InferRequestType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RateplanProductIdProductRatePlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.rateplan[':product_id'].productRatePlan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1RefundsKey(args: InferRequestType<typeof client.v1.refunds.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/refunds', keyArgs] as const
}

export function useGetV1Refunds<TError = unknown>(
  args: InferRequestType<typeof client.v1.refunds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1RefundsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Refunds<TError = unknown>(
  args: InferRequestType<typeof client.v1.refunds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1RefundsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1RefundsRefundIdReconcileKey() {
  return ['v1', '/v1/refunds/:refund-id/reconcile', 'POST'] as const
}

export function usePostV1RefundsRefundIdReconcile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.refunds)[':refund-id']['reconcile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.refunds)[':refund-id']['reconcile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RefundsRefundIdReconcileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.refunds)[':refund-id']['reconcile']['$post']>
        },
      ) => parseResponse(client.v1.refunds[':refund-id'].reconcile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RefundsRefundIdKey(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/refunds/:refundId', keyArgs] as const
}

export function useGetV1RefundsRefundId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RefundsRefundIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.refunds[':refundId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RefundsRefundId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RefundsRefundIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.refunds[':refundId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1RefundsRefundIdKey() {
  return ['v1', '/v1/refunds/:refundId', 'PUT'] as const
}

export function usePutV1RefundsRefundId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.refunds)[':refundId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RefundsRefundIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.refunds)[':refundId']['$put']> },
      ) => parseResponse(client.v1.refunds[':refundId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1RefundsRefundIdKey() {
  return ['v1', '/v1/refunds/:refundId', 'DELETE'] as const
}

export function useDeleteV1RefundsRefundId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.refunds)[':refundId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1RefundsRefundIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.refunds)[':refundId']['$delete']> },
      ) => parseResponse(client.v1.refunds[':refundId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1RefundsRefundIdCancelKey() {
  return ['v1', '/v1/refunds/:refundId/cancel', 'PUT'] as const
}

export function usePutV1RefundsRefundIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.refunds)[':refundId']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RefundsRefundIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.refunds)[':refundId']['cancel']['$put']> },
      ) => parseResponse(client.v1.refunds[':refundId'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RefundsRefundIdPartsKey(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/refunds/:refundId/parts', keyArgs] as const
}

export function useGetV1RefundsRefundIdParts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RefundsRefundIdPartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.refunds[':refundId'].parts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RefundsRefundIdParts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RefundsRefundIdPartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.refunds[':refundId'].parts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1RefundsRefundIdPartsRefundpartidKey(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/refunds/:refundId/parts/:refundpartid', keyArgs] as const
}

export function useGetV1RefundsRefundIdPartsRefundpartid<TError = unknown>(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RefundsRefundIdPartsRefundpartidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.refunds[':refundId'].parts[':refundpartid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RefundsRefundIdPartsRefundpartid<TError = unknown>(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RefundsRefundIdPartsRefundpartidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.refunds[':refundId'].parts[':refundpartid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RefundsRefundIdPartsRefundpartidItempartsKey(
  args: InferRequestType<
    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/refunds/:refundId/parts/:refundpartid/itemparts', keyArgs] as const
}

export function useGetV1RefundsRefundIdPartsRefundpartidItemparts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RefundsRefundIdPartsRefundpartidItempartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.refunds[':refundId'].parts[':refundpartid'].itemparts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RefundsRefundIdPartsRefundpartidItemparts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RefundsRefundIdPartsRefundpartidItempartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.refunds[':refundId'].parts[':refundpartid'].itemparts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RefundsRefundIdPartsRefundpartidItempartsItempartidKey(
  args: InferRequestType<
    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts'][':itempartid']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/refunds/:refundId/parts/:refundpartid/itemparts/:itempartid', keyArgs] as const
}

export function useGetV1RefundsRefundIdPartsRefundpartidItempartsItempartid<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts'][':itempartid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RefundsRefundIdPartsRefundpartidItempartsItempartidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.refunds[':refundId'].parts[':refundpartid'].itemparts[':itempartid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RefundsRefundIdPartsRefundpartidItempartsItempartid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts'][':itempartid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RefundsRefundIdPartsRefundpartidItempartsItempartidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.refunds[':refundId'].parts[':refundpartid'].itemparts[':itempartid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RevenueEventsRevenueSchedulesRsNumberKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-events']['revenue-schedules'][':rs-number']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-events/revenue-schedules/:rs-number', keyArgs] as const
}

export function useGetV1RevenueEventsRevenueSchedulesRsNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-events']['revenue-schedules'][':rs-number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueEventsRevenueSchedulesRsNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-events']['revenue-schedules'][':rs-number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RevenueEventsRevenueSchedulesRsNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-events']['revenue-schedules'][':rs-number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueEventsRevenueSchedulesRsNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-events']['revenue-schedules'][':rs-number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RevenueEventsEventNumberKey(
  args: InferRequestType<(typeof client.v1)['revenue-events'][':event-number']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-events/:event-number', keyArgs] as const
}

export function useGetV1RevenueEventsEventNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['revenue-events'][':event-number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['revenue-events'][':event-number']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueEventsEventNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['revenue-events'][':event-number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['revenue-events'][':event-number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RevenueEventsEventNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['revenue-events'][':event-number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['revenue-events'][':event-number']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueEventsEventNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['revenue-events'][':event-number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['revenue-events'][':event-number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1RevenueItemsChargeRevenueSummariesCrsNumberKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['charge-revenue-summaries'][':crs-number']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-items/charge-revenue-summaries/:crs-number', keyArgs] as const
}

export function useGetV1RevenueItemsChargeRevenueSummariesCrsNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['charge-revenue-summaries'][':crs-number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueItemsChargeRevenueSummariesCrsNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-items']['charge-revenue-summaries'][':crs-number'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RevenueItemsChargeRevenueSummariesCrsNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['charge-revenue-summaries'][':crs-number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueItemsChargeRevenueSummariesCrsNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-items']['charge-revenue-summaries'][':crs-number'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RevenueItemsRevenueEventsEventNumberKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-items/revenue-events/:event-number', keyArgs] as const
}

export function useGetV1RevenueItemsRevenueEventsEventNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueItemsRevenueEventsEventNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-items']['revenue-events'][':event-number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RevenueItemsRevenueEventsEventNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueItemsRevenueEventsEventNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-items']['revenue-events'][':event-number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1RevenueItemsRevenueEventsEventNumberKey() {
  return ['v1', '/v1/revenue-items/revenue-events/:event-number', 'PUT'] as const
}

export function usePutV1RevenueItemsRevenueEventsEventNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RevenueItemsRevenueEventsEventNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['revenue-items']['revenue-events'][':event-number'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1RevenueItemsRevenueSchedulesRsNumberKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-items/revenue-schedules/:rs-number', keyArgs] as const
}

export function useGetV1RevenueItemsRevenueSchedulesRsNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueItemsRevenueSchedulesRsNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-items']['revenue-schedules'][':rs-number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RevenueItemsRevenueSchedulesRsNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueItemsRevenueSchedulesRsNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-items']['revenue-schedules'][':rs-number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1RevenueItemsRevenueSchedulesRsNumberKey() {
  return ['v1', '/v1/revenue-items/revenue-schedules/:rs-number', 'PUT'] as const
}

export function usePutV1RevenueItemsRevenueSchedulesRsNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RevenueItemsRevenueSchedulesRsNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['revenue-items']['revenue-schedules'][':rs-number'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1RevenueRecognitionRulesProductChargesChargeKeyKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-recognition-rules']['product-charges'][':charge-key']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-recognition-rules/product-charges/:charge-key', keyArgs] as const
}

export function useGetV1RevenueRecognitionRulesProductChargesChargeKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-recognition-rules']['product-charges'][':charge-key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueRecognitionRulesProductChargesChargeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-recognition-rules']['product-charges'][':charge-key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RevenueRecognitionRulesProductChargesChargeKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-recognition-rules']['product-charges'][':charge-key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueRecognitionRulesProductChargesChargeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-recognition-rules']['product-charges'][':charge-key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RevenueRecognitionRulesSubscriptionChargesChargeKeyKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-recognition-rules']['subscription-charges'][':charge-key']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-recognition-rules/subscription-charges/:charge-key', keyArgs] as const
}

export function useGetV1RevenueRecognitionRulesSubscriptionChargesChargeKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-recognition-rules']['subscription-charges'][':charge-key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueRecognitionRulesSubscriptionChargesChargeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-recognition-rules']['subscription-charges'][':charge-key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RevenueRecognitionRulesSubscriptionChargesChargeKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['revenue-recognition-rules']['subscription-charges'][':charge-key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueRecognitionRulesSubscriptionChargesChargeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-recognition-rules']['subscription-charges'][':charge-key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RevenueSchedulesCreditMemoItemsCmiIdKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-schedules/credit-memo-items/:cmi-id', keyArgs] as const
}

export function useGetV1RevenueSchedulesCreditMemoItemsCmiId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueSchedulesCreditMemoItemsCmiIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-schedules']['credit-memo-items'][':cmi-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RevenueSchedulesCreditMemoItemsCmiId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueSchedulesCreditMemoItemsCmiIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-schedules']['credit-memo-items'][':cmi-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1RevenueSchedulesCreditMemoItemsCmiIdKey() {
  return ['v1', '/v1/revenue-schedules/credit-memo-items/:cmi-id', 'POST'] as const
}

export function usePostV1RevenueSchedulesCreditMemoItemsCmiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RevenueSchedulesCreditMemoItemsCmiIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['revenue-schedules']['credit-memo-items'][':cmi-id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRangeKey() {
  return [
    'v1',
    '/v1/revenue-schedules/credit-memo-items/:cmi-id/distribute-revenue-with-date-range',
    'POST',
  ] as const
}

export function usePostV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRange<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['distribute-revenue-with-date-range']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['distribute-revenue-with-date-range']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['revenue-schedules']['credit-memo-items'][':cmi-id'][
            'distribute-revenue-with-date-range'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1RevenueSchedulesDebitMemoItemsDmiIdKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-schedules/debit-memo-items/:dmi-id', keyArgs] as const
}

export function useGetV1RevenueSchedulesDebitMemoItemsDmiId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueSchedulesDebitMemoItemsDmiIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-schedules']['debit-memo-items'][':dmi-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RevenueSchedulesDebitMemoItemsDmiId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueSchedulesDebitMemoItemsDmiIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-schedules']['debit-memo-items'][':dmi-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1RevenueSchedulesDebitMemoItemsDmiIdKey() {
  return ['v1', '/v1/revenue-schedules/debit-memo-items/:dmi-id', 'POST'] as const
}

export function usePostV1RevenueSchedulesDebitMemoItemsDmiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RevenueSchedulesDebitMemoItemsDmiIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['revenue-schedules']['debit-memo-items'][':dmi-id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRangeKey() {
  return [
    'v1',
    '/v1/revenue-schedules/debit-memo-items/:dmi-id/distribute-revenue-with-date-range',
    'POST',
  ] as const
}

export function usePostV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRange<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['distribute-revenue-with-date-range']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['distribute-revenue-with-date-range']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['revenue-schedules']['debit-memo-items'][':dmi-id'][
            'distribute-revenue-with-date-range'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyKey(
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

export function useGetV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyKey() {
  return [
    'v1',
    '/v1/revenue-schedules/invoice-item-adjustments/:invoice-item-adj-key',
    'POST',
  ] as const
}

export function usePostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRangeKey() {
  return [
    'v1',
    '/v1/revenue-schedules/invoice-item-adjustments/:invoice-item-adj-key/distribute-revenue-with-date-range',
    'POST',
  ] as const
}

export function usePostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRange<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['distribute-revenue-with-date-range']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['distribute-revenue-with-date-range']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key'][
            'distribute-revenue-with-date-range'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1RevenueSchedulesInvoiceItemsInvoiceItemIdKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-schedules/invoice-items/:invoice-item-id', keyArgs] as const
}

export function useGetV1RevenueSchedulesInvoiceItemsInvoiceItemId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueSchedulesInvoiceItemsInvoiceItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-schedules']['invoice-items'][':invoice-item-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RevenueSchedulesInvoiceItemsInvoiceItemId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueSchedulesInvoiceItemsInvoiceItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-schedules']['invoice-items'][':invoice-item-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1RevenueSchedulesInvoiceItemsInvoiceItemIdKey() {
  return ['v1', '/v1/revenue-schedules/invoice-items/:invoice-item-id', 'POST'] as const
}

export function usePostV1RevenueSchedulesInvoiceItemsInvoiceItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RevenueSchedulesInvoiceItemsInvoiceItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['revenue-schedules']['invoice-items'][':invoice-item-id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRangeKey() {
  return [
    'v1',
    '/v1/revenue-schedules/invoice-items/:invoice-item-id/distribute-revenue-with-date-range',
    'POST',
  ] as const
}

export function usePostV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRange<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['distribute-revenue-with-date-range']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['distribute-revenue-with-date-range']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['revenue-schedules']['invoice-items'][':invoice-item-id'][
            'distribute-revenue-with-date-range'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1RevenueSchedulesProductChargesChargeKeyAccountKeyKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['product-charges'][':charge-key'][':account-key']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-schedules/product-charges/:charge-key/:account-key', keyArgs] as const
}

export function useGetV1RevenueSchedulesProductChargesChargeKeyAccountKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['product-charges'][':charge-key'][':account-key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueSchedulesProductChargesChargeKeyAccountKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-schedules']['product-charges'][':charge-key'][':account-key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RevenueSchedulesProductChargesChargeKeyAccountKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['product-charges'][':charge-key'][':account-key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueSchedulesProductChargesChargeKeyAccountKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-schedules']['product-charges'][':charge-key'][':account-key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RevenueSchedulesSubscriptionChargesChargeKeyKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-schedules/subscription-charges/:charge-key', keyArgs] as const
}

export function useGetV1RevenueSchedulesSubscriptionChargesChargeKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueSchedulesSubscriptionChargesChargeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-schedules']['subscription-charges'][':charge-key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RevenueSchedulesSubscriptionChargesChargeKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueSchedulesSubscriptionChargesChargeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['revenue-schedules']['subscription-charges'][':charge-key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1RevenueSchedulesSubscriptionChargesChargeKeyKey() {
  return ['v1', '/v1/revenue-schedules/subscription-charges/:charge-key', 'POST'] as const
}

export function usePostV1RevenueSchedulesSubscriptionChargesChargeKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RevenueSchedulesSubscriptionChargesChargeKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['revenue-schedules']['subscription-charges'][':charge-key'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1RevenueSchedulesRsNumberKey(
  args: InferRequestType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/revenue-schedules/:rs-number', keyArgs] as const
}

export function useGetV1RevenueSchedulesRsNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueSchedulesRsNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['revenue-schedules'][':rs-number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RevenueSchedulesRsNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RevenueSchedulesRsNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['revenue-schedules'][':rs-number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1RevenueSchedulesRsNumberKey() {
  return ['v1', '/v1/revenue-schedules/:rs-number', 'DELETE'] as const
}

export function useDeleteV1RevenueSchedulesRsNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['revenue-schedules'][':rs-number']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['revenue-schedules'][':rs-number']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1RevenueSchedulesRsNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['revenue-schedules'][':rs-number']['$delete']>
        },
      ) => parseResponse(client.v1['revenue-schedules'][':rs-number'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1RevenueSchedulesRsNumberBasicInformationKey() {
  return ['v1', '/v1/revenue-schedules/:rs-number/basic-information', 'PUT'] as const
}

export function usePutV1RevenueSchedulesRsNumberBasicInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['revenue-schedules'][':rs-number']['basic-information']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RevenueSchedulesRsNumberBasicInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['revenue-schedules'][':rs-number']['basic-information']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['revenue-schedules'][':rs-number']['basic-information'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriodsKey() {
  return [
    'v1',
    '/v1/revenue-schedules/:rs-number/distribute-revenue-across-accounting-periods',
    'PUT',
  ] as const
}

export function usePutV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriods<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-across-accounting-periods']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-across-accounting-periods']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['revenue-schedules'][':rs-number'][
            'distribute-revenue-across-accounting-periods'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDateKey() {
  return [
    'v1',
    '/v1/revenue-schedules/:rs-number/distribute-revenue-on-specific-date',
    'PUT',
  ] as const
}

export function usePutV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-on-specific-date']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-on-specific-date']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['revenue-schedules'][':rs-number']['distribute-revenue-on-specific-date'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1RevenueSchedulesRsNumberDistributeRevenueWithDateRangeKey() {
  return [
    'v1',
    '/v1/revenue-schedules/:rs-number/distribute-revenue-with-date-range',
    'PUT',
  ] as const
}

export function usePutV1RevenueSchedulesRsNumberDistributeRevenueWithDateRange<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-with-date-range']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RevenueSchedulesRsNumberDistributeRevenueWithDateRangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-with-date-range']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['revenue-schedules'][':rs-number']['distribute-revenue-with-date-range'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1RevproAccountingCodesKey() {
  return ['v1', '/v1/revpro-accounting-codes', 'PUT'] as const
}

export function usePutV1RevproAccountingCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['revpro-accounting-codes']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['revpro-accounting-codes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RevproAccountingCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['revpro-accounting-codes']['$put']> },
      ) => parseResponse(client.v1['revpro-accounting-codes'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RsaSignaturesKey() {
  return ['v1', '/v1/rsa-signatures', 'POST'] as const
}

export function usePostV1RsaSignatures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['rsa-signatures']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['rsa-signatures']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RsaSignaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['rsa-signatures']['$post']> },
      ) => parseResponse(client.v1['rsa-signatures'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RsaSignaturesDecryptKey() {
  return ['v1', '/v1/rsa-signatures/decrypt', 'POST'] as const
}

export function usePostV1RsaSignaturesDecrypt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['rsa-signatures']['decrypt']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['rsa-signatures']['decrypt']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RsaSignaturesDecryptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['rsa-signatures']['decrypt']['$post']> },
      ) => parseResponse(client.v1['rsa-signatures'].decrypt.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SequenceSetsKey(
  args: InferRequestType<(typeof client.v1)['sequence-sets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/sequence-sets', keyArgs] as const
}

export function useGetV1SequenceSets<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sequence-sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SequenceSetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['sequence-sets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SequenceSets<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sequence-sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SequenceSetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['sequence-sets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SequenceSetsKey() {
  return ['v1', '/v1/sequence-sets', 'POST'] as const
}

export function usePostV1SequenceSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sequence-sets']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['sequence-sets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SequenceSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['sequence-sets']['$post']> },
      ) => parseResponse(client.v1['sequence-sets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SequenceSetsIdKey(
  args: InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/sequence-sets/:id', keyArgs] as const
}

export function useGetV1SequenceSetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sequence-sets'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SequenceSetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sequence-sets'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['sequence-sets'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SequenceSetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sequence-sets'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SequenceSetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sequence-sets'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['sequence-sets'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1SequenceSetsIdKey() {
  return ['v1', '/v1/sequence-sets/:id', 'PUT'] as const
}

export function usePutV1SequenceSetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sequence-sets'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SequenceSetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$put']> },
      ) => parseResponse(client.v1['sequence-sets'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SequenceSetsIdKey() {
  return ['v1', '/v1/sequence-sets/:id', 'DELETE'] as const
}

export function useDeleteV1SequenceSetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sequence-sets'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SequenceSetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$delete']> },
      ) => parseResponse(client.v1['sequence-sets'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SettingsFinanceRevenueAutomationStartDateKey(
  args: InferRequestType<
    (typeof client.v1.settings.finance)['revenue-automation-start-date']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/settings/finance/revenue-automation-start-date', keyArgs] as const
}

export function useGetV1SettingsFinanceRevenueAutomationStartDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.settings.finance)['revenue-automation-start-date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SettingsFinanceRevenueAutomationStartDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.settings.finance['revenue-automation-start-date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SettingsFinanceRevenueAutomationStartDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.settings.finance)['revenue-automation-start-date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SettingsFinanceRevenueAutomationStartDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.settings.finance['revenue-automation-start-date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1SubscriptionsKey() {
  return ['v1', '/v1/subscriptions', 'POST'] as const
}

export function usePostV1Subscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.subscriptions.$post> }) =>
        parseResponse(client.v1.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SubscriptionsAccountsAccountKeyKey(
  args: InferRequestType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/subscriptions/accounts/:account-key', keyArgs] as const
}

export function useGetV1SubscriptionsAccountsAccountKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SubscriptionsAccountsAccountKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.subscriptions.accounts[':account-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SubscriptionsAccountsAccountKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SubscriptionsAccountsAccountKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.subscriptions.accounts[':account-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SubscriptionsPreviewKey() {
  return ['v1', '/v1/subscriptions/preview', 'POST'] as const
}

export function usePostV1SubscriptionsPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.preview.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.subscriptions.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionsPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.subscriptions.preview.$post> },
      ) => parseResponse(client.v1.subscriptions.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SubscriptionsSubscriptionKeyKey(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/subscriptions/:subscription-key', keyArgs] as const
}

export function useGetV1SubscriptionsSubscriptionKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SubscriptionsSubscriptionKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.subscriptions[':subscription-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SubscriptionsSubscriptionKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SubscriptionsSubscriptionKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.subscriptions[':subscription-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1SubscriptionsSubscriptionKeyKey() {
  return ['v1', '/v1/subscriptions/:subscription-key', 'PUT'] as const
}

export function usePutV1SubscriptionsSubscriptionKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscription-key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SubscriptionsSubscriptionKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['$put']> },
      ) => parseResponse(client.v1.subscriptions[':subscription-key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1SubscriptionsSubscriptionKeyCancelKey() {
  return ['v1', '/v1/subscriptions/:subscription-key/cancel', 'PUT'] as const
}

export function usePutV1SubscriptionsSubscriptionKeyCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SubscriptionsSubscriptionKeyCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.subscriptions)[':subscription-key']['cancel']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.subscriptions[':subscription-key'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1SubscriptionsSubscriptionKeyRenewKey() {
  return ['v1', '/v1/subscriptions/:subscription-key/renew', 'PUT'] as const
}

export function usePutV1SubscriptionsSubscriptionKeyRenew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['renew']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SubscriptionsSubscriptionKeyRenewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.subscriptions)[':subscription-key']['renew']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.subscriptions[':subscription-key'].renew.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1SubscriptionsSubscriptionKeyResumeKey() {
  return ['v1', '/v1/subscriptions/:subscription-key/resume', 'PUT'] as const
}

export function usePutV1SubscriptionsSubscriptionKeyResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['resume']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SubscriptionsSubscriptionKeyResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.subscriptions)[':subscription-key']['resume']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.subscriptions[':subscription-key'].resume.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1SubscriptionsSubscriptionKeySuspendKey() {
  return ['v1', '/v1/subscriptions/:subscription-key/suspend', 'PUT'] as const
}

export function usePutV1SubscriptionsSubscriptionKeySuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['suspend']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SubscriptionsSubscriptionKeySuspendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.subscriptions)[':subscription-key']['suspend']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.subscriptions[':subscription-key'].suspend.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SubscriptionsSubscriptionKeyVersionsVersionKey(
  args: InferRequestType<
    (typeof client.v1.subscriptions)[':subscription-key']['versions'][':version']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/subscriptions/:subscription-key/versions/:version', keyArgs] as const
}

export function useGetV1SubscriptionsSubscriptionKeyVersionsVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.subscriptions)[':subscription-key']['versions'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SubscriptionsSubscriptionKeyVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.subscriptions[':subscription-key'].versions[':version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SubscriptionsSubscriptionKeyVersionsVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.subscriptions)[':subscription-key']['versions'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SubscriptionsSubscriptionKeyVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.subscriptions[':subscription-key'].versions[':version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1SubscriptionsSubscriptionKeyRampMetricsKey(
  args: InferRequestType<
    (typeof client.v1.subscriptions)[':subscriptionKey']['ramp-metrics']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/subscriptions/:subscriptionKey/ramp-metrics', keyArgs] as const
}

export function useGetV1SubscriptionsSubscriptionKeyRampMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.subscriptions)[':subscriptionKey']['ramp-metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SubscriptionsSubscriptionKeyRampMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.subscriptions[':subscriptionKey']['ramp-metrics'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SubscriptionsSubscriptionKeyRampMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.subscriptions)[':subscriptionKey']['ramp-metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SubscriptionsSubscriptionKeyRampMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.subscriptions[':subscriptionKey']['ramp-metrics'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1SubscriptionsSubscriptionKeyRampsKey(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/subscriptions/:subscriptionKey/ramps', keyArgs] as const
}

export function useGetV1SubscriptionsSubscriptionKeyRamps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SubscriptionsSubscriptionKeyRampsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.subscriptions[':subscriptionKey'].ramps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SubscriptionsSubscriptionKeyRamps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SubscriptionsSubscriptionKeyRampsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.subscriptions[':subscriptionKey'].ramps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1SubscriptionsSubscriptionNumberCustomFieldsKey() {
  return ['v1', '/v1/subscriptions/:subscriptionNumber/customFields', 'PUT'] as const
}

export function usePutV1SubscriptionsSubscriptionNumberCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.subscriptions)[':subscriptionNumber']['customFields']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SubscriptionsSubscriptionNumberCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.subscriptions)[':subscriptionNumber']['customFields']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.subscriptions[':subscriptionNumber'].customFields.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1SubscriptionsSubscriptionNumberVersionsVersionCustomFieldsKey() {
  return [
    'v1',
    '/v1/subscriptions/:subscriptionNumber/versions/:version/customFields',
    'PUT',
  ] as const
}

export function usePutV1SubscriptionsSubscriptionNumberVersionsVersionCustomFields<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.subscriptions)[':subscriptionNumber']['versions'][':version']['customFields']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV1SubscriptionsSubscriptionNumberVersionsVersionCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.subscriptions)[':subscriptionNumber']['versions'][':version']['customFields']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.subscriptions[':subscriptionNumber'].versions[':version'].customFields.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TaxationitemsIdKey(
  args: InferRequestType<(typeof client.v1.taxationitems)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/taxationitems/:id', keyArgs] as const
}

export function useGetV1TaxationitemsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.taxationitems)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TaxationitemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.taxationitems[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TaxationitemsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.taxationitems)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TaxationitemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.taxationitems[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1TaxationitemsIdKey() {
  return ['v1', '/v1/taxationitems/:id', 'PUT'] as const
}

export function usePutV1TaxationitemsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.taxationitems)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TaxationitemsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.taxationitems)[':id']['$put']> },
      ) => parseResponse(client.v1.taxationitems[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TaxationitemsIdKey() {
  return ['v1', '/v1/taxationitems/:id', 'DELETE'] as const
}

export function useDeleteV1TaxationitemsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.taxationitems)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.taxationitems)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TaxationitemsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.taxationitems)[':id']['$delete']> },
      ) => parseResponse(client.v1.taxationitems[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TransactionsInvoicesAccountsAccountKeyKey(
  args: InferRequestType<(typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/transactions/invoices/accounts/:account-key', keyArgs] as const
}

export function useGetV1TransactionsInvoicesAccountsAccountKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TransactionsInvoicesAccountsAccountKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.transactions.invoices.accounts[':account-key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransactionsInvoicesAccountsAccountKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TransactionsInvoicesAccountsAccountKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.transactions.invoices.accounts[':account-key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1TransactionsPaymentsAccountsAccountKeyKey(
  args: InferRequestType<(typeof client.v1.transactions.payments.accounts)[':account-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/transactions/payments/accounts/:account-key', keyArgs] as const
}

export function useGetV1TransactionsPaymentsAccountsAccountKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transactions.payments.accounts)[':account-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transactions.payments.accounts)[':account-key']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TransactionsPaymentsAccountsAccountKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transactions.payments.accounts)[':account-key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.transactions.payments.accounts[':account-key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransactionsPaymentsAccountsAccountKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transactions.payments.accounts)[':account-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transactions.payments.accounts)[':account-key']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TransactionsPaymentsAccountsAccountKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transactions.payments.accounts)[':account-key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.transactions.payments.accounts[':account-key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1UsageKey() {
  return ['v1', '/v1/usage', 'POST'] as const
}

export function usePostV1Usage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.usage.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.usage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.usage.$post> }) =>
        parseResponse(client.v1.usage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UsageAccountsAccountKeyKey(
  args: InferRequestType<(typeof client.v1.usage.accounts)[':account-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/usage/accounts/:account-key', keyArgs] as const
}

export function useGetV1UsageAccountsAccountKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.usage.accounts)[':account-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.usage.accounts)[':account-key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UsageAccountsAccountKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.usage.accounts)[':account-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.usage.accounts[':account-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsageAccountsAccountKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.usage.accounts)[':account-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.usage.accounts)[':account-key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UsageAccountsAccountKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.usage.accounts)[':account-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.usage.accounts[':account-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1UsersUsernameAcceptAccessKey() {
  return ['v1', '/v1/users/:username/accept-access', 'PUT'] as const
}

export function usePutV1UsersUsernameAcceptAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users)[':username']['accept-access']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':username']['accept-access']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUsernameAcceptAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.users)[':username']['accept-access']['$put']>
        },
      ) => parseResponse(client.v1.users[':username']['accept-access'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UsersUsernameAccessibleEntitiesKey(
  args: InferRequestType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/users/:username/accessible-entities', keyArgs] as const
}

export function useGetV1UsersUsernameAccessibleEntities<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UsersUsernameAccessibleEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.users[':username']['accessible-entities'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersUsernameAccessibleEntities<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UsersUsernameAccessibleEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.users[':username']['accessible-entities'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1UsersUsernameDenyAccessKey() {
  return ['v1', '/v1/users/:username/deny-access', 'PUT'] as const
}

export function usePutV1UsersUsernameDenyAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users)[':username']['deny-access']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':username']['deny-access']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUsernameDenyAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.users)[':username']['deny-access']['$put']> },
      ) => parseResponse(client.v1.users[':username']['deny-access'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1UsersUsernameRequestAccessKey() {
  return ['v1', '/v1/users/:username/request-access', 'PUT'] as const
}

export function usePutV1UsersUsernameRequestAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users)[':username']['request-access']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':username']['request-access']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUsernameRequestAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.users)[':username']['request-access']['$put']>
        },
      ) => parseResponse(client.v1.users[':username']['request-access'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkflowsKey(args: InferRequestType<typeof client.workflows.$get>) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows', keyArgs] as const
}

export function useGetWorkflows<TError = unknown>(
  args: InferRequestType<typeof client.workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkflowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflows<TError = unknown>(
  args: InferRequestType<typeof client.workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkflowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkflowsImportKey() {
  return ['workflows', '/workflows/import', 'POST'] as const
}

export function usePostWorkflowsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.workflows.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkflowsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.workflows.import.$post> }) =>
        parseResponse(client.workflows.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkflowsMetricsJsonKey(
  args: InferRequestType<(typeof client.workflows)['metrics.json']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows/metrics.json', keyArgs] as const
}

export function useGetWorkflowsMetricsJson<TError = unknown>(
  args: InferRequestType<(typeof client.workflows)['metrics.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)['metrics.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsMetricsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)['metrics.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows['metrics.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsMetricsJson<TError = unknown>(
  args: InferRequestType<(typeof client.workflows)['metrics.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)['metrics.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsMetricsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)['metrics.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows['metrics.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkflowsTasksKey(
  args: InferRequestType<typeof client.workflows.tasks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows/tasks', keyArgs] as const
}

export function useGetWorkflowsTasks<TError = unknown>(
  args: InferRequestType<typeof client.workflows.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.tasks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkflowsTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.tasks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows.tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsTasks<TError = unknown>(
  args: InferRequestType<typeof client.workflows.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.tasks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkflowsTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.tasks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows.tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWorkflowsTasksBatchUpdateKey() {
  return ['workflows', '/workflows/tasks/batch_update', 'PUT'] as const
}

export function usePutWorkflowsTasksBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.workflows.tasks.batch_update.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.workflows.tasks.batch_update.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWorkflowsTasksBatchUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.workflows.tasks.batch_update.$put> },
      ) => parseResponse(client.workflows.tasks.batch_update.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkflowsTasksTaskIdKey(
  args: InferRequestType<(typeof client.workflows.tasks)[':task_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows/tasks/:task_id', keyArgs] as const
}

export function useGetWorkflowsTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.workflows.tasks)[':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows.tasks)[':task_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows.tasks)[':task_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows.tasks[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.workflows.tasks)[':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows.tasks)[':task_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows.tasks)[':task_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows.tasks[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkflowsTasksTaskIdRerunKey() {
  return ['workflows', '/workflows/tasks/:task_id/rerun', 'POST'] as const
}

export function usePostWorkflowsTasksTaskIdRerun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows.tasks)[':task_id']['rerun']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workflows.tasks)[':task_id']['rerun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkflowsTasksTaskIdRerunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.workflows.tasks)[':task_id']['rerun']['$post']> },
      ) => parseResponse(client.workflows.tasks[':task_id'].rerun.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkflowsWorkflowIdKey(
  args: InferRequestType<(typeof client.workflows)[':workflow_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows/:workflow_id', keyArgs] as const
}

export function useGetWorkflowsWorkflowId<TError = unknown>(
  args: InferRequestType<(typeof client.workflows)[':workflow_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsWorkflowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows[':workflow_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsWorkflowId<TError = unknown>(
  args: InferRequestType<(typeof client.workflows)[':workflow_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsWorkflowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows[':workflow_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWorkflowsWorkflowIdKey() {
  return ['workflows', '/workflows/:workflow_id', 'DELETE'] as const
}

export function useDeleteWorkflowsWorkflowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workflows)[':workflow_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWorkflowsWorkflowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.workflows)[':workflow_id']['$delete']> },
      ) => parseResponse(client.workflows[':workflow_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWorkflowsWorkflowIdKey() {
  return ['workflows', '/workflows/:workflow_id', 'PATCH'] as const
}

export function usePatchWorkflowsWorkflowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workflows)[':workflow_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWorkflowsWorkflowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.workflows)[':workflow_id']['$patch']> },
      ) => parseResponse(client.workflows[':workflow_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkflowsWorkflowIdExportKey(
  args: InferRequestType<(typeof client.workflows)[':workflow_id']['export']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows', '/workflows/:workflow_id/export', keyArgs] as const
}

export function useGetWorkflowsWorkflowIdExport<TError = unknown>(
  args: InferRequestType<(typeof client.workflows)[':workflow_id']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['export']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsWorkflowIdExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows[':workflow_id'].export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsWorkflowIdExport<TError = unknown>(
  args: InferRequestType<(typeof client.workflows)[':workflow_id']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['export']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsWorkflowIdExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows[':workflow_id'].export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkflowsWorkflowIdRunKey() {
  return ['workflows', '/workflows/:workflow_id/run', 'POST'] as const
}

export function usePostWorkflowsWorkflowIdRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['run']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workflows)[':workflow_id']['run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkflowsWorkflowIdRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.workflows)[':workflow_id']['run']['$post']> },
      ) => parseResponse(client.workflows[':workflow_id'].run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
