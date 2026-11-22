import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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
      UseMutationOptions<
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
  args: InferRequestType<typeof client.hardware.applications.$get>,
) {
  return ['hardware', '/hardware/applications', args] as const
}

export function getHardwareApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hardware.applications.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.hardware.applications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareApplicationsQueryKey>
  >({
    queryKey: getHardwareApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware.applications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHardwareApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hardware.applications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hardware.applications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHardwareApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHardwareApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHardwareApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hardware.applications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hardware.applications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHardwareApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHardwareApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHardwareApplicationsApplicationIdQueryKey(
  args: InferRequestType<(typeof client.hardware.applications)[':applicationId']['$get']>,
) {
  return ['hardware', '/hardware/applications/:applicationId', args] as const
}

export function getHardwareApplicationsApplicationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware.applications)[':applicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware.applications)[':applicationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHardwareApplicationsApplicationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware.applications[':applicationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.hardware.applications)[':applicationId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHardwareApplicationsApplicationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHardwareApplicationsApplicationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHardwareApplicationsApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware.applications)[':applicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware.applications)[':applicationId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHardwareApplicationsApplicationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHardwareDeviceMonitorsDeviceIdQueryKey(
  args: InferRequestType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>,
) {
  return ['hardware', '/hardware/device-monitors/:deviceId', args] as const
}

export function getHardwareDeviceMonitorsDeviceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHardwareDeviceMonitorsDeviceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware['device-monitors'][':deviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHardwareDeviceMonitorsDeviceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHardwareDeviceMonitorsDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHardwareDeviceMonitorsDeviceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHardwareDevicesQueryKey(
  args: InferRequestType<typeof client.hardware.devices.$get>,
) {
  return ['hardware', '/hardware/devices', args] as const
}

export function getHardwareDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hardware.devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareDevicesQueryKey>
  >({
    queryKey: getHardwareDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware.devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHardwareDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hardware.devices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHardwareDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHardwareDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHardwareDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hardware.devices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHardwareDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHardwareDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHardwareDevicesSummaryQueryKey() {
  return ['hardware', '/hardware/devices-summary'] as const
}

export function getHardwareDevicesSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hardware)['devices-summary']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getHardwareDevicesSummaryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware['devices-summary'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof getHardwareDevicesSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHardwareDevicesSummaryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHardwareDevicesSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hardware)['devices-summary']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHardwareDevicesSummaryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHardwareDevicesDeviceIdQueryKey(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['$get']>,
) {
  return ['hardware', '/hardware/devices/:deviceId', args] as const
}

export function getHardwareDevicesDeviceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHardwareDevicesDeviceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware.devices[':deviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHardwareDevicesDeviceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHardwareDevicesDeviceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHardwareDevicesDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHardwareDevicesDeviceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHardwareDevicesDeviceIdAgentQueryKey(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>,
) {
  return ['hardware', '/hardware/devices/:deviceId/agent', args] as const
}

export function getHardwareDevicesDeviceIdAgentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHardwareDevicesDeviceIdAgentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware.devices[':deviceId'].agent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHardwareDevicesDeviceIdAgentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHardwareDevicesDeviceIdAgentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHardwareDevicesDeviceIdAgent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHardwareDevicesDeviceIdAgentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHardwareDevicesDeviceIdAgentDevicesQueryKey(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>,
) {
  return ['hardware', '/hardware/devices/:deviceId/agent-devices', args] as const
}

export function getHardwareDevicesDeviceIdAgentDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHardwareDevicesDeviceIdAgentDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware.devices[':deviceId']['agent-devices'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHardwareDevicesDeviceIdAgentDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHardwareDevicesDeviceIdAgentDevicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHardwareDevicesDeviceIdAgentDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHardwareDevicesDeviceIdAgentDevicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHardwareDevicesDeviceIdParameterHistoryQueryKey(
  args: InferRequestType<
    (typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']
  >,
) {
  return ['hardware', '/hardware/devices/:deviceId/parameter-history', args] as const
}

export function getHardwareDevicesDeviceIdParameterHistoryQueryOptions<
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
  args: InferRequestType<
    (typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHardwareDevicesDeviceIdParameterHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware.devices[':deviceId']['parameter-history'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHardwareDevicesDeviceIdParameterHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHardwareDevicesDeviceIdParameterHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHardwareDevicesDeviceIdParameterHistory<
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
  args: InferRequestType<
    (typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getHardwareDevicesDeviceIdParameterHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHardwareDevicesDeviceIdParameterHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHardwareEnergyUsageDeviceIdQueryKey(
  args: InferRequestType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>,
) {
  return ['hardware', '/hardware/energy-usage/:deviceId', args] as const
}

export function getHardwareEnergyUsageDeviceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHardwareEnergyUsageDeviceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware['energy-usage'][':deviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHardwareEnergyUsageDeviceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHardwareEnergyUsageDeviceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHardwareEnergyUsageDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHardwareEnergyUsageDeviceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHardwareGroupsQueryKey(
  args: InferRequestType<typeof client.hardware.groups.$get>,
) {
  return ['hardware', '/hardware/groups', args] as const
}

export function getHardwareGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hardware.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareGroupsQueryKey>
  >({
    queryKey: getHardwareGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHardwareGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hardware.groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHardwareGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHardwareGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHardwareGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hardware.groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHardwareGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHardwareGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHardwareGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.hardware.groups)[':groupId']['$get']>,
) {
  return ['hardware', '/hardware/groups/:groupId', args] as const
}

export function getHardwareGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hardware.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware.groups)[':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHardwareGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware.groups[':groupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHardwareGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hardware.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware.groups)[':groupId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHardwareGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHardwareGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHardwareGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hardware.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware.groups)[':groupId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHardwareGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.hardware)['heating-margin-devices']['$get']>,
) {
  return ['hardware', '/hardware/heating-margin-devices', args] as const
}

export function getHardwareHeatingMarginDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware)['heating-margin-devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware)['heating-margin-devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHardwareHeatingMarginDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware['heating-margin-devices'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.hardware)['heating-margin-devices']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHardwareHeatingMarginDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHardwareHeatingMarginDevicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHardwareHeatingMarginDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware)['heating-margin-devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware)['heating-margin-devices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHardwareHeatingMarginDevicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHardwareHistoryQueryKey(
  args: InferRequestType<typeof client.hardware.history.$get>,
) {
  return ['hardware', '/hardware/history', args] as const
}

export function getHardwareHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.history.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hardware.history.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareHistoryQueryKey>
  >({
    queryKey: getHardwareHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware.history.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHardwareHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hardware.history.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.history.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHardwareHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHardwareHistoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHardwareHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hardware.history.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.history.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHardwareHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHardwareHistoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHardwareSearchDevicesQueryKey(
  args: InferRequestType<(typeof client.hardware)['search-devices']['$get']>,
) {
  return ['hardware', '/hardware/search-devices', args] as const
}

export function getHardwareSearchDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hardware)['search-devices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware)['search-devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHardwareSearchDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware['search-devices'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHardwareSearchDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hardware)['search-devices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware)['search-devices']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHardwareSearchDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHardwareSearchDevicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHardwareSearchDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hardware)['search-devices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware)['search-devices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHardwareSearchDevicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHardwareServicesQueryKey(
  args: InferRequestType<typeof client.hardware.services.$get>,
) {
  return ['hardware', '/hardware/services', args] as const
}

export function getHardwareServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.services.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hardware.services.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareServicesQueryKey>
  >({
    queryKey: getHardwareServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware.services.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHardwareServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hardware.services.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hardware.services.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHardwareServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHardwareServicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHardwareServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hardware.services.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hardware.services.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHardwareServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHardwareServicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHardwareServicesServiceIdQueryKey(
  args: InferRequestType<(typeof client.hardware.services)[':serviceId']['$get']>,
) {
  return ['hardware', '/hardware/services/:serviceId', args] as const
}

export function getHardwareServicesServiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware.services)[':serviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware.services)[':serviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHardwareServicesServiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware.services[':serviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.hardware.services)[':serviceId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHardwareServicesServiceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHardwareServicesServiceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHardwareServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hardware.services)[':serviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hardware.services)[':serviceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHardwareServicesServiceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
