import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetDevicesSerialCameraAnalyticsLiveKey(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['live']['$get']>,
) {
  return ['devices', '/devices/:serial/camera/analytics/live', args] as const
}

export function useGetDevicesSerialCameraAnalyticsLive<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['live']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.devices)[':serial']['camera']['analytics']['live']['$get']>
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
        ? getGetDevicesSerialCameraAnalyticsLiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.devices)[':serial']['camera']['analytics']['live']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.devices[':serial'].camera.analytics.live.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesSerialCameraAnalyticsLive<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['live']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.devices)[':serial']['camera']['analytics']['live']['$get']>
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
        ? getGetDevicesSerialCameraAnalyticsLiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.devices)[':serial']['camera']['analytics']['live']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.devices[':serial'].camera.analytics.live.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDevicesSerialCameraAnalyticsOverviewKey(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']
  >,
) {
  return ['devices', '/devices/:serial/camera/analytics/overview', args] as const
}

export function useGetDevicesSerialCameraAnalyticsOverview<TError = unknown>(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicesSerialCameraAnalyticsOverviewKey(args)
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
                (typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']
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
          client.devices[':serial'].camera.analytics.overview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesSerialCameraAnalyticsOverview<TError = unknown>(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicesSerialCameraAnalyticsOverviewKey(args)
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
                (typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']
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
          client.devices[':serial'].camera.analytics.overview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDevicesSerialCameraAnalyticsRecentKey(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']
  >,
) {
  return ['devices', '/devices/:serial/camera/analytics/recent', args] as const
}

export function useGetDevicesSerialCameraAnalyticsRecent<TError = unknown>(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicesSerialCameraAnalyticsRecentKey(args)
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
                (typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.devices[':serial'].camera.analytics.recent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesSerialCameraAnalyticsRecent<TError = unknown>(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicesSerialCameraAnalyticsRecentKey(args)
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
                (typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.devices[':serial'].camera.analytics.recent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDevicesSerialCameraAnalyticsZonesKey(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']
  >,
) {
  return ['devices', '/devices/:serial/camera/analytics/zones', args] as const
}

export function useGetDevicesSerialCameraAnalyticsZones<TError = unknown>(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']>
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
        ? getGetDevicesSerialCameraAnalyticsZonesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.devices[':serial'].camera.analytics.zones.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesSerialCameraAnalyticsZones<TError = unknown>(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']>
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
        ? getGetDevicesSerialCameraAnalyticsZonesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.devices[':serial'].camera.analytics.zones.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDevicesSerialCameraAnalyticsZonesZoneIdHistoryKey(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
  >,
) {
  return ['devices', '/devices/:serial/camera/analytics/zones/:zoneId/history', args] as const
}

export function useGetDevicesSerialCameraAnalyticsZonesZoneIdHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicesSerialCameraAnalyticsZonesZoneIdHistoryKey(args)
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
                (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
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
          client.devices[':serial'].camera.analytics.zones[':zoneId'].history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesSerialCameraAnalyticsZonesZoneIdHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicesSerialCameraAnalyticsZonesZoneIdHistoryKey(args)
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
                (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
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
          client.devices[':serial'].camera.analytics.zones[':zoneId'].history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDevicesSerialCameraQualityAndRetentionSettingsKey(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
  >,
) {
  return ['devices', '/devices/:serial/camera/qualityAndRetentionSettings', args] as const
}

export function useGetDevicesSerialCameraQualityAndRetentionSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicesSerialCameraQualityAndRetentionSettingsKey(args)
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
                (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
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
          client.devices[':serial'].camera.qualityAndRetentionSettings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesSerialCameraQualityAndRetentionSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicesSerialCameraQualityAndRetentionSettingsKey(args)
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
                (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
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
          client.devices[':serial'].camera.qualityAndRetentionSettings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDevicesSerialCameraQualityAndRetentionSettingsKey() {
  return ['devices', '/devices/:serial/camera/qualityAndRetentionSettings', 'PUT'] as const
}

export function usePutDevicesSerialCameraQualityAndRetentionSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDevicesSerialCameraQualityAndRetentionSettingsKey()
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
            (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.devices[':serial'].camera.qualityAndRetentionSettings.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDevicesSerialCameraVideoSettingsKey(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['video']['settings']['$get']>,
) {
  return ['devices', '/devices/:serial/camera/video/settings', args] as const
}

export function useGetDevicesSerialCameraVideoSettings<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['video']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.devices)[':serial']['camera']['video']['settings']['$get']>
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
        ? getGetDevicesSerialCameraVideoSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.devices)[':serial']['camera']['video']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.devices[':serial'].camera.video.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesSerialCameraVideoSettings<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['video']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.devices)[':serial']['camera']['video']['settings']['$get']>
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
        ? getGetDevicesSerialCameraVideoSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.devices)[':serial']['camera']['video']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.devices[':serial'].camera.video.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDevicesSerialCameraVideoSettingsKey() {
  return ['devices', '/devices/:serial/camera/video/settings', 'PUT'] as const
}

export function usePutDevicesSerialCameraVideoSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.devices)[':serial']['camera']['video']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDevicesSerialCameraVideoSettingsKey()
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
            (typeof client.devices)[':serial']['camera']['video']['settings']['$put']
          >
        },
      ) => parseResponse(client.devices[':serial'].camera.video.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDevicesSerialCellularGatewaySettingsKey(
  args: InferRequestType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$get']>,
) {
  return ['devices', '/devices/:serial/cellularGateway/settings', args] as const
}

export function useGetDevicesSerialCellularGatewaySettings<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$get']>
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
        ? getGetDevicesSerialCellularGatewaySettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.devices[':serial'].cellularGateway.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesSerialCellularGatewaySettings<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$get']>
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
        ? getGetDevicesSerialCellularGatewaySettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.devices[':serial'].cellularGateway.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDevicesSerialCellularGatewaySettingsKey() {
  return ['devices', '/devices/:serial/cellularGateway/settings', 'PUT'] as const
}

export function usePutDevicesSerialCellularGatewaySettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDevicesSerialCellularGatewaySettingsKey()
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
            (typeof client.devices)[':serial']['cellularGateway']['settings']['$put']
          >
        },
      ) =>
        parseResponse(client.devices[':serial'].cellularGateway.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDevicesSerialCellularGatewaySettingsPortForwardingRulesKey(
  args: InferRequestType<
    (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
  >,
) {
  return ['devices', '/devices/:serial/cellularGateway/settings/portForwardingRules', args] as const
}

export function useGetDevicesSerialCellularGatewaySettingsPortForwardingRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicesSerialCellularGatewaySettingsPortForwardingRulesKey(args)
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
                (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
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
          client.devices[':serial'].cellularGateway.settings.portForwardingRules.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesSerialCellularGatewaySettingsPortForwardingRules<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicesSerialCellularGatewaySettingsPortForwardingRulesKey(args)
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
                (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
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
          client.devices[':serial'].cellularGateway.settings.portForwardingRules.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDevicesSerialCellularGatewaySettingsPortForwardingRulesKey() {
  return [
    'devices',
    '/devices/:serial/cellularGateway/settings/portForwardingRules',
    'PUT',
  ] as const
}

export function usePutDevicesSerialCellularGatewaySettingsPortForwardingRules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDevicesSerialCellularGatewaySettingsPortForwardingRulesKey()
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
            (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$put']
          >
        },
      ) =>
        parseResponse(
          client.devices[':serial'].cellularGateway.settings.portForwardingRules.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDevicesSerialClientsKey(
  args: InferRequestType<(typeof client.devices)[':serial']['clients']['$get']>,
) {
  return ['devices', '/devices/:serial/clients', args] as const
}

export function useGetDevicesSerialClients<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':serial']['clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.devices)[':serial']['clients']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicesSerialClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.devices)[':serial']['clients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.devices[':serial'].clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesSerialClients<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':serial']['clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.devices)[':serial']['clients']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicesSerialClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.devices)[':serial']['clients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.devices[':serial'].clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDevicesSerialSwitchPortsCycleKey() {
  return ['devices', '/devices/:serial/switch/ports/cycle', 'POST'] as const
}

export function usePostDevicesSerialSwitchPortsCycle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.devices)[':serial']['switch']['ports']['cycle']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDevicesSerialSwitchPortsCycleKey()
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
            (typeof client.devices)[':serial']['switch']['ports']['cycle']['$post']
          >
        },
      ) => parseResponse(client.devices[':serial'].switch.ports.cycle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDevicesSerialSwitchPortStatusesKey(
  args: InferRequestType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>,
) {
  return ['devices', '/devices/:serial/switchPortStatuses', args] as const
}

export function useGetDevicesSerialSwitchPortStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicesSerialSwitchPortStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.devices[':serial'].switchPortStatuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesSerialSwitchPortStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicesSerialSwitchPortStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.devices[':serial'].switchPortStatuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDevicesSerialSwitchPortStatusesPacketsKey(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']
  >,
) {
  return ['devices', '/devices/:serial/switchPortStatuses/packets', args] as const
}

export function useGetDevicesSerialSwitchPortStatusesPackets<TError = unknown>(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicesSerialSwitchPortStatusesPacketsKey(args)
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
                (typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']
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
          client.devices[':serial'].switchPortStatuses.packets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesSerialSwitchPortStatusesPackets<TError = unknown>(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicesSerialSwitchPortStatusesPacketsKey(args)
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
                (typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']
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
          client.devices[':serial'].switchPortStatuses.packets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDevicesSerialWirelessBluetoothSettingsKey() {
  return ['devices', '/devices/:serial/wireless/bluetooth/settings', 'PUT'] as const
}

export function usePutDevicesSerialWirelessBluetoothSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.devices)[':serial']['wireless']['bluetooth']['settings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDevicesSerialWirelessBluetoothSettingsKey()
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
            (typeof client.devices)[':serial']['wireless']['bluetooth']['settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.devices[':serial'].wireless.bluetooth.settings.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['$get']>,
) {
  return ['networks', '/networks/:networkId', args] as const
}

export function useGetNetworksNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdKey() {
  return ['networks', '/networks/:networkId', 'PUT'] as const
}

export function usePutNetworksNetworkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.networks)[':networkId']['$put']> },
      ) => parseResponse(client.networks[':networkId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNetworksNetworkIdKey() {
  return ['networks', '/networks/:networkId', 'DELETE'] as const
}

export function useDeleteNetworksNetworkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworksNetworkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.networks)[':networkId']['$delete']> },
      ) => parseResponse(client.networks[':networkId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdAccessPoliciesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>,
) {
  return ['networks', '/networks/:networkId/accessPolicies', args] as const
}

export function useGetNetworksNetworkIdAccessPolicies<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdAccessPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].accessPolicies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdAccessPolicies<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdAccessPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].accessPolicies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdAirMarshalKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['airMarshal']['$get']>,
) {
  return ['networks', '/networks/:networkId/airMarshal', args] as const
}

export function useGetNetworksNetworkIdAirMarshal<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['airMarshal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['airMarshal']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdAirMarshalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['airMarshal']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].airMarshal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdAirMarshal<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['airMarshal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['airMarshal']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdAirMarshalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['airMarshal']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].airMarshal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdAlertSettingsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$get']>,
) {
  return ['networks', '/networks/:networkId/alertSettings', args] as const
}

export function useGetNetworksNetworkIdAlertSettings<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['alertSettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdAlertSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['alertSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].alertSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdAlertSettings<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['alertSettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdAlertSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['alertSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].alertSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdAlertSettingsKey() {
  return ['networks', '/networks/:networkId/alertSettings', 'PUT'] as const
}

export function usePutNetworksNetworkIdAlertSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['alertSettings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdAlertSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$put']>
        },
      ) => parseResponse(client.networks[':networkId'].alertSettings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdApplianceFirewallInboundFirewallRulesKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/appliance/firewall/inboundFirewallRules', args] as const
}

export function useGetNetworksNetworkIdApplianceFirewallInboundFirewallRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdApplianceFirewallInboundFirewallRulesKey(args)
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
                (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
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
          client.networks[':networkId'].appliance.firewall.inboundFirewallRules.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdApplianceFirewallInboundFirewallRules<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdApplianceFirewallInboundFirewallRulesKey(args)
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
                (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
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
          client.networks[':networkId'].appliance.firewall.inboundFirewallRules.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdApplianceFirewallInboundFirewallRulesKey() {
  return [
    'networks',
    '/networks/:networkId/appliance/firewall/inboundFirewallRules',
    'PUT',
  ] as const
}

export function usePutNetworksNetworkIdApplianceFirewallInboundFirewallRules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdApplianceFirewallInboundFirewallRulesKey()
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
            (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].appliance.firewall.inboundFirewallRules.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdAppliancePortsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>,
) {
  return ['networks', '/networks/:networkId/appliancePorts', args] as const
}

export function useGetNetworksNetworkIdAppliancePorts<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdAppliancePortsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].appliancePorts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdAppliancePorts<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdAppliancePortsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].appliancePorts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdAppliancePortsAppliancePortIdKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/appliancePorts/:appliancePortId', args] as const
}

export function useGetNetworksNetworkIdAppliancePortsAppliancePortId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdAppliancePortsAppliancePortIdKey(args)
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
                (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
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
          client.networks[':networkId'].appliancePorts[':appliancePortId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdAppliancePortsAppliancePortId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdAppliancePortsAppliancePortIdKey(args)
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
                (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
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
          client.networks[':networkId'].appliancePorts[':appliancePortId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdAppliancePortsAppliancePortIdKey() {
  return ['networks', '/networks/:networkId/appliancePorts/:appliancePortId', 'PUT'] as const
}

export function usePutNetworksNetworkIdAppliancePortsAppliancePortId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdAppliancePortsAppliancePortIdKey()
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
            (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].appliancePorts[':appliancePortId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNetworksNetworkIdBindKey() {
  return ['networks', '/networks/:networkId/bind', 'POST'] as const
}

export function usePostNetworksNetworkIdBind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['bind']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['bind']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdBindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.networks)[':networkId']['bind']['$post']> },
      ) => parseResponse(client.networks[':networkId'].bind.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdBluetoothClientsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>,
) {
  return ['networks', '/networks/:networkId/bluetoothClients', args] as const
}

export function useGetNetworksNetworkIdBluetoothClients<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdBluetoothClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].bluetoothClients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdBluetoothClients<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdBluetoothClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].bluetoothClients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdBluetoothClientsBluetoothClientIdKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/bluetoothClients/:bluetoothClientId', args] as const
}

export function useGetNetworksNetworkIdBluetoothClientsBluetoothClientId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdBluetoothClientsBluetoothClientIdKey(args)
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
                (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
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
          client.networks[':networkId'].bluetoothClients[':bluetoothClientId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdBluetoothClientsBluetoothClientId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdBluetoothClientsBluetoothClientIdKey(args)
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
                (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
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
          client.networks[':networkId'].bluetoothClients[':bluetoothClientId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdBluetoothSettingsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>,
) {
  return ['networks', '/networks/:networkId/bluetoothSettings', args] as const
}

export function useGetNetworksNetworkIdBluetoothSettings<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdBluetoothSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].bluetoothSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdBluetoothSettings<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdBluetoothSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].bluetoothSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdBluetoothSettingsKey() {
  return ['networks', '/networks/:networkId/bluetoothSettings', 'PUT'] as const
}

export function usePutNetworksNetworkIdBluetoothSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['bluetoothSettings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdBluetoothSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$put']>
        },
      ) => parseResponse(client.networks[':networkId'].bluetoothSettings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdCameraQualityRetentionProfilesKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/camera/qualityRetentionProfiles', args] as const
}

export function useGetNetworksNetworkIdCameraQualityRetentionProfiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdCameraQualityRetentionProfilesKey(args)
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
                (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
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
          client.networks[':networkId'].camera.qualityRetentionProfiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdCameraQualityRetentionProfiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdCameraQualityRetentionProfilesKey(args)
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
                (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
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
          client.networks[':networkId'].camera.qualityRetentionProfiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdCameraQualityRetentionProfilesKey() {
  return ['networks', '/networks/:networkId/camera/qualityRetentionProfiles', 'POST'] as const
}

export function usePostNetworksNetworkIdCameraQualityRetentionProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdCameraQualityRetentionProfilesKey()
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
            (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].camera.qualityRetentionProfiles.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdKey(
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

export function useGetNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdKey(args)
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
                (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$get']
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
          client.networks[':networkId'].camera.qualityRetentionProfiles[
            ':qualityRetentionProfileId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdKey(args)
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
                (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$get']
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
          client.networks[':networkId'].camera.qualityRetentionProfiles[
            ':qualityRetentionProfileId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdKey() {
  return [
    'networks',
    '/networks/:networkId/camera/qualityRetentionProfiles/:qualityRetentionProfileId',
    'PUT',
  ] as const
}

export function usePutNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdKey()
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
            (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].camera.qualityRetentionProfiles[
            ':qualityRetentionProfileId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdKey() {
  return [
    'networks',
    '/networks/:networkId/camera/qualityRetentionProfiles/:qualityRetentionProfileId',
    'DELETE',
  ] as const
}

export function useDeleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdKey()
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
            (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].camera.qualityRetentionProfiles[
            ':qualityRetentionProfileId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdCameraSchedulesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>,
) {
  return ['networks', '/networks/:networkId/camera/schedules', args] as const
}

export function useGetNetworksNetworkIdCameraSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>
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
        ? getGetNetworksNetworkIdCameraSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].camera.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdCameraSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>
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
        ? getGetNetworksNetworkIdCameraSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].camera.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdCamerasSerialSnapshotKey() {
  return ['networks', '/networks/:networkId/cameras/:serial/snapshot', 'POST'] as const
}

export function usePostNetworksNetworkIdCamerasSerialSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['cameras'][':serial']['snapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdCamerasSerialSnapshotKey()
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
            (typeof client.networks)[':networkId']['cameras'][':serial']['snapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].cameras[':serial'].snapshot.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdCamerasSerialVideoLinkKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/cameras/:serial/videoLink', args] as const
}

export function useGetNetworksNetworkIdCamerasSerialVideoLink<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdCamerasSerialVideoLinkKey(args)
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
                (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
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
          client.networks[':networkId'].cameras[':serial'].videoLink.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdCamerasSerialVideoLink<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdCamerasSerialVideoLinkKey(args)
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
                (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
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
          client.networks[':networkId'].cameras[':serial'].videoLink.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdCellularFirewallRulesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>,
) {
  return ['networks', '/networks/:networkId/cellularFirewallRules', args] as const
}

export function useGetNetworksNetworkIdCellularFirewallRules<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>
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
        ? getGetNetworksNetworkIdCellularFirewallRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.networks[':networkId'].cellularFirewallRules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdCellularFirewallRules<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>
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
        ? getGetNetworksNetworkIdCellularFirewallRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.networks[':networkId'].cellularFirewallRules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdCellularFirewallRulesKey() {
  return ['networks', '/networks/:networkId/cellularFirewallRules', 'PUT'] as const
}

export function usePutNetworksNetworkIdCellularFirewallRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdCellularFirewallRulesKey()
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
            (typeof client.networks)[':networkId']['cellularFirewallRules']['$put']
          >
        },
      ) =>
        parseResponse(client.networks[':networkId'].cellularFirewallRules.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdClientsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients']['$get']>,
) {
  return ['networks', '/networks/:networkId/clients', args] as const
}

export function useGetNetworksNetworkIdClients<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['clients']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['clients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdClients<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['clients']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['clients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdClientsConnectionStatsKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients']['connectionStats']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/clients/connectionStats', args] as const
}

export function useGetNetworksNetworkIdClientsConnectionStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients']['connectionStats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsConnectionStatsKey(args)
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
                (typeof client.networks)[':networkId']['clients']['connectionStats']['$get']
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
          client.networks[':networkId'].clients.connectionStats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdClientsConnectionStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients']['connectionStats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsConnectionStatsKey(args)
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
                (typeof client.networks)[':networkId']['clients']['connectionStats']['$get']
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
          client.networks[':networkId'].clients.connectionStats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdClientsLatencyStatsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients']['latencyStats']['$get']>,
) {
  return ['networks', '/networks/:networkId/clients/latencyStats', args] as const
}

export function useGetNetworksNetworkIdClientsLatencyStats<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients']['latencyStats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['clients']['latencyStats']['$get']>
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
        ? getGetNetworksNetworkIdClientsLatencyStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['clients']['latencyStats']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].clients.latencyStats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdClientsLatencyStats<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients']['latencyStats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['clients']['latencyStats']['$get']>
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
        ? getGetNetworksNetworkIdClientsLatencyStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['clients']['latencyStats']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].clients.latencyStats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdClientsProvisionKey() {
  return ['networks', '/networks/:networkId/clients/provision', 'POST'] as const
}

export function usePostNetworksNetworkIdClientsProvision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['clients']['provision']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdClientsProvisionKey()
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
            (typeof client.networks)[':networkId']['clients']['provision']['$post']
          >
        },
      ) => parseResponse(client.networks[':networkId'].clients.provision.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdClientsClientIdKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>,
) {
  return ['networks', '/networks/:networkId/clients/:clientId', args] as const
}

export function useGetNetworksNetworkIdClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>
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
        ? getGetNetworksNetworkIdClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].clients[':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>
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
        ? getGetNetworksNetworkIdClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].clients[':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdClientsClientIdConnectionStatsKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId/connectionStats', args] as const
}

export function useGetNetworksNetworkIdClientsClientIdConnectionStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsClientIdConnectionStatsKey(args)
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
                (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
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
          client.networks[':networkId'].clients[':clientId'].connectionStats.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdClientsClientIdConnectionStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsClientIdConnectionStatsKey(args)
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
                (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
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
          client.networks[':networkId'].clients[':clientId'].connectionStats.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdClientsClientIdEventsKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId/events', args] as const
}

export function useGetNetworksNetworkIdClientsClientIdEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsClientIdEventsKey(args)
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
                (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
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
          client.networks[':networkId'].clients[':clientId'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdClientsClientIdEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsClientIdEventsKey(args)
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
                (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
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
          client.networks[':networkId'].clients[':clientId'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdClientsClientIdLatencyHistoryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId/latencyHistory', args] as const
}

export function useGetNetworksNetworkIdClientsClientIdLatencyHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsClientIdLatencyHistoryKey(args)
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
                (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
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
          client.networks[':networkId'].clients[':clientId'].latencyHistory.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdClientsClientIdLatencyHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsClientIdLatencyHistoryKey(args)
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
                (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
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
          client.networks[':networkId'].clients[':clientId'].latencyHistory.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdClientsClientIdLatencyStatsKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId/latencyStats', args] as const
}

export function useGetNetworksNetworkIdClientsClientIdLatencyStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsClientIdLatencyStatsKey(args)
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
                (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
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
          client.networks[':networkId'].clients[':clientId'].latencyStats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdClientsClientIdLatencyStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsClientIdLatencyStatsKey(args)
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
                (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
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
          client.networks[':networkId'].clients[':clientId'].latencyStats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdClientsClientIdPolicyKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId/policy', args] as const
}

export function useGetNetworksNetworkIdClientsClientIdPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsClientIdPolicyKey(args)
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
                (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
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
          client.networks[':networkId'].clients[':clientId'].policy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdClientsClientIdPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsClientIdPolicyKey(args)
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
                (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
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
          client.networks[':networkId'].clients[':clientId'].policy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdClientsClientIdPolicyKey() {
  return ['networks', '/networks/:networkId/clients/:clientId/policy', 'PUT'] as const
}

export function usePutNetworksNetworkIdClientsClientIdPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdClientsClientIdPolicyKey()
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
            (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].clients[':clientId'].policy.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdClientsClientIdSplashAuthorizationStatusKey(
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

export function useGetNetworksNetworkIdClientsClientIdSplashAuthorizationStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsClientIdSplashAuthorizationStatusKey(args)
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
                (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$get']
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
          client.networks[':networkId'].clients[':clientId'].splashAuthorizationStatus.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdClientsClientIdSplashAuthorizationStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsClientIdSplashAuthorizationStatusKey(args)
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
                (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$get']
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
          client.networks[':networkId'].clients[':clientId'].splashAuthorizationStatus.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdClientsClientIdSplashAuthorizationStatusKey() {
  return [
    'networks',
    '/networks/:networkId/clients/:clientId/splashAuthorizationStatus',
    'PUT',
  ] as const
}

export function usePutNetworksNetworkIdClientsClientIdSplashAuthorizationStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdClientsClientIdSplashAuthorizationStatusKey()
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
            (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].clients[':clientId'].splashAuthorizationStatus.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdClientsClientIdUsageHistoryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/clients/:clientId/usageHistory', args] as const
}

export function useGetNetworksNetworkIdClientsClientIdUsageHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsClientIdUsageHistoryKey(args)
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
                (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
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
          client.networks[':networkId'].clients[':clientId'].usageHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdClientsClientIdUsageHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdClientsClientIdUsageHistoryKey(args)
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
                (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
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
          client.networks[':networkId'].clients[':clientId'].usageHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdConnectionStatsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['connectionStats']['$get']>,
) {
  return ['networks', '/networks/:networkId/connectionStats', args] as const
}

export function useGetNetworksNetworkIdConnectionStats<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['connectionStats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['connectionStats']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdConnectionStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['connectionStats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].connectionStats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdConnectionStats<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['connectionStats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['connectionStats']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdConnectionStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['connectionStats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].connectionStats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdContentFilteringKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>,
) {
  return ['networks', '/networks/:networkId/contentFiltering', args] as const
}

export function useGetNetworksNetworkIdContentFiltering<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdContentFilteringKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].contentFiltering.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdContentFiltering<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdContentFilteringKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].contentFiltering.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdContentFilteringKey() {
  return ['networks', '/networks/:networkId/contentFiltering', 'PUT'] as const
}

export function usePutNetworksNetworkIdContentFiltering<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['contentFiltering']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdContentFilteringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$put']>
        },
      ) => parseResponse(client.networks[':networkId'].contentFiltering.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdContentFilteringCategoriesKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/contentFiltering/categories', args] as const
}

export function useGetNetworksNetworkIdContentFilteringCategories<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdContentFilteringCategoriesKey(args)
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
                (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
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
          client.networks[':networkId'].contentFiltering.categories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdContentFilteringCategories<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdContentFilteringCategoriesKey(args)
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
                (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
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
          client.networks[':networkId'].contentFiltering.categories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdDevicesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices']['$get']>,
) {
  return ['networks', '/networks/:networkId/devices', args] as const
}

export function useGetNetworksNetworkIdDevices<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['devices']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdDevices<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['devices']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdDevicesClaimKey() {
  return ['networks', '/networks/:networkId/devices/claim', 'POST'] as const
}

export function usePostNetworksNetworkIdDevicesClaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['devices']['claim']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['devices']['claim']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdDevicesClaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['devices']['claim']['$post']>
        },
      ) => parseResponse(client.networks[':networkId'].devices.claim.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdDevicesConnectionStatsKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices']['connectionStats']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/devices/connectionStats', args] as const
}

export function useGetNetworksNetworkIdDevicesConnectionStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices']['connectionStats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdDevicesConnectionStatsKey(args)
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
                (typeof client.networks)[':networkId']['devices']['connectionStats']['$get']
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
          client.networks[':networkId'].devices.connectionStats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdDevicesConnectionStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices']['connectionStats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdDevicesConnectionStatsKey(args)
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
                (typeof client.networks)[':networkId']['devices']['connectionStats']['$get']
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
          client.networks[':networkId'].devices.connectionStats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdDevicesLatencyStatsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices']['latencyStats']['$get']>,
) {
  return ['networks', '/networks/:networkId/devices/latencyStats', args] as const
}

export function useGetNetworksNetworkIdDevicesLatencyStats<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices']['latencyStats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['devices']['latencyStats']['$get']>
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
        ? getGetNetworksNetworkIdDevicesLatencyStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['devices']['latencyStats']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].devices.latencyStats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdDevicesLatencyStats<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices']['latencyStats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['devices']['latencyStats']['$get']>
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
        ? getGetNetworksNetworkIdDevicesLatencyStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['devices']['latencyStats']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].devices.latencyStats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdDevicesSerialKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>,
) {
  return ['networks', '/networks/:networkId/devices/:serial', args] as const
}

export function useGetNetworksNetworkIdDevicesSerial<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>
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
        ? getGetNetworksNetworkIdDevicesSerialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].devices[':serial'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdDevicesSerial<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>
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
        ? getGetNetworksNetworkIdDevicesSerialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].devices[':serial'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdDevicesSerialKey() {
  return ['networks', '/networks/:networkId/devices/:serial', 'PUT'] as const
}

export function usePutNetworksNetworkIdDevicesSerial<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['devices'][':serial']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdDevicesSerialKey()
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
            (typeof client.networks)[':networkId']['devices'][':serial']['$put']
          >
        },
      ) => parseResponse(client.networks[':networkId'].devices[':serial'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdDevicesSerialConnectionStatsKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/devices/:serial/connectionStats', args] as const
}

export function useGetNetworksNetworkIdDevicesSerialConnectionStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdDevicesSerialConnectionStatsKey(args)
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
                (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
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
          client.networks[':networkId'].devices[':serial'].connectionStats.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdDevicesSerialConnectionStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdDevicesSerialConnectionStatsKey(args)
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
                (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
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
          client.networks[':networkId'].devices[':serial'].connectionStats.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdDevicesSerialLatencyStatsKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/devices/:serial/latencyStats', args] as const
}

export function useGetNetworksNetworkIdDevicesSerialLatencyStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdDevicesSerialLatencyStatsKey(args)
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
                (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
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
          client.networks[':networkId'].devices[':serial'].latencyStats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdDevicesSerialLatencyStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdDevicesSerialLatencyStatsKey(args)
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
                (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
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
          client.networks[':networkId'].devices[':serial'].latencyStats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdDevicesSerialLossAndLatencyHistoryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/devices/:serial/lossAndLatencyHistory', args] as const
}

export function useGetNetworksNetworkIdDevicesSerialLossAndLatencyHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdDevicesSerialLossAndLatencyHistoryKey(args)
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
                (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
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
          client.networks[':networkId'].devices[':serial'].lossAndLatencyHistory.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdDevicesSerialLossAndLatencyHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdDevicesSerialLossAndLatencyHistoryKey(args)
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
                (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
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
          client.networks[':networkId'].devices[':serial'].lossAndLatencyHistory.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdDevicesSerialPerformanceKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/devices/:serial/performance', args] as const
}

export function useGetNetworksNetworkIdDevicesSerialPerformance<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdDevicesSerialPerformanceKey(args)
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
                (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
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
          client.networks[':networkId'].devices[':serial'].performance.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdDevicesSerialPerformance<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdDevicesSerialPerformanceKey(args)
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
                (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
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
          client.networks[':networkId'].devices[':serial'].performance.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdDevicesSerialRebootKey() {
  return ['networks', '/networks/:networkId/devices/:serial/reboot', 'POST'] as const
}

export function usePostNetworksNetworkIdDevicesSerialReboot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['reboot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdDevicesSerialRebootKey()
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
            (typeof client.networks)[':networkId']['devices'][':serial']['reboot']['$post']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].devices[':serial'].reboot.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNetworksNetworkIdDevicesSerialRemoveKey() {
  return ['networks', '/networks/:networkId/devices/:serial/remove', 'POST'] as const
}

export function usePostNetworksNetworkIdDevicesSerialRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['devices'][':serial']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdDevicesSerialRemoveKey()
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
            (typeof client.networks)[':networkId']['devices'][':serial']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].devices[':serial'].remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdDevicesSerialUplinkKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/devices/:serial/uplink', args] as const
}

export function useGetNetworksNetworkIdDevicesSerialUplink<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdDevicesSerialUplinkKey(args)
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
                (typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']
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
          client.networks[':networkId'].devices[':serial'].uplink.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdDevicesSerialUplink<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdDevicesSerialUplinkKey(args)
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
                (typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']
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
          client.networks[':networkId'].devices[':serial'].uplink.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdDevicesSerialWirelessStatusKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/devices/:serial/wireless/status', args] as const
}

export function useGetNetworksNetworkIdDevicesSerialWirelessStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdDevicesSerialWirelessStatusKey(args)
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
                (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
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
          client.networks[':networkId'].devices[':serial'].wireless.status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdDevicesSerialWirelessStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdDevicesSerialWirelessStatusKey(args)
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
                (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
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
          client.networks[':networkId'].devices[':serial'].wireless.status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdEventsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['events']['$get']>,
) {
  return ['networks', '/networks/:networkId/events', args] as const
}

export function useGetNetworksNetworkIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdEventsEventTypesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>,
) {
  return ['networks', '/networks/:networkId/events/eventTypes', args] as const
}

export function useGetNetworksNetworkIdEventsEventTypes<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>
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
        ? getGetNetworksNetworkIdEventsEventTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].events.eventTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdEventsEventTypes<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>
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
        ? getGetNetworksNetworkIdEventsEventTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].events.eventTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdFailedConnectionsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['failedConnections']['$get']>,
) {
  return ['networks', '/networks/:networkId/failedConnections', args] as const
}

export function useGetNetworksNetworkIdFailedConnections<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['failedConnections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['failedConnections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdFailedConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['failedConnections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].failedConnections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdFailedConnections<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['failedConnections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['failedConnections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdFailedConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['failedConnections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].failedConnections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdFirewalledServicesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>,
) {
  return ['networks', '/networks/:networkId/firewalledServices', args] as const
}

export function useGetNetworksNetworkIdFirewalledServices<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>
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
        ? getGetNetworksNetworkIdFirewalledServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].firewalledServices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdFirewalledServices<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>
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
        ? getGetNetworksNetworkIdFirewalledServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].firewalledServices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdFirewalledServicesServiceKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/firewalledServices/:service', args] as const
}

export function useGetNetworksNetworkIdFirewalledServicesService<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdFirewalledServicesServiceKey(args)
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
                (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
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
          client.networks[':networkId'].firewalledServices[':service'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdFirewalledServicesService<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdFirewalledServicesServiceKey(args)
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
                (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
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
          client.networks[':networkId'].firewalledServices[':service'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdFirewalledServicesServiceKey() {
  return ['networks', '/networks/:networkId/firewalledServices/:service', 'PUT'] as const
}

export function usePutNetworksNetworkIdFirewalledServicesService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['firewalledServices'][':service']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdFirewalledServicesServiceKey()
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
            (typeof client.networks)[':networkId']['firewalledServices'][':service']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].firewalledServices[':service'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdFloorPlansKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$get']>,
) {
  return ['networks', '/networks/:networkId/floorPlans', args] as const
}

export function useGetNetworksNetworkIdFloorPlans<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['floorPlans']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdFloorPlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['floorPlans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].floorPlans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdFloorPlans<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['floorPlans']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdFloorPlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['floorPlans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].floorPlans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdFloorPlansKey() {
  return ['networks', '/networks/:networkId/floorPlans', 'POST'] as const
}

export function usePostNetworksNetworkIdFloorPlans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['floorPlans']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdFloorPlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$post']> },
      ) => parseResponse(client.networks[':networkId'].floorPlans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdFloorPlansFloorPlanIdKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/floorPlans/:floorPlanId', args] as const
}

export function useGetNetworksNetworkIdFloorPlansFloorPlanId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdFloorPlansFloorPlanIdKey(args)
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
                (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']
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
          client.networks[':networkId'].floorPlans[':floorPlanId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdFloorPlansFloorPlanId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdFloorPlansFloorPlanIdKey(args)
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
                (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']
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
          client.networks[':networkId'].floorPlans[':floorPlanId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdFloorPlansFloorPlanIdKey() {
  return ['networks', '/networks/:networkId/floorPlans/:floorPlanId', 'PUT'] as const
}

export function usePutNetworksNetworkIdFloorPlansFloorPlanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdFloorPlansFloorPlanIdKey()
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
            (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].floorPlans[':floorPlanId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteNetworksNetworkIdFloorPlansFloorPlanIdKey() {
  return ['networks', '/networks/:networkId/floorPlans/:floorPlanId', 'DELETE'] as const
}

export function useDeleteNetworksNetworkIdFloorPlansFloorPlanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworksNetworkIdFloorPlansFloorPlanIdKey()
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
            (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].floorPlans[':floorPlanId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdL3FirewallRulesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>,
) {
  return ['networks', '/networks/:networkId/l3FirewallRules', args] as const
}

export function useGetNetworksNetworkIdL3FirewallRules<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdL3FirewallRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].l3FirewallRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdL3FirewallRules<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdL3FirewallRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].l3FirewallRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdL3FirewallRulesKey() {
  return ['networks', '/networks/:networkId/l3FirewallRules', 'PUT'] as const
}

export function usePutNetworksNetworkIdL3FirewallRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['l3FirewallRules']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdL3FirewallRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$put']>
        },
      ) => parseResponse(client.networks[':networkId'].l3FirewallRules.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdL7FirewallRulesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>,
) {
  return ['networks', '/networks/:networkId/l7FirewallRules', args] as const
}

export function useGetNetworksNetworkIdL7FirewallRules<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdL7FirewallRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].l7FirewallRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdL7FirewallRules<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdL7FirewallRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].l7FirewallRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdL7FirewallRulesKey() {
  return ['networks', '/networks/:networkId/l7FirewallRules', 'PUT'] as const
}

export function usePutNetworksNetworkIdL7FirewallRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['l7FirewallRules']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdL7FirewallRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$put']>
        },
      ) => parseResponse(client.networks[':networkId'].l7FirewallRules.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdL7FirewallRulesApplicationCategoriesKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/l7FirewallRules/applicationCategories', args] as const
}

export function useGetNetworksNetworkIdL7FirewallRulesApplicationCategories<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdL7FirewallRulesApplicationCategoriesKey(args)
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
                (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
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
          client.networks[':networkId'].l7FirewallRules.applicationCategories.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdL7FirewallRulesApplicationCategories<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdL7FirewallRulesApplicationCategoriesKey(args)
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
                (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
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
          client.networks[':networkId'].l7FirewallRules.applicationCategories.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdLatencyStatsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['latencyStats']['$get']>,
) {
  return ['networks', '/networks/:networkId/latencyStats', args] as const
}

export function useGetNetworksNetworkIdLatencyStats<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['latencyStats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['latencyStats']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdLatencyStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['latencyStats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].latencyStats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdLatencyStats<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['latencyStats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['latencyStats']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdLatencyStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['latencyStats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].latencyStats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdMerakiAuthUsersKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>,
) {
  return ['networks', '/networks/:networkId/merakiAuthUsers', args] as const
}

export function useGetNetworksNetworkIdMerakiAuthUsers<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdMerakiAuthUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].merakiAuthUsers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdMerakiAuthUsers<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdMerakiAuthUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].merakiAuthUsers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/merakiAuthUsers/:merakiAuthUserId', args] as const
}

export function useGetNetworksNetworkIdMerakiAuthUsersMerakiAuthUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdKey(args)
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
                (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
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
          client.networks[':networkId'].merakiAuthUsers[':merakiAuthUserId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdMerakiAuthUsersMerakiAuthUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdKey(args)
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
                (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
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
          client.networks[':networkId'].merakiAuthUsers[':merakiAuthUserId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdOneToManyNatRulesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>,
) {
  return ['networks', '/networks/:networkId/oneToManyNatRules', args] as const
}

export function useGetNetworksNetworkIdOneToManyNatRules<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdOneToManyNatRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].oneToManyNatRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdOneToManyNatRules<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdOneToManyNatRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].oneToManyNatRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdOneToManyNatRulesKey() {
  return ['networks', '/networks/:networkId/oneToManyNatRules', 'PUT'] as const
}

export function usePutNetworksNetworkIdOneToManyNatRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdOneToManyNatRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$put']>
        },
      ) => parseResponse(client.networks[':networkId'].oneToManyNatRules.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdOneToOneNatRulesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>,
) {
  return ['networks', '/networks/:networkId/oneToOneNatRules', args] as const
}

export function useGetNetworksNetworkIdOneToOneNatRules<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdOneToOneNatRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].oneToOneNatRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdOneToOneNatRules<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdOneToOneNatRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].oneToOneNatRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdOneToOneNatRulesKey() {
  return ['networks', '/networks/:networkId/oneToOneNatRules', 'PUT'] as const
}

export function usePutNetworksNetworkIdOneToOneNatRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdOneToOneNatRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$put']>
        },
      ) => parseResponse(client.networks[':networkId'].oneToOneNatRules.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdPiiPiiKeysKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>,
) {
  return ['networks', '/networks/:networkId/pii/piiKeys', args] as const
}

export function useGetNetworksNetworkIdPiiPiiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdPiiPiiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].pii.piiKeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdPiiPiiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdPiiPiiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].pii.piiKeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdPiiRequestsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>,
) {
  return ['networks', '/networks/:networkId/pii/requests', args] as const
}

export function useGetNetworksNetworkIdPiiRequests<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdPiiRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].pii.requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdPiiRequests<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdPiiRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].pii.requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdPiiRequestsKey() {
  return ['networks', '/networks/:networkId/pii/requests', 'POST'] as const
}

export function usePostNetworksNetworkIdPiiRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['pii']['requests']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdPiiRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$post']>
        },
      ) => parseResponse(client.networks[':networkId'].pii.requests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdPiiRequestsRequestIdKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/pii/requests/:requestId', args] as const
}

export function useGetNetworksNetworkIdPiiRequestsRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdPiiRequestsRequestIdKey(args)
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
                (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
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
          client.networks[':networkId'].pii.requests[':requestId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdPiiRequestsRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdPiiRequestsRequestIdKey(args)
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
                (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
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
          client.networks[':networkId'].pii.requests[':requestId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteNetworksNetworkIdPiiRequestsRequestIdKey() {
  return ['networks', '/networks/:networkId/pii/requests/:requestId', 'DELETE'] as const
}

export function useDeleteNetworksNetworkIdPiiRequestsRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworksNetworkIdPiiRequestsRequestIdKey()
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
            (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].pii.requests[':requestId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdPiiSmDevicesForKeyKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']>,
) {
  return ['networks', '/networks/:networkId/pii/smDevicesForKey', args] as const
}

export function useGetNetworksNetworkIdPiiSmDevicesForKey<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']>
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
        ? getGetNetworksNetworkIdPiiSmDevicesForKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].pii.smDevicesForKey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdPiiSmDevicesForKey<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']>
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
        ? getGetNetworksNetworkIdPiiSmDevicesForKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].pii.smDevicesForKey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdPiiSmOwnersForKeyKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>,
) {
  return ['networks', '/networks/:networkId/pii/smOwnersForKey', args] as const
}

export function useGetNetworksNetworkIdPiiSmOwnersForKey<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>
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
        ? getGetNetworksNetworkIdPiiSmOwnersForKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].pii.smOwnersForKey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdPiiSmOwnersForKey<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>
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
        ? getGetNetworksNetworkIdPiiSmOwnersForKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].pii.smOwnersForKey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdPortForwardingRulesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>,
) {
  return ['networks', '/networks/:networkId/portForwardingRules', args] as const
}

export function useGetNetworksNetworkIdPortForwardingRules<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>
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
        ? getGetNetworksNetworkIdPortForwardingRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].portForwardingRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdPortForwardingRules<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>
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
        ? getGetNetworksNetworkIdPortForwardingRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].portForwardingRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdPortForwardingRulesKey() {
  return ['networks', '/networks/:networkId/portForwardingRules', 'PUT'] as const
}

export function usePutNetworksNetworkIdPortForwardingRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['portForwardingRules']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['portForwardingRules']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdPortForwardingRulesKey()
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
            (typeof client.networks)[':networkId']['portForwardingRules']['$put']
          >
        },
      ) =>
        parseResponse(client.networks[':networkId'].portForwardingRules.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSecurityIntrusionSettingsKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/security/intrusionSettings', args] as const
}

export function useGetNetworksNetworkIdSecurityIntrusionSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSecurityIntrusionSettingsKey(args)
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
                (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
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
          client.networks[':networkId'].security.intrusionSettings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSecurityIntrusionSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSecurityIntrusionSettingsKey(args)
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
                (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
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
          client.networks[':networkId'].security.intrusionSettings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSecurityIntrusionSettingsKey() {
  return ['networks', '/networks/:networkId/security/intrusionSettings', 'PUT'] as const
}

export function usePutNetworksNetworkIdSecurityIntrusionSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['security']['intrusionSettings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSecurityIntrusionSettingsKey()
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
            (typeof client.networks)[':networkId']['security']['intrusionSettings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].security.intrusionSettings.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSecurityMalwareSettingsKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['security']['malwareSettings']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/security/malwareSettings', args] as const
}

export function useGetNetworksNetworkIdSecurityMalwareSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['security']['malwareSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSecurityMalwareSettingsKey(args)
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
                (typeof client.networks)[':networkId']['security']['malwareSettings']['$get']
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
          client.networks[':networkId'].security.malwareSettings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSecurityMalwareSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['security']['malwareSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSecurityMalwareSettingsKey(args)
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
                (typeof client.networks)[':networkId']['security']['malwareSettings']['$get']
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
          client.networks[':networkId'].security.malwareSettings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSecurityMalwareSettingsKey() {
  return ['networks', '/networks/:networkId/security/malwareSettings', 'PUT'] as const
}

export function usePutNetworksNetworkIdSecurityMalwareSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['security']['malwareSettings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSecurityMalwareSettingsKey()
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
            (typeof client.networks)[':networkId']['security']['malwareSettings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].security.malwareSettings.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSecurityEventsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['securityEvents']['$get']>,
) {
  return ['networks', '/networks/:networkId/securityEvents', args] as const
}

export function useGetNetworksNetworkIdSecurityEvents<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['securityEvents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['securityEvents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSecurityEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['securityEvents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].securityEvents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSecurityEvents<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['securityEvents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['securityEvents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSecurityEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['securityEvents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].securityEvents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSiteToSiteVpnKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>,
) {
  return ['networks', '/networks/:networkId/siteToSiteVpn', args] as const
}

export function useGetNetworksNetworkIdSiteToSiteVpn<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSiteToSiteVpnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].siteToSiteVpn.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSiteToSiteVpn<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSiteToSiteVpnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].siteToSiteVpn.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSiteToSiteVpnKey() {
  return ['networks', '/networks/:networkId/siteToSiteVpn', 'PUT'] as const
}

export function usePutNetworksNetworkIdSiteToSiteVpn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSiteToSiteVpnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$put']>
        },
      ) => parseResponse(client.networks[':networkId'].siteToSiteVpn.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNetworksNetworkIdSmBypassActivationLockAttemptsKey() {
  return ['networks', '/networks/:networkId/sm/bypassActivationLockAttempts', 'POST'] as const
}

export function usePostNetworksNetworkIdSmBypassActivationLockAttempts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdSmBypassActivationLockAttemptsKey()
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
            (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].sm.bypassActivationLockAttempts.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdKey(
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

export function useGetNetworksNetworkIdSmBypassActivationLockAttemptsAttemptId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts'][':attemptId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdKey(args)
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
                (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts'][':attemptId']['$get']
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
          client.networks[':networkId'].sm.bypassActivationLockAttempts[':attemptId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmBypassActivationLockAttemptsAttemptId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts'][':attemptId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdKey(args)
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
                (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts'][':attemptId']['$get']
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
          client.networks[':networkId'].sm.bypassActivationLockAttempts[':attemptId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSmDeviceFieldsKey() {
  return ['networks', '/networks/:networkId/sm/device/fields', 'PUT'] as const
}

export function usePutNetworksNetworkIdSmDeviceFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['sm']['device']['fields']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSmDeviceFieldsKey()
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
            (typeof client.networks)[':networkId']['sm']['device']['fields']['$put']
          >
        },
      ) => parseResponse(client.networks[':networkId'].sm.device.fields.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSmDeviceWipeKey() {
  return ['networks', '/networks/:networkId/sm/device/wipe', 'PUT'] as const
}

export function usePutNetworksNetworkIdSmDeviceWipe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['sm']['device']['wipe']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSmDeviceWipeKey()
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
            (typeof client.networks)[':networkId']['sm']['device']['wipe']['$put']
          >
        },
      ) => parseResponse(client.networks[':networkId'].sm.device.wipe.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNetworksNetworkIdSmDeviceDeviceIdRefreshDetailsKey() {
  return ['networks', '/networks/:networkId/sm/device/:deviceId/refreshDetails', 'POST'] as const
}

export function usePostNetworksNetworkIdSmDeviceDeviceIdRefreshDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['device'][':deviceId']['refreshDetails']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdSmDeviceDeviceIdRefreshDetailsKey()
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
            (typeof client.networks)[':networkId']['sm']['device'][':deviceId']['refreshDetails']['$post']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].sm.device[':deviceId'].refreshDetails.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmDevicesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>,
) {
  return ['networks', '/networks/:networkId/sm/devices', args] as const
}

export function useGetNetworksNetworkIdSmDevices<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].sm.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmDevices<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].sm.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSmDevicesCheckinKey() {
  return ['networks', '/networks/:networkId/sm/devices/checkin', 'PUT'] as const
}

export function usePutNetworksNetworkIdSmDevicesCheckin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['checkin']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSmDevicesCheckinKey()
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
            (typeof client.networks)[':networkId']['sm']['devices']['checkin']['$put']
          >
        },
      ) => parseResponse(client.networks[':networkId'].sm.devices.checkin.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSmDevicesTagsKey() {
  return ['networks', '/networks/:networkId/sm/devices/tags', 'PUT'] as const
}

export function usePutNetworksNetworkIdSmDevicesTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['tags']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSmDevicesTagsKey()
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
            (typeof client.networks)[':networkId']['sm']['devices']['tags']['$put']
          >
        },
      ) => parseResponse(client.networks[':networkId'].sm.devices.tags.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNetworksNetworkIdSmDevicesDeviceIdUnenrollKey() {
  return ['networks', '/networks/:networkId/sm/devices/:deviceId/unenroll', 'POST'] as const
}

export function usePostNetworksNetworkIdSmDevicesDeviceIdUnenroll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['unenroll']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdSmDevicesDeviceIdUnenrollKey()
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
            (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['unenroll']['$post']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].sm.devices[':deviceId'].unenroll.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmProfilesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>,
) {
  return ['networks', '/networks/:networkId/sm/profiles', args] as const
}

export function useGetNetworksNetworkIdSmProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].sm.profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].sm.profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmTargetGroupsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>,
) {
  return ['networks', '/networks/:networkId/sm/targetGroups', args] as const
}

export function useGetNetworksNetworkIdSmTargetGroups<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>
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
        ? getGetNetworksNetworkIdSmTargetGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].sm.targetGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmTargetGroups<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>
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
        ? getGetNetworksNetworkIdSmTargetGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].sm.targetGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdSmTargetGroupsKey() {
  return ['networks', '/networks/:networkId/sm/targetGroups', 'POST'] as const
}

export function usePostNetworksNetworkIdSmTargetGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdSmTargetGroupsKey()
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
            (typeof client.networks)[':networkId']['sm']['targetGroups']['$post']
          >
        },
      ) => parseResponse(client.networks[':networkId'].sm.targetGroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmTargetGroupsTargetGroupIdKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/targetGroups/:targetGroupId', args] as const
}

export function useGetNetworksNetworkIdSmTargetGroupsTargetGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmTargetGroupsTargetGroupIdKey(args)
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
                (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
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
          client.networks[':networkId'].sm.targetGroups[':targetGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmTargetGroupsTargetGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmTargetGroupsTargetGroupIdKey(args)
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
                (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
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
          client.networks[':networkId'].sm.targetGroups[':targetGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSmTargetGroupsTargetGroupIdKey() {
  return ['networks', '/networks/:networkId/sm/targetGroups/:targetGroupId', 'PUT'] as const
}

export function usePutNetworksNetworkIdSmTargetGroupsTargetGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSmTargetGroupsTargetGroupIdKey()
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
            (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].sm.targetGroups[':targetGroupId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteNetworksNetworkIdSmTargetGroupsTargetGroupIdKey() {
  return ['networks', '/networks/:networkId/sm/targetGroups/:targetGroupId', 'DELETE'] as const
}

export function useDeleteNetworksNetworkIdSmTargetGroupsTargetGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworksNetworkIdSmTargetGroupsTargetGroupIdKey()
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
            (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].sm.targetGroups[':targetGroupId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmUserUserIdDeviceProfilesKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/user/:userId/deviceProfiles', args] as const
}

export function useGetNetworksNetworkIdSmUserUserIdDeviceProfiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmUserUserIdDeviceProfilesKey(args)
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
                (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
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
          client.networks[':networkId'].sm.user[':userId'].deviceProfiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmUserUserIdDeviceProfiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmUserUserIdDeviceProfilesKey(args)
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
                (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
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
          client.networks[':networkId'].sm.user[':userId'].deviceProfiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmUserUserIdSoftwaresKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/user/:userId/softwares', args] as const
}

export function useGetNetworksNetworkIdSmUserUserIdSoftwares<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmUserUserIdSoftwaresKey(args)
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
                (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
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
          client.networks[':networkId'].sm.user[':userId'].softwares.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmUserUserIdSoftwares<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmUserUserIdSoftwaresKey(args)
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
                (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
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
          client.networks[':networkId'].sm.user[':userId'].softwares.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmUsersKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['users']['$get']>,
) {
  return ['networks', '/networks/:networkId/sm/users', args] as const
}

export function useGetNetworksNetworkIdSmUsers<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].sm.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmUsers<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['sm']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].sm.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmDeviceIdCellularUsageHistoryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/cellularUsageHistory', args] as const
}

export function useGetNetworksNetworkIdSmDeviceIdCellularUsageHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmDeviceIdCellularUsageHistoryKey(args)
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
                (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
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
          client.networks[':networkId'].sm[':deviceId'].cellularUsageHistory.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmDeviceIdCellularUsageHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmDeviceIdCellularUsageHistoryKey(args)
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
                (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
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
          client.networks[':networkId'].sm[':deviceId'].cellularUsageHistory.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmDeviceIdCertsKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/certs', args] as const
}

export function useGetNetworksNetworkIdSmDeviceIdCerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']>
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
        ? getGetNetworksNetworkIdSmDeviceIdCertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.networks[':networkId'].sm[':deviceId'].certs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmDeviceIdCerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']>
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
        ? getGetNetworksNetworkIdSmDeviceIdCertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.networks[':networkId'].sm[':deviceId'].certs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmDeviceIdDeviceProfilesKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/deviceProfiles', args] as const
}

export function useGetNetworksNetworkIdSmDeviceIdDeviceProfiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmDeviceIdDeviceProfilesKey(args)
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
                (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
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
          client.networks[':networkId'].sm[':deviceId'].deviceProfiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmDeviceIdDeviceProfiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmDeviceIdDeviceProfilesKey(args)
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
                (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
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
          client.networks[':networkId'].sm[':deviceId'].deviceProfiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmDeviceIdNetworkAdaptersKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/networkAdapters', args] as const
}

export function useGetNetworksNetworkIdSmDeviceIdNetworkAdapters<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmDeviceIdNetworkAdaptersKey(args)
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
                (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
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
          client.networks[':networkId'].sm[':deviceId'].networkAdapters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmDeviceIdNetworkAdapters<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmDeviceIdNetworkAdaptersKey(args)
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
                (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
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
          client.networks[':networkId'].sm[':deviceId'].networkAdapters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmDeviceIdRestrictionsKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/restrictions', args] as const
}

export function useGetNetworksNetworkIdSmDeviceIdRestrictions<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmDeviceIdRestrictionsKey(args)
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
                (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
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
          client.networks[':networkId'].sm[':deviceId'].restrictions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmDeviceIdRestrictions<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmDeviceIdRestrictionsKey(args)
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
                (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
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
          client.networks[':networkId'].sm[':deviceId'].restrictions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmDeviceIdSecurityCentersKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/securityCenters', args] as const
}

export function useGetNetworksNetworkIdSmDeviceIdSecurityCenters<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmDeviceIdSecurityCentersKey(args)
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
                (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
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
          client.networks[':networkId'].sm[':deviceId'].securityCenters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmDeviceIdSecurityCenters<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmDeviceIdSecurityCentersKey(args)
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
                (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
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
          client.networks[':networkId'].sm[':deviceId'].securityCenters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmDeviceIdSoftwaresKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/softwares', args] as const
}

export function useGetNetworksNetworkIdSmDeviceIdSoftwares<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmDeviceIdSoftwaresKey(args)
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
                (typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']
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
          client.networks[':networkId'].sm[':deviceId'].softwares.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmDeviceIdSoftwares<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmDeviceIdSoftwaresKey(args)
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
                (typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']
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
          client.networks[':networkId'].sm[':deviceId'].softwares.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmDeviceIdWlanListsKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/sm/:deviceId/wlanLists', args] as const
}

export function useGetNetworksNetworkIdSmDeviceIdWlanLists<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmDeviceIdWlanListsKey(args)
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
                (typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']
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
          client.networks[':networkId'].sm[':deviceId'].wlanLists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmDeviceIdWlanLists<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmDeviceIdWlanListsKey(args)
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
                (typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']
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
          client.networks[':networkId'].sm[':deviceId'].wlanLists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSnmpSettingsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>,
) {
  return ['networks', '/networks/:networkId/snmpSettings', args] as const
}

export function useGetNetworksNetworkIdSnmpSettings<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSnmpSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].snmpSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSnmpSettings<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSnmpSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].snmpSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSplashLoginAttemptsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>,
) {
  return ['networks', '/networks/:networkId/splashLoginAttempts', args] as const
}

export function useGetNetworksNetworkIdSplashLoginAttempts<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>
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
        ? getGetNetworksNetworkIdSplashLoginAttemptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].splashLoginAttempts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSplashLoginAttempts<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>
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
        ? getGetNetworksNetworkIdSplashLoginAttemptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].splashLoginAttempts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdSplitKey() {
  return ['networks', '/networks/:networkId/split', 'POST'] as const
}

export function usePostNetworksNetworkIdSplit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['split']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['split']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdSplitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.networks)[':networkId']['split']['$post']> },
      ) => parseResponse(client.networks[':networkId'].split.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSsidsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['ssids']['$get']>,
) {
  return ['networks', '/networks/:networkId/ssids', args] as const
}

export function useGetNetworksNetworkIdSsids<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['ssids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSsidsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].ssids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSsids<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['ssids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSsidsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].ssids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSsidsNumberKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>,
) {
  return ['networks', '/networks/:networkId/ssids/:number', args] as const
}

export function useGetNetworksNetworkIdSsidsNumber<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSsidsNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].ssids[':number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSsidsNumber<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSsidsNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].ssids[':number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSsidsNumberKey() {
  return ['networks', '/networks/:networkId/ssids/:number', 'PUT'] as const
}

export function usePutNetworksNetworkIdSsidsNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['ssids'][':number']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSsidsNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$put']>
        },
      ) => parseResponse(client.networks[':networkId'].ssids[':number'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSsidsNumberL3FirewallRulesKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/ssids/:number/l3FirewallRules', args] as const
}

export function useGetNetworksNetworkIdSsidsNumberL3FirewallRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSsidsNumberL3FirewallRulesKey(args)
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
                (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
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
          client.networks[':networkId'].ssids[':number'].l3FirewallRules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSsidsNumberL3FirewallRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSsidsNumberL3FirewallRulesKey(args)
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
                (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
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
          client.networks[':networkId'].ssids[':number'].l3FirewallRules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSsidsNumberL3FirewallRulesKey() {
  return ['networks', '/networks/:networkId/ssids/:number/l3FirewallRules', 'PUT'] as const
}

export function usePutNetworksNetworkIdSsidsNumberL3FirewallRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSsidsNumberL3FirewallRulesKey()
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
            (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].ssids[':number'].l3FirewallRules.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSsidsNumberSplashSettingsKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/ssids/:number/splashSettings', args] as const
}

export function useGetNetworksNetworkIdSsidsNumberSplashSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSsidsNumberSplashSettingsKey(args)
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
                (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
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
          client.networks[':networkId'].ssids[':number'].splashSettings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSsidsNumberSplashSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSsidsNumberSplashSettingsKey(args)
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
                (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
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
          client.networks[':networkId'].ssids[':number'].splashSettings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSsidsNumberSplashSettingsKey() {
  return ['networks', '/networks/:networkId/ssids/:number/splashSettings', 'PUT'] as const
}

export function usePutNetworksNetworkIdSsidsNumberSplashSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSsidsNumberSplashSettingsKey()
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
            (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].ssids[':number'].splashSettings.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdStaticRoutesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>,
) {
  return ['networks', '/networks/:networkId/staticRoutes', args] as const
}

export function useGetNetworksNetworkIdStaticRoutes<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdStaticRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].staticRoutes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdStaticRoutes<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdStaticRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].staticRoutes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdStaticRoutesKey() {
  return ['networks', '/networks/:networkId/staticRoutes', 'POST'] as const
}

export function usePostNetworksNetworkIdStaticRoutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['staticRoutes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdStaticRoutesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$post']>
        },
      ) => parseResponse(client.networks[':networkId'].staticRoutes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdStaticRoutesStaticRouteIdKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/staticRoutes/:staticRouteId', args] as const
}

export function useGetNetworksNetworkIdStaticRoutesStaticRouteId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdStaticRoutesStaticRouteIdKey(args)
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
                (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
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
          client.networks[':networkId'].staticRoutes[':staticRouteId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdStaticRoutesStaticRouteId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdStaticRoutesStaticRouteIdKey(args)
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
                (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
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
          client.networks[':networkId'].staticRoutes[':staticRouteId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdStaticRoutesStaticRouteIdKey() {
  return ['networks', '/networks/:networkId/staticRoutes/:staticRouteId', 'PUT'] as const
}

export function usePutNetworksNetworkIdStaticRoutesStaticRouteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdStaticRoutesStaticRouteIdKey()
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
            (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].staticRoutes[':staticRouteId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteNetworksNetworkIdStaticRoutesStaticRouteIdKey() {
  return ['networks', '/networks/:networkId/staticRoutes/:staticRouteId', 'DELETE'] as const
}

export function useDeleteNetworksNetworkIdStaticRoutesStaticRouteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworksNetworkIdStaticRoutesStaticRouteIdKey()
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
            (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].staticRoutes[':staticRouteId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNetworksNetworkIdSwapWarmSpareKey() {
  return ['networks', '/networks/:networkId/swapWarmSpare', 'POST'] as const
}

export function usePostNetworksNetworkIdSwapWarmSpare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['swapWarmSpare']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['swapWarmSpare']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdSwapWarmSpareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['swapWarmSpare']['$post']>
        },
      ) => parseResponse(client.networks[':networkId'].swapWarmSpare.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSwitchLinkAggregationsKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/switch/linkAggregations', args] as const
}

export function useGetNetworksNetworkIdSwitchLinkAggregations<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchLinkAggregationsKey(args)
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
                (typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']
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
          client.networks[':networkId'].switch.linkAggregations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSwitchLinkAggregations<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchLinkAggregationsKey(args)
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
                (typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']
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
          client.networks[':networkId'].switch.linkAggregations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdSwitchLinkAggregationsKey() {
  return ['networks', '/networks/:networkId/switch/linkAggregations', 'POST'] as const
}

export function usePostNetworksNetworkIdSwitchLinkAggregations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['switch']['linkAggregations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdSwitchLinkAggregationsKey()
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
            (typeof client.networks)[':networkId']['switch']['linkAggregations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].switch.linkAggregations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdKey() {
  return [
    'networks',
    '/networks/:networkId/switch/linkAggregations/:linkAggregationId',
    'PUT',
  ] as const
}

export function usePutNetworksNetworkIdSwitchLinkAggregationsLinkAggregationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['linkAggregations'][':linkAggregationId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdKey()
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
            (typeof client.networks)[':networkId']['switch']['linkAggregations'][':linkAggregationId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].switch.linkAggregations[':linkAggregationId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdKey() {
  return [
    'networks',
    '/networks/:networkId/switch/linkAggregations/:linkAggregationId',
    'DELETE',
  ] as const
}

export function useDeleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['linkAggregations'][':linkAggregationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdKey()
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
            (typeof client.networks)[':networkId']['switch']['linkAggregations'][':linkAggregationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].switch.linkAggregations[':linkAggregationId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSwitchPortSchedulesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$get']>,
) {
  return ['networks', '/networks/:networkId/switch/portSchedules', args] as const
}

export function useGetNetworksNetworkIdSwitchPortSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$get']>
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
        ? getGetNetworksNetworkIdSwitchPortSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].switch.portSchedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSwitchPortSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$get']>
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
        ? getGetNetworksNetworkIdSwitchPortSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].switch.portSchedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdSwitchPortSchedulesKey() {
  return ['networks', '/networks/:networkId/switch/portSchedules', 'POST'] as const
}

export function usePostNetworksNetworkIdSwitchPortSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdSwitchPortSchedulesKey()
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
            (typeof client.networks)[':networkId']['switch']['portSchedules']['$post']
          >
        },
      ) =>
        parseResponse(client.networks[':networkId'].switch.portSchedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSwitchPortSchedulesPortScheduleIdKey() {
  return ['networks', '/networks/:networkId/switch/portSchedules/:portScheduleId', 'PUT'] as const
}

export function usePutNetworksNetworkIdSwitchPortSchedulesPortScheduleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['portSchedules'][':portScheduleId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSwitchPortSchedulesPortScheduleIdKey()
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
            (typeof client.networks)[':networkId']['switch']['portSchedules'][':portScheduleId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].switch.portSchedules[':portScheduleId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteNetworksNetworkIdSwitchPortSchedulesPortScheduleIdKey() {
  return [
    'networks',
    '/networks/:networkId/switch/portSchedules/:portScheduleId',
    'DELETE',
  ] as const
}

export function useDeleteNetworksNetworkIdSwitchPortSchedulesPortScheduleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['portSchedules'][':portScheduleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworksNetworkIdSwitchPortSchedulesPortScheduleIdKey()
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
            (typeof client.networks)[':networkId']['switch']['portSchedules'][':portScheduleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].switch.portSchedules[':portScheduleId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSwitchSettingsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>,
) {
  return ['networks', '/networks/:networkId/switch/settings', args] as const
}

export function useGetNetworksNetworkIdSwitchSettings<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>
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
        ? getGetNetworksNetworkIdSwitchSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].switch.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSwitchSettings<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>
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
        ? getGetNetworksNetworkIdSwitchSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].switch.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSwitchSettingsKey() {
  return ['networks', '/networks/:networkId/switch/settings', 'PUT'] as const
}

export function usePutNetworksNetworkIdSwitchSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['switch']['settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSwitchSettingsKey()
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
            (typeof client.networks)[':networkId']['switch']['settings']['$put']
          >
        },
      ) => parseResponse(client.networks[':networkId'].switch.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSwitchSettingsMtuKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/mtu', args] as const
}

export function useGetNetworksNetworkIdSwitchSettingsMtu<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchSettingsMtuKey(args)
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
                (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].switch.settings.mtu.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSwitchSettingsMtu<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchSettingsMtuKey(args)
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
                (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].switch.settings.mtu.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSwitchSettingsMtuKey() {
  return ['networks', '/networks/:networkId/switch/settings/mtu', 'PUT'] as const
}

export function usePutNetworksNetworkIdSwitchSettingsMtu<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['mtu']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSwitchSettingsMtuKey()
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
            (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$put']
          >
        },
      ) =>
        parseResponse(client.networks[':networkId'].switch.settings.mtu.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSwitchSettingsMulticastKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/multicast', args] as const
}

export function useGetNetworksNetworkIdSwitchSettingsMulticast<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchSettingsMulticastKey(args)
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
                (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
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
          client.networks[':networkId'].switch.settings.multicast.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSwitchSettingsMulticast<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchSettingsMulticastKey(args)
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
                (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
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
          client.networks[':networkId'].switch.settings.multicast.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSwitchSettingsMulticastKey() {
  return ['networks', '/networks/:networkId/switch/settings/multicast', 'PUT'] as const
}

export function usePutNetworksNetworkIdSwitchSettingsMulticast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSwitchSettingsMulticastKey()
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
            (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].switch.settings.multicast.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSwitchSettingsQosRulesKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/qosRules', args] as const
}

export function useGetNetworksNetworkIdSwitchSettingsQosRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchSettingsQosRulesKey(args)
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
                (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
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
          client.networks[':networkId'].switch.settings.qosRules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSwitchSettingsQosRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchSettingsQosRulesKey(args)
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
                (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
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
          client.networks[':networkId'].switch.settings.qosRules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdSwitchSettingsQosRulesKey() {
  return ['networks', '/networks/:networkId/switch/settings/qosRules', 'POST'] as const
}

export function usePostNetworksNetworkIdSwitchSettingsQosRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdSwitchSettingsQosRulesKey()
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
            (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].switch.settings.qosRules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSwitchSettingsQosRulesOrderKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/qosRules/order', args] as const
}

export function useGetNetworksNetworkIdSwitchSettingsQosRulesOrder<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchSettingsQosRulesOrderKey(args)
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
                (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
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
          client.networks[':networkId'].switch.settings.qosRules.order.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSwitchSettingsQosRulesOrder<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchSettingsQosRulesOrderKey(args)
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
                (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
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
          client.networks[':networkId'].switch.settings.qosRules.order.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSwitchSettingsQosRulesOrderKey() {
  return ['networks', '/networks/:networkId/switch/settings/qosRules/order', 'PUT'] as const
}

export function usePutNetworksNetworkIdSwitchSettingsQosRulesOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSwitchSettingsQosRulesOrderKey()
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
            (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].switch.settings.qosRules.order.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/qosRules/:qosRuleId', args] as const
}

export function useGetNetworksNetworkIdSwitchSettingsQosRulesQosRuleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdKey(args)
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
                (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
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
          client.networks[':networkId'].switch.settings.qosRules[':qosRuleId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSwitchSettingsQosRulesQosRuleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdKey(args)
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
                (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
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
          client.networks[':networkId'].switch.settings.qosRules[':qosRuleId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdKey() {
  return ['networks', '/networks/:networkId/switch/settings/qosRules/:qosRuleId', 'PUT'] as const
}

export function usePutNetworksNetworkIdSwitchSettingsQosRulesQosRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdKey()
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
            (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].switch.settings.qosRules[':qosRuleId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdKey() {
  return ['networks', '/networks/:networkId/switch/settings/qosRules/:qosRuleId', 'DELETE'] as const
}

export function useDeleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdKey()
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
            (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].switch.settings.qosRules[':qosRuleId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSwitchSettingsStormControlKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/switch/settings/stormControl', args] as const
}

export function useGetNetworksNetworkIdSwitchSettingsStormControl<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchSettingsStormControlKey(args)
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
                (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
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
          client.networks[':networkId'].switch.settings.stormControl.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSwitchSettingsStormControl<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchSettingsStormControlKey(args)
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
                (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
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
          client.networks[':networkId'].switch.settings.stormControl.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSwitchSettingsStormControlKey() {
  return ['networks', '/networks/:networkId/switch/settings/stormControl', 'PUT'] as const
}

export function usePutNetworksNetworkIdSwitchSettingsStormControl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSwitchSettingsStormControlKey()
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
            (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].switch.settings.stormControl.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSwitchStacksKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$get']>,
) {
  return ['networks', '/networks/:networkId/switchStacks', args] as const
}

export function useGetNetworksNetworkIdSwitchStacks<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['switchStacks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchStacksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['switchStacks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].switchStacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSwitchStacks<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['switchStacks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchStacksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['switchStacks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].switchStacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdSwitchStacksKey() {
  return ['networks', '/networks/:networkId/switchStacks', 'POST'] as const
}

export function usePostNetworksNetworkIdSwitchStacks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['switchStacks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdSwitchStacksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$post']>
        },
      ) => parseResponse(client.networks[':networkId'].switchStacks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSwitchStacksSwitchStackIdKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/switchStacks/:switchStackId', args] as const
}

export function useGetNetworksNetworkIdSwitchStacksSwitchStackId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchStacksSwitchStackIdKey(args)
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
                (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
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
          client.networks[':networkId'].switchStacks[':switchStackId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSwitchStacksSwitchStackId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSwitchStacksSwitchStackIdKey(args)
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
                (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
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
          client.networks[':networkId'].switchStacks[':switchStackId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteNetworksNetworkIdSwitchStacksSwitchStackIdKey() {
  return ['networks', '/networks/:networkId/switchStacks/:switchStackId', 'DELETE'] as const
}

export function useDeleteNetworksNetworkIdSwitchStacksSwitchStackId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworksNetworkIdSwitchStacksSwitchStackIdKey()
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
            (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].switchStacks[':switchStackId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNetworksNetworkIdSwitchStacksSwitchStackIdAddKey() {
  return ['networks', '/networks/:networkId/switchStacks/:switchStackId/add', 'POST'] as const
}

export function usePostNetworksNetworkIdSwitchStacksSwitchStackIdAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['add']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdSwitchStacksSwitchStackIdAddKey()
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
            (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['add']['$post']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].switchStacks[':switchStackId'].add.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNetworksNetworkIdSwitchStacksSwitchStackIdRemoveKey() {
  return ['networks', '/networks/:networkId/switchStacks/:switchStackId/remove', 'POST'] as const
}

export function usePostNetworksNetworkIdSwitchStacksSwitchStackIdRemove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdSwitchStacksSwitchStackIdRemoveKey()
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
            (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].switchStacks[':switchStackId'].remove.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSyslogServersKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$get']>,
) {
  return ['networks', '/networks/:networkId/syslogServers', args] as const
}

export function useGetNetworksNetworkIdSyslogServers<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['syslogServers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSyslogServersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['syslogServers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].syslogServers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSyslogServers<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['syslogServers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSyslogServersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['syslogServers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].syslogServers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSyslogServersKey() {
  return ['networks', '/networks/:networkId/syslogServers', 'PUT'] as const
}

export function usePutNetworksNetworkIdSyslogServers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['syslogServers']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSyslogServersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$put']>
        },
      ) => parseResponse(client.networks[':networkId'].syslogServers.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdTrafficKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['traffic']['$get']>,
) {
  return ['networks', '/networks/:networkId/traffic', args] as const
}

export function useGetNetworksNetworkIdTraffic<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['traffic']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['traffic']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdTrafficKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['traffic']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].traffic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdTraffic<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['traffic']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['traffic']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdTrafficKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['traffic']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].traffic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdUnbindKey() {
  return ['networks', '/networks/:networkId/unbind', 'POST'] as const
}

export function usePostNetworksNetworkIdUnbind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['unbind']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['unbind']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdUnbindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.networks)[':networkId']['unbind']['$post']> },
      ) => parseResponse(client.networks[':networkId'].unbind.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdUplinkSettingsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>,
) {
  return ['networks', '/networks/:networkId/uplinkSettings', args] as const
}

export function useGetNetworksNetworkIdUplinkSettings<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdUplinkSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].uplinkSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdUplinkSettings<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdUplinkSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].uplinkSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdUplinkSettingsKey() {
  return ['networks', '/networks/:networkId/uplinkSettings', 'PUT'] as const
}

export function usePutNetworksNetworkIdUplinkSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['uplinkSettings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdUplinkSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$put']>
        },
      ) => parseResponse(client.networks[':networkId'].uplinkSettings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdVlansKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlans']['$get']>,
) {
  return ['networks', '/networks/:networkId/vlans', args] as const
}

export function useGetNetworksNetworkIdVlans<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdVlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].vlans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdVlans<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdVlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].vlans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdVlansKey() {
  return ['networks', '/networks/:networkId/vlans', 'POST'] as const
}

export function usePostNetworksNetworkIdVlans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['vlans']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdVlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.networks)[':networkId']['vlans']['$post']> },
      ) => parseResponse(client.networks[':networkId'].vlans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdVlansVlanIdKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>,
) {
  return ['networks', '/networks/:networkId/vlans/:vlanId', args] as const
}

export function useGetNetworksNetworkIdVlansVlanId<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdVlansVlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].vlans[':vlanId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdVlansVlanId<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdVlansVlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].vlans[':vlanId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdVlansVlanIdKey() {
  return ['networks', '/networks/:networkId/vlans/:vlanId', 'PUT'] as const
}

export function usePutNetworksNetworkIdVlansVlanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdVlansVlanIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$put']>
        },
      ) => parseResponse(client.networks[':networkId'].vlans[':vlanId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNetworksNetworkIdVlansVlanIdKey() {
  return ['networks', '/networks/:networkId/vlans/:vlanId', 'DELETE'] as const
}

export function useDeleteNetworksNetworkIdVlansVlanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworksNetworkIdVlansVlanIdKey()
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
            (typeof client.networks)[':networkId']['vlans'][':vlanId']['$delete']
          >
        },
      ) =>
        parseResponse(client.networks[':networkId'].vlans[':vlanId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdVlansEnabledStateKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>,
) {
  return ['networks', '/networks/:networkId/vlansEnabledState', args] as const
}

export function useGetNetworksNetworkIdVlansEnabledState<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdVlansEnabledStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].vlansEnabledState.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdVlansEnabledState<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdVlansEnabledStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].vlansEnabledState.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdVlansEnabledStateKey() {
  return ['networks', '/networks/:networkId/vlansEnabledState', 'PUT'] as const
}

export function usePutNetworksNetworkIdVlansEnabledState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['vlansEnabledState']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdVlansEnabledStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$put']>
        },
      ) => parseResponse(client.networks[':networkId'].vlansEnabledState.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdWarmSpareSettingsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>,
) {
  return ['networks', '/networks/:networkId/warmSpareSettings', args] as const
}

export function useGetNetworksNetworkIdWarmSpareSettings<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdWarmSpareSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].warmSpareSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdWarmSpareSettings<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdWarmSpareSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].warmSpareSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdWarmSpareSettingsKey() {
  return ['networks', '/networks/:networkId/warmSpareSettings', 'PUT'] as const
}

export function usePutNetworksNetworkIdWarmSpareSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['warmSpareSettings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdWarmSpareSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$put']>
        },
      ) => parseResponse(client.networks[':networkId'].warmSpareSettings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdWirelessRfProfilesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']>,
) {
  return ['networks', '/networks/:networkId/wireless/rfProfiles', args] as const
}

export function useGetNetworksNetworkIdWirelessRfProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']>
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
        ? getGetNetworksNetworkIdWirelessRfProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].wireless.rfProfiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdWirelessRfProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']>
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
        ? getGetNetworksNetworkIdWirelessRfProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].wireless.rfProfiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdWirelessRfProfilesKey() {
  return ['networks', '/networks/:networkId/wireless/rfProfiles', 'POST'] as const
}

export function usePostNetworksNetworkIdWirelessRfProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdWirelessRfProfilesKey()
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
            (typeof client.networks)[':networkId']['wireless']['rfProfiles']['$post']
          >
        },
      ) =>
        parseResponse(client.networks[':networkId'].wireless.rfProfiles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdWirelessRfProfilesRfProfileIdKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
  >,
) {
  return ['networks', '/networks/:networkId/wireless/rfProfiles/:rfProfileId', args] as const
}

export function useGetNetworksNetworkIdWirelessRfProfilesRfProfileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdWirelessRfProfilesRfProfileIdKey(args)
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
                (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
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
          client.networks[':networkId'].wireless.rfProfiles[':rfProfileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdWirelessRfProfilesRfProfileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdWirelessRfProfilesRfProfileIdKey(args)
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
                (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
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
          client.networks[':networkId'].wireless.rfProfiles[':rfProfileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdWirelessRfProfilesRfProfileIdKey() {
  return ['networks', '/networks/:networkId/wireless/rfProfiles/:rfProfileId', 'PUT'] as const
}

export function usePutNetworksNetworkIdWirelessRfProfilesRfProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdWirelessRfProfilesRfProfileIdKey()
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
            (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].wireless.rfProfiles[':rfProfileId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteNetworksNetworkIdWirelessRfProfilesRfProfileIdKey() {
  return ['networks', '/networks/:networkId/wireless/rfProfiles/:rfProfileId', 'DELETE'] as const
}

export function useDeleteNetworksNetworkIdWirelessRfProfilesRfProfileId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworksNetworkIdWirelessRfProfilesRfProfileIdKey()
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
            (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].wireless.rfProfiles[':rfProfileId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdWirelessSettingsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>,
) {
  return ['networks', '/networks/:networkId/wireless/settings', args] as const
}

export function useGetNetworksNetworkIdWirelessSettings<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>
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
        ? getGetNetworksNetworkIdWirelessSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].wireless.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdWirelessSettings<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>
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
        ? getGetNetworksNetworkIdWirelessSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].wireless.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworksNetworkIdWirelessSettingsKey() {
  return ['networks', '/networks/:networkId/wireless/settings', 'PUT'] as const
}

export function usePutNetworksNetworkIdWirelessSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['wireless']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdWirelessSettingsKey()
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
            (typeof client.networks)[':networkId']['wireless']['settings']['$put']
          >
        },
      ) => parseResponse(client.networks[':networkId'].wireless.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutNetworksNetworkIdSmDevicesLockKey() {
  return ['networks', '/networks/:network_id/sm/devices/lock', 'PUT'] as const
}

export function usePutNetworksNetworkIdSmDevicesLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':network_id']['sm']['devices']['lock']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworksNetworkIdSmDevicesLockKey()
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
            (typeof client.networks)[':network_id']['sm']['devices']['lock']['$put']
          >
        },
      ) => parseResponse(client.networks[':network_id'].sm.devices.lock.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmIdConnectivityKey(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']
  >,
) {
  return ['networks', '/networks/:network_id/sm/:id/connectivity', args] as const
}

export function useGetNetworksNetworkIdSmIdConnectivity<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmIdConnectivityKey(args)
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
                (typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']
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
          client.networks[':network_id'].sm[':id'].connectivity.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmIdConnectivity<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmIdConnectivityKey(args)
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
                (typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']
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
          client.networks[':network_id'].sm[':id'].connectivity.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmIdDesktopLogsKey(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']
  >,
) {
  return ['networks', '/networks/:network_id/sm/:id/desktopLogs', args] as const
}

export function useGetNetworksNetworkIdSmIdDesktopLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmIdDesktopLogsKey(args)
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
                (typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']
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
          client.networks[':network_id'].sm[':id'].desktopLogs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmIdDesktopLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmIdDesktopLogsKey(args)
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
                (typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']
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
          client.networks[':network_id'].sm[':id'].desktopLogs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmIdDeviceCommandLogsKey(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
  >,
) {
  return ['networks', '/networks/:network_id/sm/:id/deviceCommandLogs', args] as const
}

export function useGetNetworksNetworkIdSmIdDeviceCommandLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmIdDeviceCommandLogsKey(args)
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
                (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
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
          client.networks[':network_id'].sm[':id'].deviceCommandLogs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmIdDeviceCommandLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmIdDeviceCommandLogsKey(args)
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
                (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
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
          client.networks[':network_id'].sm[':id'].deviceCommandLogs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdSmIdPerformanceHistoryKey(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
  >,
) {
  return ['networks', '/networks/:network_id/sm/:id/performanceHistory', args] as const
}

export function useGetNetworksNetworkIdSmIdPerformanceHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmIdPerformanceHistoryKey(args)
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
                (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
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
          client.networks[':network_id'].sm[':id'].performanceHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdSmIdPerformanceHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdSmIdPerformanceHistoryKey(args)
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
                (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
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
          client.networks[':network_id'].sm[':id'].performanceHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsKey() {
  return ['organizations', '/organizations'] as const
}

export function useGetOrganizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId', args] as const
}

export function useGetOrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':organizationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':organizationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdActionBatchesKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['actionBatches']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/actionBatches', args] as const
}

export function useGetOrganizationsOrganizationIdActionBatches<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['actionBatches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['actionBatches']['$get']>
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
        ? getGetOrganizationsOrganizationIdActionBatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['actionBatches']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].actionBatches.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdActionBatches<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['actionBatches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['actionBatches']['$get']>
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
        ? getGetOrganizationsOrganizationIdActionBatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['actionBatches']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].actionBatches.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdActionBatchesKey() {
  return ['organizations', '/organizations/:organizationId/actionBatches', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdActionBatches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['actionBatches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdActionBatchesKey()
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
            (typeof client.organizations)[':organizationId']['actionBatches']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].actionBatches.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdActionBatchesActionBatchIdKey() {
  return [
    'organizations',
    '/organizations/:organizationId/actionBatches/:actionBatchId',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdActionBatchesActionBatchId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdActionBatchesActionBatchIdKey()
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
            (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].actionBatches[':actionBatchId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdActionBatchesActionBatchIdKey() {
  return [
    'organizations',
    '/organizations/:organizationId/actionBatches/:actionBatchId',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdActionBatchesActionBatchId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdActionBatchesActionBatchIdKey()
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
            (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].actionBatches[':actionBatchId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdAdminsKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/admins', args] as const
}

export function useGetOrganizationsOrganizationIdAdmins<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['admins']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdAdminsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['admins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].admins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdAdmins<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['admins']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdAdminsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['admins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].admins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdAdminsKey() {
  return ['organizations', '/organizations/:organizationId/admins', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdAdmins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['admins']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdAdminsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$post']>
        },
      ) => parseResponse(client.organizations[':organizationId'].admins.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdAdminsAdminIdKey() {
  return ['organizations', '/organizations/:organizationId/admins/:adminId', 'PUT'] as const
}

export function usePutOrganizationsOrganizationIdAdminsAdminId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['admins'][':adminId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdAdminsAdminIdKey()
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
            (typeof client.organizations)[':organizationId']['admins'][':adminId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].admins[':adminId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdAdminsAdminIdKey() {
  return ['organizations', '/organizations/:organizationId/admins/:adminId', 'DELETE'] as const
}

export function useDeleteOrganizationsOrganizationIdAdminsAdminId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['admins'][':adminId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdAdminsAdminIdKey()
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
            (typeof client.organizations)[':organizationId']['admins'][':adminId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].admins[':adminId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdApiRequestsKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/apiRequests', args] as const
}

export function useGetOrganizationsOrganizationIdApiRequests<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>
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
        ? getGetOrganizationsOrganizationIdApiRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].apiRequests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdApiRequests<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>
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
        ? getGetOrganizationsOrganizationIdApiRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].apiRequests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdApiRequestsOverviewKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/apiRequests/overview', args] as const
}

export function useGetOrganizationsOrganizationIdApiRequestsOverview<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdApiRequestsOverviewKey(args)
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
                (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
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
          client.organizations[':organizationId'].apiRequests.overview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdApiRequestsOverview<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdApiRequestsOverviewKey(args)
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
                (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
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
          client.organizations[':organizationId'].apiRequests.overview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdClaimKey() {
  return ['organizations', '/organizations/:organizationId/claim', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdClaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['claim']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['claim']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdClaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organizations)[':organizationId']['claim']['$post']>
        },
      ) => parseResponse(client.organizations[':organizationId'].claim.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdCloneKey() {
  return ['organizations', '/organizations/:organizationId/clone', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['clone']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['clone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdCloneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organizations)[':organizationId']['clone']['$post']>
        },
      ) => parseResponse(client.organizations[':organizationId'].clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdConfigTemplatesKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/configTemplates', args] as const
}

export function useGetOrganizationsOrganizationIdConfigTemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdConfigTemplatesKey(args)
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
                (typeof client.organizations)[':organizationId']['configTemplates']['$get']
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
          client.organizations[':organizationId'].configTemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdConfigTemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdConfigTemplatesKey(args)
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
                (typeof client.organizations)[':organizationId']['configTemplates']['$get']
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
          client.organizations[':organizationId'].configTemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdKey() {
  return [
    'organizations',
    '/organizations/:organizationId/configTemplates/:configTemplateId',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdKey()
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
            (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].configTemplates[':configTemplateId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesKey(
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

export function useGetOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfiles<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switchProfiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesKey(args)
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
                (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switchProfiles']['$get']
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
          client.organizations[':organizationId'].configTemplates[
            ':configTemplateId'
          ].switchProfiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfiles<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switchProfiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesKey(args)
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
                (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switchProfiles']['$get']
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
          client.organizations[':organizationId'].configTemplates[
            ':configTemplateId'
          ].switchProfiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdConfigurationChangesKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/configurationChanges', args] as const
}

export function useGetOrganizationsOrganizationIdConfigurationChanges<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdConfigurationChangesKey(args)
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
                (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
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
          client.organizations[':organizationId'].configurationChanges.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdConfigurationChanges<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdConfigurationChangesKey(args)
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
                (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
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
          client.organizations[':organizationId'].configurationChanges.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdDeviceStatusesKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['deviceStatuses']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/deviceStatuses', args] as const
}

export function useGetOrganizationsOrganizationIdDeviceStatuses<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['deviceStatuses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['deviceStatuses']['$get']>
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
        ? getGetOrganizationsOrganizationIdDeviceStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['deviceStatuses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].deviceStatuses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdDeviceStatuses<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['deviceStatuses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['deviceStatuses']['$get']>
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
        ? getGetOrganizationsOrganizationIdDeviceStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['deviceStatuses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].deviceStatuses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdDevicesKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['devices']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/devices', args] as const
}

export function useGetOrganizationsOrganizationIdDevices<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['devices']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdDevices<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['devices']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdInsightMonitoredMediaServersKey(
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

export function useGetOrganizationsOrganizationIdInsightMonitoredMediaServers<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdInsightMonitoredMediaServersKey(args)
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
                (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$get']
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
          client.organizations[':organizationId'].insight.monitoredMediaServers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdInsightMonitoredMediaServers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdInsightMonitoredMediaServersKey(args)
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
                (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$get']
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
          client.organizations[':organizationId'].insight.monitoredMediaServers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdInsightMonitoredMediaServersKey() {
  return [
    'organizations',
    '/organizations/:organizationId/insight/monitoredMediaServers',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdInsightMonitoredMediaServers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdInsightMonitoredMediaServersKey()
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
            (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].insight.monitoredMediaServers.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdKey(
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

export function useGetOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdKey(
            args,
          )
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
                (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$get']
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
          client.organizations[':organizationId'].insight.monitoredMediaServers[
            ':monitoredMediaServerId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdKey(
            args,
          )
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
                (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$get']
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
          client.organizations[':organizationId'].insight.monitoredMediaServers[
            ':monitoredMediaServerId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdKey() {
  return [
    'organizations',
    '/organizations/:organizationId/insight/monitoredMediaServers/:monitoredMediaServerId',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdKey()
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
            (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].insight.monitoredMediaServers[
            ':monitoredMediaServerId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdKey() {
  return [
    'organizations',
    '/organizations/:organizationId/insight/monitoredMediaServers/:monitoredMediaServerId',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdKey()
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
            (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].insight.monitoredMediaServers[
            ':monitoredMediaServerId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdInventoryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['inventory']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/inventory', args] as const
}

export function useGetOrganizationsOrganizationIdInventory<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['inventory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['inventory']['$get']>
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
        ? getGetOrganizationsOrganizationIdInventoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['inventory']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].inventory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdInventory<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['inventory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['inventory']['$get']>
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
        ? getGetOrganizationsOrganizationIdInventoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['inventory']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].inventory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdLicenseStateKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['licenseState']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/licenseState', args] as const
}

export function useGetOrganizationsOrganizationIdLicenseState<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['licenseState']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['licenseState']['$get']>
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
        ? getGetOrganizationsOrganizationIdLicenseStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['licenseState']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].licenseState.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdLicenseState<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['licenseState']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['licenseState']['$get']>
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
        ? getGetOrganizationsOrganizationIdLicenseStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['licenseState']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].licenseState.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdLicensesKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['licenses']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/licenses', args] as const
}

export function useGetOrganizationsOrganizationIdLicenses<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['licenses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['licenses']['$get']>
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
        ? getGetOrganizationsOrganizationIdLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['licenses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdLicenses<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['licenses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['licenses']['$get']>
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
        ? getGetOrganizationsOrganizationIdLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['licenses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdLicensesAssignSeatsKey() {
  return ['organizations', '/organizations/:organizationId/licenses/assignSeats', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdLicensesAssignSeats<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['licenses']['assignSeats']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdLicensesAssignSeatsKey()
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
            (typeof client.organizations)[':organizationId']['licenses']['assignSeats']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].licenses.assignSeats.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdLicensesMoveSeatsKey() {
  return ['organizations', '/organizations/:organizationId/licenses/moveSeats', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdLicensesMoveSeats<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['licenses']['moveSeats']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdLicensesMoveSeatsKey()
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
            (typeof client.organizations)[':organizationId']['licenses']['moveSeats']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].licenses.moveSeats.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdLicensesRenewSeatsKey() {
  return ['organizations', '/organizations/:organizationId/licenses/renewSeats', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdLicensesRenewSeats<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['licenses']['renewSeats']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdLicensesRenewSeatsKey()
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
            (typeof client.organizations)[':organizationId']['licenses']['renewSeats']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].licenses.renewSeats.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdLicensesLicenseIdKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/licenses/:licenseId', args] as const
}

export function useGetOrganizationsOrganizationIdLicensesLicenseId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdLicensesLicenseIdKey(args)
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
                (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
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
          client.organizations[':organizationId'].licenses[':licenseId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdLicensesLicenseId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdLicensesLicenseIdKey(args)
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
                (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
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
          client.organizations[':organizationId'].licenses[':licenseId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdNetworksKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['networks']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/networks', args] as const
}

export function useGetOrganizationsOrganizationIdNetworks<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['networks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['networks']['$get']>
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
        ? getGetOrganizationsOrganizationIdNetworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['networks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].networks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdNetworks<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['networks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['networks']['$get']>
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
        ? getGetOrganizationsOrganizationIdNetworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['networks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].networks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdNetworksKey() {
  return ['organizations', '/organizations/:organizationId/networks', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdNetworks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['networks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['networks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdNetworksKey()
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
            (typeof client.organizations)[':organizationId']['networks']['$post']
          >
        },
      ) =>
        parseResponse(client.organizations[':organizationId'].networks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdNetworksCombineKey() {
  return ['organizations', '/organizations/:organizationId/networks/combine', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdNetworksCombine<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['networks']['combine']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdNetworksCombineKey()
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
            (typeof client.organizations)[':organizationId']['networks']['combine']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].networks.combine.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOpenapiSpecKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/openapiSpec', args] as const
}

export function useGetOrganizationsOrganizationIdOpenapiSpec<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>
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
        ? getGetOrganizationsOrganizationIdOpenapiSpecKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].openapiSpec.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOpenapiSpec<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>
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
        ? getGetOrganizationsOrganizationIdOpenapiSpecKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].openapiSpec.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdSamlRolesKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/samlRoles', args] as const
}

export function useGetOrganizationsOrganizationIdSamlRoles<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>
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
        ? getGetOrganizationsOrganizationIdSamlRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].samlRoles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdSamlRoles<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>
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
        ? getGetOrganizationsOrganizationIdSamlRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].samlRoles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdSamlRolesKey() {
  return ['organizations', '/organizations/:organizationId/samlRoles', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdSamlRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['samlRoles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdSamlRolesKey()
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
            (typeof client.organizations)[':organizationId']['samlRoles']['$post']
          >
        },
      ) =>
        parseResponse(client.organizations[':organizationId'].samlRoles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdSamlRolesSamlRoleIdKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/samlRoles/:samlRoleId', args] as const
}

export function useGetOrganizationsOrganizationIdSamlRolesSamlRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdSamlRolesSamlRoleIdKey(args)
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
                (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
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
          client.organizations[':organizationId'].samlRoles[':samlRoleId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdSamlRolesSamlRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdSamlRolesSamlRoleIdKey(args)
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
                (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
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
          client.organizations[':organizationId'].samlRoles[':samlRoleId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdSamlRolesSamlRoleIdKey() {
  return ['organizations', '/organizations/:organizationId/samlRoles/:samlRoleId', 'PUT'] as const
}

export function usePutOrganizationsOrganizationIdSamlRolesSamlRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdSamlRolesSamlRoleIdKey()
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
            (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].samlRoles[':samlRoleId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdSecurityIntrusionSettingsKey(
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

export function useGetOrganizationsOrganizationIdSecurityIntrusionSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdSecurityIntrusionSettingsKey(args)
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
                (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$get']
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
          client.organizations[':organizationId'].security.intrusionSettings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdSecurityIntrusionSettings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdSecurityIntrusionSettingsKey(args)
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
                (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$get']
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
          client.organizations[':organizationId'].security.intrusionSettings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdSecurityIntrusionSettingsKey() {
  return [
    'organizations',
    '/organizations/:organizationId/security/intrusionSettings',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdSecurityIntrusionSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdSecurityIntrusionSettingsKey()
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
            (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].security.intrusionSettings.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdSecurityEventsKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['securityEvents']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/securityEvents', args] as const
}

export function useGetOrganizationsOrganizationIdSecurityEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['securityEvents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['securityEvents']['$get']>
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
        ? getGetOrganizationsOrganizationIdSecurityEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['securityEvents']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].securityEvents.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdSecurityEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['securityEvents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['securityEvents']['$get']>
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
        ? getGetOrganizationsOrganizationIdSecurityEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['securityEvents']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].securityEvents.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdSnmpKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['snmp']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/snmp', args] as const
}

export function useGetOrganizationsOrganizationIdSnmp<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['snmp']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['snmp']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdSnmpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['snmp']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].snmp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdSnmp<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['snmp']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['snmp']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdSnmpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['snmp']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].snmp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdThirdPartyVPNPeersKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/thirdPartyVPNPeers', args] as const
}

export function useGetOrganizationsOrganizationIdThirdPartyVPNPeers<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdThirdPartyVPNPeersKey(args)
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
                (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']
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
          client.organizations[':organizationId'].thirdPartyVPNPeers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdThirdPartyVPNPeers<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdThirdPartyVPNPeersKey(args)
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
                (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']
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
          client.organizations[':organizationId'].thirdPartyVPNPeers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdThirdPartyVPNPeersKey() {
  return ['organizations', '/organizations/:organizationId/thirdPartyVPNPeers', 'PUT'] as const
}

export function usePutOrganizationsOrganizationIdThirdPartyVPNPeers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdThirdPartyVPNPeersKey()
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
            (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].thirdPartyVPNPeers.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdUplinksLossAndLatencyKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/uplinksLossAndLatency', args] as const
}

export function useGetOrganizationsOrganizationIdUplinksLossAndLatency<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdUplinksLossAndLatencyKey(args)
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
                (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
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
          client.organizations[':organizationId'].uplinksLossAndLatency.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdUplinksLossAndLatency<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdUplinksLossAndLatencyKey(args)
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
                (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
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
          client.organizations[':organizationId'].uplinksLossAndLatency.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdVpnFirewallRulesKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/vpnFirewallRules', args] as const
}

export function useGetOrganizationsOrganizationIdVpnFirewallRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdVpnFirewallRulesKey(args)
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
                (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']
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
          client.organizations[':organizationId'].vpnFirewallRules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdVpnFirewallRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdVpnFirewallRulesKey(args)
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
                (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']
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
          client.organizations[':organizationId'].vpnFirewallRules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdVpnFirewallRulesKey() {
  return ['organizations', '/organizations/:organizationId/vpnFirewallRules', 'PUT'] as const
}

export function usePutOrganizationsOrganizationIdVpnFirewallRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['vpnFirewallRules']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdVpnFirewallRulesKey()
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
            (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].vpnFirewallRules.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
