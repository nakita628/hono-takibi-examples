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
  args: MaybeRefOrGetter<InferRequestType<typeof client.customer_service_metric_task.$get>>,
) {
  return ['customer_service_metric_task', '/customer_service_metric_task', toValue(args)] as const
}

export function getCustomerServiceMetricTaskQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customer_service_metric_task.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomerServiceMetricTaskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customer_service_metric_task.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomerServiceMetricTask<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.customer_service_metric_task.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customer_service_metric_task.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.customer_service_metric_task.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.customer_service_metric_task.$get>>
              >
            >
          >,
          ReturnType<typeof getCustomerServiceMetricTaskQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.customer_service_metric_task.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerServiceMetricTaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomerServiceMetricTaskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customer_service_metric_task.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCustomerServiceMetricTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomerServiceMetricTaskMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCustomerServiceMetricTaskTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customer_service_metric_task)[':task_id']['$get']>
  >,
) {
  return [
    'customer_service_metric_task',
    '/customer_service_metric_task/:task_id',
    toValue(args),
  ] as const
}

export function getCustomerServiceMetricTaskTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customer_service_metric_task)[':task_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomerServiceMetricTaskTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customer_service_metric_task[':task_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomerServiceMetricTaskTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customer_service_metric_task)[':task_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customer_service_metric_task)[':task_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customer_service_metric_task)[':task_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCustomerServiceMetricTaskTaskIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomerServiceMetricTaskTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customer_service_metric_task[':task_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInventoryTaskQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inventory_task.$get>>,
) {
  return ['inventory_task', '/inventory_task', toValue(args)] as const
}

export function getInventoryTaskQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inventory_task.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInventoryTaskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inventory_task.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInventoryTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_task.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inventory_task.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_task.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_task.$get>>>>
          >,
          ReturnType<typeof getInventoryTaskQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory_task.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInventoryTaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInventoryTaskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inventory_task.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostInventoryTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.inventory_task.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.inventory_task.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInventoryTaskMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInventoryTaskTaskIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inventory_task)[':task_id']['$get']>>,
) {
  return ['inventory_task', '/inventory_task/:task_id', toValue(args)] as const
}

export function getInventoryTaskTaskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inventory_task)[':task_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInventoryTaskTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inventory_task[':task_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInventoryTaskTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inventory_task)[':task_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inventory_task)[':task_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inventory_task)[':task_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inventory_task)[':task_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInventoryTaskTaskIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInventoryTaskTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inventory_task[':task_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrderTaskQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.order_task.$get>>,
) {
  return ['order_task', '/order_task', toValue(args)] as const
}

export function getOrderTaskQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.order_task.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderTaskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.order_task.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrderTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_task.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.order_task.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_task.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_task.$get>>>>
          >,
          ReturnType<typeof getOrderTaskQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_task.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrderTaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderTaskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.order_task.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrderTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_task.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.order_task.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrderTaskMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrderTaskTaskIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.order_task)[':task_id']['$get']>>,
) {
  return ['order_task', '/order_task/:task_id', toValue(args)] as const
}

export function getOrderTaskTaskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.order_task)[':task_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderTaskTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.order_task[':task_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrderTaskTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.order_task)[':task_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.order_task)[':task_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.order_task)[':task_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.order_task)[':task_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrderTaskTaskIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.order_task)[':task_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderTaskTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderTaskTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.order_task[':task_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScheduleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedule.$get>>,
) {
  return ['schedule', '/schedule', toValue(args)] as const
}

export function getScheduleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedule.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScheduleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedule.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSchedule<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedule.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
          >,
          ReturnType<typeof getScheduleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScheduleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScheduleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedule.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSchedule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.schedule.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostScheduleMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getScheduleScheduleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schedule)[':schedule_id']['$get']>>,
) {
  return ['schedule', '/schedule/:schedule_id', toValue(args)] as const
}

export function getScheduleScheduleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schedule)[':schedule_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScheduleScheduleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedule[':schedule_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScheduleScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schedule)[':schedule_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getScheduleScheduleIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.schedule)[':schedule_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScheduleScheduleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScheduleScheduleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedule[':schedule_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutScheduleScheduleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutScheduleScheduleIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteScheduleScheduleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteScheduleScheduleIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getScheduleScheduleIdDownloadResultFileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>
  >,
) {
  return ['schedule', '/schedule/:schedule_id/download_result_file', toValue(args)] as const
}

export function getScheduleScheduleIdDownloadResultFileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScheduleScheduleIdDownloadResultFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedule[':schedule_id'].download_result_file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScheduleScheduleIdDownloadResultFile<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>
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
                    (typeof client.schedule)[':schedule_id']['download_result_file']['$get']
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
                    (typeof client.schedule)[':schedule_id']['download_result_file']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getScheduleScheduleIdDownloadResultFileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScheduleScheduleIdDownloadResultFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScheduleScheduleIdDownloadResultFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedule[':schedule_id'].download_result_file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScheduleTemplateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedule_template.$get>>,
) {
  return ['schedule_template', '/schedule_template', toValue(args)] as const
}

export function getScheduleTemplateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedule_template.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScheduleTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedule_template.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScheduleTemplate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule_template.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedule_template.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.schedule_template.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.schedule_template.$get>>>
            >
          >,
          ReturnType<typeof getScheduleTemplateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule_template.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScheduleTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScheduleTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedule_template.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScheduleTemplateScheduleTemplateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedule_template)[':schedule_template_id']['$get']>
  >,
) {
  return ['schedule_template', '/schedule_template/:schedule_template_id', toValue(args)] as const
}

export function getScheduleTemplateScheduleTemplateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedule_template)[':schedule_template_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScheduleTemplateScheduleTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedule_template[':schedule_template_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScheduleTemplateScheduleTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schedule_template)[':schedule_template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedule_template)[':schedule_template_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.schedule_template)[':schedule_template_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getScheduleTemplateScheduleTemplateIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScheduleTemplateScheduleTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedule_template[':schedule_template_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaskQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.task.$get>>) {
  return ['task', '/task', toValue(args)] as const
}

export function getTaskQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTask<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task.$get>>>>>,
          ReturnType<typeof getTaskQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task.$post>>>>>,
          TError,
          InferRequestType<typeof client.task.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTaskMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTaskTaskIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task)[':task_id']['$get']>>,
) {
  return ['task', '/task/:task_id', toValue(args)] as const
}

export function getTaskTaskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task)[':task_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task[':task_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskTaskId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.task)[':task_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task)[':task_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.task)[':task_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.task)[':task_id']['$get']>>>
            >
          >,
          ReturnType<typeof getTaskTaskIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.task)[':task_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task[':task_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaskTaskIdDownloadInputFileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task)[':task_id']['download_input_file']['$get']>
  >,
) {
  return ['task', '/task/:task_id/download_input_file', toValue(args)] as const
}

export function getTaskTaskIdDownloadInputFileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task)[':task_id']['download_input_file']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskTaskIdDownloadInputFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task[':task_id'].download_input_file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskTaskIdDownloadInputFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task)[':task_id']['download_input_file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task)[':task_id']['download_input_file']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.task)[':task_id']['download_input_file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.task)[':task_id']['download_input_file']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaskTaskIdDownloadInputFileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskTaskIdDownloadInputFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task[':task_id'].download_input_file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaskTaskIdDownloadResultFileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task)[':task_id']['download_result_file']['$get']>
  >,
) {
  return ['task', '/task/:task_id/download_result_file', toValue(args)] as const
}

export function getTaskTaskIdDownloadResultFileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task)[':task_id']['download_result_file']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskTaskIdDownloadResultFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task[':task_id'].download_result_file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskTaskIdDownloadResultFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task)[':task_id']['download_result_file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task)[':task_id']['download_result_file']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.task)[':task_id']['download_result_file']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTaskTaskIdDownloadResultFileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskTaskIdDownloadResultFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task[':task_id'].download_result_file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTaskTaskIdUploadFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTaskTaskIdUploadFileMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
