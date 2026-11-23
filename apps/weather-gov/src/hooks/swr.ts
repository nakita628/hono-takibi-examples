import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAlertsKey() {
  return ['alerts'] as const
}

export function getAviationKey() {
  return ['aviation'] as const
}

export function getGlossaryKey() {
  return ['glossary'] as const
}

export function getGridpointsKey() {
  return ['gridpoints'] as const
}

export function getIconsKey() {
  return ['icons'] as const
}

export function getOfficesKey() {
  return ['offices'] as const
}

export function getPointsKey() {
  return ['points'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getRadarKey() {
  return ['radar'] as const
}

export function getRadioKey() {
  return ['radio'] as const
}

export function getStationsKey() {
  return ['stations'] as const
}

export function getThumbnailsKey() {
  return ['thumbnails'] as const
}

export function getZonesKey() {
  return ['zones'] as const
}

export function getGetAlertsKey(args: InferRequestType<typeof client.alerts.$get>) {
  return ['alerts', '/alerts', args] as const
}

export function useGetAlerts<TError = unknown>(
  args: InferRequestType<typeof client.alerts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.alerts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAlerts<TError = unknown>(
  args: InferRequestType<typeof client.alerts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.alerts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAlertsActiveKey(args: InferRequestType<typeof client.alerts.active.$get>) {
  return ['alerts', '/alerts/active', args] as const
}

export function useGetAlertsActive<TError = unknown>(
  args: InferRequestType<typeof client.alerts.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertsActiveKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlertsActive<TError = unknown>(
  args: InferRequestType<typeof client.alerts.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertsActiveKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAlertsActiveCountKey() {
  return ['alerts', '/alerts/active/count'] as const
}

export function useGetAlertsActiveCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.count.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertsActiveCountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts.active.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlertsActiveCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.count.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertsActiveCountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts.active.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAlertsActiveZoneZoneIdKey(
  args: InferRequestType<(typeof client.alerts.active.zone)[':zoneId']['$get']>,
) {
  return ['alerts', '/alerts/active/zone/:zoneId', args] as const
}

export function useGetAlertsActiveZoneZoneId<TError = unknown>(
  args: InferRequestType<(typeof client.alerts.active.zone)[':zoneId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alerts.active.zone)[':zoneId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlertsActiveZoneZoneIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alerts.active.zone)[':zoneId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts.active.zone[':zoneId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlertsActiveZoneZoneId<TError = unknown>(
  args: InferRequestType<(typeof client.alerts.active.zone)[':zoneId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alerts.active.zone)[':zoneId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlertsActiveZoneZoneIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alerts.active.zone)[':zoneId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts.active.zone[':zoneId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAlertsActiveAreaAreaKey(
  args: InferRequestType<(typeof client.alerts.active.area)[':area']['$get']>,
) {
  return ['alerts', '/alerts/active/area/:area', args] as const
}

export function useGetAlertsActiveAreaArea<TError = unknown>(
  args: InferRequestType<(typeof client.alerts.active.area)[':area']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alerts.active.area)[':area']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlertsActiveAreaAreaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alerts.active.area)[':area']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts.active.area[':area'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlertsActiveAreaArea<TError = unknown>(
  args: InferRequestType<(typeof client.alerts.active.area)[':area']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alerts.active.area)[':area']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlertsActiveAreaAreaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alerts.active.area)[':area']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts.active.area[':area'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAlertsActiveRegionRegionKey(
  args: InferRequestType<(typeof client.alerts.active.region)[':region']['$get']>,
) {
  return ['alerts', '/alerts/active/region/:region', args] as const
}

export function useGetAlertsActiveRegionRegion<TError = unknown>(
  args: InferRequestType<(typeof client.alerts.active.region)[':region']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alerts.active.region)[':region']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlertsActiveRegionRegionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alerts.active.region)[':region']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts.active.region[':region'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlertsActiveRegionRegion<TError = unknown>(
  args: InferRequestType<(typeof client.alerts.active.region)[':region']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alerts.active.region)[':region']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlertsActiveRegionRegionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alerts.active.region)[':region']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts.active.region[':region'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAlertsTypesKey() {
  return ['alerts', '/alerts/types'] as const
}

export function useGetAlertsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.types.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertsTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlertsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.types.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertsTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAlertsIdKey(args: InferRequestType<(typeof client.alerts)[':id']['$get']>) {
  return ['alerts', '/alerts/:id', args] as const
}

export function useGetAlertsId<TError = unknown>(
  args: InferRequestType<(typeof client.alerts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlertsId<TError = unknown>(
  args: InferRequestType<(typeof client.alerts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAviationCwsusCwsuIdKey(
  args: InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>,
) {
  return ['aviation', '/aviation/cwsus/:cwsuId', args] as const
}

export function useGetAviationCwsusCwsuId<TError = unknown>(
  args: InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAviationCwsusCwsuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aviation.cwsus[':cwsuId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAviationCwsusCwsuId<TError = unknown>(
  args: InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAviationCwsusCwsuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aviation.cwsus[':cwsuId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAviationCwsusCwsuIdCwasKey(
  args: InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>,
) {
  return ['aviation', '/aviation/cwsus/:cwsuId/cwas', args] as const
}

export function useGetAviationCwsusCwsuIdCwas<TError = unknown>(
  args: InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAviationCwsusCwsuIdCwasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aviation.cwsus[':cwsuId'].cwas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAviationCwsusCwsuIdCwas<TError = unknown>(
  args: InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAviationCwsusCwsuIdCwasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aviation.cwsus[':cwsuId'].cwas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAviationCwsusCwsuIdCwasDateSequenceKey(
  args: InferRequestType<
    (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
  >,
) {
  return ['aviation', '/aviation/cwsus/:cwsuId/cwas/:date/:sequence', args] as const
}

export function useGetAviationCwsusCwsuIdCwasDateSequence<TError = unknown>(
  args: InferRequestType<
    (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
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
        ? getGetAviationCwsusCwsuIdCwasDateSequenceKey(args)
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
                (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
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
          client.aviation.cwsus[':cwsuId'].cwas[':date'][':sequence'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAviationCwsusCwsuIdCwasDateSequence<TError = unknown>(
  args: InferRequestType<
    (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
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
        ? getGetAviationCwsusCwsuIdCwasDateSequenceKey(args)
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
                (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
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
          client.aviation.cwsus[':cwsuId'].cwas[':date'][':sequence'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAviationSigmetsKey(
  args: InferRequestType<typeof client.aviation.sigmets.$get>,
) {
  return ['aviation', '/aviation/sigmets', args] as const
}

export function useGetAviationSigmets<TError = unknown>(
  args: InferRequestType<typeof client.aviation.sigmets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aviation.sigmets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAviationSigmetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aviation.sigmets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aviation.sigmets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAviationSigmets<TError = unknown>(
  args: InferRequestType<typeof client.aviation.sigmets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aviation.sigmets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAviationSigmetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aviation.sigmets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aviation.sigmets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAviationSigmetsAtsuKey(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu']['$get']>,
) {
  return ['aviation', '/aviation/sigmets/:atsu', args] as const
}

export function useGetAviationSigmetsAtsu<TError = unknown>(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAviationSigmetsAtsuKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aviation.sigmets[':atsu'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAviationSigmetsAtsu<TError = unknown>(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAviationSigmetsAtsuKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aviation.sigmets[':atsu'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAviationSigmetsAtsuDateKey(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>,
) {
  return ['aviation', '/aviation/sigmets/:atsu/:date', args] as const
}

export function useGetAviationSigmetsAtsuDate<TError = unknown>(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAviationSigmetsAtsuDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.aviation.sigmets[':atsu'][':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAviationSigmetsAtsuDate<TError = unknown>(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAviationSigmetsAtsuDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.aviation.sigmets[':atsu'][':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAviationSigmetsAtsuDateTimeKey(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>,
) {
  return ['aviation', '/aviation/sigmets/:atsu/:date/:time', args] as const
}

export function useGetAviationSigmetsAtsuDateTime<TError = unknown>(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAviationSigmetsAtsuDateTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.aviation.sigmets[':atsu'][':date'][':time'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAviationSigmetsAtsuDateTime<TError = unknown>(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAviationSigmetsAtsuDateTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.aviation.sigmets[':atsu'][':date'][':time'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGlossaryKey() {
  return ['glossary', '/glossary'] as const
}

export function useGetGlossary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGlossaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.glossary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlossary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGlossaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.glossary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGridpointsWfoXYKey(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,{y}']['$get']>,
) {
  return ['gridpoints', '/gridpoints/:wfo/:x,{y}', args] as const
}

export function useGetGridpointsWfoXY<TError = unknown>(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,{y}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,{y}']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGridpointsWfoXYKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,{y}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gridpoints[':wfo'][':x,{y}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGridpointsWfoXY<TError = unknown>(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,{y}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,{y}']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGridpointsWfoXYKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,{y}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gridpoints[':wfo'][':x,{y}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGridpointsWfoXYForecastKey(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,{y}']['forecast']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gridpoints', '/gridpoints/:wfo/:x,{y}/forecast', keyArgs] as const
}

export function useGetGridpointsWfoXYForecast<TError = unknown>(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,{y}']['forecast']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,{y}']['forecast']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGridpointsWfoXYForecastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,{y}']['forecast']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gridpoints[':wfo'][':x,{y}'].forecast.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGridpointsWfoXYForecast<TError = unknown>(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,{y}']['forecast']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,{y}']['forecast']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGridpointsWfoXYForecastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,{y}']['forecast']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gridpoints[':wfo'][':x,{y}'].forecast.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGridpointsWfoXYForecastHourlyKey(
  args: InferRequestType<
    (typeof client.gridpoints)[':wfo'][':x,{y}']['forecast']['hourly']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['gridpoints', '/gridpoints/:wfo/:x,{y}/forecast/hourly', keyArgs] as const
}

export function useGetGridpointsWfoXYForecastHourly<TError = unknown>(
  args: InferRequestType<
    (typeof client.gridpoints)[':wfo'][':x,{y}']['forecast']['hourly']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gridpoints)[':wfo'][':x,{y}']['forecast']['hourly']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGridpointsWfoXYForecastHourlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gridpoints)[':wfo'][':x,{y}']['forecast']['hourly']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gridpoints[':wfo'][':x,{y}'].forecast.hourly.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGridpointsWfoXYForecastHourly<TError = unknown>(
  args: InferRequestType<
    (typeof client.gridpoints)[':wfo'][':x,{y}']['forecast']['hourly']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gridpoints)[':wfo'][':x,{y}']['forecast']['hourly']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGridpointsWfoXYForecastHourlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gridpoints)[':wfo'][':x,{y}']['forecast']['hourly']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gridpoints[':wfo'][':x,{y}'].forecast.hourly.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGridpointsWfoXYStationsKey(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,{y}']['stations']['$get']>,
) {
  return ['gridpoints', '/gridpoints/:wfo/:x,{y}/stations', args] as const
}

export function useGetGridpointsWfoXYStations<TError = unknown>(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,{y}']['stations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,{y}']['stations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGridpointsWfoXYStationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,{y}']['stations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gridpoints[':wfo'][':x,{y}'].stations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGridpointsWfoXYStations<TError = unknown>(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,{y}']['stations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,{y}']['stations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGridpointsWfoXYStationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,{y}']['stations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gridpoints[':wfo'][':x,{y}'].stations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIconsSetTimeOfDayFirstKey(
  args: InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>,
) {
  return ['icons', '/icons/:set/:timeOfDay/:first', args] as const
}

export function useGetIconsSetTimeOfDayFirst<TError = unknown>(
  args: InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIconsSetTimeOfDayFirstKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.icons[':set'][':timeOfDay'][':first'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIconsSetTimeOfDayFirst<TError = unknown>(
  args: InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIconsSetTimeOfDayFirstKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.icons[':set'][':timeOfDay'][':first'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIconsSetTimeOfDayFirstSecondKey(
  args: InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']>,
) {
  return ['icons', '/icons/:set/:timeOfDay/:first/:second', args] as const
}

export function useGetIconsSetTimeOfDayFirstSecond<TError = unknown>(
  args: InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIconsSetTimeOfDayFirstSecondKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.icons[':set'][':timeOfDay'][':first'][':second'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIconsSetTimeOfDayFirstSecond<TError = unknown>(
  args: InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIconsSetTimeOfDayFirstSecondKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.icons[':set'][':timeOfDay'][':first'][':second'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIconsKey() {
  return ['icons', '/icons'] as const
}

export function useGetIcons<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.icons.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetIconsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.icons.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.icons.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIcons<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.icons.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetIconsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.icons.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.icons.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetThumbnailsSatelliteAreaKey(
  args: InferRequestType<(typeof client.thumbnails.satellite)[':area']['$get']>,
) {
  return ['thumbnails', '/thumbnails/satellite/:area', args] as const
}

export function useGetThumbnailsSatelliteArea<TError = unknown>(
  args: InferRequestType<(typeof client.thumbnails.satellite)[':area']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.thumbnails.satellite)[':area']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThumbnailsSatelliteAreaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.thumbnails.satellite)[':area']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.thumbnails.satellite[':area'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThumbnailsSatelliteArea<TError = unknown>(
  args: InferRequestType<(typeof client.thumbnails.satellite)[':area']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.thumbnails.satellite)[':area']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThumbnailsSatelliteAreaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.thumbnails.satellite)[':area']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.thumbnails.satellite[':area'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStationsStationIdObservationsKey(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations']['$get']>,
) {
  return ['stations', '/stations/:stationId/observations', args] as const
}

export function useGetStationsStationIdObservations<TError = unknown>(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stations)[':stationId']['observations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStationsStationIdObservationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stations)[':stationId']['observations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stations[':stationId'].observations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStationsStationIdObservations<TError = unknown>(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stations)[':stationId']['observations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStationsStationIdObservationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stations)[':stationId']['observations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stations[':stationId'].observations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStationsStationIdObservationsLatestKey(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations']['latest']['$get']>,
) {
  return ['stations', '/stations/:stationId/observations/latest', args] as const
}

export function useGetStationsStationIdObservationsLatest<TError = unknown>(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stations)[':stationId']['observations']['latest']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStationsStationIdObservationsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stations)[':stationId']['observations']['latest']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stations[':stationId'].observations.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStationsStationIdObservationsLatest<TError = unknown>(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stations)[':stationId']['observations']['latest']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStationsStationIdObservationsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stations)[':stationId']['observations']['latest']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stations[':stationId'].observations.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStationsStationIdObservationsTimeKey(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>,
) {
  return ['stations', '/stations/:stationId/observations/:time', args] as const
}

export function useGetStationsStationIdObservationsTime<TError = unknown>(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStationsStationIdObservationsTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.stations[':stationId'].observations[':time'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStationsStationIdObservationsTime<TError = unknown>(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStationsStationIdObservationsTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.stations[':stationId'].observations[':time'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStationsStationIdTafsKey(
  args: InferRequestType<(typeof client.stations)[':stationId']['tafs']['$get']>,
) {
  return ['stations', '/stations/:stationId/tafs', args] as const
}

export function useGetStationsStationIdTafs<TError = unknown>(
  args: InferRequestType<(typeof client.stations)[':stationId']['tafs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stations)[':stationId']['tafs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStationsStationIdTafsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stations)[':stationId']['tafs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stations[':stationId'].tafs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStationsStationIdTafs<TError = unknown>(
  args: InferRequestType<(typeof client.stations)[':stationId']['tafs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stations)[':stationId']['tafs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStationsStationIdTafsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stations)[':stationId']['tafs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stations[':stationId'].tafs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStationsStationIdTafsDateTimeKey(
  args: InferRequestType<(typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']>,
) {
  return ['stations', '/stations/:stationId/tafs/:date/:time', args] as const
}

export function useGetStationsStationIdTafsDateTime<TError = unknown>(
  args: InferRequestType<(typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStationsStationIdTafsDateTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.stations[':stationId'].tafs[':date'][':time'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStationsStationIdTafsDateTime<TError = unknown>(
  args: InferRequestType<(typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStationsStationIdTafsDateTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.stations[':stationId'].tafs[':date'][':time'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStationsKey(args: InferRequestType<typeof client.stations.$get>) {
  return ['stations', '/stations', args] as const
}

export function useGetStations<TError = unknown>(
  args: InferRequestType<typeof client.stations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stations.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStations<TError = unknown>(
  args: InferRequestType<typeof client.stations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stations.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetStationsStationIdKey(
  args: InferRequestType<(typeof client.stations)[':stationId']['$get']>,
) {
  return ['stations', '/stations/:stationId', args] as const
}

export function useGetStationsStationId<TError = unknown>(
  args: InferRequestType<(typeof client.stations)[':stationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stations)[':stationId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStationsStationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stations)[':stationId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stations[':stationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStationsStationId<TError = unknown>(
  args: InferRequestType<(typeof client.stations)[':stationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stations)[':stationId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStationsStationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stations)[':stationId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stations[':stationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOfficesOfficeIdKey(
  args: InferRequestType<(typeof client.offices)[':officeId']['$get']>,
) {
  return ['offices', '/offices/:officeId', args] as const
}

export function useGetOfficesOfficeId<TError = unknown>(
  args: InferRequestType<(typeof client.offices)[':officeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.offices)[':officeId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficesOfficeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.offices)[':officeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offices[':officeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfficesOfficeId<TError = unknown>(
  args: InferRequestType<(typeof client.offices)[':officeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.offices)[':officeId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficesOfficeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.offices)[':officeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offices[':officeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOfficesOfficeIdBriefingKey(
  args: InferRequestType<(typeof client.offices)[':officeId']['briefing']['$get']>,
) {
  return ['offices', '/offices/:officeId/briefing', args] as const
}

export function useGetOfficesOfficeIdBriefing<TError = unknown>(
  args: InferRequestType<(typeof client.offices)[':officeId']['briefing']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offices)[':officeId']['briefing']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficesOfficeIdBriefingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offices)[':officeId']['briefing']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offices[':officeId'].briefing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfficesOfficeIdBriefing<TError = unknown>(
  args: InferRequestType<(typeof client.offices)[':officeId']['briefing']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offices)[':officeId']['briefing']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficesOfficeIdBriefingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offices)[':officeId']['briefing']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offices[':officeId'].briefing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOfficesOfficeIdBriefingDownloadLatestKey(
  args: InferRequestType<
    (typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']
  >,
) {
  return ['offices', '/offices/:officeId/briefing/download/latest', args] as const
}

export function useGetOfficesOfficeIdBriefingDownloadLatest<TError = unknown>(
  args: InferRequestType<
    (typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']
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
        ? getGetOfficesOfficeIdBriefingDownloadLatestKey(args)
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
                (typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']
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
          client.offices[':officeId'].briefing.download.latest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfficesOfficeIdBriefingDownloadLatest<TError = unknown>(
  args: InferRequestType<
    (typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']
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
        ? getGetOfficesOfficeIdBriefingDownloadLatestKey(args)
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
                (typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']
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
          client.offices[':officeId'].briefing.download.latest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfficesOfficeIdBriefingDownloadBriefingIdKey(
  args: InferRequestType<
    (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
  >,
) {
  return ['offices', '/offices/:officeId/briefing/download/:briefingId', args] as const
}

export function useGetOfficesOfficeIdBriefingDownloadBriefingId<TError = unknown>(
  args: InferRequestType<
    (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
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
        ? getGetOfficesOfficeIdBriefingDownloadBriefingIdKey(args)
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
                (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
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
          client.offices[':officeId'].briefing.download[':briefingId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfficesOfficeIdBriefingDownloadBriefingId<TError = unknown>(
  args: InferRequestType<
    (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
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
        ? getGetOfficesOfficeIdBriefingDownloadBriefingIdKey(args)
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
                (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
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
          client.offices[':officeId'].briefing.download[':briefingId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfficesOfficeIdHeadlinesHeadlineIdKey(
  args: InferRequestType<(typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']>,
) {
  return ['offices', '/offices/:officeId/headlines/:headlineId', args] as const
}

export function useGetOfficesOfficeIdHeadlinesHeadlineId<TError = unknown>(
  args: InferRequestType<(typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficesOfficeIdHeadlinesHeadlineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.offices[':officeId'].headlines[':headlineId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfficesOfficeIdHeadlinesHeadlineId<TError = unknown>(
  args: InferRequestType<(typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficesOfficeIdHeadlinesHeadlineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.offices[':officeId'].headlines[':headlineId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfficesOfficeIdHeadlinesKey(
  args: InferRequestType<(typeof client.offices)[':officeId']['headlines']['$get']>,
) {
  return ['offices', '/offices/:officeId/headlines', args] as const
}

export function useGetOfficesOfficeIdHeadlines<TError = unknown>(
  args: InferRequestType<(typeof client.offices)[':officeId']['headlines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offices)[':officeId']['headlines']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficesOfficeIdHeadlinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offices)[':officeId']['headlines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offices[':officeId'].headlines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfficesOfficeIdHeadlines<TError = unknown>(
  args: InferRequestType<(typeof client.offices)[':officeId']['headlines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offices)[':officeId']['headlines']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficesOfficeIdHeadlinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offices)[':officeId']['headlines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offices[':officeId'].headlines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOfficesOfficeIdWeatherstoriesKey(
  args: InferRequestType<(typeof client.offices)[':officeId']['weatherstories']['$get']>,
) {
  return ['offices', '/offices/:officeId/weatherstories', args] as const
}

export function useGetOfficesOfficeIdWeatherstories<TError = unknown>(
  args: InferRequestType<(typeof client.offices)[':officeId']['weatherstories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offices)[':officeId']['weatherstories']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficesOfficeIdWeatherstoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offices)[':officeId']['weatherstories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.offices[':officeId'].weatherstories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfficesOfficeIdWeatherstories<TError = unknown>(
  args: InferRequestType<(typeof client.offices)[':officeId']['weatherstories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offices)[':officeId']['weatherstories']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficesOfficeIdWeatherstoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offices)[':officeId']['weatherstories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.offices[':officeId'].weatherstories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOfficesOfficeIdWeatherstoriesDownloadImageIdKey(
  args: InferRequestType<
    (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
  >,
) {
  return ['offices', '/offices/:officeId/weatherstories/download/:imageId', args] as const
}

export function useGetOfficesOfficeIdWeatherstoriesDownloadImageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
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
        ? getGetOfficesOfficeIdWeatherstoriesDownloadImageIdKey(args)
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
                (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
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
          client.offices[':officeId'].weatherstories.download[':imageId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfficesOfficeIdWeatherstoriesDownloadImageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
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
        ? getGetOfficesOfficeIdWeatherstoriesDownloadImageIdKey(args)
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
                (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
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
          client.offices[':officeId'].weatherstories.download[':imageId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPointsLatitudeLongitudeKey(
  args: InferRequestType<(typeof client.points)[':latitude,{longitude}']['$get']>,
) {
  return ['points', '/points/:latitude,{longitude}', args] as const
}

export function useGetPointsLatitudeLongitude<TError = unknown>(
  args: InferRequestType<(typeof client.points)[':latitude,{longitude}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.points)[':latitude,{longitude}']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPointsLatitudeLongitudeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.points)[':latitude,{longitude}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.points[':latitude,{longitude}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPointsLatitudeLongitude<TError = unknown>(
  args: InferRequestType<(typeof client.points)[':latitude,{longitude}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.points)[':latitude,{longitude}']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPointsLatitudeLongitudeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.points)[':latitude,{longitude}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.points[':latitude,{longitude}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPointsLatitudeLongitudeRadioKey(
  args: InferRequestType<(typeof client.points)[':latitude,{longitude}']['radio']['$get']>,
) {
  return ['points', '/points/:latitude,{longitude}/radio', args] as const
}

export function useGetPointsLatitudeLongitudeRadio<TError = unknown>(
  args: InferRequestType<(typeof client.points)[':latitude,{longitude}']['radio']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.points)[':latitude,{longitude}']['radio']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPointsLatitudeLongitudeRadioKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.points)[':latitude,{longitude}']['radio']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.points[':latitude,{longitude}'].radio.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPointsLatitudeLongitudeRadio<TError = unknown>(
  args: InferRequestType<(typeof client.points)[':latitude,{longitude}']['radio']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.points)[':latitude,{longitude}']['radio']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPointsLatitudeLongitudeRadioKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.points)[':latitude,{longitude}']['radio']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.points[':latitude,{longitude}'].radio.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPointsLatitudeLongitudeStationsKey(
  args: InferRequestType<(typeof client.points)[':latitude,{longitude}']['stations']['$get']>,
) {
  return ['points', '/points/:latitude,{longitude}/stations', args] as const
}

export function useGetPointsLatitudeLongitudeStations<TError = unknown>(
  args: InferRequestType<(typeof client.points)[':latitude,{longitude}']['stations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.points)[':latitude,{longitude}']['stations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPointsLatitudeLongitudeStationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.points)[':latitude,{longitude}']['stations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.points[':latitude,{longitude}'].stations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPointsLatitudeLongitudeStations<TError = unknown>(
  args: InferRequestType<(typeof client.points)[':latitude,{longitude}']['stations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.points)[':latitude,{longitude}']['stations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPointsLatitudeLongitudeStationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.points)[':latitude,{longitude}']['stations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.points[':latitude,{longitude}'].stations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRadarServersKey(args: InferRequestType<typeof client.radar.servers.$get>) {
  return ['radar', '/radar/servers', args] as const
}

export function useGetRadarServers<TError = unknown>(
  args: InferRequestType<typeof client.radar.servers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.servers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRadarServersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.servers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radar.servers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRadarServers<TError = unknown>(
  args: InferRequestType<typeof client.radar.servers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.servers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRadarServersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.servers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radar.servers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRadarServersIdKey(
  args: InferRequestType<(typeof client.radar.servers)[':id']['$get']>,
) {
  return ['radar', '/radar/servers/:id', args] as const
}

export function useGetRadarServersId<TError = unknown>(
  args: InferRequestType<(typeof client.radar.servers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radar.servers)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRadarServersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radar.servers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radar.servers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRadarServersId<TError = unknown>(
  args: InferRequestType<(typeof client.radar.servers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radar.servers)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRadarServersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radar.servers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radar.servers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRadarSpgdsKey(args: InferRequestType<typeof client.radar.spgds.$get>) {
  return ['radar', '/radar/spgds', args] as const
}

export function useGetRadarSpgds<TError = unknown>(
  args: InferRequestType<typeof client.radar.spgds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.spgds.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRadarSpgdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.spgds.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radar.spgds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRadarSpgds<TError = unknown>(
  args: InferRequestType<typeof client.radar.spgds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.spgds.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRadarSpgdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.spgds.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radar.spgds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRadarStationsKey(args: InferRequestType<typeof client.radar.stations.$get>) {
  return ['radar', '/radar/stations', args] as const
}

export function useGetRadarStations<TError = unknown>(
  args: InferRequestType<typeof client.radar.stations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.stations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRadarStationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.stations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radar.stations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRadarStations<TError = unknown>(
  args: InferRequestType<typeof client.radar.stations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.stations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRadarStationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.stations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radar.stations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRadarStationsStationIdKey(
  args: InferRequestType<(typeof client.radar.stations)[':stationId']['$get']>,
) {
  return ['radar', '/radar/stations/:stationId', args] as const
}

export function useGetRadarStationsStationId<TError = unknown>(
  args: InferRequestType<(typeof client.radar.stations)[':stationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRadarStationsStationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radar.stations[':stationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRadarStationsStationId<TError = unknown>(
  args: InferRequestType<(typeof client.radar.stations)[':stationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRadarStationsStationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radar.stations[':stationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRadarStationsStationIdAlarmsKey(
  args: InferRequestType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>,
) {
  return ['radar', '/radar/stations/:stationId/alarms', args] as const
}

export function useGetRadarStationsStationIdAlarms<TError = unknown>(
  args: InferRequestType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRadarStationsStationIdAlarmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.radar.stations[':stationId'].alarms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRadarStationsStationIdAlarms<TError = unknown>(
  args: InferRequestType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRadarStationsStationIdAlarmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.radar.stations[':stationId'].alarms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRadarQueuesHostKey(
  args: InferRequestType<(typeof client.radar.queues)[':host']['$get']>,
) {
  return ['radar', '/radar/queues/:host', args] as const
}

export function useGetRadarQueuesHost<TError = unknown>(
  args: InferRequestType<(typeof client.radar.queues)[':host']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radar.queues)[':host']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRadarQueuesHostKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radar.queues)[':host']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radar.queues[':host'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRadarQueuesHost<TError = unknown>(
  args: InferRequestType<(typeof client.radar.queues)[':host']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radar.queues)[':host']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRadarQueuesHostKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radar.queues)[':host']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radar.queues[':host'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRadarProfilersStationIdKey(
  args: InferRequestType<(typeof client.radar.profilers)[':stationId']['$get']>,
) {
  return ['radar', '/radar/profilers/:stationId', args] as const
}

export function useGetRadarProfilersStationId<TError = unknown>(
  args: InferRequestType<(typeof client.radar.profilers)[':stationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radar.profilers)[':stationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRadarProfilersStationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radar.profilers)[':stationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radar.profilers[':stationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRadarProfilersStationId<TError = unknown>(
  args: InferRequestType<(typeof client.radar.profilers)[':stationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radar.profilers)[':stationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRadarProfilersStationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radar.profilers)[':stationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radar.profilers[':stationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRadioKey(args: InferRequestType<typeof client.radio.$get>) {
  return ['radio', '/radio', args] as const
}

export function useGetRadio<TError = unknown>(
  args: InferRequestType<typeof client.radio.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radio.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRadioKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radio.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.radio.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRadio<TError = unknown>(
  args: InferRequestType<typeof client.radio.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radio.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRadioKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radio.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.radio.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetRadioCallSignKey(
  args: InferRequestType<(typeof client.radio)[':callSign']['$get']>,
) {
  return ['radio', '/radio/:callSign', args] as const
}

export function useGetRadioCallSign<TError = unknown>(
  args: InferRequestType<(typeof client.radio)[':callSign']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radio)[':callSign']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRadioCallSignKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radio)[':callSign']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radio[':callSign'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRadioCallSign<TError = unknown>(
  args: InferRequestType<(typeof client.radio)[':callSign']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radio)[':callSign']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRadioCallSignKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radio)[':callSign']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radio[':callSign'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRadioCallSignBroadcastKey(
  args: InferRequestType<(typeof client.radio)[':callSign']['broadcast']['$get']>,
) {
  return ['radio', '/radio/:callSign/broadcast', args] as const
}

export function useGetRadioCallSignBroadcast<TError = unknown>(
  args: InferRequestType<(typeof client.radio)[':callSign']['broadcast']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radio)[':callSign']['broadcast']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRadioCallSignBroadcastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radio)[':callSign']['broadcast']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radio[':callSign'].broadcast.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRadioCallSignBroadcast<TError = unknown>(
  args: InferRequestType<(typeof client.radio)[':callSign']['broadcast']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radio)[':callSign']['broadcast']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRadioCallSignBroadcastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radio)[':callSign']['broadcast']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radio[':callSign'].broadcast.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsKey(args: InferRequestType<typeof client.products.$get>) {
  return ['products', '/products', args] as const
}

export function useGetProducts<TError = unknown>(
  args: InferRequestType<typeof client.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.products.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetProducts<TError = unknown>(
  args: InferRequestType<typeof client.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.products.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetProductsLocationsKey() {
  return ['products', '/products/locations'] as const
}

export function useGetProductsLocations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.locations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsLocationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.locations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.locations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsLocations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.locations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsLocationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.locations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.locations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsTypesKey() {
  return ['products', '/products/types'] as const
}

export function useGetProductsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsProductIdKey(
  args: InferRequestType<(typeof client.products)[':productId']['$get']>,
) {
  return ['products', '/products/:productId', args] as const
}

export function useGetProductsProductId<TError = unknown>(
  args: InferRequestType<(typeof client.products)[':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products[':productId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsProductId<TError = unknown>(
  args: InferRequestType<(typeof client.products)[':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products[':productId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsTypesTypeIdKey(
  args: InferRequestType<(typeof client.products.types)[':typeId']['$get']>,
) {
  return ['products', '/products/types/:typeId', args] as const
}

export function useGetProductsTypesTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.products.types)[':typeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.types)[':typeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsTypesTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.types)[':typeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.types[':typeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsTypesTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.products.types)[':typeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.types)[':typeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsTypesTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.types)[':typeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.types[':typeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsTypesTypeIdLocationsKey(
  args: InferRequestType<(typeof client.products.types)[':typeId']['locations']['$get']>,
) {
  return ['products', '/products/types/:typeId/locations', args] as const
}

export function useGetProductsTypesTypeIdLocations<TError = unknown>(
  args: InferRequestType<(typeof client.products.types)[':typeId']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.types)[':typeId']['locations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsTypesTypeIdLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.types)[':typeId']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.products.types[':typeId'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsTypesTypeIdLocations<TError = unknown>(
  args: InferRequestType<(typeof client.products.types)[':typeId']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.types)[':typeId']['locations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsTypesTypeIdLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.types)[':typeId']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.products.types[':typeId'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsLocationsLocationIdTypesKey(
  args: InferRequestType<(typeof client.products.locations)[':locationId']['types']['$get']>,
) {
  return ['products', '/products/locations/:locationId/types', args] as const
}

export function useGetProductsLocationsLocationIdTypes<TError = unknown>(
  args: InferRequestType<(typeof client.products.locations)[':locationId']['types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.locations)[':locationId']['types']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsLocationsLocationIdTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.locations)[':locationId']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.products.locations[':locationId'].types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsLocationsLocationIdTypes<TError = unknown>(
  args: InferRequestType<(typeof client.products.locations)[':locationId']['types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.locations)[':locationId']['types']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsLocationsLocationIdTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.locations)[':locationId']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.products.locations[':locationId'].types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsTypesTypeIdLocationsLocationIdKey(
  args: InferRequestType<
    (typeof client.products.types)[':typeId']['locations'][':locationId']['$get']
  >,
) {
  return ['products', '/products/types/:typeId/locations/:locationId', args] as const
}

export function useGetProductsTypesTypeIdLocationsLocationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.products.types)[':typeId']['locations'][':locationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.products.types)[':typeId']['locations'][':locationId']['$get']
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
        ? getGetProductsTypesTypeIdLocationsLocationIdKey(args)
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
                (typeof client.products.types)[':typeId']['locations'][':locationId']['$get']
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
          client.products.types[':typeId'].locations[':locationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsTypesTypeIdLocationsLocationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.products.types)[':typeId']['locations'][':locationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.products.types)[':typeId']['locations'][':locationId']['$get']
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
        ? getGetProductsTypesTypeIdLocationsLocationIdKey(args)
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
                (typeof client.products.types)[':typeId']['locations'][':locationId']['$get']
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
          client.products.types[':typeId'].locations[':locationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProductsTypesTypeIdLocationsLocationIdLatestKey(
  args: InferRequestType<
    (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
  >,
) {
  return ['products', '/products/types/:typeId/locations/:locationId/latest', args] as const
}

export function useGetProductsTypesTypeIdLocationsLocationIdLatest<TError = unknown>(
  args: InferRequestType<
    (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
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
        ? getGetProductsTypesTypeIdLocationsLocationIdLatestKey(args)
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
                (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
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
          client.products.types[':typeId'].locations[':locationId'].latest.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsTypesTypeIdLocationsLocationIdLatest<TError = unknown>(
  args: InferRequestType<
    (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
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
        ? getGetProductsTypesTypeIdLocationsLocationIdLatestKey(args)
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
                (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
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
          client.products.types[':typeId'].locations[':locationId'].latest.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetZonesKey(args: InferRequestType<typeof client.zones.$get>) {
  return ['zones', '/zones', args] as const
}

export function useGetZones<TError = unknown>(
  args: InferRequestType<typeof client.zones.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetZonesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.zones.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetZones<TError = unknown>(
  args: InferRequestType<typeof client.zones.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetZonesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.zones.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetZonesTypeKey(args: InferRequestType<(typeof client.zones)[':type']['$get']>) {
  return ['zones', '/zones/:type', args] as const
}

export function useGetZonesType<TError = unknown>(
  args: InferRequestType<(typeof client.zones)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetZonesTypeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.zones[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetZonesType<TError = unknown>(
  args: InferRequestType<(typeof client.zones)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetZonesTypeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.zones[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetZonesTypeZoneIdKey(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['$get']>,
) {
  return ['zones', '/zones/:type/:zoneId', args] as const
}

export function useGetZonesTypeZoneId<TError = unknown>(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetZonesTypeZoneIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.zones[':type'][':zoneId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetZonesTypeZoneId<TError = unknown>(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetZonesTypeZoneIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.zones[':type'][':zoneId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetZonesTypeZoneIdForecastKey(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>,
) {
  return ['zones', '/zones/:type/:zoneId/forecast', args] as const
}

export function useGetZonesTypeZoneIdForecast<TError = unknown>(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetZonesTypeZoneIdForecastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.zones[':type'][':zoneId'].forecast.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetZonesTypeZoneIdForecast<TError = unknown>(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetZonesTypeZoneIdForecastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.zones[':type'][':zoneId'].forecast.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetZonesTypeZoneIdRadioKey(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>,
) {
  return ['zones', '/zones/:type/:zoneId/radio', args] as const
}

export function useGetZonesTypeZoneIdRadio<TError = unknown>(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetZonesTypeZoneIdRadioKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.zones[':type'][':zoneId'].radio.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetZonesTypeZoneIdRadio<TError = unknown>(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetZonesTypeZoneIdRadioKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.zones[':type'][':zoneId'].radio.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetZonesForecastZoneIdObservationsKey(
  args: InferRequestType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>,
) {
  return ['zones', '/zones/forecast/:zoneId/observations', args] as const
}

export function useGetZonesForecastZoneIdObservations<TError = unknown>(
  args: InferRequestType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetZonesForecastZoneIdObservationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.zones.forecast[':zoneId'].observations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetZonesForecastZoneIdObservations<TError = unknown>(
  args: InferRequestType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetZonesForecastZoneIdObservationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.zones.forecast[':zoneId'].observations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetZonesForecastZoneIdStationsKey(
  args: InferRequestType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>,
) {
  return ['zones', '/zones/forecast/:zoneId/stations', args] as const
}

export function useGetZonesForecastZoneIdStations<TError = unknown>(
  args: InferRequestType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetZonesForecastZoneIdStationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.zones.forecast[':zoneId'].stations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetZonesForecastZoneIdStations<TError = unknown>(
  args: InferRequestType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetZonesForecastZoneIdStationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.zones.forecast[':zoneId'].stations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
