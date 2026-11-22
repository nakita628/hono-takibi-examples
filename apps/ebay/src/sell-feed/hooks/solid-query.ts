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

export function getCustomerServiceMetricTaskQueryKey(
  args: InferRequestType<typeof client.customer_service_metric_task.$get>,
) {
  return ['customer_service_metric_task', '/customer_service_metric_task', args] as const
}

export function getCustomerServiceMetricTaskQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.customer_service_metric_task.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.customer_service_metric_task.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.customer_service_metric_task.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerServiceMetricTaskQueryKey>
  >({
    queryKey: getCustomerServiceMetricTaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customer_service_metric_task.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomerServiceMetricTask<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.customer_service_metric_task.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.customer_service_metric_task.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.customer_service_metric_task.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomerServiceMetricTaskQueryKey>
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
      ...getCustomerServiceMetricTaskQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCustomerServiceMetricTaskMutationKey() {
  return ['customer_service_metric_task', '/customer_service_metric_task', 'POST'] as const
}

export function getPostCustomerServiceMetricTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.customer_service_metric_task.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.customer_service_metric_task.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomerServiceMetricTaskMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.customer_service_metric_task.$post>) {
      return parseResponse(client.customer_service_metric_task.$post(args, options))
    },
  })
}

export function createPostCustomerServiceMetricTask<
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
                Awaited<ReturnType<typeof client.customer_service_metric_task.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.customer_service_metric_task.$post>,
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
    const mutationDefaults = getPostCustomerServiceMetricTaskMutationOptions<
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

export function getCustomerServiceMetricTaskTaskIdQueryKey(
  args: InferRequestType<(typeof client.customer_service_metric_task)[':task_id']['$get']>,
) {
  return ['customer_service_metric_task', '/customer_service_metric_task/:task_id', args] as const
}

export function getCustomerServiceMetricTaskTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customer_service_metric_task)[':task_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customer_service_metric_task)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customer_service_metric_task)[':task_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerServiceMetricTaskTaskIdQueryKey>
  >({
    queryKey: getCustomerServiceMetricTaskTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customer_service_metric_task[':task_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomerServiceMetricTaskTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customer_service_metric_task)[':task_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customer_service_metric_task)[':task_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customer_service_metric_task)[':task_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomerServiceMetricTaskTaskIdQueryKey>
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
      ...getCustomerServiceMetricTaskTaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInventoryTaskQueryKey(
  args: InferRequestType<typeof client.inventory_task.$get>,
) {
  return ['inventory_task', '/inventory_task', args] as const
}

export function getInventoryTaskQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_task.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.inventory_task.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_task.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInventoryTaskQueryKey>
  >({
    queryKey: getInventoryTaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inventory_task.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInventoryTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_task.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.inventory_task.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_task.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getInventoryTaskQueryKey>
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
    return { ...getInventoryTaskQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostInventoryTaskMutationKey() {
  return ['inventory_task', '/inventory_task', 'POST'] as const
}

export function getPostInventoryTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_task.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.inventory_task.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInventoryTaskMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.inventory_task.$post>) {
      return parseResponse(client.inventory_task.$post(args, options))
    },
  })
}

export function createPostInventoryTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.inventory_task.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.inventory_task.$post>,
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
    const mutationDefaults = getPostInventoryTaskMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInventoryTaskTaskIdQueryKey(
  args: InferRequestType<(typeof client.inventory_task)[':task_id']['$get']>,
) {
  return ['inventory_task', '/inventory_task/:task_id', args] as const
}

export function getInventoryTaskTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inventory_task)[':task_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inventory_task)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inventory_task)[':task_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInventoryTaskTaskIdQueryKey>
  >({
    queryKey: getInventoryTaskTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inventory_task[':task_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInventoryTaskTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inventory_task)[':task_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.inventory_task)[':task_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inventory_task)[':task_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInventoryTaskTaskIdQueryKey>
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
    return { ...getInventoryTaskTaskIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOrderTaskQueryKey(args: InferRequestType<typeof client.order_task.$get>) {
  return ['order_task', '/order_task', args] as const
}

export function getOrderTaskQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_task.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.order_task.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_task.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrderTaskQueryKey>
  >({
    queryKey: getOrderTaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.order_task.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrderTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_task.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.order_task.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_task.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOrderTaskQueryKey>
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
    return { ...getOrderTaskQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostOrderTaskMutationKey() {
  return ['order_task', '/order_task', 'POST'] as const
}

export function getPostOrderTaskMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_task.$post>>>>>,
    TError,
    InferRequestType<typeof client.order_task.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderTaskMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.order_task.$post>) {
      return parseResponse(client.order_task.$post(args, options))
    },
  })
}

export function createPostOrderTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_task.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.order_task.$post>,
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
    const mutationDefaults = getPostOrderTaskMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrderTaskTaskIdQueryKey(
  args: InferRequestType<(typeof client.order_task)[':task_id']['$get']>,
) {
  return ['order_task', '/order_task/:task_id', args] as const
}

export function getOrderTaskTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.order_task)[':task_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.order_task)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.order_task)[':task_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderTaskTaskIdQueryKey>
  >({
    queryKey: getOrderTaskTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.order_task[':task_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrderTaskTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.order_task)[':task_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.order_task)[':task_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.order_task)[':task_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrderTaskTaskIdQueryKey>
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
    return { ...getOrderTaskTaskIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getScheduleQueryKey(args: InferRequestType<typeof client.schedule.$get>) {
  return ['schedule', '/schedule', args] as const
}

export function getScheduleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.schedule.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScheduleQueryKey>
  >({
    queryKey: getScheduleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedule.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSchedule<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedule.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getScheduleQueryKey>
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
    return { ...getScheduleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostScheduleMutationKey() {
  return ['schedule', '/schedule', 'POST'] as const
}

export function getPostScheduleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$post>>>>>,
    TError,
    InferRequestType<typeof client.schedule.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScheduleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.schedule.$post>) {
      return parseResponse(client.schedule.$post(args, options))
    },
  })
}

export function createPostSchedule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.schedule.$post>,
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
    const mutationDefaults = getPostScheduleMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getScheduleScheduleIdQueryKey(
  args: InferRequestType<(typeof client.schedule)[':schedule_id']['$get']>,
) {
  return ['schedule', '/schedule/:schedule_id', args] as const
}

export function getScheduleScheduleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schedule)[':schedule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScheduleScheduleIdQueryKey>
  >({
    queryKey: getScheduleScheduleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedule[':schedule_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScheduleScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schedule)[':schedule_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getScheduleScheduleIdQueryKey>
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
    return { ...getScheduleScheduleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutScheduleScheduleIdMutationKey() {
  return ['schedule', '/schedule/:schedule_id', 'PUT'] as const
}

export function getPutScheduleScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.schedule)[':schedule_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutScheduleScheduleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.schedule)[':schedule_id']['$put']>) {
      return parseResponse(client.schedule[':schedule_id'].$put(args, options))
    },
  })
}

export function createPutScheduleScheduleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.schedule)[':schedule_id']['$put']>,
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
    const mutationDefaults = getPutScheduleScheduleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteScheduleScheduleIdMutationKey() {
  return ['schedule', '/schedule/:schedule_id', 'DELETE'] as const
}

export function getDeleteScheduleScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.schedule)[':schedule_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScheduleScheduleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.schedule)[':schedule_id']['$delete']>) {
      return parseResponse(client.schedule[':schedule_id'].$delete(args, options))
    },
  })
}

export function createDeleteScheduleScheduleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.schedule)[':schedule_id']['$delete']>,
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
    const mutationDefaults = getDeleteScheduleScheduleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getScheduleScheduleIdDownloadResultFileQueryKey(
  args: InferRequestType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>,
) {
  return ['schedule', '/schedule/:schedule_id/download_result_file', args] as const
}

export function getScheduleScheduleIdDownloadResultFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScheduleScheduleIdDownloadResultFileQueryKey>
  >({
    queryKey: getScheduleScheduleIdDownloadResultFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedule[':schedule_id'].download_result_file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScheduleScheduleIdDownloadResultFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.schedule)[':schedule_id']['download_result_file']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.schedule)[':schedule_id']['download_result_file']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getScheduleScheduleIdDownloadResultFileQueryKey>
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
      ...getScheduleScheduleIdDownloadResultFileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getScheduleTemplateQueryKey(
  args: InferRequestType<typeof client.schedule_template.$get>,
) {
  return ['schedule_template', '/schedule_template', args] as const
}

export function getScheduleTemplateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule_template.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.schedule_template.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule_template.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScheduleTemplateQueryKey>
  >({
    queryKey: getScheduleTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedule_template.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createScheduleTemplate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule_template.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedule_template.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.schedule_template.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getScheduleTemplateQueryKey>
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
    return { ...getScheduleTemplateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getScheduleTemplateScheduleTemplateIdQueryKey(
  args: InferRequestType<(typeof client.schedule_template)[':schedule_template_id']['$get']>,
) {
  return ['schedule_template', '/schedule_template/:schedule_template_id', args] as const
}

export function getScheduleTemplateScheduleTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schedule_template)[':schedule_template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schedule_template)[':schedule_template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schedule_template)[':schedule_template_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScheduleTemplateScheduleTemplateIdQueryKey>
  >({
    queryKey: getScheduleTemplateScheduleTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedule_template[':schedule_template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScheduleTemplateScheduleTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schedule_template)[':schedule_template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schedule_template)[':schedule_template_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.schedule_template)[':schedule_template_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getScheduleTemplateScheduleTemplateIdQueryKey>
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
      ...getScheduleTemplateScheduleTemplateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTaskQueryKey(args: InferRequestType<typeof client.task.$get>) {
  return ['task', '/task', args] as const
}

export function getTaskQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.task.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTaskQueryKey>
  >({
    queryKey: getTaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTask<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.task.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getTaskQueryKey>
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
    return { ...getTaskQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTaskMutationKey() {
  return ['task', '/task', 'POST'] as const
}

export function getPostTaskMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task.$post>>>>>,
    TError,
    InferRequestType<typeof client.task.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTaskMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.task.$post>) {
      return parseResponse(client.task.$post(args, options))
    },
  })
}

export function createPostTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task.$post>>>>>,
          TError,
          InferRequestType<typeof client.task.$post>,
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
    const mutationDefaults = getPostTaskMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTaskTaskIdQueryKey(
  args: InferRequestType<(typeof client.task)[':task_id']['$get']>,
) {
  return ['task', '/task/:task_id', args] as const
}

export function getTaskTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.task)[':task_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.task)[':task_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskTaskIdQueryKey>
  >({
    queryKey: getTaskTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task[':task_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTaskTaskId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.task)[':task_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.task)[':task_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.task)[':task_id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTaskTaskIdQueryKey>
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
    return { ...getTaskTaskIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTaskTaskIdDownloadInputFileQueryKey(
  args: InferRequestType<(typeof client.task)[':task_id']['download_input_file']['$get']>,
) {
  return ['task', '/task/:task_id/download_input_file', args] as const
}

export function getTaskTaskIdDownloadInputFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task)[':task_id']['download_input_file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task)[':task_id']['download_input_file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task)[':task_id']['download_input_file']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskTaskIdDownloadInputFileQueryKey>
  >({
    queryKey: getTaskTaskIdDownloadInputFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task[':task_id'].download_input_file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTaskTaskIdDownloadInputFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task)[':task_id']['download_input_file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.task)[':task_id']['download_input_file']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.task)[':task_id']['download_input_file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTaskTaskIdDownloadInputFileQueryKey>
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
      ...getTaskTaskIdDownloadInputFileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTaskTaskIdDownloadResultFileQueryKey(
  args: InferRequestType<(typeof client.task)[':task_id']['download_result_file']['$get']>,
) {
  return ['task', '/task/:task_id/download_result_file', args] as const
}

export function getTaskTaskIdDownloadResultFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task)[':task_id']['download_result_file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task)[':task_id']['download_result_file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task)[':task_id']['download_result_file']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskTaskIdDownloadResultFileQueryKey>
  >({
    queryKey: getTaskTaskIdDownloadResultFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task[':task_id'].download_result_file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTaskTaskIdDownloadResultFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task)[':task_id']['download_result_file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.task)[':task_id']['download_result_file']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.task)[':task_id']['download_result_file']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTaskTaskIdDownloadResultFileQueryKey>
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
      ...getTaskTaskIdDownloadResultFileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTaskTaskIdUploadFileMutationKey() {
  return ['task', '/task/:task_id/upload_file', 'POST'] as const
}

export function getPostTaskTaskIdUploadFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task)[':task_id']['upload_file']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.task)[':task_id']['upload_file']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTaskTaskIdUploadFileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.task)[':task_id']['upload_file']['$post']>,
    ) {
      return parseResponse(client.task[':task_id'].upload_file.$post(args, options))
    },
  })
}

export function createPostTaskTaskIdUploadFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.task)[':task_id']['upload_file']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.task)[':task_id']['upload_file']['$post']>,
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
    const mutationDefaults = getPostTaskTaskIdUploadFileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
