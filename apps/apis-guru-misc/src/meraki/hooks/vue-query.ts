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

export function getDevicesKey() {
  return ['devices'] as const
}

export function getNetworksKey() {
  return ['networks'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getDevicesSerialCameraAnalyticsLiveQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['live']['$get']>
  >,
) {
  return ['devices', '/devices/:serial/camera/analytics/live', toValue(args)] as const
}

export function getDevicesSerialCameraAnalyticsLiveQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['live']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesSerialCameraAnalyticsLiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':serial'].camera.analytics.live.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesSerialCameraAnalyticsLive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.devices)[':serial']['camera']['analytics']['live']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['live']['$get']>
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
                    (typeof client.devices)[':serial']['camera']['analytics']['live']['$get']
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
                    (typeof client.devices)[':serial']['camera']['analytics']['live']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDevicesSerialCameraAnalyticsLiveQueryKey>
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
            ReturnType<(typeof client.devices)[':serial']['camera']['analytics']['live']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesSerialCameraAnalyticsLiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesSerialCameraAnalyticsLiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':serial'].camera.analytics.live.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesSerialCameraAnalyticsOverviewQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']>
  >,
) {
  return ['devices', '/devices/:serial/camera/analytics/overview', toValue(args)] as const
}

export function getDevicesSerialCameraAnalyticsOverviewQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesSerialCameraAnalyticsOverviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':serial'].camera.analytics.overview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesSerialCameraAnalyticsOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']>
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
                    (typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']
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
                    (typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDevicesSerialCameraAnalyticsOverviewQueryKey>
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
              (typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesSerialCameraAnalyticsOverviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesSerialCameraAnalyticsOverviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':serial'].camera.analytics.overview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesSerialCameraAnalyticsRecentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']>
  >,
) {
  return ['devices', '/devices/:serial/camera/analytics/recent', toValue(args)] as const
}

export function getDevicesSerialCameraAnalyticsRecentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesSerialCameraAnalyticsRecentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':serial'].camera.analytics.recent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesSerialCameraAnalyticsRecent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']>
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
                    (typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']
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
                    (typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDevicesSerialCameraAnalyticsRecentQueryKey>
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
            ReturnType<(typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesSerialCameraAnalyticsRecentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesSerialCameraAnalyticsRecentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':serial'].camera.analytics.recent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesSerialCameraAnalyticsZonesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']>
  >,
) {
  return ['devices', '/devices/:serial/camera/analytics/zones', toValue(args)] as const
}

export function getDevicesSerialCameraAnalyticsZonesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesSerialCameraAnalyticsZonesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':serial'].camera.analytics.zones.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesSerialCameraAnalyticsZones<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']>
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
                    (typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']
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
                    (typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDevicesSerialCameraAnalyticsZonesQueryKey>
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
            ReturnType<(typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesSerialCameraAnalyticsZonesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesSerialCameraAnalyticsZonesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':serial'].camera.analytics.zones.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesSerialCameraAnalyticsZonesZoneIdHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
    >
  >,
) {
  return [
    'devices',
    '/devices/:serial/camera/analytics/zones/:zoneId/history',
    toValue(args),
  ] as const
}

export function getDevicesSerialCameraAnalyticsZonesZoneIdHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesSerialCameraAnalyticsZonesZoneIdHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':serial'].camera.analytics.zones[':zoneId'].history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesSerialCameraAnalyticsZonesZoneIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
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
                    (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
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
                    (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDevicesSerialCameraAnalyticsZonesZoneIdHistoryQueryKey>
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
              (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesSerialCameraAnalyticsZonesZoneIdHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesSerialCameraAnalyticsZonesZoneIdHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':serial'].camera.analytics.zones[':zoneId'].history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesSerialCameraQualityAndRetentionSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
    >
  >,
) {
  return ['devices', '/devices/:serial/camera/qualityAndRetentionSettings', toValue(args)] as const
}

export function getDevicesSerialCameraQualityAndRetentionSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesSerialCameraQualityAndRetentionSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':serial'].camera.qualityAndRetentionSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesSerialCameraQualityAndRetentionSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
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
                    (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
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
                    (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDevicesSerialCameraQualityAndRetentionSettingsQueryKey>
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
              (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesSerialCameraQualityAndRetentionSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesSerialCameraQualityAndRetentionSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':serial'].camera.qualityAndRetentionSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDevicesSerialCameraQualityAndRetentionSettingsMutationKey() {
  return ['devices', '/devices/:serial/camera/qualityAndRetentionSettings', 'PUT'] as const
}

export function getPutDevicesSerialCameraQualityAndRetentionSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDevicesSerialCameraQualityAndRetentionSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$put']
      >,
    ) {
      return parseResponse(
        client.devices[':serial'].camera.qualityAndRetentionSettings.$put(args, options),
      )
    },
  })
}

export function usePutDevicesSerialCameraQualityAndRetentionSettings<
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
                    (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$put']
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
  const mutationDefaults = getPutDevicesSerialCameraQualityAndRetentionSettingsMutationOptions<
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

export function getDevicesSerialCameraVideoSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['camera']['video']['settings']['$get']>
  >,
) {
  return ['devices', '/devices/:serial/camera/video/settings', toValue(args)] as const
}

export function getDevicesSerialCameraVideoSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['camera']['video']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesSerialCameraVideoSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':serial'].camera.video.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesSerialCameraVideoSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.devices)[':serial']['camera']['video']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['camera']['video']['settings']['$get']>
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
                    (typeof client.devices)[':serial']['camera']['video']['settings']['$get']
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
                    (typeof client.devices)[':serial']['camera']['video']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDevicesSerialCameraVideoSettingsQueryKey>
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
            ReturnType<(typeof client.devices)[':serial']['camera']['video']['settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesSerialCameraVideoSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesSerialCameraVideoSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':serial'].camera.video.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDevicesSerialCameraVideoSettingsMutationKey() {
  return ['devices', '/devices/:serial/camera/video/settings', 'PUT'] as const
}

export function getPutDevicesSerialCameraVideoSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.devices)[':serial']['camera']['video']['settings']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.devices)[':serial']['camera']['video']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDevicesSerialCameraVideoSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.devices)[':serial']['camera']['video']['settings']['$put']
      >,
    ) {
      return parseResponse(client.devices[':serial'].camera.video.settings.$put(args, options))
    },
  })
}

export function usePutDevicesSerialCameraVideoSettings<
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
                    (typeof client.devices)[':serial']['camera']['video']['settings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.devices)[':serial']['camera']['video']['settings']['$put']
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
  const mutationDefaults = getPutDevicesSerialCameraVideoSettingsMutationOptions<
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

export function getDevicesSerialCellularGatewaySettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$get']>
  >,
) {
  return ['devices', '/devices/:serial/cellularGateway/settings', toValue(args)] as const
}

export function getDevicesSerialCellularGatewaySettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesSerialCellularGatewaySettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':serial'].cellularGateway.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesSerialCellularGatewaySettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$get']>
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
                    (typeof client.devices)[':serial']['cellularGateway']['settings']['$get']
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
                    (typeof client.devices)[':serial']['cellularGateway']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDevicesSerialCellularGatewaySettingsQueryKey>
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
            ReturnType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesSerialCellularGatewaySettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesSerialCellularGatewaySettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':serial'].cellularGateway.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDevicesSerialCellularGatewaySettingsMutationKey() {
  return ['devices', '/devices/:serial/cellularGateway/settings', 'PUT'] as const
}

export function getPutDevicesSerialCellularGatewaySettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDevicesSerialCellularGatewaySettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.devices)[':serial']['cellularGateway']['settings']['$put']
      >,
    ) {
      return parseResponse(client.devices[':serial'].cellularGateway.settings.$put(args, options))
    },
  })
}

export function usePutDevicesSerialCellularGatewaySettings<
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
                    (typeof client.devices)[':serial']['cellularGateway']['settings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.devices)[':serial']['cellularGateway']['settings']['$put']
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
  const mutationDefaults = getPutDevicesSerialCellularGatewaySettingsMutationOptions<
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

export function getDevicesSerialCellularGatewaySettingsPortForwardingRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
    >
  >,
) {
  return [
    'devices',
    '/devices/:serial/cellularGateway/settings/portForwardingRules',
    toValue(args),
  ] as const
}

export function getDevicesSerialCellularGatewaySettingsPortForwardingRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDevicesSerialCellularGatewaySettingsPortForwardingRulesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':serial'].cellularGateway.settings.portForwardingRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesSerialCellularGatewaySettingsPortForwardingRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
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
                    (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
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
                    (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDevicesSerialCellularGatewaySettingsPortForwardingRulesQueryKey>
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
              (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesSerialCellularGatewaySettingsPortForwardingRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDevicesSerialCellularGatewaySettingsPortForwardingRulesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':serial'].cellularGateway.settings.portForwardingRules.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutDevicesSerialCellularGatewaySettingsPortForwardingRulesMutationKey() {
  return [
    'devices',
    '/devices/:serial/cellularGateway/settings/portForwardingRules',
    'PUT',
  ] as const
}

export function getPutDevicesSerialCellularGatewaySettingsPortForwardingRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDevicesSerialCellularGatewaySettingsPortForwardingRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$put']
      >,
    ) {
      return parseResponse(
        client.devices[':serial'].cellularGateway.settings.portForwardingRules.$put(args, options),
      )
    },
  })
}

export function usePutDevicesSerialCellularGatewaySettingsPortForwardingRules<
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
                    (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$put']
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
    getPutDevicesSerialCellularGatewaySettingsPortForwardingRulesMutationOptions<
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

export function getDevicesSerialClientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':serial']['clients']['$get']>>,
) {
  return ['devices', '/devices/:serial/clients', toValue(args)] as const
}

export function getDevicesSerialClientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':serial']['clients']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesSerialClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':serial'].clients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesSerialClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':serial']['clients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':serial']['clients']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':serial']['clients']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':serial']['clients']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDevicesSerialClientsQueryKey>
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
          Awaited<ReturnType<(typeof client.devices)[':serial']['clients']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesSerialClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesSerialClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':serial'].clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDevicesSerialSwitchPortsCycleMutationKey() {
  return ['devices', '/devices/:serial/switch/ports/cycle', 'POST'] as const
}

export function getPostDevicesSerialSwitchPortsCycleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.devices)[':serial']['switch']['ports']['cycle']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.devices)[':serial']['switch']['ports']['cycle']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDevicesSerialSwitchPortsCycleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.devices)[':serial']['switch']['ports']['cycle']['$post']
      >,
    ) {
      return parseResponse(client.devices[':serial'].switch.ports.cycle.$post(args, options))
    },
  })
}

export function usePostDevicesSerialSwitchPortsCycle<
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
                    (typeof client.devices)[':serial']['switch']['ports']['cycle']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.devices)[':serial']['switch']['ports']['cycle']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDevicesSerialSwitchPortsCycleMutationOptions<
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

export function getDevicesSerialSwitchPortStatusesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>
  >,
) {
  return ['devices', '/devices/:serial/switchPortStatuses', toValue(args)] as const
}

export function getDevicesSerialSwitchPortStatusesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesSerialSwitchPortStatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':serial'].switchPortStatuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesSerialSwitchPortStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>
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
                  ReturnType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDevicesSerialSwitchPortStatusesQueryKey>
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
          Awaited<ReturnType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesSerialSwitchPortStatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesSerialSwitchPortStatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':serial'].switchPortStatuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesSerialSwitchPortStatusesPacketsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']>
  >,
) {
  return ['devices', '/devices/:serial/switchPortStatuses/packets', toValue(args)] as const
}

export function getDevicesSerialSwitchPortStatusesPacketsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesSerialSwitchPortStatusesPacketsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':serial'].switchPortStatuses.packets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesSerialSwitchPortStatusesPackets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']>
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
                    (typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']
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
                    (typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDevicesSerialSwitchPortStatusesPacketsQueryKey>
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
            ReturnType<(typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesSerialSwitchPortStatusesPacketsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesSerialSwitchPortStatusesPacketsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':serial'].switchPortStatuses.packets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDevicesSerialWirelessBluetoothSettingsMutationKey() {
  return ['devices', '/devices/:serial/wireless/bluetooth/settings', 'PUT'] as const
}

export function getPutDevicesSerialWirelessBluetoothSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.devices)[':serial']['wireless']['bluetooth']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.devices)[':serial']['wireless']['bluetooth']['settings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDevicesSerialWirelessBluetoothSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.devices)[':serial']['wireless']['bluetooth']['settings']['$put']
      >,
    ) {
      return parseResponse(
        client.devices[':serial'].wireless.bluetooth.settings.$put(args, options),
      )
    },
  })
}

export function usePutDevicesSerialWirelessBluetoothSettings<
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
                    (typeof client.devices)[':serial']['wireless']['bluetooth']['settings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.devices)[':serial']['wireless']['bluetooth']['settings']['$put']
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
  const mutationDefaults = getPutDevicesSerialWirelessBluetoothSettingsMutationOptions<
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

export function getNetworksNetworkIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':networkId']['$get']>>,
) {
  return ['networks', '/networks/:networkId', toValue(args)] as const
}

export function getNetworksNetworkIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':networkId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':networkId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdMutationKey() {
  return ['networks', '/networks/:networkId', 'PUT'] as const
}

export function getPutNetworksNetworkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.networks)[':networkId']['$put']>) {
      return parseResponse(client.networks[':networkId'].$put(args, options))
    },
  })
}

export function usePutNetworksNetworkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteNetworksNetworkIdMutationKey() {
  return ['networks', '/networks/:networkId', 'DELETE'] as const
}

export function getDeleteNetworksNetworkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworksNetworkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.networks)[':networkId']['$delete']>) {
      return parseResponse(client.networks[':networkId'].$delete(args, options))
    },
  })
}

export function useDeleteNetworksNetworkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.networks)[':networkId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNetworksNetworkIdMutationOptions<TError, TOnMutateResult>(
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

export function getNetworksNetworkIdAccessPoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/accessPolicies', toValue(args)] as const
}

export function getNetworksNetworkIdAccessPoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdAccessPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].accessPolicies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdAccessPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdAccessPoliciesQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdAccessPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdAccessPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].accessPolicies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdAirMarshalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['airMarshal']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/airMarshal', toValue(args)] as const
}

export function getNetworksNetworkIdAirMarshalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['airMarshal']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdAirMarshalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].airMarshal.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdAirMarshal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['airMarshal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['airMarshal']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['airMarshal']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['airMarshal']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdAirMarshalQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['airMarshal']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdAirMarshalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdAirMarshalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].airMarshal.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdAlertSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/alertSettings', toValue(args)] as const
}

export function getNetworksNetworkIdAlertSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdAlertSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].alertSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdAlertSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['alertSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['alertSettings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['alertSettings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdAlertSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['alertSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdAlertSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdAlertSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].alertSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdAlertSettingsMutationKey() {
  return ['networks', '/networks/:networkId/alertSettings', 'PUT'] as const
}

export function getPutNetworksNetworkIdAlertSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['alertSettings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdAlertSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].alertSettings.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdAlertSettings<
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
                Awaited<ReturnType<(typeof client.networks)[':networkId']['alertSettings']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdAlertSettingsMutationOptions<
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

export function getNetworksNetworkIdApplianceFirewallInboundFirewallRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/appliance/firewall/inboundFirewallRules',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdApplianceFirewallInboundFirewallRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getNetworksNetworkIdApplianceFirewallInboundFirewallRulesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].appliance.firewall.inboundFirewallRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdApplianceFirewallInboundFirewallRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
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
                    (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
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
                    (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdApplianceFirewallInboundFirewallRulesQueryKey>
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
              (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdApplianceFirewallInboundFirewallRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getNetworksNetworkIdApplianceFirewallInboundFirewallRulesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].appliance.firewall.inboundFirewallRules.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdApplianceFirewallInboundFirewallRulesMutationKey() {
  return [
    'networks',
    '/networks/:networkId/appliance/firewall/inboundFirewallRules',
    'PUT',
  ] as const
}

export function getPutNetworksNetworkIdApplianceFirewallInboundFirewallRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdApplianceFirewallInboundFirewallRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].appliance.firewall.inboundFirewallRules.$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdApplianceFirewallInboundFirewallRules<
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
                    (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$put']
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
    getPutNetworksNetworkIdApplianceFirewallInboundFirewallRulesMutationOptions<
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

export function getNetworksNetworkIdAppliancePortsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/appliancePorts', toValue(args)] as const
}

export function getNetworksNetworkIdAppliancePortsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdAppliancePortsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].appliancePorts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdAppliancePorts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdAppliancePortsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdAppliancePortsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdAppliancePortsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].appliancePorts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdAppliancePortsAppliancePortIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/appliancePorts/:appliancePortId',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdAppliancePortsAppliancePortIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdAppliancePortsAppliancePortIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].appliancePorts[':appliancePortId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdAppliancePortsAppliancePortId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
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
                    (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
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
                    (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdAppliancePortsAppliancePortIdQueryKey>
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
              (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdAppliancePortsAppliancePortIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdAppliancePortsAppliancePortIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].appliancePorts[':appliancePortId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdAppliancePortsAppliancePortIdMutationKey() {
  return ['networks', '/networks/:networkId/appliancePorts/:appliancePortId', 'PUT'] as const
}

export function getPutNetworksNetworkIdAppliancePortsAppliancePortIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdAppliancePortsAppliancePortIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].appliancePorts[':appliancePortId'].$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdAppliancePortsAppliancePortId<
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
                    (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdAppliancePortsAppliancePortIdMutationOptions<
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

export function getPostNetworksNetworkIdBindMutationKey() {
  return ['networks', '/networks/:networkId/bind', 'POST'] as const
}

export function getPostNetworksNetworkIdBindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['bind']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['bind']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdBindMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['bind']['$post']>,
    ) {
      return parseResponse(client.networks[':networkId'].bind.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdBind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['bind']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['bind']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksNetworkIdBindMutationOptions<TError, TOnMutateResult>(
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

export function getNetworksNetworkIdBluetoothClientsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/bluetoothClients', toValue(args)] as const
}

export function getNetworksNetworkIdBluetoothClientsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdBluetoothClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].bluetoothClients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdBluetoothClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdBluetoothClientsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdBluetoothClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdBluetoothClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].bluetoothClients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdBluetoothClientsBluetoothClientIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/bluetoothClients/:bluetoothClientId',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdBluetoothClientsBluetoothClientIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdBluetoothClientsBluetoothClientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].bluetoothClients[':bluetoothClientId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdBluetoothClientsBluetoothClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
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
                    (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
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
                    (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdBluetoothClientsBluetoothClientIdQueryKey>
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
              (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdBluetoothClientsBluetoothClientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdBluetoothClientsBluetoothClientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].bluetoothClients[':bluetoothClientId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdBluetoothSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/bluetoothSettings', toValue(args)] as const
}

export function getNetworksNetworkIdBluetoothSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdBluetoothSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].bluetoothSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdBluetoothSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdBluetoothSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdBluetoothSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdBluetoothSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].bluetoothSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdBluetoothSettingsMutationKey() {
  return ['networks', '/networks/:networkId/bluetoothSettings', 'PUT'] as const
}

export function getPutNetworksNetworkIdBluetoothSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothSettings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdBluetoothSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].bluetoothSettings.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdBluetoothSettings<
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
                  ReturnType<(typeof client.networks)[':networkId']['bluetoothSettings']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdBluetoothSettingsMutationOptions<
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

export function getNetworksNetworkIdCameraQualityRetentionProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/camera/qualityRetentionProfiles',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdCameraQualityRetentionProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdCameraQualityRetentionProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].camera.qualityRetentionProfiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdCameraQualityRetentionProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
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
                    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
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
                    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdCameraQualityRetentionProfilesQueryKey>
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
              (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdCameraQualityRetentionProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdCameraQualityRetentionProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].camera.qualityRetentionProfiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdCameraQualityRetentionProfilesMutationKey() {
  return ['networks', '/networks/:networkId/camera/qualityRetentionProfiles', 'POST'] as const
}

export function getPostNetworksNetworkIdCameraQualityRetentionProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdCameraQualityRetentionProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$post']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].camera.qualityRetentionProfiles.$post(args, options),
      )
    },
  })
}

export function usePostNetworksNetworkIdCameraQualityRetentionProfiles<
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
                    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$post']
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
  const mutationDefaults = getPostNetworksNetworkIdCameraQualityRetentionProfilesMutationOptions<
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

export function getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/camera/qualityRetentionProfiles/:qualityRetentionProfileId',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].camera.qualityRetentionProfiles[
          ':qualityRetentionProfileId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$get']
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
                    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$get']
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
                    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdQueryKey
          >
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
              (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].camera.qualityRetentionProfiles[
            ':qualityRetentionProfileId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdMutationKey() {
  return [
    'networks',
    '/networks/:networkId/camera/qualityRetentionProfiles/:qualityRetentionProfileId',
    'PUT',
  ] as const
}

export function getPutNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].camera.qualityRetentionProfiles[
          ':qualityRetentionProfileId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileId<
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
                    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$put']
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
    getPutNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdMutationOptions<
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

export function getDeleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdMutationKey() {
  return [
    'networks',
    '/networks/:networkId/camera/qualityRetentionProfiles/:qualityRetentionProfileId',
    'DELETE',
  ] as const
}

export function getDeleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$delete']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].camera.qualityRetentionProfiles[
          ':qualityRetentionProfileId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileId<
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
                      (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$delete']
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
    getDeleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdMutationOptions<
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

export function getNetworksNetworkIdCameraSchedulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/camera/schedules', toValue(args)] as const
}

export function getNetworksNetworkIdCameraSchedulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdCameraSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].camera.schedules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdCameraSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdCameraSchedulesQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdCameraSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdCameraSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].camera.schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdCamerasSerialSnapshotMutationKey() {
  return ['networks', '/networks/:networkId/cameras/:serial/snapshot', 'POST'] as const
}

export function getPostNetworksNetworkIdCamerasSerialSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['cameras'][':serial']['snapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['cameras'][':serial']['snapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdCamerasSerialSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['cameras'][':serial']['snapshot']['$post']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].cameras[':serial'].snapshot.$post(args, options),
      )
    },
  })
}

export function usePostNetworksNetworkIdCamerasSerialSnapshot<
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
                    (typeof client.networks)[':networkId']['cameras'][':serial']['snapshot']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['cameras'][':serial']['snapshot']['$post']
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
  const mutationDefaults = getPostNetworksNetworkIdCamerasSerialSnapshotMutationOptions<
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

export function getNetworksNetworkIdCamerasSerialVideoLinkQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/cameras/:serial/videoLink', toValue(args)] as const
}

export function getNetworksNetworkIdCamerasSerialVideoLinkQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdCamerasSerialVideoLinkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].cameras[':serial'].videoLink.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdCamerasSerialVideoLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
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
                    (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
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
                    (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdCamerasSerialVideoLinkQueryKey>
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
              (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdCamerasSerialVideoLinkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdCamerasSerialVideoLinkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].cameras[':serial'].videoLink.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdCellularFirewallRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/cellularFirewallRules', toValue(args)] as const
}

export function getNetworksNetworkIdCellularFirewallRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdCellularFirewallRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].cellularFirewallRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdCellularFirewallRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>
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
                    (typeof client.networks)[':networkId']['cellularFirewallRules']['$get']
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
                    (typeof client.networks)[':networkId']['cellularFirewallRules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdCellularFirewallRulesQueryKey>
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
            ReturnType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdCellularFirewallRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdCellularFirewallRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].cellularFirewallRules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdCellularFirewallRulesMutationKey() {
  return ['networks', '/networks/:networkId/cellularFirewallRules', 'PUT'] as const
}

export function getPutNetworksNetworkIdCellularFirewallRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdCellularFirewallRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['cellularFirewallRules']['$put']
      >,
    ) {
      return parseResponse(client.networks[':networkId'].cellularFirewallRules.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdCellularFirewallRules<
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
                    (typeof client.networks)[':networkId']['cellularFirewallRules']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdCellularFirewallRulesMutationOptions<
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

export function getNetworksNetworkIdClientsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['clients']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/clients', toValue(args)] as const
}

export function getNetworksNetworkIdClientsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['clients']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].clients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['clients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['clients']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['clients']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['clients']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdClientsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['clients']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdClientsConnectionStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['clients']['connectionStats']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/clients/connectionStats', toValue(args)] as const
}

export function getNetworksNetworkIdClientsConnectionStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['clients']['connectionStats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdClientsConnectionStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].clients.connectionStats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdClientsConnectionStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':networkId']['clients']['connectionStats']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['clients']['connectionStats']['$get']>
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
                    (typeof client.networks)[':networkId']['clients']['connectionStats']['$get']
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
                    (typeof client.networks)[':networkId']['clients']['connectionStats']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdClientsConnectionStatsQueryKey>
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
            ReturnType<(typeof client.networks)[':networkId']['clients']['connectionStats']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdClientsConnectionStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdClientsConnectionStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].clients.connectionStats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdClientsLatencyStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['clients']['latencyStats']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/clients/latencyStats', toValue(args)] as const
}

export function getNetworksNetworkIdClientsLatencyStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['clients']['latencyStats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdClientsLatencyStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].clients.latencyStats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdClientsLatencyStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':networkId']['clients']['latencyStats']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['clients']['latencyStats']['$get']>
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
                    (typeof client.networks)[':networkId']['clients']['latencyStats']['$get']
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
                    (typeof client.networks)[':networkId']['clients']['latencyStats']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdClientsLatencyStatsQueryKey>
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
            ReturnType<(typeof client.networks)[':networkId']['clients']['latencyStats']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdClientsLatencyStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdClientsLatencyStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].clients.latencyStats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdClientsProvisionMutationKey() {
  return ['networks', '/networks/:networkId/clients/provision', 'POST'] as const
}

export function getPostNetworksNetworkIdClientsProvisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networks)[':networkId']['clients']['provision']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['clients']['provision']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdClientsProvisionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['clients']['provision']['$post']
      >,
    ) {
      return parseResponse(client.networks[':networkId'].clients.provision.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdClientsProvision<
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
                    (typeof client.networks)[':networkId']['clients']['provision']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['clients']['provision']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksNetworkIdClientsProvisionMutationOptions<
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

export function getNetworksNetworkIdClientsClientIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId', toValue(args)] as const
}

export function getNetworksNetworkIdClientsClientIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdClientsClientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdClientsClientIdQueryKey>
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
            ReturnType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdClientsClientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdClientsClientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].clients[':clientId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdClientsClientIdConnectionStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/clients/:clientId/connectionStats',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdClientsClientIdConnectionStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdClientsClientIdConnectionStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].connectionStats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdClientsClientIdConnectionStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdClientsClientIdConnectionStatsQueryKey>
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
              (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdClientsClientIdConnectionStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdClientsClientIdConnectionStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].clients[':clientId'].connectionStats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdClientsClientIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId/events', toValue(args)] as const
}

export function getNetworksNetworkIdClientsClientIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdClientsClientIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdClientsClientIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdClientsClientIdEventsQueryKey>
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
              (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdClientsClientIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdClientsClientIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].clients[':clientId'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdClientsClientIdLatencyHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/clients/:clientId/latencyHistory',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdClientsClientIdLatencyHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdClientsClientIdLatencyHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].latencyHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdClientsClientIdLatencyHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdClientsClientIdLatencyHistoryQueryKey>
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
              (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdClientsClientIdLatencyHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdClientsClientIdLatencyHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].clients[':clientId'].latencyHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdClientsClientIdLatencyStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId/latencyStats', toValue(args)] as const
}

export function getNetworksNetworkIdClientsClientIdLatencyStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdClientsClientIdLatencyStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].latencyStats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdClientsClientIdLatencyStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdClientsClientIdLatencyStatsQueryKey>
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
              (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdClientsClientIdLatencyStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdClientsClientIdLatencyStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].clients[':clientId'].latencyStats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdClientsClientIdPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId/policy', toValue(args)] as const
}

export function getNetworksNetworkIdClientsClientIdPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdClientsClientIdPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].policy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdClientsClientIdPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdClientsClientIdPolicyQueryKey>
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
              (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdClientsClientIdPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdClientsClientIdPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].clients[':clientId'].policy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdClientsClientIdPolicyMutationKey() {
  return ['networks', '/networks/:networkId/clients/:clientId/policy', 'PUT'] as const
}

export function getPutNetworksNetworkIdClientsClientIdPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdClientsClientIdPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].policy.$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdClientsClientIdPolicy<
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdClientsClientIdPolicyMutationOptions<
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

export function getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/clients/:clientId/splashAuthorizationStatus',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].splashAuthorizationStatus.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useNetworksNetworkIdClientsClientIdSplashAuthorizationStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusQueryKey>
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
              (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].clients[':clientId'].splashAuthorizationStatus.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdClientsClientIdSplashAuthorizationStatusMutationKey() {
  return [
    'networks',
    '/networks/:networkId/clients/:clientId/splashAuthorizationStatus',
    'PUT',
  ] as const
}

export function getPutNetworksNetworkIdClientsClientIdSplashAuthorizationStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdClientsClientIdSplashAuthorizationStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].splashAuthorizationStatus.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutNetworksNetworkIdClientsClientIdSplashAuthorizationStatus<
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$put']
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
    getPutNetworksNetworkIdClientsClientIdSplashAuthorizationStatusMutationOptions<
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

export function getNetworksNetworkIdClientsClientIdUsageHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId/usageHistory', toValue(args)] as const
}

export function getNetworksNetworkIdClientsClientIdUsageHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdClientsClientIdUsageHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].usageHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdClientsClientIdUsageHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdClientsClientIdUsageHistoryQueryKey>
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
              (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdClientsClientIdUsageHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdClientsClientIdUsageHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].clients[':clientId'].usageHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdConnectionStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['connectionStats']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/connectionStats', toValue(args)] as const
}

export function getNetworksNetworkIdConnectionStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['connectionStats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdConnectionStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].connectionStats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdConnectionStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['connectionStats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['connectionStats']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['connectionStats']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['connectionStats']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdConnectionStatsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['connectionStats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdConnectionStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdConnectionStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].connectionStats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdContentFilteringQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/contentFiltering', toValue(args)] as const
}

export function getNetworksNetworkIdContentFilteringQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdContentFilteringQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].contentFiltering.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdContentFiltering<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdContentFilteringQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdContentFilteringQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdContentFilteringQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].contentFiltering.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdContentFilteringMutationKey() {
  return ['networks', '/networks/:networkId/contentFiltering', 'PUT'] as const
}

export function getPutNetworksNetworkIdContentFilteringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['contentFiltering']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdContentFilteringMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].contentFiltering.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdContentFiltering<
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
                  ReturnType<(typeof client.networks)[':networkId']['contentFiltering']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdContentFilteringMutationOptions<
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

export function getNetworksNetworkIdContentFilteringCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/contentFiltering/categories', toValue(args)] as const
}

export function getNetworksNetworkIdContentFilteringCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdContentFilteringCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].contentFiltering.categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdContentFilteringCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
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
                    (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
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
                    (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdContentFilteringCategoriesQueryKey>
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
              (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdContentFilteringCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdContentFilteringCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].contentFiltering.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['devices']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/devices', toValue(args)] as const
}

export function getNetworksNetworkIdDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['devices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['devices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['devices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['devices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdDevicesQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdDevicesClaimMutationKey() {
  return ['networks', '/networks/:networkId/devices/claim', 'POST'] as const
}

export function getPostNetworksNetworkIdDevicesClaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['devices']['claim']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['devices']['claim']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdDevicesClaimMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['devices']['claim']['$post']>,
    ) {
      return parseResponse(client.networks[':networkId'].devices.claim.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdDevicesClaim<
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
                  ReturnType<(typeof client.networks)[':networkId']['devices']['claim']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['devices']['claim']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksNetworkIdDevicesClaimMutationOptions<
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

export function getNetworksNetworkIdDevicesConnectionStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['devices']['connectionStats']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/devices/connectionStats', toValue(args)] as const
}

export function getNetworksNetworkIdDevicesConnectionStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['devices']['connectionStats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdDevicesConnectionStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].devices.connectionStats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdDevicesConnectionStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':networkId']['devices']['connectionStats']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['devices']['connectionStats']['$get']>
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
                    (typeof client.networks)[':networkId']['devices']['connectionStats']['$get']
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
                    (typeof client.networks)[':networkId']['devices']['connectionStats']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdDevicesConnectionStatsQueryKey>
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
            ReturnType<(typeof client.networks)[':networkId']['devices']['connectionStats']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdDevicesConnectionStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdDevicesConnectionStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].devices.connectionStats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdDevicesLatencyStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['devices']['latencyStats']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/devices/latencyStats', toValue(args)] as const
}

export function getNetworksNetworkIdDevicesLatencyStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['devices']['latencyStats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdDevicesLatencyStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].devices.latencyStats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdDevicesLatencyStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':networkId']['devices']['latencyStats']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['devices']['latencyStats']['$get']>
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
                    (typeof client.networks)[':networkId']['devices']['latencyStats']['$get']
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
                    (typeof client.networks)[':networkId']['devices']['latencyStats']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdDevicesLatencyStatsQueryKey>
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
            ReturnType<(typeof client.networks)[':networkId']['devices']['latencyStats']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdDevicesLatencyStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdDevicesLatencyStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].devices.latencyStats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdDevicesSerialQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/devices/:serial', toValue(args)] as const
}

export function getNetworksNetworkIdDevicesSerialQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdDevicesSerialQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].devices[':serial'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdDevicesSerial<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdDevicesSerialQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdDevicesSerialQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdDevicesSerialQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].devices[':serial'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdDevicesSerialMutationKey() {
  return ['networks', '/networks/:networkId/devices/:serial', 'PUT'] as const
}

export function getPutNetworksNetworkIdDevicesSerialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['devices'][':serial']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdDevicesSerialMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].devices[':serial'].$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdDevicesSerial<
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
                  ReturnType<(typeof client.networks)[':networkId']['devices'][':serial']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdDevicesSerialMutationOptions<
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

export function getNetworksNetworkIdDevicesSerialConnectionStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/devices/:serial/connectionStats',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdDevicesSerialConnectionStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdDevicesSerialConnectionStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].devices[':serial'].connectionStats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdDevicesSerialConnectionStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdDevicesSerialConnectionStatsQueryKey>
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
              (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdDevicesSerialConnectionStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdDevicesSerialConnectionStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].devices[':serial'].connectionStats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdDevicesSerialLatencyStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/devices/:serial/latencyStats', toValue(args)] as const
}

export function getNetworksNetworkIdDevicesSerialLatencyStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdDevicesSerialLatencyStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].devices[':serial'].latencyStats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdDevicesSerialLatencyStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdDevicesSerialLatencyStatsQueryKey>
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
              (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdDevicesSerialLatencyStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdDevicesSerialLatencyStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].devices[':serial'].latencyStats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/devices/:serial/lossAndLatencyHistory',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].devices[':serial'].lossAndLatencyHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdDevicesSerialLossAndLatencyHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryQueryKey>
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
              (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].devices[':serial'].lossAndLatencyHistory.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdDevicesSerialPerformanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/devices/:serial/performance', toValue(args)] as const
}

export function getNetworksNetworkIdDevicesSerialPerformanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdDevicesSerialPerformanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].devices[':serial'].performance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdDevicesSerialPerformance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdDevicesSerialPerformanceQueryKey>
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
              (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdDevicesSerialPerformanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdDevicesSerialPerformanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].devices[':serial'].performance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdDevicesSerialRebootMutationKey() {
  return ['networks', '/networks/:networkId/devices/:serial/reboot', 'POST'] as const
}

export function getPostNetworksNetworkIdDevicesSerialRebootMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['devices'][':serial']['reboot']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['reboot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdDevicesSerialRebootMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['devices'][':serial']['reboot']['$post']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].devices[':serial'].reboot.$post(args, options),
      )
    },
  })
}

export function usePostNetworksNetworkIdDevicesSerialReboot<
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['reboot']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['devices'][':serial']['reboot']['$post']
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
  const mutationDefaults = getPostNetworksNetworkIdDevicesSerialRebootMutationOptions<
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

export function getPostNetworksNetworkIdDevicesSerialRemoveMutationKey() {
  return ['networks', '/networks/:networkId/devices/:serial/remove', 'POST'] as const
}

export function getPostNetworksNetworkIdDevicesSerialRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.networks)[':networkId']['devices'][':serial']['remove']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdDevicesSerialRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['devices'][':serial']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].devices[':serial'].remove.$post(args, options),
      )
    },
  })
}

export function usePostNetworksNetworkIdDevicesSerialRemove<
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
                      (typeof client.networks)[':networkId']['devices'][':serial']['remove']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['devices'][':serial']['remove']['$post']
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
  const mutationDefaults = getPostNetworksNetworkIdDevicesSerialRemoveMutationOptions<
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

export function getNetworksNetworkIdDevicesSerialUplinkQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/devices/:serial/uplink', toValue(args)] as const
}

export function getNetworksNetworkIdDevicesSerialUplinkQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdDevicesSerialUplinkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].devices[':serial'].uplink.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdDevicesSerialUplink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']>
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdDevicesSerialUplinkQueryKey>
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
              (typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdDevicesSerialUplinkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdDevicesSerialUplinkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].devices[':serial'].uplink.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdDevicesSerialWirelessStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/devices/:serial/wireless/status',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdDevicesSerialWirelessStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdDevicesSerialWirelessStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].devices[':serial'].wireless.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdDevicesSerialWirelessStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdDevicesSerialWirelessStatusQueryKey>
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
              (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdDevicesSerialWirelessStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdDevicesSerialWirelessStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].devices[':serial'].wireless.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['events']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/events', toValue(args)] as const
}

export function getNetworksNetworkIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdEventsEventTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/events/eventTypes', toValue(args)] as const
}

export function getNetworksNetworkIdEventsEventTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdEventsEventTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].events.eventTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdEventsEventTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdEventsEventTypesQueryKey>
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
            ReturnType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdEventsEventTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdEventsEventTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].events.eventTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdFailedConnectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['failedConnections']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/failedConnections', toValue(args)] as const
}

export function getNetworksNetworkIdFailedConnectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['failedConnections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdFailedConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].failedConnections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdFailedConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['failedConnections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['failedConnections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['failedConnections']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['failedConnections']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdFailedConnectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['failedConnections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdFailedConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdFailedConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].failedConnections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdFirewalledServicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/firewalledServices', toValue(args)] as const
}

export function getNetworksNetworkIdFirewalledServicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdFirewalledServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].firewalledServices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdFirewalledServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdFirewalledServicesQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdFirewalledServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdFirewalledServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].firewalledServices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdFirewalledServicesServiceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/firewalledServices/:service', toValue(args)] as const
}

export function getNetworksNetworkIdFirewalledServicesServiceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdFirewalledServicesServiceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].firewalledServices[':service'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdFirewalledServicesService<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
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
                    (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
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
                    (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdFirewalledServicesServiceQueryKey>
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
              (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdFirewalledServicesServiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdFirewalledServicesServiceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].firewalledServices[':service'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdFirewalledServicesServiceMutationKey() {
  return ['networks', '/networks/:networkId/firewalledServices/:service', 'PUT'] as const
}

export function getPutNetworksNetworkIdFirewalledServicesServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['firewalledServices'][':service']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['firewalledServices'][':service']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdFirewalledServicesServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['firewalledServices'][':service']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].firewalledServices[':service'].$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdFirewalledServicesService<
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
                    (typeof client.networks)[':networkId']['firewalledServices'][':service']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['firewalledServices'][':service']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdFirewalledServicesServiceMutationOptions<
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

export function getNetworksNetworkIdFloorPlansQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/floorPlans', toValue(args)] as const
}

export function getNetworksNetworkIdFloorPlansQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdFloorPlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].floorPlans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdFloorPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['floorPlans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['floorPlans']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['floorPlans']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdFloorPlansQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['floorPlans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdFloorPlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdFloorPlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].floorPlans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdFloorPlansMutationKey() {
  return ['networks', '/networks/:networkId/floorPlans', 'POST'] as const
}

export function getPostNetworksNetworkIdFloorPlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['floorPlans']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdFloorPlansMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$post']>,
    ) {
      return parseResponse(client.networks[':networkId'].floorPlans.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdFloorPlans<
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
                Awaited<ReturnType<(typeof client.networks)[':networkId']['floorPlans']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksNetworkIdFloorPlansMutationOptions<
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

export function getNetworksNetworkIdFloorPlansFloorPlanIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/floorPlans/:floorPlanId', toValue(args)] as const
}

export function getNetworksNetworkIdFloorPlansFloorPlanIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdFloorPlansFloorPlanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].floorPlans[':floorPlanId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdFloorPlansFloorPlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']>
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
                    (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']
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
                    (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdFloorPlansFloorPlanIdQueryKey>
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
            ReturnType<(typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdFloorPlansFloorPlanIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdFloorPlansFloorPlanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].floorPlans[':floorPlanId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdFloorPlansFloorPlanIdMutationKey() {
  return ['networks', '/networks/:networkId/floorPlans/:floorPlanId', 'PUT'] as const
}

export function getPutNetworksNetworkIdFloorPlansFloorPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdFloorPlansFloorPlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].floorPlans[':floorPlanId'].$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdFloorPlansFloorPlanId<
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
                    (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdFloorPlansFloorPlanIdMutationOptions<
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

export function getDeleteNetworksNetworkIdFloorPlansFloorPlanIdMutationKey() {
  return ['networks', '/networks/:networkId/floorPlans/:floorPlanId', 'DELETE'] as const
}

export function getDeleteNetworksNetworkIdFloorPlansFloorPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworksNetworkIdFloorPlansFloorPlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$delete']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].floorPlans[':floorPlanId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNetworksNetworkIdFloorPlansFloorPlanId<
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
                      (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$delete']
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
  const mutationDefaults = getDeleteNetworksNetworkIdFloorPlansFloorPlanIdMutationOptions<
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

export function getNetworksNetworkIdL3FirewallRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/l3FirewallRules', toValue(args)] as const
}

export function getNetworksNetworkIdL3FirewallRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdL3FirewallRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].l3FirewallRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdL3FirewallRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdL3FirewallRulesQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdL3FirewallRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdL3FirewallRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].l3FirewallRules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdL3FirewallRulesMutationKey() {
  return ['networks', '/networks/:networkId/l3FirewallRules', 'PUT'] as const
}

export function getPutNetworksNetworkIdL3FirewallRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['l3FirewallRules']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdL3FirewallRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].l3FirewallRules.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdL3FirewallRules<
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
                  ReturnType<(typeof client.networks)[':networkId']['l3FirewallRules']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdL3FirewallRulesMutationOptions<
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

export function getNetworksNetworkIdL7FirewallRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/l7FirewallRules', toValue(args)] as const
}

export function getNetworksNetworkIdL7FirewallRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdL7FirewallRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].l7FirewallRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdL7FirewallRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdL7FirewallRulesQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdL7FirewallRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdL7FirewallRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].l7FirewallRules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdL7FirewallRulesMutationKey() {
  return ['networks', '/networks/:networkId/l7FirewallRules', 'PUT'] as const
}

export function getPutNetworksNetworkIdL7FirewallRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['l7FirewallRules']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdL7FirewallRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].l7FirewallRules.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdL7FirewallRules<
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
                  ReturnType<(typeof client.networks)[':networkId']['l7FirewallRules']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdL7FirewallRulesMutationOptions<
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

export function getNetworksNetworkIdL7FirewallRulesApplicationCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/l7FirewallRules/applicationCategories',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdL7FirewallRulesApplicationCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getNetworksNetworkIdL7FirewallRulesApplicationCategoriesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].l7FirewallRules.applicationCategories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdL7FirewallRulesApplicationCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
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
                    (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
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
                    (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdL7FirewallRulesApplicationCategoriesQueryKey>
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
              (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdL7FirewallRulesApplicationCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getNetworksNetworkIdL7FirewallRulesApplicationCategoriesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].l7FirewallRules.applicationCategories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdLatencyStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['latencyStats']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/latencyStats', toValue(args)] as const
}

export function getNetworksNetworkIdLatencyStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['latencyStats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdLatencyStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].latencyStats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdLatencyStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['latencyStats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['latencyStats']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['latencyStats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['latencyStats']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdLatencyStatsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['latencyStats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdLatencyStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdLatencyStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].latencyStats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdMerakiAuthUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/merakiAuthUsers', toValue(args)] as const
}

export function getNetworksNetworkIdMerakiAuthUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdMerakiAuthUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].merakiAuthUsers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdMerakiAuthUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdMerakiAuthUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdMerakiAuthUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdMerakiAuthUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].merakiAuthUsers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/merakiAuthUsers/:merakiAuthUserId',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].merakiAuthUsers[':merakiAuthUserId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdMerakiAuthUsersMerakiAuthUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
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
                    (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
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
                    (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdQueryKey>
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
              (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].merakiAuthUsers[':merakiAuthUserId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdOneToManyNatRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/oneToManyNatRules', toValue(args)] as const
}

export function getNetworksNetworkIdOneToManyNatRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdOneToManyNatRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].oneToManyNatRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdOneToManyNatRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdOneToManyNatRulesQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdOneToManyNatRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdOneToManyNatRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].oneToManyNatRules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdOneToManyNatRulesMutationKey() {
  return ['networks', '/networks/:networkId/oneToManyNatRules', 'PUT'] as const
}

export function getPutNetworksNetworkIdOneToManyNatRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdOneToManyNatRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].oneToManyNatRules.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdOneToManyNatRules<
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
                  ReturnType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdOneToManyNatRulesMutationOptions<
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

export function getNetworksNetworkIdOneToOneNatRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/oneToOneNatRules', toValue(args)] as const
}

export function getNetworksNetworkIdOneToOneNatRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdOneToOneNatRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].oneToOneNatRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdOneToOneNatRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdOneToOneNatRulesQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdOneToOneNatRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdOneToOneNatRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].oneToOneNatRules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdOneToOneNatRulesMutationKey() {
  return ['networks', '/networks/:networkId/oneToOneNatRules', 'PUT'] as const
}

export function getPutNetworksNetworkIdOneToOneNatRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdOneToOneNatRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].oneToOneNatRules.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdOneToOneNatRules<
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
                  ReturnType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdOneToOneNatRulesMutationOptions<
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

export function getNetworksNetworkIdPiiPiiKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/pii/piiKeys', toValue(args)] as const
}

export function getNetworksNetworkIdPiiPiiKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdPiiPiiKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].pii.piiKeys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdPiiPiiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdPiiPiiKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdPiiPiiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdPiiPiiKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].pii.piiKeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdPiiRequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/pii/requests', toValue(args)] as const
}

export function getNetworksNetworkIdPiiRequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdPiiRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].pii.requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdPiiRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdPiiRequestsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdPiiRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdPiiRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].pii.requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdPiiRequestsMutationKey() {
  return ['networks', '/networks/:networkId/pii/requests', 'POST'] as const
}

export function getPostNetworksNetworkIdPiiRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['requests']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdPiiRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$post']>,
    ) {
      return parseResponse(client.networks[':networkId'].pii.requests.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdPiiRequests<
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
                  ReturnType<(typeof client.networks)[':networkId']['pii']['requests']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksNetworkIdPiiRequestsMutationOptions<
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

export function getNetworksNetworkIdPiiRequestsRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/pii/requests/:requestId', toValue(args)] as const
}

export function getNetworksNetworkIdPiiRequestsRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdPiiRequestsRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].pii.requests[':requestId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdPiiRequestsRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
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
                    (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
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
                    (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdPiiRequestsRequestIdQueryKey>
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
              (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdPiiRequestsRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdPiiRequestsRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].pii.requests[':requestId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteNetworksNetworkIdPiiRequestsRequestIdMutationKey() {
  return ['networks', '/networks/:networkId/pii/requests/:requestId', 'DELETE'] as const
}

export function getDeleteNetworksNetworkIdPiiRequestsRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworksNetworkIdPiiRequestsRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$delete']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].pii.requests[':requestId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNetworksNetworkIdPiiRequestsRequestId<
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
                      (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$delete']
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
  const mutationDefaults = getDeleteNetworksNetworkIdPiiRequestsRequestIdMutationOptions<
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

export function getNetworksNetworkIdPiiSmDevicesForKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/pii/smDevicesForKey', toValue(args)] as const
}

export function getNetworksNetworkIdPiiSmDevicesForKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdPiiSmDevicesForKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].pii.smDevicesForKey.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdPiiSmDevicesForKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']>
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
                    (typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']
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
                    (typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdPiiSmDevicesForKeyQueryKey>
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
            ReturnType<(typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdPiiSmDevicesForKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdPiiSmDevicesForKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].pii.smDevicesForKey.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdPiiSmOwnersForKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/pii/smOwnersForKey', toValue(args)] as const
}

export function getNetworksNetworkIdPiiSmOwnersForKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdPiiSmOwnersForKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].pii.smOwnersForKey.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdPiiSmOwnersForKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>
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
                    (typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']
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
                    (typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdPiiSmOwnersForKeyQueryKey>
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
            ReturnType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdPiiSmOwnersForKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdPiiSmOwnersForKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].pii.smOwnersForKey.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdPortForwardingRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/portForwardingRules', toValue(args)] as const
}

export function getNetworksNetworkIdPortForwardingRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdPortForwardingRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].portForwardingRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdPortForwardingRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdPortForwardingRulesQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdPortForwardingRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdPortForwardingRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].portForwardingRules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdPortForwardingRulesMutationKey() {
  return ['networks', '/networks/:networkId/portForwardingRules', 'PUT'] as const
}

export function getPutNetworksNetworkIdPortForwardingRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['portForwardingRules']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['portForwardingRules']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdPortForwardingRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['portForwardingRules']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].portForwardingRules.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdPortForwardingRules<
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
                  ReturnType<(typeof client.networks)[':networkId']['portForwardingRules']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['portForwardingRules']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdPortForwardingRulesMutationOptions<
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

export function getNetworksNetworkIdSecurityIntrusionSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/security/intrusionSettings', toValue(args)] as const
}

export function getNetworksNetworkIdSecurityIntrusionSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSecurityIntrusionSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].security.intrusionSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSecurityIntrusionSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
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
                    (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
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
                    (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSecurityIntrusionSettingsQueryKey>
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
              (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSecurityIntrusionSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSecurityIntrusionSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].security.intrusionSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdSecurityIntrusionSettingsMutationKey() {
  return ['networks', '/networks/:networkId/security/intrusionSettings', 'PUT'] as const
}

export function getPutNetworksNetworkIdSecurityIntrusionSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['security']['intrusionSettings']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['security']['intrusionSettings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSecurityIntrusionSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['security']['intrusionSettings']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].security.intrusionSettings.$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdSecurityIntrusionSettings<
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
                    (typeof client.networks)[':networkId']['security']['intrusionSettings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['security']['intrusionSettings']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdSecurityIntrusionSettingsMutationOptions<
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

export function getNetworksNetworkIdSecurityMalwareSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['security']['malwareSettings']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/security/malwareSettings', toValue(args)] as const
}

export function getNetworksNetworkIdSecurityMalwareSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['security']['malwareSettings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSecurityMalwareSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].security.malwareSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSecurityMalwareSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':networkId']['security']['malwareSettings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['security']['malwareSettings']['$get']>
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
                    (typeof client.networks)[':networkId']['security']['malwareSettings']['$get']
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
                    (typeof client.networks)[':networkId']['security']['malwareSettings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSecurityMalwareSettingsQueryKey>
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
              (typeof client.networks)[':networkId']['security']['malwareSettings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSecurityMalwareSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSecurityMalwareSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].security.malwareSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdSecurityMalwareSettingsMutationKey() {
  return ['networks', '/networks/:networkId/security/malwareSettings', 'PUT'] as const
}

export function getPutNetworksNetworkIdSecurityMalwareSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['security']['malwareSettings']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['security']['malwareSettings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSecurityMalwareSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['security']['malwareSettings']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].security.malwareSettings.$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdSecurityMalwareSettings<
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
                    (typeof client.networks)[':networkId']['security']['malwareSettings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['security']['malwareSettings']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdSecurityMalwareSettingsMutationOptions<
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

export function getNetworksNetworkIdSecurityEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['securityEvents']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/securityEvents', toValue(args)] as const
}

export function getNetworksNetworkIdSecurityEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['securityEvents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSecurityEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].securityEvents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSecurityEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['securityEvents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['securityEvents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['securityEvents']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['securityEvents']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSecurityEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['securityEvents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSecurityEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSecurityEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].securityEvents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSiteToSiteVpnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/siteToSiteVpn', toValue(args)] as const
}

export function getNetworksNetworkIdSiteToSiteVpnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSiteToSiteVpnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].siteToSiteVpn.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSiteToSiteVpn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSiteToSiteVpnQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSiteToSiteVpnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSiteToSiteVpnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].siteToSiteVpn.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdSiteToSiteVpnMutationKey() {
  return ['networks', '/networks/:networkId/siteToSiteVpn', 'PUT'] as const
}

export function getPutNetworksNetworkIdSiteToSiteVpnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSiteToSiteVpnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].siteToSiteVpn.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdSiteToSiteVpn<
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
                Awaited<ReturnType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdSiteToSiteVpnMutationOptions<
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

export function getPostNetworksNetworkIdSmBypassActivationLockAttemptsMutationKey() {
  return ['networks', '/networks/:networkId/sm/bypassActivationLockAttempts', 'POST'] as const
}

export function getPostNetworksNetworkIdSmBypassActivationLockAttemptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdSmBypassActivationLockAttemptsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts']['$post']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].sm.bypassActivationLockAttempts.$post(args, options),
      )
    },
  })
}

export function usePostNetworksNetworkIdSmBypassActivationLockAttempts<
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
                    (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts']['$post']
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
  const mutationDefaults = getPostNetworksNetworkIdSmBypassActivationLockAttemptsMutationOptions<
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

export function getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts'][':attemptId']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/sm/bypassActivationLockAttempts/:attemptId',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts'][':attemptId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].sm.bypassActivationLockAttempts[':attemptId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useNetworksNetworkIdSmBypassActivationLockAttemptsAttemptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts'][':attemptId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts'][':attemptId']['$get']
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
                    (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts'][':attemptId']['$get']
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
                    (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts'][':attemptId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdQueryKey>
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
              (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts'][':attemptId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].sm.bypassActivationLockAttempts[':attemptId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdSmDeviceFieldsMutationKey() {
  return ['networks', '/networks/:networkId/sm/device/fields', 'PUT'] as const
}

export function getPutNetworksNetworkIdSmDeviceFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networks)[':networkId']['sm']['device']['fields']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['sm']['device']['fields']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSmDeviceFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['sm']['device']['fields']['$put']
      >,
    ) {
      return parseResponse(client.networks[':networkId'].sm.device.fields.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdSmDeviceFields<
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
                    (typeof client.networks)[':networkId']['sm']['device']['fields']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['sm']['device']['fields']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdSmDeviceFieldsMutationOptions<
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

export function getPutNetworksNetworkIdSmDeviceWipeMutationKey() {
  return ['networks', '/networks/:networkId/sm/device/wipe', 'PUT'] as const
}

export function getPutNetworksNetworkIdSmDeviceWipeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networks)[':networkId']['sm']['device']['wipe']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['sm']['device']['wipe']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSmDeviceWipeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['sm']['device']['wipe']['$put']
      >,
    ) {
      return parseResponse(client.networks[':networkId'].sm.device.wipe.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdSmDeviceWipe<
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
                  ReturnType<(typeof client.networks)[':networkId']['sm']['device']['wipe']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['sm']['device']['wipe']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdSmDeviceWipeMutationOptions<
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

export function getPostNetworksNetworkIdSmDeviceDeviceIdRefreshDetailsMutationKey() {
  return ['networks', '/networks/:networkId/sm/device/:deviceId/refreshDetails', 'POST'] as const
}

export function getPostNetworksNetworkIdSmDeviceDeviceIdRefreshDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['sm']['device'][':deviceId']['refreshDetails']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['device'][':deviceId']['refreshDetails']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdSmDeviceDeviceIdRefreshDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['sm']['device'][':deviceId']['refreshDetails']['$post']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].sm.device[':deviceId'].refreshDetails.$post(args, options),
      )
    },
  })
}

export function usePostNetworksNetworkIdSmDeviceDeviceIdRefreshDetails<
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
                    (typeof client.networks)[':networkId']['sm']['device'][':deviceId']['refreshDetails']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['sm']['device'][':deviceId']['refreshDetails']['$post']
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
  const mutationDefaults = getPostNetworksNetworkIdSmDeviceDeviceIdRefreshDetailsMutationOptions<
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

export function getNetworksNetworkIdSmDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/sm/devices', toValue(args)] as const
}

export function getNetworksNetworkIdSmDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].sm.devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmDevicesQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].sm.devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdSmDevicesCheckinMutationKey() {
  return ['networks', '/networks/:networkId/sm/devices/checkin', 'PUT'] as const
}

export function getPutNetworksNetworkIdSmDevicesCheckinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networks)[':networkId']['sm']['devices']['checkin']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['checkin']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSmDevicesCheckinMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['sm']['devices']['checkin']['$put']
      >,
    ) {
      return parseResponse(client.networks[':networkId'].sm.devices.checkin.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdSmDevicesCheckin<
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
                    (typeof client.networks)[':networkId']['sm']['devices']['checkin']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['sm']['devices']['checkin']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdSmDevicesCheckinMutationOptions<
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

export function getPutNetworksNetworkIdSmDevicesTagsMutationKey() {
  return ['networks', '/networks/:networkId/sm/devices/tags', 'PUT'] as const
}

export function getPutNetworksNetworkIdSmDevicesTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networks)[':networkId']['sm']['devices']['tags']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['tags']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSmDevicesTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['sm']['devices']['tags']['$put']
      >,
    ) {
      return parseResponse(client.networks[':networkId'].sm.devices.tags.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdSmDevicesTags<
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
                    (typeof client.networks)[':networkId']['sm']['devices']['tags']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['tags']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdSmDevicesTagsMutationOptions<
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

export function getPostNetworksNetworkIdSmDevicesDeviceIdUnenrollMutationKey() {
  return ['networks', '/networks/:networkId/sm/devices/:deviceId/unenroll', 'POST'] as const
}

export function getPostNetworksNetworkIdSmDevicesDeviceIdUnenrollMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['unenroll']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['unenroll']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdSmDevicesDeviceIdUnenrollMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['unenroll']['$post']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].sm.devices[':deviceId'].unenroll.$post(args, options),
      )
    },
  })
}

export function usePostNetworksNetworkIdSmDevicesDeviceIdUnenroll<
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
                    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['unenroll']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['unenroll']['$post']
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
  const mutationDefaults = getPostNetworksNetworkIdSmDevicesDeviceIdUnenrollMutationOptions<
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

export function getNetworksNetworkIdSmProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/sm/profiles', toValue(args)] as const
}

export function getNetworksNetworkIdSmProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].sm.profiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmProfilesQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].sm.profiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSmTargetGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/sm/targetGroups', toValue(args)] as const
}

export function getNetworksNetworkIdSmTargetGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmTargetGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].sm.targetGroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmTargetGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmTargetGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmTargetGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmTargetGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].sm.targetGroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdSmTargetGroupsMutationKey() {
  return ['networks', '/networks/:networkId/sm/targetGroups', 'POST'] as const
}

export function getPostNetworksNetworkIdSmTargetGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdSmTargetGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$post']>,
    ) {
      return parseResponse(client.networks[':networkId'].sm.targetGroups.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdSmTargetGroups<
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
                  ReturnType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksNetworkIdSmTargetGroupsMutationOptions<
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

export function getNetworksNetworkIdSmTargetGroupsTargetGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/sm/targetGroups/:targetGroupId', toValue(args)] as const
}

export function getNetworksNetworkIdSmTargetGroupsTargetGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmTargetGroupsTargetGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].sm.targetGroups[':targetGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmTargetGroupsTargetGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
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
                    (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
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
                    (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmTargetGroupsTargetGroupIdQueryKey>
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
              (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmTargetGroupsTargetGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmTargetGroupsTargetGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].sm.targetGroups[':targetGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdSmTargetGroupsTargetGroupIdMutationKey() {
  return ['networks', '/networks/:networkId/sm/targetGroups/:targetGroupId', 'PUT'] as const
}

export function getPutNetworksNetworkIdSmTargetGroupsTargetGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSmTargetGroupsTargetGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].sm.targetGroups[':targetGroupId'].$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdSmTargetGroupsTargetGroupId<
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
                    (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdSmTargetGroupsTargetGroupIdMutationOptions<
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

export function getDeleteNetworksNetworkIdSmTargetGroupsTargetGroupIdMutationKey() {
  return ['networks', '/networks/:networkId/sm/targetGroups/:targetGroupId', 'DELETE'] as const
}

export function getDeleteNetworksNetworkIdSmTargetGroupsTargetGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworksNetworkIdSmTargetGroupsTargetGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].sm.targetGroups[':targetGroupId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNetworksNetworkIdSmTargetGroupsTargetGroupId<
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
                      (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$delete']
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
  const mutationDefaults = getDeleteNetworksNetworkIdSmTargetGroupsTargetGroupIdMutationOptions<
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

export function getNetworksNetworkIdSmUserUserIdDeviceProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/sm/user/:userId/deviceProfiles', toValue(args)] as const
}

export function getNetworksNetworkIdSmUserUserIdDeviceProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmUserUserIdDeviceProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].sm.user[':userId'].deviceProfiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmUserUserIdDeviceProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
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
                    (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
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
                    (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmUserUserIdDeviceProfilesQueryKey>
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
              (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmUserUserIdDeviceProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmUserUserIdDeviceProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].sm.user[':userId'].deviceProfiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSmUserUserIdSoftwaresQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/sm/user/:userId/softwares', toValue(args)] as const
}

export function getNetworksNetworkIdSmUserUserIdSoftwaresQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmUserUserIdSoftwaresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].sm.user[':userId'].softwares.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmUserUserIdSoftwares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
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
                    (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
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
                    (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmUserUserIdSoftwaresQueryKey>
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
              (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmUserUserIdSoftwaresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmUserUserIdSoftwaresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].sm.user[':userId'].softwares.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSmUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm']['users']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/sm/users', toValue(args)] as const
}

export function getNetworksNetworkIdSmUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].sm.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].sm.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSmDeviceIdCellularUsageHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/sm/:deviceId/cellularUsageHistory',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdSmDeviceIdCellularUsageHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmDeviceIdCellularUsageHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].sm[':deviceId'].cellularUsageHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmDeviceIdCellularUsageHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmDeviceIdCellularUsageHistoryQueryKey>
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
              (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmDeviceIdCellularUsageHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmDeviceIdCellularUsageHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].sm[':deviceId'].cellularUsageHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSmDeviceIdCertsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/certs', toValue(args)] as const
}

export function getNetworksNetworkIdSmDeviceIdCertsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmDeviceIdCertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].sm[':deviceId'].certs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmDeviceIdCerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']>
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmDeviceIdCertsQueryKey>
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
            ReturnType<(typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmDeviceIdCertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmDeviceIdCertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].sm[':deviceId'].certs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSmDeviceIdDeviceProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/deviceProfiles', toValue(args)] as const
}

export function getNetworksNetworkIdSmDeviceIdDeviceProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmDeviceIdDeviceProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].sm[':deviceId'].deviceProfiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmDeviceIdDeviceProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmDeviceIdDeviceProfilesQueryKey>
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
              (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmDeviceIdDeviceProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmDeviceIdDeviceProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].sm[':deviceId'].deviceProfiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSmDeviceIdNetworkAdaptersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/networkAdapters', toValue(args)] as const
}

export function getNetworksNetworkIdSmDeviceIdNetworkAdaptersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmDeviceIdNetworkAdaptersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].sm[':deviceId'].networkAdapters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmDeviceIdNetworkAdapters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmDeviceIdNetworkAdaptersQueryKey>
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
              (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmDeviceIdNetworkAdaptersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmDeviceIdNetworkAdaptersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].sm[':deviceId'].networkAdapters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSmDeviceIdRestrictionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/restrictions', toValue(args)] as const
}

export function getNetworksNetworkIdSmDeviceIdRestrictionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmDeviceIdRestrictionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].sm[':deviceId'].restrictions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmDeviceIdRestrictions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmDeviceIdRestrictionsQueryKey>
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
              (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmDeviceIdRestrictionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmDeviceIdRestrictionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].sm[':deviceId'].restrictions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSmDeviceIdSecurityCentersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/securityCenters', toValue(args)] as const
}

export function getNetworksNetworkIdSmDeviceIdSecurityCentersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmDeviceIdSecurityCentersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].sm[':deviceId'].securityCenters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmDeviceIdSecurityCenters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmDeviceIdSecurityCentersQueryKey>
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
              (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmDeviceIdSecurityCentersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmDeviceIdSecurityCentersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].sm[':deviceId'].securityCenters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSmDeviceIdSoftwaresQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/softwares', toValue(args)] as const
}

export function getNetworksNetworkIdSmDeviceIdSoftwaresQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmDeviceIdSoftwaresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].sm[':deviceId'].softwares.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmDeviceIdSoftwares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']>
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmDeviceIdSoftwaresQueryKey>
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
              (typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmDeviceIdSoftwaresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmDeviceIdSoftwaresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].sm[':deviceId'].softwares.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSmDeviceIdWlanListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/wlanLists', toValue(args)] as const
}

export function getNetworksNetworkIdSmDeviceIdWlanListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmDeviceIdWlanListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].sm[':deviceId'].wlanLists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmDeviceIdWlanLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']>
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmDeviceIdWlanListsQueryKey>
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
              (typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmDeviceIdWlanListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmDeviceIdWlanListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].sm[':deviceId'].wlanLists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSnmpSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/snmpSettings', toValue(args)] as const
}

export function getNetworksNetworkIdSnmpSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSnmpSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].snmpSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSnmpSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSnmpSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSnmpSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSnmpSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].snmpSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSplashLoginAttemptsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/splashLoginAttempts', toValue(args)] as const
}

export function getNetworksNetworkIdSplashLoginAttemptsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSplashLoginAttemptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].splashLoginAttempts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSplashLoginAttempts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSplashLoginAttemptsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSplashLoginAttemptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSplashLoginAttemptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].splashLoginAttempts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdSplitMutationKey() {
  return ['networks', '/networks/:networkId/split', 'POST'] as const
}

export function getPostNetworksNetworkIdSplitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['split']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['split']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdSplitMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['split']['$post']>,
    ) {
      return parseResponse(client.networks[':networkId'].split.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdSplit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['split']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['split']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksNetworkIdSplitMutationOptions<TError, TOnMutateResult>(
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

export function getNetworksNetworkIdSsidsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':networkId']['ssids']['$get']>>,
) {
  return ['networks', '/networks/:networkId/ssids', toValue(args)] as const
}

export function getNetworksNetworkIdSsidsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':networkId']['ssids']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSsidsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].ssids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSsids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':networkId']['ssids']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSsidsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSsidsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSsidsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].ssids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSsidsNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/ssids/:number', toValue(args)] as const
}

export function getNetworksNetworkIdSsidsNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSsidsNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].ssids[':number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSsidsNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSsidsNumberQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSsidsNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSsidsNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].ssids[':number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdSsidsNumberMutationKey() {
  return ['networks', '/networks/:networkId/ssids/:number', 'PUT'] as const
}

export function getPutNetworksNetworkIdSsidsNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids'][':number']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSsidsNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].ssids[':number'].$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdSsidsNumber<
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
                  ReturnType<(typeof client.networks)[':networkId']['ssids'][':number']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdSsidsNumberMutationOptions<
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

export function getNetworksNetworkIdSsidsNumberL3FirewallRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/ssids/:number/l3FirewallRules', toValue(args)] as const
}

export function getNetworksNetworkIdSsidsNumberL3FirewallRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSsidsNumberL3FirewallRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].ssids[':number'].l3FirewallRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSsidsNumberL3FirewallRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
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
                    (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
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
                    (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSsidsNumberL3FirewallRulesQueryKey>
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
              (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSsidsNumberL3FirewallRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSsidsNumberL3FirewallRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].ssids[':number'].l3FirewallRules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdSsidsNumberL3FirewallRulesMutationKey() {
  return ['networks', '/networks/:networkId/ssids/:number/l3FirewallRules', 'PUT'] as const
}

export function getPutNetworksNetworkIdSsidsNumberL3FirewallRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSsidsNumberL3FirewallRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].ssids[':number'].l3FirewallRules.$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdSsidsNumberL3FirewallRules<
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
                    (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdSsidsNumberL3FirewallRulesMutationOptions<
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

export function getNetworksNetworkIdSsidsNumberSplashSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/ssids/:number/splashSettings', toValue(args)] as const
}

export function getNetworksNetworkIdSsidsNumberSplashSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSsidsNumberSplashSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].ssids[':number'].splashSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSsidsNumberSplashSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
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
                    (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
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
                    (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSsidsNumberSplashSettingsQueryKey>
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
              (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSsidsNumberSplashSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSsidsNumberSplashSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].ssids[':number'].splashSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdSsidsNumberSplashSettingsMutationKey() {
  return ['networks', '/networks/:networkId/ssids/:number/splashSettings', 'PUT'] as const
}

export function getPutNetworksNetworkIdSsidsNumberSplashSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSsidsNumberSplashSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].ssids[':number'].splashSettings.$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdSsidsNumberSplashSettings<
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
                    (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdSsidsNumberSplashSettingsMutationOptions<
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

export function getNetworksNetworkIdStaticRoutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/staticRoutes', toValue(args)] as const
}

export function getNetworksNetworkIdStaticRoutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdStaticRoutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].staticRoutes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdStaticRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdStaticRoutesQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdStaticRoutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdStaticRoutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].staticRoutes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdStaticRoutesMutationKey() {
  return ['networks', '/networks/:networkId/staticRoutes', 'POST'] as const
}

export function getPostNetworksNetworkIdStaticRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['staticRoutes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdStaticRoutesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$post']>,
    ) {
      return parseResponse(client.networks[':networkId'].staticRoutes.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdStaticRoutes<
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
                Awaited<ReturnType<(typeof client.networks)[':networkId']['staticRoutes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksNetworkIdStaticRoutesMutationOptions<
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

export function getNetworksNetworkIdStaticRoutesStaticRouteIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/staticRoutes/:staticRouteId', toValue(args)] as const
}

export function getNetworksNetworkIdStaticRoutesStaticRouteIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdStaticRoutesStaticRouteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].staticRoutes[':staticRouteId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdStaticRoutesStaticRouteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
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
                    (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
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
                    (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdStaticRoutesStaticRouteIdQueryKey>
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
              (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdStaticRoutesStaticRouteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdStaticRoutesStaticRouteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].staticRoutes[':staticRouteId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdStaticRoutesStaticRouteIdMutationKey() {
  return ['networks', '/networks/:networkId/staticRoutes/:staticRouteId', 'PUT'] as const
}

export function getPutNetworksNetworkIdStaticRoutesStaticRouteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdStaticRoutesStaticRouteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].staticRoutes[':staticRouteId'].$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdStaticRoutesStaticRouteId<
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
                    (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdStaticRoutesStaticRouteIdMutationOptions<
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

export function getDeleteNetworksNetworkIdStaticRoutesStaticRouteIdMutationKey() {
  return ['networks', '/networks/:networkId/staticRoutes/:staticRouteId', 'DELETE'] as const
}

export function getDeleteNetworksNetworkIdStaticRoutesStaticRouteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworksNetworkIdStaticRoutesStaticRouteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$delete']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].staticRoutes[':staticRouteId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNetworksNetworkIdStaticRoutesStaticRouteId<
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
                      (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$delete']
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
  const mutationDefaults = getDeleteNetworksNetworkIdStaticRoutesStaticRouteIdMutationOptions<
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

export function getPostNetworksNetworkIdSwapWarmSpareMutationKey() {
  return ['networks', '/networks/:networkId/swapWarmSpare', 'POST'] as const
}

export function getPostNetworksNetworkIdSwapWarmSpareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['swapWarmSpare']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['swapWarmSpare']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdSwapWarmSpareMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['swapWarmSpare']['$post']>,
    ) {
      return parseResponse(client.networks[':networkId'].swapWarmSpare.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdSwapWarmSpare<
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
                  ReturnType<(typeof client.networks)[':networkId']['swapWarmSpare']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['swapWarmSpare']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksNetworkIdSwapWarmSpareMutationOptions<
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

export function getNetworksNetworkIdSwitchLinkAggregationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/switch/linkAggregations', toValue(args)] as const
}

export function getNetworksNetworkIdSwitchLinkAggregationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSwitchLinkAggregationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].switch.linkAggregations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSwitchLinkAggregations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']>
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
                    (typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSwitchLinkAggregationsQueryKey>
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
            ReturnType<(typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSwitchLinkAggregationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSwitchLinkAggregationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].switch.linkAggregations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdSwitchLinkAggregationsMutationKey() {
  return ['networks', '/networks/:networkId/switch/linkAggregations', 'POST'] as const
}

export function getPostNetworksNetworkIdSwitchLinkAggregationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['switch']['linkAggregations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['switch']['linkAggregations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdSwitchLinkAggregationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['switch']['linkAggregations']['$post']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].switch.linkAggregations.$post(args, options),
      )
    },
  })
}

export function usePostNetworksNetworkIdSwitchLinkAggregations<
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
                    (typeof client.networks)[':networkId']['switch']['linkAggregations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['switch']['linkAggregations']['$post']
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
  const mutationDefaults = getPostNetworksNetworkIdSwitchLinkAggregationsMutationOptions<
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

export function getPutNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdMutationKey() {
  return [
    'networks',
    '/networks/:networkId/switch/linkAggregations/:linkAggregationId',
    'PUT',
  ] as const
}

export function getPutNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['switch']['linkAggregations'][':linkAggregationId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['linkAggregations'][':linkAggregationId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['switch']['linkAggregations'][':linkAggregationId']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].switch.linkAggregations[':linkAggregationId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutNetworksNetworkIdSwitchLinkAggregationsLinkAggregationId<
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
                    (typeof client.networks)[':networkId']['switch']['linkAggregations'][':linkAggregationId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['switch']['linkAggregations'][':linkAggregationId']['$put']
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
    getPutNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdMutationOptions<
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

export function getDeleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdMutationKey() {
  return [
    'networks',
    '/networks/:networkId/switch/linkAggregations/:linkAggregationId',
    'DELETE',
  ] as const
}

export function getDeleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.networks)[':networkId']['switch']['linkAggregations'][':linkAggregationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['linkAggregations'][':linkAggregationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['switch']['linkAggregations'][':linkAggregationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].switch.linkAggregations[':linkAggregationId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationId<
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
                      (typeof client.networks)[':networkId']['switch']['linkAggregations'][':linkAggregationId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['switch']['linkAggregations'][':linkAggregationId']['$delete']
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
    getDeleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdMutationOptions<
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

export function getNetworksNetworkIdSwitchPortSchedulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/switch/portSchedules', toValue(args)] as const
}

export function getNetworksNetworkIdSwitchPortSchedulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSwitchPortSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].switch.portSchedules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSwitchPortSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$get']>
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
                    (typeof client.networks)[':networkId']['switch']['portSchedules']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['portSchedules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSwitchPortSchedulesQueryKey>
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
            ReturnType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSwitchPortSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSwitchPortSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].switch.portSchedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdSwitchPortSchedulesMutationKey() {
  return ['networks', '/networks/:networkId/switch/portSchedules', 'POST'] as const
}

export function getPostNetworksNetworkIdSwitchPortSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdSwitchPortSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['switch']['portSchedules']['$post']
      >,
    ) {
      return parseResponse(client.networks[':networkId'].switch.portSchedules.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdSwitchPortSchedules<
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
                    (typeof client.networks)[':networkId']['switch']['portSchedules']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['switch']['portSchedules']['$post']
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
  const mutationDefaults = getPostNetworksNetworkIdSwitchPortSchedulesMutationOptions<
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

export function getPutNetworksNetworkIdSwitchPortSchedulesPortScheduleIdMutationKey() {
  return ['networks', '/networks/:networkId/switch/portSchedules/:portScheduleId', 'PUT'] as const
}

export function getPutNetworksNetworkIdSwitchPortSchedulesPortScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['switch']['portSchedules'][':portScheduleId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['portSchedules'][':portScheduleId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSwitchPortSchedulesPortScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['switch']['portSchedules'][':portScheduleId']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].switch.portSchedules[':portScheduleId'].$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdSwitchPortSchedulesPortScheduleId<
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
                    (typeof client.networks)[':networkId']['switch']['portSchedules'][':portScheduleId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['switch']['portSchedules'][':portScheduleId']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdSwitchPortSchedulesPortScheduleIdMutationOptions<
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

export function getDeleteNetworksNetworkIdSwitchPortSchedulesPortScheduleIdMutationKey() {
  return [
    'networks',
    '/networks/:networkId/switch/portSchedules/:portScheduleId',
    'DELETE',
  ] as const
}

export function getDeleteNetworksNetworkIdSwitchPortSchedulesPortScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.networks)[':networkId']['switch']['portSchedules'][':portScheduleId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['portSchedules'][':portScheduleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworksNetworkIdSwitchPortSchedulesPortScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['switch']['portSchedules'][':portScheduleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].switch.portSchedules[':portScheduleId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteNetworksNetworkIdSwitchPortSchedulesPortScheduleId<
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
                      (typeof client.networks)[':networkId']['switch']['portSchedules'][':portScheduleId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['switch']['portSchedules'][':portScheduleId']['$delete']
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
    getDeleteNetworksNetworkIdSwitchPortSchedulesPortScheduleIdMutationOptions<
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

export function getNetworksNetworkIdSwitchSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings', toValue(args)] as const
}

export function getNetworksNetworkIdSwitchSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSwitchSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSwitchSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSwitchSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSwitchSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSwitchSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].switch.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdSwitchSettingsMutationKey() {
  return ['networks', '/networks/:networkId/switch/settings', 'PUT'] as const
}

export function getPutNetworksNetworkIdSwitchSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSwitchSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].switch.settings.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdSwitchSettings<
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
                  ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdSwitchSettingsMutationOptions<
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

export function getNetworksNetworkIdSwitchSettingsMtuQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/mtu', toValue(args)] as const
}

export function getNetworksNetworkIdSwitchSettingsMtuQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSwitchSettingsMtuQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.mtu.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSwitchSettingsMtu<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']>
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
                    (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSwitchSettingsMtuQueryKey>
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
            ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSwitchSettingsMtuQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSwitchSettingsMtuQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].switch.settings.mtu.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdSwitchSettingsMtuMutationKey() {
  return ['networks', '/networks/:networkId/switch/settings/mtu', 'PUT'] as const
}

export function getPutNetworksNetworkIdSwitchSettingsMtuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['mtu']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['mtu']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSwitchSettingsMtuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$put']
      >,
    ) {
      return parseResponse(client.networks[':networkId'].switch.settings.mtu.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdSwitchSettingsMtu<
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
                    (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdSwitchSettingsMtuMutationOptions<
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

export function getNetworksNetworkIdSwitchSettingsMulticastQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/multicast', toValue(args)] as const
}

export function getNetworksNetworkIdSwitchSettingsMulticastQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSwitchSettingsMulticastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.multicast.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSwitchSettingsMulticast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSwitchSettingsMulticastQueryKey>
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
              (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSwitchSettingsMulticastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSwitchSettingsMulticastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].switch.settings.multicast.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdSwitchSettingsMulticastMutationKey() {
  return ['networks', '/networks/:networkId/switch/settings/multicast', 'PUT'] as const
}

export function getPutNetworksNetworkIdSwitchSettingsMulticastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSwitchSettingsMulticastMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.multicast.$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdSwitchSettingsMulticast<
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
                    (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdSwitchSettingsMulticastMutationOptions<
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

export function getNetworksNetworkIdSwitchSettingsQosRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/qosRules', toValue(args)] as const
}

export function getNetworksNetworkIdSwitchSettingsQosRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSwitchSettingsQosRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.qosRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSwitchSettingsQosRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSwitchSettingsQosRulesQueryKey>
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
              (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSwitchSettingsQosRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSwitchSettingsQosRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].switch.settings.qosRules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdSwitchSettingsQosRulesMutationKey() {
  return ['networks', '/networks/:networkId/switch/settings/qosRules', 'POST'] as const
}

export function getPostNetworksNetworkIdSwitchSettingsQosRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdSwitchSettingsQosRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$post']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.qosRules.$post(args, options),
      )
    },
  })
}

export function usePostNetworksNetworkIdSwitchSettingsQosRules<
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
                    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$post']
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
  const mutationDefaults = getPostNetworksNetworkIdSwitchSettingsQosRulesMutationOptions<
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

export function getNetworksNetworkIdSwitchSettingsQosRulesOrderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/qosRules/order', toValue(args)] as const
}

export function getNetworksNetworkIdSwitchSettingsQosRulesOrderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSwitchSettingsQosRulesOrderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.qosRules.order.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSwitchSettingsQosRulesOrder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSwitchSettingsQosRulesOrderQueryKey>
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
              (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSwitchSettingsQosRulesOrderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSwitchSettingsQosRulesOrderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].switch.settings.qosRules.order.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdSwitchSettingsQosRulesOrderMutationKey() {
  return ['networks', '/networks/:networkId/switch/settings/qosRules/order', 'PUT'] as const
}

export function getPutNetworksNetworkIdSwitchSettingsQosRulesOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSwitchSettingsQosRulesOrderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.qosRules.order.$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdSwitchSettingsQosRulesOrder<
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
                    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdSwitchSettingsQosRulesOrderMutationOptions<
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

export function getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/switch/settings/qosRules/:qosRuleId',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.qosRules[':qosRuleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSwitchSettingsQosRulesQosRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdQueryKey>
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
              (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].switch.settings.qosRules[':qosRuleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdMutationKey() {
  return ['networks', '/networks/:networkId/switch/settings/qosRules/:qosRuleId', 'PUT'] as const
}

export function getPutNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.qosRules[':qosRuleId'].$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdSwitchSettingsQosRulesQosRuleId<
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
                    (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdMutationOptions<
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

export function getDeleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdMutationKey() {
  return ['networks', '/networks/:networkId/switch/settings/qosRules/:qosRuleId', 'DELETE'] as const
}

export function getDeleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.qosRules[':qosRuleId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleId<
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
                      (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$delete']
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
  const mutationDefaults = getDeleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdMutationOptions<
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

export function getNetworksNetworkIdSwitchSettingsStormControlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/stormControl', toValue(args)] as const
}

export function getNetworksNetworkIdSwitchSettingsStormControlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSwitchSettingsStormControlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.stormControl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSwitchSettingsStormControl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSwitchSettingsStormControlQueryKey>
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
              (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSwitchSettingsStormControlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSwitchSettingsStormControlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].switch.settings.stormControl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdSwitchSettingsStormControlMutationKey() {
  return ['networks', '/networks/:networkId/switch/settings/stormControl', 'PUT'] as const
}

export function getPutNetworksNetworkIdSwitchSettingsStormControlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSwitchSettingsStormControlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.stormControl.$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdSwitchSettingsStormControl<
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
                    (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdSwitchSettingsStormControlMutationOptions<
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

export function getNetworksNetworkIdSwitchStacksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/switchStacks', toValue(args)] as const
}

export function getNetworksNetworkIdSwitchStacksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSwitchStacksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].switchStacks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSwitchStacks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['switchStacks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['switchStacks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['switchStacks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSwitchStacksQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['switchStacks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSwitchStacksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSwitchStacksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].switchStacks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdSwitchStacksMutationKey() {
  return ['networks', '/networks/:networkId/switchStacks', 'POST'] as const
}

export function getPostNetworksNetworkIdSwitchStacksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['switchStacks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdSwitchStacksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$post']>,
    ) {
      return parseResponse(client.networks[':networkId'].switchStacks.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdSwitchStacks<
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
                Awaited<ReturnType<(typeof client.networks)[':networkId']['switchStacks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksNetworkIdSwitchStacksMutationOptions<
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

export function getNetworksNetworkIdSwitchStacksSwitchStackIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
    >
  >,
) {
  return ['networks', '/networks/:networkId/switchStacks/:switchStackId', toValue(args)] as const
}

export function getNetworksNetworkIdSwitchStacksSwitchStackIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSwitchStacksSwitchStackIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].switchStacks[':switchStackId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSwitchStacksSwitchStackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
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
                    (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
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
                    (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSwitchStacksSwitchStackIdQueryKey>
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
              (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSwitchStacksSwitchStackIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSwitchStacksSwitchStackIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].switchStacks[':switchStackId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteNetworksNetworkIdSwitchStacksSwitchStackIdMutationKey() {
  return ['networks', '/networks/:networkId/switchStacks/:switchStackId', 'DELETE'] as const
}

export function getDeleteNetworksNetworkIdSwitchStacksSwitchStackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworksNetworkIdSwitchStacksSwitchStackIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$delete']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].switchStacks[':switchStackId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNetworksNetworkIdSwitchStacksSwitchStackId<
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
                      (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$delete']
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
  const mutationDefaults = getDeleteNetworksNetworkIdSwitchStacksSwitchStackIdMutationOptions<
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

export function getPostNetworksNetworkIdSwitchStacksSwitchStackIdAddMutationKey() {
  return ['networks', '/networks/:networkId/switchStacks/:switchStackId/add', 'POST'] as const
}

export function getPostNetworksNetworkIdSwitchStacksSwitchStackIdAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['add']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['add']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdSwitchStacksSwitchStackIdAddMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['add']['$post']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].switchStacks[':switchStackId'].add.$post(args, options),
      )
    },
  })
}

export function usePostNetworksNetworkIdSwitchStacksSwitchStackIdAdd<
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
                    (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['add']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['add']['$post']
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
  const mutationDefaults = getPostNetworksNetworkIdSwitchStacksSwitchStackIdAddMutationOptions<
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

export function getPostNetworksNetworkIdSwitchStacksSwitchStackIdRemoveMutationKey() {
  return ['networks', '/networks/:networkId/switchStacks/:switchStackId/remove', 'POST'] as const
}

export function getPostNetworksNetworkIdSwitchStacksSwitchStackIdRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdSwitchStacksSwitchStackIdRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].switchStacks[':switchStackId'].remove.$post(args, options),
      )
    },
  })
}

export function usePostNetworksNetworkIdSwitchStacksSwitchStackIdRemove<
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
                    (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['remove']['$post']
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
  const mutationDefaults = getPostNetworksNetworkIdSwitchStacksSwitchStackIdRemoveMutationOptions<
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

export function getNetworksNetworkIdSyslogServersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/syslogServers', toValue(args)] as const
}

export function getNetworksNetworkIdSyslogServersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSyslogServersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].syslogServers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSyslogServers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['syslogServers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['syslogServers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['syslogServers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSyslogServersQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['syslogServers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSyslogServersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSyslogServersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].syslogServers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdSyslogServersMutationKey() {
  return ['networks', '/networks/:networkId/syslogServers', 'PUT'] as const
}

export function getPutNetworksNetworkIdSyslogServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['syslogServers']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSyslogServersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].syslogServers.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdSyslogServers<
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
                Awaited<ReturnType<(typeof client.networks)[':networkId']['syslogServers']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdSyslogServersMutationOptions<
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

export function getNetworksNetworkIdTrafficQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['traffic']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/traffic', toValue(args)] as const
}

export function getNetworksNetworkIdTrafficQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['traffic']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdTrafficQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].traffic.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdTraffic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['traffic']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['traffic']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['traffic']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['traffic']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdTrafficQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['traffic']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdTrafficQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdTrafficQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].traffic.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdUnbindMutationKey() {
  return ['networks', '/networks/:networkId/unbind', 'POST'] as const
}

export function getPostNetworksNetworkIdUnbindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['unbind']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['unbind']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdUnbindMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['unbind']['$post']>,
    ) {
      return parseResponse(client.networks[':networkId'].unbind.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdUnbind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['unbind']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['unbind']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksNetworkIdUnbindMutationOptions<TError, TOnMutateResult>(
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

export function getNetworksNetworkIdUplinkSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/uplinkSettings', toValue(args)] as const
}

export function getNetworksNetworkIdUplinkSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdUplinkSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].uplinkSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdUplinkSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdUplinkSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdUplinkSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdUplinkSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].uplinkSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdUplinkSettingsMutationKey() {
  return ['networks', '/networks/:networkId/uplinkSettings', 'PUT'] as const
}

export function getPutNetworksNetworkIdUplinkSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['uplinkSettings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdUplinkSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].uplinkSettings.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdUplinkSettings<
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
                  ReturnType<(typeof client.networks)[':networkId']['uplinkSettings']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdUplinkSettingsMutationOptions<
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

export function getNetworksNetworkIdVlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':networkId']['vlans']['$get']>>,
) {
  return ['networks', '/networks/:networkId/vlans', toValue(args)] as const
}

export function getNetworksNetworkIdVlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':networkId']['vlans']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdVlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].vlans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdVlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':networkId']['vlans']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdVlansQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdVlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdVlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].vlans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdVlansMutationKey() {
  return ['networks', '/networks/:networkId/vlans', 'POST'] as const
}

export function getPostNetworksNetworkIdVlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['vlans']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdVlansMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['vlans']['$post']>,
    ) {
      return parseResponse(client.networks[':networkId'].vlans.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdVlans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['vlans']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksNetworkIdVlansMutationOptions<TError, TOnMutateResult>(
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

export function getNetworksNetworkIdVlansVlanIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/vlans/:vlanId', toValue(args)] as const
}

export function getNetworksNetworkIdVlansVlanIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdVlansVlanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].vlans[':vlanId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdVlansVlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdVlansVlanIdQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdVlansVlanIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdVlansVlanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].vlans[':vlanId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdVlansVlanIdMutationKey() {
  return ['networks', '/networks/:networkId/vlans/:vlanId', 'PUT'] as const
}

export function getPutNetworksNetworkIdVlansVlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdVlansVlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].vlans[':vlanId'].$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdVlansVlanId<
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
                  ReturnType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdVlansVlanIdMutationOptions<
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

export function getDeleteNetworksNetworkIdVlansVlanIdMutationKey() {
  return ['networks', '/networks/:networkId/vlans/:vlanId', 'DELETE'] as const
}

export function getDeleteNetworksNetworkIdVlansVlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworksNetworkIdVlansVlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$delete']>,
    ) {
      return parseResponse(client.networks[':networkId'].vlans[':vlanId'].$delete(args, options))
    },
  })
}

export function useDeleteNetworksNetworkIdVlansVlanId<
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
                      (typeof client.networks)[':networkId']['vlans'][':vlanId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNetworksNetworkIdVlansVlanIdMutationOptions<
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

export function getNetworksNetworkIdVlansEnabledStateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/vlansEnabledState', toValue(args)] as const
}

export function getNetworksNetworkIdVlansEnabledStateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdVlansEnabledStateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].vlansEnabledState.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdVlansEnabledState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdVlansEnabledStateQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdVlansEnabledStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdVlansEnabledStateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].vlansEnabledState.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdVlansEnabledStateMutationKey() {
  return ['networks', '/networks/:networkId/vlansEnabledState', 'PUT'] as const
}

export function getPutNetworksNetworkIdVlansEnabledStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['vlansEnabledState']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdVlansEnabledStateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].vlansEnabledState.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdVlansEnabledState<
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
                  ReturnType<(typeof client.networks)[':networkId']['vlansEnabledState']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdVlansEnabledStateMutationOptions<
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

export function getNetworksNetworkIdWarmSpareSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/warmSpareSettings', toValue(args)] as const
}

export function getNetworksNetworkIdWarmSpareSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdWarmSpareSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].warmSpareSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdWarmSpareSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdWarmSpareSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdWarmSpareSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdWarmSpareSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].warmSpareSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdWarmSpareSettingsMutationKey() {
  return ['networks', '/networks/:networkId/warmSpareSettings', 'PUT'] as const
}

export function getPutNetworksNetworkIdWarmSpareSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['warmSpareSettings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdWarmSpareSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$put']>,
    ) {
      return parseResponse(client.networks[':networkId'].warmSpareSettings.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdWarmSpareSettings<
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
                  ReturnType<(typeof client.networks)[':networkId']['warmSpareSettings']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdWarmSpareSettingsMutationOptions<
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

export function getNetworksNetworkIdWirelessRfProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/wireless/rfProfiles', toValue(args)] as const
}

export function getNetworksNetworkIdWirelessRfProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdWirelessRfProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].wireless.rfProfiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdWirelessRfProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']>
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
                    (typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']
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
                    (typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdWirelessRfProfilesQueryKey>
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
            ReturnType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdWirelessRfProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdWirelessRfProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].wireless.rfProfiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdWirelessRfProfilesMutationKey() {
  return ['networks', '/networks/:networkId/wireless/rfProfiles', 'POST'] as const
}

export function getPostNetworksNetworkIdWirelessRfProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdWirelessRfProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['wireless']['rfProfiles']['$post']
      >,
    ) {
      return parseResponse(client.networks[':networkId'].wireless.rfProfiles.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdWirelessRfProfiles<
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
                    (typeof client.networks)[':networkId']['wireless']['rfProfiles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['wireless']['rfProfiles']['$post']
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
  const mutationDefaults = getPostNetworksNetworkIdWirelessRfProfilesMutationOptions<
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

export function getNetworksNetworkIdWirelessRfProfilesRfProfileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
    >
  >,
) {
  return [
    'networks',
    '/networks/:networkId/wireless/rfProfiles/:rfProfileId',
    toValue(args),
  ] as const
}

export function getNetworksNetworkIdWirelessRfProfilesRfProfileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdWirelessRfProfilesRfProfileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].wireless.rfProfiles[':rfProfileId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdWirelessRfProfilesRfProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
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
                    (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
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
                    (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdWirelessRfProfilesRfProfileIdQueryKey>
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
              (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdWirelessRfProfilesRfProfileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdWirelessRfProfilesRfProfileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].wireless.rfProfiles[':rfProfileId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdWirelessRfProfilesRfProfileIdMutationKey() {
  return ['networks', '/networks/:networkId/wireless/rfProfiles/:rfProfileId', 'PUT'] as const
}

export function getPutNetworksNetworkIdWirelessRfProfilesRfProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdWirelessRfProfilesRfProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$put']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].wireless.rfProfiles[':rfProfileId'].$put(args, options),
      )
    },
  })
}

export function usePutNetworksNetworkIdWirelessRfProfilesRfProfileId<
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
                    (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdWirelessRfProfilesRfProfileIdMutationOptions<
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

export function getDeleteNetworksNetworkIdWirelessRfProfilesRfProfileIdMutationKey() {
  return ['networks', '/networks/:networkId/wireless/rfProfiles/:rfProfileId', 'DELETE'] as const
}

export function getDeleteNetworksNetworkIdWirelessRfProfilesRfProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworksNetworkIdWirelessRfProfilesRfProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$delete']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].wireless.rfProfiles[':rfProfileId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNetworksNetworkIdWirelessRfProfilesRfProfileId<
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
                      (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$delete']
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
  const mutationDefaults = getDeleteNetworksNetworkIdWirelessRfProfilesRfProfileIdMutationOptions<
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

export function getNetworksNetworkIdWirelessSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>
  >,
) {
  return ['networks', '/networks/:networkId/wireless/settings', toValue(args)] as const
}

export function getNetworksNetworkIdWirelessSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdWirelessSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].wireless.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdWirelessSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdWirelessSettingsQueryKey>
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
            ReturnType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdWirelessSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdWirelessSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].wireless.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworksNetworkIdWirelessSettingsMutationKey() {
  return ['networks', '/networks/:networkId/wireless/settings', 'PUT'] as const
}

export function getPutNetworksNetworkIdWirelessSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networks)[':networkId']['wireless']['settings']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['wireless']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdWirelessSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['wireless']['settings']['$put']
      >,
    ) {
      return parseResponse(client.networks[':networkId'].wireless.settings.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdWirelessSettings<
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
                  ReturnType<(typeof client.networks)[':networkId']['wireless']['settings']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['wireless']['settings']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksNetworkIdWirelessSettingsMutationOptions<
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

export function getPutNetworksNetworkIdSmDevicesLockMutationKey() {
  return ['networks', '/networks/:network_id/sm/devices/lock', 'PUT'] as const
}

export function getPutNetworksNetworkIdSmDevicesLockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networks)[':network_id']['sm']['devices']['lock']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':network_id']['sm']['devices']['lock']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksNetworkIdSmDevicesLockMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':network_id']['sm']['devices']['lock']['$put']
      >,
    ) {
      return parseResponse(client.networks[':network_id'].sm.devices.lock.$put(args, options))
    },
  })
}

export function usePutNetworksNetworkIdSmDevicesLock<
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
                    (typeof client.networks)[':network_id']['sm']['devices']['lock']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':network_id']['sm']['devices']['lock']['$put']
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
  const mutationDefaults = getPutNetworksNetworkIdSmDevicesLockMutationOptions<
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

export function getNetworksNetworkIdSmIdConnectivityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']>
  >,
) {
  return ['networks', '/networks/:network_id/sm/:id/connectivity', toValue(args)] as const
}

export function getNetworksNetworkIdSmIdConnectivityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmIdConnectivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':network_id'].sm[':id'].connectivity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmIdConnectivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']>
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
                    (typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']
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
                    (typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmIdConnectivityQueryKey>
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
            ReturnType<(typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmIdConnectivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmIdConnectivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':network_id'].sm[':id'].connectivity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSmIdDesktopLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']>
  >,
) {
  return ['networks', '/networks/:network_id/sm/:id/desktopLogs', toValue(args)] as const
}

export function getNetworksNetworkIdSmIdDesktopLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmIdDesktopLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':network_id'].sm[':id'].desktopLogs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmIdDesktopLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']>
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
                    (typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']
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
                    (typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmIdDesktopLogsQueryKey>
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
            ReturnType<(typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmIdDesktopLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmIdDesktopLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':network_id'].sm[':id'].desktopLogs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSmIdDeviceCommandLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
    >
  >,
) {
  return ['networks', '/networks/:network_id/sm/:id/deviceCommandLogs', toValue(args)] as const
}

export function getNetworksNetworkIdSmIdDeviceCommandLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmIdDeviceCommandLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':network_id'].sm[':id'].deviceCommandLogs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmIdDeviceCommandLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
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
                    (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
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
                    (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmIdDeviceCommandLogsQueryKey>
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
              (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmIdDeviceCommandLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmIdDeviceCommandLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':network_id'].sm[':id'].deviceCommandLogs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdSmIdPerformanceHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
    >
  >,
) {
  return ['networks', '/networks/:network_id/sm/:id/performanceHistory', toValue(args)] as const
}

export function getNetworksNetworkIdSmIdPerformanceHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdSmIdPerformanceHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':network_id'].sm[':id'].performanceHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdSmIdPerformanceHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
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
                    (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
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
                    (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdSmIdPerformanceHistoryQueryKey>
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
              (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdSmIdPerformanceHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdSmIdPerformanceHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':network_id'].sm[':id'].performanceHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsQueryKey() {
  return ['organizations', '/organizations'] as const
}

export function getOrganizationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrganizationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          ReturnType<typeof getOrganizationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrganizationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId', toValue(args)] as const
}

export function getOrganizationsOrganizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdActionBatchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['actionBatches']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/actionBatches', toValue(args)] as const
}

export function getOrganizationsOrganizationIdActionBatchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['actionBatches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdActionBatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].actionBatches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdActionBatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organizationId']['actionBatches']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['actionBatches']['$get']>
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
                    (typeof client.organizations)[':organizationId']['actionBatches']['$get']
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
                    (typeof client.organizations)[':organizationId']['actionBatches']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdActionBatchesQueryKey>
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
            ReturnType<(typeof client.organizations)[':organizationId']['actionBatches']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdActionBatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdActionBatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].actionBatches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdActionBatchesMutationKey() {
  return ['organizations', '/organizations/:organizationId/actionBatches', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdActionBatchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organizationId']['actionBatches']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['actionBatches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdActionBatchesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['actionBatches']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].actionBatches.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdActionBatches<
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
                    (typeof client.organizations)[':organizationId']['actionBatches']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['actionBatches']['$post']
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
  const mutationDefaults = getPostOrganizationsOrganizationIdActionBatchesMutationOptions<
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

export function getPutOrganizationsOrganizationIdActionBatchesActionBatchIdMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationId/actionBatches/:actionBatchId',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdActionBatchesActionBatchIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdActionBatchesActionBatchIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].actionBatches[':actionBatchId'].$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsOrganizationIdActionBatchesActionBatchId<
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
                    (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$put']
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
    getPutOrganizationsOrganizationIdActionBatchesActionBatchIdMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdActionBatchesActionBatchIdMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationId/actionBatches/:actionBatchId',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdActionBatchesActionBatchIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdActionBatchesActionBatchIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].actionBatches[':actionBatchId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOrganizationsOrganizationIdActionBatchesActionBatchId<
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
                      (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$delete']
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
    getDeleteOrganizationsOrganizationIdActionBatchesActionBatchIdMutationOptions<
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

export function getOrganizationsOrganizationIdAdminsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/admins', toValue(args)] as const
}

export function getOrganizationsOrganizationIdAdminsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdAdminsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].admins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdAdmins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['admins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['admins']['$get']>
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
                  ReturnType<(typeof client.organizations)[':organizationId']['admins']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdAdminsQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['admins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdAdminsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdAdminsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].admins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdAdminsMutationKey() {
  return ['organizations', '/organizations/:organizationId/admins', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdAdminsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['admins']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdAdminsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$post']>,
    ) {
      return parseResponse(client.organizations[':organizationId'].admins.$post(args, options))
    },
  })
}

export function usePostOrganizationsOrganizationIdAdmins<
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
                  ReturnType<(typeof client.organizations)[':organizationId']['admins']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsOrganizationIdAdminsMutationOptions<
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

export function getPutOrganizationsOrganizationIdAdminsAdminIdMutationKey() {
  return ['organizations', '/organizations/:organizationId/admins/:adminId', 'PUT'] as const
}

export function getPutOrganizationsOrganizationIdAdminsAdminIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['admins'][':adminId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['admins'][':adminId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdAdminsAdminIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['admins'][':adminId']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].admins[':adminId'].$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsOrganizationIdAdminsAdminId<
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
                    (typeof client.organizations)[':organizationId']['admins'][':adminId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['admins'][':adminId']['$put']
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
  const mutationDefaults = getPutOrganizationsOrganizationIdAdminsAdminIdMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdAdminsAdminIdMutationKey() {
  return ['organizations', '/organizations/:organizationId/admins/:adminId', 'DELETE'] as const
}

export function getDeleteOrganizationsOrganizationIdAdminsAdminIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['admins'][':adminId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['admins'][':adminId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdAdminsAdminIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['admins'][':adminId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].admins[':adminId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsOrganizationIdAdminsAdminId<
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
                      (typeof client.organizations)[':organizationId']['admins'][':adminId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['admins'][':adminId']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsOrganizationIdAdminsAdminIdMutationOptions<
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

export function getOrganizationsOrganizationIdApiRequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/apiRequests', toValue(args)] as const
}

export function getOrganizationsOrganizationIdApiRequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdApiRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].apiRequests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdApiRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>
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
                    (typeof client.organizations)[':organizationId']['apiRequests']['$get']
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
                    (typeof client.organizations)[':organizationId']['apiRequests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdApiRequestsQueryKey>
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
            ReturnType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdApiRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdApiRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].apiRequests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdApiRequestsOverviewQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/apiRequests/overview',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdApiRequestsOverviewQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdApiRequestsOverviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].apiRequests.overview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdApiRequestsOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
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
                    (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
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
                    (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdApiRequestsOverviewQueryKey>
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
              (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdApiRequestsOverviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdApiRequestsOverviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].apiRequests.overview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdClaimMutationKey() {
  return ['organizations', '/organizations/:organizationId/claim', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdClaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['claim']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['claim']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdClaimMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organizationId']['claim']['$post']>,
    ) {
      return parseResponse(client.organizations[':organizationId'].claim.$post(args, options))
    },
  })
}

export function usePostOrganizationsOrganizationIdClaim<
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
                  ReturnType<(typeof client.organizations)[':organizationId']['claim']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['claim']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsOrganizationIdClaimMutationOptions<
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

export function getPostOrganizationsOrganizationIdCloneMutationKey() {
  return ['organizations', '/organizations/:organizationId/clone', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['clone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organizationId']['clone']['$post']>,
    ) {
      return parseResponse(client.organizations[':organizationId'].clone.$post(args, options))
    },
  })
}

export function usePostOrganizationsOrganizationIdClone<
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
                  ReturnType<(typeof client.organizations)[':organizationId']['clone']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['clone']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsOrganizationIdCloneMutationOptions<
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

export function getOrganizationsOrganizationIdConfigTemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['configTemplates']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/configTemplates', toValue(args)] as const
}

export function getOrganizationsOrganizationIdConfigTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['configTemplates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdConfigTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].configTemplates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdConfigTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organizationId']['configTemplates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['configTemplates']['$get']>
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
                    (typeof client.organizations)[':organizationId']['configTemplates']['$get']
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
                    (typeof client.organizations)[':organizationId']['configTemplates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdConfigTemplatesQueryKey>
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
            ReturnType<(typeof client.organizations)[':organizationId']['configTemplates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdConfigTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdConfigTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].configTemplates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationId/configTemplates/:configTemplateId',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].configTemplates[':configTemplateId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateId<
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
                      (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['$delete']
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
    getDeleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdMutationOptions<
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

export function getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switchProfiles']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/configTemplates/:configTemplateId/switchProfiles',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switchProfiles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].configTemplates[
          ':configTemplateId'
        ].switchProfiles.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switchProfiles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switchProfiles']['$get']
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
                    (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switchProfiles']['$get']
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
                    (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switchProfiles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesQueryKey
          >
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
              (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switchProfiles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].configTemplates[
            ':configTemplateId'
          ].switchProfiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdConfigurationChangesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/configurationChanges',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdConfigurationChangesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdConfigurationChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].configurationChanges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdConfigurationChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
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
                    (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
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
                    (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdConfigurationChangesQueryKey>
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
              (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdConfigurationChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdConfigurationChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].configurationChanges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdDeviceStatusesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['deviceStatuses']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/deviceStatuses', toValue(args)] as const
}

export function getOrganizationsOrganizationIdDeviceStatusesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['deviceStatuses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdDeviceStatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].deviceStatuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdDeviceStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organizationId']['deviceStatuses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['deviceStatuses']['$get']>
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
                    (typeof client.organizations)[':organizationId']['deviceStatuses']['$get']
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
                    (typeof client.organizations)[':organizationId']['deviceStatuses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdDeviceStatusesQueryKey>
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
            ReturnType<(typeof client.organizations)[':organizationId']['deviceStatuses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdDeviceStatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdDeviceStatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].deviceStatuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['devices']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/devices', toValue(args)] as const
}

export function getOrganizationsOrganizationIdDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['devices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['devices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['devices']['$get']>
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
                  ReturnType<(typeof client.organizations)[':organizationId']['devices']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdDevicesQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdInsightMonitoredMediaServersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/insight/monitoredMediaServers',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdInsightMonitoredMediaServersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdInsightMonitoredMediaServersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].insight.monitoredMediaServers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdInsightMonitoredMediaServers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$get']
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
                    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$get']
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
                    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdInsightMonitoredMediaServersQueryKey>
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
              (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdInsightMonitoredMediaServersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdInsightMonitoredMediaServersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].insight.monitoredMediaServers.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdInsightMonitoredMediaServersMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationId/insight/monitoredMediaServers',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdInsightMonitoredMediaServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdInsightMonitoredMediaServersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].insight.monitoredMediaServers.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdInsightMonitoredMediaServers<
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
                    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$post']
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
    getPostOrganizationsOrganizationIdInsightMonitoredMediaServersMutationOptions<
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

export function getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/insight/monitoredMediaServers/:monitoredMediaServerId',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].insight.monitoredMediaServers[
          ':monitoredMediaServerId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$get']
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
                    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$get']
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
                    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdQueryKey
          >
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
              (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].insight.monitoredMediaServers[
            ':monitoredMediaServerId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationId/insight/monitoredMediaServers/:monitoredMediaServerId',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].insight.monitoredMediaServers[
          ':monitoredMediaServerId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerId<
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
                    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$put']
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
    getPutOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationId/insight/monitoredMediaServers/:monitoredMediaServerId',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].insight.monitoredMediaServers[
          ':monitoredMediaServerId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerId<
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
                      (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$delete']
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
    getDeleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdMutationOptions<
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

export function getOrganizationsOrganizationIdInventoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['inventory']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/inventory', toValue(args)] as const
}

export function getOrganizationsOrganizationIdInventoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['inventory']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdInventoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].inventory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdInventory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['inventory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['inventory']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['inventory']['$get']>
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
                  ReturnType<(typeof client.organizations)[':organizationId']['inventory']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdInventoryQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['inventory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdInventoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdInventoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].inventory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdLicenseStateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['licenseState']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/licenseState', toValue(args)] as const
}

export function getOrganizationsOrganizationIdLicenseStateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['licenseState']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdLicenseStateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].licenseState.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdLicenseState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organizationId']['licenseState']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['licenseState']['$get']>
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
                    (typeof client.organizations)[':organizationId']['licenseState']['$get']
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
                    (typeof client.organizations)[':organizationId']['licenseState']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdLicenseStateQueryKey>
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
            ReturnType<(typeof client.organizations)[':organizationId']['licenseState']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdLicenseStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdLicenseStateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].licenseState.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdLicensesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['licenses']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/licenses', toValue(args)] as const
}

export function getOrganizationsOrganizationIdLicensesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['licenses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdLicensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].licenses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdLicenses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['licenses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['licenses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['licenses']['$get']>
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
                  ReturnType<(typeof client.organizations)[':organizationId']['licenses']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdLicensesQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['licenses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdLicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdLicensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].licenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdLicensesAssignSeatsMutationKey() {
  return ['organizations', '/organizations/:organizationId/licenses/assignSeats', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdLicensesAssignSeatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['licenses']['assignSeats']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['licenses']['assignSeats']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdLicensesAssignSeatsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['licenses']['assignSeats']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].licenses.assignSeats.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdLicensesAssignSeats<
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
                    (typeof client.organizations)[':organizationId']['licenses']['assignSeats']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['licenses']['assignSeats']['$post']
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
  const mutationDefaults = getPostOrganizationsOrganizationIdLicensesAssignSeatsMutationOptions<
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

export function getPostOrganizationsOrganizationIdLicensesMoveSeatsMutationKey() {
  return ['organizations', '/organizations/:organizationId/licenses/moveSeats', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdLicensesMoveSeatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['licenses']['moveSeats']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['licenses']['moveSeats']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdLicensesMoveSeatsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['licenses']['moveSeats']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].licenses.moveSeats.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdLicensesMoveSeats<
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
                    (typeof client.organizations)[':organizationId']['licenses']['moveSeats']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['licenses']['moveSeats']['$post']
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
  const mutationDefaults = getPostOrganizationsOrganizationIdLicensesMoveSeatsMutationOptions<
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

export function getPostOrganizationsOrganizationIdLicensesRenewSeatsMutationKey() {
  return ['organizations', '/organizations/:organizationId/licenses/renewSeats', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdLicensesRenewSeatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['licenses']['renewSeats']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['licenses']['renewSeats']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdLicensesRenewSeatsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['licenses']['renewSeats']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].licenses.renewSeats.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdLicensesRenewSeats<
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
                    (typeof client.organizations)[':organizationId']['licenses']['renewSeats']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['licenses']['renewSeats']['$post']
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
  const mutationDefaults = getPostOrganizationsOrganizationIdLicensesRenewSeatsMutationOptions<
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

export function getOrganizationsOrganizationIdLicensesLicenseIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/licenses/:licenseId',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdLicensesLicenseIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdLicensesLicenseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].licenses[':licenseId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdLicensesLicenseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
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
                    (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
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
                    (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdLicensesLicenseIdQueryKey>
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
              (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdLicensesLicenseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdLicensesLicenseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].licenses[':licenseId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdNetworksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['networks']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/networks', toValue(args)] as const
}

export function getOrganizationsOrganizationIdNetworksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['networks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdNetworksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].networks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdNetworks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['networks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['networks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['networks']['$get']>
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
                  ReturnType<(typeof client.organizations)[':organizationId']['networks']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdNetworksQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['networks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdNetworksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdNetworksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].networks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdNetworksMutationKey() {
  return ['organizations', '/organizations/:organizationId/networks', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdNetworksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['networks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['networks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdNetworksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organizationId']['networks']['$post']>,
    ) {
      return parseResponse(client.organizations[':organizationId'].networks.$post(args, options))
    },
  })
}

export function usePostOrganizationsOrganizationIdNetworks<
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
                  ReturnType<(typeof client.organizations)[':organizationId']['networks']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['networks']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsOrganizationIdNetworksMutationOptions<
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

export function getPostOrganizationsOrganizationIdNetworksCombineMutationKey() {
  return ['organizations', '/organizations/:organizationId/networks/combine', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdNetworksCombineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['networks']['combine']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['networks']['combine']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdNetworksCombineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['networks']['combine']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].networks.combine.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdNetworksCombine<
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
                    (typeof client.organizations)[':organizationId']['networks']['combine']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['networks']['combine']['$post']
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
  const mutationDefaults = getPostOrganizationsOrganizationIdNetworksCombineMutationOptions<
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

export function getOrganizationsOrganizationIdOpenapiSpecQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/openapiSpec', toValue(args)] as const
}

export function getOrganizationsOrganizationIdOpenapiSpecQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOpenapiSpecQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].openapiSpec.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOpenapiSpec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>
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
                    (typeof client.organizations)[':organizationId']['openapiSpec']['$get']
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
                    (typeof client.organizations)[':organizationId']['openapiSpec']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOpenapiSpecQueryKey>
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
            ReturnType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOpenapiSpecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOpenapiSpecQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].openapiSpec.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdSamlRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/samlRoles', toValue(args)] as const
}

export function getOrganizationsOrganizationIdSamlRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdSamlRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].samlRoles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdSamlRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>
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
                  ReturnType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdSamlRolesQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdSamlRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdSamlRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].samlRoles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdSamlRolesMutationKey() {
  return ['organizations', '/organizations/:organizationId/samlRoles', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdSamlRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organizationId']['samlRoles']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['samlRoles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdSamlRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['samlRoles']['$post']
      >,
    ) {
      return parseResponse(client.organizations[':organizationId'].samlRoles.$post(args, options))
    },
  })
}

export function usePostOrganizationsOrganizationIdSamlRoles<
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
                  ReturnType<(typeof client.organizations)[':organizationId']['samlRoles']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['samlRoles']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsOrganizationIdSamlRolesMutationOptions<
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

export function getOrganizationsOrganizationIdSamlRolesSamlRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/samlRoles/:samlRoleId',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdSamlRolesSamlRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdSamlRolesSamlRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].samlRoles[':samlRoleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdSamlRolesSamlRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
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
                    (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
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
                    (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdSamlRolesSamlRoleIdQueryKey>
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
              (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdSamlRolesSamlRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdSamlRolesSamlRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].samlRoles[':samlRoleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsOrganizationIdSamlRolesSamlRoleIdMutationKey() {
  return ['organizations', '/organizations/:organizationId/samlRoles/:samlRoleId', 'PUT'] as const
}

export function getPutOrganizationsOrganizationIdSamlRolesSamlRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdSamlRolesSamlRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].samlRoles[':samlRoleId'].$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsOrganizationIdSamlRolesSamlRoleId<
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
                    (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$put']
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
  const mutationDefaults = getPutOrganizationsOrganizationIdSamlRolesSamlRoleIdMutationOptions<
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

export function getOrganizationsOrganizationIdSecurityIntrusionSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/security/intrusionSettings',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdSecurityIntrusionSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdSecurityIntrusionSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].security.intrusionSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdSecurityIntrusionSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$get']
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
                    (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$get']
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
                    (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdSecurityIntrusionSettingsQueryKey>
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
              (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdSecurityIntrusionSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdSecurityIntrusionSettingsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].security.intrusionSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsOrganizationIdSecurityIntrusionSettingsMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationId/security/intrusionSettings',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdSecurityIntrusionSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdSecurityIntrusionSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].security.intrusionSettings.$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsOrganizationIdSecurityIntrusionSettings<
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
                    (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$put']
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
    getPutOrganizationsOrganizationIdSecurityIntrusionSettingsMutationOptions<
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

export function getOrganizationsOrganizationIdSecurityEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['securityEvents']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/securityEvents', toValue(args)] as const
}

export function getOrganizationsOrganizationIdSecurityEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['securityEvents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdSecurityEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].securityEvents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdSecurityEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organizationId']['securityEvents']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['securityEvents']['$get']>
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
                    (typeof client.organizations)[':organizationId']['securityEvents']['$get']
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
                    (typeof client.organizations)[':organizationId']['securityEvents']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdSecurityEventsQueryKey>
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
            ReturnType<(typeof client.organizations)[':organizationId']['securityEvents']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdSecurityEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdSecurityEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].securityEvents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdSnmpQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['snmp']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/snmp', toValue(args)] as const
}

export function getOrganizationsOrganizationIdSnmpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['snmp']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdSnmpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].snmp.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdSnmp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['snmp']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['snmp']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['snmp']['$get']>
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
                  ReturnType<(typeof client.organizations)[':organizationId']['snmp']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdSnmpQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['snmp']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdSnmpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdSnmpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].snmp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdThirdPartyVPNPeersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']>
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/thirdPartyVPNPeers',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdThirdPartyVPNPeersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdThirdPartyVPNPeersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].thirdPartyVPNPeers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdThirdPartyVPNPeers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']>
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
                    (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']
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
                    (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdThirdPartyVPNPeersQueryKey>
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
              (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdThirdPartyVPNPeersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdThirdPartyVPNPeersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].thirdPartyVPNPeers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsOrganizationIdThirdPartyVPNPeersMutationKey() {
  return ['organizations', '/organizations/:organizationId/thirdPartyVPNPeers', 'PUT'] as const
}

export function getPutOrganizationsOrganizationIdThirdPartyVPNPeersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdThirdPartyVPNPeersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].thirdPartyVPNPeers.$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsOrganizationIdThirdPartyVPNPeers<
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
                    (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$put']
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
  const mutationDefaults = getPutOrganizationsOrganizationIdThirdPartyVPNPeersMutationOptions<
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

export function getOrganizationsOrganizationIdUplinksLossAndLatencyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/uplinksLossAndLatency',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdUplinksLossAndLatencyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdUplinksLossAndLatencyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].uplinksLossAndLatency.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdUplinksLossAndLatency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
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
                    (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
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
                    (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdUplinksLossAndLatencyQueryKey>
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
              (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdUplinksLossAndLatencyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdUplinksLossAndLatencyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].uplinksLossAndLatency.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdVpnFirewallRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']>
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/vpnFirewallRules',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdVpnFirewallRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdVpnFirewallRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].vpnFirewallRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdVpnFirewallRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']>
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
                    (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']
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
                    (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdVpnFirewallRulesQueryKey>
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
            ReturnType<(typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdVpnFirewallRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdVpnFirewallRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].vpnFirewallRules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsOrganizationIdVpnFirewallRulesMutationKey() {
  return ['organizations', '/organizations/:organizationId/vpnFirewallRules', 'PUT'] as const
}

export function getPutOrganizationsOrganizationIdVpnFirewallRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organizationId']['vpnFirewallRules']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['vpnFirewallRules']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdVpnFirewallRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].vpnFirewallRules.$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsOrganizationIdVpnFirewallRules<
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
                    (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$put']
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
  const mutationDefaults = getPutOrganizationsOrganizationIdVpnFirewallRulesMutationOptions<
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
