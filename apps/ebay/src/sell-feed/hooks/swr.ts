import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCustomerServiceMetricTaskKey() {
  return ['customer_service_metric_task'] as const
}

export function getInventoryTaskKey() {
  return ['inventory_task'] as const
}

export function getOrderTaskKey() {
  return ['order_task'] as const
}

export function getScheduleKey() {
  return ['schedule'] as const
}

export function getScheduleTemplateKey() {
  return ['schedule_template'] as const
}

export function getTaskKey() {
  return ['task'] as const
}

export function getGetCustomerServiceMetricTaskKey(
  args: InferRequestType<typeof client.customer_service_metric_task.$get>,
) {
  return ['customer_service_metric_task', '/customer_service_metric_task', args] as const
}

export function useGetCustomerServiceMetricTask<TError = unknown>(
  args: InferRequestType<typeof client.customer_service_metric_task.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.customer_service_metric_task.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomerServiceMetricTaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.customer_service_metric_task.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customer_service_metric_task.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomerServiceMetricTask<TError = unknown>(
  args: InferRequestType<typeof client.customer_service_metric_task.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.customer_service_metric_task.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomerServiceMetricTaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.customer_service_metric_task.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customer_service_metric_task.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomerServiceMetricTaskKey() {
  return ['customer_service_metric_task', '/customer_service_metric_task', 'POST'] as const
}

export function usePostCustomerServiceMetricTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.customer_service_metric_task.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.customer_service_metric_task.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomerServiceMetricTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.customer_service_metric_task.$post> },
      ) => parseResponse(client.customer_service_metric_task.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomerServiceMetricTaskTaskIdKey(
  args: InferRequestType<(typeof client.customer_service_metric_task)[':task_id']['$get']>,
) {
  return ['customer_service_metric_task', '/customer_service_metric_task/:task_id', args] as const
}

export function useGetCustomerServiceMetricTaskTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.customer_service_metric_task)[':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customer_service_metric_task)[':task_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomerServiceMetricTaskTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customer_service_metric_task)[':task_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customer_service_metric_task[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomerServiceMetricTaskTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.customer_service_metric_task)[':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customer_service_metric_task)[':task_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomerServiceMetricTaskTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customer_service_metric_task)[':task_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customer_service_metric_task[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInventoryTaskKey(args: InferRequestType<typeof client.inventory_task.$get>) {
  return ['inventory_task', '/inventory_task', args] as const
}

export function useGetInventoryTask<TError = unknown>(
  args: InferRequestType<typeof client.inventory_task.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_task.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInventoryTaskKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_task.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inventory_task.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInventoryTask<TError = unknown>(
  args: InferRequestType<typeof client.inventory_task.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_task.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInventoryTaskKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_task.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inventory_task.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInventoryTaskKey() {
  return ['inventory_task', '/inventory_task', 'POST'] as const
}

export function usePostInventoryTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_task.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.inventory_task.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoryTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.inventory_task.$post> }) =>
        parseResponse(client.inventory_task.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInventoryTaskTaskIdKey(
  args: InferRequestType<(typeof client.inventory_task)[':task_id']['$get']>,
) {
  return ['inventory_task', '/inventory_task/:task_id', args] as const
}

export function useGetInventoryTaskTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.inventory_task)[':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inventory_task)[':task_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInventoryTaskTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inventory_task)[':task_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inventory_task[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInventoryTaskTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.inventory_task)[':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inventory_task)[':task_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInventoryTaskTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inventory_task)[':task_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inventory_task[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrderTaskKey(args: InferRequestType<typeof client.order_task.$get>) {
  return ['order_task', '/order_task', args] as const
}

export function useGetOrderTask<TError = unknown>(
  args: InferRequestType<typeof client.order_task.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_task.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrderTaskKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_task.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.order_task.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderTask<TError = unknown>(
  args: InferRequestType<typeof client.order_task.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_task.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrderTaskKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_task.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.order_task.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrderTaskKey() {
  return ['order_task', '/order_task', 'POST'] as const
}

export function usePostOrderTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_task.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.order_task.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.order_task.$post> }) =>
        parseResponse(client.order_task.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrderTaskTaskIdKey(
  args: InferRequestType<(typeof client.order_task)[':task_id']['$get']>,
) {
  return ['order_task', '/order_task/:task_id', args] as const
}

export function useGetOrderTaskTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.order_task)[':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.order_task)[':task_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrderTaskTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.order_task)[':task_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.order_task[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderTaskTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.order_task)[':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.order_task)[':task_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrderTaskTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.order_task)[':task_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.order_task[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScheduleKey(args: InferRequestType<typeof client.schedule.$get>) {
  return ['schedule', '/schedule', args] as const
}

export function useGetSchedule<TError = unknown>(
  args: InferRequestType<typeof client.schedule.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScheduleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.schedule.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSchedule<TError = unknown>(
  args: InferRequestType<typeof client.schedule.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScheduleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.schedule.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostScheduleKey() {
  return ['schedule', '/schedule', 'POST'] as const
}

export function usePostSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.schedule.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.schedule.$post> }) =>
        parseResponse(client.schedule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScheduleScheduleIdKey(
  args: InferRequestType<(typeof client.schedule)[':schedule_id']['$get']>,
) {
  return ['schedule', '/schedule/:schedule_id', args] as const
}

export function useGetScheduleScheduleId<TError = unknown>(
  args: InferRequestType<(typeof client.schedule)[':schedule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetScheduleScheduleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedule[':schedule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScheduleScheduleId<TError = unknown>(
  args: InferRequestType<(typeof client.schedule)[':schedule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetScheduleScheduleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedule[':schedule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutScheduleScheduleIdKey() {
  return ['schedule', '/schedule/:schedule_id', 'PUT'] as const
}

export function usePutScheduleScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.schedule)[':schedule_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutScheduleScheduleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.schedule)[':schedule_id']['$put']> },
      ) => parseResponse(client.schedule[':schedule_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteScheduleScheduleIdKey() {
  return ['schedule', '/schedule/:schedule_id', 'DELETE'] as const
}

export function useDeleteScheduleScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.schedule)[':schedule_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScheduleScheduleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.schedule)[':schedule_id']['$delete']> },
      ) => parseResponse(client.schedule[':schedule_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScheduleScheduleIdDownloadResultFileKey(
  args: InferRequestType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>,
) {
  return ['schedule', '/schedule/:schedule_id/download_result_file', args] as const
}

export function useGetScheduleScheduleIdDownloadResultFile<TError = unknown>(
  args: InferRequestType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>
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
        ? getGetScheduleScheduleIdDownloadResultFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.schedule[':schedule_id'].download_result_file.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScheduleScheduleIdDownloadResultFile<TError = unknown>(
  args: InferRequestType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>
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
        ? getGetScheduleScheduleIdDownloadResultFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.schedule[':schedule_id'].download_result_file.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetScheduleTemplateKey(
  args: InferRequestType<typeof client.schedule_template.$get>,
) {
  return ['schedule_template', '/schedule_template', args] as const
}

export function useGetScheduleTemplate<TError = unknown>(
  args: InferRequestType<typeof client.schedule_template.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule_template.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetScheduleTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule_template.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedule_template.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScheduleTemplate<TError = unknown>(
  args: InferRequestType<typeof client.schedule_template.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule_template.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetScheduleTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule_template.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedule_template.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScheduleTemplateScheduleTemplateIdKey(
  args: InferRequestType<(typeof client.schedule_template)[':schedule_template_id']['$get']>,
) {
  return ['schedule_template', '/schedule_template/:schedule_template_id', args] as const
}

export function useGetScheduleTemplateScheduleTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.schedule_template)[':schedule_template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedule_template)[':schedule_template_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetScheduleTemplateScheduleTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedule_template)[':schedule_template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedule_template[':schedule_template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScheduleTemplateScheduleTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.schedule_template)[':schedule_template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedule_template)[':schedule_template_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetScheduleTemplateScheduleTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedule_template)[':schedule_template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedule_template[':schedule_template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaskKey(args: InferRequestType<typeof client.task.$get>) {
  return ['task', '/task', args] as const
}

export function useGetTask<TError = unknown>(
  args: InferRequestType<typeof client.task.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaskKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.task.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTask<TError = unknown>(
  args: InferRequestType<typeof client.task.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaskKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.task.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTaskKey() {
  return ['task', '/task', 'POST'] as const
}

export function usePostTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.task.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.task.$post> }) =>
        parseResponse(client.task.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaskTaskIdKey(
  args: InferRequestType<(typeof client.task)[':task_id']['$get']>,
) {
  return ['task', '/task/:task_id', args] as const
}

export function useGetTaskTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.task)[':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.task)[':task_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaskTaskIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.task)[':task_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.task)[':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.task)[':task_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaskTaskIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.task)[':task_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaskTaskIdDownloadInputFileKey(
  args: InferRequestType<(typeof client.task)[':task_id']['download_input_file']['$get']>,
) {
  return ['task', '/task/:task_id/download_input_file', args] as const
}

export function useGetTaskTaskIdDownloadInputFile<TError = unknown>(
  args: InferRequestType<(typeof client.task)[':task_id']['download_input_file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task)[':task_id']['download_input_file']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskTaskIdDownloadInputFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task)[':task_id']['download_input_file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.task[':task_id'].download_input_file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskTaskIdDownloadInputFile<TError = unknown>(
  args: InferRequestType<(typeof client.task)[':task_id']['download_input_file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task)[':task_id']['download_input_file']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskTaskIdDownloadInputFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task)[':task_id']['download_input_file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.task[':task_id'].download_input_file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaskTaskIdDownloadResultFileKey(
  args: InferRequestType<(typeof client.task)[':task_id']['download_result_file']['$get']>,
) {
  return ['task', '/task/:task_id/download_result_file', args] as const
}

export function useGetTaskTaskIdDownloadResultFile<TError = unknown>(
  args: InferRequestType<(typeof client.task)[':task_id']['download_result_file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task)[':task_id']['download_result_file']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskTaskIdDownloadResultFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task)[':task_id']['download_result_file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.task[':task_id'].download_result_file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskTaskIdDownloadResultFile<TError = unknown>(
  args: InferRequestType<(typeof client.task)[':task_id']['download_result_file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task)[':task_id']['download_result_file']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskTaskIdDownloadResultFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task)[':task_id']['download_result_file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.task[':task_id'].download_result_file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTaskTaskIdUploadFileKey() {
  return ['task', '/task/:task_id/upload_file', 'POST'] as const
}

export function usePostTaskTaskIdUploadFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task)[':task_id']['upload_file']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.task)[':task_id']['upload_file']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTaskTaskIdUploadFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.task)[':task_id']['upload_file']['$post']> },
      ) => parseResponse(client.task[':task_id'].upload_file.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
