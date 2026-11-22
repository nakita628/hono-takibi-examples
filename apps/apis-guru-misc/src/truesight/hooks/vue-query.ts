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

export function getHardwareKey() {
  return ['hardware'] as const
}

export function getPostHardwareActionsDeviceIdCollectNowMutationKey() {
  return ['hardware', '/hardware/actions/:deviceId/collect-now', 'POST'] as const
}

export function getPostHardwareActionsDeviceIdCollectNowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware.actions)[':deviceId']['collect-now']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.hardware.actions)[':deviceId']['collect-now']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHardwareActionsDeviceIdCollectNowMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.hardware.actions)[':deviceId']['collect-now']['$post']>,
    ) {
      return parseResponse(client.hardware.actions[':deviceId']['collect-now'].$post(args, options))
    },
  })
}

export function usePostHardwareActionsDeviceIdCollectNow<
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
                  ReturnType<(typeof client.hardware.actions)[':deviceId']['collect-now']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.hardware.actions)[':deviceId']['collect-now']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHardwareActionsDeviceIdCollectNowMutationOptions<
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

export function getPostHardwareActionsDeviceIdRediscoverMutationKey() {
  return ['hardware', '/hardware/actions/:deviceId/rediscover', 'POST'] as const
}

export function getPostHardwareActionsDeviceIdRediscoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware.actions)[':deviceId']['rediscover']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.hardware.actions)[':deviceId']['rediscover']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHardwareActionsDeviceIdRediscoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.hardware.actions)[':deviceId']['rediscover']['$post']>,
    ) {
      return parseResponse(client.hardware.actions[':deviceId'].rediscover.$post(args, options))
    },
  })
}

export function usePostHardwareActionsDeviceIdRediscover<
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
                  ReturnType<(typeof client.hardware.actions)[':deviceId']['rediscover']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.hardware.actions)[':deviceId']['rediscover']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHardwareActionsDeviceIdRediscoverMutationOptions<
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

export function getPostHardwareActionsDeviceIdReinitializeMutationKey() {
  return ['hardware', '/hardware/actions/:deviceId/reinitialize', 'POST'] as const
}

export function getPostHardwareActionsDeviceIdReinitializeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.hardware.actions)[':deviceId']['reinitialize']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.hardware.actions)[':deviceId']['reinitialize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHardwareActionsDeviceIdReinitializeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.hardware.actions)[':deviceId']['reinitialize']['$post']
      >,
    ) {
      return parseResponse(client.hardware.actions[':deviceId'].reinitialize.$post(args, options))
    },
  })
}

export function usePostHardwareActionsDeviceIdReinitialize<
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
                  ReturnType<(typeof client.hardware.actions)[':deviceId']['reinitialize']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.hardware.actions)[':deviceId']['reinitialize']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHardwareActionsDeviceIdReinitializeMutationOptions<
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

export function getPostHardwareActionsDeviceIdRemoveMutationKey() {
  return ['hardware', '/hardware/actions/:deviceId/remove', 'POST'] as const
}

export function getPostHardwareActionsDeviceIdRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware.actions)[':deviceId']['remove']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.hardware.actions)[':deviceId']['remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHardwareActionsDeviceIdRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.hardware.actions)[':deviceId']['remove']['$post']>,
    ) {
      return parseResponse(client.hardware.actions[':deviceId'].remove.$post(args, options))
    },
  })
}

export function usePostHardwareActionsDeviceIdRemove<
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
                  ReturnType<(typeof client.hardware.actions)[':deviceId']['remove']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.hardware.actions)[':deviceId']['remove']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHardwareActionsDeviceIdRemoveMutationOptions<
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

export function getPostHardwareActionsDeviceIdResetErrorCountMutationKey() {
  return ['hardware', '/hardware/actions/:deviceId/reset-error-count', 'POST'] as const
}

export function getPostHardwareActionsDeviceIdResetErrorCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.hardware.actions)[':deviceId']['reset-error-count']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.hardware.actions)[':deviceId']['reset-error-count']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHardwareActionsDeviceIdResetErrorCountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.hardware.actions)[':deviceId']['reset-error-count']['$post']
      >,
    ) {
      return parseResponse(
        client.hardware.actions[':deviceId']['reset-error-count'].$post(args, options),
      )
    },
  })
}

export function usePostHardwareActionsDeviceIdResetErrorCount<
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
                    (typeof client.hardware.actions)[':deviceId']['reset-error-count']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.hardware.actions)[':deviceId']['reset-error-count']['$post']
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
  const mutationDefaults = getPostHardwareActionsDeviceIdResetErrorCountMutationOptions<
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

export function getHardwareApplicationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.applications.$get>>,
) {
  return ['hardware', '/hardware/applications', toValue(args)] as const
}

export function getHardwareApplicationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.applications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware.applications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.applications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hardware.applications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hardware.applications.$get>>>
            >
          >,
          ReturnType<typeof getHardwareApplicationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.hardware.applications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware.applications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareApplicationsApplicationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware.applications)[':applicationId']['$get']>
  >,
) {
  return ['hardware', '/hardware/applications/:applicationId', toValue(args)] as const
}

export function getHardwareApplicationsApplicationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware.applications)[':applicationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareApplicationsApplicationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware.applications[':applicationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareApplicationsApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware.applications)[':applicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware.applications)[':applicationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware.applications)[':applicationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware.applications)[':applicationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHardwareApplicationsApplicationIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware.applications)[':applicationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareApplicationsApplicationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareApplicationsApplicationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware.applications[':applicationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareDeviceMonitorsDeviceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>
  >,
) {
  return ['hardware', '/hardware/device-monitors/:deviceId', toValue(args)] as const
}

export function getHardwareDeviceMonitorsDeviceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareDeviceMonitorsDeviceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware['device-monitors'][':deviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareDeviceMonitorsDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>
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
                  ReturnType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getHardwareDeviceMonitorsDeviceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareDeviceMonitorsDeviceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareDeviceMonitorsDeviceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware['device-monitors'][':deviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.devices.$get>>,
) {
  return ['hardware', '/hardware/devices', toValue(args)] as const
}

export function getHardwareDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware.devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hardware.devices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hardware.devices.$get>>>
            >
          >,
          ReturnType<typeof getHardwareDevicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware.devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareDevicesSummaryQueryKey() {
  return ['hardware', '/hardware/devices-summary'] as const
}

export function getHardwareDevicesSummaryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHardwareDevicesSummaryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware['devices-summary'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareDevicesSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hardware)['devices-summary']['$get']>>>
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
                Awaited<ReturnType<(typeof client.hardware)['devices-summary']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware)['devices-summary']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHardwareDevicesSummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware)['devices-summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareDevicesSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHardwareDevicesSummaryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware['devices-summary'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareDevicesDeviceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hardware.devices)[':deviceId']['$get']>>,
) {
  return ['hardware', '/hardware/devices/:deviceId', toValue(args)] as const
}

export function getHardwareDevicesDeviceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hardware.devices)[':deviceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareDevicesDeviceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware.devices[':deviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareDevicesDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hardware.devices)[':deviceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHardwareDevicesDeviceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareDevicesDeviceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareDevicesDeviceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware.devices[':deviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareDevicesDeviceIdAgentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>
  >,
) {
  return ['hardware', '/hardware/devices/:deviceId/agent', toValue(args)] as const
}

export function getHardwareDevicesDeviceIdAgentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareDevicesDeviceIdAgentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware.devices[':deviceId'].agent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareDevicesDeviceIdAgent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHardwareDevicesDeviceIdAgentQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareDevicesDeviceIdAgentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareDevicesDeviceIdAgentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware.devices[':deviceId'].agent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareDevicesDeviceIdAgentDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>
  >,
) {
  return ['hardware', '/hardware/devices/:deviceId/agent-devices', toValue(args)] as const
}

export function getHardwareDevicesDeviceIdAgentDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareDevicesDeviceIdAgentDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware.devices[':deviceId']['agent-devices'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareDevicesDeviceIdAgentDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>
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
                  ReturnType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getHardwareDevicesDeviceIdAgentDevicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareDevicesDeviceIdAgentDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareDevicesDeviceIdAgentDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware.devices[':deviceId']['agent-devices'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareDevicesDeviceIdParameterHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']>
  >,
) {
  return ['hardware', '/hardware/devices/:deviceId/parameter-history', toValue(args)] as const
}

export function getHardwareDevicesDeviceIdParameterHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareDevicesDeviceIdParameterHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware.devices[':deviceId']['parameter-history'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareDevicesDeviceIdParameterHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']>
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
                    (typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']
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
                    (typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getHardwareDevicesDeviceIdParameterHistoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareDevicesDeviceIdParameterHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareDevicesDeviceIdParameterHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware.devices[':deviceId']['parameter-history'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareEnergyUsageDeviceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>
  >,
) {
  return ['hardware', '/hardware/energy-usage/:deviceId', toValue(args)] as const
}

export function getHardwareEnergyUsageDeviceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareEnergyUsageDeviceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware['energy-usage'][':deviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareEnergyUsageDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHardwareEnergyUsageDeviceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareEnergyUsageDeviceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareEnergyUsageDeviceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware['energy-usage'][':deviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.groups.$get>>,
) {
  return ['hardware', '/hardware/groups', toValue(args)] as const
}

export function getHardwareGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware.groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hardware.groups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hardware.groups.$get>>>
            >
          >,
          ReturnType<typeof getHardwareGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hardware.groups)[':groupId']['$get']>>,
) {
  return ['hardware', '/hardware/groups/:groupId', toValue(args)] as const
}

export function getHardwareGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hardware.groups)[':groupId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware.groups[':groupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hardware.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hardware.groups)[':groupId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware.groups)[':groupId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware.groups)[':groupId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHardwareGroupsGroupIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware.groups)[':groupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware.groups[':groupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutHardwareGroupsGroupIdMutationKey() {
  return ['hardware', '/hardware/groups/:groupId', 'PUT'] as const
}

export function getPutHardwareGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware.groups)[':groupId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.hardware.groups)[':groupId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutHardwareGroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.hardware.groups)[':groupId']['$put']>) {
      return parseResponse(client.hardware.groups[':groupId'].$put(args, options))
    },
  })
}

export function usePutHardwareGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware.groups)[':groupId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.hardware.groups)[':groupId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutHardwareGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getHardwareHeatingMarginDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware)['heating-margin-devices']['$get']>
  >,
) {
  return ['hardware', '/hardware/heating-margin-devices', toValue(args)] as const
}

export function getHardwareHeatingMarginDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware)['heating-margin-devices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareHeatingMarginDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware['heating-margin-devices'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareHeatingMarginDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware)['heating-margin-devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hardware)['heating-margin-devices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware)['heating-margin-devices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware)['heating-margin-devices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHardwareHeatingMarginDevicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware)['heating-margin-devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareHeatingMarginDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareHeatingMarginDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware['heating-margin-devices'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.history.$get>>,
) {
  return ['hardware', '/hardware/history', toValue(args)] as const
}

export function getHardwareHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hardware.history.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hardware.history.$get>>>
            >
          >,
          ReturnType<typeof getHardwareHistoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareSearchDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hardware)['search-devices']['$get']>>,
) {
  return ['hardware', '/hardware/search-devices', toValue(args)] as const
}

export function getHardwareSearchDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hardware)['search-devices']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareSearchDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware['search-devices'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareSearchDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hardware)['search-devices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hardware)['search-devices']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware)['search-devices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware)['search-devices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHardwareSearchDevicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware)['search-devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareSearchDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareSearchDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware['search-devices'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.services.$get>>,
) {
  return ['hardware', '/hardware/services', toValue(args)] as const
}

export function getHardwareServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.services.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware.services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.services.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hardware.services.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hardware.services.$get>>>
            >
          >,
          ReturnType<typeof getHardwareServicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware.services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareServicesServiceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hardware.services)[':serviceId']['$get']>>,
) {
  return ['hardware', '/hardware/services/:serviceId', toValue(args)] as const
}

export function getHardwareServicesServiceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hardware.services)[':serviceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareServicesServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware.services[':serviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware.services)[':serviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hardware.services)[':serviceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware.services)[':serviceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hardware.services)[':serviceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHardwareServicesServiceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware.services)[':serviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareServicesServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareServicesServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware.services[':serviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
