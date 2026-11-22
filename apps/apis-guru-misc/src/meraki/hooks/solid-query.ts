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
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['live']['$get']>,
) {
  return ['devices', '/devices/:serial/camera/analytics/live', args] as const
}

export function getDevicesSerialCameraAnalyticsLiveQueryOptions<
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
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['live']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesSerialCameraAnalyticsLiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':serial'].camera.analytics.live.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesSerialCameraAnalyticsLive<
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
  args: () => InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['live']['$get']
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
                    (typeof client.devices)[':serial']['camera']['analytics']['live']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDevicesSerialCameraAnalyticsLiveQueryKey>
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
      ...getDevicesSerialCameraAnalyticsLiveQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDevicesSerialCameraAnalyticsOverviewQueryKey(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']
  >,
) {
  return ['devices', '/devices/:serial/camera/analytics/overview', args] as const
}

export function getDevicesSerialCameraAnalyticsOverviewQueryOptions<
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
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesSerialCameraAnalyticsOverviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':serial'].camera.analytics.overview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesSerialCameraAnalyticsOverview<
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
  args: () => InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']
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
                    (typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDevicesSerialCameraAnalyticsOverviewQueryKey>
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
      ...getDevicesSerialCameraAnalyticsOverviewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDevicesSerialCameraAnalyticsRecentQueryKey(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']
  >,
) {
  return ['devices', '/devices/:serial/camera/analytics/recent', args] as const
}

export function getDevicesSerialCameraAnalyticsRecentQueryOptions<
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
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesSerialCameraAnalyticsRecentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':serial'].camera.analytics.recent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesSerialCameraAnalyticsRecent<
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
  args: () => InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']
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
                    (typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDevicesSerialCameraAnalyticsRecentQueryKey>
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
      ...getDevicesSerialCameraAnalyticsRecentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDevicesSerialCameraAnalyticsZonesQueryKey(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']
  >,
) {
  return ['devices', '/devices/:serial/camera/analytics/zones', args] as const
}

export function getDevicesSerialCameraAnalyticsZonesQueryOptions<
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
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesSerialCameraAnalyticsZonesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':serial'].camera.analytics.zones.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesSerialCameraAnalyticsZones<
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
  args: () => InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']
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
                    (typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDevicesSerialCameraAnalyticsZonesQueryKey>
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
      ...getDevicesSerialCameraAnalyticsZonesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDevicesSerialCameraAnalyticsZonesZoneIdHistoryQueryKey(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
  >,
) {
  return ['devices', '/devices/:serial/camera/analytics/zones/:zoneId/history', args] as const
}

export function getDevicesSerialCameraAnalyticsZonesZoneIdHistoryQueryOptions<
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
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesSerialCameraAnalyticsZonesZoneIdHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':serial'].camera.analytics.zones[':zoneId'].history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesSerialCameraAnalyticsZonesZoneIdHistory<
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
  args: () => InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
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
                    (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDevicesSerialCameraAnalyticsZonesZoneIdHistoryQueryKey>
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
      ...getDevicesSerialCameraAnalyticsZonesZoneIdHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDevicesSerialCameraQualityAndRetentionSettingsQueryKey(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
  >,
) {
  return ['devices', '/devices/:serial/camera/qualityAndRetentionSettings', args] as const
}

export function getDevicesSerialCameraQualityAndRetentionSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesSerialCameraQualityAndRetentionSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':serial'].camera.qualityAndRetentionSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesSerialCameraQualityAndRetentionSettings<
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
  args: () => InferRequestType<
    (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
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
                    (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDevicesSerialCameraQualityAndRetentionSettingsQueryKey>
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
      ...getDevicesSerialCameraQualityAndRetentionSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutDevicesSerialCameraQualityAndRetentionSettings<
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
    const mutationDefaults = getPutDevicesSerialCameraQualityAndRetentionSettingsMutationOptions<
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

export function getDevicesSerialCameraVideoSettingsQueryKey(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['video']['settings']['$get']>,
) {
  return ['devices', '/devices/:serial/camera/video/settings', args] as const
}

export function getDevicesSerialCameraVideoSettingsQueryOptions<
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
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['video']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesSerialCameraVideoSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':serial'].camera.video.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesSerialCameraVideoSettings<
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
  args: () => InferRequestType<
    (typeof client.devices)[':serial']['camera']['video']['settings']['$get']
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
                    (typeof client.devices)[':serial']['camera']['video']['settings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDevicesSerialCameraVideoSettingsQueryKey>
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
      ...getDevicesSerialCameraVideoSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDevicesSerialCameraVideoSettings<
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
    const mutationDefaults = getPutDevicesSerialCameraVideoSettingsMutationOptions<
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

export function getDevicesSerialCellularGatewaySettingsQueryKey(
  args: InferRequestType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$get']>,
) {
  return ['devices', '/devices/:serial/cellularGateway/settings', args] as const
}

export function getDevicesSerialCellularGatewaySettingsQueryOptions<
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
  args: InferRequestType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesSerialCellularGatewaySettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':serial'].cellularGateway.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesSerialCellularGatewaySettings<
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
  args: () => InferRequestType<
    (typeof client.devices)[':serial']['cellularGateway']['settings']['$get']
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
                    (typeof client.devices)[':serial']['cellularGateway']['settings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDevicesSerialCellularGatewaySettingsQueryKey>
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
      ...getDevicesSerialCellularGatewaySettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDevicesSerialCellularGatewaySettings<
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
    const mutationDefaults = getPutDevicesSerialCellularGatewaySettingsMutationOptions<
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

export function getDevicesSerialCellularGatewaySettingsPortForwardingRulesQueryKey(
  args: InferRequestType<
    (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
  >,
) {
  return ['devices', '/devices/:serial/cellularGateway/settings/portForwardingRules', args] as const
}

export function getDevicesSerialCellularGatewaySettingsPortForwardingRulesQueryOptions<
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
  args: InferRequestType<
    (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesSerialCellularGatewaySettingsPortForwardingRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':serial'].cellularGateway.settings.portForwardingRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesSerialCellularGatewaySettingsPortForwardingRules<
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
  args: () => InferRequestType<
    (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
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
                    (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDevicesSerialCellularGatewaySettingsPortForwardingRulesQueryKey>
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
      ...getDevicesSerialCellularGatewaySettingsPortForwardingRulesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutDevicesSerialCellularGatewaySettingsPortForwardingRules<
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
    const mutationDefaults =
      getPutDevicesSerialCellularGatewaySettingsPortForwardingRulesMutationOptions<
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

export function getDevicesSerialClientsQueryKey(
  args: InferRequestType<(typeof client.devices)[':serial']['clients']['$get']>,
) {
  return ['devices', '/devices/:serial/clients', args] as const
}

export function getDevicesSerialClientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':serial']['clients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':serial']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesSerialClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':serial'].clients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesSerialClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':serial']['clients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':serial']['clients']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getDevicesSerialClientsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostDevicesSerialSwitchPortsCycle<
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
    const mutationDefaults = getPostDevicesSerialSwitchPortsCycleMutationOptions<
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

export function getDevicesSerialSwitchPortStatusesQueryKey(
  args: InferRequestType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>,
) {
  return ['devices', '/devices/:serial/switchPortStatuses', args] as const
}

export function getDevicesSerialSwitchPortStatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesSerialSwitchPortStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':serial'].switchPortStatuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesSerialSwitchPortStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getDevicesSerialSwitchPortStatusesQueryKey>
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
      ...getDevicesSerialSwitchPortStatusesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDevicesSerialSwitchPortStatusesPacketsQueryKey(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']
  >,
) {
  return ['devices', '/devices/:serial/switchPortStatuses/packets', args] as const
}

export function getDevicesSerialSwitchPortStatusesPacketsQueryOptions<
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
  args: InferRequestType<
    (typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesSerialSwitchPortStatusesPacketsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':serial'].switchPortStatuses.packets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesSerialSwitchPortStatusesPackets<
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
  args: () => InferRequestType<
    (typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']
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
                    (typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDevicesSerialSwitchPortStatusesPacketsQueryKey>
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
      ...getDevicesSerialSwitchPortStatusesPacketsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutDevicesSerialWirelessBluetoothSettings<
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
    const mutationDefaults = getPutDevicesSerialWirelessBluetoothSettingsMutationOptions<
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

export function getNetworksNetworkIdQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['$get']>,
) {
  return ['networks', '/networks/:networkId', args] as const
}

export function getNetworksNetworkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdQueryKey>
  >({
    queryKey: getNetworksNetworkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdQueryKey>
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
    return { ...getNetworksNetworkIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutNetworksNetworkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutNetworksNetworkIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteNetworksNetworkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteNetworksNetworkIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNetworksNetworkIdAccessPoliciesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>,
) {
  return ['networks', '/networks/:networkId/accessPolicies', args] as const
}

export function getNetworksNetworkIdAccessPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdAccessPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].accessPolicies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdAccessPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdAccessPoliciesQueryKey>
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
      ...getNetworksNetworkIdAccessPoliciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdAirMarshalQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['airMarshal']['$get']>,
) {
  return ['networks', '/networks/:networkId/airMarshal', args] as const
}

export function getNetworksNetworkIdAirMarshalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['airMarshal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['airMarshal']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdAirMarshalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].airMarshal.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdAirMarshal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['airMarshal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['airMarshal']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdAirMarshalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdAlertSettingsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$get']>,
) {
  return ['networks', '/networks/:networkId/alertSettings', args] as const
}

export function getNetworksNetworkIdAlertSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['alertSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdAlertSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].alertSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdAlertSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['alertSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdAlertSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdAlertSettings<
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
                Awaited<ReturnType<(typeof client.networks)[':networkId']['alertSettings']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdAlertSettingsMutationOptions<
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

export function getNetworksNetworkIdApplianceFirewallInboundFirewallRulesQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/appliance/firewall/inboundFirewallRules', args] as const
}

export function getNetworksNetworkIdApplianceFirewallInboundFirewallRulesQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdApplianceFirewallInboundFirewallRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].appliance.firewall.inboundFirewallRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdApplianceFirewallInboundFirewallRules<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
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
                    (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdApplianceFirewallInboundFirewallRulesQueryKey>
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
      ...getNetworksNetworkIdApplianceFirewallInboundFirewallRulesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdApplianceFirewallInboundFirewallRules<
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
    const mutationDefaults =
      getPutNetworksNetworkIdApplianceFirewallInboundFirewallRulesMutationOptions<
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

export function getNetworksNetworkIdAppliancePortsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>,
) {
  return ['networks', '/networks/:networkId/appliancePorts', args] as const
}

export function getNetworksNetworkIdAppliancePortsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdAppliancePortsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].appliancePorts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdAppliancePorts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdAppliancePortsQueryKey>
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
      ...getNetworksNetworkIdAppliancePortsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdAppliancePortsAppliancePortIdQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/appliancePorts/:appliancePortId', args] as const
}

export function getNetworksNetworkIdAppliancePortsAppliancePortIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdAppliancePortsAppliancePortIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].appliancePorts[':appliancePortId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdAppliancePortsAppliancePortId<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
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
                    (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdAppliancePortsAppliancePortIdQueryKey>
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
      ...getNetworksNetworkIdAppliancePortsAppliancePortIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdAppliancePortsAppliancePortId<
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
    const mutationDefaults = getPutNetworksNetworkIdAppliancePortsAppliancePortIdMutationOptions<
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

export function createPostNetworksNetworkIdBind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostNetworksNetworkIdBindMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNetworksNetworkIdBluetoothClientsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>,
) {
  return ['networks', '/networks/:networkId/bluetoothClients', args] as const
}

export function getNetworksNetworkIdBluetoothClientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdBluetoothClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].bluetoothClients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdBluetoothClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdBluetoothClientsQueryKey>
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
      ...getNetworksNetworkIdBluetoothClientsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdBluetoothClientsBluetoothClientIdQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/bluetoothClients/:bluetoothClientId', args] as const
}

export function getNetworksNetworkIdBluetoothClientsBluetoothClientIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdBluetoothClientsBluetoothClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].bluetoothClients[':bluetoothClientId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdBluetoothClientsBluetoothClientId<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
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
                    (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdBluetoothClientsBluetoothClientIdQueryKey>
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
      ...getNetworksNetworkIdBluetoothClientsBluetoothClientIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdBluetoothSettingsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>,
) {
  return ['networks', '/networks/:networkId/bluetoothSettings', args] as const
}

export function getNetworksNetworkIdBluetoothSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdBluetoothSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].bluetoothSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdBluetoothSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdBluetoothSettingsQueryKey>
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
      ...getNetworksNetworkIdBluetoothSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdBluetoothSettings<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['bluetoothSettings']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdBluetoothSettingsMutationOptions<
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

export function getNetworksNetworkIdCameraQualityRetentionProfilesQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/camera/qualityRetentionProfiles', args] as const
}

export function getNetworksNetworkIdCameraQualityRetentionProfilesQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdCameraQualityRetentionProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].camera.qualityRetentionProfiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdCameraQualityRetentionProfiles<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
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
                    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdCameraQualityRetentionProfilesQueryKey>
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
      ...getNetworksNetworkIdCameraQualityRetentionProfilesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdCameraQualityRetentionProfiles<
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
    const mutationDefaults = getPostNetworksNetworkIdCameraQualityRetentionProfilesMutationOptions<
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

export function getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$get']
  >,
) {
  return [
    'networks',
    '/networks/:networkId/camera/qualityRetentionProfiles/:qualityRetentionProfileId',
    args,
  ] as const
}

export function getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].camera.qualityRetentionProfiles[
          ':qualityRetentionProfileId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileId<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$get']
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
      ...getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileId<
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
    const mutationDefaults =
      getPutNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdMutationOptions<
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

export function createDeleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdMutationOptions<
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

export function getNetworksNetworkIdCameraSchedulesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>,
) {
  return ['networks', '/networks/:networkId/camera/schedules', args] as const
}

export function getNetworksNetworkIdCameraSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdCameraSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].camera.schedules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdCameraSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['camera']['schedules']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdCameraSchedulesQueryKey>
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
      ...getNetworksNetworkIdCameraSchedulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdCamerasSerialSnapshot<
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
    const mutationDefaults = getPostNetworksNetworkIdCamerasSerialSnapshotMutationOptions<
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

export function getNetworksNetworkIdCamerasSerialVideoLinkQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/cameras/:serial/videoLink', args] as const
}

export function getNetworksNetworkIdCamerasSerialVideoLinkQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdCamerasSerialVideoLinkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].cameras[':serial'].videoLink.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdCamerasSerialVideoLink<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
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
                    (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdCamerasSerialVideoLinkQueryKey>
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
      ...getNetworksNetworkIdCamerasSerialVideoLinkQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdCellularFirewallRulesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>,
) {
  return ['networks', '/networks/:networkId/cellularFirewallRules', args] as const
}

export function getNetworksNetworkIdCellularFirewallRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdCellularFirewallRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].cellularFirewallRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdCellularFirewallRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['cellularFirewallRules']['$get']
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
                    (typeof client.networks)[':networkId']['cellularFirewallRules']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdCellularFirewallRulesQueryKey>
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
      ...getNetworksNetworkIdCellularFirewallRulesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdCellularFirewallRules<
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
    const mutationDefaults = getPutNetworksNetworkIdCellularFirewallRulesMutationOptions<
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

export function getNetworksNetworkIdClientsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients']['$get']>,
) {
  return ['networks', '/networks/:networkId/clients', args] as const
}

export function getNetworksNetworkIdClientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['clients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].clients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['clients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['clients']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdClientsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdClientsConnectionStatsQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients']['connectionStats']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/clients/connectionStats', args] as const
}

export function getNetworksNetworkIdClientsConnectionStatsQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients']['connectionStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdClientsConnectionStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].clients.connectionStats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdClientsConnectionStats<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['clients']['connectionStats']['$get']
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
                    (typeof client.networks)[':networkId']['clients']['connectionStats']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdClientsConnectionStatsQueryKey>
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
      ...getNetworksNetworkIdClientsConnectionStatsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdClientsLatencyStatsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients']['latencyStats']['$get']>,
) {
  return ['networks', '/networks/:networkId/clients/latencyStats', args] as const
}

export function getNetworksNetworkIdClientsLatencyStatsQueryOptions<
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
  args: InferRequestType<(typeof client.networks)[':networkId']['clients']['latencyStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdClientsLatencyStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].clients.latencyStats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdClientsLatencyStats<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['clients']['latencyStats']['$get']
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
                    (typeof client.networks)[':networkId']['clients']['latencyStats']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdClientsLatencyStatsQueryKey>
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
      ...getNetworksNetworkIdClientsLatencyStatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdClientsProvision<
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
    const mutationDefaults = getPostNetworksNetworkIdClientsProvisionMutationOptions<
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

export function getNetworksNetworkIdClientsClientIdQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>,
) {
  return ['networks', '/networks/:networkId/clients/:clientId', args] as const
}

export function getNetworksNetworkIdClientsClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdClientsClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdClientsClientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdClientsClientIdConnectionStatsQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId/connectionStats', args] as const
}

export function getNetworksNetworkIdClientsClientIdConnectionStatsQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdClientsClientIdConnectionStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].connectionStats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdClientsClientIdConnectionStats<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdClientsClientIdConnectionStatsQueryKey>
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
      ...getNetworksNetworkIdClientsClientIdConnectionStatsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdClientsClientIdEventsQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId/events', args] as const
}

export function getNetworksNetworkIdClientsClientIdEventsQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdClientsClientIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdClientsClientIdEvents<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdClientsClientIdEventsQueryKey>
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
      ...getNetworksNetworkIdClientsClientIdEventsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdClientsClientIdLatencyHistoryQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId/latencyHistory', args] as const
}

export function getNetworksNetworkIdClientsClientIdLatencyHistoryQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdClientsClientIdLatencyHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].latencyHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdClientsClientIdLatencyHistory<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdClientsClientIdLatencyHistoryQueryKey>
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
      ...getNetworksNetworkIdClientsClientIdLatencyHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdClientsClientIdLatencyStatsQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId/latencyStats', args] as const
}

export function getNetworksNetworkIdClientsClientIdLatencyStatsQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdClientsClientIdLatencyStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].latencyStats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdClientsClientIdLatencyStats<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdClientsClientIdLatencyStatsQueryKey>
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
      ...getNetworksNetworkIdClientsClientIdLatencyStatsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdClientsClientIdPolicyQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId/policy', args] as const
}

export function getNetworksNetworkIdClientsClientIdPolicyQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdClientsClientIdPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].policy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdClientsClientIdPolicy<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdClientsClientIdPolicyQueryKey>
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
      ...getNetworksNetworkIdClientsClientIdPolicyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdClientsClientIdPolicy<
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
    const mutationDefaults = getPutNetworksNetworkIdClientsClientIdPolicyMutationOptions<
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

export function getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$get']
  >,
) {
  return [
    'networks',
    '/networks/:networkId/clients/:clientId/splashAuthorizationStatus',
    args,
  ] as const
}

export function getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].splashAuthorizationStatus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdClientsClientIdSplashAuthorizationStatus<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusQueryKey>
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
      ...getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdClientsClientIdSplashAuthorizationStatus<
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
    const mutationDefaults =
      getPutNetworksNetworkIdClientsClientIdSplashAuthorizationStatusMutationOptions<
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

export function getNetworksNetworkIdClientsClientIdUsageHistoryQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId/usageHistory', args] as const
}

export function getNetworksNetworkIdClientsClientIdUsageHistoryQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdClientsClientIdUsageHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].clients[':clientId'].usageHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdClientsClientIdUsageHistory<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
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
                    (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdClientsClientIdUsageHistoryQueryKey>
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
      ...getNetworksNetworkIdClientsClientIdUsageHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdConnectionStatsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['connectionStats']['$get']>,
) {
  return ['networks', '/networks/:networkId/connectionStats', args] as const
}

export function getNetworksNetworkIdConnectionStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['connectionStats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['connectionStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdConnectionStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].connectionStats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdConnectionStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['connectionStats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['connectionStats']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdConnectionStatsQueryKey>
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
      ...getNetworksNetworkIdConnectionStatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdContentFilteringQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>,
) {
  return ['networks', '/networks/:networkId/contentFiltering', args] as const
}

export function getNetworksNetworkIdContentFilteringQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdContentFilteringQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].contentFiltering.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdContentFiltering<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdContentFilteringQueryKey>
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
      ...getNetworksNetworkIdContentFilteringQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdContentFiltering<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['contentFiltering']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdContentFilteringMutationOptions<
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

export function getNetworksNetworkIdContentFilteringCategoriesQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/contentFiltering/categories', args] as const
}

export function getNetworksNetworkIdContentFilteringCategoriesQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdContentFilteringCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].contentFiltering.categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdContentFilteringCategories<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
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
                    (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdContentFilteringCategoriesQueryKey>
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
      ...getNetworksNetworkIdContentFilteringCategoriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdDevicesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices']['$get']>,
) {
  return ['networks', '/networks/:networkId/devices', args] as const
}

export function getNetworksNetworkIdDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['devices']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdDevicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdDevicesClaim<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['devices']['claim']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['devices']['claim']['$post']>,
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
    const mutationDefaults = getPostNetworksNetworkIdDevicesClaimMutationOptions<
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

export function getNetworksNetworkIdDevicesConnectionStatsQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices']['connectionStats']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/devices/connectionStats', args] as const
}

export function getNetworksNetworkIdDevicesConnectionStatsQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices']['connectionStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdDevicesConnectionStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].devices.connectionStats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdDevicesConnectionStats<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['devices']['connectionStats']['$get']
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
                    (typeof client.networks)[':networkId']['devices']['connectionStats']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdDevicesConnectionStatsQueryKey>
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
      ...getNetworksNetworkIdDevicesConnectionStatsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdDevicesLatencyStatsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices']['latencyStats']['$get']>,
) {
  return ['networks', '/networks/:networkId/devices/latencyStats', args] as const
}

export function getNetworksNetworkIdDevicesLatencyStatsQueryOptions<
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
  args: InferRequestType<(typeof client.networks)[':networkId']['devices']['latencyStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdDevicesLatencyStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].devices.latencyStats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdDevicesLatencyStats<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['devices']['latencyStats']['$get']
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
                    (typeof client.networks)[':networkId']['devices']['latencyStats']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdDevicesLatencyStatsQueryKey>
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
      ...getNetworksNetworkIdDevicesLatencyStatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdDevicesSerialQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>,
) {
  return ['networks', '/networks/:networkId/devices/:serial', args] as const
}

export function getNetworksNetworkIdDevicesSerialQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdDevicesSerialQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].devices[':serial'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdDevicesSerial<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdDevicesSerialQueryKey>
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
      ...getNetworksNetworkIdDevicesSerialQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdDevicesSerial<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['devices'][':serial']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdDevicesSerialMutationOptions<
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

export function getNetworksNetworkIdDevicesSerialConnectionStatsQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/devices/:serial/connectionStats', args] as const
}

export function getNetworksNetworkIdDevicesSerialConnectionStatsQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdDevicesSerialConnectionStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].devices[':serial'].connectionStats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdDevicesSerialConnectionStats<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdDevicesSerialConnectionStatsQueryKey>
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
      ...getNetworksNetworkIdDevicesSerialConnectionStatsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdDevicesSerialLatencyStatsQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/devices/:serial/latencyStats', args] as const
}

export function getNetworksNetworkIdDevicesSerialLatencyStatsQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdDevicesSerialLatencyStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].devices[':serial'].latencyStats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdDevicesSerialLatencyStats<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdDevicesSerialLatencyStatsQueryKey>
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
      ...getNetworksNetworkIdDevicesSerialLatencyStatsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/devices/:serial/lossAndLatencyHistory', args] as const
}

export function getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].devices[':serial'].lossAndLatencyHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdDevicesSerialLossAndLatencyHistory<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryQueryKey>
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
      ...getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdDevicesSerialPerformanceQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/devices/:serial/performance', args] as const
}

export function getNetworksNetworkIdDevicesSerialPerformanceQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdDevicesSerialPerformanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].devices[':serial'].performance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdDevicesSerialPerformance<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdDevicesSerialPerformanceQueryKey>
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
      ...getNetworksNetworkIdDevicesSerialPerformanceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdDevicesSerialReboot<
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
    const mutationDefaults = getPostNetworksNetworkIdDevicesSerialRebootMutationOptions<
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

export function createPostNetworksNetworkIdDevicesSerialRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostNetworksNetworkIdDevicesSerialRemoveMutationOptions<
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

export function getNetworksNetworkIdDevicesSerialUplinkQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/devices/:serial/uplink', args] as const
}

export function getNetworksNetworkIdDevicesSerialUplinkQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdDevicesSerialUplinkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].devices[':serial'].uplink.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdDevicesSerialUplink<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdDevicesSerialUplinkQueryKey>
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
      ...getNetworksNetworkIdDevicesSerialUplinkQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdDevicesSerialWirelessStatusQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/devices/:serial/wireless/status', args] as const
}

export function getNetworksNetworkIdDevicesSerialWirelessStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdDevicesSerialWirelessStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].devices[':serial'].wireless.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdDevicesSerialWirelessStatus<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
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
                    (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdDevicesSerialWirelessStatusQueryKey>
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
      ...getNetworksNetworkIdDevicesSerialWirelessStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdEventsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['events']['$get']>,
) {
  return ['networks', '/networks/:networkId/events', args] as const
}

export function getNetworksNetworkIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['events']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdEventsEventTypesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>,
) {
  return ['networks', '/networks/:networkId/events/eventTypes', args] as const
}

export function getNetworksNetworkIdEventsEventTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdEventsEventTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].events.eventTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdEventsEventTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['events']['eventTypes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdEventsEventTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdFailedConnectionsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['failedConnections']['$get']>,
) {
  return ['networks', '/networks/:networkId/failedConnections', args] as const
}

export function getNetworksNetworkIdFailedConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['failedConnections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['failedConnections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdFailedConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].failedConnections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdFailedConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['failedConnections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['failedConnections']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdFailedConnectionsQueryKey>
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
      ...getNetworksNetworkIdFailedConnectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdFirewalledServicesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>,
) {
  return ['networks', '/networks/:networkId/firewalledServices', args] as const
}

export function getNetworksNetworkIdFirewalledServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdFirewalledServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].firewalledServices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdFirewalledServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['firewalledServices']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdFirewalledServicesQueryKey>
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
      ...getNetworksNetworkIdFirewalledServicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdFirewalledServicesServiceQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/firewalledServices/:service', args] as const
}

export function getNetworksNetworkIdFirewalledServicesServiceQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdFirewalledServicesServiceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].firewalledServices[':service'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdFirewalledServicesService<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
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
                    (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdFirewalledServicesServiceQueryKey>
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
      ...getNetworksNetworkIdFirewalledServicesServiceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdFirewalledServicesService<
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
    const mutationDefaults = getPutNetworksNetworkIdFirewalledServicesServiceMutationOptions<
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

export function getNetworksNetworkIdFloorPlansQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$get']>,
) {
  return ['networks', '/networks/:networkId/floorPlans', args] as const
}

export function getNetworksNetworkIdFloorPlansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['floorPlans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdFloorPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].floorPlans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdFloorPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['floorPlans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdFloorPlansQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdFloorPlans<
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
                Awaited<ReturnType<(typeof client.networks)[':networkId']['floorPlans']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$post']>,
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
    const mutationDefaults = getPostNetworksNetworkIdFloorPlansMutationOptions<
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

export function getNetworksNetworkIdFloorPlansFloorPlanIdQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/floorPlans/:floorPlanId', args] as const
}

export function getNetworksNetworkIdFloorPlansFloorPlanIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdFloorPlansFloorPlanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].floorPlans[':floorPlanId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdFloorPlansFloorPlanId<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']
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
                    (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdFloorPlansFloorPlanIdQueryKey>
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
      ...getNetworksNetworkIdFloorPlansFloorPlanIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdFloorPlansFloorPlanId<
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
    const mutationDefaults = getPutNetworksNetworkIdFloorPlansFloorPlanIdMutationOptions<
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

export function createDeleteNetworksNetworkIdFloorPlansFloorPlanId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteNetworksNetworkIdFloorPlansFloorPlanIdMutationOptions<
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

export function getNetworksNetworkIdL3FirewallRulesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>,
) {
  return ['networks', '/networks/:networkId/l3FirewallRules', args] as const
}

export function getNetworksNetworkIdL3FirewallRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdL3FirewallRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].l3FirewallRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdL3FirewallRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdL3FirewallRulesQueryKey>
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
      ...getNetworksNetworkIdL3FirewallRulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdL3FirewallRules<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['l3FirewallRules']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdL3FirewallRulesMutationOptions<
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

export function getNetworksNetworkIdL7FirewallRulesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>,
) {
  return ['networks', '/networks/:networkId/l7FirewallRules', args] as const
}

export function getNetworksNetworkIdL7FirewallRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdL7FirewallRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].l7FirewallRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdL7FirewallRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdL7FirewallRulesQueryKey>
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
      ...getNetworksNetworkIdL7FirewallRulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdL7FirewallRules<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['l7FirewallRules']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdL7FirewallRulesMutationOptions<
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

export function getNetworksNetworkIdL7FirewallRulesApplicationCategoriesQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/l7FirewallRules/applicationCategories', args] as const
}

export function getNetworksNetworkIdL7FirewallRulesApplicationCategoriesQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdL7FirewallRulesApplicationCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].l7FirewallRules.applicationCategories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdL7FirewallRulesApplicationCategories<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
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
                    (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdL7FirewallRulesApplicationCategoriesQueryKey>
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
      ...getNetworksNetworkIdL7FirewallRulesApplicationCategoriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdLatencyStatsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['latencyStats']['$get']>,
) {
  return ['networks', '/networks/:networkId/latencyStats', args] as const
}

export function getNetworksNetworkIdLatencyStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['latencyStats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['latencyStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdLatencyStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].latencyStats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdLatencyStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['latencyStats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['latencyStats']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdLatencyStatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdMerakiAuthUsersQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>,
) {
  return ['networks', '/networks/:networkId/merakiAuthUsers', args] as const
}

export function getNetworksNetworkIdMerakiAuthUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdMerakiAuthUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].merakiAuthUsers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdMerakiAuthUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdMerakiAuthUsersQueryKey>
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
      ...getNetworksNetworkIdMerakiAuthUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/merakiAuthUsers/:merakiAuthUserId', args] as const
}

export function getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].merakiAuthUsers[':merakiAuthUserId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdMerakiAuthUsersMerakiAuthUserId<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
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
                    (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdQueryKey>
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
      ...getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdOneToManyNatRulesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>,
) {
  return ['networks', '/networks/:networkId/oneToManyNatRules', args] as const
}

export function getNetworksNetworkIdOneToManyNatRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdOneToManyNatRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].oneToManyNatRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdOneToManyNatRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdOneToManyNatRulesQueryKey>
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
      ...getNetworksNetworkIdOneToManyNatRulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdOneToManyNatRules<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdOneToManyNatRulesMutationOptions<
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

export function getNetworksNetworkIdOneToOneNatRulesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>,
) {
  return ['networks', '/networks/:networkId/oneToOneNatRules', args] as const
}

export function getNetworksNetworkIdOneToOneNatRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdOneToOneNatRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].oneToOneNatRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdOneToOneNatRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdOneToOneNatRulesQueryKey>
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
      ...getNetworksNetworkIdOneToOneNatRulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdOneToOneNatRules<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdOneToOneNatRulesMutationOptions<
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

export function getNetworksNetworkIdPiiPiiKeysQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>,
) {
  return ['networks', '/networks/:networkId/pii/piiKeys', args] as const
}

export function getNetworksNetworkIdPiiPiiKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdPiiPiiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].pii.piiKeys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdPiiPiiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdPiiPiiKeysQueryKey>
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
      ...getNetworksNetworkIdPiiPiiKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdPiiRequestsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>,
) {
  return ['networks', '/networks/:networkId/pii/requests', args] as const
}

export function getNetworksNetworkIdPiiRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdPiiRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].pii.requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdPiiRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdPiiRequestsQueryKey>
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
      ...getNetworksNetworkIdPiiRequestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdPiiRequests<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['pii']['requests']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$post']>,
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
    const mutationDefaults = getPostNetworksNetworkIdPiiRequestsMutationOptions<
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

export function getNetworksNetworkIdPiiRequestsRequestIdQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/pii/requests/:requestId', args] as const
}

export function getNetworksNetworkIdPiiRequestsRequestIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdPiiRequestsRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].pii.requests[':requestId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdPiiRequestsRequestId<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
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
                    (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdPiiRequestsRequestIdQueryKey>
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
      ...getNetworksNetworkIdPiiRequestsRequestIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteNetworksNetworkIdPiiRequestsRequestId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteNetworksNetworkIdPiiRequestsRequestIdMutationOptions<
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

export function getNetworksNetworkIdPiiSmDevicesForKeyQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']>,
) {
  return ['networks', '/networks/:networkId/pii/smDevicesForKey', args] as const
}

export function getNetworksNetworkIdPiiSmDevicesForKeyQueryOptions<
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
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdPiiSmDevicesForKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].pii.smDevicesForKey.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdPiiSmDevicesForKey<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']
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
                    (typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdPiiSmDevicesForKeyQueryKey>
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
      ...getNetworksNetworkIdPiiSmDevicesForKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdPiiSmOwnersForKeyQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>,
) {
  return ['networks', '/networks/:networkId/pii/smOwnersForKey', args] as const
}

export function getNetworksNetworkIdPiiSmOwnersForKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdPiiSmOwnersForKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].pii.smOwnersForKey.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdPiiSmOwnersForKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']
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
                    (typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdPiiSmOwnersForKeyQueryKey>
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
      ...getNetworksNetworkIdPiiSmOwnersForKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdPortForwardingRulesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>,
) {
  return ['networks', '/networks/:networkId/portForwardingRules', args] as const
}

export function getNetworksNetworkIdPortForwardingRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdPortForwardingRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].portForwardingRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdPortForwardingRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['portForwardingRules']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdPortForwardingRulesQueryKey>
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
      ...getNetworksNetworkIdPortForwardingRulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdPortForwardingRules<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['portForwardingRules']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['portForwardingRules']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdPortForwardingRulesMutationOptions<
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

export function getNetworksNetworkIdSecurityIntrusionSettingsQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/security/intrusionSettings', args] as const
}

export function getNetworksNetworkIdSecurityIntrusionSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSecurityIntrusionSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].security.intrusionSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSecurityIntrusionSettings<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
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
                    (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSecurityIntrusionSettingsQueryKey>
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
      ...getNetworksNetworkIdSecurityIntrusionSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdSecurityIntrusionSettings<
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
    const mutationDefaults = getPutNetworksNetworkIdSecurityIntrusionSettingsMutationOptions<
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

export function getNetworksNetworkIdSecurityMalwareSettingsQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['security']['malwareSettings']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/security/malwareSettings', args] as const
}

export function getNetworksNetworkIdSecurityMalwareSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['security']['malwareSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSecurityMalwareSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].security.malwareSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSecurityMalwareSettings<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['security']['malwareSettings']['$get']
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
                    (typeof client.networks)[':networkId']['security']['malwareSettings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSecurityMalwareSettingsQueryKey>
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
      ...getNetworksNetworkIdSecurityMalwareSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdSecurityMalwareSettings<
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
    const mutationDefaults = getPutNetworksNetworkIdSecurityMalwareSettingsMutationOptions<
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

export function getNetworksNetworkIdSecurityEventsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['securityEvents']['$get']>,
) {
  return ['networks', '/networks/:networkId/securityEvents', args] as const
}

export function getNetworksNetworkIdSecurityEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['securityEvents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['securityEvents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSecurityEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].securityEvents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSecurityEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['securityEvents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['securityEvents']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdSecurityEventsQueryKey>
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
      ...getNetworksNetworkIdSecurityEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSiteToSiteVpnQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>,
) {
  return ['networks', '/networks/:networkId/siteToSiteVpn', args] as const
}

export function getNetworksNetworkIdSiteToSiteVpnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSiteToSiteVpnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].siteToSiteVpn.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSiteToSiteVpn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdSiteToSiteVpnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdSiteToSiteVpn<
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
                Awaited<ReturnType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdSiteToSiteVpnMutationOptions<
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

export function createPostNetworksNetworkIdSmBypassActivationLockAttempts<
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
    const mutationDefaults = getPostNetworksNetworkIdSmBypassActivationLockAttemptsMutationOptions<
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

export function getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts'][':attemptId']['$get']
  >,
) {
  return [
    'networks',
    '/networks/:networkId/sm/bypassActivationLockAttempts/:attemptId',
    args,
  ] as const
}

export function getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts'][':attemptId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].sm.bypassActivationLockAttempts[':attemptId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmBypassActivationLockAttemptsAttemptId<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts'][':attemptId']['$get']
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
                    (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts'][':attemptId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdQueryKey>
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
      ...getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdSmDeviceFields<
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
    const mutationDefaults = getPutNetworksNetworkIdSmDeviceFieldsMutationOptions<
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

export function createPutNetworksNetworkIdSmDeviceWipe<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['sm']['device']['wipe']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['sm']['device']['wipe']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdSmDeviceWipeMutationOptions<
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

export function createPostNetworksNetworkIdSmDeviceDeviceIdRefreshDetails<
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
    const mutationDefaults = getPostNetworksNetworkIdSmDeviceDeviceIdRefreshDetailsMutationOptions<
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

export function getNetworksNetworkIdSmDevicesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>,
) {
  return ['networks', '/networks/:networkId/sm/devices', args] as const
}

export function getNetworksNetworkIdSmDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].sm.devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdSmDevicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdSmDevicesCheckin<
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
    const mutationDefaults = getPutNetworksNetworkIdSmDevicesCheckinMutationOptions<
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

export function createPutNetworksNetworkIdSmDevicesTags<
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
    const mutationDefaults = getPutNetworksNetworkIdSmDevicesTagsMutationOptions<
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

export function createPostNetworksNetworkIdSmDevicesDeviceIdUnenroll<
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
    const mutationDefaults = getPostNetworksNetworkIdSmDevicesDeviceIdUnenrollMutationOptions<
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

export function getNetworksNetworkIdSmProfilesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>,
) {
  return ['networks', '/networks/:networkId/sm/profiles', args] as const
}

export function getNetworksNetworkIdSmProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].sm.profiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdSmProfilesQueryKey>
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
      ...getNetworksNetworkIdSmProfilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSmTargetGroupsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>,
) {
  return ['networks', '/networks/:networkId/sm/targetGroups', args] as const
}

export function getNetworksNetworkIdSmTargetGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmTargetGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].sm.targetGroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmTargetGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['sm']['targetGroups']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdSmTargetGroupsQueryKey>
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
      ...getNetworksNetworkIdSmTargetGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdSmTargetGroups<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$post']>,
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
    const mutationDefaults = getPostNetworksNetworkIdSmTargetGroupsMutationOptions<
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

export function getNetworksNetworkIdSmTargetGroupsTargetGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/targetGroups/:targetGroupId', args] as const
}

export function getNetworksNetworkIdSmTargetGroupsTargetGroupIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmTargetGroupsTargetGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].sm.targetGroups[':targetGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmTargetGroupsTargetGroupId<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
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
                    (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSmTargetGroupsTargetGroupIdQueryKey>
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
      ...getNetworksNetworkIdSmTargetGroupsTargetGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdSmTargetGroupsTargetGroupId<
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
    const mutationDefaults = getPutNetworksNetworkIdSmTargetGroupsTargetGroupIdMutationOptions<
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

export function createDeleteNetworksNetworkIdSmTargetGroupsTargetGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteNetworksNetworkIdSmTargetGroupsTargetGroupIdMutationOptions<
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

export function getNetworksNetworkIdSmUserUserIdDeviceProfilesQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/user/:userId/deviceProfiles', args] as const
}

export function getNetworksNetworkIdSmUserUserIdDeviceProfilesQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmUserUserIdDeviceProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].sm.user[':userId'].deviceProfiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmUserUserIdDeviceProfiles<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
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
                    (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSmUserUserIdDeviceProfilesQueryKey>
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
      ...getNetworksNetworkIdSmUserUserIdDeviceProfilesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSmUserUserIdSoftwaresQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/user/:userId/softwares', args] as const
}

export function getNetworksNetworkIdSmUserUserIdSoftwaresQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmUserUserIdSoftwaresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].sm.user[':userId'].softwares.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmUserUserIdSoftwares<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
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
                    (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSmUserUserIdSoftwaresQueryKey>
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
      ...getNetworksNetworkIdSmUserUserIdSoftwaresQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSmUsersQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['users']['$get']>,
) {
  return ['networks', '/networks/:networkId/sm/users', args] as const
}

export function getNetworksNetworkIdSmUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].sm.users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['sm']['users']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdSmUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSmDeviceIdCellularUsageHistoryQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/cellularUsageHistory', args] as const
}

export function getNetworksNetworkIdSmDeviceIdCellularUsageHistoryQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmDeviceIdCellularUsageHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].sm[':deviceId'].cellularUsageHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmDeviceIdCellularUsageHistory<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSmDeviceIdCellularUsageHistoryQueryKey>
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
      ...getNetworksNetworkIdSmDeviceIdCellularUsageHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSmDeviceIdCertsQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/certs', args] as const
}

export function getNetworksNetworkIdSmDeviceIdCertsQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmDeviceIdCertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].sm[':deviceId'].certs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmDeviceIdCerts<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSmDeviceIdCertsQueryKey>
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
      ...getNetworksNetworkIdSmDeviceIdCertsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSmDeviceIdDeviceProfilesQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/deviceProfiles', args] as const
}

export function getNetworksNetworkIdSmDeviceIdDeviceProfilesQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmDeviceIdDeviceProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].sm[':deviceId'].deviceProfiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmDeviceIdDeviceProfiles<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSmDeviceIdDeviceProfilesQueryKey>
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
      ...getNetworksNetworkIdSmDeviceIdDeviceProfilesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSmDeviceIdNetworkAdaptersQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/networkAdapters', args] as const
}

export function getNetworksNetworkIdSmDeviceIdNetworkAdaptersQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmDeviceIdNetworkAdaptersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].sm[':deviceId'].networkAdapters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmDeviceIdNetworkAdapters<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSmDeviceIdNetworkAdaptersQueryKey>
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
      ...getNetworksNetworkIdSmDeviceIdNetworkAdaptersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSmDeviceIdRestrictionsQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/restrictions', args] as const
}

export function getNetworksNetworkIdSmDeviceIdRestrictionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmDeviceIdRestrictionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].sm[':deviceId'].restrictions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmDeviceIdRestrictions<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSmDeviceIdRestrictionsQueryKey>
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
      ...getNetworksNetworkIdSmDeviceIdRestrictionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSmDeviceIdSecurityCentersQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/securityCenters', args] as const
}

export function getNetworksNetworkIdSmDeviceIdSecurityCentersQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmDeviceIdSecurityCentersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].sm[':deviceId'].securityCenters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmDeviceIdSecurityCenters<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSmDeviceIdSecurityCentersQueryKey>
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
      ...getNetworksNetworkIdSmDeviceIdSecurityCentersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSmDeviceIdSoftwaresQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/softwares', args] as const
}

export function getNetworksNetworkIdSmDeviceIdSoftwaresQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmDeviceIdSoftwaresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].sm[':deviceId'].softwares.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmDeviceIdSoftwares<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSmDeviceIdSoftwaresQueryKey>
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
      ...getNetworksNetworkIdSmDeviceIdSoftwaresQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSmDeviceIdWlanListsQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/wlanLists', args] as const
}

export function getNetworksNetworkIdSmDeviceIdWlanListsQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmDeviceIdWlanListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].sm[':deviceId'].wlanLists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmDeviceIdWlanLists<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']
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
                    (typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSmDeviceIdWlanListsQueryKey>
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
      ...getNetworksNetworkIdSmDeviceIdWlanListsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSnmpSettingsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>,
) {
  return ['networks', '/networks/:networkId/snmpSettings', args] as const
}

export function getNetworksNetworkIdSnmpSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSnmpSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].snmpSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSnmpSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdSnmpSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSplashLoginAttemptsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>,
) {
  return ['networks', '/networks/:networkId/splashLoginAttempts', args] as const
}

export function getNetworksNetworkIdSplashLoginAttemptsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSplashLoginAttemptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].splashLoginAttempts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSplashLoginAttempts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['splashLoginAttempts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdSplashLoginAttemptsQueryKey>
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
      ...getNetworksNetworkIdSplashLoginAttemptsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdSplit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostNetworksNetworkIdSplitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSsidsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['ssids']['$get']>,
) {
  return ['networks', '/networks/:networkId/ssids', args] as const
}

export function getNetworksNetworkIdSsidsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['ssids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSsidsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].ssids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSsids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['ssids']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdSsidsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSsidsNumberQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>,
) {
  return ['networks', '/networks/:networkId/ssids/:number', args] as const
}

export function getNetworksNetworkIdSsidsNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSsidsNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].ssids[':number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSsidsNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdSsidsNumberQueryKey>
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
      ...getNetworksNetworkIdSsidsNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdSsidsNumber<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['ssids'][':number']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdSsidsNumberMutationOptions<
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

export function getNetworksNetworkIdSsidsNumberL3FirewallRulesQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/ssids/:number/l3FirewallRules', args] as const
}

export function getNetworksNetworkIdSsidsNumberL3FirewallRulesQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSsidsNumberL3FirewallRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].ssids[':number'].l3FirewallRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSsidsNumberL3FirewallRules<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
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
                    (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSsidsNumberL3FirewallRulesQueryKey>
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
      ...getNetworksNetworkIdSsidsNumberL3FirewallRulesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdSsidsNumberL3FirewallRules<
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
    const mutationDefaults = getPutNetworksNetworkIdSsidsNumberL3FirewallRulesMutationOptions<
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

export function getNetworksNetworkIdSsidsNumberSplashSettingsQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/ssids/:number/splashSettings', args] as const
}

export function getNetworksNetworkIdSsidsNumberSplashSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSsidsNumberSplashSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].ssids[':number'].splashSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSsidsNumberSplashSettings<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
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
                    (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSsidsNumberSplashSettingsQueryKey>
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
      ...getNetworksNetworkIdSsidsNumberSplashSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdSsidsNumberSplashSettings<
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
    const mutationDefaults = getPutNetworksNetworkIdSsidsNumberSplashSettingsMutationOptions<
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

export function getNetworksNetworkIdStaticRoutesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>,
) {
  return ['networks', '/networks/:networkId/staticRoutes', args] as const
}

export function getNetworksNetworkIdStaticRoutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdStaticRoutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].staticRoutes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdStaticRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdStaticRoutesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdStaticRoutes<
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
                Awaited<ReturnType<(typeof client.networks)[':networkId']['staticRoutes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$post']>,
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
    const mutationDefaults = getPostNetworksNetworkIdStaticRoutesMutationOptions<
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

export function getNetworksNetworkIdStaticRoutesStaticRouteIdQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/staticRoutes/:staticRouteId', args] as const
}

export function getNetworksNetworkIdStaticRoutesStaticRouteIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdStaticRoutesStaticRouteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].staticRoutes[':staticRouteId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdStaticRoutesStaticRouteId<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
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
                    (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdStaticRoutesStaticRouteIdQueryKey>
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
      ...getNetworksNetworkIdStaticRoutesStaticRouteIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdStaticRoutesStaticRouteId<
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
    const mutationDefaults = getPutNetworksNetworkIdStaticRoutesStaticRouteIdMutationOptions<
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

export function createDeleteNetworksNetworkIdStaticRoutesStaticRouteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteNetworksNetworkIdStaticRoutesStaticRouteIdMutationOptions<
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

export function createPostNetworksNetworkIdSwapWarmSpare<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['swapWarmSpare']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['swapWarmSpare']['$post']>,
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
    const mutationDefaults = getPostNetworksNetworkIdSwapWarmSpareMutationOptions<
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

export function getNetworksNetworkIdSwitchLinkAggregationsQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/switch/linkAggregations', args] as const
}

export function getNetworksNetworkIdSwitchLinkAggregationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSwitchLinkAggregationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].switch.linkAggregations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSwitchLinkAggregations<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSwitchLinkAggregationsQueryKey>
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
      ...getNetworksNetworkIdSwitchLinkAggregationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdSwitchLinkAggregations<
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
    const mutationDefaults = getPostNetworksNetworkIdSwitchLinkAggregationsMutationOptions<
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

export function createPutNetworksNetworkIdSwitchLinkAggregationsLinkAggregationId<
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
    const mutationDefaults =
      getPutNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdMutationOptions<
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

export function createDeleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdMutationOptions<
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

export function getNetworksNetworkIdSwitchPortSchedulesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$get']>,
) {
  return ['networks', '/networks/:networkId/switch/portSchedules', args] as const
}

export function getNetworksNetworkIdSwitchPortSchedulesQueryOptions<
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
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSwitchPortSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].switch.portSchedules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSwitchPortSchedules<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['switch']['portSchedules']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['portSchedules']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSwitchPortSchedulesQueryKey>
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
      ...getNetworksNetworkIdSwitchPortSchedulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdSwitchPortSchedules<
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
    const mutationDefaults = getPostNetworksNetworkIdSwitchPortSchedulesMutationOptions<
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

export function createPutNetworksNetworkIdSwitchPortSchedulesPortScheduleId<
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
    const mutationDefaults =
      getPutNetworksNetworkIdSwitchPortSchedulesPortScheduleIdMutationOptions<
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

export function createDeleteNetworksNetworkIdSwitchPortSchedulesPortScheduleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteNetworksNetworkIdSwitchPortSchedulesPortScheduleIdMutationOptions<
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

export function getNetworksNetworkIdSwitchSettingsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>,
) {
  return ['networks', '/networks/:networkId/switch/settings', args] as const
}

export function getNetworksNetworkIdSwitchSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSwitchSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSwitchSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdSwitchSettingsQueryKey>
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
      ...getNetworksNetworkIdSwitchSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdSwitchSettings<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdSwitchSettingsMutationOptions<
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

export function getNetworksNetworkIdSwitchSettingsMtuQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/mtu', args] as const
}

export function getNetworksNetworkIdSwitchSettingsMtuQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSwitchSettingsMtuQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.mtu.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSwitchSettingsMtu<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSwitchSettingsMtuQueryKey>
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
      ...getNetworksNetworkIdSwitchSettingsMtuQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdSwitchSettingsMtu<
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
    const mutationDefaults = getPutNetworksNetworkIdSwitchSettingsMtuMutationOptions<
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

export function getNetworksNetworkIdSwitchSettingsMulticastQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/multicast', args] as const
}

export function getNetworksNetworkIdSwitchSettingsMulticastQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSwitchSettingsMulticastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.multicast.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSwitchSettingsMulticast<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSwitchSettingsMulticastQueryKey>
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
      ...getNetworksNetworkIdSwitchSettingsMulticastQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdSwitchSettingsMulticast<
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
    const mutationDefaults = getPutNetworksNetworkIdSwitchSettingsMulticastMutationOptions<
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

export function getNetworksNetworkIdSwitchSettingsQosRulesQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/qosRules', args] as const
}

export function getNetworksNetworkIdSwitchSettingsQosRulesQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSwitchSettingsQosRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.qosRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSwitchSettingsQosRules<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSwitchSettingsQosRulesQueryKey>
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
      ...getNetworksNetworkIdSwitchSettingsQosRulesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdSwitchSettingsQosRules<
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
    const mutationDefaults = getPostNetworksNetworkIdSwitchSettingsQosRulesMutationOptions<
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

export function getNetworksNetworkIdSwitchSettingsQosRulesOrderQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/qosRules/order', args] as const
}

export function getNetworksNetworkIdSwitchSettingsQosRulesOrderQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSwitchSettingsQosRulesOrderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.qosRules.order.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSwitchSettingsQosRulesOrder<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSwitchSettingsQosRulesOrderQueryKey>
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
      ...getNetworksNetworkIdSwitchSettingsQosRulesOrderQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdSwitchSettingsQosRulesOrder<
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
    const mutationDefaults = getPutNetworksNetworkIdSwitchSettingsQosRulesOrderMutationOptions<
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

export function getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/qosRules/:qosRuleId', args] as const
}

export function getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.qosRules[':qosRuleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSwitchSettingsQosRulesQosRuleId<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdQueryKey>
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
      ...getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdSwitchSettingsQosRulesQosRuleId<
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
    const mutationDefaults = getPutNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdMutationOptions<
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

export function createDeleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdMutationOptions<
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

export function getNetworksNetworkIdSwitchSettingsStormControlQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/stormControl', args] as const
}

export function getNetworksNetworkIdSwitchSettingsStormControlQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSwitchSettingsStormControlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].switch.settings.stormControl.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSwitchSettingsStormControl<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
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
                    (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSwitchSettingsStormControlQueryKey>
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
      ...getNetworksNetworkIdSwitchSettingsStormControlQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdSwitchSettingsStormControl<
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
    const mutationDefaults = getPutNetworksNetworkIdSwitchSettingsStormControlMutationOptions<
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

export function getNetworksNetworkIdSwitchStacksQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$get']>,
) {
  return ['networks', '/networks/:networkId/switchStacks', args] as const
}

export function getNetworksNetworkIdSwitchStacksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['switchStacks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSwitchStacksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].switchStacks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSwitchStacks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['switchStacks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdSwitchStacksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdSwitchStacks<
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
                Awaited<ReturnType<(typeof client.networks)[':networkId']['switchStacks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$post']>,
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
    const mutationDefaults = getPostNetworksNetworkIdSwitchStacksMutationOptions<
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

export function getNetworksNetworkIdSwitchStacksSwitchStackIdQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/switchStacks/:switchStackId', args] as const
}

export function getNetworksNetworkIdSwitchStacksSwitchStackIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSwitchStacksSwitchStackIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].switchStacks[':switchStackId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSwitchStacksSwitchStackId<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
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
                    (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSwitchStacksSwitchStackIdQueryKey>
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
      ...getNetworksNetworkIdSwitchStacksSwitchStackIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteNetworksNetworkIdSwitchStacksSwitchStackId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteNetworksNetworkIdSwitchStacksSwitchStackIdMutationOptions<
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

export function createPostNetworksNetworkIdSwitchStacksSwitchStackIdAdd<
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
    const mutationDefaults = getPostNetworksNetworkIdSwitchStacksSwitchStackIdAddMutationOptions<
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

export function createPostNetworksNetworkIdSwitchStacksSwitchStackIdRemove<
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
    const mutationDefaults = getPostNetworksNetworkIdSwitchStacksSwitchStackIdRemoveMutationOptions<
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

export function getNetworksNetworkIdSyslogServersQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$get']>,
) {
  return ['networks', '/networks/:networkId/syslogServers', args] as const
}

export function getNetworksNetworkIdSyslogServersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['syslogServers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSyslogServersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].syslogServers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSyslogServers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['syslogServers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdSyslogServersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdSyslogServers<
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
                Awaited<ReturnType<(typeof client.networks)[':networkId']['syslogServers']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdSyslogServersMutationOptions<
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

export function getNetworksNetworkIdTrafficQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['traffic']['$get']>,
) {
  return ['networks', '/networks/:networkId/traffic', args] as const
}

export function getNetworksNetworkIdTrafficQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['traffic']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['traffic']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdTrafficQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].traffic.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdTraffic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['traffic']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['traffic']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdTrafficQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdUnbind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostNetworksNetworkIdUnbindMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNetworksNetworkIdUplinkSettingsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>,
) {
  return ['networks', '/networks/:networkId/uplinkSettings', args] as const
}

export function getNetworksNetworkIdUplinkSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdUplinkSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].uplinkSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdUplinkSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdUplinkSettingsQueryKey>
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
      ...getNetworksNetworkIdUplinkSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdUplinkSettings<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['uplinkSettings']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdUplinkSettingsMutationOptions<
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

export function getNetworksNetworkIdVlansQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlans']['$get']>,
) {
  return ['networks', '/networks/:networkId/vlans', args] as const
}

export function getNetworksNetworkIdVlansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdVlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].vlans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdVlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['vlans']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdVlansQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdVlans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostNetworksNetworkIdVlansMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNetworksNetworkIdVlansVlanIdQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>,
) {
  return ['networks', '/networks/:networkId/vlans/:vlanId', args] as const
}

export function getNetworksNetworkIdVlansVlanIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdVlansVlanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].vlans[':vlanId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdVlansVlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdVlansVlanIdQueryKey>
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
      ...getNetworksNetworkIdVlansVlanIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdVlansVlanId<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdVlansVlanIdMutationOptions<
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

export function createDeleteNetworksNetworkIdVlansVlanId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteNetworksNetworkIdVlansVlanIdMutationOptions<
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

export function getNetworksNetworkIdVlansEnabledStateQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>,
) {
  return ['networks', '/networks/:networkId/vlansEnabledState', args] as const
}

export function getNetworksNetworkIdVlansEnabledStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdVlansEnabledStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].vlansEnabledState.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdVlansEnabledState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdVlansEnabledStateQueryKey>
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
      ...getNetworksNetworkIdVlansEnabledStateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdVlansEnabledState<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['vlansEnabledState']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdVlansEnabledStateMutationOptions<
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

export function getNetworksNetworkIdWarmSpareSettingsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>,
) {
  return ['networks', '/networks/:networkId/warmSpareSettings', args] as const
}

export function getNetworksNetworkIdWarmSpareSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdWarmSpareSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].warmSpareSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdWarmSpareSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getNetworksNetworkIdWarmSpareSettingsQueryKey>
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
      ...getNetworksNetworkIdWarmSpareSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdWarmSpareSettings<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['warmSpareSettings']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdWarmSpareSettingsMutationOptions<
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

export function getNetworksNetworkIdWirelessRfProfilesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']>,
) {
  return ['networks', '/networks/:networkId/wireless/rfProfiles', args] as const
}

export function getNetworksNetworkIdWirelessRfProfilesQueryOptions<
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
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdWirelessRfProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].wireless.rfProfiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdWirelessRfProfiles<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']
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
                    (typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdWirelessRfProfilesQueryKey>
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
      ...getNetworksNetworkIdWirelessRfProfilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdWirelessRfProfiles<
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
    const mutationDefaults = getPostNetworksNetworkIdWirelessRfProfilesMutationOptions<
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

export function getNetworksNetworkIdWirelessRfProfilesRfProfileIdQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/wireless/rfProfiles/:rfProfileId', args] as const
}

export function getNetworksNetworkIdWirelessRfProfilesRfProfileIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdWirelessRfProfilesRfProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].wireless.rfProfiles[':rfProfileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdWirelessRfProfilesRfProfileId<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
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
                    (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdWirelessRfProfilesRfProfileIdQueryKey>
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
      ...getNetworksNetworkIdWirelessRfProfilesRfProfileIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdWirelessRfProfilesRfProfileId<
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
    const mutationDefaults = getPutNetworksNetworkIdWirelessRfProfilesRfProfileIdMutationOptions<
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

export function createDeleteNetworksNetworkIdWirelessRfProfilesRfProfileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteNetworksNetworkIdWirelessRfProfilesRfProfileIdMutationOptions<
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

export function getNetworksNetworkIdWirelessSettingsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>,
) {
  return ['networks', '/networks/:networkId/wireless/settings', args] as const
}

export function getNetworksNetworkIdWirelessSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdWirelessSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].wireless.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdWirelessSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getNetworksNetworkIdWirelessSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNetworksNetworkIdWirelessSettings<
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
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['wireless']['settings']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['wireless']['settings']['$put']>,
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
    const mutationDefaults = getPutNetworksNetworkIdWirelessSettingsMutationOptions<
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

export function createPutNetworksNetworkIdSmDevicesLock<
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
    const mutationDefaults = getPutNetworksNetworkIdSmDevicesLockMutationOptions<
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

export function getNetworksNetworkIdSmIdConnectivityQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']
  >,
) {
  return ['networks', '/networks/:network_id/sm/:id/connectivity', args] as const
}

export function getNetworksNetworkIdSmIdConnectivityQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmIdConnectivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':network_id'].sm[':id'].connectivity.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmIdConnectivity<
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
  args: () => InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']
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
                    (typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSmIdConnectivityQueryKey>
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
      ...getNetworksNetworkIdSmIdConnectivityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSmIdDesktopLogsQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']
  >,
) {
  return ['networks', '/networks/:network_id/sm/:id/desktopLogs', args] as const
}

export function getNetworksNetworkIdSmIdDesktopLogsQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmIdDesktopLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':network_id'].sm[':id'].desktopLogs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmIdDesktopLogs<
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
  args: () => InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']
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
                    (typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSmIdDesktopLogsQueryKey>
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
      ...getNetworksNetworkIdSmIdDesktopLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSmIdDeviceCommandLogsQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
  >,
) {
  return ['networks', '/networks/:network_id/sm/:id/deviceCommandLogs', args] as const
}

export function getNetworksNetworkIdSmIdDeviceCommandLogsQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmIdDeviceCommandLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':network_id'].sm[':id'].deviceCommandLogs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmIdDeviceCommandLogs<
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
  args: () => InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
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
                    (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSmIdDeviceCommandLogsQueryKey>
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
      ...getNetworksNetworkIdSmIdDeviceCommandLogsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNetworksNetworkIdSmIdPerformanceHistoryQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
  >,
) {
  return ['networks', '/networks/:network_id/sm/:id/performanceHistory', args] as const
}

export function getNetworksNetworkIdSmIdPerformanceHistoryQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdSmIdPerformanceHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':network_id'].sm[':id'].performanceHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdSmIdPerformanceHistory<
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
  args: () => InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
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
                    (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNetworksNetworkIdSmIdPerformanceHistoryQueryKey>
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
      ...getNetworksNetworkIdSmIdPerformanceHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsQueryKey() {
  return ['organizations', '/organizations'] as const
}

export function getOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsQueryKey>
  >({
    queryKey: getOrganizationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsQueryKey>
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
    return { ...getOrganizationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOrganizationsOrganizationIdQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId', args] as const
}

export function getOrganizationsOrganizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getOrganizationsOrganizationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdActionBatchesQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['actionBatches']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/actionBatches', args] as const
}

export function getOrganizationsOrganizationIdActionBatchesQueryOptions<
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
  args: InferRequestType<(typeof client.organizations)[':organizationId']['actionBatches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdActionBatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].actionBatches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdActionBatches<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['actionBatches']['$get']
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
                    (typeof client.organizations)[':organizationId']['actionBatches']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdActionBatchesQueryKey>
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
      ...getOrganizationsOrganizationIdActionBatchesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationIdActionBatches<
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
    const mutationDefaults = getPostOrganizationsOrganizationIdActionBatchesMutationOptions<
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

export function createPutOrganizationsOrganizationIdActionBatchesActionBatchId<
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
    const mutationDefaults =
      getPutOrganizationsOrganizationIdActionBatchesActionBatchIdMutationOptions<
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

export function createDeleteOrganizationsOrganizationIdActionBatchesActionBatchId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdActionBatchesActionBatchIdMutationOptions<
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

export function getOrganizationsOrganizationIdAdminsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/admins', args] as const
}

export function getOrganizationsOrganizationIdAdminsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['admins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdAdminsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].admins.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdAdmins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['admins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getOrganizationsOrganizationIdAdminsQueryKey>
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
      ...getOrganizationsOrganizationIdAdminsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationIdAdmins<
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
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['admins']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$post']>,
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
    const mutationDefaults = getPostOrganizationsOrganizationIdAdminsMutationOptions<
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

export function createPutOrganizationsOrganizationIdAdminsAdminId<
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
    const mutationDefaults = getPutOrganizationsOrganizationIdAdminsAdminIdMutationOptions<
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

export function createDeleteOrganizationsOrganizationIdAdminsAdminId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteOrganizationsOrganizationIdAdminsAdminIdMutationOptions<
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

export function getOrganizationsOrganizationIdApiRequestsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/apiRequests', args] as const
}

export function getOrganizationsOrganizationIdApiRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdApiRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].apiRequests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdApiRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['apiRequests']['$get']
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
                    (typeof client.organizations)[':organizationId']['apiRequests']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdApiRequestsQueryKey>
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
      ...getOrganizationsOrganizationIdApiRequestsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdApiRequestsOverviewQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/apiRequests/overview', args] as const
}

export function getOrganizationsOrganizationIdApiRequestsOverviewQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdApiRequestsOverviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].apiRequests.overview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdApiRequestsOverview<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
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
                    (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdApiRequestsOverviewQueryKey>
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
      ...getOrganizationsOrganizationIdApiRequestsOverviewQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationIdClaim<
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
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['claim']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['claim']['$post']>,
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
    const mutationDefaults = getPostOrganizationsOrganizationIdClaimMutationOptions<
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

export function createPostOrganizationsOrganizationIdClone<
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
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['clone']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['clone']['$post']>,
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
    const mutationDefaults = getPostOrganizationsOrganizationIdCloneMutationOptions<
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

export function getOrganizationsOrganizationIdConfigTemplatesQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/configTemplates', args] as const
}

export function getOrganizationsOrganizationIdConfigTemplatesQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdConfigTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].configTemplates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdConfigTemplates<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates']['$get']
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
                    (typeof client.organizations)[':organizationId']['configTemplates']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdConfigTemplatesQueryKey>
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
      ...getOrganizationsOrganizationIdConfigTemplatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdMutationOptions<
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

export function getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switchProfiles']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/configTemplates/:configTemplateId/switchProfiles',
    args,
  ] as const
}

export function getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switchProfiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].configTemplates[
          ':configTemplateId'
        ].switchProfiles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfiles<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switchProfiles']['$get']
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
      ...getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdConfigurationChangesQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/configurationChanges', args] as const
}

export function getOrganizationsOrganizationIdConfigurationChangesQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdConfigurationChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].configurationChanges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdConfigurationChanges<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
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
                    (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdConfigurationChangesQueryKey>
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
      ...getOrganizationsOrganizationIdConfigurationChangesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdDeviceStatusesQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['deviceStatuses']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/deviceStatuses', args] as const
}

export function getOrganizationsOrganizationIdDeviceStatusesQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['deviceStatuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdDeviceStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].deviceStatuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdDeviceStatuses<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['deviceStatuses']['$get']
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
                    (typeof client.organizations)[':organizationId']['deviceStatuses']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdDeviceStatusesQueryKey>
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
      ...getOrganizationsOrganizationIdDeviceStatusesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdDevicesQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['devices']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/devices', args] as const
}

export function getOrganizationsOrganizationIdDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':organizationId']['devices']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getOrganizationsOrganizationIdDevicesQueryKey>
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
      ...getOrganizationsOrganizationIdDevicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdInsightMonitoredMediaServersQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/insight/monitoredMediaServers',
    args,
  ] as const
}

export function getOrganizationsOrganizationIdInsightMonitoredMediaServersQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdInsightMonitoredMediaServersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].insight.monitoredMediaServers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdInsightMonitoredMediaServers<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$get']
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
                    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdInsightMonitoredMediaServersQueryKey>
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
      ...getOrganizationsOrganizationIdInsightMonitoredMediaServersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationIdInsightMonitoredMediaServers<
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
    const mutationDefaults =
      getPostOrganizationsOrganizationIdInsightMonitoredMediaServersMutationOptions<
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

export function getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/insight/monitoredMediaServers/:monitoredMediaServerId',
    args,
  ] as const
}

export function getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].insight.monitoredMediaServers[
          ':monitoredMediaServerId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerId<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$get']
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
      ...getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerId<
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
    const mutationDefaults =
      getPutOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdMutationOptions<
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

export function createDeleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdMutationOptions<
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

export function getOrganizationsOrganizationIdInventoryQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['inventory']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/inventory', args] as const
}

export function getOrganizationsOrganizationIdInventoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['inventory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['inventory']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdInventoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].inventory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdInventory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['inventory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['inventory']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getOrganizationsOrganizationIdInventoryQueryKey>
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
      ...getOrganizationsOrganizationIdInventoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdLicenseStateQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['licenseState']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/licenseState', args] as const
}

export function getOrganizationsOrganizationIdLicenseStateQueryOptions<
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
  args: InferRequestType<(typeof client.organizations)[':organizationId']['licenseState']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdLicenseStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].licenseState.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdLicenseState<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['licenseState']['$get']
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
                    (typeof client.organizations)[':organizationId']['licenseState']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdLicenseStateQueryKey>
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
      ...getOrganizationsOrganizationIdLicenseStateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdLicensesQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['licenses']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/licenses', args] as const
}

export function getOrganizationsOrganizationIdLicensesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['licenses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['licenses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdLicensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].licenses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdLicenses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['licenses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['licenses']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getOrganizationsOrganizationIdLicensesQueryKey>
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
      ...getOrganizationsOrganizationIdLicensesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationIdLicensesAssignSeats<
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
    const mutationDefaults = getPostOrganizationsOrganizationIdLicensesAssignSeatsMutationOptions<
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

export function createPostOrganizationsOrganizationIdLicensesMoveSeats<
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
    const mutationDefaults = getPostOrganizationsOrganizationIdLicensesMoveSeatsMutationOptions<
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

export function createPostOrganizationsOrganizationIdLicensesRenewSeats<
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
    const mutationDefaults = getPostOrganizationsOrganizationIdLicensesRenewSeatsMutationOptions<
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

export function getOrganizationsOrganizationIdLicensesLicenseIdQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/licenses/:licenseId', args] as const
}

export function getOrganizationsOrganizationIdLicensesLicenseIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdLicensesLicenseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].licenses[':licenseId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdLicensesLicenseId<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
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
                    (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdLicensesLicenseIdQueryKey>
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
      ...getOrganizationsOrganizationIdLicensesLicenseIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdNetworksQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['networks']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/networks', args] as const
}

export function getOrganizationsOrganizationIdNetworksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['networks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['networks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdNetworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].networks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdNetworks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['networks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['networks']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getOrganizationsOrganizationIdNetworksQueryKey>
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
      ...getOrganizationsOrganizationIdNetworksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationIdNetworks<
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
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['networks']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['networks']['$post']>,
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
    const mutationDefaults = getPostOrganizationsOrganizationIdNetworksMutationOptions<
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

export function createPostOrganizationsOrganizationIdNetworksCombine<
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
    const mutationDefaults = getPostOrganizationsOrganizationIdNetworksCombineMutationOptions<
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

export function getOrganizationsOrganizationIdOpenapiSpecQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/openapiSpec', args] as const
}

export function getOrganizationsOrganizationIdOpenapiSpecQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdOpenapiSpecQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].openapiSpec.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOpenapiSpec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['openapiSpec']['$get']
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
                    (typeof client.organizations)[':organizationId']['openapiSpec']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOpenapiSpecQueryKey>
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
      ...getOrganizationsOrganizationIdOpenapiSpecQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdSamlRolesQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/samlRoles', args] as const
}

export function getOrganizationsOrganizationIdSamlRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdSamlRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].samlRoles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdSamlRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['samlRoles']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getOrganizationsOrganizationIdSamlRolesQueryKey>
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
      ...getOrganizationsOrganizationIdSamlRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationIdSamlRoles<
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
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['samlRoles']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['samlRoles']['$post']>,
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
    const mutationDefaults = getPostOrganizationsOrganizationIdSamlRolesMutationOptions<
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

export function getOrganizationsOrganizationIdSamlRolesSamlRoleIdQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/samlRoles/:samlRoleId', args] as const
}

export function getOrganizationsOrganizationIdSamlRolesSamlRoleIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdSamlRolesSamlRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].samlRoles[':samlRoleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdSamlRolesSamlRoleId<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
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
                    (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdSamlRolesSamlRoleIdQueryKey>
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
      ...getOrganizationsOrganizationIdSamlRolesSamlRoleIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutOrganizationsOrganizationIdSamlRolesSamlRoleId<
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
    const mutationDefaults = getPutOrganizationsOrganizationIdSamlRolesSamlRoleIdMutationOptions<
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

export function getOrganizationsOrganizationIdSecurityIntrusionSettingsQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/security/intrusionSettings',
    args,
  ] as const
}

export function getOrganizationsOrganizationIdSecurityIntrusionSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdSecurityIntrusionSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].security.intrusionSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdSecurityIntrusionSettings<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$get']
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
                    (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdSecurityIntrusionSettingsQueryKey>
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
      ...getOrganizationsOrganizationIdSecurityIntrusionSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutOrganizationsOrganizationIdSecurityIntrusionSettings<
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
    const mutationDefaults =
      getPutOrganizationsOrganizationIdSecurityIntrusionSettingsMutationOptions<
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

export function getOrganizationsOrganizationIdSecurityEventsQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['securityEvents']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/securityEvents', args] as const
}

export function getOrganizationsOrganizationIdSecurityEventsQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['securityEvents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdSecurityEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].securityEvents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdSecurityEvents<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['securityEvents']['$get']
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
                    (typeof client.organizations)[':organizationId']['securityEvents']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdSecurityEventsQueryKey>
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
      ...getOrganizationsOrganizationIdSecurityEventsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdSnmpQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['snmp']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/snmp', args] as const
}

export function getOrganizationsOrganizationIdSnmpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['snmp']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['snmp']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdSnmpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].snmp.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdSnmp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['snmp']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':organizationId']['snmp']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getOrganizationsOrganizationIdSnmpQueryKey>
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
      ...getOrganizationsOrganizationIdSnmpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdThirdPartyVPNPeersQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/thirdPartyVPNPeers', args] as const
}

export function getOrganizationsOrganizationIdThirdPartyVPNPeersQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdThirdPartyVPNPeersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].thirdPartyVPNPeers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdThirdPartyVPNPeers<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']
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
                    (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdThirdPartyVPNPeersQueryKey>
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
      ...getOrganizationsOrganizationIdThirdPartyVPNPeersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutOrganizationsOrganizationIdThirdPartyVPNPeers<
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
    const mutationDefaults = getPutOrganizationsOrganizationIdThirdPartyVPNPeersMutationOptions<
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

export function getOrganizationsOrganizationIdUplinksLossAndLatencyQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/uplinksLossAndLatency', args] as const
}

export function getOrganizationsOrganizationIdUplinksLossAndLatencyQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdUplinksLossAndLatencyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].uplinksLossAndLatency.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdUplinksLossAndLatency<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
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
                    (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdUplinksLossAndLatencyQueryKey>
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
      ...getOrganizationsOrganizationIdUplinksLossAndLatencyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdVpnFirewallRulesQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/vpnFirewallRules', args] as const
}

export function getOrganizationsOrganizationIdVpnFirewallRulesQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdVpnFirewallRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].vpnFirewallRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdVpnFirewallRules<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']
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
                    (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdVpnFirewallRulesQueryKey>
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
      ...getOrganizationsOrganizationIdVpnFirewallRulesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutOrganizationsOrganizationIdVpnFirewallRules<
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
    const mutationDefaults = getPutOrganizationsOrganizationIdVpnFirewallRulesMutationOptions<
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
